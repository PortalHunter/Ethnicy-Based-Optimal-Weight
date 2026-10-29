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
    for (const id of ['age', 'height', 'weight', 'wrist', 'elbow', 'waist']) assert.equal(await page.$eval('#' + id, (e) => e.value), '');
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
    assert.match(await page.$eval('#errors', (e) => e.innerText), /enter your age/);
    assert.equal(await page.$eval('#age', (e) => e.getAttribute('aria-invalid')), 'true');
    assert.equal(await text(), '');
  });

  await t.test('valid input renders results with correct BMI and no NaN', async () => {
    await page.select('#sex', 'male'); await page.select('#ancestry', 'european');
    await type('#age', '40'); await type('#height', '70'); await type('#weight', '180'); await type('#wrist', '7');
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

  await t.test('condition checkbox adds guidance but no condition-weighted range; unticking removes it', async () => {
    const before = await page.$eval('#sugRange', (e) => e.textContent);
    await page.click('.cond[value="diabetes"]');
    const t1 = await text();
    assert.doesNotMatch(t1, /Condition-weighted|weighting/i);
    assert.equal(await page.$('#condRange'), null);
    assert.equal(await page.$eval('#sugRange', (e) => e.textContent), before, 'range unchanged by a condition');
    assert.match(t1, /First goal: lose/); assert.match(t1, /Diabetes Prevention Program targeted at least 7%/);
    await page.click('.cond[value="diabetes"]');
    assert.doesNotMatch(await text(), /First goal/);
  });

  await t.test('mixed ancestry: totals are validated and blend updates live', async () => {
    await page.click('input[name="ancestryMode"][value="mixed"]');
    assert.equal(await text(), '', 'no makeup entered yet -> error, no stale results');
    await page.click('input[name="cutoffMode"][value="blend"]');
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
  await page.type('#age', '40');                                   // age is required; tests of the age rules clear it
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
  await page.type('#age', '40'); await page.type('#height', '70'); await page.type('#weight', '180'); await page.type('#wrist', '7');
  await page.click('#calcBtn');
  assert.match(await resultsText(page), /calculator hit an error.*boom/);
  // 3) An uncaught error elsewhere is also reported
  await page.evaluate(() => setTimeout(() => { throw new Error('later'); }, 0));
  await new Promise((r) => setTimeout(r, 100));
  assert.match(await resultsText(page), /calculator hit an error/); // Chrome masks the message of page-injected scripts as "Script error."
  await browser.close();
});

test("Brian's case in the browser: buffer zone shown; diabetes caps the range below it", { skip: !CHROME && 'no Chrome' }, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const problems = [];
  const page = await freshPage(browser, problems);
  await page.select('#sex', 'male'); await page.select('#ancestry', 'se_asian');
  await page.type('#height', '5\'9"'); await page.type('#weight', '150'); await page.type('#wrist', '6.5');
  await page.click('#calcBtn');
  let txt = await resultsText(page);
  assert.match(txt, /Buffer zone near the cut-off: BMI 22\.0 to 22\.9 \(149-155 lb/);
  assert.match(txt, /Frame-adjusted suggested range \(estimate\)\s*144-155 lb/);
  assert.equal(await page.$('#bufRange'), null, 'no cap without diabetes');
  assert.match(await page.$eval('#topNote', (e) => e.textContent), /top of your healthy range \(BMI 22\.9\)/);
  assert.match(txt, /screening \/ public-health action point.*not the BMI of lowest risk.*22\.6 to 27\.5 in East Asian adults.*20 to 25/s);
  assert.doesNotMatch(txt, /lowest population disease risk/);
  assert.match(txt, /traditional convention/);
  assert.match(txt, /rounded to one decimal/);
  assert.match(txt, /Filipino-specific evidence is limited/); assert.match(txt, /provisional cut-offs of 23 \(overweight\) and 25 \(obesity\)/);
  await page.click('.cond[value="diabetes"]');                    // live update
  assert.equal(await page.$eval('#bufRange', (e) => e.textContent), '144-148 lb (65.5-67.5 kg)');
  assert.equal(await page.$('#condRange'), null);
  txt = await resultsText(page);
  assert.ok(!/NaN|undefined/.test(txt));
  // Large frame at the same height: the cap edge itself, never lower than the small frame's range
  await page.$eval('#wrist', (e) => { e.value = ''; }); await page.type('#wrist', '7.5');
  await new Promise((r) => setTimeout(r, 100));
  if (!(await page.$('#bufRange'))) await page.click('#calcBtn');
  assert.equal(await page.$eval('#bufRange', (e) => e.textContent), 'at most 148 lb (67.5 kg) (BMI 21.9)');
  txt = await resultsText(page);
  assert.match(txt, /result is a ceiling: the weight just below the zone \(BMI 21\.9\).*not a precise target.*calculator\u2019s own method/);
  assert.ok(!/NaN|undefined/.test(txt));
  // European: no zone, no cap
  await page.select('#ancestry', 'european');
  await new Promise((r) => setTimeout(r, 100));
  txt = await resultsText(page);
  assert.doesNotMatch(txt, /Buffer zone/); assert.equal(await page.$('#bufRange'), null);
  await browser.close();
  assert.deepEqual(problems, []);
});

test('mixed ancestry in the browser: identify-with (ADA) by default with the largest share preselected; blend shows both ADA waist results', { skip: !CHROME && 'no Chrome' }, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const problems = [];
  const wait = () => new Promise((r) => setTimeout(r, 100));
  try {
    const page = await freshPage(browser, problems);
    const setPct = async (i, v) => { await page.$eval('#mixPct' + i, (e) => { e.value = ''; }); await page.type('#mixPct' + i, v); await wait(); };
    await page.select('#sex', 'male');
    await page.type('#height', '69'); await page.type('#weight', '160'); await page.type('#wrist', '6.5'); await page.type('#waist', '34.5');
    await page.click('input[name="ancestryMode"][value="mixed"]');
    assert.equal(await page.$eval('input[name="cutoffMode"]:checked', (e) => e.value), 'identify', 'identify-with is the default');
    await page.select('#mixAnc1', 'se_asian'); await page.type('#mixPct1', '50');
    await page.select('#mixAnc2', 'european'); await page.type('#mixPct2', '50');
    await page.click('.cond[value="diabetes"]');
    assert.equal(await page.$eval('#identifyWith', (e) => e.disabled), false);
    assert.deepEqual(await page.$$eval('#identifyWith option', (os) => os.map((o) => o.value)), ['se_asian', 'european']);
    assert.equal(await page.$eval('#identifyWith', (e) => e.value), 'se_asian', 'tie -> first entered');
    await page.click('#calcBtn');
    let txt = await resultsText(page);
    assert.equal(await page.$eval('#bufRange', (e) => e.textContent), '144-148 lb (65.5-67.5 kg)');
    assert.match(await page.$eval('#cutoffNote', (e) => e.textContent), /Southeast Asian.*background you identify with.*ADA 2026/);
    assert.match(await page.$eval('#adaWaist', (e) => e.textContent), /Asian background:.*BMI 23\.6.*Obesity.*waist-to-height 0\.500 is 0\.5 or more.*a waist of 34\.5 in.*identify with is an Asian background/);
    assert.doesNotMatch(await page.$eval('#adaWaist', (e) => e.textContent), /non-Asian|50%/);
    // largest share is picked automatically until the person chooses
    await setPct(1, '40'); await setPct(2, '60');
    assert.equal(await page.$eval('#identifyWith', (e) => e.value), 'european');
    assert.equal(await page.$('#bufRange'), null);
    await setPct(1, '50'); await setPct(2, '50');
    assert.equal(await page.$eval('#identifyWith', (e) => e.value), 'se_asian');
    // an explicit choice sticks even when the shares change
    await page.select('#identifyWith', 'european'); await wait();
    await setPct(1, '60'); await setPct(2, '40');
    assert.equal(await page.$eval('#identifyWith', (e) => e.value), 'european');
    assert.equal(await page.$('#bufRange'), null);
    assert.match(await page.$eval('#adaWaist', (e) => e.textContent), /non-Asian background:.*below 25/);
    await setPct(1, '50'); await setPct(2, '50');
    txt = await resultsText(page);
    assert.ok(!/NaN|undefined/.test(txt));
    // the blend: calculator's own method; ADA waist shows both because they differ
    await page.click('input[name="cutoffMode"][value="blend"]'); await wait();
    assert.equal(await page.$eval('#identifyWith', (e) => e.disabled), true, 'select disabled under blend');
    assert.equal(await page.$('#bufRange'), null, 'blend: no cap for 50/50');
    assert.match(await page.$eval('#cutoffNote', (e) => e.textContent), /50% in groups with lower cut-offs.*calculator\u2019s own method, not guideline-based/);
    const aw = await page.$eval('#adaWaist', (e) => e.textContent);
    assert.match(aw, /50% Asian background.*both are shown because they give different results/);
    assert.match(aw, /Asian background:.*Obesity/); assert.match(aw, /non-Asian background:.*below 25/);
    assert.doesNotMatch(aw, /the 50% the calculator uses/);
    // absurd waist -> error box, results cleared
    await page.$eval('#waist', (e) => { e.value = ''; }); await page.type('#waist', '5');
    await wait();
    assert.match(await page.$eval('#errors', (e) => e.innerText), /Waist/);
    assert.equal(await resultsText(page), '');
    assert.deepEqual(problems, []);
  } finally { await browser.close(); }
});

test('age rules, pregnancy and the NICE vs ADA note in the browser', { skip: !CHROME && 'no Chrome' }, async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const problems = [];
  const wait = () => new Promise((r) => setTimeout(r, 100));
  const setAge = async (page, v) => { await page.$eval('#age', (e) => { e.value = ''; }); if (v) await page.type('#age', v); await page.click('#calcBtn'); await wait(); };
  try {
    const page = await freshPage(browser, problems);
    await page.select('#sex', 'female'); await page.select('#ancestry', 'african');
    await page.type('#height', '64'); await page.type('#weight', '140'); await page.type('#wrist', '6');
    await setAge(page, '');
    await page.click('#calcBtn'); await wait();
    assert.match(await page.$eval('#errors', (e) => e.innerText), /enter your age/);
    assert.equal(await page.$eval('#age', (e) => e.getAttribute('aria-invalid')), 'true');
    assert.equal(await resultsText(page), '');
    await setAge(page, '16');
    assert.match(await page.$eval('#errors', (e) => e.innerText), /for adults \(18 and over\)/);
    assert.equal(await resultsText(page), '');
    await setAge(page, '70');
    let txt = await resultsText(page);
    assert.match(txt, /65 or over: BMI is less accurate in older adults/);
    assert.match(await page.$eval('#niceAdaNote', (e) => e.textContent), /NICE.*Black African.*Middle Eastern.*ADA 2026.*only to Asian backgrounds/);
    await setAge(page, '30');
    assert.doesNotMatch(await resultsText(page), /65 or over/);
    // pregnancy: only offered to females; no range, an explanation instead
    assert.equal(await page.$eval('#pregBox', (e) => e.hidden), false);
    await page.click('#pregnant'); await wait();
    txt = await resultsText(page);
    assert.match(await page.$eval('#pregNote', (e) => e.textContent), /No weight range is shown during pregnancy or breastfeeding/);
    assert.doesNotMatch(txt, /Healthy weight range for your height|Frame-adjusted|lb \(\d/);
    assert.ok(!/NaN|undefined/.test(txt));
    await page.select('#sex', 'male'); await wait();
    assert.equal(await page.$eval('#pregBox', (e) => e.hidden), true);
    assert.equal(await page.$eval('#pregnant', (e) => e.checked), false);
    assert.match(await resultsText(page), /Healthy weight range for your height/);
    // ancestries without the NICE/ADA split get no such note
    await page.select('#ancestry', 'south_asian'); await wait();
    assert.equal(await page.$('#niceAdaNote'), null);
    assert.deepEqual(problems, []);
  } finally { await browser.close(); }
});
