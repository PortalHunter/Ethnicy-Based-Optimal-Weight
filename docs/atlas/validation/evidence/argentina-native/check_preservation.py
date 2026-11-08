import subprocess,json,hashlib,csv,io,collections,pathlib,re
P='320e39ae5d4cf4b014dfafecdfb2ccc066e7c737'; C='c4ac494941a6d0db58355cae4cc3d660d442d5f4'; F='9ca772f450bd0d4071b9160b7c2786bc80f4f22a'; A='8eb8b44d6986de8c4715ecbbf90b9e633601cced'
R='docs/atlas/handoffs/team-a/'; L=pathlib.Path('/tmp/atlas-argentina-verifier-logs')
def git(*a):return subprocess.check_output(['git',*a])
def get(s,p):return git('show',s+':'+p)
def rows(s,p):return list(csv.DictReader(io.StringIO(get(s,R+p).decode())))
def check(v,msg):
 assert v,msg
 print('PASS',msg)
m=json.loads(get(F,'docs/atlas/handoff-archives/A032/MANIFEST.json')); ticket=json.loads((L/'ticket.json').read_text()); packet=ticket['packet']; result=json.loads(get(C,R+'runs/A-01--032.json'))
check(git('show','-s','--format=%P',C).decode().strip()==P,'exact sole publication parent '+P)
changes=[x.split('\t') for x in git('diff','--name-status',P,C).decode().splitlines()]
check(len(changes)==9 and all(x[0] in ['A','M'] for x in changes) and set(x[1] for x in changes)==set(packet['paths']),'exact nine allowlisted add/modify paths; no foreign paths/deletes/renames')
fingerprints=[]
for x in m['independent_approval']['approved_fingerprints']:
 p=x['destination']; b=get(C,p); mode,kind,blob=git('ls-tree',C,'--',p).decode().split('\t')[0].split()
 check(b==get(F,p) and len(b)==x['bytes'] and hashlib.sha256(b).hexdigest()==x['sha256'] and blob==x['git_blob_sha'] and mode=='100644' and kind=='blob','frozen/approved bytes, length, SHA256, blob, regular mode '+p)
 fingerprints.append({'path':p,'blob':blob,'sha256':hashlib.sha256(b).hexdigest(),'bytes':len(b),'mode':mode})
(L/'fingerprints.json').write_text(json.dumps(fingerprints,indent=2))
old=rows(P,'PROVENANCE.csv'); new=rows(C,'PROVENANCE.csv')
check(len(old)==763 and len(new)==766 and new[:763]==old,'763 original provenance records retained in order; 766 total')
print('NEW PROVENANCE',json.dumps(new[763:],ensure_ascii=False,indent=2))
check(all(r['area_m49']=='032' for r in new[763:]),'three additions only M49 032')
for f in ['data/legal_verification_ledger.csv','data/research_queue.csv','RECONCILED_INVENTORY_20261107.csv','PRIORITIZED_BACKLOG_20261107.csv','INDEPENDENT_ISSUER_AUDIT_A73_20261107.csv']:
 before=rows(P,f);after=rows(C,f)
 check(len(before)==len(after) and [r for r in before if r['m49_code']!='032']==[r for r in after if r['m49_code']!='032'],'all non032 rows and order preserved '+f)
 b=next(r for r in before if r['m49_code']=='032');a=next(r for r in after if r['m49_code']=='032')
 print('032 changed fields',f,json.dumps({k:{'before':b[k],'after':a[k]} for k in b if a[k]!=b[k]},ensure_ascii=False))
 if f=='data/legal_verification_ledger.csv':
  check(all(b[k]==a[k] for k in b if k not in ['verified_legal_source_ids','last_legal_review_utc','review_note']),'every legal identity, dimension, review stage and acceptance unchanged for032')
  print('LEGAL METRICS',json.dumps({k:dict(collections.Counter(r[k] for r in after)) for k in a if k not in ['m49_code','un_name','un_region','authority_record_ids','verified_legal_source_ids','last_legal_review_utc','review_note']},indent=2))
 if f=='INDEPENDENT_ISSUER_AUDIT_A73_20261107.csv':
  check('PARTIAL' in a.values() and 'NO' in a.values(),'032 issuer PARTIAL/NO retained')
  print('ISSUER SAMPLE',json.dumps(after,ensure_ascii=False))
prior=rows(P,'PRIORITIZED_BACKLOG_20261107.csv');q=[r for r in prior if r['m49_code']=='032']
check(len(q)==1 and q[0]['priority_rank']=='10','reserved exact input rank10/M49032 native row')
print('RESERVED ROW',json.dumps(q[0],ensure_ascii=False,indent=2))
for f in ['data/countries.csv','data/government_health_bodies.csv','data/authority_relationships.csv','data/authority_area_scope.csv','data/country_coverage.csv']:
 check(get(P,R+f)==get(C,R+f),'original directory bytes unchanged '+f)
 print('RECORD COUNT',f,len(rows(C,f)))
check(ticket['status']=='running' and ticket['launch_id']==m['launch_id'] and ticket['key']==result['key'] and packet['expected_sha']==P,'live pinned ticket running exact launch/key/input')
record=get(F,'docs/atlas/handoff-archives/A032/VERIFIER_RECORD.md').decode()
approval=re.search(r'```json\n(.*?)\n```',record,re.S).group(1)+'\n'
handoff=re.search(r'```markdown\n(.*?)\n```',record,re.S).group(1)+'\n'
print('ARCHIVED ENCLOSED HASHES',hashlib.sha256(approval.encode()).hexdigest(),hashlib.sha256(handoff.encode()).hexdigest())
receipt={'version':1,'key':result['key'],'commit':C,'parent':P,'paths':packet['paths'],'blob_shas':{f['path']:f['blob'] for f in fingerprints},'pr_state':'open/draft/unmerged'}
(L/'receipt.json').write_text(json.dumps(receipt,indent=2))
print('PASS preservation complete')
