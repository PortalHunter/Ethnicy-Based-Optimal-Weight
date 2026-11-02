import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const CHROME = process.env.CHROME_PATH || ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
const originalPreview = pathToFileURL(new URL('../optimal_body_weight_calculator-10-research-preview.html', import.meta.url).pathname).href;
const redesigned = pathToFileURL(new URL('../optimal_body_weight_calculator-11-ui-preview.html', import.meta.url).pathname).href;

async function fillCommon(page) {
  await page.select('#sex', 'male');
  await page.type('#age', '40');
  await page.select('#ancestry', 'se_asian');
  await page.type('#weight', '180');
  await page.type('#wrist', '7');
}

test('v11 is result-first, responsive, and math/citation-identical to v10', { skip: !CHROME && 'Chrome is missing' }, async (t) => {
  const browser = await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox']});
  try {
    const a=await browser.newPage(), b=await browser.newPage();
    const errors=[];
    for (const p of [a,b]) {
      p.on('pageerror',e=>errors.push(e.message));
      p.on('request',r=>{if(!r.url().startsWith('file:'))errors.push('Unexpected network request: '+r.url());});
    }
    await a.goto(originalPreview,{waitUntil:'load'});
    await b.goto(redesigned,{waitUntil:'load'});
    await t.test('summary before inputs, separate imperial fields, no existing computed values',async()=>{
      assert.equal(await b.evaluate(()=>document.querySelector('#personalSummary').compareDocumentPosition(document.querySelector('#calcForm'))&Node.DOCUMENT_POSITION_FOLLOWING),4);
      assert.equal(await b.$eval('#heightFeet',e=>getComputedStyle(e).display!=='none'),true);
      assert.equal(await b.$eval('#heightInches',e=>getComputedStyle(e).display!=='none'),true);
      assert.equal(await b.$eval('#heightMetricField',e=>e.hidden),true);
      assert.equal(await b.$eval('#results',e=>getComputedStyle(e).display==='none'),true);
      assert.equal(await b.$eval('#resultsEmpty',e=>e.hidden),false);
    });
    await fillCommon(a); await fillCommon(b);
    await a.type('#height','70');
    await b.type('#heightFeet','5'); await b.type('#heightInches','10');
    await a.click('#calcBtn');await b.click('#calcBtn');
    const text=(p,id)=>p.$eval(id,e=>e.textContent);
    await t.test('weight ranges and all cited sources remain the same',async()=>{
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
      assert.equal(await text(a,'#refList'),await text(b,'#refList'));
      const oldRefs=await a.$$eval('#refList a',a=>a.map(x=>x.href));
      const newRefs=await b.$$eval('#refList a',a=>a.map(x=>x.href));
      assert.deepEqual(newRefs,oldRefs);
      assert.equal(await b.$eval('#resultsEmpty',e=>e.hidden),true);
      assert.ok((await text(b,'#quickRange')).includes((await text(b,'#sugRange')).trim()));
      assert.equal(await b.$eval('#results',e=>getComputedStyle(e).display==='block'),true);
    });
    await t.test('height conversion preserves values on round-trip',async()=>{
      await b.select('#heightUnit','cm');
      assert.equal(await b.$eval('#height',e=>e.value),'177.8');
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
      await b.select('#heightUnit','in');
      assert.equal(await b.$eval('#heightFeet',e=>e.value),'5');
      assert.equal(await b.$eval('#heightInches',e=>e.value),'10');
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
    });
    await t.test('condition-sensitive result summary uses existing calculated buffer',async()=>{
      await a.click('.cond[value="diabetes"]');
      await b.click('.cond[value="diabetes"]');
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
      assert.equal(await text(a,'#bufRange'),await text(b,'#bufRange'));
      assert.ok((await text(b,'#quickRange')).includes((await text(b,'#bufRange')).trim()));
    });
    await t.test('invalid feet and inches cannot leave a stale result visible',async()=>{
      await b.$eval('#heightInches',e=>{e.value='13';e.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.match(await text(b,'#errors'),/inches must be/i);
      assert.equal(await b.$eval('#results',e=>getComputedStyle(e).display==='none'),true);
      assert.equal(await b.$eval('#heightInches',e=>e.getAttribute('aria-invalid')),'true');
    });
    await t.test('phone layout stays within the viewport',async()=>{
      await b.setViewport({width:390,height:844});
      assert.ok(await b.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+2));
      const cols=await b.$eval('.form-grid',e=>getComputedStyle(e).gridTemplateColumns.split(' ').length);
      assert.equal(cols,1);
    });
    assert.deepEqual(errors,[]);
    await a.close();await b.close();
  } finally {await browser.close();}
});

test('v11 pregnancy and optional measurements', { skip:!CHROME && 'Chrome missing' },async()=>{
  const browser=await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox']});
  try {
    const p=await browser.newPage();
    await p.goto(redesigned);
    await p.select('#sex','female');
    await p.select('#ancestry','european');
    await p.type('#age','30'); await p.type('#heightFeet','5'); await p.type('#heightInches','4');
    await p.type('#weight','140'); await p.type('#wrist','6');
    assert.equal(await p.$eval('#pregBox',e=>e.hidden),false);
    assert.equal(await p.$eval('.optional-panel',e=>e.open),false);
    await p.click('#pregnant');
    await p.click('#calcBtn');
    assert.equal(await p.$('#quickRange'),null);
    assert.match(await p.$eval('#results',e=>e.textContent),/No weight estimate during pregnancy/);
    assert.equal(await p.$eval('#refList',e=>e.tagName),'OL');
    await p.close();
  } finally {await browser.close();}
});
