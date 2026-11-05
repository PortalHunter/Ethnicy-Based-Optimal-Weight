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
assert.deepEqual(offices.filter(r=>r.office_presence_source==='https://www.who.int/southeastasia/about').map(r=>r.country_area_m49).sort(),sea);
assert.equal(offices.length,105);
assert.equal(new Set(offices.map(r=>r.country_area_m49)).size,105);
assert.equal(offices.filter(r=>r.as_of==='2026-04').length,95);
assert.equal(statuses.find(r=>r.m49_code==='360').who_region,'WPRO');
assert.equal(statuses.find(r=>r.m49_code==='840').who_membership_governance_status,'PENDING_GOVERNING_BODIES_REVIEW');
assert(offices.some(r=>r.country_area_m49==='360'&&r.office_presence_source==='https://data.who.int/dashboards/country-presence/country-office/office-profile-survey-reporting-year/'));
const officeAudits=read('data/who_office_profile_2026_checks.csv');
unique(officeAudits,r=>r.record_id,'2026 office audit IDs');
assert.equal(officeAudits.length,95);
for(const r of officeAudits){assert(official.has(r.country_area_m49));assert(sources.has(r.source_url));assert(['WHO Country Office','WHO Country Office (also serving territories or areas)','WHO Multi-Country Office','WHO Country Liaison Office'].includes(r.presence_type),'unsupported WHO office type '+r.presence_type);assert.equal(r.latest_self_reported_survey,'2026-04');assert(offices.some(o=>o.country_area_m49===r.country_area_m49&&o.office_presence_source===r.source_url&&o.as_of==='2026-04'));assert.equal(statuses.find(s=>s.m49_code===r.country_area_m49).who_region,r.who_region);}
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

const officeHistory=read('data/who_office_coverage_2023.csv');
unique(officeHistory,r=>r.record_id,'WHO office history IDs');
assert.equal(officeHistory.length,228);
const officeCounts=Object.fromEntries(['AFRO','AMRO','EMRO','EURO','SEARO','WPRO'].map(k=>[k,officeHistory.filter(r=>r.relationship_type==='has_physical_who_office_reported'&&r.report_region===k).length]));
assert.deepEqual(officeCounts,{AFRO:47,AMRO:27,EMRO:21,EURO:33,SEARO:11,WPRO:15});
for(const label of ['Nauru','Netherlands (Kingdom of)','Macao Special Administrative Region (China)','Hong Kong Special Administrative Region (China)','Bonaire','Saba','Sint Eustatius','South Pacific (Fiji)'])assert(officeHistory.some(r=>r.source_name===label&&r.notes.length>0),'missing explicit alias note '+label);

assert.equal(officeHistory.filter(r=>r.relationship_type==='has_physical_who_office_reported').length,154);
assert.equal(officeHistory.filter(r=>r.relationship_type==='covered_by_multicountry_office').length,42);
assert.equal(officeHistory.filter(r=>r.relationship_type==='covered_by_regional_office_focal_point').length,32);
for(const r of officeHistory){assert(sources.has(r.source_url));if(r.country_area_m49!=='not_applicable'){assert(codes.has(r.country_area_m49));assert(official.has(r.country_area_m49));}}
assert.equal(officeHistory.filter(r=>r.relationship_type==='has_physical_who_office_reported'&&r.country_area_m49!=='not_applicable').length,153);
assert.equal(officeHistory.find(r=>r.source_name==='Kosovo').country_area_m49,'not_applicable');
assert.equal(officeHistory.find(r=>r.source_name==='Cyprus'&&r.relationship_type==='has_physical_who_office_reported').notes.includes('January 2023'),true);
assert.equal(officeHistory.find(r=>r.source_name==='Israel'&&r.relationship_type==='has_physical_who_office_reported').verification_state,'PENDING_VERIFICATION');
const histEdges=edges.filter(r=>r.as_of==='2023'&&r.source_url==='https://iris.who.int/bitstream/handle/10665/367811/9789240073272-eng.pdf?sequence=1');
assert.equal(histEdges.length,225);
for(const r of histEdges){assert(sources.has(r.source_url));assert(ids.has(r.to_id));if(r.country_area_m49)assert(codes.has(r.country_area_m49));}

const surveyRoster=read('data/who_office_survey_roster_2026.csv');
unique(surveyRoster,r=>r.record_id,'WHO 2026 survey roster IDs');
assert.equal(surveyRoster.length,153);
assert.equal(surveyRoster.filter(r=>r.latest_self_reported_survey==='2026-04').length,106);
assert.equal(surveyRoster.filter(r=>r.latest_self_reported_survey==='2024-09').length,46);
assert.equal(surveyRoster.filter(r=>r.latest_self_reported_survey==='not_available').length,1);
assert.equal(surveyRoster.filter(r=>r.country_area_m49==='not_verified').length,4);
for(const r of surveyRoster){assert(sources.has(r.source_url));if(r.country_area_m49!=='not_verified'){assert(official.has(r.country_area_m49));assert.equal(r.m49_join_method,'EXACT_NORMALIZED_UN_NAME');} if(r.latest_self_reported_survey==='2026-04'&&r.country_area_m49!=='not_verified')assert(offices.some(x=>x.country_area_m49===r.country_area_m49));}
for(const r of officeAudits){assert(surveyRoster.some(s=>s.country_area_m49===r.country_area_m49&&s.latest_self_reported_survey==='2026-04'));}
assert.equal(surveyRoster.filter(r=>r.latest_self_reported_survey==='2026-04'&&r.country_area_m49!=='not_verified').length,105);

const emrnNcas=read('data/emrn_nca_identity_2026.csv');
unique(emrnNcas,r=>r.record_id,'EMRN candidate IDs');
unique(emrnNcas,r=>r.country_area_m49+'|'+r.ema_display_name,'EMRN country agency names');
assert.equal(emrnNcas.length,34);
assert.equal(new Set(emrnNcas.map(r=>r.country_area_m49)).size,30);
for(const [code,count] of [['276',2],['528',3],['616',2]])assert.equal(emrnNcas.filter(r=>r.country_area_m49===code).length,count);
for(const r of emrnNcas){assert.equal(r.network_id,'EMRN');assert(official.has(r.country_area_m49));assert(sources.has(r.source_url));assert.equal(r.join_state,'PENDING_EXACT_AUTHORITY_ID_JOIN');assert.equal(r.remit_review_state,'PER_AGENCY_STATUTORY_REMIT_NOT_VERIFIED');}
assert.equal(nodes.length,45);assert.equal(edges.length,542);assert.equal(prov.length,119);

const pathways=read('data/hearts_pathway_catalog_2026.csv');
unique(pathways,r=>r.record_id,'PAHO HEARTS pathway catalog IDs');
unique(pathways,r=>r.paho_document_title,'PAHO HEARTS catalog titles');
assert.equal(pathways.length,24);
assert.equal(pathways.filter(r=>r.scope_type==='regional_template').length,2);
assert.equal(pathways.filter(r=>r.scope_type==='subnational_catalog_label').length,3);
assert.equal(pathways.filter(r=>r.scope_type==='territory_area_catalog_label').length,2);
assert.equal(pathways.filter(r=>r.country_area_m49==='not_verified').length,1);
assert.equal(pathways.find(r=>r.paho_document_title==='Clinical Pathway - DOMINICA REPUBLIC').country_area_m49,'not_verified');
assert.equal(pathways.find(r=>r.paho_document_title==='Clinical Pathway - DOMINICA').country_area_m49,'212');
assert.equal(pathways.find(r=>r.paho_document_title==='HEARTS 2.0 Clinical Pathway - Standard').catalog_date,'2026-05-08');
for(const r of pathways){assert.equal(r.network_id,'PAHO_HEARTS');assert(sources.has(r.source_url));assert.equal(r.verification_state,'OFFICIAL_CATALOG_LISTED_ADOPTION_NOT_INFERRED');assert.match(r.catalog_date,/^202[46]-\d{2}-\d{2}$/);if(/^\d{3}$/.test(r.country_area_m49))assert(official.has(r.country_area_m49));else assert(['not_verified','not_applicable'].includes(r.country_area_m49));}
const programmeFacts=read('data/cross_border_programme_evidence_2026.csv');
unique(programmeFacts,r=>r.record_id,'programme evidence IDs');
assert.equal(programmeFacts.length,5);
for(const r of programmeFacts){assert(ids.has(r.network_id));assert(sources.has(r.source_url));assert(/^\d+$/.test(r.reported_count));assert(r.verification_state.startsWith('AGGREGATE_'));}
for(const [measure,count] of [['signed_mou_states','8'],['expressed_intent_states','15'],['programme_target_states','55'],['first_version_national_standard_adoption_count','29'],['reported_committed_countries','35']])assert.equal(programmeFacts.find(r=>r.measure===measure).reported_count,count);


console.log(JSON.stringify({result:'PASS',nodes:nodes.length,edges:edges.length,conditions:conditions.length,statuses:statuses.length,un_crosswalk:un.length,seed_exceptions:exceptions.length,verified_regions:assigned.length,unverified_regions:statuses.length-assigned.length,office_presence:offices.length,office_profile_audits_2026:officeAudits.length,who_office_survey_roster_2026:surveyRoster.length,emrn_nca_candidates:emrnNcas.length,historical_office_records:officeHistory.length,historical_office_edges:histEdges.length,provenance:prov.length,hearts_catalog: pathways.length,programme_evidence:programmeFacts.length},null,2));
