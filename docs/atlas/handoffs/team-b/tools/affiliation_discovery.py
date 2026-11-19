"""Target local-author candidate discovery; never qualify or mark D2 automatically.

Provider search syntax AFF and TITLE_ABS is documented in the original Europe PMC
Web Service Reference, https://europepmc.org/doc/EBI_Europe_PMC_Web_Service_Reference.pdf.
Different filters in the same index are not independent evidence avenues.
Usage: affiliation_discovery.py CACHE [--limit N] [--offset N]
Raw core responses remain temporary; manual review and canonical search receipts
are separate. This tool does not mutate canonical coverage or quality ledgers.
"""
import argparse,concurrent.futures,json,pathlib,urllib.parse
from catalogue_first_pass import ROOT,D,read,ALIASES,TERMS,retrieve
a=argparse.ArgumentParser();a.add_argument('cache');a.add_argument('--limit',type=int,default=100);a.add_argument('--offset',type=int,default=0);ns=a.parse_args()
cache=pathlib.Path(ns.cache);cache.mkdir(parents=True,exist_ok=True);planfile=cache/'plan.json'
if planfile.exists():plan=json.loads(planfile.read_text())
else:
 plan=[]
 cells=sorted(read('consolidated_cell_inventory.csv'),key=lambda r:(r['work_priority'],r['m49_code'],r['condition_key']))
 for c in cells:
  if int(c['S1_S2_H_audited']):continue
  names=ALIASES.get(c['m49_code'],[c['area_name']])
  area='('+' OR '.join('AFF:"'+n.replace('"','')+'"' for n in names)+')'
  query=area+' AND TITLE_ABS:('+TERMS[c['condition_key']]+')'
  url='https://www.ebi.ac.uk/europepmc/webservices/rest/search?'+urllib.parse.urlencode({'query':query,'format':'json','resultType':'core','pageSize':5})
  plan.append({'area_m49':c['m49_code'],'area_name':c['area_name'],'condition_key':c['condition_key'],'query':query,'url':url,'priority':c['work_priority']})
 planfile.write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
items=plan[ns.offset:ns.offset+ns.limit]
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 results=[]
 for r in pool.map(lambda x:retrieve(x,cache),items):
  results.append(r)
  if len(results)%100==0:print(json.dumps({'affiliation_queries_retrieved':len(results),'selected':len(items),'zero':sum(x['hit_count']==0 for x in results),'failed':sum(x['state']=='catalogue_access_failed' for x in results)}),flush=True)
print(json.dumps({'affiliation_queries_retrieved':len(results),'selected':len(items),'total_plan':len(plan),'zero':sum(x['hit_count']==0 for x in results),'failed':sum(x['state']=='catalogue_access_failed' for x in results)}),flush=True)
