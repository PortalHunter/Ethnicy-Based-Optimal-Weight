#!/usr/bin/env python3
"""Materialize the CSV release as a disposable indexed SQLite research copy."""
import argparse
import csv
from pathlib import Path
import sqlite3

from intake import ROOT

INDEXES = {
    'areas': ('m49',), 'map_coverage': ('m49',), 'institutions': ('entity_id',),
    'publications': ('publication_id',), 'relationships': ('subject_id', 'object_id'),
    'provenance': ('source_id',), 'candidate_claims': ('claim_id',),
    'publication_contexts': ('condition_key', 'publication_id', 'organization_id'),
    'condition_availability': ('m49', 'condition_key'),
    'exceptions': ('record_id',), 'provenance_review': ('assertion_id',),
}

def quote(identifier):
    return '"' + identifier.replace('"', '""') + '"'

def materialize(destination):
    with destination.open('xb'):
        pass
    try:
        with sqlite3.connect(destination) as db:
            files = [('provenance', ROOT/'PROVENANCE.csv')]
            files.extend((p.stem, p) for p in sorted((ROOT/'data').glob('*.csv')))
            for name, path in files:
                with path.open(newline='', encoding='utf-8') as file:
                    rows = csv.reader(file)
                    fields = next(rows)
                    table = quote(name)
                    db.execute(f"CREATE TABLE {table} ({', '.join(quote(f)+' TEXT NOT NULL' for f in fields)})")
                    db.executemany(f"INSERT INTO {table} VALUES ({','.join('?' for _ in fields)})", rows)
                    for field in INDEXES.get(name, ()):
                        db.execute(f'CREATE INDEX {quote(name+"_"+field)} ON {table} ({quote(field)})')
            db.execute('''CREATE VIEW map_condition_coverage AS
                SELECT m.*, c.condition_key, c.specialist_disposition, c.search_depth,
                       c.journal_discovery, c.systematic_search
                FROM map_coverage AS m JOIN condition_availability AS c USING (m49)''')
            if db.execute('PRAGMA integrity_check').fetchone() != ('ok',):
                raise ValueError('SQLite integrity check failed')
    except Exception:
        destination.unlink()
        raise

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('destination', type=Path, help='New output file. Existing paths are protected.')
    materialize(parser.parse_args().destination)
