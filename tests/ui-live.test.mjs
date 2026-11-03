import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const CHROME = process.env.CHROME_PATH || ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
// The live site (index.html) is checked against the classic calculator, which shares the same engine.
const originalPreview = pathToFileURL(new URL('../optimal_body_weight_calculator-9.html', import.meta.url).pathname).href;
const redesigned = pathToFileURL(new URL('../index.html', import.meta.url).pathname).href;

async function fillCommon(page) {
  await page.select('#sex', 'male');
  await page.type('#age', '40');
  await page.select('#singleRegion', 'southeastasia');
  await page.type('#weight', '180');
  await page.type('#wrist', '7');
}

test('live site shows results below the form, works on phones, and matches the classic calculator\'s math and citations', { skip: !CHROME && 'Chrome is missing' }, async (t) => {
  const browser = await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox'],protocolTimeout:12000});
  try {
    const a=await browser.newPage(), b=await browser.newPage();
    const errors=[];
    for (const p of [a,b]) {
      p.on('pageerror',e=>errors.push(e.message));
      p.on('request',r=>{if(!r.url().startsWith('file:'))errors.push('Unexpected network request: '+r.url());});
    }
    await a.goto(originalPreview,{waitUntil:'load'});
    await b.goto(redesigned,{waitUntil:'load'});
    await t.test('summary after inputs, separate imperial fields, no prefilled estimate',async()=>{
      assert.equal(await b.evaluate(()=>document.querySelector('#calcForm').compareDocumentPosition(document.querySelector('#personalSummary'))&Node.DOCUMENT_POSITION_FOLLOWING),4);
      assert.equal(await b.$eval('#heightFeet',e=>getComputedStyle(e).display!=='none'),true);
      assert.equal(await b.$eval('#heightInches',e=>getComputedStyle(e).display!=='none'),true);
      assert.equal(await b.$eval('#heightMetricField',e=>e.hidden),true);
      assert.equal(await b.$eval('#results',e=>getComputedStyle(e).display==='none'),true);
      assert.equal(await b.$eval('#resultsEmpty',e=>e.hidden),true);
      assert.equal(await b.$eval('#personalSummary',e=>e.hidden),true);
    });
    await fillCommon(a);
    await fillCommon(b);

    await a.type('#height','70');
    await b.type('#heightFeet','5'); await b.type('#heightInches','10');
    await a.bringToFront();
    await a.evaluate(() => document.querySelector('#calcBtn').click());
    await b.bringToFront();
    await b.evaluate(() => { window.scrollTo(0,document.querySelector('#calcBtn').getBoundingClientRect().top+window.scrollY-120);document.querySelector('#calcBtn').click(); });
    const text=(p,id)=>p.$eval(id,e=>e.textContent);
    await t.test('weight ranges and all cited sources remain the same',async()=>{
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
      assert.equal(await text(a,'#refList'),await text(b,'#refList'));
      const oldRefs=await a.$$eval('#refList a',a=>a.map(x=>x.href));
      const newRefs=await b.$$eval('#refList a',a=>a.map(x=>x.href));
      assert.deepEqual(newRefs,oldRefs);
      assert.equal(await b.$eval('#resultsEmpty',e=>e.hidden),true);
      assert.equal(await b.$eval('#personalSummary',e=>e.hidden),false);
      assert.ok((await text(b,'#quickRange')).includes((await text(b,'#sugRange')).trim()));
      assert.equal(await b.$eval('#results',e=>getComputedStyle(e).display==='block'),true);
      assert.ok(await b.evaluate(()=>document.querySelector('#personalSummary').getBoundingClientRect().top>=document.querySelector('#calcBtn').getBoundingClientRect().bottom-2), 'Estimate should appear beneath Calculate, not above the form');
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
    await t.test('sliders sync with typed entries and display imperial plus metric readings',async()=>{
      // Dragging either slider writes the existing calculator inputs rather than bypassing validation.
      await b.$eval('#heightSlider',el=>{el.value='72';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await b.$eval('#heightFeet',el=>el.value),'6');
      assert.equal(await b.$eval('#heightInches',el=>el.value),'0');
      assert.equal(await text(b,'#heightReadoutMetric'),'182.9 cm');
      await b.$eval('#weightSlider',el=>{el.value='220';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await b.$eval('#weight',el=>el.value),'220');
      assert.equal(await text(b,'#weightReadoutImperial'),'220 lb');
      assert.equal(await text(b,'#weightReadoutMetric'),'99.8 kg');

      // Switching units and manual edits both update the same slider.
      await b.select('#heightUnit','cm');
      assert.equal(await b.$eval('#height',el=>el.value),'182.88');
      await b.select('#weightUnit','kg');
      assert.equal(await b.$eval('#weight',el=>el.value),'99.79');
      await b.$eval('#height',el=>{el.value='177.8';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await text(b,'#heightReadoutImperial'),'5 ft 10 in');
      assert.equal(await b.$eval('#heightSlider',el=>el.value),'70');
      await b.select('#heightUnit','in');
      await b.select('#weightUnit','lb');

      // A clinician typing "5 10" into the feet box with inches empty is accepted.
      await b.evaluate(()=>{
        document.querySelector('#heightFeet').value='5 10';
        document.querySelector('#heightInches').value='';
        document.querySelector('#heightFeet').dispatchEvent(new Event('change',{bubbles:true}));
      });
      assert.equal(await b.$eval('#heightFeet',el=>el.value),'5');
      assert.equal(await b.$eval('#heightInches',el=>el.value),'10');
      assert.equal(await text(b,'#heightReadoutMetric'),'177.8 cm');

      // Restore inputs so the later classic-vs-live result comparisons remain meaningful.
      await b.$eval('#weight',el=>{el.value='180';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await b.$eval('#weightSlider',el=>el.value),'180');
      assert.equal(await b.$eval('#results',el=>getComputedStyle(el).display),'block');
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
    });
    await t.test('all five slider-first cards keep exact-entry fields inside the blue card',async()=>{
      const layout = await b.evaluate(()=>{
        return ['height','weight','wrist','elbow','waist'].map(name=>{
          const slider=document.getElementById(name+'Slider');
          const input=document.getElementById(name==='height'?'heightFeet':name);
          const card=slider.closest('.measurement-slider');
          return {name, cardHasInput:card.contains(input),sliderBeforeInput:!!(slider.compareDocumentPosition(input)&Node.DOCUMENT_POSITION_FOLLOWING),isBlueCard:getComputedStyle(card).backgroundImage.includes('gradient'),unitInside:card.contains(document.getElementById(name+'Unit'))};
        });
      });
      assert.equal(layout.length,5);
      for(const entry of layout) {
        assert.equal(entry.cardHasInput,true,entry.name+' input should be inside card');
        assert.equal(entry.sliderBeforeInput,true,entry.name+' slider should be first');
        assert.equal(entry.isBlueCard,true,entry.name+' should have blue card styling');
        assert.equal(entry.unitInside,true,entry.name+' unit selector should be inside card');
      }
      assert.equal(await b.$eval('#elbow',el=>el.value),'','optional elbow must start empty');
      assert.equal(await b.$eval('#waist',el=>el.value),'','optional waist must start empty');
    });
    await t.test('approved wrist guide loads beneath wrist controls and opens at full resolution',async()=>{
      const guide = await b.$eval('#wristGuideImage',async (img)=>{
        img.loading = 'eager'; // Force the deferred asset to load in this browser check.
        await img.decode();
        const card = img.closest('.measurement-slider');
        const input = card.querySelector('#wrist');
        return {
          naturalWidth:img.naturalWidth,naturalHeight:img.naturalHeight,
          inWristCard:card.querySelector('#wristSlider')!==null,
          belowInput:!!(input.compareDocumentPosition(img)&Node.DOCUMENT_POSITION_FOLLOWING),
          alt:img.alt,cssWidth:getComputedStyle(img).width,
          linkTarget:img.closest('a')?.target,
          href:img.closest('a')?.getAttribute('href'),
          source:img.getAttribute('src')
        };
      });
      assert.equal(guide.naturalWidth,1448);
      assert.equal(guide.naturalHeight,1086);
      assert.equal(guide.inWristCard,true);
      assert.equal(guide.belowInput,true);
      assert.match(guide.alt,/narrowest part of your wrist/);
      assert.equal(guide.linkTarget,'_blank');
      assert.equal(guide.href,'assets/wrist-measurement-guide.png');
      assert.equal(guide.source,'assets/wrist-measurement-guide.png');
      assert.ok(parseFloat(guide.cssWidth)>0);
    });
    await t.test('wrist slider updates both units without changing the math',async()=>{
      await b.$eval('#wristSlider',el=>{el.value='7.5';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await b.$eval('#wrist',el=>el.value),'7.5');
      assert.equal(await text(b,'#wristReadoutMetric'),'19.1 cm');
      await b.select('#wristUnit','cm');
      assert.equal(await b.$eval('#wrist',el=>el.value),'19.05');
      await b.$eval('#wrist',el=>{el.value='17.78';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await text(b,'#wristReadoutImperial'),'7 in');
      await b.select('#wristUnit','in');
      assert.equal(await b.$eval('#wrist',el=>el.value),'7');
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
    });
    await t.test('optional elbow and waist sliders enter, convert and clear values',async()=>{
      // Merely opening the optional panel never silently supplies a measurement.
      await b.$eval('.optional-panel',el=>{el.open=true;});
      assert.equal(await b.$eval('#elbow',el=>el.value),'');
      assert.equal(await b.$eval('#waist',el=>el.value),'');
      await b.$eval('#elbowSlider',el=>{el.value='2.8';el.dispatchEvent(new Event('input',{bubbles:true}));});
      await b.$eval('#waistSlider',el=>{el.value='34';el.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.equal(await b.$eval('#elbow',el=>el.value),'2.8');
      assert.equal(await b.$eval('#waist',el=>el.value),'34');
      assert.equal(await text(b,'#elbowReadoutMetric'),'7.1 cm');
      assert.equal(await text(b,'#waistReadoutMetric'),'86.4 cm');
      await b.select('#waistUnit','cm');
      assert.equal(await b.$eval('#waist',el=>el.value),'86.36');
      await b.click('#elbowClear');
      await b.click('#waistClear');
      assert.equal(await b.$eval('#elbow',el=>el.value),'');
      assert.equal(await b.$eval('#waist',el=>el.value),'');
      assert.equal(await text(b,'#elbowReadoutMetric'),'—');
      assert.equal(await text(b,'#waistReadoutImperial'),'—');
      assert.equal(await b.$eval('#results',el=>getComputedStyle(el).display),'block');
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
      await b.$eval('.optional-panel',el=>{el.open=false;});
    });
    await t.test('condition-sensitive result summary uses existing calculated buffer',async()=>{
      await a.bringToFront();
      await a.evaluate(() => document.querySelector('.cond[value="diabetes"]').click());
      await b.bringToFront();
      await b.evaluate(() => document.querySelector('.cond[value="diabetes"]').click());
      assert.equal(await text(a,'#sugRange'),await text(b,'#sugRange'));
      assert.equal(await text(a,'#bufRange'),await text(b,'#bufRange'));
      assert.ok((await text(b,'#quickRange')).includes((await text(b,'#bufRange')).trim()));
    });
    await t.test('invalid feet and inches cannot leave a stale result visible',async()=>{
      await b.$eval('#heightInches',e=>{e.value='13';e.dispatchEvent(new Event('input',{bubbles:true}));});
      assert.match(await text(b,'#errors'),/inches must be/i);
      assert.equal(await b.$eval('#results',e=>getComputedStyle(e).display==='none'),true);
      assert.equal(await b.$eval('#personalSummary',e=>e.hidden),true);
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

test('live site: pregnancy and optional measurements', { skip:!CHROME && 'Chrome missing' },async()=>{
  const browser=await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox']});
  try {
    const p=await browser.newPage();
    await p.goto(redesigned);
    await p.select('#sex','female');
    await p.select('#singleRegion','europe');
    await p.type('#age','30'); await p.type('#heightFeet','5'); await p.type('#heightInches','4');
    await p.type('#weight','140'); await p.type('#wrist','6');
    assert.equal(await p.$eval('#pregBox',e=>e.hidden),false);
    assert.equal(await p.$eval('.optional-panel',e=>e.open),false);
    // The form uses smooth scrolling; stabilize the viewport before a pointer click
    // so Chrome cannot hit the previous location while scrolling back upward.
    await p.$eval('#pregnant',el=>el.scrollIntoView({behavior:'instant',block:'center'}));
    await p.click('#pregnant');
    assert.equal(await p.$eval('#pregnant',e=>e.checked),true,'checkbox must accept browser click');
    await p.click('#calcBtn');
    assert.equal(await p.$eval('#pregnant',e=>e.checked),true,'checkbox must remain checked on submit');
    assert.equal(await p.$('#quickRange'),null);
    assert.match(await p.$eval('#results',e=>e.textContent),/No weight estimate during pregnancy/);
    assert.equal(await p.$eval('#personalSummary',e=>e.hidden),false);
    assert.equal(await p.$eval('#refList',e=>e.tagName),'OL');
    await p.close();
  } finally {await browser.close();}
});
