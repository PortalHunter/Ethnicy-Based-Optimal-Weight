import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const audit = read('docs/research/evidence/ANC_NUT_PGX_INDEPENDENT_AUDIT_BATCH_01_2026-11-04.md');
const rows = read('docs/research/UNIFIED_CLAIM_INDEX_2026-11-04.csv').trim().split(/\r?\n/);
const expected = [
  ['ANC-001', 'CORROBORATED_NARROW', '10.1016/S0140-6736(03)15268-3'],
  ['ANC-002', 'CORROBORATED_NARROW', '1.9.11'],
  ['NUT-001', 'CORROBORATED_NARROW', '10.1056/NEJMoa012512'],
  ['PGX-002', 'QUALIFIED', '10.1001/jama.2020.12443'],
  ['PGX-003', 'CORROBORATED_NARROW', '10.1002/cpt.1004']
];
assert.equal(rows.length, 137, 'Unified claim inventory must retain all 136 rows');
assert.equal(new Set(expected.map(x => x[0])).size, expected.length, 'Duplicate reviewed ID');
for (const [id, status, anchor] of expected) {
  const row = rows.find(line => line.startsWith('"' + id + '",'));
  assert.ok(row && row.includes('"NOT_AUDITED_IN_THIS_PASS"'),
    'Historical Team-4-era registry must remain unaltered: ' + id);
  const heading = audit.indexOf('### ' + id + ' —');
  assert.ok(heading >= 0, 'Missing substantive individual review: ' + id);
  const next = audit.indexOf('\n### ', heading + 1);
  const section = audit.slice(heading, next < 0 ? audit.length : next);
  assert.ok(section.includes(anchor), 'Missing exact source anchor for ' + id);
  assert.ok(section.includes('Disposition:') && section.includes(status),
    'Missing narrow appraisal disposition for ' + id);
  assert.ok(section.length > 700, 'Appraisal too short to verify source/population/limits: ' + id);
}
assert.ok(audit.includes('**89 other original ANC/NUT/PGX claims**'),
  'Remaining independent-review backlog must be explicit');
assert.ok(audit.includes('LAB-040') && audit.includes('WITHHELD'),
  'Lab-adjusted ideal-weight claim must remain withheld');
for (const n of [7, 19, 22, 27, 29, 30, 37]) {
  const id = 'LAB-' + String(n).padStart(3, '0');
  assert.ok(audit.includes(id), 'Missing unresolved laboratory evidence gap: ' + id);
}
assert.ok(audit.includes('No public diet, lab, BMI or drug logic was changed.'),
  'Audit must not authorize public clinical changes');
console.log('Independent audit batch 01: five bounded appraisals, 89 pending, seven LAB gaps and LAB-040 withheld.');
