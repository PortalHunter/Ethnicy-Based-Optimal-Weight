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
    await page.select('#sex', 'male');
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
