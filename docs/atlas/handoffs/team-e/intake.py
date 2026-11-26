"""Read immutable Git inputs and verify the common geographic key set."""
import csv
import hashlib
import io
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent
INPUTS = json.loads((ROOT / 'inputs.json').read_text())
REPO = ROOT.parents[3]
INVENTORY = {}

def payload(team, path):
    spec = INPUTS[team]
    full = spec['prefix'] + path
    data = subprocess.check_output(['git', '-C', str(REPO), 'show', f"{spec['sha']}:{full}"])
    INVENTORY[team, path] = dict(team=team, commit=spec['sha'], path=full,
                                 sha256=hashlib.sha256(data).hexdigest())
    return data.decode('utf-8-sig')

def rows(team, path):
    data = csv.DictReader(io.StringIO(payload(team, path), newline=''))
    values = list(data)
    assert data.fieldnames and len(data.fieldnames) == len(set(data.fieldnames)), (team, path)
    assert all(None not in row and None not in row.values() for row in values), (team, path)
    INVENTORY[team, path].update(records=len(values), fields=data.fieldnames)
    return values

def output(path, data):
    with (ROOT / path).open('w', encoding='utf-8', newline='') as handle:
        writer = csv.DictWriter(handle, list(data[0]), lineterminator='\n')
        writer.writeheader()
        writer.writerows(data)

GEOGRAPHY = dict(A=('data/countries.csv', 'm49_code', 'un_name', 'un_region', 'un_subregion'),
                 B=('data/m49_verified_overview.csv', 'm49_code', 'country_area_name', 'un_region_name', 'un_subregion_name'),
                 C=('data/areas_m49.csv', 'area_m49', 'area_name', 'un_region', 'un_subregion'),
                 D=('data/un_m49_geographic_crosswalk.csv', 'm49_code', 'country_area_name_un', 'un_region', 'un_subregion'))

def geography():
    versioned = {}
    for team, (path, key, name, region, subregion) in GEOGRAPHY.items():
        data = rows(team, path)
        def value(row, column):
            return '' if row[column] in {'not_applicable', 'not_assigned_in_source'} else row[column]
        versioned[team] = {
            r[key]: (r['iso_alpha2'], r['iso_alpha3'], r[name], value(r, region), value(r, subregion))
            for r in data
        }
        assert len(data) == len(versioned[team]) == 248, team
    canonical = versioned['A']
    assert all(set(data) == set(canonical) for data in versioned.values())
    assert all(len({r[i] for r in canonical.values()}) == 248 for i in (0, 1))
    result = []
    for key, (a2, a3, name, region, subregion) in sorted(canonical.items()):
        mismatch = [team for team, table in versioned.items() if table[key] != canonical[key]]
        for table in versioned.values():
            assert table[key][:2] == (a2, a3)
            assert table[key][3:] == (region, subregion)
        result.append(dict(m49=key, iso_alpha2=a2, iso_alpha3=a3, un_name=name, un_region=region,
                           un_subregion=subregion, in_A=1, in_B=1, in_C=1, in_D=1,
                           name_variants_in='|'.join(mismatch)))
    return result

if __name__ == '__main__':
    output('data/m49_integrity.csv', geography())
