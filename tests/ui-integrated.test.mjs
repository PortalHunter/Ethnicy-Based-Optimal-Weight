import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME = process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(existsSync);
const url = new URL('../index.html', import.meta.url).href;

test('integrated site: ancestry selection, research, mixed ancestry and readable range', {
  skip: !CHROME && 'Chrome is missing'
}, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true,
    args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url);
    assert.equal(await page.$eval('#jsNotice',e=>e.hidden), true);
    assert.equal(await page.$eval('#personalSummary',e=>e.hidden), true);
    assert.equal(await page.$eval('#singleDetail',e=>e.disabled), true);
    await page.select('#sex','female');
    await page.type('#age','38');
    await page.type('#heightFeet','5');
    await page.type('#heightInches','5');
    await page.type('#weight','155');
    await page.type('#wrist','6.3');
    await page.select('#singleRegion','southeastasia');
    assert.equal(await page.$eval('#ancestry',e=>e.value), 'se_asian');
    await page.select('#singleDetail','sea_philippines');
    assert.equal(await page.$eval('#ancestry',e=>e.value), 'sea_philippines');
    await page.click('#calcBtn');
    assert.equal(await page.$eval('#personalSummary',e=>e.hidden), false);
    assert.match(await page.$eval('#quickRange',e=>e.textContent), /lb|kg/);
    assert.match(await page.$eval('#results',e=>e.textContent), /Filipino/);
    assert.match(await page.$eval('#results',e=>e.textContent), /Population epidemiology/);
    assert.ok(await page.$eval('#refList',e=>[...e.querySelectorAll('a')].some(a=>a.href.includes('cdc.gov'))));
    const originalRange=await page.$eval('#sugRange',e=>e.textContent);
    await page.select('#singleDetail','');
    assert.equal(await page.$eval('#sugRange',e=>e.textContent),originalRange,
      'Subgroup selection must not change the weight range');
    await page.click('input[name="ancestryMode"][value="mixed"]');
    await page.select('#mixRegion1','europe');
    await page.select('#mixDetail1','eu_scandi');
    await page.type('#mixPct1','40');
    await page.select('#mixRegion2','europe');
    await page.select('#mixDetail2','eu_medit');
    await page.type('#mixPct2','60');
    await page.click('#calcBtn');
    assert.equal(await page.$eval('#personalSummary',e=>e.hidden),false);
    assert.match(await page.$eval('#results',e=>e.textContent), /Scandinavian/);
    assert.match(await page.$eval('#results',e=>e.textContent), /Mediterranean/);
    assert.ok(await page.$eval('#mixTotal',e=>e.textContent.includes('100%')));
    await page.select('#heritageProfile','frenchcanadian');
    assert.match(await page.$eval('#results',e=>e.textContent), /French Canadians|familial hypercholesterolemia/);
    assert.deepEqual(errors,[]);
    await page.close();
  } finally { await browser.close(); }
});
