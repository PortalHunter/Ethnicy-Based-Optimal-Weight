// Validate staged external diet research without making new clinical claims.
// Only checks integrity/traceability; it does not certify the cited studies.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const root = new URL('../docs/research/handoffs/grok-2026-11-04/', import.meta.url);
const load = (name) => JSON.parse(readFileSync(new URL(name, root), 'utf8'));
const manifest = load('SOURCE_CHECKSUMS.json');
const index = load('CLAIM_REGISTER.json');
assert.equal(manifest.date, '2026-11-04');
assert.equal(manifest.raw_sources_in_git, true,
  'Source archives must be committed and verified against the published checksum manifest');
assert.equal(index.raw_files_archived_on_github, true,
  'The 16 originals and 4 corrected CSVs are now expected in GitHub');
assert.equal(manifest.source_root, 'source-files/');
assert.equal(index.source_file_root, manifest.source_root);
assert.equal(manifest.raw_files.length, 16, 'Expected sixteen original files');
assert.equal(manifest.normalized_csvs.length, 4, 'Expected four curated CSV files');
const unique = new Set();
for (const file of [...manifest.raw_files,...manifest.normalized_csvs]) {
  assert.match(file.relative_path, /^(A|B|C|D|normalized)\/[A-Za-z_0-9.-]+\.(?:md|csv)$/);
  assert.match(file.sha256, /^[a-f0-9]{64}$/, 'Invalid provenance SHA256');
  assert.ok(file.bytes > 100, 'Missing/empty source file');
  assert.ok(!unique.has(file.relative_path), 'Duplicate source path');
  unique.add(file.relative_path);
}
assert.equal(index.records.length,26,'Expected twenty-six claim rows');
const countByTeam={A:0,B:0,C:0,D:0};
const countByReview={
  ANCHOR_CHECKED_SCOPE_LIMITED:0,
  QUALIFIED_SOURCE_SCOPE:0,
  UNTRACEABLE_REFERENCE:0
};
const idSet=new Set();
const sourceSet=new Set();
for (const r of index.records) {
  assert.ok(['A','B','C','D'].includes(r.team));
  assert.match(r.claim_id, /^DIET-[A-D]-\d{3}$/);
  assert.equal(r.claim_id,'DIET-'+r.team+'-'+String(++countByTeam[r.team]).padStart(3,'0'));
  assert.ok(!idSet.has(r.claim_id)); idSet.add(r.claim_id);
  assert.ok(typeof r.source_record_id==='string' && r.source_record_id.trim());
  const key=r.team+'/'+r.source_record_id;
  assert.ok(!sourceSet.has(key),'Duplicate handoff row: '+key); sourceSet.add(key);
  assert.ok(unique.has(r.source_file),'Source CSV absent from provenance manifest: '+r.source_file);
  assert.ok(Object.hasOwn(countByReview,r.source_review_status));
  countByReview[r.source_review_status]++;
  assert.ok(['GENERAL_EDUCATION_ONLY','CONTEXT_ONLY','REQUIRES_CLINICAL_REVIEW','WITHHOLD'].includes(r.public_use_gate));
  assert.equal(r.grok_source_verified_date_is_independent_audit,false);
  assert.ok(r.scope_note?.length >= 35,'Missing source-specific limitations: '+r.claim_id);
  if (r.source_review_status==='UNTRACEABLE_REFERENCE') {
    assert.equal(r.public_use_gate,'WITHHOLD');
    assert.equal(r.corroborating_source_url,'');
  } else {
    assert.match(r.corroborating_source_url,/^https:\/\//);
  }
  assert.ok(!/PERSONALIZED|AUTOPRESCRIBE/.test(r.public_use_gate));
}
assert.deepEqual(countByTeam,{A:5,B:8,C:6,D:7});
assert.deepEqual(countByReview,{
  ANCHOR_CHECKED_SCOPE_LIMITED:17,
  QUALIFIED_SOURCE_SCOPE:8,
  UNTRACEABLE_REFERENCE:1
});
const blocked=index.records.filter(r=>r.public_use_gate==='WITHHOLD');
assert.deepEqual(blocked.map(r=>r.source_record_id),['KETO_LDL_META_EXAMPLE']);
assert.ok(index.review_scope.includes('not full-text critical appraisal'));

// Parse CSV in the repository, including escaped quotes and quoted commas.
// In particular, preserving the originally malformed rows is deliberate.
function parseCsv(content) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    if (ch === '"') {
      if (quoted && content[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (ch === ',' && !quoted) {
      row.push(field); field = '';
    } else if ((ch === '\n' || ch === '\r') && !quoted) {
      if (ch === '\r' && content[i + 1] === '\n') i++;
      row.push(field); rows.push(row);
      row = []; field = '';
    } else {
      field += ch;
    }
  }
  assert.equal(quoted, false, 'Unterminated quoted CSV field');
  if (row.length || field) { row.push(field); rows.push(row); }
  return rows;
}

// Verify the actual Git-tracked files, not just a manifest of absent files.
const byPath = new Map();
for (const entry of [...manifest.raw_files, ...manifest.normalized_csvs]) {
  const relative = manifest.source_root + entry.relative_path;
  const bytes = readFileSync(new URL(relative, root));
  assert.equal(bytes.length, entry.bytes, 'Changed archived bytes: ' + relative);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), entry.sha256,
    'Original or normalized research checksum changed: ' + relative);
  byPath.set(entry.relative_path, bytes.toString('utf8'));
}
const specs = {
  'KETO_SOURCES.csv': { team: 'A', width: 16, count: 5 },
  'DIET_PATTERN_TRIAL_MATRIX.csv': { team: 'B', width: 22, count: 8 },
  'LAB_TO_DIET_CLAIM_MAP.csv': { team: 'C', width: 22, count: 6 },
  'CONTRADICTION_REGISTER.csv': { team: 'D', width: 24, count: 7 },
};
for (const [filename, spec] of Object.entries(specs)) {
  const unmodified = parseCsv(byPath.get(spec.team + '/' + filename));
  const normalized = parseCsv(byPath.get('normalized/' + filename));
  assert.equal(unmodified.length, spec.count + 1, 'Raw CSV row count changed: ' + filename);
  assert.equal(normalized.length, spec.count + 1, 'Normalized CSV row count changed: ' + filename);
  assert.equal(unmodified[0].length, spec.width);
  assert.equal(normalized[0].length, spec.width);
  assert.deepEqual(unmodified[0], normalized[0], 'Original header changed during repair: ' + filename);
  for (const row of normalized.slice(1)) {
    assert.equal(row.length, spec.width, 'Malformed corrected CSV row: ' + filename);
  }
  assert.deepEqual(unmodified.slice(1).map(r => r[0]), normalized.slice(1).map(r => r[0]),
    'Corrected CSV lost or reordered an original claim ID: ' + filename);
  if (spec.team === 'A') {
    assert.deepEqual(unmodified.slice(1).map(r => r.length), [16,16,15,16,16],
      'Original Team A missing-cell defect must remain reproducible');
  } else if (spec.team === 'C') {
    assert.deepEqual(unmodified.slice(1).map(r => r.length), [28,22,22,22,22,22],
      'Original Team C unquoted-comma defect must remain reproducible');
  } else {
    assert.ok(unmodified.slice(1).every(r => r.length === spec.width));
  }
}
assert.equal(byPath.size, 20);

console.log('Diet handoffs: 16 unchanged originals and 4 normalized CSVs match exact SHA-256, CSV row integrity validated; 26 claim gates checked, one untraceable source withheld.');
