"""Append manually interpreted search routes and depth; no automatic source eligibility.

Usage: append_search_dispositions.py REVIEWED_JSON
Every input must contain the actual query, inspected avenues and explicit limits.
"""
import csv, json, pathlib, sys
from catalogue_first_pass import ROOT, read, write, reconcile, DATE

items = json.loads(pathlib.Path(sys.argv[1]).read_text())
logs = read('search_log.csv')
audit = read('research_quality_audit.csv')
cov = read('coverage_by_area_condition.csv')
cm = {(r['m49_code'], r['condition_key']): r for r in cov}
prov = list(csv.DictReader((ROOT / 'PROVENANCE.csv').open()))
known = {r['search_id'] for r in logs}
depth = {}
for r in audit:
    if r['record_type'] == 'search_depth':
        depth[(r['area_m49'], r['condition_key'])] = r['quality_or_depth']
added = 0
for r in items:
    sid = r['record_id']
    if sid in known:
        continue
    k = (r['area_m49'], r['condition_key'])
    assert r['depth'] in ('D1', 'D2', 'D3') and r['query'] and r['limits']
    assert r['avenues'] and all(a['url'] and a['observation'] for a in r['avenues'])
    if r['depth'] == 'D2':
        assert len({a['approach'] for a in r['avenues']}) >= 2
    url = r['avenues'][0]['url']
    evidence = r['avenues'][-1]['url']
    note = r['result'] + ' Limits: ' + r['limits']
    logs.append(dict(zip(logs[0], [sid, *k, DATE, r['query'], url,
        'Manually interpreted distinct discovery routes', r['language'],
        r['depth'] + '_reviewed_search_disposition_not_clinical_approval',
        'no_new_eligible_source_claim', note])))
    # A new exploratory route cannot silently downgrade historical bounded work.
    if r['depth'] != 'D1' or depth.get(k) not in ('D2', 'D3'):
        audit.append(dict(zip(audit[0], ['search_depth', *k, 'not_applicable', url,
            r['depth'], sid + '_manual_route_interpretation', evidence, DATE,
            note, r['next_action']])))
    prov.append(dict(zip(prov[0], [sid, 'manually_reviewed_condition_search', k[0],
        'Exact first-party sources and retrieval routes recorded in reviewed JSON',
        url, r['language'], DATE, r['depth'] + '_bounded_scope_only', note])))
    c = cm[k]
    ids = [] if c['search_log_ids'] == 'none_logged' else c['search_log_ids'].split('|')
    ids.append(sid)
    c['search_log_ids'] = '|'.join(ids)
    c['coverage_note'] = note
    known.add(sid)
    added += 1
for name, rows in [('search_log.csv', logs), ('research_quality_audit.csv', audit),
                   ('coverage_by_area_condition.csv', cov)]:
    write(name, rows)
with (ROOT / 'PROVENANCE.csv').open('w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(prov[0]), quoting=csv.QUOTE_ALL, lineterminator='\n')
    w.writeheader()
    w.writerows(prov)
assert len(known) == len(logs)
m = reconcile()
print(json.dumps({'search_dispositions_added': added,
    'unlinked_without_active_D2_D3': m['searched_unlinked_missing_active_D2']}))
