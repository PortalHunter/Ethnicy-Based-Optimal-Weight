"""Cache exact source responses for manual quality inspection; never assigns tiers.
Usage: bundled-python retrieve_audit_sources.py INDEX_JSON CACHE_DIR
Temporary full text stays outside the repository. At most four concurrent requests.
"""
import logging
logging.getLogger("pypdf").setLevel(logging.ERROR)
import concurrent.futures, hashlib, html.parser, io, json, pathlib, sys, urllib.request
class Text(html.parser.HTMLParser):
 def __init__(self): super().__init__(); self.parts=[]; self.skip=0
 def handle_starttag(self,t,a):
  if t in ('script','style','noscript','svg'): self.skip+=1
 def handle_endtag(self,t):
  if t in ('script','style','noscript','svg'): self.skip=max(0,self.skip-1)
 def handle_data(self,s):
  if not self.skip and s.strip(): self.parts.append(s.strip())
def retrieve(url):
 path=cache/(hashlib.sha256(url.encode()).hexdigest()+'.json')
 if path.exists():
  try:json.loads(path.read_text());return
  except (ValueError,UnicodeError):pass
 result={'requested_url':url}
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; ATLAS evidence inventory audit)'})
  with urllib.request.urlopen(req,timeout=22) as r:
   b=r.read(18000000); result.update(status=r.status,final_url=r.url,content_type=r.headers.get('Content-Type',''),response_sha256=hashlib.sha256(b).hexdigest())
  if b[:4]==b'%PDF':
   from pypdf import PdfReader
   pdf=PdfReader(io.BytesIO(b)); result['pages']=len(pdf.pages); result['text']='\n'.join(p.extract_text() or '' for p in pdf.pages)
  else:
   parser=Text(); parser.feed(b.decode('utf-8',errors='replace')); result['text']='\n'.join(parser.parts)
 except Exception as e: result['error']=str(e)
 path.write_text(json.dumps(result,ensure_ascii=True))
if __name__=='__main__':
 index=json.loads(pathlib.Path(sys.argv[1]).read_text());cache=pathlib.Path(sys.argv[2]);cache.mkdir(exist_ok=True)
 rows=[r for r in index['data']['source_quality_worklist.csv'] if r['individual_quality_tier']=='not_audited']
 urls=list(dict.fromkeys(r['original_exact_URL'] for r in rows))
 with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:list(pool.map(retrieve,urls))
 print(json.dumps({'source_rows':len(rows),'unique_urls':len(urls),'cache_files':len(list(cache.glob('*.json')))}))
