import test from 'node:test';
import assert from 'node:assert/strict';
import { loadCore } from './load-core.mjs';
const { E, html } = loadCore();

// Expected values below are computed by hand from the published formulas, NOT by calling the code.
const LB = 0.45359237, IN = 2.54;
const near = (a, b, tol = 1e-6, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const base = (o = {}) => ({ sex: 'male', height: '70', heightUnit: 'in', weight: '180', weightUnit: 'lb',
  wrist: '7', wristUnit: 'in', elbow: '', elbowUnit: 'in', waist: '', waistUnit: 'in',
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
  const r = calc({ ancestryMode: 'mixed', makeup: [{ ancestry: 'european', pct: '50' }, { ancestry: 'east_asian', pct: '50' }, { ancestry: '', pct: '' }] });
  near(r.band.highKg, 23.9 * 1.778 ** 2, 1e-9);
  assert.ok(r.altBands.standard.highKg > r.band.highKg && r.altBands.lower.highKg < r.band.highKg);
});

test('condition weighting: moves suggested range down and narrower, by the specified amounts, inside the band', () => {
  const none = calc({});
  assert.equal(none.conditionAdjusted, null);
  const d = calc({ conditions: ['diabetes'] });
  const s = d.suggested, a = d.conditionAdjusted;
  const mid = (s.lowKg + s.highKg) / 2 - 0.35, half = (s.highKg - s.lowKg) / 2 * 0.95;
  near(a.lowKg, mid - half, 1e-9); near(a.highKg, mid + half, 1e-9);
  const all = calc({ conditions: ['diabetes', 'hypertension', 'high_chol', 'gout'] }).conditionAdjusted;
  assert.equal(all.shiftKg, -0.85); near(all.tighten, 0.95 * 0.97 * 0.98, 1e-4);
  assert.ok(all.highKg < a.highKg, 'more conditions -> lower upper edge');
  // non-metabolic conditions do not change weight
  assert.equal(calc({ conditions: ['celiac', 'lactose', 'hemochromatosis'] }).conditionAdjusted, null);
  // clamped: a suggested range already at the band floor cannot be pushed below 18.5
  const band = { lowKg: 50, highKg: 60 };
  const c = E.conditionAdjustedRange({ lowKg: 50, highKg: 51 }, band, ['diabetes', 'hypertension']);
  assert.ok(c.lowKg >= 50 && c.highKg <= 60 && c.lowKg < c.highKg);
  // sweep: always within band
  for (let hIn = 60; hIn <= 78; hIn++) for (const anc of ['european', 'south_asian']) {
    const r = calc({ height: String(hIn), ancestry: anc, conditions: ['diabetes', 'hypertension', 'high_chol', 'gout'] });
    assert.ok(r.conditionAdjusted.lowKg >= r.band.lowKg - 1e-9 && r.conditionAdjusted.highKg <= r.band.highKg + 1e-9);
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
