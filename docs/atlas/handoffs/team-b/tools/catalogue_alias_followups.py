"""Retrieve improved geographic aliases, preserving initial queries as history.
Equivalent alias searches do not count as an independent D2 avenue.
Usage: catalogue_alias_followups.py ORIGINAL_CACHE FOLLOWUP_CACHE [--apply]
"""
import collections,concurrent.futures,csv,json,pathlib,sys,urllib.parse
from catalogue_first_pass import ROOT,D,read,write,reconcile,retrieve,ALIASES,TERMS,DATE
original=pathlib.Path(sys.argv[1]);cache=pathlib.Path(sys.argv[2]);cache.mkdir(parents=True,exist_ok=True)
plan=[]
for r in json.loads((original/'plan.json').read_text()):
 names=ALIASES.get(r['area_m49'])
 if not names:continue
 query='('+' OR '.join('"'+n+'"' for n in names)+') AND '+TERMS[r['condition_key']]
 if query==r['query']:continue
 url='https://www.ebi.ac.uk/europepmc/webservices/rest/search?'+urllib.parse.urlencode({'query':query,'format':'json','resultType':'core','pageSize':5})
 plan.append({**r,'query':query,'url':url,'previous_query':r['query']})
(cache/'plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
if '--apply' not in sys.argv:
 with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
  results=list(pool.map(lambda r:retrieve(r,cache),plan))
 print(json.dumps({'alias_queries_retrieved':len(results),'failed':sum(r['state']=='catalogue_access_failed' for r in results),'zero':sum(r['hit_count']==0 for r in results)}),flush=True)
else:
 logs=read('search_log.csv');audit=read('research_quality_audit.csv');cov=read('coverage_by_area_condition.csv');cm={(r['m49_code'],r['condition_key']):r for r in cov};prov=list(csv.DictReader((ROOT/'PROVENANCE.csv').open()))
 path=D/'catalogue_alias_followups_20261118.csv';receipt=list(csv.DictReader(path.open())) if path.exists() else [];known={r['search_id'] for r in receipt}
 depth={}
 for r in audit:
  if r['record_type']=='search_depth':depth[(r['area_m49'],r['condition_key'])]=r['quality_or_depth']
 added=0
 for i,r in enumerate(plan,1):
  sid=f'B106-ALIAS-{i:03d}'
  if sid in known:continue
  result=json.loads((cache/(r['area_m49']+'_'+r['condition_key']+'.json')).read_text());k=(r['area_m49'],r['condition_key']);c=cm[k]
  works=result.get('response',{}).get('resultList',{}).get('result',[])
  note='Geographic alias correction, not a new independent avenue: '+r['previous_query']+' -> '+r['query']+'. Actual candidate hit count='+str(result['hit_count'])+'. Metadata and local author/issuer eligibility remain unverified. No absence, substantive-source or D2 claim.'
  logs.append(dict(zip(logs[0],[sid,k[0],k[1],DATE,'Actual Europe PMC geographic alias follow-up: '+r['query'],r['url'],'Condition-specific geographic alias follow-up','en_query',result['state'],'candidate_metadata_only_no_eligibility_claim',note])))
  prov.append(dict(zip(prov[0],[sid,'catalogue_geographic_alias_followup',k[0],'Europe PMC EMBL-EBI catalogue',r['url'],'en_query',DATE,result['state'],note])))
  if depth.get(k) not in ('D2','D3'):
   audit.append(dict(zip(audit[0],['search_depth',k[0],k[1],'not_applicable',r['url'],'D1','B106_alias_followup_not_independent_depth_upgrade',r['url'],DATE,note,'Distinct native-language first-party issuer or professional directory and original content/role inspection remain needed.'])))
  ids=[] if c['search_log_ids']=='none_logged' else c['search_log_ids'].split('|');ids.append(sid);c['search_log_ids']='|'.join(ids)
  if c['search_state']=='not_yet_researched':c['search_state']='targeted_search_no_verified_resource';c['coverage_note']=note;c['local_language_terms_used']='Alias query in '+sid
  receipt.append({'search_id':sid,'area_m49':k[0],'area_name':r['area_name'],'condition_key':k[1],'previous_query':r['previous_query'],'query':r['query'],'retrieval_url':r['url'],'retrieved_utc':result['retrieved_utc'],'retrieval_state':result['state'],'response_sha256':result['sha256'],'candidate_hit_count':str(result['hit_count']),'first_candidate_ids':json.dumps([w.get('source','')+':'+w.get('id','') for w in works]),'first_candidate_titles':json.dumps([w.get('title','') for w in works],ensure_ascii=False),'disposition':'D1_alias_correction_not_independent_D2'})
  added+=1
 for name,rows in [('search_log.csv',logs),('research_quality_audit.csv',audit),('coverage_by_area_condition.csv',cov),('catalogue_alias_followups_20261118.csv',receipt)]:write(name,rows)
 with (ROOT/'PROVENANCE.csv').open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=list(prov[0]),quoting=csv.QUOTE_ALL,lineterminator='\n');w.writeheader();w.writerows(prov)
 assert len({r['search_id'] for r in logs})==len(logs)
 m=reconcile();print(json.dumps({'alias_queries_added':added,'new_qualified_cells':0,'untouched':m['untouched_cells']}))
