#!/usr/bin/env python3
"""Project sourced Team E connections and Natural Earth geography onto the globe."""
import argparse
import csv
from collections import defaultdict
from itertools import combinations
import hashlib
import json
import math
from pathlib import Path

from importlib.util import module_from_spec, spec_from_file_location

directory_path = Path(__file__).with_name('build-atlas-preview.py')
spec = spec_from_file_location('atlas_directory_export', directory_path)
directory = module_from_spec(spec)
spec.loader.exec_module(directory)

# Types retain their direction from the pinned Team E relationship ledger.
KINDS = {
    'WHO_region': ('coverage', 'WHO regional assignment'),
    'regional_office_of': ('organization', 'Regional office of'),
    'serves_as': ('organization', 'Serves as'),
    'agency_of': ('organization', 'Agency of'),
    'specialized_health_agency_of': ('organization', 'Specialized health agency of'),
    'operated_by': ('organization', 'Operated by'),
    'coordinated_by': ('organization', 'Coordinated by'),
    'coordinates_regulatory_network': ('organization', 'Coordinates regulatory network'),
    'regional_implementation_of': ('organization', 'Regional implementation of'),
    'published_by': ('organization', 'Published by'),
    'endorsed_by_regional_committee': ('organization', 'Endorsed by regional committee'),
    'member_of': ('membership', 'Member of'),
    'associate_member_of': ('membership', 'Associate member of'),
    'affiliated_society_of': ('membership', 'Affiliated society of'),
    'participating_state_of': ('membership', 'Participating state of'),
    'observer_state_of': ('membership', 'Observer state of'),
    'participates_in': ('cooperation', 'Participates in'),
    'participates_in_voluntary_health_initiative': ('cooperation', 'Participates in voluntary health initiative'),
    'attended_voluntary_initiative_meeting_as_observer': ('cooperation', 'Attended voluntary initiative as observer'),
    'receives_technical_cooperation_from': ('office', 'Receives technical cooperation from'),
    'covered_by_multicountry_office': ('office', 'Multicountry office coverage reported'),
    'covered_by_regional_office_focal_point': ('office', 'Regional focal-point coverage reported'),
    'cooperates_with': ('cooperation', 'Cooperates with'),
}
AUTHORITY_KINDS = {
    'census_authority_for': 'Census-identified health authority for',
    'scoped_authority_for': 'Documented shared or limited health remit in',
}
CROSS_BORDER_EVIDENCE = {
    'campaign_report_of_delivered_activity', 'primary_own_scope_verified',
    'primary_own_locations_verified', 'first_party_named_target_and_partner',
}
FILES = {
    'land': '9e0729ee253ca7d7a5c4ae9395fb1902264c5377c52e224d13dd85010e2835d9',
    'countries': '3e458fc036ad0a66411f2c1e6cac49c5d7bfb81cb1123bc513b22511a2b7fdeb',
}
TARGET = directory.ROOT / 'atlas-preview/globe-data.js'

def dataset(path, key):
    payload = path.read_bytes()
    if hashlib.sha256(payload).hexdigest() != FILES[key]:
        raise ValueError(f'Unexpected Natural Earth checksum for {key}')
    return json.loads(payload)['features']

def inside(x, y, ring):
    hit = False
    a = ring[-1]
    for b in ring:
        if (a[1] > y) != (b[1] > y):
            if x < (b[0]-a[0]) * (y-a[1]) / (b[1]-a[1]) + a[0]:
                hit = not hit
        a = b
    return hit

def cartography(features):
    rings = []
    dots = []
    bounds = []
    for feature in features:
        geometry = feature['geometry']
        polygons = geometry['coordinates'] if geometry['type'] == 'MultiPolygon' else [geometry['coordinates']]
        for outer, *holes in polygons:
            x, y = zip(*outer)
            bounds.append((min(x), max(x), min(y), max(y), outer, holes))
            rings.append([[round(lon, 2), round(lat, 2)] for lon, lat, *_ in outer])
    for lat in range(-85, 86, 3):
        width = max(3, round(120 * math.cos(math.radians(lat))))
        for i in range(width):
            lon = (i + (0.5 if lat % 2 else 0)) * 360 / width - 180
            if any(x0 <= lon <= x1 and y0 <= lat <= y1 and inside(lon, lat, outer)
                   and not any(inside(lon, lat, hole) for hole in holes)
                   for x0, x1, y0, y1, outer, holes in bounds):
                dots.append([round(lon, 2), lat])
    return rings, dots

def build(land, countries):
    data = directory.build()
    area_by_iso = {r['iso3']: r for r in data['areas']}
    institutions = {r['id']: r for r in data['institutions']}
    nodes = {}
    seen_areas = set()
    for feature in countries:
        p = feature['properties']
        area = area_by_iso.get(p['ISO_A3_EH'])
        if not area or area['code'] in seen_areas:
            continue
        seen_areas.add(area['code'])
        nodes['m49:' + area['code']] = {
            'title': area['name'], 'position': [round(p['LABEL_X'], 2), round(p['LABEL_Y'], 2)],
            'location': 'Representative area point', 'area': area['code'],
        }
    for code, institution in institutions.items():
        if code.startswith(('A:', 'D:')):
            nodes[code] = {'title': institution['name'], 'position': None, 'location': 'Office location not documented on this globe'}
    for area in data['areas']:
        nodes.setdefault('m49:' + area['code'], {
            'title': area['name'], 'position': None, 'area': area['code'],
            'location': 'Representative area point unavailable',
        })

    sites = directory.ROOT / 'atlas-preview/office-locations.csv'
    office_edges = []
    office_ids = set()
    with sites.open(encoding='utf-8', newline='') as stream:
        for site in csv.DictReader(stream):
            code, precision = site['id'], site['precision']
            reference, pin_reference = site['source'], site['coordinate_source']
            lon, lat = float(site['longitude']), float(site['latitude'])
            if (not directory.safe_url(reference) or abs(lon) > 180 or abs(lat) > 90
                    or code in office_ids or precision not in {'site', 'street', 'district', 'city'}
                    or (precision in {'site', 'street'} and not (site['address'] and directory.safe_url(pin_reference)))):
                raise ValueError(f'Unqualified location for {code}')
            office_ids.add(code)
            if code in nodes:
                title = nodes[code]['title'].removesuffix(' (translated_by_reviewer)')
            elif code.startswith('office:') and site['name']:
                title = site['name']
            else:
                raise ValueError(f'Unknown office {code}')
            nodes[code] = {
                'title': title, 'position': [lon, lat], 'location': site['location'],
                'address': site['address'], 'precision': precision, 'locationSource': reference,
            }
            if pin_reference:
                nodes[code]['coordinateSource'] = pin_reference
            if site['parent']:
                if site['parent'] not in institutions or site['parent'] == code:
                    raise ValueError(f'Unknown parent for {code}')
                office_edges.append({
                    'id': f'office-parent:{code}', 'left': code, 'right': site['parent'],
                    'kind': 'organization', 'label': 'Office of', 'source': reference,
                    'observed': '2026-11-26',
                })

    base_role = 'Recorded organization base'
    for code, institution in institutions.items():
        if not code.startswith('B:'):
            continue
        base = next((p for p in institution['places'] if p['role'] == base_role), None)
        if base and nodes['m49:' + base['code']]['position']:
            anchor = nodes['m49:' + base['code']]
            nodes[code] = {
                'title': institution['name'], 'position': anchor['position'],
                'location': anchor['title'] + ' · area-level placement', 'locationSource': base['source'],
                'area': base['code'],
            }

    references = {r['source_id']: r['url'] for r in directory.read('PROVENANCE.csv')}
    edges = office_edges
    for relation in directory.read('data/relationships.csv'):
        left = relation['subject_id']
        right = relation['object_id']
        rel = relation['relationship_type']
        if left not in nodes or right not in nodes or relation['normalized_to']:
            continue
        if (rel.startswith('cross_border:') and left.startswith('B:') and right.startswith('m49:')
                and relation['evidence_state'] in CROSS_BORDER_EVIDENCE):
            kind, title = 'cooperation', 'Cross-border service or representation'
        elif rel in AUTHORITY_KINDS and left.startswith('A:') and right.startswith('m49:'):
            kind, title = 'authority', AUTHORITY_KINDS[rel]
        elif rel == 'receives_technical_cooperation_from' and relation['evidence_state'] == 'OFFICIAL_PAHO_INDEXED':
            kind, title = KINDS[rel]
        elif relation['evidence_state'] == 'VERIFIED_PRIMARY' and rel in KINDS:
            kind, title = KINDS[rel]
        else:
            continue
        reference = references[relation['source_id']]
        if not directory.safe_url(reference):
            continue
        edge = {
            'id': relation['edge_id'], 'left': left, 'right': right, 'kind': kind, 'label': title,
            'source': reference, 'observed': relation['observed_on'],
        }
        if relation['normalized_from']:
            edge['effective'] = relation['normalized_from']
        if kind == 'authority' and relation['institutional_context']:
            edge['scope'] = relation['institutional_context']
        edges.append(edge)
    # Only draw a shared research record when both attributed authorship roles
    # cite the exact same primary document. Hosting and similar topics do not join.
    publications = defaultdict(set)
    for context in directory.read('data/publication_contexts.csv'):
        author = context['organization_id']
        url = references[context['source_id']]
        if (author in nodes and author.startswith('B:') and context['original_role'] == 'authored'
                and context['quality_tier'] in {'S1', 'S2'} and directory.safe_url(url)):
            publications[context['publication_id'], url].add(author)
    for (publication, url), authors in sorted(publications.items()):
        for left, right in combinations(sorted(authors), 2):
            if nodes[left]['area'] == nodes[right]['area']:
                continue
            edges.append({
                'id': f'research:{publication}:{left}:{right}', 'left': left, 'right': right,
                'kind': 'research', 'label': 'Attributed authorship in a shared research publication',
                'source': url, 'observed': '',
            })
    edges.sort(key=lambda edge: (edge['kind'], nodes[edge['left']]['title'], nodes[edge['right']]['title'], edge['id']))
    retained = {e[k] for e in edges for k in ('left', 'right')}
    rings, dots = cartography(land)
    return {'nodes': {key: node for key, node in nodes.items() if key in retained or 'precision' in node},
            'edges': edges, 'coasts': rings, 'dots': dots}

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('land', type=Path)
    parser.add_argument('countries', type=Path)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    data = build(dataset(args.land, 'land'), dataset(args.countries, 'countries'))
    result = 'globalThis.AtlasGlobeData = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n'
    if args.check:
        if TARGET.read_text(encoding='utf-8') != result:
            parser.exit(1, 'Globe projection differs from the pinned inputs.\n')
    else:
        TARGET.write_text(result, encoding='utf-8')
    positioned = {key for key, node in data['nodes'].items() if node['position']}
    mapped = sum(edge['left'] in positioned and edge['right'] in positioned for edge in data['edges'])
    print(f'{len(data["edges"])} documented connections, {mapped} mappable, {len(positioned)} positioned endpoints')

if __name__ == '__main__':
    main()
