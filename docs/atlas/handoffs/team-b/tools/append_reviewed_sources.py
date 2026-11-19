"""Apply human-reviewed source decisions; never infer substantive eligibility.
Usage: append_reviewed_sources.py REVIEWED_JSON. Input stays committed as evidence.
"""
import collections,csv,json,pathlib,sys
from reconcile_quality import ROOT,D,read,write,reconcile
items=json.loads(pathlib.Path(sys.argv[1]).read_text())
org=read('specialist_organizations.csv');pub=read('condition_organizations.csv');ctx=read('publication_context.csv');quality=read('research_quality_audit.csv');work=read('source_quality_worklist.csv');identity=read('identity_review_worklist.csv');logs=read('search_log.csv');cov=read('coverage_by_area_condition.csv');prov=list(csv.DictReader((ROOT/'PROVENANCE.csv').open()))
om={x['org_id']:x for x in org};cm={(x['m49_code'],x['condition_key']):x for x in cov};names={x['m49_code']:x['area_name'] for x in read('consolidated_cell_inventory.csv')}
added=0
for item in items:
 o=item['organization'];oid=o['org_id'];area=o['area_m49'];cond=item['condition_key'];url=item['url'];key=(oid,cond,url)
 if any((p['org_id'],p['condition_key'],p['relevant_publication_url'])==key for p in pub):continue
 assert item['tier'] in ('S1','S2','H') and item['evidence_summary'] and item['identity_evidence']
 if oid not in om:
  assert set(o)==set(org[0]),set(o)^set(org[0]);org.append(o);om[oid]=o
  prov.append(dict(zip(prov[0],[oid,'organization_identity',area,o['name_local'],o['source_url'],o['language'],'2026-11-18',o['identity_state'],item['identity_evidence']])))
  identity.append(dict(zip(identity[0],[area,names[area],oid,o['name_local'],o['official_url'],o['source_url'],o['identity_state'],'own_original_name_seat_objects_inspected_NOT_legal_approval','P2','Independent registration/current lifecycle review remains separate; preserve exact observed seat.'])))
 sid=item['record_id'];role=item['role'];review=sid.split('-')[0]+'_manual_original_content_and_role_inspected_research_only'
 pub.append(dict(zip(pub[0],[oid,cond,url,item['title'],item['language'],item['edition'],role,review,item['evidence_summary']])))
 prov.append(dict(zip(prov[0],[sid,'condition_publication_role_and_content',area,item['issuer'],url,item['language'],'2026-11-18',review,item['evidence_summary']])))
 evidence_ids=[sid,oid]
 for extra in item.get('additional_provenance',[]):
  assert set(extra)==set(prov[0]);prov.append(extra);evidence_ids.append(extra['record_id'])
 ctx.append(dict(zip(ctx[0],[oid,cond,item['source_country'],item['population'],item['jurisdiction'],role,'research_lead_only',url,area,item['issuer'],item['country_basis'],'|'.join(evidence_ids)])))
 work.append(dict(zip(work[0],[area,names[area],cond,oid,item['title'],url,role,review,item['source_country'],item['country_basis'],item['tier'],review,'P2',item['next_action']])))
 quality.append(dict(zip(quality[0],['source',area,cond,oid,url,item['tier'],review,item.get('content_evidence_url',url),'2026-11-18',item['evidence_summary'],item['next_action']])))
 logs.append(dict(zip(logs[0],[sid,area,cond,'2026-11-18',item['query'],url,item['title'],item['language'],'substantive_original_text_and_local_organization_role_inspected','condition_resource_indexed',item['evidence_summary']])))
 added+=1
# Rebuild exact canonical coverage joins from all preserved source/search rows.
counts=collections.Counter((om[r['org_id']]['area_m49'],r['condition_key']) for r in pub);bycell=collections.defaultdict(list)
for r in logs:bycell[(r['area_m49'],r['condition_key'])].append(r['search_id'])
for k,c in cm.items():
 c['findings_count']=str(counts[k]);c['search_log_ids']='|'.join(bycell[k]) or 'none_logged'
 if counts[k] and c['search_state'] not in ('national_or_cross_border_body_verified','specialist_research_only'):c['search_state']='national_or_cross_border_body_verified'
 if not counts[k]:c['search_state']='targeted_search_no_verified_resource' if bycell[k] else 'not_yet_researched'
for item in items:
 c=cm[(item['organization']['area_m49'],item['condition_key'])];c['coverage_note']=item['evidence_summary'];c['local_language_terms_used']=item['query']
for n,r in [('specialist_organizations.csv',org),('condition_organizations.csv',pub),('publication_context.csv',ctx),('research_quality_audit.csv',quality),('source_quality_worklist.csv',work),('identity_review_worklist.csv',identity),('search_log.csv',logs),('coverage_by_area_condition.csv',cov)]:write(n,r)
with (ROOT/'PROVENANCE.csv').open('w',newline='') as f:
 w=csv.DictWriter(f,fieldnames=list(prov[0]),lineterminator='\n',quoting=csv.QUOTE_ALL);w.writeheader();w.writerows(prov)
m=reconcile();print(json.dumps({'new_reviewed_sources':added,'raw_cells':m['raw_linked_cells'],'qualified_cells':m['distinct_cells_with_eligible_audited_source']}))
