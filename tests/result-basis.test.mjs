// The summary explains how its range was set (frame, ancestry cut-off, any cut-off that limited it,
// mixed-ancestry background) without changing any computed value. The expected ranges below are
// the ones the deployed site showed before this explanation was added.
import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME = process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(existsSync);
const url = new URL('../index.html', import.meta.url).href;

test('summary shows frame, cut-off, limits and mixed-ancestry basis; ranges unchanged', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const txt = sel => page.$eval(sel, e => e.textContent.replace(/\s+/g, ' ').trim());
    const retype = async (id, v) => { await page.click('#' + id, { clickCount: 3 }); await page.keyboard.press('Backspace'); await page.type('#' + id, String(v)); };
    async function fill({ wrist = '7', region = 'europe', diabetes = false } = {}) {
      await page.goto(url);
      await page.select('#sex', 'male');
      await page.type('#age', '40');
      await page.type('#heightFeet', '5');
      await page.type('#heightInches', '10');
      await page.type('#weight', '180');
      await page.type('#wrist', wrist);
      if (region) await page.select('#singleRegion', region);
      if (diabetes) await page.click('.cond[value="diabetes"]');
    }
    const calc = () => page.click('#calcBtn');
    const value = () => txt('#quickRange .value');

    // 1. Baseline: nothing limited
    await fill(); await calc();
    assert.equal(await value(), '155-166 lb (70.0-75.5 kg)');
    assert.match(await txt('#basisFrame'), /Frame size: Medium, from your wrist \(height ÷ wrist = 10\.00\)/);
    assert.match(await txt('#basisCutoff'), /healthy BMI 18\.5 to 24\.9, from the WHO international cut-offs/);
    assert.match(await txt('#basisLimit'), /No cut-off limited this range/);
    assert.equal(await page.$('#basisMix'), null, 'single ancestry has no mixed-ancestry line');
    assert.equal(await page.$$eval('#rangeInputsNote', n => n.length), 1);
    assert.match(await txt('#rangeInputsNote'), /current weight updates your BMI, waist updates the risk information, and age determines eligibility and age-related notes; none of these change the range itself/);
    assert.ok(await page.$eval('#rangeBasis', e => !!e.closest('[aria-live]')), 'explanation is announced with the result');

    // Weight, age and waist edits recalculate but legitimately give the same range and basis.
    const basis = await txt('#rangeBasis');
    await retype('weight', '230'); await retype('age', '70');
    await page.click('details.optional-panel summary'); await retype('waist', '40'); await page.keyboard.press('Tab');
    assert.equal(await value(), '155-166 lb (70.0-75.5 kg)');
    assert.equal(await txt('#rangeBasis'), basis);
    assert.match(await txt('#quickRange'), /33\.0 kg\/m²|BMI/);

    // Elbow that disagrees with the wrist: both frames named; range unchanged from the engine.
    await retype('elbow', '3.3'); await page.keyboard.press('Tab');
    assert.equal(await value(), '155-174 lb (70.0-78.5 kg)');
    assert.match(await txt('#basisFrame'), /Medium from your wrist and Large from your elbow; the range covers both/);

    // 2. Large frame capped at the top of the standard band
    await fill({ wrist: '7.8' }); await calc();
    assert.equal(await value(), '155-174 lb (70.0-78.5 kg)');
    assert.match(await txt('#basisFrame'), /Frame size: Large, from your wrist/);
    assert.match(await txt('#basisLimit'), /Limited by a cut-off: the top by the BMI 24\.9 cut-off \(the formulas reach 183 lb/);

    // 3. East Asian lower cut-off
    await fill({ region: 'eastasia' }); await calc();
    assert.equal(await value(), '155-160 lb (70.0-72.5 kg)');
    assert.match(await txt('#basisCutoff'), /healthy BMI 18\.5 to 22\.9, from the lower population-specific cut-offs/);
    assert.doesNotMatch(await txt('#basisCutoff'), /diabetes cap/);
    assert.match(await txt('#basisLimit'), /the top by the BMI 22\.9 cut-off/);

    // 4. Diabetes + South Asian: cap 21.9
    await fill({ region: 'southasia', diabetes: true }); await calc();
    assert.equal(await value(), 'at most 153 lb (69.0 kg) (BMI 21.9)');
    assert.match(await txt('#basisCutoff'), /diabetes cap BMI 21\.9 applied/);
    assert.match(await txt('#basisLimit'), /Diabetes cap: the whole range was above BMI 21\.9, so the result is a ceiling at that cap/);

    // Diabetes with a standard-cut-off background: no cap, so none is reported.
    await fill({ diabetes: true }); await calc();
    assert.equal(await value(), '155-166 lb (70.0-75.5 kg)');
    assert.doesNotMatch(await txt('#rangeBasis'), /diabetes cap/i);

    // 5. Mixed 60/40 with the default (identify-with, largest share)
    await fill({ region: '' });
    await page.click('input[name="ancestryMode"][value="mixed"]');
    await page.select('#mixRegion1', 'europe'); await page.type('#mixPct1', '60');
    await page.select('#mixRegion2', 'eastasia'); await page.type('#mixPct2', '40');
    await calc();
    assert.equal(await value(), '155-166 lb (70.0-75.5 kg)');
    assert.match(await txt('#basisMix'), /Mixed ancestry: cut-offs use European \/ White \(largest share, 60%\)/);
    await page.select('#identifyWith', 'east_asian');
    assert.equal(await value(), '155-160 lb (70.0-72.5 kg)');
    assert.match(await txt('#basisMix'), /cut-offs use East Asian .*\(the background you chose, 40%\)/);
    await page.click('input[name="cutoffMode"][value="blend"]');
    assert.equal(await value(), '155-166 lb (70.0-75.5 kg)');
    assert.match(await txt('#basisMix'), /cut-offs blend European \/ White 60% \+ East Asian .* 40% by percentage/);
    assert.match(await txt('#basisCutoff'), /18\.5 to 24\.1, from the blended cut-offs/);

    // Pregnancy shows no range, so no range basis.
    await fill(); await page.select('#sex', 'female'); await page.click('#pregnant'); await calc();
    assert.equal(await page.$('#rangeBasis'), null);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
