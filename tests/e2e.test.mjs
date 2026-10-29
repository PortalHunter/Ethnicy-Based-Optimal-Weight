// Browser test: drives the real page in headless Chrome.
import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';
import { HTML_PATH } from './load-core.mjs';

const CHROME = process.env.CHROME_PATH || ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);

test('page behaviour in a real browser', { skip: !CHROME && 'no Chrome found (set CHROME_PATH)' }, async (t) => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const problems = [];
  page.on('pageerror', (e) => problems.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') problems.push(m.text()); });
  page.on('request', (r) => { if (!r.url().startsWith('file:')) problems.push('external request: ' + r.url()); });
  await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: 'load' });

  // Clears the field the way a user would (select all + Backspace, which fires 'input'), then types.
  const type = async (sel, val) => {
    await page.click(sel, { clickCount: 3 });
    if (await page.$eval(sel, (el) => el.value !== '')) await page.keyboard.press('Backspace');
    if (val !== '') await page.type(sel, val);
  };
  const text = () => page.$eval('#results', (el) => el.style.display === 'none' ? '' : el.innerText);
  const bmiShown = async () => { const m = (await text()).match(/Current BMI:\s*([\d.]+)/); return m ? Number(m[1]) : null; };

  await t.test('fields start empty and nothing leaks into globals but EBOW', async () => {
    for (const id of ['height', 'weight', 'wrist', 'elbow', 'waist']) assert.equal(await page.$eval('#' + id, (e) => e.value), '');
    assert.equal(await page.$eval('#sex', (e) => e.value), '');
    assert.equal(await page.$eval('#ancestry', (e) => e.value), '');
    assert.equal(await page.$eval('#jsNotice', (e) => e.hidden && getComputedStyle(e).display === 'none'), true, 'script-failure notice hidden after init');
    const leaked = await page.evaluate(() => ['calculate', 'run', 'render', 'drawChart', 'toCm', 'getFoodRecs'].filter((k) => k in window));
    assert.deepEqual(leaked, []);
    assert.equal(typeof (await page.evaluate(() => typeof window.EBOW)), 'string');
  });

  await t.test('empty submit shows inline errors, no results', async () => {
    await page.click('#calcBtn');
    assert.equal(await page.$eval('#errors', (e) => e.hidden), false);
    assert.match(await page.$eval('#errors', (e) => e.innerText), /Height is required/);
    assert.equal(await text(), '');
  });

  await t.test('valid input renders results with correct BMI and no NaN', async () => {
    await page.select('#sex', 'male'); await page.select('#ancestry', 'european');
    await type('#height', '70'); await type('#weight', '180'); await type('#wrist', '7');
    await page.click('#calcBtn');
    const bmi = 180 * 0.45359237 / (1.778 ** 2);
    assert.equal(await bmiShown(), Math.round(bmi * 10) / 10);
    const html = await page.$eval('#results', (e) => e.innerHTML);
    assert.ok(!/NaN|undefined|Infinity/.test(html), 'no NaN/undefined in output');
    assert.ok(await page.$('#chartBox svg'), 'chart drawn');
    assert.equal(await page.$eval('#errors', (e) => e.hidden), true);
  });

  await t.test('editing weight recalculates live', async () => {
    await type('#weight', '200');
    assert.equal(await bmiShown(), Math.round(200 * 0.45359237 / 1.778 ** 2 * 10) / 10);
  });

  await t.test('switching units converts the typed value; results unchanged', async () => {
    const before = await bmiShown();
    await page.select('#heightUnit', 'cm');
    assert.equal(await page.$eval('#height', (e) => e.value), '177.8');
    await page.select('#weightUnit', 'kg');
    assert.equal(await page.$eval('#weight', (e) => e.value), '90.72');
    assert.equal(await bmiShown(), before);
    assert.match(await text(), /kg \(\d+-\d+ lb\)/, 'results shown kg-first after switching');
    await page.select('#heightUnit', 'in'); await page.select('#weightUnit', 'lb');
    assert.equal(await page.$eval('#height', (e) => e.value), '70');
    assert.equal(await page.$eval('#weight', (e) => e.value), '200');
  });

  await t.test('adding and removing elbow breadth updates frame output', async () => {
    await type('#elbow', '3.2');
    assert.match(await text(), /Frame size \(elbow\):\s*Large/);
    assert.match(await text(), /disagree/);
    await type('#elbow', '');
    assert.doesNotMatch(await text(), /Frame size \(elbow\)/);
  });

  await t.test('invalid input clears results (no stale numbers), fixing it restores them', async () => {
    await type('#weight', '-5');
    assert.equal(await text(), '');
    assert.match(await page.$eval('#errors', (e) => e.innerText), /greater than zero/);
    await type('#weight', 'abc');
    assert.equal(await text(), '');
    await type('#weight', '180');
    assert.ok(await bmiShown());
  });

  await t.test('condition checkbox adds a condition-weighted range; unticking removes it', async () => {
    await page.click('.cond[value="diabetes"]');
    assert.match(await text(), /Condition-weighted range/);
    await page.click('.cond[value="diabetes"]');
    assert.doesNotMatch(await text(), /Condition-weighted range/);
  });

  await t.test('mixed ancestry: totals are validated and blend updates live', async () => {
    await page.click('input[name="ancestryMode"][value="mixed"]');
    assert.equal(await text(), '', 'no makeup entered yet -> error, no stale results');
    await page.select('#mixAnc1', 'european'); await type('#mixPct1', '50');
    await page.select('#mixAnc2', 'east_asian'); await type('#mixPct2', '40');
    assert.match(await page.$eval('#errors', (e) => e.innerText), /add up to 90%/);
    await type('#mixPct2', '50');
    assert.match(await text(), /overweight cut-off is weighted to BMI 24\b/);
    await type('#mixPct1', '75'); await type('#mixPct2', '25');
    assert.match(await text(), /weighted to BMI 24\.5/);
    assert.match(await page.$eval('#mixTotal', (e) => e.innerText), /100%/);
    await page.click('input[name="ancestryMode"][value="single"]');
    assert.doesNotMatch(await text(), /weighted to BMI/);
  });

  await t.test('chart picker redraws with another ancestry', async () => {
    const before = await page.$eval('#chartBox', (e) => e.innerHTML);
    await page.select('#chartAncestry', 'south_asian');
    const after = await page.$eval('#chartBox', (e) => e.innerHTML);
    assert.notEqual(before, after);
    assert.match(after, /South Asian/);
    const rows = await page.$$eval('#chartBox details tr', (r) => r.length - 1);
    assert.ok(rows >= 10, '0.1 in table rows');
  });

  await t.test('no page errors and no external requests', async () => {
    assert.deepEqual(problems, []);
  });

  await browser.close();
});

async function freshPage(browser, problems) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 740 });          // phone-sized, so "in viewport" is meaningful
  page.on('pageerror', (e) => problems.push(e.message));
  await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: 'load' });
  return page;
}
const inViewport = (page, sel) => page.$eval(sel, (el) => { const r = el.getBoundingClientRect(); return !el.hidden && r.height > 0 && r.top >= 0 && r.bottom <= innerHeight; });
const resultsText = (page) => page.$eval('#results', (el) => el.style.display === 'none' ? '' : el.innerText);

test('Brian-style inputs: click Calculate and results appear', { skip: !CHROME && 'no Chrome' }, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const problems = [];
  const inputs = [
    { height: '5\'10"', weight: '180 lbs', wrist: '7', elbow: '' },
    { height: '5 ft 10 in', weight: '180', wrist: '6,8', elbow: '2.75' },
    { height: '5-6', weight: '140', wrist: '6.5 in', elbow: '' },
    { height: '178cm', weight: '82 kg', wrist: '17.5cm', elbow: '' },
  ];
  for (const inp of inputs) {
    const page = await freshPage(browser, problems);
    await page.select('#sex', 'male'); await page.select('#ancestry', 'south_asian');
    for (const k of ['height', 'weight', 'wrist', 'elbow']) if (inp[k]) await page.type('#' + k, inp[k]);
    await page.click('#calcBtn');
    const txt = await resultsText(page);
    assert.match(txt, /Current BMI: \d+\.\d/, JSON.stringify(inp) + ' -> ' + (await page.$eval('#errors', (e) => e.innerText)));
    assert.ok(!/NaN|undefined/.test(txt));
    await page.close();
  }
  // unit auto-switch is shown and the selector follows the typed unit
  const page = await freshPage(browser, problems);
  await page.select('#sex', 'female'); await page.select('#ancestry', 'european');
  await page.type('#height', '165cm'); await page.type('#weight', '132'); await page.type('#wrist', '15 cm');
  await page.click('#calcBtn');
  assert.equal(await page.$eval('#heightUnit', (e) => e.value), 'cm');
  assert.equal(await page.$eval('#wristUnit', (e) => e.value), 'cm');
  assert.match(await resultsText(page), /unit was switched to cm/);
  assert.equal(await page.$eval('#weightUnit', (e) => e.value), 'lb', 'untouched selector stays');
  await browser.close();
  assert.deepEqual(problems, []);
});

test('errors are impossible to miss', { skip: !CHROME && 'no Chrome' }, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const problems = [];
  const page = await freshPage(browser, problems);
  // blank sex (everything else filled)
  await page.select('#ancestry', 'european');
  await page.type('#height', '5\'10"'); await page.type('#weight', '180 lbs'); await page.type('#wrist', '7');
  await page.evaluate(() => scrollTo(0, 0));
  await page.click('#calcBtn');
  await new Promise((r) => setTimeout(r, 300));
  assert.match(await page.$eval('#errors', (e) => e.innerText), /choose Sex/);
  assert.equal(await inViewport(page, '#errors'), true, 'error box scrolled into view');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'errors', 'error box focused');
  assert.equal(await page.$eval('#sex', (e) => e.getAttribute('aria-invalid')), 'true');
  assert.equal(await page.$eval('#sex', (e) => getComputedStyle(e).borderTopColor), 'rgb(221, 0, 0)', 'red border');
  assert.equal(await page.$eval('#height', (e) => e.getAttribute('aria-invalid')), null, 'valid fields not flagged');
  // error box sits right above the button
  const gap = await page.evaluate(() => document.getElementById('calcBtn').getBoundingClientRect().top - document.getElementById('errors').getBoundingClientRect().bottom);
  assert.ok(gap >= 0 && gap < 40, 'error box directly above button, gap ' + gap);
  assert.equal(await resultsText(page), '');
  // blank ancestry
  await page.select('#sex', 'male'); await page.select('#ancestry', '');
  await page.click('#calcBtn');
  assert.match(await page.$eval('#errors', (e) => e.innerText), /choose an ancestry/);
  assert.equal(await page.$eval('#ancestry', (e) => e.getAttribute('aria-invalid')), 'true');
  // fix it: highlight clears, results appear
  await page.select('#ancestry', 'european');
  await page.click('#calcBtn');
  assert.match(await resultsText(page), /Current BMI/);
  assert.equal(await page.$eval('#errors', (e) => e.hidden), true);
  assert.equal(await page.$$eval('[aria-invalid="true"]', (els) => els.length), 0);
  await browser.close();
  assert.deepEqual(problems, []);
});

test('script failure is visible, not silent', { skip: !CHROME && 'no Chrome' }, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  // 1) JavaScript disabled: the notice stays visible
  let page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.goto(pathToFileURL(HTML_PATH).href);
  assert.equal(await page.$eval('#jsNotice', (e) => getComputedStyle(e).display !== 'none'), true);
  await page.close();
  // 2) A runtime error inside the calculation shows a plain message in the results area
  page = await browser.newPage();
  await page.goto(pathToFileURL(HTML_PATH).href);
  await page.evaluate(() => { window.EBOW.calculate = function () { throw new Error('boom'); }; });
  await page.select('#sex', 'male'); await page.select('#ancestry', 'european');
  await page.type('#height', '70'); await page.type('#weight', '180'); await page.type('#wrist', '7');
  await page.click('#calcBtn');
  assert.match(await resultsText(page), /calculator hit an error.*boom/);
  // 3) An uncaught error elsewhere is also reported
  await page.evaluate(() => setTimeout(() => { throw new Error('later'); }, 0));
  await new Promise((r) => setTimeout(r, 100));
  assert.match(await resultsText(page), /calculator hit an error/); // Chrome masks the message of page-injected scripts as "Script error."
  await browser.close();
});
