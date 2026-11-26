import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const location = new URL('../atlas-preview/data.js', import.meta.url);
const context = vm.createContext({});
vm.runInContext(readFileSync(location, 'utf8'), context);
const projection = JSON.parse(JSON.stringify(context.AtlasPreviewData));

function publicHttps(value) {
  const url = new URL(value);
  assert.equal(url.protocol, 'https:');
  assert.equal(url.username + url.password, '');
  for (const field of url.searchParams.keys()) {
    assert.doesNotMatch(field, /^(token|access_token|password|api_key|sessionid|signature)$/i);
  }
}

test('Atlas exports only reviewed directory fields and public citation links', () => {
  const { areas, institutions, types, conditions } = projection;
  const known = new Set(areas.map(({ code }) => code));
  assert.equal(new Set(institutions.map(({ id }) => id)).size, institutions.length);
  assert.ok(institutions.length > 0);
  for (const item of institutions) {
    assert.deepEqual(Object.keys(item).sort(), [
      'checked', 'conditions', 'id', 'local', 'name', 'places', 'source', 'status', 'type',
    ]);
    assert.ok(Object.hasOwn(types, item.type));
    assert.ok(['authority', 'identity', 'publication', 'network'].includes(item.status));
    publicHttps(item.source);
    for (const place of item.places) {
      assert.ok(known.has(place.code));
      publicHttps(place.source);
    }
    for (const [condition, items] of Object.entries(item.conditions)) {
      assert.ok(Object.hasOwn(conditions, condition));
      for (const link of items) {
        assert.deepEqual(Object.keys(link).sort(), ['evidence', 'source']);
        assert.ok(['S1', 'S2', 'H', 'article', 'programme'].includes(link.evidence));
        publicHttps(link.source);
      }
    }
  }
  assert.doesNotMatch(JSON.stringify(projection), /candidate_claim|ancestry_key|APPROVED_EDUCATIONAL|org:provisional:/);
});

test('Atlas area coverage preserves M49 keys and distinguishes gaps', () => {
  const { areas, coverage, conditions } = projection;
  assert.equal(areas.length, 248);
  const keys = areas.map(({ code }) => code);
  assert.equal(new Set(keys).size, 248);
  assert.equal(Object.keys(conditions).length, 7);
  assert.ok(keys.every((code) => /^\d{3}$/.test(code)));
  assert.ok(!keys.includes('158'));
  assert.deepEqual(Object.keys(coverage).sort(), [...keys].sort());
  for (const code of keys) {
    assert.deepEqual(Object.keys(coverage[code]).sort(), Object.keys(conditions).sort());
  }
  assert.equal(areas.find(({ code }) => code === '010').status, 'UNKNOWN_REVIEW_NEEDED');
  assert.equal(areas.find(({ code }) => code === '732').status, 'UNRESOLVED_CONFLICT_EXTERNAL_REVIEW');
  assert.equal(areas.find(({ code }) => code === '260').status, 'SOURCE_SUPPORTED_DELEGATED_AUTHORITY');
});

vm.runInContext(readFileSync(new URL('../atlas-preview/globe-data.js', import.meta.url), 'utf8'), context);
const globe = context.AtlasGlobeData;

test('Globe connections have unique identifiers, public citations and valid endpoints', () => {
  const { nodes, edges, dots, coasts } = globe;
  const m49 = new Set(projection.areas.map(({ code }) => code));
  const institutions = new Set(projection.institutions.map(({ id }) => id));
  const allowed = new Set(['coverage', 'membership', 'cooperation', 'organization', 'research']);
  const used = new Set();
  const ids = new Set();
  for (const { id, left, right, kind, source } of edges) {
    assert.ok(!ids.has(id), id);
    ids.add(id);
    assert.ok(left !== right && Object.hasOwn(nodes, left) && Object.hasOwn(nodes, right), id);
    assert.ok(allowed.has(kind), kind);
    publicHttps(source);
    used.add(left);
    used.add(right);
  }
  assert.deepEqual(new Set(Object.keys(nodes)), used);
  const position = ([lon, lat]) => {
    assert.ok(Number.isFinite(lon) && Math.abs(lon) <= 180);
    assert.ok(Number.isFinite(lat) && Math.abs(lat) <= 90);
  };
  for (const [key, node] of Object.entries(nodes)) {
    position(node.position);
    if (node.area) assert.ok(m49.has(node.area), key);
    if (key.startsWith('m49:')) assert.equal(key, 'm49:' + node.area);
    else {
      assert.ok(institutions.has(key), key);
      publicHttps(node.locationSource);
    }
  }
  dots.forEach(position);
  coasts.forEach((ring) => ring.forEach(position));
});

test('Globe shows source attribution separately from medical evidence appraisal', () => {
  const research = globe.edges.filter((edge) => edge.kind === 'research');
  assert.ok(research.length > 0);
  for (const edge of research) {
    assert.match(edge.id, /^research:pub:/);
    assert.ok(edge.left.startsWith('B:') && edge.right.startsWith('B:'));
    assert.notEqual(globe.nodes[edge.left].area, globe.nodes[edge.right].area);
    assert.equal(edge.label, 'Attributed authorship in a shared research publication');
  }
  assert.doesNotMatch(JSON.stringify(globe.edges), /APPROVED_EDUCATIONAL|ancestry_key|candidate_claim/);
  const indonesia = globe.edges.filter((edge) => edge.left === 'm49:360' && edge.kind === 'coverage');
  assert.equal(indonesia.length, 1);
  assert.equal(indonesia[0].right, 'D:WHO_WPRO');
});
