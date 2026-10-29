// Extracts the <script id="calc-core"> block from the shipped HTML and evaluates it in a sandbox,
// so the tests exercise exactly the code the page runs.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
export const HTML_PATH = fileURLToPath(new URL('../optimal_body_weight_calculator-9.html', import.meta.url));
export function loadCore() {
  const html = readFileSync(HTML_PATH, 'utf8');
  const m = html.match(/<script id="calc-core">([\s\S]*?)<\/script>/);
  if (!m) throw new Error('calc-core script not found');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(m[1], ctx);
  return { E: ctx.window.EBOW, html };
}
