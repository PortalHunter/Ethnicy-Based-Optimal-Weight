#!/usr/bin/env python3
"""Project sourced Team E connections and Natural Earth geography onto the globe."""
import argparse
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

WHO = 'https://www.who.int/about/contact-us'
HUBS = {
    'D:WHO': (6.14, 46.20, 'Geneva', WHO),
    'D:WHO_AFRO': (15.27, -4.26, 'Brazzaville', WHO),
    'D:WHO_AMRO': (-77.04, 38.91, 'Washington, DC', WHO),
    'D:WHO_EMRO': (31.24, 30.04, 'Cairo', WHO),
    'D:WHO_EURO': (12.57, 55.68, 'Copenhagen', WHO),
    'D:WHO_SEARO': (77.21, 28.61, 'New Delhi', WHO),
    'D:WHO_WPRO': (120.98, 14.59, 'Manila', WHO),
    'D:PAHO': (-77.04, 38.91, 'Washington, DC', 'https://www.paho.org/en/countries-and-centers'),
    'D:ASEAN': (106.85, -6.20, 'Jakarta', 'https://asean.org/wp-content/uploads/2025/07/Agreement-on-the-Establishment-of-the-ASEAN-Secretariat.pdf'),
    'D:EMA': (4.90, 52.37, 'Amsterdam', 'https://www.ema.europa.eu/en/about-us/contacts-european-medicines-agency'),
}
KINDS = {
    'WHO_region': ('coverage', 'WHO regional assignment'),
    'regional_office_of': ('organization', 'Regional office of'),
    'serves_as': ('organization', 'Serves as'),
    'member_of': ('membership', 'Member of'),
    'receives_technical_cooperation_from': ('cooperation', 'Receives technical cooperation from'),
    'cooperates_with': ('cooperation', 'Cooperates with'),
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
    for code, (lon, lat, city, source) in HUBS.items():
        if code in institutions:
            nodes[code] = {'title': institutions[code]['name'], 'position': [lon, lat], 'location': city, 'locationSource': source}
    base_role = 'Recorded organization base'
    for code, institution in institutions.items():
        if not code.startswith('B:'):
            continue
        base = next((p for p in institution['places'] if p['role'] == base_role), None)
        if base and 'm49:' + base['code'] in nodes:
            anchor = nodes['m49:' + base['code']]
            nodes[code] = {
                'title': institution['name'], 'position': anchor['position'],
                'location': anchor['title'] + ' · area-level placement', 'locationSource': base['source'],
                'area': base['code'],
            }

    references = {r['source_id']: r['url'] for r in directory.read('PROVENANCE.csv')}
    edges = []
    for relation in directory.read('data/relationships.csv'):
        left = relation['subject_id']
        right = relation['object_id']
        rel = relation['relationship_type']
        if left not in nodes or right not in nodes or relation['normalized_to']:
            continue
        if (rel.startswith('cross_border:') and left.startswith('B:') and right.startswith('m49:')
                and relation['evidence_state'] in CROSS_BORDER_EVIDENCE):
            kind, title = 'cooperation', 'Cross-border service or representation'
        elif relation['evidence_state'] == 'VERIFIED_PRIMARY' and rel in KINDS:
            kind, title = KINDS[rel]
        else:
            continue
        reference = references[relation['source_id']]
        if not directory.safe_url(reference):
            continue
        edges.append({
            'id': relation['edge_id'], 'left': left, 'right': right, 'kind': kind, 'label': title,
            'source': reference, 'observed': relation['observed_on'],
        })
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
    return {'nodes': {key: node for key, node in nodes.items() if key in retained},
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
    print(f'{len(data["nodes"])} mapped endpoints and {len(data["edges"])} documented connections')

if __name__ == '__main__':
    main()
