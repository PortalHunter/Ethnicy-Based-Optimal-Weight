import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadCore } from '../tests/load-core.mjs';

const base = new URL('../', import.meta.url);
function blobSha(path) {
  const data = readFileSync(new URL(path, base));
  return createHash('sha1').update(Buffer.concat([
    Buffer.from('blob ' + data.length + '\0'), data
  ])).digest('hex');
}
assert.equal(blobSha('optimal_body_weight_calculator-9.html'),
  'd7e0896e9403940f2db0f4aeb177bbf77535688d',
  'Phase 1 clinical baseline changed: review algorithms and source citations before changing v9');
assert.equal(blobSha('LICENSE'), '005ac3c15801c98fd0caecad635f52a603b59ed1',
  'License must not change without separate maintainer decision');

// The 17 original research reports live in two folders: evidence/ (matrices and reviews)
// and process-notes/ (recommendations, validation plans, handoffs and the module proposal).
const research = new URL('../docs/research/', import.meta.url);
const located = {};
for (const sub of ['evidence', 'process-notes']) {
  for (const name of readdirSync(new URL(sub + '/', research)).filter((s) => /^(01|02|03)_.*\.md$/.test(s))) {
    located[name] = new URL(sub + '/' + name, research);
  }
}
const docs = Object.keys(located).sort();
assert.equal(docs.length, 17, 'All 17 original source reports must remain archived');
const counts = { '01': 0, '02': 0, '03': 0 };
for (const file of docs) {
  const content = readFileSync(located[file], 'utf8');
  assert.ok(content.length > 3000, 'Empty or truncated research report: ' + file);
  counts[file.slice(0, 2)]++;
}
assert.deepEqual(counts, { '01': 5, '02': 6, '03': 6 });
for (const [file, prefix] of [
  ['01_Ancestry_Evidence_Matrix.md', 'ANC-'],
  ['02_Nutrition_Evidence_Matrix.md', 'NUT-'],
  ['03_Pharmacogenetics_Evidence_Matrix.md', 'PGX-']]) {
  assert.ok(located[file] && located[file].pathname.includes('/evidence/'), 'Evidence matrix must be in docs/research/evidence/: ' + file);
  const content = readFileSync(located[file], 'utf8');
  assert.ok(content.includes(prefix), 'Missing claim registry prefix ' + prefix);
}
const { E } = loadCore();
assert.ok(E.REFS.length > 20, 'Expected baseline references');
const ids = E.REFS.map((r) => r[0]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate citation keys');
for (const [id, , url] of E.REFS) {
  assert.equal(new URL(url).protocol, 'https:', 'Unsafe or malformed source URL: ' + id);
}
const page = readFileSync(new URL('research-preview.html', base), 'utf8');
for (const s of ['Research &amp; scientific sources', 'Body weight, BMI and ancestry', 'Metabolic health and nutrition', 'Pharmacogenetics', 'do not establish']) {
  assert.ok(page.toLowerCase().includes(s.toLowerCase()), 'Missing public source/safety content: ' + s);
}
for (const forbidden of [/docs\/research\/(source|evidence|process-notes)\//i, /docs\/process\//i, /docs\/EVIDENCE_INTEGRATION/i, /cross-team implementation/i, /research-team notes/i, /AI agents/i, /bots/i]) {
  assert.ok(!forbidden.test(page), 'Internal project material leaked into public sources page: ' + forbidden);
}
for (const [key, , url] of E.REFS) {
  assert.ok(page.includes(url.replaceAll('&', '&amp;')), 'Public scientific bibliography missing calculator source: ' + key);
}

// The live site's engine (preview-assets/core.js) is protected by fingerprint, and the classic
// calculator's built-in engine must stay identical to it, so a UI change can never alter the math.
assert.equal(blobSha('preview-assets/core.js'), 'a41cb39b53c15e4b975a59ccc27099bf848acf8c',
  'Live calculation engine changed: review algorithms and source citations before changing preview-assets/core.js');
const baseline = readFileSync(new URL('optimal_body_weight_calculator-9.html', base), 'utf8');
const liveCore = readFileSync(new URL('preview-assets/core.js', base), 'utf8');
const live = readFileSync(new URL('index.html', base), 'utf8');
const m = baseline.match(/<script id="calc-core">([\s\S]*?)<\/script>/);
assert.ok(m, 'Missing original calculation core in the classic calculator');
assert.equal(liveCore.trim(), m[1].trim(), 'Live engine and classic calculator engine have drifted apart');
assert.ok(live.includes('src="preview-assets/core.js"'), 'Live site must load the protected engine');
assert.ok(live.indexOf('id="calcForm"') < live.indexOf('id="personalSummary"'), 'Results should appear directly after the calculator form');
for (const id of ['heightFeet', 'heightInches', 'heightMetricField']) {
  assert.ok(live.includes('id="' + id + '"'), 'Missing accessible height UI: ' + id);
}
const bibliography = readFileSync(new URL('docs/research/SOURCE_INDEX.md', base), 'utf8');
for (const name of docs) assert.ok(bibliography.includes(name), 'Missing research report in source index: ' + name);
for (const [id, , url] of E.REFS) {
  assert.ok(bibliography.includes(url), 'Missing original reference URL in source index: ' + id);
}
console.log('Verified protected classic calculator and live engine (identical), 17 reports, all reference keys, and source index.');



// Team 4: preserve eight original, unedited lab research reports. These are
// research drafts, not clinical validation or authorization for app advice.
const team4Originals = [
  ['docs/research/evidence/04_Ancestry_Laboratory_Interactions.md','ba8121a25525f96691b5bff81dd13306afe7f2fd'],
  ['docs/research/evidence/04_Laboratory_Biomarker_Research_Review.md','aef49b072cc658e6f7c11acce7fbf5244651fc30'],
  ['docs/research/evidence/04_Laboratory_Evidence_Matrix.md','989f199d1663d32c6a3a41cecd31fbf3e6733f73'],
  ['docs/research/evidence/04_Nutrition_Intervention_Matrix.md','f7713cd2b954dbf1ca7163d0c716009169bbc26b'],
  ['docs/research/process-notes/04_Clinical_Validation_Roadmap.md','89506d8f8f837f1728c513a91a07351512b60ea1'],
  ['docs/research/process-notes/04_Laboratory_Feature_Prioritization.md','a582178b72935d5093b9ab3f9db0ae0c376b6777'],
  ['docs/research/process-notes/04_Laboratory_Integration_Handoff.md','9116998cca9c140bd685cc62385bc5eda79d4f83'],
  ['docs/research/process-notes/04_Laboratory_Safety_Framework.md','9fa61b789ceaca623aeabfb0fdce47ef46b21017']
];
for (const [path, expectedSha] of team4Originals) {
  assert.equal(blobSha(path), expectedSha, 'Original Team 4 research was modified: ' + path);
}

const unified = readFileSync(new URL('docs/research/UNIFIED_CLAIM_INDEX_2026-11-04.csv', base),'utf8')
  .trim().split(/\r?\n/);
assert.equal(unified.length, 137, 'Expected a header and 136 distinct team 1-4 claim rows');
assert.ok(unified[0].startsWith('claim_id,team,topic,'));
const team4Counts = { ANC:0, NUT:0, PGX:0, LAB:0 };
const distinct = new Set();
for (const line of unified.slice(1)) {
  const match = /^"(ANC|NUT|PGX|LAB)-(\d{3})",/.exec(line);
  assert.ok(match, 'Malformed/unrecognized claim ID in unified index');
  const id = match[1] + '-' + match[2];
  assert.ok(!distinct.has(id), 'Duplicate claim ID: ' + id);
  distinct.add(id); team4Counts[match[1]]++;
  if (match[1] !== 'LAB') {
    assert.ok(line.includes('"NOT_AUDITED_IN_THIS_PASS"'),
      'Do not imply earlier ANC/NUT/PGX research was independently audited: ' + id);
  }
}
assert.deepEqual(team4Counts, { ANC:28, NUT:30, PGX:36, LAB:42 });
const team4Audit = readFileSync(
  new URL('docs/research/evidence/04_LAB_CLAIM_AUDIT_2026-11-04.md',base),'utf8');
for (let i = 1; i <= 42; i++) {
  const id = 'LAB-' + String(i).padStart(3,'0');
  assert.ok(team4Audit.includes('[' + id + ']'), 'Missing laboratory audit row: ' + id);
}
for (const n of [7,19,22,27,29,30,37]) {
  const id = 'LAB-' + String(n).padStart(3,'0');
  const matching = team4Audit.split('\n').find(line => line.includes('[' + id + ']'));
  assert.ok(matching?.includes('SOURCE_GAP'), 'Unresolved citation gap must remain flagged: '+id);
}
const lab40 = team4Audit.split('\n').find(line => line.includes('[LAB-040]'));
assert.ok(lab40?.includes('WITHHELD'), 'Lab-to-weight inference must remain explicitly withheld');

console.log('Verified eight original Team 4 files, 136 cross-team claim IDs, 42 LAB audit rows, seven citation gaps and one withheld weight inference.');
