// Phase 1 population regression tests. Run: node tests/population-phase1.test.mjs
// Uses Node built-ins only and executes the calculator core with no browser or network.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../optimal_body_weight_calculator-9.html', import.meta.url), 'utf8');
const core = html.match(/<script id="calc-core">([\s\S]*?)<\/script>/)?.[1];
const ui = html.match(/<script id="calc-ui">([\s\S]*?)<\/script>/)?.[1];
assert.ok(core, 'calculation core exists');
assert.ok(ui, 'UI script exists');
new Function('window', 'document', ui); // syntax validation without executing browser APIs
const ctx = { window: {} };
vm.runInNewContext(core, ctx, { filename: 'calc-core.js' });
const E = ctx.window.EBOW;
assert.ok(E && E.calculate && E.POP_REGIONS && E.populationNote);

const all = E.POP_REGIONS.flatMap(r => r[3].map(entry => ({ key: entry[0], parent: r[2] })));
assert.equal(E.POP_REGIONS.length, 11);
assert.equal(all.length, 62);
assert.equal(new Set(all.map(s => s.key)).size, all.length, 'subgroup keys unique');
for (const { key, parent } of all) {
  assert.equal(E.ANCESTRIES[key].parent, parent);
  assert.equal(E.ANCESTRIES[key].group, E.ANCESTRIES[parent].group,
    `No new clinical BMI classification: ${key}`);
  assert.equal(!!E.ANCESTRIES[key].adaAsian, !!E.ANCESTRIES[parent].adaAsian);
  assert.match(E.populationNote(key), /Evidence:/);
}
assert.equal(E.ANCESTRIES.australian_indigenous.group, 'standard');
for (const [key, profile] of Object.entries(E.POP_EVIDENCE)) {
  assert.ok(E.ANCESTRIES[key]?.parent, `Profile ${key} must have taxonomy entry`);
  for (const ref of profile[2]) {
    assert.ok(E.REFS.some(r => r[0] === ref), `Missing citation ${key}: ${ref}`);
  }
  assert.match(E.populationNote(key), /href=/);
}
assert.match(E.heritageNote('frenchcanadian'), /pop_fh|ncbi\.nlm\.nih\.gov/);
assert.equal(E.heritageNote('none'), '');

const input = ancestry => ({
  sex: 'female', age: '43', height: '65', heightUnit: 'in',
  weight: '158', weightUnit: 'lb', wrist: '6.1', wristUnit: 'in',
  elbow: '', elbowUnit: 'in', waist: '32', waistUnit: 'in',
  ancestryMode: 'single', ancestry,
  conditions: ['diabetes', 'hypertension']
});
const numericFields = ['bmi', 'band', 'suggested', 'bufferZone', 'buffered',
  'waist', 'adaWaist', 'conditionWeight'];
let checked = 0;
for (const { key, parent } of all) {
  const a = E.validate(input(parent)), b = E.validate(input(key));
  assert.equal(a.ok, true, JSON.stringify(a.errors));
  assert.equal(b.ok, true, JSON.stringify(b.errors));
  const base = E.calculate(a.values), specific = E.calculate(b.values);
  for (const field of numericFields) {
    assert.equal(JSON.stringify(specific[field]), JSON.stringify(base[field]),
      `Clinical math changed for ${key} in ${field}`);
  }
  checked++;
}
// Distinct subgroups from the same broad population must work as mixed heritage.
const mixed = E.validate({
  ...input('eu_scandi'), ancestryMode: 'mixed',
  makeup: [{ ancestry: 'eu_scandi', pct: '40' }, { ancestry: 'eu_medit', pct: '60' }],
  cutoffMode: 'identify', identifyWith: 'eu_medit'
});
assert.equal(mixed.ok, true, JSON.stringify(mixed.errors));
assert.equal(mixed.values.identifyWith, 'eu_medit');
const asianMixed = E.validate({
  ...input('sa_india'), ancestryMode: 'mixed',
  makeup: [{ ancestry: 'sa_india', pct: '50' }, { ancestry: 'sa_bangladesh', pct: '50' }],
  cutoffMode: 'blend'
});
assert.equal(asianMixed.ok, true, JSON.stringify(asianMixed.errors));

// The form's public components and accessibility labels are part of Phase 1.
for (const id of ['singleRegion','singleDetail','mixRegion1','mixDetail1',
  'mixRegion2','mixDetail2','mixRegion3','mixDetail3','heritageProfile','primaryWeight']) {
  assert.ok(html.includes(id), `Missing form/results component ${id}`);
}
assert.match(html, /setupPopulationRow\('single', 'ancestry'\)/);
assert.match(html, /Population-informed health information/);
console.log(`Phase 1 OK: ${checked} subgroup pairs have identical clinical calculations to their parents; citations, form, and mixed-ancestry checks pass.`);
