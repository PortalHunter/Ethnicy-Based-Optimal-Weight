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
    await page.click('#labAnalyze');
    assert.equal(await page.$eval('#labOutput', e => e.hidden), false);
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /HbA1c|Hemoglobin A1c/i);
    assert.match(text, /ancestry alone cannot/i);
    assert.match(text, /vegetables|fiber/i);
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
    await rows[1].type('.lab-value', '5.8');
    await page.click('#labAnalyze');
    const text = await page.$eval('#labOutput', e => e.textContent);
    assert.match(text, /food-change suggestions are withheld/i);
    assert.match(text, /do not start potassium supplements/i);
    assert.doesNotMatch(text, /is a diagnosis/i);
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
    assert.match(await page.$eval('#labOutput', e => e.textContent), /not yet supported/i);
    assert.equal((await page.$$('#labOutput img')).length, 0);
    assert.equal((await page.$$('#labOutput svg')).length, 0);
  } finally { await browser.close(); }
});
