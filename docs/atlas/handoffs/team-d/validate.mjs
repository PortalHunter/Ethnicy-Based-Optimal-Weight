// Team D structural validation. Run: node validate.mjs from this directory.
import fs from 'node:fs';
import assert from 'node:assert/strict';
const parse = function parse(s){let rows=[],row=[],v="",q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++;}else q=!q;}else if(c===','&&!q){row.push(v);v="";}else if(c==='\n'&&!q){row.push(v.replace(/\r$/,""));rows.push(row);row=[];v="";}else v+=c;}if(v||row.length){row.push(v);rows.push(row);}const h=rows.shift();for(const r of rows)if(r.length!==h.length)throw Error("width "+r.length+" expected "+h.length);return {h,rows:rows.map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]])))};};
const read = file => parse(fs.readFileSync(new URL(file,import.meta.url),'utf8').trimEnd()).rows;
const unique=(rows,key,label)=>assert.equal(new Set(rows.map(key)).size,rows.length,label);
const nodes=read('data/international_networks.csv'), edges=read('data/network_memberships.csv'), conditions=read('data/condition_networks.csv'), statuses=read('data/m49_network_status.csv'), un=read('data/un_m49_geographic_crosswalk.csv'), exceptions=read('data/geographic_seed_exceptions.csv'), offices=read('data/who_country_office_presence.csv'), prov=read('PROVENANCE.csv');
const ids=new Set(nodes.map(r=>r.network_id)),codes=new Set(statuses.map(r=>r.m49_code)),official=new Set(un.map(r=>r.m49_code)),sources=new Set(prov.map(r=>r.source_url));
unique(nodes,r=>r.network_id,'node IDs'); unique(statuses,r=>r.m49_code,'status codes');unique(un,r=>r.m49_code,'UN codes');unique(prov,r=>r.source_id,'source IDs');unique(prov,r=>r.source_url,'source URLs');unique(offices,r=>r.record_id,'office IDs');
assert.equal(un.length,248); assert.equal(statuses.length,249);
for(const r of un){assert.match(r.m49_code,/^\d{3}$/);assert(codes.has(r.m49_code));assert(sources.has(r.source_url));}
const seedOnly=statuses.filter(r=>!official.has(r.m49_code)).map(r=>r.m49_code).sort();
assert.deepEqual(seedOnly,exceptions.map(r=>r.m49_candidate_code).sort());assert.deepEqual(seedOnly,['158']);
unique(edges,r=>[r.from_id,r.to_id,r.relationship_type,r.valid_from,r.as_of].join('|'),'edge composite');
for(const r of edges){if(r.country_area_m49)assert(codes.has(r.country_area_m49)); assert(sources.has(r.source_url)); for(const endpoint of [r.from_id,r.to_id])assert(ids.has(endpoint)||(endpoint.startsWith('m49:')&&codes.has(endpoint.slice(4)))||endpoint.startsWith('org:provisional:'),'orphan '+endpoint);}
const keys=['diabetes','hypertension','high_chol','gout','lactose','celiac','hemochromatosis'];
assert.deepEqual([...new Set(conditions.map(r=>r.condition_key))].sort(),keys.sort());
for(const r of conditions){assert(ids.has(r.network_id));assert(sources.has(r.documented_program_or_guideline_url));}
for(const r of offices){assert(official.has(r.country_area_m49));assert(sources.has(r.office_presence_source));}
const assigned=statuses.filter(r=>r.who_region!=='not_verified');
for(const r of statuses){assert.match(r.m49_code,/^\d{3}$/);assert(r.who_region);assert(r.who_region_source);assert(r.who_assignment_effective_date);}
for(const r of assigned){assert(['AFRO','AMRO','EMRO','EURO','SEARO','WPRO'].includes(r.who_region));assert(sources.has(r.who_region_source));}
const sea=['050','064','104','144','356','408','462','524','626','764'];
assert.deepEqual(statuses.filter(r=>r.who_region==='SEARO').map(r=>r.m49_code).sort(),sea);
assert.deepEqual(offices.map(r=>r.country_area_m49).sort(),sea);
assert.equal(statuses.find(r=>r.m49_code==='360').who_region,'WPRO');
assert.equal(statuses.find(r=>r.m49_code==='840').who_membership_governance_status,'PENDING_GOVERNING_BODIES_REVIEW');
assert(!offices.some(r=>r.country_area_m49==='360'));
assert.equal(statuses.filter(r=>r.who_region==='EURO').length,53);
assert.equal(statuses.find(r=>r.m49_code==='438').who_region,'not_verified');
assert.equal(statuses.find(r=>r.m49_code==='398').who_region,'EURO');
assert.equal(statuses.filter(r=>r.who_region==='AFRO').length,47);
const nameMatches=read('data/who_region_name_matches.csv');
unique(nameMatches,r=>r.record_id,'source-name match IDs');
assert.equal(nameMatches.length,38);
assert.equal(nameMatches.filter(r=>r.match_method==='EXPLICIT_REVIEWED_ALIAS').length,10);
for(const r of nameMatches){assert(official.has(r.country_area_m49));assert(sources.has(r.source_url));assert.equal(statuses.find(s=>s.m49_code===r.country_area_m49).who_region,'WPRO');assert.equal(un.find(u=>u.m49_code===r.country_area_m49).country_area_name_un,r.un_country_area_name);}
assert.equal(statuses.filter(r=>r.who_region==='WPRO').length,38);
assert.equal(statuses.find(r=>r.m49_code==='360').who_assignment_effective_date,'2025-05-23');
assert.equal(statuses.find(r=>r.m49_code==='158').who_region,'not_verified');
for(const code of ['016','316','580'])assert(statuses.find(r=>r.m49_code===code).review_notes.includes('pending WHO governing-body consideration'));
const profileChecks=read('data/who_region_profile_checks.csv');
unique(profileChecks,r=>r.record_id,'profile-check IDs');
assert.equal(profileChecks.filter(r=>r.normalized_who_region==='EMRO').length,21);
assert.equal(profileChecks.filter(r=>r.normalized_who_region==='AMRO').length,35);
for(const r of profileChecks){assert.equal(r.source_url,'https://data.who.int/countries/'+r.country_area_m49);assert(sources.has(r.source_url));assert.equal(statuses.find(s=>s.m49_code===r.country_area_m49).who_region,r.normalized_who_region);}
assert.equal(statuses.filter(r=>r.who_region==='EMRO').length,22);
assert.equal(statuses.find(r=>r.m49_code==='275').who_region,'EMRO');
assert.equal(statuses.find(r=>r.m49_code==='275').who_membership_governance_status,'PENDING_VERIFICATION');
assert.equal(statuses.filter(r=>r.who_region==='AMRO').length,35);
const pending=read('data/who_region_unresolved_queue.csv');
unique(pending,r=>r.record_id,'unresolved-queue IDs');
assert.deepEqual(pending.map(r=>r.country_area_m49).sort(),statuses.filter(r=>r.who_region==='not_verified').map(r=>r.m49_code).sort());
for(const r of pending)assert.equal(r.who_region_review_state,'UNKNOWN_REVIEW_NEEDED');
for(const r of profileChecks){assert.equal(r.source_who_region,r.normalized_who_region==='EMRO'?'Eastern Mediterranean':'Americas');assert.equal(statuses.find(s=>s.m49_code===r.country_area_m49).who_region_source,r.source_url);}
const gaps=read('data/network_coverage_gaps.csv'),overlaps=read('data/network_overlap_inventory.csv');
unique(gaps,r=>r.gap_id,'gap IDs');unique(overlaps,r=>r.overlap_id,'overlap IDs');
for(const r of gaps){assert(ids.has(r.network_id));assert(sources.has(r.source_url));}
for(const r of overlaps){assert(sources.has(r.source_url_a));assert(sources.has(r.source_url_b));}
console.log(JSON.stringify({result:'PASS',nodes:nodes.length,edges:edges.length,conditions:conditions.length,statuses:statuses.length,un_crosswalk:un.length,seed_exceptions:exceptions.length,verified_regions:assigned.length,unverified_regions:statuses.length-assigned.length,office_presence:offices.length,provenance:prov.length},null,2));
