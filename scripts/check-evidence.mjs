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
// Four-team research-only index checks. A claim's presence does not certify its clinical use.
const claimCsv = readFileSync(new URL('UNIFIED_CLAIM_INDEX_2026-11-04.csv', research), 'utf8');
const rows = claimCsv.trimEnd().split(/\r?\n/);
assert.ok(rows[0].startsWith('claim_id,team,topic,legacy_grade,'), 'Unified claim CSV header drift');
const identifiers = [];
const grouped = { ANC: 0, NUT: 0, PGX: 0, LAB: 0 };
const labAuditStatuses = { SUPPORTED_SCOPE: 0, QUALIFIED: 0, SOURCE_GAP: 0, WITHHELD: 0 };
for (const line of rows.slice(1)) {
  const m = line.match(/^"((ANC|NUT|PGX|LAB)-\d{3})","(ANC|NUT|PGX|LAB)",/);
  assert.ok(m, 'Malformed claim index row: ' + line.slice(0, 100));
  assert.equal(m[2], m[3], 'Claim prefix / team mismatch: ' + m[1]);
  identifiers.push(m[1]);
  grouped[m[2]]++;
  const status = line.match(/,"(SUPPORTED_SCOPE|QUALIFIED|SOURCE_GAP|WITHHELD|NOT_AUDITED_IN_THIS_PASS)",/);
  assert.ok(status, 'Missing explicit verification status: ' + m[1]);
  if (m[2] === 'LAB') {
    assert.notEqual(status[1], 'NOT_AUDITED_IN_THIS_PASS', 'LAB claim requires individual review: ' + m[1]);
    labAuditStatuses[status[1]]++;
  } else {
    assert.equal(status[1], 'NOT_AUDITED_IN_THIS_PASS', 'Do not imply ANC/NUT/PGX claims have been independently re-audited: ' + m[1]);
  }
}
assert.equal(identifiers.length, 136, 'Unexpected unified claim count');
assert.equal(new Set(identifiers).size, 136, 'Duplicate evidence claim ID');
assert.deepEqual(grouped, { ANC: 28, NUT: 30, PGX: 36, LAB: 42 });
assert.deepEqual(labAuditStatuses, { SUPPORTED_SCOPE: 26, QUALIFIED: 8, SOURCE_GAP: 7, WITHHELD: 1 });
const claimMatrices = {
  ANC: '01_Ancestry_Evidence_Matrix.md',
  NUT: '02_Nutrition_Evidence_Matrix.md',
  PGX: '03_Pharmacogenetics_Evidence_Matrix.md',
  LAB: '04_Laboratory_Evidence_Matrix.md'
};
for (const [team, name] of Object.entries(claimMatrices)) {
  const matrix = readFileSync(new URL('evidence/' + name, research), 'utf8');
  for (const id of identifiers.filter(x => x.startsWith(team + '-'))) {
    assert.ok(matrix.includes(id), 'Missing ' + id + ' in ' + name);
  }
}
const labAudit = readFileSync(new URL('evidence/04_LAB_CLAIM_AUDIT_2026-11-04.md', research), 'utf8');
const audited = [...labAudit.matchAll(/^\| \[(LAB-\d{3})\]/gm)].map(m => m[1]);
assert.equal(audited.length, 42, 'Expected exactly 42 LAB audit table rows');
assert.equal(new Set(audited).size, 42, 'Duplicated LAB audit row');
assert.deepEqual(audited.sort(), identifiers.filter(id => id.startsWith('LAB-')).sort(), 'LAB audit and registry differ');
const researchTeam4 = ['evidence/04_Laboratory_Biomarker_Research_Review.md', 'evidence/04_Laboratory_Evidence_Matrix.md',
  'evidence/04_Ancestry_Laboratory_Interactions.md', 'evidence/04_Nutrition_Intervention_Matrix.md',
  'process-notes/04_Laboratory_Feature_Prioritization.md', 'process-notes/04_Laboratory_Integration_Handoff.md',
  'process-notes/04_Laboratory_Safety_Framework.md', 'process-notes/04_Clinical_Validation_Roadmap.md'];
for (const report of researchTeam4) {
  assert.ok(readFileSync(new URL(report, research), 'utf8').length > 3000, 'Missing or truncated Team 4 source: ' + report);
}
console.log('Verified 136 unique four-team IDs, 42 explicit LAB audit rows, and eight original Team 4 reports.');

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

