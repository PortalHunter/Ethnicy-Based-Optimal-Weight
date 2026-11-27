#!/usr/bin/env python3
"""Export the read-only directory fields from the approved Team E snapshot."""
import argparse
from collections import defaultdict
import csv
import io
import ipaddress
import json
from pathlib import Path
import subprocess
from urllib.parse import parse_qsl, urlsplit

ROOT = Path(__file__).resolve().parents[1]
SNAPSHOT = '71c2a927bdb7f4e1bd1a2bb284a39e722375145c'
PREFIX = 'docs/atlas/handoffs/team-e/'
CATALOG = 'https://unstats.un.org/unsd/methodology/m49/overview/'
TARGET = ROOT / 'atlas-preview/data.js'

# Positive allowlist for local identities rather than interpreting free-form grades.
SPECIALIST_IDENTITIES = {
    'official_site_identity_verified_governance_not_audited',
    'official_site_identity_verified_legal_currency_not_independently_audited',
    'own_site_identity_verified',
    'first_party_identity',
    'official_site_identity_verified_governance_partially_audited',
    'first_party_identity_verified_scope_and_publication_caveats',
    'own_hosted_identity_verified',
    'first_party_identity_verified_legal_details_partially_audited',
    'own_site_identity_verified_governance_not_audited',
    'own_site_identity_verified_registry_not_audited',
    'official_primary_identity_verified',
    'official_site_identity_verified',
    'first_party_site_identity_verified',
    'first_party_organization_governance_verified',
    'first_party_charity_identity_verified',
    'first_party_nonprofit_identity_verified',
    'own_primary_name_academic_medical_role_and_local_campus_inspected_registry_unreviewed',
    'own_named_local_academic_identity_and_original_author_affiliation_verified_legal_governance_unreviewed',
}
TERRITORIAL_ROLES = {
    'census_authority_for': 'Identified health authority',
    'scoped_authority_for': 'Documented shared or limited remit',
}
CATEGORIES = {
    'government_authority': 'Health authority',
    'public_health_institute': 'Public health institute',
    'regulator': 'Regulator',
    'specialist_society_or_organization': 'Specialist organization',
    'biomedical_research_org': 'Research institution',
    'community_research_organization': 'Community research organization',
    'journal': 'Journal',
    'index_platform': 'Index or platform',
    'network': 'Network or office',
}

def read(name):
    raw = subprocess.check_output(['git', '-C', str(ROOT), 'show', f'{SNAPSHOT}:{PREFIX}{name}'])
    return list(csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline='')))

def safe_url(url):
    parts = urlsplit(url)
    host = parts.hostname or ''
    try:
        ipaddress.ip_address(host)
    except ValueError:
        pass
    else:
        return False
    fields = {key.lower() for key, _ in parse_qsl(parts.query)}
    return (parts.scheme == 'https' and '.' in host and not host.endswith(('.local', '.internal'))
            and not parts.username and not parts.password and not fields.intersection(
                {'token', 'access_token', 'password', 'api_key', 'sessionid', 'signature'}))

def build():
    provenance = {r['source_id']: r['url'] for r in read('PROVENANCE.csv')}
    areas = {r['m49']: {
        'code': r['m49'], 'name': r['name'], 'iso': r['iso_alpha2'], 'iso3': r['iso_alpha3'],
        'region': r['un_region'], 'status': r['authority_disposition'],
        'scope': r['authority_scope'], 'who': r['who_region'] if r['who_region'] != 'not_verified' else '',
        'whoDate': r['who_effective_date'] if r['who_effective_date'] != 'unknown' else '',
        'whoSource': provenance.get(r['who_source_id'], '') if safe_url(provenance.get(r['who_source_id'], '')) else '',
    } for r in read('data/areas.csv')}
    if len(areas) != 248 or '158' in areas:
        raise ValueError('Expected 248 canonical M49 areas and a separate ISO-only intake')
    places = defaultdict(list)
    for scope in read('data/relationships.csv'):
        kind, code = scope['relationship_type'], scope['geographic_scope_m49']
        url = provenance[scope['source_id']]
        role = TERRITORIAL_ROLES.get(kind)
        if kind.startswith('cross_border:'):
            role = 'Documented cross-border service or representation'
        if role and code in areas and safe_url(url):
            places[scope['subject_id']].append({'code': code, 'role': role, 'source': url})
    coverage = defaultdict(dict)
    condition_labels = {
        'diabetes': 'Diabetes', 'hypertension': 'Hypertension', 'high_chol': 'High cholesterol',
        'gout': 'Gout', 'lactose': 'Lactose intolerance', 'celiac': 'Celiac disease',
        'hemochromatosis': 'Hemochromatosis',
    }
    for cell in read('data/condition_availability.csv'):
        coverage[cell['m49']][cell['condition_key']] = {
            'count': int(cell['specialist_qualified_count']),
            'status': {
                'D2_bounded_two_independent_issuer_sources': 'bounded',
                'has_audited_qualifying_original': 'qualified',
                'all_historical_rows_audited_no_S1_S2_H': 'historical',
                'D3_named_evidence_limited_escalation': 'limited',
            }[cell['specialist_disposition']],
        }
    if set(coverage) != set(areas) or any(set(cells) != set(condition_labels) for cells in coverage.values()):
        raise ValueError('Missing canonical area-condition row')
    conditions = defaultdict(dict)

    def attach(org, condition, source, evidence):
        url = provenance[source]
        if condition not in condition_labels:
            raise ValueError('Unexpected condition key')
        if safe_url(url):
            conditions[org].setdefault(condition, {})[url] = evidence

    for r in read('data/publication_contexts.csv'):
        tier = r['quality_tier']
        if tier in {'S1', 'S2', 'H'}:
            attach(r['organization_id'], r['condition_key'], r['source_id'], tier)
        elif tier == 'unappraised' and r['original_role'] == 'published_in':
            attach(r['organization_id'], r['condition_key'], r['source_id'], 'article')
    for r in read('data/network_condition_sources.csv'):
        attach(r['entity_id'], r['condition_key'], r['source_id'], 'programme')

    journals = {r['entity_id']: r['publisher_area_m49'] for r in read('data/journals.csv')}
    entries = []
    for r in read('data/institutions.csv'):
        ident, category, grade = r['entity_id'], r['category'], r['evidence_state']
        team = ident[0]
        url = provenance[r['source_id']]
        if category not in CATEGORIES or not safe_url(url):
            continue
        if team == 'A':
            if not any(p['role'] == TERRITORIAL_ROLES['census_authority_for'] for p in places[ident]):
                continue
            status = 'authority'
        elif team == 'B' and grade in SPECIALIST_IDENTITIES:
            status = 'identity'
        elif team == 'C' and category in {'journal', 'index_platform'}:
            status = 'publication'
        elif team == 'D' and category == 'network' and grade == 'VERIFIED_PRIMARY':
            status = 'network'
        else:
            continue
        role_places = list(places[ident])
        if r['domicile_m49'] in areas:
            role_places.append({'code': r['domicile_m49'], 'role': 'Recorded organization base', 'source': url})
        if journals.get(ident) in areas:
            role_places.append({'code': journals[ident], 'role': 'Recorded publisher area', 'source': url})
        english = r['english_name'] if r['english_name'] != 'unknown' else ''
        local = r['local_name'] if r['local_name'] not in {'unknown', english} else ''
        if not (english or local):
            raise ValueError(f'Missing directory name for {ident}')
        entries.append({
            'id': ident, 'type': category, 'name': english or local, 'local': local,
            'status': status, 'source': url, 'checked': r['checked_on'],
            'places': role_places,
            'conditions': {key: [{'source': u, 'evidence': e} for u, e in links.items()]
                           for key, links in conditions[ident].items()},
        })
    return {'snapshot': SNAPSHOT, 'catalog': CATALOG, 'areas': list(areas.values()),
            'coverage': dict(coverage), 'institutions': entries, 'types': CATEGORIES,
            'conditions': condition_labels}

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Compare against the committed projection.')
    args = parser.parse_args()
    try:
        data = build()
    except subprocess.CalledProcessError:
        parser.exit(1, f'Fetch the pinned Team E commit {SNAPSHOT} before rebuilding.\n')
    output = 'globalThis.AtlasPreviewData = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n'
    if args.check:
        if not TARGET.exists() or TARGET.read_text(encoding='utf-8') != output:
            parser.exit(1, 'Directory projection differs from the pinned export.\n')
    else:
        TARGET.write_text(output, encoding='utf-8')
    print(f'{len(data["areas"])} areas and {len(data["institutions"])} directory records')

if __name__ == '__main__':
    main()
