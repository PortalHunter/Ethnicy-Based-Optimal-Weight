// Seeded adversarial QA: the live calculation engine plus a real Chromium DOM.
// Run via npm test --prefix tests; makes failures repeatable without any health-data uploads.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';
import { loadCore } from './load-core.mjs';

const { E } = loadCore();
const CHROME = process.env.CHROME_PATH ||
  ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync);
const SITE = pathToFileURL(new URL('../index.html', import.meta.url).pathname).href;
const LB = 0.45359237;
const IN = 2.54;

// Deterministic pseudorandom input distribution; report a seed on failure.
let seed = 0x5eed2303;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 0x100000000; }
function number(min, max) { return min + (max - min) * random(); }
function pick(xs) { return xs[Math.floor(random() * xs.length)]; }
const ancestryKeys = Object.keys(E.ANCESTRIES);
const conditions = ['diabetes', 'hypertension', 'high_chol', 'gout', 'lactose', 'celiac', 'hemochromatosis'];

function baseline(extra = {}) {
  return { sex: 'female', age: '40', pregnant: false,
    height: '170', heightUnit: 'cm', weight: '80', weightUnit: 'kg',
    wrist: '16', wristUnit: 'cm', elbow: '', elbowUnit: 'cm', waist: '', waistUnit: 'cm',
    ancestryMode: 'single', ancestry: 'european', makeup: [], cutoffMode: 'identify',
    identifyWith: '', conditions: [], ...extra };
}
function finiteTree(v, path='root') {
  if (typeof v === 'number') assert.ok(Number.isFinite(v), path+' must be finite: '+v);
  else if (v && typeof v === 'object') {
    for (const key of Object.keys(v)) finiteTree(v[key], path+'.'+key);
  }
}
function randomValid() {
  const h = number(122, 229), w = number(31, 290);
  const wrist = Math.max(10, Math.min(25, h / number(9, 11)));
  const waist = Math.max(41, Math.min(199, h * number(0.4, 0.9)));
  const sex = pick(['male', 'female']);
  const mixed = random() < 0.65;
  let ancestry = pick(ancestryKeys), makeup=[], identifyWith='';
  if (mixed) {
    const keys = [...ancestryKeys].sort(() => random() - .5).slice(0,3);
    const a = Math.floor(number(1,89)), b = Math.floor(number(1,100-a)), c = 100-a-b;
    makeup=keys.map((key,i)=>({ ancestry:key, pct:String([a,b,c][i]) }));
    identifyWith = random() < .5 ? pick(keys) : '';
  }
  return baseline({
    sex, age: String(Math.floor(number(18,121))),
    pregnant: sex === 'female' && random() < .05,
    height: h.toFixed(3), weight: w.toFixed(3), wrist: wrist.toFixed(3),
    elbow: random() < .5 ? number(4.05,9.95).toFixed(3) : '',
    waist: random() < .5 ? waist.toFixed(3) : '',
    ancestryMode: mixed?'mixed':'single', ancestry, makeup, identifyWith,
    cutoffMode: pick(['blend','identify']),
    conditions: conditions.filter(()=>random()<.25)
  });
}

test('seeded valid input sweep: 3,000 ancestry/sex/frame/condition combinations have safe ranges', () => {
  for(let i=0;i<3000;i++) {
    const raw = randomValid();
    const v = E.validate(raw);
    assert.equal(v.ok,true,'Case '+i+' seed '+seed+' '+JSON.stringify({raw,errors:v.errors}));
    const r = E.calculate(v.values);
    finiteTree(r, 'case '+i);
    if (v.values.pregnant) {
      assert.equal(r.noRange,'pregnancy','Pregnancy should not receive a weight target');
      assert.ok(!r.suggested,'Pregnancy should not have a suggested range');
    } else {
      assert.ok(r.band.lowKg>0 && r.band.highKg>r.band.lowKg,'Invalid healthy band case '+i);
      assert.ok(r.suggested.lowKg<=r.suggested.highKg,'Reversed suggested range case '+i);
      assert.ok(r.suggested.lowKg>=r.band.lowKg-1e-8,'Suggested lower bound outside band case '+i);
      assert.ok(r.suggested.highKg<=r.band.highKg+1e-8,'Suggested upper bound outside band case '+i);
      assert.ok(Math.abs(r.bmi - v.values.weightKg / (v.values.heightCm/100)**2)<1e-9);
    }
  }
});

test('1,200 metric/imperial roundtrips preserve validated physiological measurements',()=>{
  for(let i=0;i<1200;i++) {
    const raw = randomValid();
    const first = E.validate(raw);
    assert.equal(first.ok,true);
    const inUnits=baseline({
      ...raw,
      height: (first.values.heightCm/IN).toFixed(7), heightUnit:'in',
      weight: (first.values.weightKg/LB).toFixed(7), weightUnit:'lb',
      wrist: (first.values.wristCm/IN).toFixed(7), wristUnit:'in',
      elbow: first.values.elbowCm ? (first.values.elbowCm/IN).toFixed(7):'', elbowUnit:'in',
      waist: first.values.waistCm ? (first.values.waistCm/IN).toFixed(7):'', waistUnit:'in'
    });
    const second=E.validate(inUnits);
    assert.equal(second.ok,true,JSON.stringify(second.errors));
    for(const key of ['heightCm','weightKg','wristCm','elbowCm','waistCm']) {
      if(first.values[key]===null) assert.equal(second.values[key],null);
      else assert.ok(Math.abs(first.values[key]-second.values[key])<0.000002,key+' roundtrip');
    }
    const a=E.calculate(first.values),b=E.calculate(second.values);
    if (!first.values.pregnant) {
      assert.ok(Math.abs(a.suggested.lowKg-b.suggested.lowKg)<.001);
      assert.ok(Math.abs(a.suggested.highKg-b.suggested.highKg)<.001);
    }
  }
});

test('malformed measurements are rejected without NaN, exceptions or unsafe output',()=>{
  const tokens=['NaN','Infinity','-Infinity','1e999','-','--5','1/2','0x10','1.2.3','1,2,3',
    'six','null','undefined','[]','{}','6 cm lb','<img src=x onerror=alert(1)>',
    '<script>alert(1)</script>','javascript:alert(1)','11; DROP TABLE x','∞','€35','5_000',
    '12%','6 ft 13 in','5 1/2','1 + 2','12abc','1e+','0/0','\u200b'];
  for(const field of ['height','weight','wrist','elbow','waist']) {
    for(const bad of tokens) {
      const raw=baseline({[field]:bad});
      const result=E.validate(raw);
      assert.equal(result.ok,false,field+' unexpectedly accepted '+JSON.stringify(bad));
      assert.ok(result.invalid.includes(field),field+' missing invalid tag '+JSON.stringify(bad));
      assert.ok(result.errors.length>0 && result.errors.every(x=>typeof x==='string'));
    }
  }
});

test('boundary values and dangerous ancestry mixes are rejected or handled predictably',()=>{
  const okCases=[
    baseline({height:'120',wrist:'12.5',waist:'40',weight:'30'}),
    baseline({height:'230',wrist:'23',waist:'200',weight:'300'}),
    baseline({height:'140',wrist:'10'}),
    baseline({height:'200',wrist:'25'}),
    baseline({age:'18'}),
    baseline({age:'120'}),
    baseline({elbow:'4',waist:'40'})
  ];
  for (const [i,raw] of okCases.entries()) {
    const result=E.validate(raw);
    assert.equal(result.ok,true,'Allowed boundary case '+i+': '+JSON.stringify(result.errors));
    finiteTree(E.calculate(result.values),'boundary '+i);
  }
  const badCases=[
    { height:'119.99' },{ height:'230.01' },{ weight:'29.99' },{ weight:'300.01' },
    { wrist:'9.99' },{ wrist:'25.01' },{ elbow:'3.99' },{ elbow:'10.01' },
    { waist:'39.99' },{ waist:'200.01' },{ age:'17' },{ age:'121' },
    { sex:'' },{ ancestry:'unknown-key' },{ weight:'0' },{ height:'0' }
  ];
  for(const raw of badCases) {
    const res=E.validate(baseline(raw));
    assert.equal(res.ok,false,'Unexpected valid boundary input: '+JSON.stringify(raw));
  }
  const mixed=[
    [{ancestry:'european',pct:'40'},{ancestry:'east_asian',pct:'40'}],
    [{ancestry:'european',pct:'50'},{ancestry:'european',pct:'50'}],
    [{ancestry:'european',pct:'101'}],
    [{ancestry:'european',pct:'-1'},{ancestry:'east_asian',pct:'101'}],
    [{ancestry:'european',pct:'abc'},{ancestry:'east_asian',pct:'100'}],
    [{ancestry:'european',pct:''},{ancestry:'east_asian',pct:'100'}],
    [{ancestry:'european',pct:'50'},{ancestry:'',pct:'50'}]
  ];
  for(const makeup of mixed) {
    const v=E.validate(baseline({ancestryMode:'mixed',cutoffMode:'blend',makeup}));
    assert.equal(v.ok,false,'Bad ancestry mix accepted '+JSON.stringify(makeup));
  }
});

test('real-browser hostile editing: stale results, unit controls, mobile overflow', {skip:!CHROME&&'Chromium not installed'},async()=>{
  const browser=await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox'],protocolTimeout:25000});
  try {
    for(const viewport of [{width:360,height:780},{width:390,height:844},{width:768,height:1024},{width:1365,height:820}]) {
      const page=await browser.newPage();
      const pageErrors=[];
      page.on('pageerror',e=>pageErrors.push(e.message));
      await page.setViewport(viewport);
      await page.goto(SITE,{waitUntil:'load'});
      await page.select('#sex','female');
      await page.type('#age','40');
      await page.select('#singleRegion','europe');
      await page.type('#heightFeet','5');
      await page.type('#heightInches','7');
      await page.type('#weight','165');
      await page.type('#wrist','6.4');
      await page.click('#calcBtn');
      const initial=await page.$eval('#personalSummary',el=>!el.hidden);
      assert.equal(initial,true,'Initial calculation failed at '+viewport.width);
      const summary=await page.evaluate(()=>{
        const get=id=>document.getElementById(id);
        const errors=[];
        const set=(id,value,event='input')=>{
          const el=get(id); el.value=value;
          el.dispatchEvent(new Event(event,{bubbles:true}));
        };
        const visible=()=>!get('personalSummary').hidden && get('results').style.display==='block';
        const invalid=()=>!get('errors').hidden;
        const probe=(field,value,shouldWork)=>{
          set(field,value);
          const ok=visible()&&!invalid();
          if(ok!==shouldWork) errors.push(field+'='+JSON.stringify(value)+' expected '+shouldWork+' got '+ok+' errors='+get('errors').textContent.slice(0,160));
        };
        for(let i=0;i<16;i++){
          probe('weight',['180','220','165','145','220.5'][i%5],true);
          probe('weight',['NaN','abc','-5','0','9999','<svg>'][i%6],false);
          probe('weight','165',true);
          probe('heightInches','13',false);
          probe('heightInches','7',true);
          probe('wrist','0',false);
          probe('wrist','6.4',true);
          probe('elbow','bogus',false);
          probe('elbow','',true);
          probe('waist','0',false);
          probe('waist','',true);
        }
        get('elbowSlider').value='2.8';get('elbowSlider').dispatchEvent(new Event('input',{bubbles:true}));
        if(!visible()) errors.push('Optional elbow slider invalidated result');
        get('elbowClear').click();
        if(get('elbow').value!==''||!visible()) errors.push('Clear elbow did not recover result');
        get('waistSlider').value='32';get('waistSlider').dispatchEvent(new Event('input',{bubbles:true}));
        if(!visible()) errors.push('Optional waist slider invalidated result');
        get('waistClear').click();
        if(get('waist').value!==''||!visible()) errors.push('Clear waist did not recover result');
        return {errors,viewportWidth:document.documentElement.clientWidth,
          scrollWidth:document.documentElement.scrollWidth,hasFatal:!!document.querySelector('.fatal:not([hidden])'),
          imageLoaded:get('wristGuideImage').complete&&get('wristGuideImage').naturalWidth>0};
      });
      assert.deepEqual(summary.errors,[],'Hostile field-edit cases at width '+viewport.width);
      assert.ok(summary.scrollWidth<=summary.viewportWidth+2,'Horizontal overflow at '+viewport.width+': '+JSON.stringify(summary));
      assert.equal(summary.hasFatal,false,'Fatal error at '+viewport.width);
      assert.equal(summary.imageLoaded,true,'Wrist help image did not load at '+viewport.width);
      assert.deepEqual(pageErrors,[],'Page errors at '+viewport.width);
      await page.close();
    }
  } finally { await browser.close(); }
});

test('real-browser ancestry mixing, invalid totals, and recovery', {skip:!CHROME&&'Chromium not installed'},async()=>{
  const browser=await puppeteer.launch({executablePath:CHROME,headless:true,args:['--no-sandbox']});
  try{
    const page=await browser.newPage();
    const faults=[];
    page.on('pageerror',err=>faults.push(err.message));
    await page.goto(SITE,{waitUntil:'load'});
    await page.select('#sex','male');
    await page.type('#age','38');
    await page.type('#heightFeet','5');await page.type('#heightInches','10');
    await page.type('#weight','180');await page.type('#wrist','7');
    await page.select('#singleRegion','europe');
    await page.click('#calcBtn');
    const out=await page.evaluate(()=>{
      const byId=id=>document.getElementById(id);
      const set=(id,value,event='input')=>{const el=byId(id);el.value=value;el.dispatchEvent(new Event(event,{bubbles:true}));};
      const errors=[];
      document.querySelector('input[name="ancestryMode"][value="mixed"]').click();
      set('mixRegion1','europe','change');set('mixRegion2','eastasia','change');
      set('mixPct1','40');set('mixPct2','60');
      const visible=()=>!byId('personalSummary').hidden;
      if(!visible()) errors.push('Valid 40/60 ancestry mix hidden');
      set('mixPct2','80');
      if(visible()||byId('errors').hidden) errors.push('Invalid 40/80 mix not flagged');
      set('mixPct2','60');
      if(!visible()) errors.push('Corrected mix not recovered');
      set('mixRegion2','europe','change');
      if(visible()||byId('errors').hidden) errors.push('Duplicate ancestry not flagged');
      set('mixRegion2','eastasia','change');
      if(!visible()) errors.push('Corrected duplicate not recovered');
      return errors;
    });
    assert.deepEqual(out,[]);
    assert.deepEqual(faults,[]);
  } finally {await browser.close();}
});
