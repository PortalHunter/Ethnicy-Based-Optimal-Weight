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
assert.equal(nodes.length,47);assert.equal(edges.length,617);assert.equal(prov.length,229);

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



// Batch 12: named APPM state participation and nonbinding ASEAN sector structure.
const appmNode=nodes.find(r=>r.network_id==='AFRICA_APPM');
assert(appmNode&&appmNode.source_url==='https://africacdc.org/appm/');
const appmMous=edges.filter(r=>r.relationship_type==='signed_participation_mou'&&r.to_id==='AFRICA_APPM');
assert.equal(appmMous.length,1);assert.equal(appmMous[0].from_id,'m49:818');
assert.equal(appmMous[0].country_area_m49,'818');assert.equal(appmMous[0].valid_from,'2026-06-15');
assert.equal(appmMous[0].as_of,'2026-06-15');
assert.equal(appmMous[0].source_url,'https://africacdc.org/news-item/egypt-joins-african-pooled-procurement-mechanism-appm/');
assert(edges.some(r=>r.from_id==='AFRICA_APPM'&&r.to_id==='AFRICA_CDC'&&r.relationship_type==='operated_by'));
const aseanGov=read('data/asean_health_governance_2026.csv');
unique(aseanGov,r=>r.record_id,'ASEAN governance IDs');
unique(aseanGov,r=>r.body_acronym,'ASEAN body acronyms');
assert.equal(aseanGov.length,6);
assert.deepEqual(aseanGov.map(r=>r.body_acronym),['AHMM','SOMHD','AHC1','AHC2','AHC3','AHC4']);
for(const r of aseanGov){assert.equal(r.network_id,'ASEAN');assert.equal(r.as_of,'2026-11-05');assert.equal(r.verification_state,'OFFICIAL_PORTAL_STRUCTURE_ONLY');assert(sources.has(r.source_url));assert(r.notes.length>10);}
for(const r of aseanGov.filter(r=>r.body_acronym.startsWith('AHC')))assert.equal(r.programme_cycle_label,'2026-2030 label');

// Batch 13 — regulator-cooperation self-reports, APPM support partnership and Liechtenstein boundary.
const regulatory=read('data/regulatory_cooperation_evidence_2026.csv');
unique(regulatory,r=>r.record_id,'regulatory cooperation evidence IDs');
assert.equal(regulatory.length,19);
assert.equal(regulatory.filter(r=>r.relationship_group==='BILATERAL_REGULATORY_MOU_REPORTED').length,17);
assert.equal(regulatory.filter(r=>r.relationship_group==='MULTILATERAL_REGULATORY_MOU_REPORTED').length,1);
assert.equal(regulatory.filter(r=>r.relationship_group==='APPM_SUPPORT_PARTNERSHIP_REPORTED').length,1);
for(const r of regulatory){
  assert(sources.has(r.source_url));
  assert.match(r.reported_signed_on,/^\d{4}-\d{2}(-\d{2})?$/);
  assert.equal(r.date_precision,r.reported_signed_on.length===7?'month':'day');
  if(/^\d{3}$/.test(r.counterparty_country_area_m49))assert(official.has(r.counterparty_country_area_m49));
  else assert.equal(r.counterparty_country_area_m49,'not_applicable_multilateral');
  assert(r.exact_id_join_state.startsWith('PENDING_'));
  assert(r.legal_remit_state.includes('UNVERIFIED'));
}
assert.equal(regulatory.find(r=>r.record_id==='TD-REGCOOP-015').reported_signed_on,'2026-06-15');
const whoBoundary=read('data/who_region_boundary_evidence_2026.csv');
unique(whoBoundary,r=>r.record_id,'WHO boundary evidence IDs');
assert.equal(whoBoundary.length,1);
assert.equal(whoBoundary[0].country_area_m49,'438');
assert(sources.has(whoBoundary[0].source_url));
assert.equal(statuses.find(r=>r.m49_code==='438').who_region,'not_verified');


 // Batch 14 — PAHO legal participation categories versus cross-territory technical cooperation
 const pahoGov=read('data/paho_governance_categories_2026.csv');
 unique(pahoGov,r=>r.record_id,'PAHO category IDs');
 unique(pahoGov,r=>r.country_area_m49,'PAHO category M49 codes');
 assert.equal(pahoGov.length,44);
 for(const [kind,n] of [['member_of',35],['participating_state_of',3],['associate_member_of',4],['observer_state_of',2]]){
   assert.equal(pahoGov.filter(r=>r.relationship_type===kind).length,n);
   assert.equal(edges.filter(r=>r.to_id==='PAHO'&&r.relationship_type===kind).length,n);
 }
 for(const r of pahoGov){
   assert(official.has(r.country_area_m49));
   assert(sources.has(r.source_url));
   assert.equal(r.admission_date_precision,r.admission_date.length===7?'month':'day');
   assert(edges.some(e=>e.from_id==='m49:'+r.country_area_m49&&e.to_id==='PAHO'&&e.relationship_type===r.relationship_type&&e.valid_from===r.admission_date));
 }
 const pahoTC=read('data/paho_technical_cooperation_2026.csv');
 unique(pahoTC,r=>r.record_id,'PAHO technical-cooperation IDs');
 unique(pahoTC,r=>r.country_area_m49,'PAHO technical-cooperation M49 codes');
 assert.equal(pahoTC.length,21);
 for(const [office,n] of [['WHO_MCO_BARBADOS',14],['WHO_MCO_JAMAICA',2],['WHO_MCO_BAHAMAS',1],['WHO_MCO_TRINIDAD',4]])
   assert.equal(pahoTC.filter(r=>r.office_network_id===office).length,n);
 for(const r of pahoTC){
   assert(official.has(r.country_area_m49));assert(ids.has(r.office_network_id));assert(sources.has(r.source_url));
   assert.equal(r.relationship_type,'receives_technical_cooperation_from');
   assert(edges.some(e=>e.from_id==='m49:'+r.country_area_m49&&e.to_id===r.office_network_id&&e.relationship_type===r.relationship_type&&e.as_of===r.source_observed_on&&e.source_url===r.source_url));
   assert(['PUBLISHED_DAY','UNDATED_PAGE_CHECKED'].includes(r.source_date_basis));
 }
 assert.equal(edges.filter(r=>r.relationship_type==='receives_technical_cooperation_from').length,21);
 assert.equal(pahoTC.find(r=>r.country_area_m49==='663').office_network_id,'WHO_MCO_BARBADOS');
 assert.equal(pahoTC.find(r=>r.country_area_m49==='534').office_network_id,'WHO_MCO_TRINIDAD');
 assert.equal(statuses.find(r=>r.m49_code==='663').who_region,'not_verified');
 assert.equal(statuses.find(r=>r.m49_code==='534').who_region,'not_verified');


// Batch 15: WHO Europe SCI 2022 video metadata versus explicit 2026 roster; office checks separate from 2024 surveys.
const sciSnapshots=read('data/who_europe_sci_snapshots.csv'), officeCrosschecks=read('data/who_office_independent_checks_2026.csv');
unique(sciSnapshots,r=>r.record_id,'SCI snapshot ID');unique(officeCrosschecks,r=>r.record_id,'office source crosscheck ID');
assert.equal(sciSnapshots.length,53);
assert.equal(sciSnapshots.filter(r=>r.snapshot_as_of==='2022-04-11'&&r.source_snapshot_kind==='WHO_VIDEO_TOPIC_METADATA').length,11);
assert.equal(sciSnapshots.filter(r=>r.snapshot_as_of==='2026-06-09'&&r.source_snapshot_kind==='WHO_DATED_PARTICIPANT_ROSTER').length,12);
assert(!sciSnapshots.some(r=>r.snapshot_as_of==='2022-04-11'&&r.country_area_m49==='807'));
assert(sciSnapshots.some(r=>r.snapshot_as_of==='2026-06-09'&&r.country_area_m49==='807'));
assert(ids.has('WHO_EURO_SCI'));
const sciEdges=edges.filter(r=>r.to_id==='WHO_EURO_SCI'&&r.relationship_type==='participates_in_voluntary_health_initiative'&&r.as_of==='2026-06-09');
assert.equal(sciEdges.length,12);
for(const r of sciSnapshots){assert(official.has(r.country_area_m49));assert(sources.has(r.source_url));assert.equal(r.network_id,'WHO_EURO_SCI');}
for(const r of sciEdges){assert(official.has(r.country_area_m49));assert.equal(r.as_of,'2026-06-09');assert.equal(r.valid_from,'');assert.equal(r.valid_to,'');assert(sources.has(r.source_url));assert(sciSnapshots.some(s=>s.country_area_m49===r.country_area_m49&&s.snapshot_as_of==='2026-06-09'));}

 // Batch 16: distinct dated membership and meeting observer snapshots; exact accession day unknown.
const sci2023=sciSnapshots.filter(r=>r.snapshot_as_of==='2023-05-12'),sci2024=sciSnapshots.filter(r=>r.snapshot_as_of==='2024-04-12');
assert.equal(sci2023.filter(r=>r.relationship_state==='EXPLICIT_MEMBER_COHORT_AT_MEETING').length,11);
assert.equal(sci2023.filter(r=>r.relationship_state==='OBSERVER_AT_SPECIFIC_MEETING_NOT_MEMBERSHIP').length,5);
assert.equal(sci2024.filter(r=>r.source_snapshot_kind==='WHO_2024_PRE_ACCESSION_MEMBER_ROSTER').length,11);
assert.equal(sci2024.filter(r=>r.source_snapshot_kind==='WHO_2024_NEW_MEMBER_ACCESSION').length,1);
assert.equal(sci2024.filter(r=>r.relationship_state==='OBSERVER_AT_SPECIFIC_MEETING_NOT_MEMBERSHIP').length,2);
assert(sci2023.some(r=>r.country_area_m49==='807'&&r.relationship_state==='OBSERVER_AT_SPECIFIC_MEETING_NOT_MEMBERSHIP'));
assert(sci2024.some(r=>r.country_area_m49==='807'&&r.relationship_state==='JOINED_DURING_APRIL_10_TO_12_MEETING'));
const sciOldEdges=edges.filter(r=>r.to_id==='WHO_EURO_SCI'&&['2023-05-12','2024-04-12'].includes(r.as_of));
assert.equal(sciOldEdges.length,30);
assert.equal(sciOldEdges.filter(r=>r.relationship_type==='attended_voluntary_initiative_meeting_as_observer').length,7);
assert.equal(sciOldEdges.filter(r=>r.relationship_type==='participates_in_voluntary_health_initiative').length,23);
assert(sciOldEdges.every(r=>r.valid_from===''&&r.valid_to===''));
assert(!sciOldEdges.some(r=>r.from_id==='m49:052'&&r.relationship_type==='participates_in_voluntary_health_initiative'));

assert.equal(officeCrosschecks.length,46);
assert.equal(officeCrosschecks.filter(r=>r.source_date_precision==='day').length,21);
assert.equal(officeCrosschecks.filter(r=>r.source_date_precision==='undated'&&r.source_evidence_date==='unknown').length,25);
for(const r of officeCrosschecks){if(r.country_area_m49!=='not_verified')assert(official.has(r.country_area_m49));assert(sources.has(r.source_url));assert.equal(r.checked_on,'2026-11-05');assert.equal(r.source_claim_scope,'INDEPENDENT_SOURCE_CORROBORATION_NOT_SURVEY_REFRESH');assert(surveyRoster.some(s=>s.country_area_m49===r.country_area_m49&&s.latest_self_reported_survey==='2024-09'&&(r.country_area_m49!=='not_verified'||s.who_office_label===r.who_office_label)));if(r.source_date_precision==='day')assert.match(r.source_evidence_date,/^2026-\d{2}-\d{2}$/);else assert.equal(r.source_evidence_date,'unknown');}

// Batch 18: independently dated/undated WHO evidence for 10 older 2024 office-survey entries.
assert.deepEqual(officeCrosschecks.filter(r=>(Number(r.record_id.split('-').at(-1))>=10&&Number(r.record_id.split('-').at(-1))<=19)).map(r=>r.country_area_m49).sort(),['148','226','480','508','516','686','716','728','748','834'].sort());
assert.equal(officeCrosschecks.filter(r=>(Number(r.record_id.split('-').at(-1))>=10&&Number(r.record_id.split('-').at(-1))<=19)&&r.source_date_precision==='undated').length,7);
assert.equal(officeCrosschecks.filter(r=>(Number(r.record_id.split('-').at(-1))>=10&&Number(r.record_id.split('-').at(-1))<=19)&&r.source_date_precision==='day').length,3);
assert.equal(new Set(officeCrosschecks.map(r=>r.country_area_m49)).size,45);assert.equal(new Set(officeCrosschecks.map(r=>r.who_office_label)).size,46);
assert.equal(new Set(officeCrosschecks.map(r=>r.source_url)).size,46);
assert.deepEqual(prov.filter(r=>/^TD-SRC-(15[1-9]|160)$/.test(r.source_id)).map(r=>r.source_id).sort(),Array.from({length:10},(_,i)=>'TD-SRC-'+(i+151)).sort());
for(const r of officeCrosschecks.filter(r=>(Number(r.record_id.split('-').at(-1))>=10&&Number(r.record_id.split('-').at(-1))<=19))){assert.equal(r.verification_state,r.source_date_precision==='day'?'OFFICIAL_DATED_PRIMARY_WHO':'OFFICIAL_UNDATED_PRIMARY_WHO_PAGE');if(r.source_date_precision==='undated')assert.equal(r.source_evidence_date,'unknown');}
console.log('Batch 18 original 10 records retained; survey roster dates unchanged');


// Batch 19: 10 additional independent WHO checks for previously retained 2024 survey offices.
// Event start day and reported appointment month are NOT publication dates.
const officeBatch19=officeCrosschecks.filter(r=>Number(r.record_id.split('-').at(-1))>=20&&Number(r.record_id.split('-').at(-1))<=29);
assert.equal(officeBatch19.length,10);
assert.deepEqual(officeBatch19.map(r=>r.country_area_m49).sort(),['048','112','364','368','434','682','706','729','760','795'].sort());
assert.equal(officeBatch19.filter(r=>r.source_date_precision==='day').length,2);
assert.equal(officeBatch19.filter(r=>r.source_date_precision==='undated').length,8);
assert(officeBatch19.some(r=>r.country_area_m49==='795'&&r.notes.includes('EVENT_START_DATE_NOT_PUBLICATION_DATE')));
assert(officeBatch19.filter(r=>r.notes.includes('conflict')||r.notes.includes('different')).length>=3);
assert.equal(surveyRoster.filter(r=>r.latest_self_reported_survey==='2024-09').length,46);
assert.equal(surveyRoster.filter(r=>r.latest_self_reported_survey==='2026-04').length,106);
console.log('Batch 19 original crosschecks retained without recasting source dates');

// Batch 20: all 46 retained 2024 WHO survey labels now have independent primary-source corroboration.
const officeBatch20=officeCrosschecks.filter(r=>Number(r.record_id.split('-').at(-1))>=30&&Number(r.record_id.split('-').at(-1))<=46);
assert.equal(officeBatch20.length,17);
assert.equal(officeBatch20.filter(r=>r.source_date_precision==='day').length,12);
assert.equal(officeBatch20.filter(r=>r.source_date_precision==='undated').length,5);
assert.equal(officeBatch20.filter(r=>r.country_area_m49==='not_verified').length,2);
assert.deepEqual(officeCrosschecks.filter(r=>r.country_area_m49!=='not_verified').map(r=>r.country_area_m49).sort(),surveyRoster.filter(r=>r.latest_self_reported_survey==='2024-09'&&r.country_area_m49!=='not_verified').map(r=>r.country_area_m49).sort());
assert.deepEqual(officeBatch20.filter(r=>r.country_area_m49==='not_verified').map(r=>r.who_office_label).sort(),surveyRoster.filter(r=>r.latest_self_reported_survey==='2024-09'&&r.country_area_m49==='not_verified').map(r=>r.who_office_label).sort());
console.log('Batch 20 independently corroborated 46/46 older WHO survey labels; 21 dated sources, 25 undated; two MCO labels unjoined; no survey-date promotion');

// Batch 15 date-precision correction: the Montenegro WHO events page has event date, not verified publication date.
assert(officeCrosschecks.some(r=>r.country_area_m49==='499'&&r.source_evidence_date==='2026-06-16'&&r.notes.includes('PUBLICATION_DATE_UNKNOWN')));


// Batch 17: historical WHO SIDS region heading and 2019 Eastern Caribbean technical-coverage roster.
// Neither historical layer may populate present-day WHO region statuses or positive 2026 office presence.
const historicSids=read('data/who_region_historical_sids_2021.csv'),historicEcc=read('data/who_ecc_historical_scope_2019.csv');
unique(historicSids,r=>r.record_id,'historical SIDS IDs');unique(historicSids,r=>r.country_area_m49,'historical SIDS codes');
unique(historicEcc,r=>r.record_id,'2019 ECC IDs');unique(historicEcc,r=>r.country_area_m49,'2019 ECC codes');
assert.equal(historicSids.length,13);assert.equal(historicEcc.length,14);
assert.deepEqual(historicSids.map(r=>r.country_area_m49).sort(),["060","092","136","312","474","500","531","533","534","630","660","796","850"]);
assert.deepEqual(historicEcc.map(r=>r.country_area_m49).sort(),["028","052","092","212","254","308","312","474","500","659","660","662","663","670"]);
const historicSidsUrl="https://iris.who.int/bitstream/handle/10665/344252/9789240033573-eng.pdf?sequence=1",historicEccUrl="https://iris.who.int/bitstream/handle/10665/311592/WHO-CCU-19.01-eng.pdf";
assert(sources.has(historicSidsUrl));assert(sources.has(historicEccUrl));
for(const r of historicSids){assert(official.has(r.country_area_m49));assert.equal(r.who_region_heading,'AMRO');assert.equal(r.source_url,historicSidsUrl);assert.equal(r.source_snapshot_as_of,'2021-07');assert.equal(r.source_date_precision,'month');assert.equal(r.source_context_period,'2019-2020 WHO country presence context');assert.equal(statuses.find(x=>x.m49_code===r.country_area_m49).who_region,'not_verified');}
for(const r of historicEcc){assert(official.has(r.country_area_m49));assert.equal(r.office_network_id,'WHO_MCO_BARBADOS');assert.equal(r.source_url,historicEccUrl);assert.equal(r.source_report_year,'2019');assert.equal(r.observed_valid_from,'');assert.equal(r.observed_valid_to,'');}
assert.equal(historicEcc.filter(r=>r.relationship_type==='OFFICE_HOST_IN_2019').length,1);
assert.equal(historicEcc.filter(r=>r.relationship_type==='COVERED_BY_BARBADOS_WHO_MCO_2019').length,13);
assert(historicEcc.some(r=>r.country_area_m49==='663'));
assert(!historicSids.some(r=>r.country_area_m49==='663'));
assert(historicSids.some(r=>r.country_area_m49==='534'));
assert.equal(statuses.filter(r=>r.who_region!=='not_verified').length,205);
assert.equal(statuses.filter(r=>r.who_region==='not_verified').length,44);
console.log('Batch 17 historical source-layer assertions PASS: SIDS=13 ECC=14; current 205/44 unchanged');

// Batch 21: WHO WER volume 101 issue 36-37 Table 5 describes 2025 leprosy surveillance
// entries under Region of the Americas. It is a dated reporting *group*, NOT a
// 2026 administrative WHO region assignment, constitutional membership, or office.
const werTerritories=read('data/who_territory_wer_regional_reporting_2025.csv');
const werSource='https://www.who.int/publications/journals/weekly-epidemiological-record/wer101-36-37/';
const werCodes=['060','092','136','254','312','474','500','531','533','534','630','660','663','796','850'];
assert.equal(werTerritories.length,15);
unique(werTerritories,r=>r.record_id,'2025 WER territory reporting IDs');
unique(werTerritories,r=>r.country_area_m49,'2025 WER territory reporting M49');
assert.deepEqual(werTerritories.map(r=>r.country_area_m49).sort(),werCodes);
assert.equal(prov.filter(r=>r.source_url===werSource).length,1);
assert.equal(prov.find(r=>r.source_url===werSource).source_id,'TD-SRC-188');
for(const r of werTerritories){
  assert(official.has(r.country_area_m49));
  assert.equal(r.source_url,werSource);
  assert.equal(r.source_regional_heading,'Region of the Americas');
  assert.equal(r.data_reference_year,'2025');
  assert.equal(r.source_issue_epidemiological_weeks,'2026-08-31_to_2026-09-13');
  assert.equal(r.observed_relation,'WHO_EPIDEMIOLOGICAL_TABLE_GROUPING_ONLY');
  assert.equal(r.who_admin_assignment_state,'not_verified');
  assert.equal(r.checked_on,'2026-11-05');
  assert.equal(statuses.find(x=>x.m49_code===r.country_area_m49).who_region,'not_verified');
  assert(pending.some(x=>x.country_area_m49===r.country_area_m49&&x.who_region_review_state==='UNKNOWN_REVIEW_NEEDED'));
}
assert.equal(werTerritories.find(r=>r.country_area_m49==='663').source_label,'Saint Martin');
assert.equal(werTerritories.find(r=>r.country_area_m49==='534').source_label,'Sint Maarten');
assert.equal(statuses.filter(r=>r.who_region==='not_verified').length,44);
console.log('Batch 21 WHO WER 2025 surveillance-group evidence: 15 territory observations; 44 WHO administrative assignments remain pending');

// Batch 22: date-qualified Caribbean PAHO representative transitions and local cooperation.
// Direct PAHO page opens returned 403; indexed official-source text was available.
// These are representation and programme-activity observations, NOT a dedicated office,
// administrative WHO regional assignment, WHO membership or locally binding guidance.
const repTerms=read('data/paho_representative_terms_2026.csv');
const pahoLocal=read('data/paho_local_implementation_evidence_2026.csv');
const uIan='https://www.paho.org/en/news/23-10-2026-mr-ian-stein-appointed-pahowho-representative-bahamas-and-turks-and-caicos-islands';
const uEldonna='https://www.paho.org/en/news/30-10-2026-pahowho-appoints-dr-eldonna-boisson-representative-jamaica-bermuda-and-cayman';
const uCayman='https://www.paho.org/en/news/13-10-2026-steps-hearts-new-chapter-cardiovascular-care-cayman-islands';
const uSxmLab='https://www.paho.org/en/news/29-10-2026-paho-supports-efforts-strengthen-laboratory-services-sint-maarten';
assert.equal(repTerms.length,12);assert.equal(pahoLocal.length,4);
unique(repTerms,r=>r.record_id,'PAHO representative source observations');
unique(pahoLocal,r=>r.record_id,'PAHO local cooperation observations');
for(const [id,url] of [['TD-SRC-189',uIan],['TD-SRC-190',uEldonna],['TD-SRC-191',uCayman],['TD-SRC-192',uSxmLab]]){
  assert.equal(prov.filter(p=>p.source_url===url).length,1);
  assert.equal(prov.find(p=>p.source_url===url).source_id,id);
}
for(const row of [...repTerms,...pahoLocal]){
  assert(official.has(row.country_area_m49));
  assert(sources.has(row.source_url));
  assert.equal(row.checked_on,'2026-11-05');
  assert.equal(row.verification_state,'OFFICIAL_PAHO_INDEXED_DIRECT_OPEN_403');
}
for(const r of repTerms) assert.equal(r.relationship_type,'official_representative_of');
const newIan=repTerms.filter(r=>r.assignment_context==='NEW_APPOINTMENT'&&r.representative_name==='Ian A. Stein');
const newEldonna=repTerms.filter(r=>r.assignment_context==='NEW_APPOINTMENT'&&r.representative_name==='Eldonna V. Boisson');
assert.deepEqual(newIan.map(r=>r.country_area_m49).sort(),['044','796']);
assert.deepEqual(newEldonna.map(r=>r.country_area_m49).sort(),['060','136','388']);
for(const r of newIan){assert.equal(r.reported_start,'2026-10-22');assert.equal(r.reported_start_precision,'day');assert.equal(r.reported_end,'unknown');assert.equal(r.source_url,uIan);}
for(const r of newEldonna){assert.equal(r.reported_start,'2026-10-29');assert.equal(r.reported_start_precision,'day');assert.equal(r.reported_end,'unknown');assert.equal(r.source_url,uEldonna);}
const prior=repTerms.filter(r=>r.assignment_context==='PRIOR_TERM_REPORTED');
assert.equal(prior.length,7);
for(const m49 of ['044','796']){
 const v=prior.filter(r=>r.country_area_m49===m49&&r.representative_name==='Eldonna V. Boisson');
 assert.equal(v.length,2);
 assert.deepEqual(v.map(r=>r.reported_start).sort(),['2021-01','2021-02']);
 assert.deepEqual(v.map(r=>r.source_url).sort(),[uIan,uEldonna].sort());
 for(const r of v){assert.equal(r.reported_end,'2026-10');assert.equal(r.reported_end_precision,'month');}
}
const priorIan=prior.filter(r=>r.representative_name==='Ian A. Stein');
assert.deepEqual(priorIan.map(r=>r.country_area_m49).sort(),['060','136','388']);
for(const r of priorIan){assert.equal(r.reported_start,'2021');assert.equal(r.reported_start_precision,'year');assert.equal(r.reported_end,'unknown');assert.equal(r.source_url,uIan);}
assert.deepEqual(pahoLocal.filter(r=>r.country_area_m49==='136').map(r=>r.observed_relation).sort(),[
'WHO_STEPS_SURVEY_COLLABORATION_REPORTED','PAHO_HEARTS_TECHNICAL_SUPPORT_VISIT_REPORTED','LOCAL_HEARTS_IMPLEMENTATION_REPORTED'].sort());
assert(pahoLocal.some(r=>r.country_area_m49==='136'&&r.reported_event_time==='2023'&&r.event_date_precision==='year'));
assert(pahoLocal.some(r=>r.country_area_m49==='136'&&r.reported_event_time==='2025-09'&&r.event_date_precision==='month'));
assert(pahoLocal.some(r=>r.country_area_m49==='136'&&r.reported_event_time==='unknown'&&r.source_published_on==='2026-10-13'));
assert(pahoLocal.some(r=>r.country_area_m49==='534'&&r.reported_event_time==='2026-10-28'&&r.source_published_on==='2026-10-29'&&r.observed_relation==='PAHO_LABORATORY_POLICY_REVISION_SUPPORT_REPORTED'));
for(const code of ['060','136','534','796']) assert.equal(statuses.find(s=>s.m49_code===code).who_region,'not_verified');
assert.equal(statuses.filter(r=>r.who_region==='not_verified').length,44);
assert.equal(statuses.filter(r=>r.who_region!=='not_verified').length,205);
console.log('Batch 22 PAHO role transitions and local cooperation: 12 representative source observations, 4 local programme/policy observations, 4 primary URLs, month conflict retained; regional and clinical status unchanged');



// Batch 23: distinguish Greenland-WHO Europe formal cooperation from WHO region membership.
const greenland=read('data/who_greenland_cooperation_2023_2024.csv');
unique(greenland,r=>r.record_id,'Greenland evidence IDs');assert.equal(greenland.length,4);
assert.deepEqual(greenland.map(r=>r.observed_relation).sort(),['WHO_EUROPE_GEOGRAPHIC_CHARACTERIZATION_HISTORICAL','HIGH_LEVEL_COOPERATION_DIALOGUE','FIVE_YEAR_HEALTH_COOPERATION_MOU_REPORTED','SCI_RHN_TECHNICAL_PARTICIPATION_PROPOSED'].sort());
for(const [sid,url] of [['TD-SRC-193','https://www.who.int/europe/news-room/photo-stories/item/regional-director-undertakes-first-ever-high-level-visit-to-greenland'],['TD-SRC-194','https://www.who.int/europe/news/item/04-07-2023-a-new-era-of-partnership-and-exchange-between-who-europe-and-greenland'],['TD-SRC-195','https://www.who.int/europe/news-room/01-07-2024-strengthening-health-and-well-being-in-greenland--a-landmark-collaboration-agreement-with-who-europe']]){
 assert.equal(prov.filter(p=>p.source_url===url).length,1);assert.equal(prov.find(p=>p.source_url===url).source_id,sid);
}
for(const r of greenland){assert.equal(r.country_area_m49,'304');assert.equal(r.who_partner_node,'WHO_EURO');assert(official.has(r.country_area_m49));assert(ids.has(r.who_partner_node));assert(sources.has(r.source_url));assert.equal(r.checked_on,'2026-11-05');assert.equal(r.who_admin_assignment_state,'not_verified');assert.equal(r.who_membership_state,'not_verified');}
assert.equal(greenland.find(r=>r.record_id==='TD-WHO-GREENLAND-001').reported_event_date,'2023-03');
assert.equal(greenland.find(r=>r.record_id==='TD-WHO-GREENLAND-002').reported_event_date,'2023-06-28');
assert.equal(greenland.find(r=>r.record_id==='TD-WHO-GREENLAND-003').reported_agreement_term,'5_years_reported_end_day_not_independently_verified');
assert.equal(greenland.find(r=>r.record_id==='TD-WHO-GREENLAND-004').local_implementation_state,'PROPOSED_NOT_CONFIRMED');
const gEdge=edges.filter(e=>e.from_id==='m49:304'&&e.to_id==='WHO_EURO'&&e.relationship_type==='cooperates_with');
assert.equal(gEdge.length,1);assert.equal(gEdge[0].valid_from,'2024-07-01');assert.equal(gEdge[0].source_url,'https://www.who.int/europe/news-room/01-07-2024-strengthening-health-and-well-being-in-greenland--a-landmark-collaboration-agreement-with-who-europe');assert.equal(gEdge[0].verification_state,'VERIFIED_PRIMARY_MOU_PRESS_NOTICE_ONLY');
assert.equal(statuses.find(s=>s.m49_code==='304').who_region,'not_verified');assert(pending.some(x=>x.country_area_m49==='304'));
assert.equal(statuses.filter(s=>s.who_region==='not_verified').length,44);
console.log('Batch 23 Greenland: four dated observations; one WHO Europe MoU graph link; three reviewed WHO URLs; 44 WHO regional assignments still unresolved');



// Batch 24: WHO SPH reporting metadata is not a current WHO constitutional or office assignment.
const sph=read('data/who_sph_reporting_region_context.csv');
assert.equal(sph.length,9);unique(sph,r=>r.record_id,'WHO SPH record IDs');
assert.deepEqual([...new Set(sph.map(r=>r.country_area_m49))].sort(),['060','092','136','254','438','531','850']);
const sphSources={"https://extranet.who.int/sph/liechtenstein-2019":"TD-SRC-196","https://extranet.who.int/sph/spar-liechtenstein-submitted2024":"TD-SRC-197","https://extranet.who.int/sph/cayman-islands":"TD-SRC-198","https://extranet.who.int/sph/coronavirus-disease-covid-19-bermuda":"TD-SRC-199","https://extranet.who.int/sph/coronavirus-disease-covid-19-british-virgin-islands":"TD-SRC-200","https://extranet.who.int/sph/coronavirus-disease-covid-19-united-states-virgin-islands":"TD-SRC-201","https://extranet.who.int/sph/coronavirus-disease-covid-19-curacao":"TD-SRC-202","https://extranet.who.int/sph/chikungunya-virus-disease-2026-curacao":"TD-SRC-203","https://extranet.who.int/sph/chikungunya-virus-disease-2026-french-guiana":"TD-SRC-204"};
for(const [url,id] of Object.entries(sphSources)){assert.equal(prov.filter(r=>r.source_url===url).length,1);assert.equal(prov.find(r=>r.source_url===url).source_id,id);}
for(const r of sph){assert(official.has(r.country_area_m49));assert(sources.has(r.source_url));assert.equal(r.observed_relation,'SOURCE_SPECIFIC_WHO_HEALTH_SECURITY_PORTAL_METADATA_ONLY');assert.equal(r.who_admin_assignment_state,'not_verified');assert.equal(r.who_membership_state,'not_verified');assert.equal(r.checked_on,'2026-11-05');assert.equal(statuses.find(s=>s.m49_code===r.country_area_m49).who_region,'not_verified');assert(pending.some(p=>p.country_area_m49===r.country_area_m49));}
const lie=sph.filter(r=>r.country_area_m49==='438');
assert.deepEqual(lie.map(r=>r.source_reference_year).sort(),['2019','2024']);
for(const r of lie){assert.equal(r.source_record_type,'SPAR_ANNUAL_SELF_ASSESSMENT');assert.equal(r.source_regional_label,'European Region');assert.equal(r.source_record_status,'Submitted');assert.equal(r.source_date_precision,'reporting_year_only');}
assert.equal(sph.find(r=>r.country_area_m49==='136').source_date_precision,'undated_profile');
for(const [code,id] of [['060','2020-E000181'],['092','2020-E000243'],['850','2020-E000195']]){const r=sph.find(x=>x.country_area_m49===code);assert.equal(r.source_event_id,id);assert.equal(r.source_reference_year,'2020');assert.equal(r.source_record_type,'SPH_2020_EMERGENCY_EVENT_REGION_TAG');assert.equal(r.source_regional_label,'Region of the Americas');}
assert.equal(statuses.filter(s=>s.who_region==='not_verified').length,44);
console.log('Batch 24/25: WHO SPH event and health security metadata; no administrative region/membership/office reclassification');
const extraSph=sph.filter(r=>['TD-WHO-SPH-007','TD-WHO-SPH-008','TD-WHO-SPH-009'].includes(r.record_id));
assert.equal(extraSph.length,3);
assert.deepEqual(extraSph.map(r=>r.source_event_id).sort(),['2020-E000180','2026-E000054','2026-E000066']);
assert.deepEqual(extraSph.map(r=>r.country_area_m49).sort(),['254','531','531']);
for(const r of extraSph){assert.equal(r.source_date_precision,'event_year_only');assert.equal(r.source_regional_label,'Region of the Americas');assert.equal(r.who_admin_assignment_state,'not_verified');assert.equal(r.who_membership_state,'not_verified');assert.equal(r.observed_relation,'SOURCE_SPECIFIC_WHO_HEALTH_SECURITY_PORTAL_METADATA_ONLY');assert.equal(statuses.find(s=>s.m49_code===r.country_area_m49).who_region,'not_verified');}
assert.equal(extraSph.filter(r=>r.source_reference_year==='2020').length,1);
assert.equal(extraSph.filter(r=>r.source_reference_year==='2026').length,2);
console.log('Batch 25: WHO SPH Curaçao 2020 and 2026 and French Guiana 2026; 3 directly opened first-party sources');


// Batch 26: IDF North America/Caribbean source-listed organizational membership, not country-level legal membership.
const idfNac=read('data/idf_nac_member_observations_2026.csv');
unique(idfNac,r=>r.record_id,'IDF NAC source snapshot IDs');
assert.equal(idfNac.length,25);
const idfGeo=idfNac.filter(r=>r.observation_category==='COUNTRY_OR_TERRITORY_WITH_MEMBER_ORGANISATION_LISTED');
const idfTrans=idfNac.filter(r=>r.observation_category==='TRANSNATIONAL_ORGANISATION_MEMBER_LISTED');
assert.equal(idfGeo.length,22); assert.equal(idfTrans.length,3);
assert.equal(new Set(idfGeo.map(r=>r.country_area_m49)).size,22);
assert.deepEqual(idfGeo.map(r=>r.country_area_m49).sort(),["028","044","052","060","084","092","212","308","328","332","388","500","531","533","534","659","660","662","670","740","780","840"]);
assert.equal(idfGeo.filter(r=>r.named_organization_on_region_page!=='').length,21);
assert.equal(idfGeo.filter(r=>r.named_organization_on_region_page==='').length,1);
assert.equal(idfGeo.find(r=>r.country_area_m49==='531').name_link_status,'COUNTRY_LISTED_NO_ASSOCIATION_NAME_ON_REGION_OVERVIEW');
assert.deepEqual(idfTrans.map(r=>r.named_organization_on_region_page).sort(),['Beyond Type 1','Breakthrough T1D','Direct Relief']);
for(const r of idfNac){assert.equal(r.network_id,'IDF');assert(ids.has(r.network_id));assert.equal(r.idf_region,'NORTH_AMERICA_AND_CARIBBEAN');assert.equal(r.source_checked_on,'2026-11-05');assert.equal(r.membership_valid_from,'unknown');assert.equal(r.membership_valid_to,'unknown');assert.equal(r.verification_state,'OFFICIAL_IDF_LIST_DIRECTLY_REVIEWED');assert(sources.has(r.source_url));}
for(const r of idfGeo){assert(official.has(r.country_area_m49));assert(r.idf_geographic_label);}
for(const r of idfTrans){assert.equal(r.country_area_m49,'');assert.equal(r.idf_geographic_label,'');assert.equal(r.name_link_status,'TRANSNATIONAL_NO_COUNTRY_ASSIGNMENT');}
for(const [url,id] of [['https://idf.org/our-network/regions-and-members/north-america-and-caribbean/','TD-SRC-205'],['https://idf.org/our-network/regions-and-members/north-america-and-caribbean/members/','TD-SRC-206']]){assert.equal(prov.filter(p=>p.source_url===url).length,1);assert.equal(prov.find(p=>p.source_url===url).source_id,id);}
assert.equal(edges.length,617);assert.equal(statuses.filter(s=>s.who_region==='not_verified').length,44);
console.log('Batch 26: 22 IDF NAC country/territory member-organisation locations plus three transnational members; 21 names and one Curaçao name gap; incompatible official association totals preserved; zero inferred legal/country membership edges');


// Batch 27: source-typed Haemochromatosis International member geography and policy classes.
const hi=read('data/hi_membership_source_observations_2026.csv');
unique(hi,r=>r.record_id,'HI source record IDs');assert.equal(hi.length,19);
const hiCountries=hi.filter(r=>r.observation_category==='COUNTRY_LINK_TO_MEMBER_ORGANIZATIONS');
const hiRegion=hi.filter(r=>r.observation_category==='REGIONAL_MEMBER_LINK_NOT_M49');
const hiPolicy=hi.filter(r=>['FULL_ORGANIZATIONAL_MEMBERSHIP_CATEGORY','ASSOCIATE_INDIVIDUAL_MEMBERSHIP_CATEGORY','EXTERNAL_PARTNER_DISTINCT_FROM_MEMBER'].includes(r.observation_category));
assert.equal(hiCountries.length,15);assert.equal(hiRegion.length,1);assert.equal(hiPolicy.length,3);
assert.deepEqual(hiCountries.map(r=>r.country_area_m49).sort(),["036","076","124","208","250","276","348","372","380","554","578","620","724","826","840"]);
assert.equal(hiCountries.filter(r=>r.member_organization_identity_state==='MEMBER_ASSOCIATION_OR_SUPPORT_GROUP_UNJOINED_TO_TEAM_B').length,15);
assert.equal(hiRegion[0].source_member_or_role_label,'Europe');assert.equal(hiRegion[0].country_area_m49,'');
for(const r of hi){assert(ids.has(r.network_id));assert.equal(r.network_id,'HAEMO_INT');assert(sources.has(r.source_url));assert.equal(r.membership_valid_from,'unknown');assert.equal(r.membership_valid_to,'unknown');assert.equal(r.checked_on,'2026-11-05');}
for(const r of hiCountries){assert(official.has(r.country_area_m49));assert.equal(r.source_url,'https://haemochromatosis-international.org/members/');}
for(const r of hiPolicy)assert.equal(r.country_area_m49,'');
assert.equal(hi.find(r=>r.record_id==='TD-HI-017').source_url,'https://haemochromatosis-international.org/join/');
assert.equal(hi.find(r=>r.record_id==='TD-HI-018').source_url,'https://haemochromatosis-international.org/join/');
assert.equal(hi.find(r=>r.record_id==='TD-HI-019').source_url,'https://haemochromatosis-international.org/stakeholders/');
assert.equal(hi.find(r=>r.record_id==='TD-HI-019').reported_policy_date_precision,'2026-06_policy_version_day_format_unresolved');
for(const [url,id] of [['https://haemochromatosis-international.org/members/','TD-SRC-008'],['https://haemochromatosis-international.org/join/','TD-SRC-207'],['https://haemochromatosis-international.org/stakeholders/','TD-SRC-208']]){assert.equal(prov.filter(p=>p.source_url===url).length,1);assert.equal(prov.find(p=>p.source_url===url).source_id,id);}
assert.equal(edges.length,617);assert.equal(statuses.filter(r=>r.who_region==='not_verified').length,44);
console.log('Batch 27: HI 15 country-linked member resources, Europe non-M49 link, three distinct membership/partner policy records; no government membership or clinical law inference');


// Batch 28: AOECS named member-society snapshot versus explicitly non-member colleagues.
// This is a dated page observation, not an accession instrument, legal jurisdiction or guideline adoption.
const aoecsSocieties=read('data/aoecs_society_role_observations_2026.csv');
const aoecsRelations=read('data/aoecs_crossborder_role_observations_2026.csv');
unique(aoecsSocieties,r=>r.record_id,'AOECS society-source observation IDs');
unique(aoecsRelations,r=>r.record_id,'AOECS external-role observation IDs');
assert.equal(aoecsSocieties.length,68); assert.equal(aoecsRelations.length,6);
const aoecsFull=aoecsSocieties.filter(r=>r.relationship_class==='FULL_MEMBER_LISTED');
const aoecsAssociate=aoecsSocieties.filter(r=>r.relationship_class==='ASSOCIATE_MEMBER_LISTED');
const aoecsAffiliate=aoecsSocieties.filter(r=>r.relationship_class==='AFFILIATE_MEMBER_LISTED');
const aoecsNonmember=aoecsSocieties.filter(r=>r.relationship_class==='EXPLICIT_NONMEMBER_COLLEAGUE_LISTED');
assert.equal(aoecsFull.length,43);assert.equal(aoecsAssociate.length,1);assert.equal(aoecsAffiliate.length,3);assert.equal(aoecsNonmember.length,21);
assert.equal(new Set(aoecsSocieties.map(r=>r.country_area_m49)).size,61);
assert.equal(aoecsFull.filter(r=>r.member_certificate_link_visible==='no_visible_link').length,2);
assert.equal(aoecsFull.filter(r=>r.member_certificate_link_visible==='yes').length,41);
assert.deepEqual(aoecsAssociate.map(r=>r.country_area_m49),['070']);
assert.deepEqual(aoecsAffiliate.map(r=>r.country_area_m49).sort(),['268','376','792']);
for(const r of aoecsSocieties){assert.equal(r.network_id,'AOECS');assert(ids.has(r.network_id));assert(official.has(r.country_area_m49));assert(r.aoecs_geographic_label);assert(r.organization_label);assert.equal(r.checked_on,'2026-11-05');assert.equal(r.membership_valid_from,'unknown');assert.equal(r.membership_valid_to,'unknown');assert.equal(r.source_url,'https://www.aoecs.org/about-us/members/');assert(sources.has(r.source_url));}
for(const r of aoecsNonmember){assert.equal(r.source_section,'OTHER_COELIAC_SOCIETIES_NOT_MEMBERS_SECTION');assert.equal(r.member_certificate_link_visible,'not_applicable');assert.equal(r.verification_state,'OFFICIAL_AOECS_EXPLICIT_NONMEMBER_SECTION');}
assert.equal(aoecsFull.find(r=>r.organization_label==='Celiac Care Providers Society').country_area_m49,'400');
assert.equal(aoecsFull.find(r=>r.organization_label==='ACELMEX Asistencia al Celíaco de México A.C').country_area_m49,'484');
assert.equal(aoecsFull.find(r=>r.organization_label==='Celiac Disease Foundation').country_area_m49,'840');
assert.equal(aoecsNonmember.filter(r=>r.country_area_m49==='840').length,2);
assert(!aoecsSocieties.some(r=>r.relationship_class==='EXPLICIT_NONMEMBER_COLLEAGUE_LISTED'&&r.source_section!=='OTHER_COELIAC_SOCIETIES_NOT_MEMBERS_SECTION'));
for(const x of aoecsRelations){assert.equal(x.reporting_network_id,'AOECS');assert.equal(x.as_of,'2026-11-05');assert(sources.has(x.source_url));assert.equal(x.relationship_end,'unknown');}
assert.equal(aoecsRelations.filter(r=>r.relationship_type==='PROFESSIONAL_HEALTH_CARE_COLLABORATOR_LISTED').length,5);
const codexObservation=aoecsRelations.find(r=>r.related_organisation_label==='CODEX');
assert(codexObservation); assert.equal(codexObservation.relationship_type,'OBSERVER_STATUS_SELF_REPORTED_SINCE_1991');assert.equal(codexObservation.reported_start_year,'1991');assert.equal(codexObservation.verification_state,'AOECS_SELF_REPORT_OBSERVER_BEGINNING_UNVERIFIED_INSTRUMENT');
assert.deepEqual(aoecsRelations.filter(r=>r.relationship_type==='PROFESSIONAL_HEALTH_CARE_COLLABORATOR_LISTED').map(r=>r.related_organisation_label).sort(),['EPHA','ESPGHAN','ESsCD','ISSCD','UEG']);
for(const [id,url] of [['TD-SRC-013','https://www.aoecs.org/about-us/'],['TD-SRC-014','https://www.aoecs.org/about-us/members/'],['TD-SRC-209','https://www.aoecs.org/about-us/friends/health-care-organisations/'],['TD-SRC-210','https://www.aoecs.org/advocacy/'],['TD-SRC-211','https://www.fao.org/fao-who-codexalimentarius/about-codex/observers/observers/obs-list/de/']]){assert.equal(prov.filter(p=>p.source_id===id&&p.source_url===url).length,1);}
assert.equal(edges.length,617);assert.equal(nodes.length,47);assert.equal(statuses.filter(r=>r.who_region==='not_verified').length,44);
console.log('Batch 28: 43 AOECS directory full members, 1 associate, 3 affiliates, 21 explicitly nonmember society contacts and 6 nonmembership professional/observer roles. Official about-us category conflict retained; no country/clinical/legal edges invented.');

// Batch 29: EMA / European Commission regulatory-role boundaries are source statements,
// NOT authority-specific national remits, product approvals, domestic clinical rules or geographic membership edges.
const emaRoles=read('data/ema_authorisation_role_boundaries_2026.csv');
unique(emaRoles,r=>r.record_id,'EMA/Commission source-qualified role IDs');
assert.equal(emaRoles.length,11);
assert.equal(new Set(emaRoles.map(r=>r.source_url)).size,6);
assert.deepEqual(emaRoles.map(r=>r.record_id).sort(),Array.from({length:11},(_,i)=>'TD-EMA-ROLE-'+String(i+1).padStart(3,'0')));
for(const r of emaRoles){
 assert.equal(r.checked_on,'2026-11-05');
 assert.equal(r.source_published_or_effective_on,'unknown');
 assert.equal(r.evidence_access,'DIRECT_OFFICIAL_HTML_REVIEWED');
 assert.equal(r.verification_state,'OFFICIAL_ROLE_DESCRIPTION_ONLY');
 assert(sources.has(r.source_url),'EMA source URL absent from provenance: '+r.record_id);
 assert(r.reported_state_or_fact);
 assert(r.notes);
 assert(r.legal_instrument_review_state);
}
const emaRoleClasses=new Set(emaRoles.map(r=>r.authority_role));
for(const role of ['SCIENTIFIC_ASSESSMENT','BINDING_CENTRALISED_AUTHORISATION_DECISION','NATIONAL_MARKETING_AUTHORISATION','MUTUAL_RECOGNITION_PROCEDURE','DECENTRALISED_PROCEDURE','EEA_EXTENSION_OF_CENTRALISED_GRANT','CENTRALISED_MEDICINE_DIRECTORY_COVERAGE','UNION_REGISTER_DECISION_PUBLICATION','LIMITATION_AVAILABILITY_PRICING','CENTRALISED_MANDATORY_INDICATION_SCOPE'])assert(emaRoleClasses.has(role),'missing EMA role class '+role);
assert.equal(emaRoles.filter(r=>r.team_a_join_state==='PENDING_EXACT_34_NCA_IDENTITY_AND_REMIT_JOIN').length,3);
assert.equal(emrnNcas.length,34);
assert(emaRoles.find(r=>r.record_id==='TD-EMA-ROLE-003').legal_instrument_review_state.includes('NO_CONSOLIDATED_LEGAL_AUDIT'));
assert(emaRoles.find(r=>r.record_id==='TD-EMA-ROLE-008').notes.includes('not evidence'));
assert(emaRoles.find(r=>r.record_id==='TD-EMA-ROLE-011').notes.includes('Not every diabetes'));
for(const [id,url] of [
 ['TD-SRC-212','https://www.ema.europa.eu/en/committees/committee-medicinal-products-human-use-chmp'],
 ['TD-SRC-213','https://www.ema.europa.eu/en/about-us/frequently-asked-questions'],
 ['TD-SRC-214','https://www.ema.europa.eu/en/medicines'],
 ['TD-SRC-215','https://health.ec.europa.eu/medicinal-products/union-register_en'],
 ['TD-SRC-216','https://health.ec.europa.eu/medicinal-products/legal-framework-governing-medicinal-products-human-use-eu/authorisation-procedures-centralised-procedure_en'],
 ['TD-SRC-217','https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/obtaining-eu-marketing-authorisation-step-step']
])assert.equal(prov.filter(p=>p.source_id===id&&p.source_url===url).length,1);
console.log('Batch 29: 11 first-party EMA/Commission role observations with 6 new sources; no individual NCA legal remit or marketing decision inferred.');


// Batch 31: national NCA role self-descriptions are NOT audited national statutes,
// exact Team A authority joins or evidence of a specific medicinal product permission.
const nationalNcaRemits=read('data/emrn_nca_national_remit_evidence_2026.csv');
unique(nationalNcaRemits,r=>r.record_id,'national NCA remit observations');
assert.equal(nationalNcaRemits.length,18);
assert.equal(new Set(nationalNcaRemits.map(r=>r.source_url)).size,12);
assert.deepEqual([...new Set(nationalNcaRemits.map(r=>r.country_area_m49))].sort(),['040','203','208','372','380','528','578']);
assert.deepEqual(nationalNcaRemits.map(r=>r.record_id).sort(),Array.from({length:18},(_,i)=>'TD-NCA-REMIT-'+String(i+1).padStart(3,'0')));
for (const r of nationalNcaRemits) {
 assert.equal(r.network_id,'EMRN');
 assert.equal(r.checked_on,'2026-11-06');
 assert.equal(r.evidence_access,'DIRECT_FIRST_PARTY_HTML_REVIEWED');
 assert.equal(r.verification_state,'OFFICIAL_NATIONAL_AGENCY_SELF_DESCRIPTION_ONLY');
 assert.equal(r.legal_audit_state,'CONSOLIDATED_NATIONAL_STATUTE_NOT_INDEPENDENTLY_AUDITED');
 assert.equal(r.team_a_join_state,'PENDING_EXACT_TEAM_A_ID_JOIN');
 assert(sources.has(r.source_url),'national NCA role source not in provenance '+r.record_id);
 const candidate=emrnNcas.find(n=>n.record_id===r.emrn_nca_candidate_id);
 assert(candidate,'national NCA role lacks original EMA candidate '+r.record_id);
 assert.equal(r.country_area_m49,candidate.country_area_m49);
 assert.equal(r.agency_ema_label,candidate.ema_display_name);
 assert(r.first_party_role_observation && r.notes);
}
assert.equal(nationalNcaRemits.filter(r=>r.historical_role_start_claimed==='2008-01-01').length,1);
assert.equal(nationalNcaRemits.filter(r=>r.historical_role_start_claimed==='unknown').length,16);
assert.equal(nationalNcaRemits.filter(r=>r.source_page_updated_on==='2026-05-21').length,1);
assert.equal(nationalNcaRemits.filter(r=>r.source_page_updated_on==='2025-10-15').length,2);
assert(nationalNcaRemits.find(r=>r.record_id==='TD-NCA-REMIT-003').first_party_role_observation.includes('European Commission'));
assert(nationalNcaRemits.find(r=>r.record_id==='TD-NCA-REMIT-004').role_class.includes('REIMBURSEMENT'));
for(const [id,url] of [["TD-SRC-218","https://www.hpra.ie/about-us/our-role/what-and-how-we-regulate"],["TD-SRC-219","https://www.aifa.gov.it/en/autorizzazione-dei-farmaci"],["TD-SRC-220","https://www.aifa.gov.it/en/mission"],["TD-SRC-221","https://sukl.gov.cz/en/about-us/basic-information/history-and-present/"],["TD-SRC-222","https://www.dmp.no/en/about-us/organisation-and-tasks/our-goals-and-tasks"],["TD-SRC-223","https://www.dmp.no/en/approval-of-medicines/approval-and-follow-up-of-marketing-authorisation-ma"]]) {
 assert.equal(prov.filter(p=>p.source_id===id&&p.source_url===url).length,1);
}
assert.equal(nodes.length,47);assert.equal(edges.length,617);assert.equal(statuses.filter(r=>r.who_region==='not_verified').length,44);
console.log('Batch 31: 9 national regulator first-party observations across Ireland Italy Czechia Norway; 6 official sources; no laws or Team A IDs independently certified.');

// Batch 32: Austria, Denmark, and Netherlands first-party regulator role additions.
// Preserve explicit negative responsibility (Dutch MEB does not assess prices or reimbursement).
assert.equal(nationalNcaRemits.filter(r=>r.historical_role_start_claimed==='2006-01-02').length,1);
assert.equal(nationalNcaRemits.filter(r=>r.source_page_updated_on==='2026-02-02').length,2);
assert.equal(nationalNcaRemits.filter(r=>r.source_page_updated_on==='2026-06-17').length,2);
assert.equal(nationalNcaRemits.filter(r=>r.source_page_updated_on==='2020-10-26').length,1);
assert(nationalNcaRemits.find(r=>r.record_id==='TD-NCA-REMIT-018').role_class==='EXPLICIT_NONREMIT_PRICE_AND_REIMBURSEMENT');
assert(nationalNcaRemits.find(r=>r.record_id==='TD-NCA-REMIT-012').notes.includes('not an independent'));
for(const [id,url] of [["TD-SRC-224","https://www.basg.gv.at/en/about-us/activities"],["TD-SRC-225","https://www.basg.gv.at/en/about-us/"],["TD-SRC-226","https://laegemiddelstyrelsen.dk/en/licensing/authorisation-procedures/"],["TD-SRC-227","https://laegemiddelstyrelsen.dk/en/about/"],["TD-SRC-228","https://english.cbg-meb.nl/topics/about-meb-our-work/about-meb-our-tasks"],["TD-SRC-229","https://english.cbg-meb.nl/topics/about-meb-our-work/about-meb-our-tasks/about-meb-assessing-medicines"]]) {
 assert.equal(prov.filter(p=>p.source_id===id&&p.source_url===url).length,1);
}
assert.equal(new Set(nationalNcaRemits.map(r=>r.emrn_nca_candidate_id)).size,7);
console.log('Batch 32: 9 additional agency role observations across Austria Denmark Netherlands; 6 official URLs; 7/34 candidate agencies now have source-qualified roles, no statutory or Team A approval.');


console.log(JSON.stringify({result:'PASS',nodes:nodes.length,edges:edges.length,conditions:conditions.length,statuses:statuses.length,un_crosswalk:un.length,seed_exceptions:exceptions.length,verified_regions:assigned.length,unverified_regions:statuses.length-assigned.length,office_presence:offices.length,office_profile_audits_2026:officeAudits.length,who_office_survey_roster_2026:surveyRoster.length,emrn_nca_candidates:emrnNcas.length,historical_office_records:officeHistory.length,historical_office_edges:histEdges.length,provenance:prov.length,hearts_catalog: pathways.length,programme_evidence:programmeFacts.length,regulatory_agreements:regulatory.length,who_region_boundary_evidence:whoBoundary.length,paho_governance_categories:pahoGov.length,paho_technical_cooperation:pahoTC.length,paho_representative_observations:repTerms.length,paho_local_cooperation_observations:pahoLocal.length,idf_nac_source_observations:idfNac.length,hi_source_observations:hi.length,aoecs_society_observations:aoecsSocieties.length,aoecs_external_role_observations:aoecsRelations.length,ema_regulatory_role_observations:emaRoles.length,national_nca_remit_observations:nationalNcaRemits.length},null,2));
