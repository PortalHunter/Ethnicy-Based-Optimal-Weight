"""Validate supplemental joins/counts and preservation; clinical accuracy is separate."""
import collections,csv,io,json,pathlib,subprocess
from reconcile_quality import ROOT,D,read
checks=[]
def ck(ok,name):
 checks.append({'check':name,'pass':bool(ok)})
 if not ok:raise AssertionError(name)
def key(r,url):return (r['org_id'],r['condition_key'],r[url])
for f in [*D.glob('*.csv'),ROOT/'PROVENANCE.csv']:
 rows=list(csv.reader(f.open()));ck(all(len(r)==len(rows[0]) for r in rows),'CSV width '+f.name)
pub=read('condition_organizations.csv');pkeys={key(r,'relevant_publication_url') for r in pub};org={r['org_id']:r for r in read('specialist_organizations.csv')};logs=read('search_log.csv');audit=read('research_quality_audit.csv');work=read('source_quality_worklist.csv');cells=read('consolidated_cell_inventory.csv');m=json.loads((D/'consolidation_metrics.json').read_text());active={};depth={}
for r in audit:
 if r['record_type']=='source':
  ck(key(r,'relevant_url') in pkeys,'audit source FK '+str(key(r,'relevant_url')));ck(r['quality_or_depth'] in ('S1','S2','H','M','U'),'source tier');active[key(r,'relevant_url')]=r
 else:
  ck(r['record_type']=='search_depth' and r['quality_or_depth'] in ('D1','D2','D3'),'search depth type/tier');depth[(r['area_m49'],r['condition_key'])]=r['quality_or_depth'];ck(any(s['area_m49']==r['area_m49'] and s['condition_key']==r['condition_key'] for s in logs),'depth attributable search')
ck(len(work)==len(pub) and {key(r,'original_exact_URL') for r in work}==pkeys,'worklist exact publication keyset')
ck(all(r['individual_quality_tier']==active[key(r,'original_exact_URL')]['quality_or_depth'] for r in work),'active tier reconciliation')
ck(all(r['area_m49']==org[r['org_id']]['area_m49'] for r in work),'worklist domicile join')
bycell=collections.defaultdict(list)
for r in work:bycell[(r['area_m49'],r['condition_key'])].append(r)
for r in cells:
 k=(r['m49_code'],r['condition_key']);tiers=collections.Counter(s['individual_quality_tier'] for s in bycell[k]);ck(int(r['raw_resource_rows'])==len(bycell[k]) and int(r['S1_S2_H_audited'])==sum(tiers[t] for t in ('S1','S2','H')) and int(r['M_audited'])==tiers['M'] and int(r['U_audited'])==tiers['U'] and int(r['unaudited_resource_rows'])==tiers['not_audited'],'cell audit counts '+str(k))
tiers=collections.Counter(r['individual_quality_tier'] for r in work);ck(m['tiers']=={t:tiers[t] for t in ('S1','S2','H','M','U')},'metric tiers');ck(m['source_quality_audited']==len(active)==len(pub),'all source contexts individually audited');ck(m['distinct_cells_with_eligible_audited_source']==sum(int(r['S1_S2_H_audited'])>0 for r in cells),'qualified cell metric');ck(m['raw_linked_cells']+m['searched_unlinked_cells']+m['untouched_cells']==1736,'matrix metric partition');ck(m['search_logs']==len(logs),'search metric');ck(m['metadata_reconciliation']==len(read('metadata_only_reconciliation.csv')),'metadata reconciliation metric')
ck(len(read('intake_candidate_checks_20261118.csv'))==81,'81 actual candidate checks');ck(len(read('geographic_gap_audit_20261118.csv'))==21,'21 geographic queries');ck(len(read('issuer_review_20261118.csv'))==5,'five named issuer escalations')
base=json.loads((ROOT/'runs/20261118_baseline.json').read_text())['start_sha'];prefix='docs/atlas/handoffs/team-b/'
def old(n):return list(csv.DictReader(io.StringIO(subprocess.check_output(['git','show',base+':'+prefix+n],text=True))))
for n in ['data/specialist_organizations.csv','data/condition_organizations.csv','data/publication_context.csv','data/search_log.csv','PROVENANCE.csv','data/research_quality_audit.csv']:
 now=list(csv.DictReader((ROOT/n).open()));before=old(n);ck(now[:len(before)]==before,'historical rows preserved '+n)
for n in ['data/subnational_and_indigenous_organizations.csv','data/cross_border_services.csv','data/metadata_only_reconciliation.csv']:
 ck(list(csv.DictReader((ROOT/n).open()))==old(n),'unchanged safeguards '+n)
changed=subprocess.check_output(['git','diff','--name-only',base],text=True).splitlines();ck(all(p.startswith(prefix) for p in changed),'Team B only changed paths')
result={'checks_passed':len(checks),'errors':0,'scope':'supplemental structural consistency and historical preservation only','metrics':{'sources':len(pub),'tiers':dict(tiers),'qualified_cells':m['distinct_cells_with_eligible_audited_source'],'untouched':m['untouched_cells'],'searched_unlinked_missing_D2':m['searched_unlinked_missing_active_D2']}}
print(json.dumps(result,indent=2));(ROOT/'runs/20261118_supplemental_validation.json').write_text(json.dumps(result,indent=2)+'\n')
