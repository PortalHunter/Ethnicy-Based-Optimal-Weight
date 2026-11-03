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
for (const s of ['Research &amp; scientific sources', 'Body weight, BMI and ancestry', 'Metabolic health and nutrition', 'Pharmacogenetics', 'do not establish']) {
  assert.ok(page.toLowerCase().includes(s.toLowerCase()), 'Missing public source/safety content: ' + s);
}
for (const forbidden of [/docs\/research\/source\//i, /docs\/EVIDENCE_INTEGRATION/i, /cross-team implementation/i, /research-team notes/i, /AI agents/i, /bots/i]) {
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

