"""Preserve completed local-author queries as D1 receipts, never automatic eligibility.

Usage: record_affiliation_discovery.py CACHE
Query-hash identifiers preserve geographic corrections and permit safe resumption.
"""
import csv, hashlib, json, pathlib, sys
from catalogue_first_pass import ROOT, D, read, write, reconcile, DATE

cache = pathlib.Path(sys.argv[1])
logs = read('search_log.csv')
audit = read('research_quality_audit.csv')
cov = read('coverage_by_area_condition.csv')
cm = {(r['m49_code'], r['condition_key']): r for r in cov}
prov = list(csv.DictReader((ROOT / 'PROVENANCE.csv').open()))
path = D / 'affiliation_discovery_20261118.csv'
receipt = list(csv.DictReader(path.open())) if path.exists() else []
known = {r['search_id'] for r in logs}
depth = {}
for r in audit:
    if r['record_type'] == 'search_depth':
        depth[(r['area_m49'], r['condition_key'])] = r['quality_or_depth']
added = 0
for file in sorted(cache.glob('[0-9]*.json')):
    r = json.loads(file.read_text())
    sid = 'B114-AFF-' + hashlib.sha256(r['url'].encode()).hexdigest()[:16]
    if sid in known:
        continue
    k = (r['area_m49'], r['condition_key'])
    works = r.get('response', {}).get('resultList', {}).get('result', [])
    note = ('Actual Europe PMC AFF/local-author and TITLE_ABS condition query; '
            'candidate count=' + str(r['hit_count']) + '. Same-index refinement, '
            'not an independent D2 avenue. Affiliations, local institution role and '
            'substantive original content remain unverified. Zero results is not '
            'absence; names, language, indexing and historical affiliations limit recall.')
    if r.get('error'):
        note += ' Retrieval blocker: ' + r['error']
    logs.append(dict(zip(logs[0], [sid, *k, DATE, r['query'], r['url'],
        'Local-author literature discovery', 'en_query', r['state'],
        'candidate_metadata_only_no_eligibility_claim', note])))
    prov.append(dict(zip(prov[0], [sid, 'local_author_catalogue_query', k[0],
        'Europe PMC EMBL-EBI catalogue', r['url'], 'en_query', DATE, r['state'], note])))
    if depth.get(k) not in ('D2', 'D3'):
        audit.append(dict(zip(audit[0], ['search_depth', *k, 'not_applicable',
            r['url'], 'D1', 'B114_same_index_refinement_not_terminal', r['url'],
            DATE, note, 'Inspect original candidates and distinct first-party/native-language avenues.'])))
    c = cm[k]
    ids = [] if c['search_log_ids'] == 'none_logged' else c['search_log_ids'].split('|')
    ids.append(sid)
    c['search_log_ids'] = '|'.join(ids)
    receipt.append(dict(search_id=sid, area_m49=k[0], area_name=r['area_name'],
        condition_key=k[1], query=r['query'], retrieval_url=r['url'],
        retrieved_utc=r['retrieved_utc'], retrieval_state=r['state'],
        response_sha256=r['sha256'], candidate_hit_count=str(r['hit_count']),
        first_candidate_ids=json.dumps([w.get('source', '') + ':' + w.get('id', '') for w in works]),
        first_candidate_titles=json.dumps([w.get('title', '') for w in works], ensure_ascii=False),
        disposition='D1_same_index_refinement_no_eligibility_or_absence_claim'))
    known.add(sid)
    added += 1
for name, rows in [('search_log.csv', logs), ('research_quality_audit.csv', audit),
                   ('coverage_by_area_condition.csv', cov), ('affiliation_discovery_20261118.csv', receipt)]:
    write(name, rows)
with (ROOT / 'PROVENANCE.csv').open('w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(prov[0]), quoting=csv.QUOTE_ALL, lineterminator='\n')
    w.writeheader()
    w.writerows(prov)
assert len(known) == len(logs)
m = reconcile()
print(json.dumps({'new_query_receipts': added, 'total_receipts': len(receipt),
                  'qualified_cells': m['distinct_cells_with_eligible_audited_source']}))
