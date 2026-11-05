// Research governance check: this validates the claim ledger's structure, NOT scientific truth.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const path = new URL('../docs/research/REGIONAL_CONDITION_CLAIM_LEDGER_2026-11-04.csv', import.meta.url);
const raw = readFileSync(path, 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const core = readFileSync(new URL('../preview-assets/core.js', import.meta.url), 'utf8');

function parseCsv(s) {
  const records = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (quoted) {
      if (c === '"') {
        if (s[i + 1] === '"') { cell += '"'; i++; }
        else quoted = false;
      } else cell += c;
    } else if (c === '"') {
      assert.equal(cell, '', 'CSV quote must start a field');
      quoted = true;
    } else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); records.push(row); row = []; cell = ''; }
    else if (c !== '\r') cell += c;
  }
  assert.ok(!quoted, 'Unterminated quoted CSV field');
  if (row.length || cell) { row.push(cell); records.push(row); }
  assert.ok(records.length > 1, 'Claim ledger must have a header and records');
  const headers = records.shift();
  assert.equal(new Set(headers).size, headers.length, 'Duplicate CSV header');
  return records.filter(r => r.some(x => x.length)).map((r, i) => {
    assert.equal(r.length, headers.length, 'Bad column count at CSV data row ' + (i + 2));
    return Object.fromEntries(headers.map((h, j) => [h, r[j]]));
  });
}

const rows = parseCsv(raw);
assert.ok(rows.length >= 35, 'Initial 35 candidate claims should remain present');
const keys = new Set([...html.matchAll(/class="cond" value="([^"]+)"/g)].map(x => x[1]));
assert.deepEqual([...keys].sort(),
  ['diabetes', 'hypertension', 'high_chol', 'gout', 'lactose', 'celiac', 'hemochromatosis'].sort(),
  'Current seven condition controls must be reviewed before mapping logic changes');

const ctx = { window: {} };
vm.runInNewContext(core, ctx, { filename: 'core.js' });
const known = ctx.window.EBOW?.ANCESTRIES || {};
const prefixes = { RDI: 'diabetes', RHT: 'hypertension', RLD: 'high_chol', RGT: 'gout', RLC: 'lactose', RCD: 'celiac', RFE: 'hemochromatosis' };
const statuses = new Set(['CANDIDATE_UNVERIFIED', 'SOURCE_VERIFIED', 'QUALIFIED', 'CONTRADICTED', 'WITHHELD', 'APPROVED_EDUCATIONAL']);
const ids = new Set(), issueNumbers = new Set(), distribution = {};
for (const row of rows) {
  for (const h of ['claim_id', 'condition_key', 'proposed_ancestry_keys', 'geography_or_studied_population',
    'original_language', 'source_title', 'source_url', 'candidate_claim', 'appraisal_status',
    'mapping_status', 'patient_facing_status', 'issue_number', 'issue_url']) {
    assert.ok(row[h] && row[h].trim(), 'Missing ' + h + ' in ' + row.claim_id);
  }
  const match = /^([A-Z]{3})-(\d{3,})$/.exec(row.claim_id);
  assert.ok(match && prefixes[match[1]], 'Unexpected claim ID: ' + row.claim_id);
  assert.equal(row.condition_key, prefixes[match[1]], 'Prefix/condition mismatch: ' + row.claim_id);
  assert.ok(keys.has(row.condition_key), 'Unsupported condition: ' + row.claim_id);
  assert.ok(!ids.has(row.claim_id), 'Duplicate claim ID: ' + row.claim_id);
  ids.add(row.claim_id);
  assert.ok(/^https:\/\//.test(row.source_url), 'Non-HTTPS source: ' + row.claim_id);
  assert.ok(/^https:\/\/github\.com\/PortalHunter\/Ethnicy-Based-Optimal-Weight\/issues\/\d+$/.test(row.issue_url),
    'Malformed public issue URL: ' + row.claim_id);
  assert.equal(row.issue_url.split('/').pop(), row.issue_number, 'Issue number does not match URL');
  assert.ok(!issueNumbers.has(row.issue_number), 'Two claims point to the same issue');
  issueNumbers.add(row.issue_number);
  const ancestryKeys = row.proposed_ancestry_keys.split('|');
  assert.equal(new Set(ancestryKeys).size, ancestryKeys.length, 'Duplicate ancestry mapping: ' + row.claim_id);
  for (const ancestry of ancestryKeys) assert.ok(known[ancestry], 'Unknown ancestry ' + ancestry + ' in ' + row.claim_id);
  assert.ok(statuses.has(row.appraisal_status), 'Unknown evidence status ' + row.appraisal_status);
  if (row.appraisal_status !== 'APPROVED_EDUCATIONAL') {
    assert.equal(row.mapping_status, 'PROPOSED_NOT_APPROVED', 'Unapproved ancestry mapping in ' + row.claim_id);
    assert.equal(row.patient_facing_status, 'WITHHELD_PENDING_APPRAISAL', 'Unreviewed claim marked publishable in ' + row.claim_id);
  } else {
    assert.equal(row.mapping_status, 'APPROVED_CONTEXT_ONLY', 'Approved claim has no mapping review: ' + row.claim_id);
    assert.equal(row.patient_facing_status, 'APPROVED_EDUCATIONAL_ONLY', 'Approved claim lacks display gate: ' + row.claim_id);
    for (const h of ['original_text_quote', 'precise_population_and_denominator', 'endpoint_effect_uncertainty',
      'conflicting_evidence_and_limitations', 'reviewer', 'review_date', 'decision_note']) {
      assert.ok(row[h]?.trim(), 'Approved claim missing independently reviewed ' + h + ': ' + row.claim_id);
    }
  }
  distribution[row.condition_key] = (distribution[row.condition_key] || 0) + 1;
}
for (const condition of keys) assert.ok(distribution[condition], 'No research claim seeded for ' + condition);
console.log('Regional claim ledger integrity: ' + rows.length + ' records; ' +
  Object.entries(distribution).map(([k, n]) => k + '=' + n).join(', ') +
  '. This is a STRUCTURAL gate, not evidence validation.');
