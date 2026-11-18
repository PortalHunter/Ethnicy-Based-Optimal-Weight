"""Recompute supplemental quality worklist, cell inventory and metrics from canonical CSVs.
Does not invent searches, change original records or grant clinical approval.
"""
import csv,json,collections,datetime,pathlib,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]; D=ROOT/'data'
def read(name):return list(csv.DictReader((D/name).open()))
def write(name,rows):
 with (D/name).open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=list(rows[0]),lineterminator='\n',quoting=csv.QUOTE_ALL);w.writeheader();w.writerows(rows)
def reconcile():
 a=read('research_quality_audit.csv');w=read('source_quality_worklist.csv');cells=read('consolidated_cell_inventory.csv');cov=read('coverage_by_area_condition.csv');org=read('specialist_organizations.csv');ctx=read('publication_context.csv');logs=read('search_log.csv')
 key=lambda r:(r['org_id'],r['condition_key'],r.get('relevant_url',r.get('original_exact_URL')))
 audits={key(r):r for r in a if r['record_type']=='source'};depth={}
 for r in a:
  if r['record_type']=='search_depth':depth[(r['area_m49'],r['condition_key'])]=r['quality_or_depth']
 bycell=collections.defaultdict(list); orgmap={r['org_id']:r['area_m49'] for r in org}
 for r in w:
  q=audits.get(key(r));
  if q:r.update(individual_quality_tier=q['quality_or_depth'],audit_review_state=q['review_state'],next_action=q['next_action'])
  bycell[(r['area_m49'],r['condition_key'])].append(r)
 tiers=collections.Counter(r['individual_quality_tier'] for r in w);covmap={(r['m49_code'],r['condition_key']):r for r in cov}
 logcounts=collections.Counter((r['area_m49'],r['condition_key']) for r in logs);oc=collections.Counter(orgmap.values())
 for r in cells:
  k=(r['m49_code'],r['condition_key']);t=collections.Counter(x['individual_quality_tier'] for x in bycell[k]);n=sum(t.values());e=sum(t[x] for x in ('S1','S2','H'));u=t['not_audited'];dep=depth.get(k,'none');state=covmap[k]['search_state']
  disposition='has_audited_qualifying_original' if e else 'raw_link_some_unaudited' if n and u else 'all_historical_rows_audited_no_S1_S2_H' if n else 'D2_bounded_two_independent_issuer_sources' if dep=='D2' else 'D3_named_evidence_limited_escalation' if dep=='D3' else 'D1_original_issuer_first_pass' if logcounts[k] else 'untouched_or_unscored'
  r.update(canonical_search_state=state,raw_resource_rows=str(n),S1_S2_H_audited=str(e),M_audited=str(t['M']),U_audited=str(t['U']),unaudited_resource_rows=str(u),evidence_disposition=disposition,search_log_count=str(logcounts[k]),highest_depth_audit=dep,local_org_rows=str(oc[k[0]]))
  if e:r.update(work_priority='P2',next_action='Eligible research/education lead; independent clinical, issuer, population, rights review remains separate.')
  elif n and not u:r.update(work_priority='P0',next_action='Preserve historical M/U links; retrieve exact substantive original or retain named access/attribution blocker.')
  elif n:r.update(work_priority='P1',next_action='Individually inspect remaining exact original URLs; no implied substantive eligibility.')
 write('source_quality_worklist.csv',w);write('consolidated_cell_inventory.csv',cells)
 m=json.loads((D/'consolidation_metrics.json').read_text());start=json.loads((ROOT/'runs/20261118_baseline.json').read_text())
 qual=[r for r in cells if int(r['S1_S2_H_audited'])];raw=[r for r in cells if int(r['raw_resource_rows'])];unlinked=[r for r in cells if not int(r['raw_resource_rows']) and int(r['search_log_count'])]
 m.update(baseline_sha=start['start_sha'],live_input_head=start['start_sha'],method='2026-11-18 exact URL manual content audits; deterministic supplemental reconciliation; historical canonical records preserved',generated_utc_date='2026-11-18',source_quality_audited=sum(tiers[x] for x in ('S1','S2','H','M','U')),source_quality_unreviewed=tiers['not_audited'],tiers={x:tiers[x] for x in ('S1','S2','H','M','U')},eligible_audited_sources=sum(tiers[x] for x in ('S1','S2','H')),distinct_cells_with_eligible_audited_source=len(qual),raw_linked_fully_audited_without_S1_S2_H=sum(r['evidence_disposition']=='all_historical_rows_audited_no_S1_S2_H' for r in raw),raw_linked_no_eligible_with_unaudited=sum(r['evidence_disposition']=='raw_link_some_unaudited' for r in raw),metadata_reconciliation=len(read('metadata_only_reconciliation.csv')),metadata_replacement_qualified=sum(r['qualified_tier'] in ('S1','S2','H') for r in read('metadata_only_reconciliation.csv')),metadata_replacement_open=sum(r['qualified_tier'] not in ('S1','S2','H') for r in read('metadata_only_reconciliation.csv')),depth_tiers={d:sum(v==d for v in depth.values()) for d in ('D1','D2','D3')})
 for cond,v in m['by_condition'].items():
  cr=[r for r in cells if r['condition_key']==cond];v.update(qualCells=sum(int(r['S1_S2_H_audited'])>0 for r in cr),auditedSources=sum(r['individual_quality_tier'] in ('S1','S2','H','M','U') for r in w if r['condition_key']==cond))
 m.update(organizations=len(org),raw_linked_cells=len(raw),searched_unlinked_cells=len(unlinked),untouched_cells=len(cells)-len(raw)-len(unlinked),pub_context_rows=len(ctx),search_logs=len(logs),provenance=sum(1 for _ in csv.DictReader((ROOT/'PROVENANCE.csv').open())),search_depth_entries=sum(r['record_type']=='search_depth' for r in a),searched_unlinked_missing_active_D2=sum(depth.get((r['m49_code'],r['condition_key'])) not in ('D2','D3') for r in unlinked),search_depth_D2_cells_with_no_link=sum(depth.get((r['m49_code'],r['condition_key']))=='D2' for r in unlinked))
 for cond,v in m['by_condition'].items():
  cr=[r for r in cells if r['condition_key']==cond];v.update(raw=sum(int(r['raw_resource_rows'])>0 for r in cr),searched=sum(not int(r['raw_resource_rows']) and int(r['search_log_count'])>0 for r in cr),untouched=sum(not int(r['raw_resource_rows']) and not int(r['search_log_count']) for r in cr))
 m['run_delta']={k:m[k]-start[k] for k in ('source_quality_audited','source_quality_unreviewed','eligible_audited_sources','distinct_cells_with_eligible_audited_source','raw_linked_cells','untouched_cells','geographic_org_gaps','unknown_source_country_imprints')}
 m.update(repeated_exact_area_condition_search_urls=sum(v>1 for v in collections.Counter((r['area_m49'],r['condition_key'],r['source_url']) for r in logs).values()),identity_triage_classes=dict(collections.Counter(r['identity_triage_class'] for r in read('identity_review_worklist.csv'))))
 m.pop('identity_states_with_caution_heuristic',None);m.pop('identity_states_no_caution_heuristic',None)
 m['validation']={'structural_errors':'pending_final_suite','Node_CLI_ran':False,'clinical_state':f'{len(ctx)}/{len(ctx)} research_lead_only'}
 (D/'consolidation_metrics.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n');return m
if __name__=='__main__':print(json.dumps(reconcile()['run_delta']))
