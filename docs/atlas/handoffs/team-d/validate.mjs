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
console.log(JSON.stringify({result:'PASS',nodes:nodes.length,edges:edges.length,conditions:conditions.length,statuses:statuses.length,un_crosswalk:un.length,seed_exceptions:exceptions.length,verified_regions:assigned.length,unverified_regions:statuses.length-assigned.length,office_presence:offices.length,provenance:prov.length},null,2));
