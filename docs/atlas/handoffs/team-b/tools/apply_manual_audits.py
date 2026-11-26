"""Append explicit human/model source decisions; retrieval alone never assigns a tier.
Usage: python apply_manual_audits.py INDEX DECISIONS CACHE START END BATCH
"""
import csv,hashlib,json,pathlib,sys
from reconcile_quality import ROOT,D,read,write,reconcile
index=json.loads(pathlib.Path(sys.argv[1]).read_text()); decisions=json.loads(pathlib.Path(sys.argv[2]).read_text());cache=pathlib.Path(sys.argv[3]);start,end=map(int,sys.argv[4:6]);batch=sys.argv[6]
rows=[r for r in index['data']['source_quality_worklist.csv'] if r['individual_quality_tier']=='not_audited'];audit=read('research_quality_audit.csv');seen={(r['org_id'],r['condition_key'],r['relevant_url']) for r in audit if r['record_type']=='source'}
obsfile=D/'source_observations_20261118.csv';obs=list(csv.DictReader(obsfile.open())) if obsfile.exists() else []
for i in range(start,end):
 if str(i) not in decisions:continue
 r=rows[i];k=(r['org_id'],r['condition_key'],r['original_exact_URL'])
 if k in seen:continue
 tier,note=decisions[str(i)];assert tier in ('S1','S2','H','M','U')
 cfile=cache/(hashlib.sha256(k[2].encode()).hexdigest()+'.json');c=json.loads(cfile.read_text())
 action={'M':'Retrieve separately the linked substantive original; preserve historical metadata and exact attribution.','U':'Named original access/issuer blocker; specialist or later authenticated retrieval required; do not repeat failed routes.','S1':'Independent methods, edition/errata, issuer-country and clinical/rights review; no approval conferred.','S2':'Educational index only; independent clinical/currency/rights review; no prevalence or genotype inference.','H':'Retain external authorship and actual host/endorser role; independently review edition, clinical applicability and rights.'}[tier]
 audit.append(dict(zip(audit[0],['source',r['area_m49'],r['condition_key'],r['org_id'],k[2],tier,f'{batch}_individual_exact_source_content_audit',k[2],'2026-11-18',note,action])))
 obs.append({'batch':batch,'original_index':str(i),'org_id':k[0],'condition_key':k[1],'exact_url':k[2],'direct_result':str(c.get('status',c.get('error','unknown'))),'final_url':c.get('final_url',k[2]),'response_sha256':c.get('response_sha256','unavailable'),'quality_tier':tier,'inspection_basis':note})
 seen.add(k)
write('research_quality_audit.csv',audit);write('source_observations_20261118.csv',obs);m=reconcile()
log=ROOT/'PROGRESS_20261118.md'
if not log.exists():log.write_text('# Team B rolling progress — 2026-11-18\n\nStart: 537368fa40ccf5b692427d0c1e3cc3068c39708d; 342 unaudited rows, 1154 untouched cells, 182 unlinked missing D2, 21 identity gaps, five issuer questions. Raw intake read-only: 56 batches, 2071 unique unverified leads indexed.\n')
with log.open('a') as f:f.write(f'\n- {batch}: audited total {m["source_quality_audited"]}/433; unaudited {m["source_quality_unreviewed"]}; qualified cells {m["distinct_cells_with_eligible_audited_source"]}. Exact observations in data/source_observations_20261118.csv.\n')
print(json.dumps(m['run_delta']))
