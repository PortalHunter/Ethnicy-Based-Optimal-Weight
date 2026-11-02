// Validates local/document link integrity. With --remote, probes publisher URLs;
// remote 403/429/timeout/blocking are inconclusive, not grounds for silently deleting a source.
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { loadCore } from '../tests/load-core.mjs';

const root = new URL('../', import.meta.url);
const pages = ['README.md', 'CONTRIBUTING.md', 'research-preview.html',
  'optimal_body_weight_calculator-10-research-preview.html', 'docs/EVIDENCE_INTEGRATION.md'];
const internal = [];
const external = new Set();
for (const filename of pages) {
  const text = readFileSync(new URL(filename, root), 'utf8');
  const urls = [...text.matchAll(/(?:href=["']([^"']+)["']|\]\(([^)]+)\))/g)].map((m) => m[1] || m[2]);
  for (const target of urls) {
    if (target.startsWith('#') || target.startsWith('mailto:')) continue;
    if (/^https?:\/\//.test(target)) { external.add(target); continue; }
    if (target.startsWith('javascript:') || target.startsWith('data:')) throw Error('Unsafe link: ' + target);
    const path = target.split('#')[0];
    if (!path) continue;
    const dest = new URL(path, new URL(filename, root));
    internal.push([filename, path]);
    assert.ok(existsSync(dest), 'Broken internal link from ' + filename + ': ' + path);
  }
}
const { E } = loadCore();
for (const r of E.REFS) external.add(r[2]);
for (const url of external) assert.equal(new URL(url).protocol, 'https:', 'External citation must be HTTPS: ' + url);
console.log('Local links: ' + internal.length + '; external HTTPS references: ' + external.size);

if (process.argv.includes('--remote')) {
  const urls = [...external];
  let next = 0, uncertain = 0, dead = 0;
  async function check(url) {
    try {
      let response = await fetch(url, { method: 'HEAD', redirect: 'follow',
        signal: AbortSignal.timeout(5000), headers: { 'User-Agent': 'ResearchCitationChecker/1.0' } });
      if ([405, 501].includes(response.status)) response = await fetch(url,
        { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(5000) });
      if ([404, 410].includes(response.status)) {
        dead++;
        console.log('::warning::Citation returned HTTP ' + response.status + ': ' + url);
      } else if (!response.ok) {
        uncertain++;
        console.log('::warning::Citation uncertain (HTTP ' + response.status + '): ' + url);
      }
    } catch (err) {
      uncertain++;
      console.log('::warning::Citation not reachable from CI: ' + url + ' (' + err.name + ')');
    }
  }
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (next < urls.length) await check(urls[next++]);
  }));
  console.log('Remote citation review: ' + urls.length + ' checked; ' + dead +
    ' apparent dead; ' + uncertain + ' inconclusive. Publisher responses require human review.');
}

