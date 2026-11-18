"""Targeted primary-source, jurisdiction and commencement checks for this batch."""
import csv
import datetime
import pathlib
import re

ROOT = pathlib.Path(__file__).parent

def read(path):
    with (ROOT / path).open() as stream:
        reader = csv.DictReader(stream)
        rows = list(reader)
        assert all(None not in row and None not in row.values() for row in rows)
        return rows

sources = read('PROVENANCE.csv')
expected = int(re.search(r'EXPECTED_CURRENT_PROVENANCE_COUNT = (\d+)', (ROOT / 'validate.mjs').read_text()).group(1))
assert len({r['source_id'] for r in sources}) == len(sources) == expected
assert len({r['source_url'] for r in sources}) == len(sources)
by_source = {r['source_id']: r for r in sources}
rows = read('data/regulator_amendment_review_2026-11-18.csv')
access = read('data/legal_source_access_2026-11-18.csv')
backlog = {r['id'] for r in read('data/consolidated_case_backlog_2026-11-07.csv')}
assert len(rows) == len({r['record_id'] for r in rows}) == 13
assert len(access) == 12
assert {r['requested_url'] for r in access} == {by_source[r['source_id']]['source_url'] for r in access}
for row in rows:
    assert row['source_url'] == by_source[row['source_id']]['source_url']
    assert set(row['backlog_ids'].split('|')) <= backlog
    assert row['full_packet_closure'] == 'NO'
for row in access:
    assert row['http_status'] == '200'
    assert re.fullmatch('[0-9a-f]{64}', row['sha256'])

amendments = [r for r in access if r['retrieval_key'].startswith('DK-20')]
assert {r['retrieval_key'] for r in amendments} == {
    'DK-2023-1550', 'DK-2023-1778', 'DK-2024-646', 'DK-2024-650', 'DK-2025-406'
}
assert all(r['content_type'] == 'application/pdf' for r in amendments)
future = [r for r in rows if r['date_state'] == 'FUTURE_ENACTMENT_NOT_YET_EFFECTIVE']
assert len(future) == 1
assert datetime.date.fromisoformat(future[0]['effective_from']) > datetime.date(2026, 11, 18)
assert future[0]['effective_from'] == '2026-12-09'
assert future[0]['source_id'] == 'TD-SRC-346'
assert len({case for r in rows for case in r['backlog_ids'].split('|')}) == 3
print('PASS: 13 original statutory/date findings; five listed Danish amendments; 12 authenticated source records; future German amendment not promoted; zero full packet closures.')
