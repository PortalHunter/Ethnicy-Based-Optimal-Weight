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
  const allowed = new Set(['authority', 'coverage', 'membership', 'cooperation', 'office', 'organization', 'research']);
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
  assert.ok(Object.keys(nodes).every((key) => used.has(key) || nodes[key].precision));
  const position = ([lon, lat]) => {
    assert.ok(Number.isFinite(lon) && Math.abs(lon) <= 180);
    assert.ok(Number.isFinite(lat) && Math.abs(lat) <= 90);
  };
  for (const [key, node] of Object.entries(nodes)) {
    if (node.position) position(node.position);
    if (node.area) assert.ok(m49.has(node.area), key);
    if (key.startsWith('m49:')) assert.equal(key, 'm49:' + node.area);
    else {
      assert.ok(institutions.has(key) || (key.startsWith('office:') && node.precision), key);
      if (node.position) publicHttps(node.locationSource);
      if (['site', 'street'].includes(node.precision)) {
        assert.ok(node.address);
        publicHttps(node.coordinateSource);
      } else assert.equal(node.coordinateSource, undefined);
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

test('Globe keeps health authority remit, office coverage and organizational roles distinct', () => {
  const { nodes, edges } = globe;
  function link(left, right, kind) {
    assert.ok(edges.some((edge) => edge.left === left && edge.right === right && edge.kind === kind),
      [left, right, kind].join(' '));
  }
  assert.equal(nodes['D:WHO'].precision, 'site');
  assert.match(nodes['D:WHO'].address, /Avenue Appia 20/);
  assert.equal(nodes['D:PAHO'].precision, 'street');
  assert.deepEqual(nodes['D:PAHO'].position, nodes['D:WHO_AMRO'].position);
  assert.notDeepEqual(nodes['D:AU'].position, nodes['D:AFRICA_CDC'].position);
  assert.equal(nodes['D:EU'].position, null);
  link('D:EMA', 'D:EU', 'organization');
  link('office:africa-cdc-west', 'D:AFRICA_CDC', 'organization');
  link('D:AFRICA_CDC', 'D:AU', 'organization');
  link('D:WHO_MCO_BARBADOS', 'D:PAHO', 'organization');
  link('D:PAHO', 'D:WHO_AMRO', 'organization');
  link('D:WHO_MCO_SAMOA', 'D:WHO_WPRO', 'organization');
  link('m49:184', 'D:WHO_MCO_SAMOA', 'office');
  link('A:gov-360-001', 'm49:360', 'authority');
  assert.ok(!edges.some((edge) => edge.left.startsWith('A:') && edge.right.startsWith('D:WHO')));
});
