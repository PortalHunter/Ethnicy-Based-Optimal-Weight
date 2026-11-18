// Research boundary checks for the finite bulk review. Imported by validate.mjs.
import fs from 'node:fs';
import assert from 'node:assert/strict';
function read(name) {
  const s=fs.readFileSync(new URL(name,import.meta.url),'utf8').trimEnd();
  const rows=[];let row=[],v='',quoted=false;
  for(let i=0;i<s.length;i++) {
    const c=s[i];
    if(c==='"') {if(quoted&&s[i+1]==='"'){v+='"';i++;}else quoted=!quoted;}
    else if(c===','&&!quoted){row.push(v);v='';}
    else if(c==='\n'&&!quoted){row.push(v.replace(/\r$/,''));rows.push(row);row=[];v='';}
    else v+=c;
  }
  assert(!quoted,'Unclosed CSV field: '+name);
  row.push(v);rows.push(row);const header=rows.shift();
  return rows.map(r=>{assert.equal(r.length,header.length,'CSV width: '+name);return Object.fromEntries(header.map((k,i)=>[k,r[i]]));});
}
const data=n=>read('data/'+n), by=(r,k)=>new Map(r.map(x=>[x[k],x]));
const backlog=data('consolidated_case_backlog_2026-11-07.csv');
assert.equal(backlog.length,236);assert.equal(by(backlog,'id').size,236);
const prov=read('PROVENANCE.csv'), source=by(prov,'source_id');
const regions=data('who_region_bulk_review_2026-11-18.csv');
const networks=data('network_bulk_review_2026-11-18.csv');
const officeReview=data('who_office_bulk_review_2026-11-18.csv');
const packets=data('emrn_packet_bulk_review_2026-11-18.csv');
const groups=[
  [regions,'WHO_CURRENT_ADMINISTRATION',44],
  [networks,'INTERNATIONAL_NETWORK_ORIGINAL_INSTRUMENT',12],
  [officeReview,'WHO_APRIL_2026_HOST_EVIDENCE',144],
  [packets,'FULL_NATIONAL_MEDICINES_REGULATOR_LEGAL_PACKET',34]
];
for(const [rows,stream,count] of groups) {
  assert.equal(rows.length,count);assert.equal(by(rows,'backlog_id').size,count);
  assert.deepEqual(rows.map(r=>r.backlog_id).sort(),backlog.filter(r=>r.workstream===stream).map(r=>r.id).sort());
  for(const r of rows)assert.equal(r.strict_closure??r.full_backlog_closure,'NO');
}
assert.equal(groups.flatMap(([r])=>r).length,234);
const gates=data('acceptance_bulk_review_2026-11-18.csv');
assert.deepEqual(gates.map(r=>r.backlog_id).sort(),['TD-BL-ACCEPT-001','TD-BL-ACCEPT-002']);
assert(gates.every(r=>r.full_backlog_closure==='NO'));
const cache=new Map();
function checkRefs(refs) {
  for(const ref of refs.split('|').filter(Boolean)) {
    const [file,id]=ref.split('#');
    if(!cache.has(file))cache.set(file,new Set(data(file).map(r=>r.record_id)));
    assert(cache.get(file).has(id),'Unresolved supporting row '+ref);
  }
}
for(const r of regions){assert.equal(r.new_state,'not_verified');assert.equal(r.http_status,'200');assert.equal(r.profile_result,'GENERIC_COUNTRIES_INDEX_NOT_INDIVIDUAL_PROFILE');checkRefs(r.existing_evidence_rows);}
assert.equal(new Set(regions.map(r=>r.response_sha256)).size,1);
for(const r of officeReview){assert.equal(r.april_survey_state,'NO_AFFIRMATIVE_APRIL_JOIN');assert.equal(r.documented_absence,'NOT_ESTABLISHED');assert(['UNKNOWN_NOT_PROVEN_BY_THIS_RECONCILIATION','CURRENT_PUBLISHED_IN_AREA_ADDRESS','CURRENT_PUBLISHED_OFFSHORE_CONTACT_LOCAL_PREMISES_UNKNOWN','CURRENT_PUBLISHED_COORDINATION_CONTACT_PREMISES_UNKNOWN','CURRENT_PUBLISHED_POSTAL_CONTACT_ONLY_PHYSICAL_PREMISES_UNKNOWN','CURRENT_PUBLISHED_CITY_CONTACT_ONLY_PHYSICAL_PREMISES_UNKNOWN','CURRENT_PUBLISHED_REPRESENTATIVE_ROLE_PREMISES_UNKNOWN','CURRENT_PUBLISHED_SPECIALISED_OFFICE_HOST_CITY_NO_STREET','CURRENT_OPERATIONAL_OFFICE_LABEL_M49_JOIN_NOT_ESTABLISHED','HISTORICAL_NO_COUNTRY_OFFICE_STATEMENT_CURRENT_UNKNOWN','ISO_ONLY_CANDIDATE_NOT_CANONICAL_UN_M49_OFFICE_JOIN','NO_CURRENT_WHO_PREMISES_ESTABLISHED_AFTER_BOUNDED_PRIMARY_REVIEW'].includes(r.present_day_physical_presence));checkRefs(r.supporting_rows);}
const originalOffices=data('who_country_office_presence.csv');
const roster=data('who_office_survey_roster_2026.csv');
const reconciliation=data('who_office_april_reconciliation_2026-11-18.csv');
assert.equal(reconciliation.length,10);
assert.equal(by(reconciliation,'country_area_m49').size,10);
const april=new Set(originalOffices.filter(r=>r.as_of==='2026-04').map(r=>r.country_area_m49));
assert.equal(april.size,95);
for(const r of reconciliation) {
  assert(!april.has(r.country_area_m49),'Duplicate April promotion');
  assert.equal(r.survey_month,'2026-04');
  const old=originalOffices.find(x=>x.record_id===r.prior_office_record_id);
  assert(old);assert.equal(old.office_presence_source,r.preserved_prior_source);assert.equal(old.as_of,r.preserved_prior_as_of);
  const survey=roster.find(x=>x.record_id===r.survey_record_id);
  assert.equal(survey.country_area_m49,r.country_area_m49);assert.equal(survey.latest_self_reported_survey,'2026-04');assert.equal(survey.source_url,r.source_url);
  april.add(r.country_area_m49);
}
assert.equal(april.size,105);
// Pristina's deliberate `not_verified` sentinel is a survey label, not an M49 join.
assert.deepEqual([...april].sort(),roster.filter(r=>/^\d{3}$/.test(r.country_area_m49)&&r.latest_self_reported_survey==='2026-04').map(r=>r.country_area_m49).sort());
assert.equal(roster.filter(r=>r.country_area_m49==='not_verified'&&r.latest_self_reported_survey==='2026-04').length,1);
assert(officeReview.every(r=>!april.has(r.m49_code)));
const candidates=data('emrn_nca_identity_2026.csv'), remits=data('emrn_nca_national_remit_evidence_2026.csv');
const exact=new Map([['TD-EMRN-NCA-007','gov-208-003'],['TD-EMRN-NCA-011','gov-276-005'],['TD-EMRN-NCA-012','gov-276-003'],['TD-EMRN-NCA-021','gov-442-001']]);
for(const r of packets) {
  const candidate=candidates.find(x=>x.record_id===r.emrn_nca_candidate_id);assert(candidate);
  assert.equal(candidate.country_area_m49,r.country_area_m49);assert.equal(r.full_packet_state,'PARTIAL_EVIDENCE_NOT_FULL_LEGAL_PACKET');
  for(const id of r.existing_remit_row_ids.split('|'))assert(remits.some(x=>x.record_id===id&&x.emrn_nca_candidate_id===r.emrn_nca_candidate_id));
  assert.equal(r.team_a_snapshot_sha,'c4ac494941a6d0db58355cae4cc3d660d442d5f4');
  if(r.exact_team_a_id){assert.equal(exact.get(r.emrn_nca_candidate_id),r.exact_team_a_id);assert.equal(r.identity_outcome,'EXACT_ENTITY_LABEL_AND_M49_MATCH');assert.equal(r.ema_display_name.toLowerCase(),r.exact_team_a_label.replace(' (reviewer translation)','').toLowerCase());}
}
assert.equal(packets.filter(r=>r.exact_team_a_id).length,4);
const legal=data('national_legal_primary_findings_2026-11-18.csv');assert.equal(legal.length,6);
for(const r of legal){assert.equal(source.get(r.source_id)?.source_url,r.source_url);assert.equal(r.packet_state,'PARTIAL_NOT_FULL_LEGAL_PACKET');for(const id of r.candidate_ids.split('|'))assert(candidates.some(x=>x.record_id===id));}
for(const r of networks){const ids=r.source_ids.split('|'),urls=r.source_urls.split('|');assert.equal(ids.length,urls.length);ids.forEach((id,i)=>assert.equal(source.get(id)?.source_url,urls[i]));}
const access=data('primary_access_manifest_2026-11-18.csv');assert.equal(access.length,54);assert.equal(by(access,'retrieval_key').size,54);
for(const r of access){assert(r.requested_url.startsWith('https://'));if(r.http_status==='200')assert.match(r.sha256,/^[a-f0-9]{64}$/);}
for(const r of regions)assert(access.some(x=>x.requested_url===r.attempted_profile_url&&x.sha256===r.response_sha256));
assert.equal(access.find(r=>r.retrieval_key==='TD-SRC-290').content_type,'text/html; charset=UTF-8');
assert.equal(access.find(r=>r.retrieval_key==='SCI-API').content_type,'application/pdf');
console.log('Bulk review PASS: 234 distinct subject-matter backlog records; 10 additional exact April source joins; 4 exact Team A label joins; 0 full backlog closures.');

// Current undated contact listings cannot create historical survey positives or local absences.
const current=data('who_office_current_directory_review_2026-11-18.csv');
assert.equal(current.length,48);assert.equal(by(current,'backlog_id').size,48);
for(const r of current){
 assert.equal(source.get(r.source_id)?.source_url,r.source_url);
 const prior=officeReview.find(x=>x.backlog_id===r.backlog_id);assert(prior);
 assert.equal(prior.m49_code,r.country_area_m49);assert.equal(prior.present_day_physical_presence,r.published_listing_state);
 assert(!april.has(r.country_area_m49));assert.equal(r.april_survey_evidence,'NO_NEW_APRIL_EVIDENCE');
 assert.equal(r.absence_claim,'NOT_ESTABLISHED');assert.equal(r.full_backlog_closure,'NO');
 if(r.published_listing_state==='CURRENT_PUBLISHED_IN_AREA_ADDRESS')assert.equal(r.listed_host_m49,r.country_area_m49);
 else if(r.listed_host_m49)assert.notEqual(r.listed_host_m49,r.country_area_m49);
}
assert.equal(current.filter(x=>x.published_listing_state==='CURRENT_PUBLISHED_IN_AREA_ADDRESS').length,20);
assert.equal(current.filter(x=>x.published_listing_state==='CURRENT_PUBLISHED_OFFSHORE_CONTACT_LOCAL_PREMISES_UNKNOWN').length,27);
assert.equal(current.filter(x=>!x.listed_host_m49).length,1);
assert.equal(current.find(x=>x.country_area_m49==='124').listed_host_m49,'840');
assert.equal(current.find(x=>x.country_area_m49==='776').listed_office_type,'WHO_COUNTRY_LIAISON_OFFICE');
assert.equal(current.find(x=>x.country_area_m49==='276').listed_office_type,'WHO_TECHNICAL_CENTRE_NOT_COUNTRY_OFFICE');
assert.equal(current.find(x=>x.country_area_m49==='056').listed_office_type,'WHO_EU_REPRESENTATION_NOT_COUNTRY_OFFICE');
const contactAccess=data('current_office_directory_access_2026-11-18.csv');assert.equal(contactAccess.length,3);
for(const r of contactAccess){assert.equal(source.get(r.source_id)?.source_url,r.source_url);assert.match(r.sha256,/^[a-f0-9]{64}$/);}
console.log('Current directory review PASS:48 backlog areas;20 in-area address listings,27 offshore contacts,one coordination contact; no April or absence promotions.');

// Country-specific contact/role review does not turn postal boxes or appointments into premises.
const countryCurrent=data('who_office_current_country_review_2026-11-18.csv');
assert.equal(countryCurrent.length,33);assert.equal(by(countryCurrent,'backlog_id').size,33);
for(const r of countryCurrent){
 assert.equal(source.get(r.source_id)?.source_url,r.source_url);
 if(r.secondary_source_id)assert.equal(source.get(r.secondary_source_id)?.source_url,r.secondary_source_url);
 const original=officeReview.find(x=>x.backlog_id===r.backlog_id);assert(original);
 assert.equal(original.m49_code,r.country_area_m49);assert.equal(original.present_day_physical_presence,r.published_listing_state);
 assert(!april.has(r.country_area_m49));assert.equal(r.april_survey_evidence,'NO_NEW_APRIL_EVIDENCE');
 assert.equal(r.absence_claim,'NOT_ESTABLISHED');assert.equal(r.full_backlog_closure,'NO');
 assert.equal(r.source_publication_date,'UNDATED_CURRENT_PAGE');
 if(r.published_listing_state==='CURRENT_PUBLISHED_REPRESENTATIVE_ROLE_PREMISES_UNKNOWN')assert.equal(r.listed_host_m49,'');
}
assert.equal(countryCurrent.filter(x=>x.published_listing_state==='CURRENT_PUBLISHED_IN_AREA_ADDRESS').length,21);
assert.equal(countryCurrent.filter(x=>x.published_listing_state==='CURRENT_PUBLISHED_POSTAL_CONTACT_ONLY_PHYSICAL_PREMISES_UNKNOWN').length,2);
assert.equal(countryCurrent.filter(x=>x.published_listing_state==='CURRENT_PUBLISHED_CITY_CONTACT_ONLY_PHYSICAL_PREMISES_UNKNOWN').length,1);
assert.equal(countryCurrent.filter(x=>x.published_listing_state==='CURRENT_PUBLISHED_REPRESENTATIVE_ROLE_PREMISES_UNKNOWN').length,9);
assert.equal(countryCurrent.find(x=>x.country_area_m49==='048').listed_office_type,'SHARED_REPRESENTATIVE_ROLE_NOT_PREMISES');
assert(countryCurrent.find(x=>x.country_area_m49==='364').temporal_scope.includes('not an April office-host survey'));
const countryAccess=data('who_office_country_access_2026-11-18.csv');assert.equal(countryAccess.length,43);
for(const r of countryAccess){if(r.http_status==='200')assert.match(r.sha256,/^[a-f0-9]{64}$/);if(r.source_id)assert.equal(source.get(r.source_id)?.source_url,r.requested_url);}
console.log('Current country review PASS:33 cases;21 in-area address listings,2 postal-only,one city-only,9 representative-only; no April or absence promotions.');

// Final bounded office pass covers all remaining cases without inventing negative responses.
const finalOffices=data('who_office_remaining_review_2026-11-18.csv');assert.equal(finalOffices.length,63);
const allCurrent=[...current,...countryCurrent,...finalOffices];assert.equal(by(allCurrent,'backlog_id').size,144);
assert.deepEqual(allCurrent.map(x=>x.backlog_id).sort(),officeReview.map(x=>x.backlog_id).sort());
for(const r of finalOffices){
 const original=officeReview.find(x=>x.backlog_id===r.backlog_id);assert(original);
 assert.equal(original.m49_code,r.m49_candidate_code);assert.equal(original.present_day_physical_presence,r.published_listing_state);
 assert.equal(r.april_survey_evidence,'NO_NEW_APRIL_EVIDENCE');assert.equal(r.current_absence_claim,'NOT_ESTABLISHED');assert.equal(r.full_backlog_closure,'NO');
 for(const prefix of ['current','historical']){const ids=r[prefix+'_source_ids'].split('|').filter(Boolean),urls=r[prefix+'_source_urls'].split('|').filter(Boolean);assert.equal(ids.length,urls.length);ids.forEach((id,i)=>assert.equal(source.get(id)?.source_url,urls[i]));}
}
assert.equal(finalOffices.filter(x=>x.published_listing_state==='NO_CURRENT_WHO_PREMISES_ESTABLISHED_AFTER_BOUNDED_PRIMARY_REVIEW').length,47);
const oldNegative=finalOffices.filter(x=>x.historical_absence_statement!=='NONE_PROMOTED');assert.equal(oldNegative.length,1);
assert.equal(oldNegative[0].m49_candidate_code,'784');assert(oldNegative[0].historical_date_scope.includes('Published2012'));assert.equal(oldNegative[0].current_absence_claim,'NOT_ESTABLISHED');
assert.equal(finalOffices.find(x=>x.m49_candidate_code==='158').canonical_un_m49_state,'ISO_ONLY_NOT_CANONICAL_UN_ROW');
assert.equal(finalOffices.find(x=>x.m49_candidate_code==='275').listed_host_m49,'');
assert.equal(finalOffices.find(x=>x.m49_candidate_code==='535').listed_host_m49,'780');
assert.equal(finalOffices.find(x=>x.m49_candidate_code==='663').listed_host_m49,'052');
const variations=data('who_office_label_discrepancies_2026-11-18.csv');assert.equal(variations.length,2);
for(const r of variations){assert.equal(source.get(r.source_a_id)?.source_url,r.source_a_url);assert.equal(source.get(r.source_b_id)?.source_url,r.source_b_url);}
const finalAccess=data('who_office_remaining_access_2026-11-18.csv');assert.equal(finalAccess.length,88);
for(const r of finalAccess){if(r.http_status==='200')assert.match(r.sha256,/^[a-f0-9]{64}$/);}
console.log('All144 office cases have qualified current/dated/boundary/unknown classifications;47 remain unknown after bounded primary review. Historical2012 absence is not current absence;105 April positives unchanged.');

// Recovered legal text preserves statutory grant, intake, exceptions and named-delegate boundaries.
const browserLaw=data('regulator_browser_review_2026-11-18.csv');
const browserAccess=data('legal_browser_access_2026-11-18.csv');
assert.equal(browserLaw.length,6);assert.equal(by(browserLaw,'record_id').size,6);
assert.equal(browserAccess.length,5);assert.equal(by(browserAccess,'source_id').size,5);
for(const r of browserLaw){assert.equal(r.backlog_id,'TD-BL-NCA-021');assert.equal(r.country_area_m49,'442');assert.equal(r.full_packet_closure,'NO');assert.equal(source.get(r.source_id)?.source_url,r.source_url);assert(browserAccess.some(a=>a.source_id===r.source_id));assert(r.remaining_limit);}
for(const r of browserAccess){assert.equal(source.get(r.source_id)?.source_url,r.requested_url);assert.equal(r.http_status,'200');assert.equal(r.retrieval_method,'NORMAL_ISOLATED_CHROMIUM_NO_AUTH_OR_CHALLENGE_BYPASS');assert.match(r.rendered_body_sha256,/^[a-f0-9]{64}$/);assert.match(r.rendered_html_sha256,/^[a-f0-9]{64}$/);}
assert(browserLaw.some(r=>r.finding_state==='OPERATIVE_DELEGATION_REQUIRES_VALIDATED_INSTRUMENT'));
console.log('Recovered Luxembourg law PASS:five official rendered sources,six partial legal findings; named delegation and sampled grant remain open.');
