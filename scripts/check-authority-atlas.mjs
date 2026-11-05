// Validates atlas reference integrity and scope, NOT an institution's medical conclusions.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function load(path) {
  return JSON.parse(readFileSync(new URL('../docs/atlas/' + path, import.meta.url), 'utf8'));
}
const countries = load('countries.batch-a.json').countries;
const orgs = load('organizations.batch-a.json').organizations;
const edges = load('relationships.batch-a.json').edges;
const regions = new Set(['AFRO','AMRO','EMRO','EURO','SEARO','WPRO']);
const countriesById = new Map();
const m49Codes = new Set();
const iso2Codes = new Set();
assert.equal(countries.length, 25, 'First 25-country discovery batch should not silently shrink.');
for (const c of countries) {
  assert.match(c.id,/^[A-Z]{3}$/);
  assert.match(c.iso2,/^[A-Z]{2}$/);
  assert.match(c.m49,/^\d{3}$/);
  assert.ok(!countriesById.has(c.id) && !m49Codes.has(c.m49) && !iso2Codes.has(c.iso2), 'Duplicate geographic identity');
  assert.ok(regions.has(c.who_region), 'Invalid WHO region for ' + c.id);
  assert.ok(c.identity_source.includes('unstats.un.org'), 'M49 provenance must be retained');
  countriesById.set(c.id,c);
  m49Codes.add(c.m49);iso2Codes.add(c.iso2);
}
assert.equal(countriesById.get('IDN').who_region,'WPRO','Indonesia transferred to WPRO on 2025-05-23');
assert.equal(countriesById.get('DZA').who_region,'AFRO','Algeria is WHO AFRO, despite UN Northern Africa geography');
assert.equal(countriesById.get('USA').who_region,'AMRO','US WHO region classification is distinct from membership governance');
const orgsById = new Map();
for (const o of orgs) {
  assert.ok(o.id && !orgsById.has(o.id), 'Duplicate/missing organization ID');
  assert.ok(o.name && o.type && o.scope, 'Organization missing identity or remit');
  assert.ok(/^https:\/\//.test(o.primary_website), 'Organization must have HTTPS source URL');
  assert.ok(['OFFICIAL_SITE_SPOT_CHECKED','CANDIDATE_OFFICIAL_SOURCE'].includes(o.identity_status));
  assert.equal(o.evidence_evaluation_status,'NOT_A_CLAIM_APPRAISAL',
    'Organization link must not be treated as claim validation');
  if(o.country_id) assert.ok(countriesById.has(o.country_id),'Orphan country for organization '+o.id);
  orgsById.set(o.id,o);
}
for(const code of regions) assert.ok(orgsById.has('REG-WHO-'+code),'Missing WHO regional node '+code);
assert.ok(orgsById.has('NET-WHO'),'Missing global WHO network');
const edgesByCountry = new Map();
const edgeSignatures = new Set();
for (const e of edges) {
  assert.ok(e.from && e.to && e.kind && e.source_url && e.verification);
  assert.ok(/^https:\/\//.test(e.source_url), 'Link without source URL');
  assert.ok(countriesById.has(e.from) || orgsById.has(e.from), 'Unknown edge source '+e.from);
  assert.ok(countriesById.has(e.to) || orgsById.has(e.to) ||
    /^CLAIM-R(?:DI|HT|LD|GT|LC|CD|FE)-\d{3,}$/.test(e.to), 'Unknown edge destination '+e.to);
  const key=e.from+' '+e.kind+' '+e.to;
  assert.ok(!edgeSignatures.has(key), 'Duplicate edge '+key);
  edgeSignatures.add(key);
  if(e.kind==='classified_in_WHO_region') {
    assert.ok(countriesById.has(e.from),'WHO region link must originate in country');
    assert.equal(e.to, 'REG-WHO-'+countriesById.get(e.from).who_region,'Outdated or misclassified WHO edge');
    edgesByCountry.set(e.from,(edgesByCountry.get(e.from)||0)+1);
  }
  if(e.kind==='candidate_source_relationship')
    assert.equal(e.verification,'APPRAISAL_PENDING','Prematurely verified source-to-claim edge');
}
for(const c of countries) assert.equal(edgesByCountry.get(c.id),1,'Exactly one dated WHO regional classification for '+c.id);
for (const code of regions)
  assert.ok(edges.some(e=>e.from==='REG-WHO-'+code && e.to==='NET-WHO' && e.kind==='regional_office_of'),'Missing WHO regional office relation '+code);
assert.ok(edges.some(e=>e.from==='IDN'&&e.to==='REG-WHO-WPRO'&&e.valid_from==='2025-05-23'),
  'Indonesia transfer needs effective date');
assert.ok(edges.some(e=>e.from==='USA'&&e.verification==='MEMBERSHIP_GOVERNANCE_REVIEW'),
  'US WHO membership caveat must be retained');
console.log('Authority atlas structural integrity:',countries.length,'countries/areas,',orgs.length,'organizations,',edges.length,'relations. Scientific appraisal remains separate.');
