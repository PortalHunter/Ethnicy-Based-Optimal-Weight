// Loads the live site's engine (preview-assets/core.js) in a sandbox, so the tests exercise exactly
// the code the site runs. The classic calculator's HTML is returned too; scripts/check-evidence.mjs
// confirms its built-in engine is identical to core.js.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
export const HTML_PATH = fileURLToPath(new URL('../optimal_body_weight_calculator-9.html', import.meta.url));
export const CORE_PATH = fileURLToPath(new URL('../preview-assets/core.js', import.meta.url));
export function loadCore() {
  const html = readFileSync(HTML_PATH, 'utf8');
  const core = readFileSync(CORE_PATH, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(core, ctx);
  return { E: ctx.window.EBOW, html };
}
