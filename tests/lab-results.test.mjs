import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME = process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
const url = new URL('../index.html', import.meta.url).href;

async function openPage(browser) {
  const page = await browser.newPage();
  await page.goto(url);
  await page.click('#labDetails > summary');
  return page;
}

test('lab form: local high A1c produces sourced educational note without calculating weight', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    const pageErrors = [];
    page.on('pageerror', e => pageErrors.push(e.message));
    assert.equal(await page.$eval('#personalSummary', e => e.hidden), true);
    await page.type('.lab-value', '6.1');
    await page.select('.lab-flag', 'high');
    await page.click('#labAnalyze');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), false);
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /HbA1c|Hemoglobin A1c/i);
    assert.match(text, /ancestry alone cannot/i);
    assert.match(text, /vegetables|fiber/i);
    assert.match(text, /Food-pattern examples to discuss/i);
    assert.match(text, /For your clinician/i);
    assert.match(text, /other tests were not provided/i);
    assert.equal(await page.$eval('#personalSummary', e => e.hidden), true);
    assert.equal(pageErrors.length, 0, pageErrors.join(' | '));
  } finally { await browser.close(); }
});

test('lab form: potassium suspends nutritional suggestions, explicit unflagged context is not assumed', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    await page.type('.lab-value', '6.1');
    await page.click('#labAdd');
    const rows = await page.$$('#labRows .lab-entry');
    assert.equal(rows.length, 2);
    await rows[1].$eval('.lab-marker', el => { el.value = 'potassium'; el.dispatchEvent(new Event('change', {bubbles:true})); });
    const potassiumValue = await rows[1].$('.lab-value');
    await potassiumValue.type('5.8');
    await page.click('#labAnalyze');
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /food-change suggestions are withheld/i);
    assert.match(text, /do not start potassium supplements/i);
    await page.click('#labOtherUnflagged');
    await page.click('#labAnalyze');
    assert.match(await page.$eval('#labOutput', e => e.textContent), /unentered values remain unknown/i);
  } finally { await browser.close(); }
});

test('lab form: invalid values and critical lab flags are handled safely', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    await page.type('.lab-value', '-3');
    await page.click('#labAnalyze');
    assert.equal(await page.$eval('#labErrors', e => e.hidden), false);
    assert.equal(await page.$eval('#labOutput', e => e.hidden), true);
    await page.$eval('.lab-value', e => { e.value = '6.1'; e.dispatchEvent(new Event('input', {bubbles:true})); });
    await page.select('.lab-flag', 'critical');
    await page.click('#labAnalyze');
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /contact the reporting clinician or laboratory immediately/i);
    assert.doesNotMatch(text, /replacing sugar-sweetened|emphasize vegetables/i);
    await page.click('#labClear');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), true);
    assert.equal((await page.$$('#labRows .lab-entry')).length, 1);
  } finally { await browser.close(); }
});

test('lab form: unknown test text is not interpreted or injected into DOM', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    await page.select('.lab-marker', 'other');
    await page.type('.lab-other', '<img src=x onerror=alert(1)>');
    await page.type('.lab-value', '15');
    await page.type('.lab-range', '<svg onload=alert(1)>');
    await page.click('#labAnalyze');
    const diagnostic = await page.evaluate(() => ({
      marker: document.querySelector('.lab-marker').value,
      measured: document.querySelector('.lab-value').value,
      testNameEntered: Boolean(document.querySelector('.lab-other').value),
      errors: document.getElementById('labErrors').textContent,
      hidden: document.getElementById('labOutput').hidden
    }));
    assert.equal(diagnostic.hidden, false, JSON.stringify(diagnostic));
    assert.match(await page.$eval('#labOutput', e => e.textContent), /not yet supported/i);
    assert.equal((await page.$$('#labOutput img')).length, 0);
    assert.equal((await page.$$('#labOutput svg')).length, 0);
  } finally { await browser.close(); }
});

test('lab form: changing the remainder-of-panel self-report invalidates stale notes', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    await page.type('.lab-value', '6.1');
    await page.click('#labAnalyze');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), false);
    assert.match(await page.$eval('#labOutput', e => e.textContent), /other tests were not provided/i);
    await page.click('#labOtherUnflagged');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), true);
    await page.click('#labAnalyze');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), false);
    assert.match(await page.$eval('#labOutput', e => e.textContent), /unentered values remain unknown/i);
    await page.click('#labOtherUnflagged');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), true);
  } finally { await browser.close(); }
});


test('lab form: unflagged values never imply an abnormal result or diet prescription', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    assert.equal(await page.$eval('.lab-flag', e => e.value), 'other');
    await page.type('.lab-value', '6.1');
    await page.click('#labAnalyze');
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /not independently verify the lab flag or infer normality/i);
    assert.match(text, /For your clinician/i);
    assert.doesNotMatch(text, /Food-pattern examples to discuss/i);
    assert.match(text, /Other \/ unsure flag|Not flagged \/ unsure/i);
  } finally { await browser.close(); }
});

test('lab form: eGFR and urine ACR are context-only; abnormal kidney flags suppress general diet tips', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    await page.type('.lab-value', '6.1');
    await page.select('.lab-flag', 'high');
    await page.click('#labAdd');
    const rows = await page.$$('#labRows .lab-entry');
    await rows[1].$eval('.lab-marker', el => { el.value = 'egfr'; el.dispatchEvent(new Event('change', { bubbles: true })); });
    await rows[1].$('.lab-value').then(el => el.type('46'));
    await rows[1].$eval('.lab-flag', el => { el.value = 'low'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.click('#labAnalyze');
    let text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /eGFR is an estimate of kidney filtration/i);
    assert.match(text, /urine albumin/i);
    assert.match(text, /race factor/i);
    assert.match(text, /food-change suggestions are withheld/i);
    assert.doesNotMatch(text, /Food-pattern examples to discuss/i);
    assert.equal(await page.$eval('#labOutput a[href*="kint.2023.10.016"]', el => el.tagName), 'A');
    await rows[1].$eval('.lab-marker', el => { el.value = 'uacr'; el.dispatchEvent(new Event('change', { bubbles: true })); });
    await rows[1].$('.lab-value').then(el => el.evaluate(input => { input.value = '50'; input.dispatchEvent(new Event('input', { bubbles: true })); }));
    await page.click('#labAnalyze');
    text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /Urine albumin-to-creatinine ratio/i);
    assert.match(text, /confirming an abnormal urine ACR/i);
    assert.match(text, /No result changes the calculator/i);
  } finally { await browser.close(); }
});

test('lab form: low glucose numeric safety caution takes precedence over unrelated food advice', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  try {
    const page = await openPage(browser);
    await page.select('.lab-marker', 'glucose');
    await page.type('.lab-value', '48');
    await page.select('.lab-flag', 'low');
    await page.click('#labAnalyze');
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /clinically significant low blood sugar/i);
    assert.match(text, /food-change suggestions are withheld/i);
    assert.doesNotMatch(text, /Food-pattern examples to discuss/i);
  } finally { await browser.close(); }
});
