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
  'ad7b7cbb9c7cff7fcdd58f251b6c354178a270a1',
  'Original calculator changed: use a new filename, never overwrite v9');
assert.equal(blobSha('LICENSE'), '005ac3c15801c98fd0caecad635f52a603b59ed1',
  'License must not change without separate maintainer decision');

const folder = new URL('../docs/research/source/', import.meta.url);
const docs = readdirSync(folder).filter((s) => /^(01|02|03)_.*\.md$/.test(s)).sort();
assert.equal(docs.length, 17, 'All 17 original source reports must remain archived');
const counts = { '01': 0, '02': 0, '03': 0 };
for (const file of docs) {
  const content = readFileSync(new URL(file, folder), 'utf8');
  assert.ok(content.length > 3000, 'Empty or truncated research report: ' + file);
  counts[file.slice(0, 2)]++;
}
assert.deepEqual(counts, { '01': 5, '02': 6, '03': 6 });
for (const [file, prefix] of [
  ['01_Ancestry_Evidence_Matrix.md', 'ANC-'],
  ['02_Nutrition_Evidence_Matrix.md', 'NUT-'],
  ['03_Pharmacogenetics_Evidence_Matrix.md', 'PGX-']]) {
  const content = readFileSync(new URL(file, folder), 'utf8');
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
for (const s of ['ANC-', 'NUT-', 'PGX-', 'does not', 'not a medical diagnosis']) {
  assert.ok(page.toLowerCase().includes(s.toLowerCase()), 'Missing evidence/safety marker: ' + s);
}
console.log('Verified protected baseline, 17 reports (5/6/6), citation keys, and safety markers.');

