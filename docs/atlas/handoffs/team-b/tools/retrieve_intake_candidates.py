"""Read-only retrieval of condition-specific intake candidates; never completes cells automatically."""
import concurrent.futures,hashlib,json,pathlib,sys,urllib.parse,urllib.request
leads=json.loads(pathlib.Path(sys.argv[1]).read_text());cache=pathlib.Path(sys.argv[2]);cache.mkdir(exist_ok=True)
def get(s):
 u=s['url'];p=cache/(hashlib.sha256(u.encode()).hexdigest()+'.json')
 if p.exists():return
 pmid=u.rstrip('/').split('/')[-1] if 'pubmed.ncbi.nlm.nih.gov/' in u else None
 query=f'EXT_ID:{pmid} AND SRC:MED' if pmid else None
 route='https://www.ebi.ac.uk/europepmc/webservices/rest/search?'+urllib.parse.urlencode({'query':query,'format':'json','resultType':'core'}) if pmid else u
 r={'lead':s,'retrieval_url':route,'query':query or 'Direct original condition-specific intake candidate navigation'}
 try:
  with urllib.request.urlopen(urllib.request.Request(route,headers={'User-Agent':'ATLAS Research evidence inventory'}),timeout=25) as f:b=f.read(3000000);r.update(status=f.status,final_url=f.url,response_sha256=hashlib.sha256(b).hexdigest())
  if pmid:r['result']=json.loads(b)
  else:
   from retrieve_audit_sources import Text
   t=Text();t.feed(b.decode('utf-8',errors='replace'));r['text']='\n'.join(t.parts)
 except Exception as e:r['error']=str(e)
 p.write_text(json.dumps(r,ensure_ascii=True))
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:list(pool.map(get,leads))
print('Retrieved candidate routes:',len(leads))
