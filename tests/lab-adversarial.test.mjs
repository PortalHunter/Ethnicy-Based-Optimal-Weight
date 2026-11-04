import test from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

// Synthetic, adversarial fixtures derived from Team C's 32-case research handoff.
// Only test form-supported fields. The site does NOT collect medication,
// pregnancy, symptoms, genotype or eating-disorder status; tests must not imply it does.
const CHROME = process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome','/usr/bin/chromium','/usr/bin/chromium-browser'].find(existsSync);
const url = new URL('../index.html', import.meta.url).href;
const measurement = (marker, value, flag='other', unit, fasting='unknown', otherName) =>
  ({marker, value, flag, unit, fasting, otherName});

const cases = [
  {id:'C03', name:'high LDL without other safety flags', rows:[measurement('ldl','165','high')], cards:2, suppressed:false},
  {id:'C04', name:'critical triglyceride flag', rows:[measurement('tg','1200','critical')], cards:0, suppressed:true},
  {id:'C06', name:'potassium high plus high A1c', rows:[measurement('a1c','6.8','high'),measurement('potassium','5.8','high')], cards:0, suppressed:true},
  {id:'C07', name:'high fasting glucose with unflagged A1c', rows:[measurement('glucose','126','high','mg/dL','yes'),measurement('a1c','5.6')], cards:2, suppressed:false},
  {id:'C09', name:'reported kidney eGFR low plus LDL high', rows:[measurement('ldl','165','high'),measurement('egfr','28','low')], cards:0, suppressed:true},
  {id:'C11', name:'high A1c only; no inferred hemoglobin genotype', rows:[measurement('a1c','7.2','high')], cards:2, suppressed:false, required:/ancestry alone cannot establish/i},
  {id:'C16', name:'reported potassium low plus high LDL', rows:[measurement('ldl','165','high'),measurement('potassium','3.1','low')], cards:0, suppressed:true},
  {id:'C17', name:'lab-flagged low glucose 65 plus LDL high', rows:[measurement('ldl','165','high'),measurement('glucose','65','low')], cards:0, suppressed:true, required:/laboratory flagged this glucose result low/i},
  {id:'C19', name:'severe triglycerides without a critical flag', rows:[measurement('ldl','165','high'),measurement('tg','800','other')], cards:0, suppressed:true},
  {id:'C21', name:'flagged kidney ACR with different units', rows:[measurement('a1c','6.1','high'),measurement('uacr','15','high','mg/mmol')], cards:0, suppressed:true, required:/mg\/mmol/},
  {id:'C24', name:'reported ACR high with eGFR low', rows:[measurement('uacr','80','high','mg/g'),measurement('egfr','40','low')], cards:0, suppressed:true},
  {id:'C25', name:'high TG within non-severe range', rows:[measurement('tg','180','high')], cards:2, suppressed:false},
  {id:'C26', name:'critical A1c plus unflagged glucose', rows:[measurement('a1c','12','critical'),measurement('glucose','350')], cards:0, suppressed:true},
  {id:'C28', name:'potassium high despite possible specimen issue', rows:[measurement('potassium','5.2','high')], cards:0, suppressed:true},
  {id:'C30', name:'multiple high lipid and glucose flags capped at three', rows:[measurement('a1c','6.7','high'),measurement('ldl','170','high'),measurement('tg','200','high')], cards:3, suppressed:false},
  {id:'LOW_MMOL', name:'very low glucose in mmol per liter with no flag', rows:[measurement('a1c','7','high'),measurement('glucose','2.8','other','mmol/L')], cards:0, suppressed:true},
  {id:'LOW_MG', name:'very low glucose mg/dL with no flag', rows:[measurement('ldl','160','high'),measurement('glucose','45','other','mg/dL')], cards:0, suppressed:true},
  {id:'FAST_UNKNOWN', name:'unconfirmed fasting high glucose does not select diets', rows:[measurement('glucose','210','high','mg/dL','unknown')], cards:0, suppressed:false, required:/not confirmed fasting/i},
  {id:'FAST_NO', name:'nonfasting high glucose does not select diets', rows:[measurement('glucose','210','high','mg/dL','no')], cards:0, suppressed:false},
  {id:'OTHER', name:'unsupported liver marker must not invent diet guidance', rows:[measurement('other','92','high','U/L','unknown','ALT')], cards:0, suppressed:false, required:/not yet supported/i},
  {id:'NO_FLAG', name:'unflagged A1c without independent classification', rows:[measurement('a1c','6.1')], cards:0, suppressed:false}
];

test('adversarial lab panels keep source-linked diet advice behind safety gates', {
  skip: !CHROME && 'Chrome not installed'
}, async () => {
  const browser = await puppeteer.launch({executablePath:CHROME, headless:true, args:['--no-sandbox']});
  try {
    const page = await browser.newPage();
    for (const scenario of cases) {
      await page.goto(url);
      await page.click('#labDetails > summary');
      const result = await page.evaluate((rows) => {
        const root = document.getElementById('labRows');
        while (root.querySelectorAll('.lab-entry').length < rows.length)
          document.getElementById('labAdd').click();
        const fields = Array.from(root.querySelectorAll('.lab-entry'));
        for (let i=0;i<rows.length;i++) {
          const v=rows[i], row=fields[i];
          const marker=row.querySelector('.lab-marker');
          marker.value=v.marker;
          marker.dispatchEvent(new Event('change',{bubbles:true}));
          row.querySelector('.lab-value').value=v.value;
          row.querySelector('.lab-flag').value=v.flag;
          if (v.unit) {
            const unit=row.querySelector('.lab-unit');
            if (!Array.from(unit.options).some(o=>o.value===v.unit))
              throw new Error('Test fixture invalid unit: '+v.marker+'/'+v.unit);
            unit.value=v.unit;
          }
          row.querySelector('.lab-fasting').value=v.fasting;
          if (v.marker==='other') row.querySelector('.lab-other').value=v.otherName;
        }
        document.getElementById('labForm').requestSubmit();
        const output=document.getElementById('labOutput');
        return {
          cards:output.querySelectorAll('.lab-diet-study-card').length,
          tradeoffs:output.querySelectorAll('.lab-diet-tradeoff').length,
          sourceLinks:output.querySelectorAll('a[href^="http"]').length,
          suppressText:/food-change suggestions are withheld/i.test(output.textContent),
          foodExamples:/Food-pattern examples to discuss/i.test(output.textContent),
          outputHidden:output.hidden,
          errorText:document.getElementById('labErrors').textContent,
          text:output.textContent,
          weightHidden:document.getElementById('personalSummary').hidden
        };
      },scenario.rows);
      const label=scenario.id+' '+scenario.name;
      assert.equal(result.outputHidden,false,label+' '+result.errorText);
      assert.equal(result.cards,scenario.cards,label+' cards');
      assert.equal(result.suppressText,scenario.suppressed,label+' suppression');
      if (scenario.suppressed) {
        assert.equal(result.tradeoffs,0,label+' no keto comparison');
        assert.equal(result.foodExamples,false,label+' no general diet examples');
      }
      if (scenario.cards>0) assert.ok(result.sourceLinks>=scenario.cards,label+' primary links');
      if (scenario.required) assert.match(result.text,scenario.required,label);
      assert.equal(result.weightHidden,true,label+' weight engine independent');
      assert.doesNotMatch(result.text,/diagnosed with|you have gout|you have chronic kidney disease/i,label+' non-diagnostic');
    }
  } finally {await browser.close();}
});

test('numeric validation fails closed and never interprets a malformed value', {
  skip: !CHROME && 'Chrome not installed'
}, async () => {
  const browser=await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox']});
  try{
    const page=await browser.newPage();
    for (const value of ['0','-4','abc','1e4','1,5','','100001']) {
      await page.goto(url);
      await page.click('#labDetails > summary');
      const status=await page.evaluate((value)=>{
        document.querySelector('.lab-value').value=value;
        document.querySelector('.lab-flag').value='high';
        document.getElementById('labForm').requestSubmit();
        return {
          outputHidden:document.getElementById('labOutput').hidden,
          invalid:document.querySelector('.lab-value').getAttribute('aria-invalid'),
          errorText:document.getElementById('labErrors').textContent,
          weightHidden:document.getElementById('personalSummary').hidden
        };
      },value);
      assert.equal(status.outputHidden,true,'invalid '+value);
      assert.equal(status.invalid,'true','invalid '+value);
      assert.match(status.errorText,/positive numeric value/i);
      assert.equal(status.weightHidden,true);
    }
  }finally{await browser.close();}
});
