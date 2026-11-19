"""Append individually reviewed candidate checks, preserving D1 and source limits.
Arguments: LEADS_JSON CACHE_DIR MANUAL_NOTES_JSON
"""
import csv,hashlib,json,pathlib,sys
from reconcile_quality import ROOT,D,read,write,reconcile
leads=json.loads(pathlib.Path(sys.argv[1]).read_text());cache=pathlib.Path(sys.argv[2]);notes=json.loads(pathlib.Path(sys.argv[3]).read_text())
logs=read('search_log.csv');audit=read('research_quality_audit.csv');cov=read('coverage_by_area_condition.csv');cm={(r['m49_code'],r['condition_key']):r for r in cov};prov=list(csv.DictReader((ROOT/'PROVENANCE.csv').open()));observations=[]
for i,s in enumerate(leads):
 k=(s['m49_code'],s['condition']);cell=cm[k];assert cell['search_state']=='not_yet_researched',k
 c=json.loads((cache/(hashlib.sha256(s['url'].encode()).hexdigest()+'.json')).read_text());rs=c.get('result',{}).get('resultList',{}).get('result',[]);r=rs[0] if rs else {};abstract=r.get('abstractText','');state='author_abstract_inspected_archive_not_primary_version' if abstract else 'metadata_only_no_abstract' if r else 'direct_original_page_inspected' if c.get('text') else 'access_failed'
 sid=f'B105-CELL-{i+1:03d}';url=c['retrieval_url'];note=notes[str(i)];next_action='Distinct first-party local academic/society identity and exact original publisher document; verify authorship, edition and subtype before linking. D1 exploratory only, no absence claim.'
 logs.append(dict(zip(logs[0],[sid,k[0],k[1],'2026-11-18',f'Condition-specific intake {s["id"]}: direct {s["url"]}; actual retrieval '+c['query'],url,r.get('title') or s['source_title'],'en_archive_or_original_language_not_independently_verified',state,'candidate_checked_no_eligible_local_issuer_publication_yet_verified',note+' '+next_action])))
 audit.append(dict(zip(audit[0],['search_depth',k[0],k[1],'not_applicable',s['url'],'D1','B105_individual_intake_candidate_checked_not_terminal',url,'2026-11-18',note,next_action])))
 prov.append(dict(zip(prov[0],[sid,'condition_specific_candidate_retrieval',k[0],'Europe PMC author-abstract archive' if r else 'Original intake candidate host',url,'en_archive_or_original_language_not_independently_verified','2026-11-18',state,note])))
 cell.update(search_state='targeted_search_no_verified_resource',local_language_terms_used='Exact original candidate/PMID retrieval; local-language discovery remains pending',coverage_note=note+' D1 only; no eligible independent local organization/publication relationship yet verified.',search_log_ids=sid)
 observations.append({'search_id':sid,'intake_id':s['id'],'area_m49':k[0],'condition_key':k[1],'candidate_url':s['url'],'retrieval_url':url,'query':c['query'],'retrieval_state':state,'response_sha256':c.get('response_sha256','unavailable'),'doi':r.get('doi','not_verified'),'abstract_available':str(bool(abstract)).lower(),'manual_disposition':note})
write('search_log.csv',logs);write('research_quality_audit.csv',audit);write('coverage_by_area_condition.csv',cov);write('intake_candidate_checks_20261118.csv',observations)
with (ROOT/'PROVENANCE.csv').open('w',newline='') as f:
 w=csv.DictWriter(f,fieldnames=prov[0],lineterminator='\n',quoting=csv.QUOTE_ALL);w.writeheader();w.writerows(prov)
print(json.dumps(reconcile()['run_delta']))
