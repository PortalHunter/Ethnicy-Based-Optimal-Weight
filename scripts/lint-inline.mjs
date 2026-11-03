// Parse every inline JavaScript block as shipped. The original calculator is ES5 for older browsers.
import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';
import assert from 'node:assert/strict';

for (const file of ['optimal_body_weight_calculator-9.html', 'index.html', 'research-preview.html']) {
  const html = readFileSync(new URL('../' + file, import.meta.url), 'utf8');
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [index, m] of scripts.entries()) {
    assert.doesNotMatch(m[1], /\bdebugger\s*;/, 'Unexpected debugger in ' + file);
    new Script(m[1], { filename: file + '#script-' + index });
  }
  console.log(file + ': ' + scripts.length + ' embedded scripts parsed');
}


// The live site keeps its scripts in preview-assets/; parse those as shipped too.
for (const file of ['preview-assets/guard.js', 'preview-assets/core.js', 'preview-assets/ui.js']) {
  const code = readFileSync(new URL('../' + file, import.meta.url), 'utf8');
  assert.doesNotMatch(code, /\bdebugger\s*;/, 'Unexpected debugger in ' + file);
  new Script(code, { filename: file });
  console.log(file + ': parsed');
}
