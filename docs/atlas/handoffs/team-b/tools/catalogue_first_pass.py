"""Run attributable area/condition Europe PMC discovery, without qualifying evidence.

One real query per cell. Metadata hits, zero results and access failures remain D1.
Raw responses/abstracts are temporary only; the durable receipt keeps identifiers,
titles, query, count, retrieval time and response hash. No absence/clinical claims.
Usage: catalogue_first_pass.py --retrieve CACHE [--limit N]
       catalogue_first_pass.py --apply CACHE --offset N --limit N
"""
import argparse, collections, concurrent.futures, csv, datetime, hashlib, json
import pathlib, subprocess, time, urllib.parse, urllib.request
from reconcile_quality import ROOT, D, read, write, reconcile

DATE='2026-11-18'
TERMS={
 'diabetes':'diabetes',
 'hypertension':'(hypertension OR "high blood pressure")',
 'high_chol':'(hypercholesterolemia OR hypercholesterolaemia OR "high cholesterol" OR dyslipidemia OR dyslipidaemia)',
 'gout':'(gout OR gouty OR podagra)',
 'lactose':'(lactose AND (intolerance OR malabsorption OR "lactase deficiency"))',
 'celiac':'("celiac disease" OR "coeliac disease" OR celiaquia OR celiakia OR celijakija)',
 'hemochromatosis':'(hemochromatosis OR haemochromatosis OR "hereditary iron overload")'}
ALIASES={
 '068':['Bolivia'], '344':['Hong Kong'], '446':['Macao','Macau'], '520':['Nauru','Naoero'], '583':['Federated States of Micronesia','Micronesia','FSM'], '643':['Russia','Russian Federation'], '704':['Vietnam','Viet Nam'], '748':['Eswatini','Swaziland'], '384':["Côte d’Ivoire","Côte d'Ivoire",'Ivory Coast'], '531':['Curaçao','Curacao'], '534':['Sint Maarten'], '638':['Réunion','Reunion'], '850':['United States Virgin Islands','US Virgin Islands','U.S. Virgin Islands'], '096':['Brunei','Brunei Darussalam'], '104':['Myanmar','Burma'],
 '132':['Cabo Verde','Cape Verde'], '180':['Democratic Republic of Congo','DR Congo','Zaire'],
 '203':['Czechia','Czech Republic'], '238':['Falkland Islands','Malvinas'],
 '248':['Aland','Åland'], '275':['Palestine','Palestinian'], '336':['Holy See','Vatican'],
 '364':['Iran'], '408':['North Korea','DPRK'], '410':['South Korea','Republic of Korea'],
 '418':['Laos','Lao PDR'], '498':['Moldova'], '499':['Montenegro'],
 '535':['Bonaire','Saba','Sint Eustatius'], '581':['United States Minor Outlying Islands','Midway Atoll','Wake Island'],
 '654':['Saint Helena','Ascension Island','Tristan da Cunha'], '663':['Saint Martin','Saint-Martin'],
 '744':['Svalbard','Jan Mayen'], '760':['Syria'], '792':['Turkey','Türkiye'],
 '807':['North Macedonia','Macedonia'], '834':['Tanzania'], '862':['Venezuela']}

def plan(cache):
 p=cache/'plan.json'
 if p.exists(): return json.loads(p.read_text())
 rows=[]
 for c in read('consolidated_cell_inventory.csv'):
  if c['canonical_search_state']!='not_yet_researched':continue
  names=ALIASES.get(c['m49_code'],[c['area_name']])
  area='('+' OR '.join('"'+n.replace('"','')+'"' for n in names)+')'
  query=area+' AND '+TERMS[c['condition_key']]
  url='https://www.ebi.ac.uk/europepmc/webservices/rest/search?'+urllib.parse.urlencode({'query':query,'format':'json','resultType':'core','pageSize':5})
  rows.append({'area_m49':c['m49_code'],'area_name':c['area_name'],'condition_key':c['condition_key'],'query':query,'url':url})
 p.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n');return rows

def retrieve(item,cache):
 path=cache/(item['area_m49']+'_'+item['condition_key']+'.json')
 if path.exists():return json.loads(path.read_text())
 start=datetime.datetime.now(datetime.timezone.utc).isoformat()
 try:
  req=urllib.request.Request(item['url'],headers={'User-Agent':'Atlas-Team-B-public-research/1.0'})
  with urllib.request.urlopen(req,timeout=35) as r: raw=r.read()
  data=json.loads(raw)
  assert 'hitCount' in data and isinstance(data.get('resultList',{}).get('result'),list),list(data)
  result={**item,'retrieved_utc':start,'state':'catalogue_metadata_retrieved_not_content_audited','sha256':hashlib.sha256(raw).hexdigest(),'hit_count':int(data['hitCount']),'response':data}
 except Exception as e:
  result={**item,'retrieved_utc':start,'state':'catalogue_access_failed','sha256':'unavailable','hit_count':None,'error':str(e)}
 path.write_text(json.dumps(result,ensure_ascii=False)+'\n');return result

def apply(cache,items,offset):
 logs=read('search_log.csv'); audits=read('research_quality_audit.csv');cov=read('coverage_by_area_condition.csv');cm={(r['m49_code'],r['condition_key']):r for r in cov}
 prov=list(csv.DictReader((ROOT/'PROVENANCE.csv').open()))
 receipt_path=D/'catalogue_first_pass_20261118.csv'
 receipt=list(csv.DictReader(receipt_path.open())) if receipt_path.exists() else []
 added=[]
 for i,item in enumerate(items,offset+1):
  k=(item['area_m49'],item['condition_key']); cell=cm[k]
  if any(r['area_m49']==k[0] and r['condition_key']==k[1] for r in receipt):continue
  assert cell['search_state'] in ('not_yet_researched','national_or_cross_border_body_verified','specialist_research_only'),k
  result=json.loads((cache/(k[0]+'_'+k[1]+'.json')).read_text())
  candidates=result.get('response',{}).get('resultList',{}).get('result',[])
  ids=[r.get('source','')+':'+r.get('id','') for r in candidates]
  titles=[r.get('title','') for r in candidates]
  note=('Actual condition-specific catalogue query returned '+str(result['hit_count'])+' candidate works; first '+str(len(candidates))+' identifiers recorded. ' if result['hit_count'] is not None else 'Actual condition-specific catalogue request failed: '+result.get('error','unknown')+'. ')
  note+='D1 discovery only. Search geography can denote authors, participants, diaspora, namesakes or indexed text; local organization domicile, nongovernmental role and publication authorship NOT verified. Metadata is not substantive evidence. Zero results is not proof of absence; English/index coverage and geographic aliases are incomplete.'
  next_action='Distinct native-language first-party society/academic source or professional association directory, followed by original document and local authorship/identity check. No terminal disposition yet.'
  sid=f'B106-CATALOGUE-{i:04d}'
  logs.append(dict(zip(logs[0],[sid,k[0],k[1],DATE,'Europe PMC REST actual query: '+item['query'],item['url'],'Condition-specific literature catalogue discovery','en_query_multilingual_index_not_language_audited',result['state'],'candidate_metadata_or_access_result_only_no_eligible_source_claim',note+' '+next_action])))
  audits.append(dict(zip(audits[0],['search_depth',k[0],k[1],'not_applicable',item['url'],'D1','B106_attributable_catalogue_query_only_not_terminal',item['url'],DATE,note,next_action])))
  prov.append(dict(zip(prov[0],[sid,'condition_specific_catalogue_query',k[0],'Europe PMC EMBL-EBI catalogue; original authors/issuers unverified',item['url'],'en_query',DATE,result['state'],note])))
  if cell['search_state']=='not_yet_researched':
   cell.update(search_state='targeted_search_no_verified_resource',local_language_terms_used='Exact query recorded in '+sid+'; native-language issuer discovery pending',coverage_note=note,search_log_ids=sid)
  else:
   cell['search_log_ids']+='|'+sid
  receipt.append({'search_id':sid,'area_m49':k[0],'area_name':item['area_name'],'condition_key':k[1],'query':item['query'],'retrieval_url':item['url'],'retrieved_utc':result['retrieved_utc'],'retrieval_state':result['state'],'response_sha256':result['sha256'],'candidate_hit_count':str(result['hit_count']) if result['hit_count'] is not None else 'unknown_access_failure','first_candidate_ids':json.dumps(ids,ensure_ascii=False),'first_candidate_titles':json.dumps(titles,ensure_ascii=False),'eligibility':'UNVERIFIED_CANDIDATE_METADATA_ONLY','disposition':'D1_open_not_terminal'})
  added.append(k)
 for name,rows in [('search_log.csv',logs),('research_quality_audit.csv',audits),('coverage_by_area_condition.csv',cov),('catalogue_first_pass_20261118.csv',receipt)]:write(name,rows)
 with (ROOT/'PROVENANCE.csv').open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=list(prov[0]),lineterminator='\n',quoting=csv.QUOTE_ALL);w.writeheader();w.writerows(prov)
 # Basic batch consistency only; full native and supplemental validation at final checkpoint.
 assert len(cm)==1736 and len(set(r['search_id'] for r in logs))==len(logs)
 assert all(cm[k]['search_state']!='not_yet_researched' for k in added)
 metrics=reconcile()
 print(json.dumps({'added_D1':len(added),'receipt_rows':len(receipt),'remaining_untouched':metrics['untouched_cells'],'new_substantive_qualifications':0}),flush=True)

if __name__=='__main__':
 a=argparse.ArgumentParser();a.add_argument('--retrieve');a.add_argument('--apply');a.add_argument('--offset',type=int,default=0);a.add_argument('--limit',type=int,default=100000);ns=a.parse_args()
 cache=pathlib.Path(ns.retrieve or ns.apply);cache.mkdir(parents=True,exist_ok=True);items=plan(cache)[ns.offset:ns.offset+ns.limit]
 if ns.retrieve:
  results=[]
  with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
   for r in pool.map(lambda i:retrieve(i,cache),items):
    results.append(r)
    if len(results)%100==0:print(json.dumps({'retrieved':len(results),'planned':len(items),'access_failures':sum(x['state']=='catalogue_access_failed' for x in results)}),flush=True)
  print(json.dumps({'retrieved':len(results),'planned':len(items),'access_failures':sum(x['state']=='catalogue_access_failed' for x in results),'zero_results':sum(x['hit_count']==0 for x in results)}),flush=True)
 else:apply(cache,items,ns.offset)
