#!/usr/bin/env python3
"""Offline integrity checks for the Team A governmental authority research staging atlas.

Not a claim that the 248 country rows are directly UN-verified, or that all
national ministries and devolved health authorities have been researched.
Run: python docs/atlas/handoffs/team-a/validate.py
"""
from collections import Counter
import csv
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent
EXPECTED_UN_M49_COUNTRY_AREA_COUNT = 248
EXPECTED_REGION_COUNTS = {
    "Africa": 60, "Americas": 57, "Asia": 50,
    "Europe": 51, "Oceania": 29, "": 1,
}
def load(name):
    with (ROOT / name).open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)
        if len(set(reader.fieldnames or [])) != len(reader.fieldnames or []):
            raise AssertionError(f"{name}: duplicate column name")
        for i, row in enumerate(rows, 2):
            if None in row or any(value is None for value in row.values()):
                raise AssertionError(f"{name}:{i}: wrong number of CSV fields")
        return rows

def verify():
    countries = load("data/countries.csv")
    official = load("M49_OFFICIAL_SNAPSHOT_20261105.csv")
    assert len(official) == 248 and len({r["m49_code"] for r in official}) == 248
    om = {r["m49_code"]: r for r in official}
    assert set(om) == {r["m49_code"] for r in countries}
    for row in countries:
        for field in ("iso_alpha2", "iso_alpha3", "un_name", "un_region", "un_subregion"):
            assert row[field] == om[row["m49_code"]][field], f"Official M49 mismatch {row['m49_code']} {field}"
    bodies = load("data/government_health_bodies.csv")
    relations = load("data/authority_relationships.csv")
    coverage = load("data/country_coverage.csv")
    provenance = load("PROVENANCE.csv")

    m49_codes = [r["m49_code"] for r in countries]
    assert len(countries) == EXPECTED_UN_M49_COUNTRY_AREA_COUNT, (
        f"country skeleton expected 248, got {len(countries)}")
    assert len(set(m49_codes)) == len(m49_codes), "duplicate M49 codes"
    assert all(len(c) == 3 and c.isdigit() for c in m49_codes), (
        "M49 identifiers must retain leading zeros")
    assert "010" in m49_codes, "Antarctica missing"
    assert "158" not in m49_codes, (
        "Country-code mirror includes non-UN-overview row 158: do not silently add")
    assert Counter(c["un_region"] for c in countries) == EXPECTED_REGION_COUNTS, (
        "Expected UN region distribution changed: investigate source rather than ignoring")
    assert all(len(r["iso_alpha2"]) == 2 and len(r["iso_alpha3"]) == 3
               for r in countries), "Missing or invalid ISO code length"
    assert all(r["source_url"].startswith("https://") for r in countries), (
        "Every geographic row must cite a source URL")

    country_map = {r["m49_code"]: r for r in countries}
    assert country_map["010"]["un_region"] == "", (
        "UN overview assigns no region to Antarctica")
    authority_ids = [r["record_id"] for r in bodies]
    assert len(authority_ids) == len(set(authority_ids)), "Duplicate body record ID"
    bodies_by_id = {r["record_id"]: r for r in bodies}
    assert all(r["area_m49"] in country_map for r in bodies), "Unmapped body M49"
    assert all(r["official_name_local"] or "LOCAL_NAME_PENDING" in r["verification_state"] or "LOCAL_NAMES_PENDING" in r["verification_state"]
               for r in bodies), "Original-language name blank without explicit pending flag"
    assert all(r["source_url"].startswith("https://")
               and r["official_url"].startswith("https://")
               for r in bodies), "Body missing official page link"
    assert all(r["source_language"] and r["verified_on"] and r["verification_state"]
               for r in bodies), "Body provenance fields incomplete"

    verified = 0
    for c in countries:
        links = [x for x in c["authority_record_ids"].split(";") if x]
        for body_id in links:
            assert body_id in bodies_by_id, f"Unmapped body ID {body_id}"
            assert bodies_by_id[body_id]["area_m49"] == c["m49_code"], (
                f"Cross-area body ID mismatch: {body_id}")
        if c["health_authority_resolution"] == "OFFICIAL_AUTHORITY_IDENTIFIED":
            verified += 1
            assert links and c["last_verified_utc"] and c["source_url"].startswith("https://"), (
                f"Resolved country lacks body/source/date: {c['m49_code']}")
        else:
            assert c["health_authority_resolution"] == "UNKNOWN_REVIEW_NEEDED", (
                f"Unexpected authority status: {c['m49_code']}")
            assert not links, f"Unknown authority has linked bodies: {c['m49_code']}"

    assert len(coverage) == len(countries), "Coverage ledger must have one row per area"
    assert len(set(r["m49_code"] for r in coverage)) == len(coverage)
    assert {r["m49_code"] for r in coverage} == set(m49_codes), (
        "Coverage ledger M49 keys differ from countries.csv")
    for row in coverage:
        area = country_map[row["m49_code"]]
        assert row["ministry_review_status"] == area["health_authority_resolution"], (
            f"Coverage mismatch {row['m49_code']}")
    for r in relations:
        assert r["parent_body_id"] in bodies_by_id and r["child_body_id"] in bodies_by_id, (
            "Relationship references missing body ID")
        assert r["parent_body_id"] != r["child_body_id"], (
            "Self-link in authority relationship")
        assert r["source_url"].startswith("https://") and r["review_state"], (
            "Relationship missing source or explicit review state")
    assert len(set(r["source_id"] for r in provenance)) == len(provenance)
    assert all(r["source_url"].startswith("https://") and r["source_language"]
               and r["checked_utc"] and r["verification_state"] for r in provenance)

    # Acceptance spot checks: island/territory and complex systems must be present,
    # and must NOT acquire an unsubstantiated parent-country link.
    for code in ("010", "016", "020", "086", "248", "304", "334", "344", "446", "535",
                 "581", "612", "732", "036", "076", "276"):
        assert code in country_map, f"Special-territory/devolution spot-check missing: {code}"
    assert country_map["016"]["parent_country_m49"] == "", (
        "American Samoa parent-country relationship requires independent legal corroboration")
    # Status may advance with evidence. Prevent conflating BES with another
    # constituent country, rather than permanently requiring UNKNOWN.
    bes_ids = country_map["535"]["authority_record_ids"].split(";")
    assert not any(i.startswith(("gov-531-", "gov-533-", "gov-534-"))
                   for i in bes_ids), "BES conflated with a separate Kingdom country"
    assert country_map["535"]["parent_country_m49"] == "", (
        "A scoped VWS care directorate does not prove blanket legal delegation")
    print("PASS: 248 distinct M49 country-or-area rows match dated official snapshot")
    print(f"PASS: {verified} government ministry/department identities located; "
          f"{len(countries)-verified} explicitly unresolved")
    print(f"PASS: {len(bodies)} separately identified government health bodies; "
          f"{len(relations)} sourced relationships")
    print(f"PASS: {len(coverage)} coverage records; {len(provenance)} provenance rows")
    print("PASS: region totals, reference integrity, source fields and complex-jurisdiction sentinels")
    print("LIMITATION: Integrity tests do NOT certify institutional mandates or continuing currency after the snapshot date")

if __name__ == "__main__":
    try:
        verify()
    except (AssertionError, KeyError, OSError) as error:
        print(f"FAIL: {error}", file=sys.stderr)
        sys.exit(1)
