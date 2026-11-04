// Validate staged external diet research without making new clinical claims.
// Only checks integrity/traceability; it does not certify the cited studies.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root = new URL('../docs/research/handoffs/grok-2026-11-04/', import.meta.url);
const load = (name) => JSON.parse(readFileSync(new URL(name, root), 'utf8'));
const manifest = load('SOURCE_CHECKSUMS.json');
const index = load('CLAIM_REGISTER.json');
assert.equal(manifest.date, '2026-11-04');
assert.equal(manifest.raw_sources_in_git, false,
  'Do not claim raw archive upload until all files are actually committed');
assert.equal(index.raw_files_archived_on_github, false,
  'Do not claim complete source import until raw files are actually committed');
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
console.log('Diet handoff register verified: 16 raw source hashes, 4 curated hashes, 26 rows, 1 withheld untraceable citation. Original handoffs are not yet repository files.');
