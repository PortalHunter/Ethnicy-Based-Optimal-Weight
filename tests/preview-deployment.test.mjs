import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const CHROME=process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(existsSync);
const SITE=new URL('../index.html',import.meta.url).href;

test('published preview loads separate JavaScript files and fully initializes', {
  skip: !CHROME && 'Chrome missing'
},async()=>{
  const browser=await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox']});
  try {
    const page=await browser.newPage();
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(SITE,{waitUntil:'load'});
    assert.equal(await page.$eval('#jsNotice',e=>e.hidden),true);
    assert.equal(await page.evaluate(()=>typeof window.EBOW),'object');
    assert.equal(await page.$eval('#singleRegion',e=>e.options.length),12);
    await page.select('#sex','male');
    await page.type('#age','35');
    await page.type('#heightFeet','5');
    await page.type('#heightInches','10');
    await page.type('#weight','170');
    await page.type('#wrist','7');
    await page.select('#singleRegion','southeastasia');
    await page.select('#singleDetail','sea_philippines');
    await page.click('#calcBtn');
    const details = await page.evaluate(() => ({
      summaryHidden: document.getElementById('personalSummary').hidden,
      errorText: document.getElementById('errors').textContent,
      errorHidden: document.getElementById('errors').hidden,
      sex: document.getElementById('sex').value,
      age: document.getElementById('age').value,
      heightFeet: document.getElementById('heightFeet').value,
      heightInches: document.getElementById('heightInches').value,
      heightUnit: document.getElementById('heightUnit').value,
      ancestry: document.getElementById('ancestry').value,
      region: document.getElementById('singleRegion').value,
      detail: document.getElementById('singleDetail').value,
      weight: document.getElementById('weight').value,
      wrist: document.getElementById('wrist').value,
      result: document.getElementById('results').textContent.slice(0,300)
    }));
    assert.equal(details.summaryHidden,false,JSON.stringify(details));
    assert.match(await page.$eval('#quickRange',e=>e.textContent),/lb/);
    assert.deepEqual(errors,[]);
  } finally {await browser.close();}
});
