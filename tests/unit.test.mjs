import test from 'node:test';
import assert from 'node:assert/strict';
import { loadCore } from './load-core.mjs';
const { E, html } = loadCore();

// Expected values below are computed by hand from the published formulas, NOT by calling the code.
const LB = 0.45359237, IN = 2.54;
const near = (a, b, tol = 1e-6, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const base = (o = {}) => ({ sex: 'male', height: '70', heightUnit: 'in', weight: '180', weightUnit: 'lb',
  wrist: '7', wristUnit: 'in', elbow: '', elbowUnit: 'in', waist: '', waistUnit: 'in', age: '40',
  ancestryMode: 'single', ancestry: 'european', makeup: [], conditions: [], ...o });
const calc = (o) => { const v = E.validate(base(o)); assert.ok(v.ok, JSON.stringify(v.errors)); return E.calculate(v.values); };

test('unit conversions are exact', () => {
  near(E.toCm(1, 'in'), 2.54); near(E.toCm(170, 'cm'), 170);
  near(E.toKg(1, 'lb'), 0.45359237); near(E.toKg(70, 'kg'), 70);
  near(E.kgToLb(E.toKg(163.3, 'lb')), 163.3, 1e-9); near(E.cmToIn(E.toCm(68.5, 'in')), 68.5, 1e-9);
});

test('BMI formula', () => {
  near(E.bmi(70, 175), 70 / 1.75 ** 2, 1e-12);
  near(E.weightForBmi(22, 180), 22 * 1.8 ** 2, 1e-12);
});

test('ideal-body-weight formulas match published coefficients', () => {
  const m = E.ibwFormulas(70 * IN, 'male');
  near(m.hamwi, 166 * LB, 1e-9); near(m.devine, 73, 1e-9); near(m.robinson, 70.15, 1e-9); near(m.miller, 70.3, 1e-9);
  const f = E.ibwFormulas(64 * IN, 'female');
  near(f.hamwi, 120 * LB, 1e-9); near(f.devine, 54.7, 1e-9); near(f.robinson, 55.27, 1e-9); near(f.miller, 58.54, 1e-9);
  assert.equal(E.ibwFormulas(59.9 * IN, 'male'), null, 'formulas undefined below 60 in');
});

test('BMI categories: boundaries use the displayed (1-decimal) value', () => {
  assert.equal(E.classifyBMI(18.44, 'standard').index, 0);
  assert.equal(E.classifyBMI(18.46, 'standard').index, 1);
  assert.equal(E.classifyBMI(24.94, 'standard').index, 1);
  assert.equal(E.classifyBMI(24.96, 'standard').index, 2, '24.96 displays as 25.0 -> overweight');
  assert.equal(E.classifyBMI(29.96, 'standard').index, 3);
  assert.equal(E.classifyBMI(22.94, 'lower').index, 1);
  assert.equal(E.classifyBMI(23.0, 'lower').index, 2);
  assert.equal(E.classifyBMI(27.44, 'lower').index, 2);
  assert.equal(E.classifyBMI(27.5, 'lower').index, 3);
});

test('healthy band edges', () => {
  const b = E.healthyBand(70 * IN, 'standard');
  near(b.lowKg, 18.5 * 1.778 ** 2, 1e-9); near(b.highKg, 24.9 * 1.778 ** 2, 1e-9);
  near(E.healthyBand(70 * IN, 'lower').highKg, 22.9 * 1.778 ** 2, 1e-9);
});

test('wrist frame (height/wrist r) cut-offs, both sexes', () => {
  const f = (r, sex) => E.frameFromWrist(r * 10, 10, sex).size;
  assert.equal(f(10.41, 'male'), 'Small'); assert.equal(f(10.4, 'male'), 'Medium');
  assert.equal(f(9.6, 'male'), 'Medium'); assert.equal(f(9.59, 'male'), 'Large');
  assert.equal(f(11.01, 'female'), 'Small'); assert.equal(f(11.0, 'female'), 'Medium');
  assert.equal(f(10.1, 'female'), 'Medium'); assert.equal(f(10.09, 'female'), 'Large');
  const c = E.wristCutoffs(70 * IN, 'male');
  near(c.smallBelowCm, 177.8 / 10.4, 1e-9); near(c.largeAboveCm, 177.8 / 9.6, 1e-9);
});

test('elbow frame uses the MetLife row for height + 1 in heel', () => {
  const h = 70 * IN; // 71 in with heel -> 5'8"-5'11" row: 2.75-3.0 in
  assert.equal(E.frameFromElbow(h, 2.74 * IN, 'male').size, 'Small');
  assert.equal(E.frameFromElbow(h, 2.75 * IN, 'male').size, 'Medium');
  assert.equal(E.frameFromElbow(h, 3.0 * IN, 'male').size, 'Medium');
  assert.equal(E.frameFromElbow(h, 3.01 * IN, 'male').size, 'Large');
  assert.deepEqual([...E.frameFromElbow(63 * IN, 2.5 * IN, 'female').mediumIn], [2.375, 2.625]); // 64 in heel
  assert.deepEqual([...E.frameFromElbow(71 * IN, 3 * IN, 'male').mediumIn], [2.75, 3.125]);    // 72 in heel
  assert.equal(E.frameFromElbow(55 * IN, 2.4 * IN, 'female').outsideTable, true);
});

test('suggested range = formulas (Hamwi frame-adjusted) intersected with the healthy band', () => {
  const med = E.suggestedRange(70 * IN, 'male', ['Medium'], 'standard');
  assert.equal(med.method, 'overlap'); near(med.lowKg, 70.15, 1e-9); near(med.highKg, 166 * LB, 1e-9);
  const large = E.suggestedRange(70 * IN, 'male', ['Large'], 'standard');   // Hamwi*1.1 > band top -> clipped
  near(large.highKg, 24.9 * 1.778 ** 2, 1e-9);
  const small = E.suggestedRange(70 * IN, 'male', ['Small'], 'standard');   // Hamwi*0.9 becomes the minimum
  near(small.lowKg, 166 * LB * 0.9, 1e-9); near(small.highKg, 73, 1e-9);
  const lower = E.suggestedRange(70 * IN, 'male', ['Medium'], 'lower');
  near(lower.highKg, 22.9 * 1.778 ** 2, 1e-9);
  const both = E.suggestedRange(70 * IN, 'male', ['Small', 'Large'], 'standard');
  assert.ok(both.lowKg <= small.lowKg + 1e-9 && both.highKg >= large.highKg - 1e-9, 'disagreeing frames widen the range');
  const short = E.suggestedRange(59 * IN, 'female', ['Medium'], 'standard');
  assert.equal(short.method, 'band'); assert.equal(short.reason, 'short');
});

test('suggested range always lies inside the healthy band (sweep)', () => {
  for (let hIn = 60; hIn <= 80; hIn += 0.5) for (const sex of ['male', 'female'])
    for (const g of ['standard', 'lower']) for (const fr of ['Small', 'Medium', 'Large']) {
      const s = E.suggestedRange(hIn * IN, sex, [fr], g), b = E.healthyBand(hIn * IN, g);
      assert.ok(s.lowKg >= b.lowKg - 1e-9 && s.highKg <= b.highKg + 1e-9 && s.lowKg <= s.highKg, `${hIn} ${sex} ${g} ${fr}`);
    }
});

test('ancestry mix: cut-offs blended by percentage', () => {
  const g = (list) => E.groupForAncestries(list);
  assert.equal(g([{ key: 'european', pct: 100 }]).group.overweight, 25);
  assert.equal(g([{ key: 'south_asian', pct: 100 }]).group.overweight, 23);
  const half = g([{ key: 'european', pct: 50 }, { key: 'east_asian', pct: 50 }]).group;
  assert.equal(half.overweight, 24); assert.equal(half.obese, 28.8); // 30-2.5*0.5=28.75 -> 28.8
  const q = g([{ key: 'european', pct: 75 }, { key: 'african', pct: 25 }]);
  assert.equal(q.group.overweight, 24.5); assert.equal(q.group.obese, 29.4); assert.equal(q.lowerShare, 25);
  // two lower groups mixed = fully lower
  assert.equal(g([{ key: 'south_asian', pct: 60 }, { key: 'east_asian', pct: 40 }]).group.overweight, 23);
  // normalised when sum is 101 (allowed rounding)
  assert.equal(g([{ key: 'european', pct: 50.5 }, { key: 'east_asian', pct: 50.5 }]).group.overweight, 24);
  // more lower-group share -> lower (never higher) cut-off: monotonic
  let prev = Infinity;
  for (let p = 0; p <= 100; p += 5) {
    const ow = g([{ key: 'european', pct: 100 - p }, { key: 'south_asian', pct: p }].filter(x => x.pct > 0)).group.overweight;
    assert.ok(ow <= prev, `monotonic at ${p}`); prev = ow;
  }
  // end-to-end: band for 50/50 uses BMI 23.9 upper edge
  const r = calc({ ancestryMode: 'mixed', cutoffMode: 'blend', makeup: [{ ancestry: 'european', pct: '50' }, { ancestry: 'east_asian', pct: '50' }, { ancestry: '', pct: '' }] });
  near(r.band.highKg, 23.9 * 1.778 ** 2, 1e-9);
  assert.ok(r.altBands.standard.highKg > r.band.highKg && r.altBands.lower.highKg < r.band.highKg);
});

test('condition weighting is gone: conditions never move the range (only the diabetes buffer cap does)', () => {
  assert.equal(E.CONDITION_WEIGHTING, undefined); assert.equal(E.conditionAdjustedRange, undefined);
  assert.ok(!/condRange|Condition-weighted|conditionAdjusted/.test(html));
  const none = calc({});
  assert.ok(!('conditionAdjusted' in none));
  for (let hIn = 60; hIn <= 78; hIn += 3) for (const anc of ['european', 'south_asian']) {
    const plain = calc({ height: String(hIn), ancestry: anc });
    for (const conds of [['hypertension'], ['high_chol'], ['gout'], ['hypertension', 'high_chol', 'gout', 'celiac', 'lactose', 'hemochromatosis']]) {
      const r = calc({ height: String(hIn), ancestry: anc, conditions: conds });
      assert.deepEqual(r.suggested, plain.suggested, hIn + anc + conds); assert.deepEqual(r.band, plain.band); assert.equal(r.buffered, null);
    }
    // diabetes: suggested unchanged; the only change is the buffer cap (lower-cut-off groups)
    const d = calc({ height: String(hIn), ancestry: anc, conditions: ['diabetes', 'hypertension'] });
    assert.deepEqual(d.suggested, plain.suggested);
    if (anc === 'european') assert.equal(d.buffered, null);
  }
});

test('above the band: 5-7% loss goal from current weight', () => {
  const r = calc({ weight: '220', conditions: ['diabetes'] });
  const w = 220 * LB;
  assert.ok(r.conditionWeight.overBand);
  near(r.conditionWeight.goal.toLowKg, w * 0.93, 1e-9); near(r.conditionWeight.goal.toHighKg, w * 0.95, 1e-9);
  assert.equal(calc({ weight: '150', conditions: ['diabetes'] }).conditionWeight.goal, null);
});

test('waist-to-height categories (NICE)', () => {
  assert.equal(E.waistToHeight(34.6, 70).index, 0);            // 0.494 -> shown 0.49 -> healthy
  const edge = E.waistToHeight(34.9, 70);                         // 0.4986 is shown as 0.50
  assert.equal(edge.ratio, 0.5); assert.equal(edge.index, 1, 'category matches the displayed ratio');
  assert.equal(E.waistToHeight(35, 70).index, 1);
  assert.equal(E.waistToHeight(42, 70).index, 2);
  assert.equal(E.waistToHeight(27, 70).index, -1);
});

test('validation: required, zero, negative, garbage, units', () => {
  const errs = (o) => E.validate(base(o)).errors.join(' | ');
  assert.match(errs({ height: '' }), /Height is required/);
  assert.match(errs({ weight: '0' }), /greater than zero/);
  assert.match(errs({ wrist: '-6' }), /greater than zero/);
  assert.match(errs({ height: '5\'13' }), /inches must be/);
  assert.match(errs({ height: '5 1/2' }), /must be a number/);
  assert.match(errs({ weight: 'abc' }), /must be a number/);
  assert.match(errs({ height: 'NaN' }), /must be a number/);
  assert.match(errs({ height: 'Infinity' }), /must be a number/);
  assert.match(errs({ height: '175' }), /Did you mean cm/);
  assert.match(errs({ wrist: '17', wristUnit: 'in' }), /Did you mean cm/);
  assert.match(errs({ weight: '400', weightUnit: 'kg' }), /Did you mean lb/);
  assert.match(errs({ sex: '' }), /male or female/);
  assert.match(errs({ ancestry: 'martian' }), /choose an ancestry/);
  assert.match(errs({ height: '50', wrist: '25', wristUnit: 'cm' }), /height\/wrist ratio/);
  assert.equal(E.validate(base({ elbow: '', waist: '' })).ok, true, 'optional fields may be empty');
  assert.match(errs({ elbow: '0' }), /Elbow breadth must be greater than zero/);
  assert.ok(E.validate(base({ height: '177.8', heightUnit: 'cm' })).ok);
  assert.ok(E.validate(base({ height: ' 70 ' })).ok, 'whitespace trimmed');
  // every number returned is finite
  const v = E.validate(base({ elbow: '2.9', waist: '34' })).values;
  for (const k of ['heightCm', 'weightKg', 'wristCm', 'elbowCm', 'waistCm']) assert.ok(Number.isFinite(v[k]), k);
});

test('validation: mixed ancestry percentages', () => {
  const mk = (rows) => E.validate(base({ ancestryMode: 'mixed', makeup: rows.map(([a, p]) => ({ ancestry: a, pct: p })) }));
  assert.ok(mk([['european', '60'], ['east_asian', '40']]).ok);
  assert.ok(mk([['european', '33.3'], ['east_asian', '33.3'], ['african', '33.3']]).ok, '99.9 within 1%');
  assert.match(mk([['european', '50'], ['east_asian', '40']]).errors.join(), /add up to 90%/);
  assert.match(mk([['european', '60'], ['european', '40']]).errors.join(), /more than once/);
  assert.match(mk([['european', '0'], ['east_asian', '100']]).errors.join(), /more than 0/);
  assert.match(mk([['european', '150']]).errors.join(), /at most 100/);
  assert.match(mk([['european', '']]).errors.join(), /enter a percentage/);
  assert.match(mk([['', '50'], ['european', '50']]).errors.join(), /choose an ancestry/);
  assert.match(mk([]).errors.join(), /at least one/);
});

test('calculate never yields NaN for valid input across a grid', () => {
  for (const sex of ['male', 'female']) for (const h of ['58', '64', '70', '78']) for (const wr of ['5.5', '6.5', '7.5'])
    for (const el of ['', '2.5', '3.2']) {
      const r = calc({ sex, height: h, wrist: wr, elbow: el, waist: '33', conditions: ['diabetes'] });
      const nums = JSON.stringify(r, (k, x) => (typeof x === 'number' && !Number.isFinite(x)) ? 'BAD' : x);
      assert.ok(!nums.includes('BAD'), `${sex} ${h} ${wr} ${el}`);
    }
});

test('elbow toggling changes the result only through frame size', () => {
  const noElbow = calc({ wrist: '7' });            // r = 10.0 -> Medium
  const agreeing = calc({ wrist: '7', elbow: '2.9' });   // Medium
  const disagree = calc({ wrist: '7', elbow: '3.2' });   // Large
  assert.deepEqual([...noElbow.frames], ['Medium']);
  near(agreeing.suggested.highKg, noElbow.suggested.highKg, 1e-12);
  assert.deepEqual([...disagree.frames], ['Medium', 'Large']); assert.equal(disagree.framesAgree, false);
  assert.ok(disagree.suggested.highKg > noElbow.suggested.highKg);
});

test('same body in different units gives identical results', () => {
  const a = calc({});
  const b = calc({ height: String(70 * IN), heightUnit: 'cm', weight: String(180 * LB), weightUnit: 'kg', wrist: String(7 * IN), wristUnit: 'cm' });
  near(a.bmi, b.bmi, 1e-9); near(a.suggested.lowKg, b.suggested.lowKg, 1e-9); assert.equal(a.wristFrame.size, b.wristFrame.size);
});

test('chart series: 0.1 in steps, frame changes at the computed cut-offs', () => {
  const s = E.chartSeries(70 * IN, 'male', 'standard', 6.0, 8.0);
  assert.equal(s.length, 21);
  s.forEach((p, i) => near(p.wristIn, 6 + i / 10, 1e-9));
  const c = E.wristCutoffs(70 * IN, 'male');
  s.forEach((p) => {
    const exp = p.r > 10.4 ? 'Small' : p.r >= 9.6 ? 'Medium' : 'Large';
    assert.equal(p.frame, exp);
    if (p.wristCm < c.smallBelowCm - 0.01) assert.equal(p.frame, 'Small');
    if (p.wristCm > c.largeAboveCm + 0.01) assert.equal(p.frame, 'Large');
  });
});

test('citations: every cite key resolves; references unique; no known-bad PMID', () => {
  assert.throws(() => E.cite('nope'));
  const urls = E.REFS.map((r) => r[2]);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(!html.includes('1958153'));
  const r = calc({ ancestryMode: 'mixed', makeup: [{ ancestry: 'east_asian', pct: '50' }, { ancestry: 'african', pct: '50' }],
    conditions: ['diabetes', 'hypertension', 'high_chol', 'gout', 'lactose', 'celiac', 'hemochromatosis'] });
  assert.ok(r.food.length >= 8);
});

test('height parser: natural feet/inches formats', () => {
  const ok = { '70': 70, '70.5': 70.5, "5'10": 70, '5\'10"': 70, "5' 10.5\"": 70.5, '5 ft 10 in': 70, '5ft10': 70,
    '5-10': 70, '5 10': 70, "5'": 60, '5\u2019 10\u2033': 70, '5 feet 10 inches': 70, '5ft 10in.': 70, "6'0": 72,
    "5'10,5": 70.5, '3\'0': 36, "8'11.9": 107.9 };
  for (const [txt, inches] of Object.entries(ok)) {
    const p = E.parseMeasure(txt, 'length', true);
    assert.ok(!p.error, txt + ' -> ' + p.error); near(p.value, inches, 1e-9, txt);
    if (/[' f\-\u2019]/.test(txt)) assert.equal(p.unit, 'in', txt);
  }
  for (const bad of ["2'10", "9'0", "5'12", "5'-1", '5.8 ft', "5''10", 'five ten', "5'10'", '5 10 2'])
    assert.ok(E.parseMeasure(bad, 'length', true).error, 'should reject ' + bad);
  // feet/inches only for height
  assert.ok(E.parseMeasure("5'10", 'length', false).error);
});

test('comma decimals and typed unit suffixes', () => {
  near(E.parseNum('6,5'), 6.5); near(E.parseMeasure('6,5', 'length', false).value, 6.5);
  const cases = [['180 lbs', 'weight', 180, 'lb'], ['180lb', 'weight', 180, 'lb'], ['82,5 kg', 'weight', 82.5, 'kg'],
    ['7 in', 'length', 7, 'in'], ['7"', 'length', 7, 'in'], ['178cm', 'length', 178, 'cm'], ['17.5 CM', 'length', 17.5, 'cm'],
    ['200 pounds', 'weight', 200, 'lb'], ['90 kgs', 'weight', 90, 'kg']];
  for (const [txt, kind, v, u] of cases) { const p = E.parseMeasure(txt, kind, false); near(p.value, v, 1e-9, txt); assert.equal(p.unit, u, txt); }
  assert.match(E.parseMeasure('180 cm', 'weight', false).error, /length unit/);
  assert.match(E.parseMeasure('7 lbs', 'length', false).error, /weight unit/);
  assert.match(E.parseMeasure('7 furlongs', 'length', false).error, /unrecognised unit/);
});

test('validate: typed units override the selector, with a warning, and give the same numbers', () => {
  const ref = E.validate(base({})).values;
  const v = E.validate(base({ height: "5'10\"", heightUnit: 'cm', weight: '180 lbs', weightUnit: 'kg', wrist: '17.78cm', wristUnit: 'in' }));
  assert.ok(v.ok, v.errors.join());
  assert.deepEqual({ ...v.unitOverrides }, { height: 'in', weight: 'lb', wrist: 'cm' });
  near(v.values.heightCm, ref.heightCm, 1e-9); near(v.values.weightKg, ref.weightKg, 1e-9); near(v.values.wristCm, ref.wristCm, 1e-9);
  assert.equal(v.warnings.length, 3);
  assert.match(v.warnings.join(' '), /5 ft 10 in/);
  // inches mode + feet/inches: no override, but a confirmation note
  const w = E.validate(base({ height: "5'10" }));
  assert.ok(w.ok); assert.deepEqual({ ...w.unitOverrides }, {}); near(w.values.heightCm, 177.8, 1e-9);
  // "5.10" in inches is flagged with a feet/inches hint
  assert.match(E.validate(base({ height: '5.10' })).errors.join(), /type it like 5'10"/);
  // percentages accept "%" and commas
  assert.ok(E.validate(base({ ancestryMode: 'mixed', makeup: [{ ancestry: 'european', pct: '50%' }, { ancestry: 'east_asian', pct: '50,0' }] })).ok);
});

test('validate: invalid field ids are reported for highlighting', () => {
  const v = E.validate(base({ sex: '', ancestry: '', weight: 'abc', elbow: '-1' }));
  assert.deepEqual([...v.invalid].sort(), ['ancestry', 'elbow', 'sex', 'weight']);
  assert.match(v.errors.join(), /choose Sex/); assert.match(v.errors.join(), /choose an ancestry/);
  const m = E.validate(base({ ancestryMode: 'mixed', makeup: [{ ancestry: 'european', pct: '' }, { ancestry: '', pct: '20' }] }));
  assert.ok(m.invalid.includes('mixPct1') && m.invalid.includes('mixAnc2'));
});

test('inline scripts are ES5 (Safari 12 / iOS 12 safe) and avoid newer APIs', async () => {
  const acorn = await import('acorn');
  const scripts = [...html.matchAll(/<script id="([^"]+)">([\s\S]*?)<\/script>/g)];
  assert.ok(scripts.length >= 3);
  for (const [, id, code] of scripts) {
    assert.doesNotThrow(() => acorn.parse(code, { ecmaVersion: 5 }), id + ' is not ES5');
    for (const api of ['replaceAll', 'fromEntries', 'Object.entries', 'Object.values', '.includes(', 'Array.from', 'Number.isFinite', 'padStart', '.flat(', 'Promise', 'fetch(', '?.', '??'])
      assert.ok(!code.includes(api), id + ' uses ' + api);
  }
});

// ---------- Diabetes buffer zone (lower-cut-off ancestry) ----------
// Hand-computed expectations: weight at BMI b for height h (m) = b * h^2.
const kgAt = (b, hIn) => b * (hIn * IN / 100) ** 2;
// These tests exercise the percentage blend explicitly (identify-with is now the default; tested below).
const mix = (pairs) => ({ ancestryMode: 'mixed', ancestry: '', cutoffMode: 'blend', makeup: pairs.map(([ancestry, pct]) => ({ ancestry, pct: String(pct) })) });

test('buffer zone: starts at BMI 22 for lower-cut-off groups, blended for a mix, absent for standard groups', () => {
  const z = (o) => calc(o).bufferZone;
  assert.equal(z({ ancestry: 'european' }), null);
  assert.equal(z({ ancestry: 'other' }), null);
  const se = z({ ancestry: 'se_asian' });
  assert.equal(se.startBmi, 22); assert.equal(se.topBmi, 22.9); assert.equal(se.capBmi, 21.9);
  near(se.startKg, kgAt(22, 70), 1e-9); near(se.capKg, kgAt(21.9, 70), 1e-9);
  const half = z(mix([['se_asian', 50], ['european', 50]]));     // start 25 + (22-25)*0.5 = 23.5; top 24 - 0.1
  assert.equal(half.startBmi, 23.5); assert.equal(half.topBmi, 23.9); assert.equal(half.capBmi, 23.4);
  const tenth = z(mix([['se_asian', 10], ['european', 90]]));    // start 24.7; overweight 24.8 -> top 24.7
  assert.equal(tenth.startBmi, 24.7); assert.equal(tenth.topBmi, 24.7);
  assert.equal(z(mix([['se_asian', 1], ['european', 99]])), null); // rounds to the standard cut-off: no zone
});

test("Brian's case: male 69 in, wrist 6.5 in (small), Southeast Asian", () => {
  const o = { height: '69', wrist: '6.5', weight: '150', ancestry: 'se_asian' };
  const none = calc(o);
  assert.equal(none.wristFrame.size, 'Small');                    // 69/6.5 = 10.62 > 10.4
  const lo = 160 * 0.9 * LB, top = kgAt(22.9, 69);                // Hamwi small 144 lb; Devine 155.9 lb clipped by BMI 22.9
  near(none.suggested.lowKg, lo, 1e-9); near(none.suggested.highKg, top, 1e-9);
  assert.equal(none.buffered, null, 'no cap without the diabetes selection');
  const d = calc({ ...o, conditions: ['diabetes'] });
  const cap = kgAt(21.9, 69);
  assert.equal(d.buffered.method, 'capped');
  near(d.buffered.lowKg, lo, 1e-9); near(d.buffered.highKg, cap, 1e-9);
  near(E.kgToLb(d.buffered.highKg), 148.3, 0.05);
  near(E.kgToLb(d.buffered.lowKg), 144.0, 0.05);
  // the suggested (pre-cap) range and band are untouched by the new rule
  near(d.suggested.highKg, top, 1e-9); near(d.band.lowKg, kgAt(18.5, 69), 1e-9);
});

test("Brian's case with a 50/50 Southeast Asian / European mix", () => {
  const o = { height: '69', wrist: '6.5', weight: '150', ...mix([['se_asian', 50], ['european', 50]]) };
  const none = calc(o);
  near(none.suggested.highKg, 50 + 2.3 * 9, 1e-9);                // Devine 70.7 kg, below the blended top (BMI 23.9)
  const d = calc({ ...o, conditions: ['diabetes'] });
  assert.equal(d.bufferZone.capBmi, 23.4);
  assert.equal(d.buffered, null, 'Devine (BMI 23.0) is already below the BMI 23.4 cap');
  near(E.kgToLb(d.suggested.lowKg), 144.0, 0.05); near(E.kgToLb(d.suggested.highKg), 155.9, 0.05);
  // large frame: Hamwi +10% goes above the blended top, so the cap does bite
  const L = calc({ ...o, wrist: '7.5', conditions: ['diabetes'] });
  assert.equal(L.wristFrame.size, 'Large');
  assert.equal(L.buffered.method, 'capped'); near(L.buffered.highKg, kgAt(23.4, 69), 1e-9);
});

test('buffer: large frame with all formulas in/above the zone gets the cap edge, never lower than a smaller frame', () => {
  const d = calc({ height: '69', wrist: '7.5', ancestry: 'se_asian', conditions: ['diabetes'] });
  assert.equal(d.wristFrame.size, 'Large');                       // 69/7.5 = 9.2 < 9.6
  near(d.suggested.lowKg, 51.65 + 1.85 * 9, 1e-9);                 // Robinson 68.3 kg = BMI 22.2, inside the zone
  assert.equal(d.buffered.method, 'at_cap');
  near(d.buffered.lowKg, kgAt(21.9, 69), 1e-9); near(d.buffered.highKg, kgAt(21.9, 69), 1e-9);
  const small = calc({ height: '69', wrist: '6.5', ancestry: 'se_asian', conditions: ['diabetes'] });
  assert.ok(d.buffered.lowKg >= small.buffered.lowKg && d.buffered.highKg >= small.buffered.highKg);
});

test('formulas above the band: both ends sit at the band top (not the whole band)', () => {
  const band = E.healthyBand(70 * IN, 'lower');
  const s = E.suggestedRange(70 * IN, 'male', ['Large'], { key: 'x', healthyLow: 18.5, overweight: 20, obese: 25, labels: [] });
  assert.equal(s.method, 'edge'); assert.equal(s.reason, 'formulas_above');
  near(s.lowKg, kgAt(19.9, 70), 1e-9); near(s.highKg, kgAt(19.9, 70), 1e-9);
  assert.ok(band.highKg > s.highKg);
});

test('buffer: short height (no formulas) caps the band; floor never moves', () => {
  const d = calc({ sex: 'female', height: '58', wrist: '5.5', weight: '100', ancestry: 'east_asian', conditions: ['diabetes'] });
  assert.equal(d.suggested.reason, 'short');
  near(d.buffered.lowKg, kgAt(18.5, 58), 1e-9); near(d.buffered.highKg, kgAt(21.9, 58), 1e-9);
});

test('buffer: only the diabetes selection caps the range; other conditions do not', () => {
  const o = { height: '69', wrist: '6.5', ancestry: 'se_asian' };
  for (const c of [['hypertension'], ['high_chol'], ['gout'], ['celiac']]) assert.equal(calc({ ...o, conditions: c }).buffered, null, c[0]);
  assert.ok(calc({ ...o, conditions: ['gout', 'diabetes'] }).buffered);
});

test('buffer: European with diabetes is unchanged (the BMI 22 evidence is Asian-specific)', () => {
  const d = calc({ conditions: ['diabetes'] });
  assert.equal(d.bufferZone, null); assert.equal(d.buffered, null);
  assert.deepEqual(d.suggested, calc({}).suggested);
});

test('buffer invariants (sweep): never below the floor, never above the cap, never empty', () => {
  let capped = 0;
  for (let hIn = 56; hIn <= 80; hIn++) for (const sex of ['male', 'female']) for (const wrist of ['5', '6', '6.5', '7', '8'])
    for (const share of [100, 90, 50, 30, 10]) for (const conds of [['diabetes'], ['diabetes', 'hypertension', 'high_chol', 'gout']]) {
      const o = { sex, height: String(hIn), wrist, weight: '150', conditions: conds,
        ...(share === 100 ? { ancestry: 'south_asian' } : mix([['south_asian', share], ['european', 100 - share]])) };
      const v = E.validate(base(o)); if (!v.ok) continue;
      const r = E.calculate(v.values), z = r.bufferZone, lim = r.buffered ? r.buffered.highKg : r.band.highKg;
      if (r.buffered) { capped++; assert.ok(r.buffered.lowKg >= r.band.lowKg - 1e-9 && r.buffered.lowKg <= r.buffered.highKg && Math.abs(r.buffered.highKg - z.capKg) < 1e-9); }
      else if (z) assert.ok(r.suggested.highKg <= z.capKg + 1e-9, 'uncapped only when already below the cap');
      const a = r.buffered || r.suggested;
      assert.ok(a.lowKg >= r.band.lowKg - 1e-9 && a.highKg <= lim + 1e-9 && a.lowKg <= a.highKg, JSON.stringify({ hIn, sex, wrist, share }));
    }
  assert.ok(capped > 100, 'the sweep exercises the cap');
});

test('page documents how the range is built, in order', () => {
  const m = html.match(/How the range is built, in order:<\/strong>\s*<ol>([\s\S]*?)<\/ol>/);
  assert.ok(m);
  assert.equal((m[1].match(/<li>/g) || []).length, 4);
  assert.ok(!/weighting/i.test(m[1]));
  assert.match(m[1], /buffer zone/);
});

test('frame monotonicity (sweep): a larger frame never gets a lower range (low and high ends, every stage)', () => {
  const ancs = Object.keys(E.ANCESTRIES).map((a) => ({ ancestry: a })).concat([mix([['se_asian', 50], ['european', 50]]),
    { ...mix([['se_asian', 50], ['european', 50]]), cutoffMode: undefined }, mix([['south_asian', 30], ['african', 70]])]);
  const wristFor = (hIn, sex, size) => {                           // a wrist that lands clearly in each frame class
    const c = E.wristCutoffs(hIn * IN, sex);
    const cm = size === 'Small' ? c.smallBelowCm * 0.97 : size === 'Large' ? c.largeAboveCm * 1.03 : (c.smallBelowCm + c.largeAboveCm) / 2;
    return (cm / IN).toFixed(3);
  };
  const stages = { suggested: (r) => r.suggested, final: (r) => r.buffered || r.suggested };
  let checked = 0; const bad = [];
  for (let hIn = 58; hIn <= 80; hIn++) for (const sex of ['male', 'female']) for (const a of ancs)
    for (const conds of [[], ['diabetes'], ['diabetes', 'hypertension', 'high_chol', 'gout']]) {
      const rs = ['Small', 'Medium', 'Large'].map((size) => {
        const r = calc({ sex, height: String(hIn), weight: '150', wrist: wristFor(hIn, sex, size), conditions: conds, ...a });
        assert.equal(r.wristFrame.size, size); return r;
      });
      for (const [name, get] of Object.entries(stages)) {
        if (!get(rs[0])) continue;
        for (let i = 0; i < 2; i++) for (const end of ['lowKg', 'highKg']) {
          checked++;
          if (get(rs[i])[end] > get(rs[i + 1])[end] + 1e-9) bad.push(`${hIn}in ${sex} ${JSON.stringify(a.ancestry || a.makeup.map((m) => m.ancestry + m.pct))} ${conds} ${name}.${end} ${['S>M', 'M>L'][i]}`);
        }
      }
    }
  assert.ok(checked > 8000, String(checked));
  assert.deepEqual(bad.slice(0, 15), [], bad.length + ' inversions');
});

// ---------- ADA 2026 waist criteria (Table 3.1, recs 3.3a-d) ----------
test('ADA waist: WC thresholds at the boundary, both backgrounds and sexes (WHtR kept below 0.5)', () => {
  const H = 220;                                            // tall, so WC thresholds bite before WHtR 0.5 (= 110 cm)
  const cases = [['asian', 'female', 80], ['asian', 'male', 90], ['non_asian', 'female', 88], ['non_asian', 'male', 102]];
  for (const [bg, sex, wc] of cases) {
    const bmiMid = bg === 'asian' ? 25 : 27;
    const at = E.adaWaistClass(bmiMid, wc, H, sex, bg), under = E.adaWaistClass(bmiMid, wc - 0.1, H, sex, bg);
    assert.equal(at.background, bg); assert.equal(at.wcThresholdCm, wc);
    assert.equal(at.category, 'Obesity', `${bg} ${sex} at ${wc}`); assert.ok(at.wcHigh && !at.whtrHigh);
    assert.equal(under.category, 'Overweight', `${bg} ${sex} under ${wc}`);
  }
});

test('ADA waist: BMI band edges and WHtR 0.5 boundary', () => {
  // Asian: 23.0-27.4 is the waist band; 22.9 below; 27.5 obesity by BMI alone
  assert.equal(E.adaWaistClass(22.94, 120, 170, 'male', 'asian').zone, 'below');
  assert.equal(E.adaWaistClass(22.94, 120, 170, 'male', 'asian').category, null);
  assert.equal(E.adaWaistClass(22.95, 60, 170, 'male', 'asian').category, 'Overweight');      // rounds to 23.0
  assert.equal(E.adaWaistClass(27.44, 60, 170, 'male', 'asian').category, 'Overweight');
  assert.equal(E.adaWaistClass(27.45, 60, 170, 'male', 'asian').category, 'Obesity');        // 27.5
  // non-Asian: 25.0-29.9; 30 obesity
  assert.equal(E.adaWaistClass(24.9, 120, 170, 'female', 'non_asian').zone, 'below');
  assert.equal(E.adaWaistClass(25.0, 60, 170, 'female', 'non_asian').category, 'Overweight');
  assert.equal(E.adaWaistClass(29.9, 60, 170, 'female', 'non_asian').category, 'Overweight');
  assert.equal(E.adaWaistClass(30.0, 60, 170, 'female', 'non_asian').category, 'Obesity');
  // WHtR exactly 0.5 -> obesity in band, even with WC under the threshold (short person)
  const half = E.adaWaistClass(26, 75, 150, 'male', 'non_asian');
  assert.equal(half.whtr, 0.5); assert.ok(half.whtrHigh && !half.wcHigh); assert.equal(half.category, 'Obesity');
  const justUnder = E.adaWaistClass(26, 74.9, 150, 'male', 'non_asian');
  assert.equal(justUnder.category, 'Overweight');
  // no share cut-off: one background gives one classification, any Asian/non-Asian blend gives both
  assert.throws(() => E.adaWaistClass(24, 70, 170, 'male', 0.5));
  for (const sh of [0.01, 0.499, 0.5, 0.501, 0.99]) assert.equal(E.adaWaist(24, 70, 170, 'male', sh).classes.map((c) => c.background).join(), 'asian,non_asian', String(sh));
  assert.equal(E.adaWaist(24, 70, 170, 'male', 1).classes.map((c) => c.background).join(), 'asian');
  assert.equal(E.adaWaist(24, 70, 170, 'male', 0).classes.map((c) => c.background).join(), 'non_asian');
  assert.equal(E.adaWaist(24, 70, 170, 'male', 0.5).differ, true);     // Asian: overweight; non-Asian: below 25
  assert.equal(E.adaWaist(31, 70, 170, 'male', 0.5).differ, false);    // obesity by BMI under both
  // African / Middle Eastern are not ADA-Asian
  for (const a of ['african', 'middle_eastern', 'european', 'hispanic', 'pacific']) assert.equal(E.adaAsianShare([{ key: a, pct: 100 }]), 0, a);
  for (const a of ['east_asian', 'south_asian', 'se_asian', 'mixed_asian']) assert.equal(E.adaAsianShare([{ key: a, pct: 100 }]), 1, a);
});

test("ADA waist via the form: Brian's height, 34.5 in waist = WHtR 0.5; waist never changes the ranges; blank waist = no note", () => {
  const o = { height: '69', wrist: '6.5', weight: '160', ...mix([['se_asian', 50], ['european', 50]]), conditions: ['diabetes'] };
  const none = calc(o), w = calc({ ...o, waist: '34.5' }), w2 = calc({ ...o, waist: '34.4' });
  assert.equal(none.adaWaist, null); assert.equal(none.waist, null);
  // blend: 50% Asian -> both classifications; BMI 23.6 is in the Asian waist band but below the non-Asian 25
  assert.equal(w.adaWaist.asianShare, 0.5); assert.equal(w.adaWaist.differ, true);
  const [as, na] = w.adaWaist.classes;
  assert.equal(as.background, 'asian'); assert.equal(as.whtr, 0.5); near(as.halfHeightCm, 69 * IN / 2, 1e-9);
  assert.equal(as.zone, 'waist_band'); assert.equal(as.category, 'Obesity'); assert.equal(w2.adaWaist.classes[0].category, 'Overweight');
  assert.equal(na.background, 'non_asian'); assert.equal(na.zone, 'below'); assert.equal(na.category, null);
  for (const k of ['band', 'suggested', 'buffered', 'bufferZone']) assert.deepEqual(w[k], none[k], k);
  assert.deepEqual(w.bmiClass, none.bmiClass);
  // default (identify, largest share / first entered = SE Asian): one Asian classification
  const id = calc({ ...o, cutoffMode: undefined, waist: '34.5' });
  assert.equal(id.adaWaist.classes.map((c) => c.background).join(), 'asian'); assert.equal(id.adaWaist.classes[0].category, 'Obesity');
  // cm input parses the same
  near(calc({ ...o, waist: '87.63 cm' }).adaWaist.classes[0].whtr, 0.5, 1e-9);
});

test('waist validation: absurd values are rejected with a clear message', () => {
  for (const bad of ['10', '300 cm', 'abc']) {
    const v = E.validate(base({ waist: bad }));
    assert.equal(v.ok, false, bad); assert.ok(v.invalid.includes('waist'), bad);
  }
  const tiny = E.validate(base({ height: '75', waist: '16' }));   // 40.6 cm on 190 cm = WHtR 0.21
  assert.equal(tiny.ok, false); assert.match(tiny.errors.join(' '), /waist-to-height ratio of 0\.21/);
  assert.equal(E.validate(base({ waist: '' })).ok, true);
});

// ---------- Mixed ancestry: identify-with (ADA) vs percentage blend ----------
test('identify-with: equals the single-ancestry result for every cut-off-dependent output', () => {
  const m = mix([['se_asian', 50], ['european', 50]]);
  for (const conds of [[], ['diabetes'], ['diabetes', 'hypertension']]) for (const who of ['se_asian', 'european']) {
    const o = { height: '69', wrist: '6.5', waist: '34', conditions: conds };
    const id = calc({ ...o, ...m, cutoffMode: 'identify', identifyWith: who });
    const single = calc({ ...o, ancestryMode: 'single', ancestry: who });
    for (const k of ['band', 'suggested', 'bufferZone', 'buffered', 'bmiClass', 'adaWaist']) assert.deepEqual(id[k], single[k], who + ' ' + k);
    assert.deepEqual(id.group.group, single.group.group);
    assert.equal(id.cutoffMode, 'identify');
    assert.equal(id.food.length >= single.food.length, true);     // food notes still use every background entered
  }
});

test('identify-with is the default: largest share (ties: first entered); blend still available and unchanged', () => {
  const m = { ...mix([['se_asian', 50], ['european', 50]]), cutoffMode: undefined };
  const o = { height: '69', wrist: '6.5', weight: '150', conditions: ['diabetes'] };
  const def = calc({ ...o, ...m }), se = calc({ ...o, ancestry: 'se_asian' });
  assert.equal(def.cutoffMode, 'identify'); assert.equal(JSON.stringify(def.cutoffAncestries), JSON.stringify([{ key: 'se_asian', pct: 100 }]));
  for (const k of ['band', 'suggested', 'bufferZone', 'buffered', 'bmiClass']) assert.deepEqual(def[k], se[k], k);
  near(E.kgToLb(def.buffered.lowKg), 144.0, 0.05); near(E.kgToLb(def.buffered.highKg), 148.3, 0.05);
  // tie, other order -> European first
  const eu = calc({ ...o, ...mix([['european', 50], ['se_asian', 50]]), cutoffMode: 'identify' });
  assert.equal(eu.cutoffAncestries[0].key, 'european'); assert.equal(eu.buffered, null); assert.equal(eu.bufferZone, null);
  // largest share wins regardless of order; a blank identifyWith is the same as not choosing
  assert.equal(calc({ ...o, ...mix([['european', 40], ['south_asian', 60]]), cutoffMode: 'identify', identifyWith: '' }).cutoffAncestries[0].key, 'south_asian');
  assert.equal(calc({ ...o, ...mix([['european', 30], ['african', 30], ['east_asian', 40]]), cutoffMode: undefined }).cutoffAncestries[0].key, 'east_asian');
  // an explicit choice wins over the largest share
  assert.equal(calc({ ...o, ...mix([['european', 90], ['se_asian', 10]]), cutoffMode: 'identify', identifyWith: 'se_asian' }).cutoffAncestries[0].key, 'se_asian');
  // blend (explicit): blended 24 / 28.8, Devine below the BMI 23.4 cap, so no cap
  const blend = calc({ ...o, ...mix([['se_asian', 50], ['european', 50]]) });
  assert.equal(blend.cutoffMode, 'blend'); assert.equal(blend.group.group.overweight, 24); assert.equal(blend.buffered, null);
  near(E.kgToLb(blend.suggested.lowKg), 144.0, 0.05); near(E.kgToLb(blend.suggested.highKg), 155.9, 0.05);
  // identifyWith that was not entered is an error
  const v = E.validate(base({ ...m, cutoffMode: 'identify', identifyWith: 'east_asian' }));
  assert.equal(v.ok, false); assert.ok(v.invalid.includes('identifyWith')); assert.match(v.errors.join(' '), /identify with/);
  // single-ancestry mode ignores the mixed-only option
  assert.equal(E.validate(base({ cutoffMode: 'identify', identifyWith: 'x' })).ok, true);
});

test('age: required, adults only, 65+ caveat; pregnancy/breastfeeding gives no range', () => {
  for (const blank of ['', '  ', undefined, null]) {
    const v = E.validate(base({ age: blank }));
    assert.equal(v.ok, false); assert.ok(v.invalid.includes('age')); assert.match(v.errors.join(' '), /enter your age/);
  }
  for (const kid of ['17', '17.9', '5', '0']) {
    const v = E.validate(base({ age: kid }));
    assert.equal(v.ok, false, kid); assert.match(v.errors.join(' '), /for adults \(18 and over\)/, kid);
  }
  for (const bad of ['abc', '-3', '121', '400']) assert.equal(E.validate(base({ age: bad })).ok, false, bad);
  for (const ok of ['18', '40', '40 years', '64', '120']) assert.ok(E.validate(base({ age: ok })).ok, ok);
  assert.ok(!E.validate(base({ age: '64' })).warnings.some((w) => /65 or over/.test(w)));
  for (const old of ['65', '80']) assert.ok(E.validate(base({ age: old })).warnings.some((w) => /65 or over: BMI is less accurate/.test(w)), old);
  // age does not change the numbers
  assert.deepEqual(calc({ age: '70' }).suggested, calc({ age: '30' }).suggested);
  // pregnancy: female only; no weight range at all
  const p = calc({ sex: 'female', height: '64', wrist: '6', weight: '140', pregnant: true, conditions: ['diabetes'] });
  assert.equal(p.noRange, 'pregnancy');
  for (const k of ['band', 'suggested', 'buffered', 'bufferZone', 'conditionWeight']) assert.equal(p[k], undefined, k);
  assert.ok(p.food.length > 0);
  const notP = calc({ sex: 'male', pregnant: true });
  assert.equal(notP.noRange, undefined); assert.ok(notP.suggested);
});

test('Asia-Pacific (WPRO 2000) and Filipino notes are cited and scoped', () => {
  const ids = E.REFS.map((r) => r[0]);
  for (const k of ['wpro', 'pagsisihan', 'battie']) assert.ok(ids.includes(k), k);
  assert.match(E.REFS.find((r) => r[0] === 'battie')[2], /PMC5118592/);
  const se = E.ancestryNote('se_asian'), ea = E.ancestryNote('east_asian');
  assert.match(se, /Filipino/); assert.ok(!/Filipino/.test(ea));
  for (const n of [se, ea, E.ancestryNote('south_asian')]) assert.match(n, /provisional cut-offs of 23 \(overweight\) and 25 \(obesity\)/);
  assert.ok(!/Western Pacific/.test(E.ancestryNote('european')));
});

test('frame monotonicity also holds with identify-with cut-offs', () => {
  const bad = [];
  for (let hIn = 58; hIn <= 80; hIn++) for (const sex of ['male', 'female']) for (const who of ['se_asian', 'european']) for (const conds of [[], ['diabetes']]) {
    const c = E.wristCutoffs(hIn * IN, sex);
    const rs = [c.smallBelowCm * 0.97, (c.smallBelowCm + c.largeAboveCm) / 2, c.largeAboveCm * 1.03].map((cm) =>
      calc({ sex, height: String(hIn), weight: '150', wrist: (cm / IN).toFixed(3), conditions: conds, ...mix([['se_asian', 50], ['european', 50]]), cutoffMode: 'identify', identifyWith: who }));
    for (const get of [(r) => r.suggested, (r) => r.buffered || r.suggested]) {
      if (!get(rs[0])) continue;
      for (let i = 0; i < 2; i++) for (const e of ['lowKg', 'highKg']) if (get(rs[i])[e] > get(rs[i + 1])[e] + 1e-9) bad.push(`${hIn} ${sex} ${who} ${conds} ${e}`);
    }
  }
  assert.deepEqual(bad, []);
});

const ASIAN_TEXT = /Asian|Asia\b|WPRO|Western Pacific|Filipino|Thai|Chinese/;
test('ancestry notes: each background gets its own evidence and no other group\u2019s', () => {
  const asian = ['east_asian', 'south_asian', 'se_asian', 'mixed_asian'];
  for (const k of Object.keys(E.ANCESTRIES)) {
    const n = E.ancestryNote(k);
    if (asian.includes(k)) assert.match(n, /Asian/, k);
    else assert.doesNotMatch(n, ASIAN_TEXT, k + ' note mentions Asian evidence');
  }
  const af = E.ancestryNote('african');
  assert.match(af, /NICE/); assert.match(af, /28\.1/); assert.match(af, /ADA 2026/); assert.match(af, /1\.3/);
  assert.doesNotMatch(af, /23\.9|26\.6|Arab|Polynesian/);
  const me = E.ancestryNote('middle_eastern');
  assert.match(me, /NICE/); assert.match(me, /26\.6/); assert.doesNotMatch(me, /28\.1|Black|Polynesian/);
  assert.match(E.ancestryNote('pacific'), /4\.5/);
  assert.match(E.ancestryNote('hispanic'), /No major guideline.*Hispanic/);
  assert.match(E.ancestryNote('native_american'), /No major guideline.*Native American/);
  assert.match(E.ancestryNote('european'), /WHO/);
  assert.match(E.ancestryNote('se_asian'), /Filipino/);
  assert.doesNotMatch(E.ancestryNote('east_asian'), /Filipino/);
  assert.ok(E.REFS.some((r) => r[0] === 'deurenberg' && /9877251/.test(r[2])));
});

test('buffer zone and diabetes cap are Asian-only (the BMI 22 evidence is from Asian populations)', () => {
  for (const anc of ['african', 'middle_eastern']) {
    const r = calc({ ancestry: anc, conditions: ['diabetes'] });
    assert.equal(r.bufferZone, null, anc);
    assert.equal(r.group.group.overweight, 23, anc + ' still gets NICE lower cut-offs');
    const plain = calc({ ancestry: anc });
    assert.equal(JSON.stringify(r.suggested), JSON.stringify(plain.suggested), anc + ' diabetes does not cap');
  }
  assert.ok(calc({ ancestry: 'south_asian', conditions: ['diabetes'] }).bufferZone, 'Asian keeps the zone');
  const bl = calc({ ancestryMode: 'mixed', cutoffMode: 'blend', makeup: [{ ancestry: 'african', pct: '50' }, { ancestry: 'east_asian', pct: '50' }, { ancestry: '', pct: '' }] });
  // Asian share 50% -> start 23.5, above the blended cap of 22.9, so no zone (it was 22 when the Black half counted)
  assert.equal(bl.bufferZone, null, 'zone start blended by the Asian share only');
});
