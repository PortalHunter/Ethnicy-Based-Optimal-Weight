# Team A — Data integrity, spot checks and acceptance audit
Date: 2026-11-04. Scope: research branch `research/atlas-team-a-20261104`, draft PR [#68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68).

## Structural audit of committed CSVs

Verified by reading the **committed** GitHub files and parsing them with a quote-aware CSV reader:

| Check | Observation | Result |
|---|---:|---|
| `data/countries.csv` distinct M49 codes | 248 of 248 skeleton rows | PASS, count only |
| M49 identifier format | 3 characters; unique | PASS |
| M49 010 Antarctica present and 158 not added | yes | PASS |
| UN region distribution (secondary mirror) | Africa 60; Americas 57; Asia 50; Europe 51; Oceania 29; unassigned 1 | PASS as staging distribution |
| `data/country_coverage.csv` rows | 248 | PASS |
| Official source-backed main health authorities | 34 | PARTIAL |
| Explicit unresolved main authorities | 214 | CORRECTLY MARKED |
| Distinct government health bodies with valid M49 | 55 | PASS, structural |
| Government source-backed relationship edges | 14 with existing parent and child IDs | PASS, structural |
| Provenance source records | 52 | PASS, structural |
| CSV quote handling, field counts, valid URL prefixes | no errors | PASS |
| Independent integrity checks with JavaScript over GitHub files | zero errors | PASS |
| Reproducible offline validator | `validate.py` committed | PRESENT; Python validator not independently executed in this research session |
| Official UN M49 per-area names/region/ISO exact matches | incomplete comparison | **NOT VERIFIED** |
| Complete legal mandates for all countries/territories | 214+ missing/partial | **NOT MET** |
| Second independent official source for every rename/delegated/contested body | pending | **NOT MET** |

The current directory is an **incomplete, explicitly audited research dataset**, not production-certified.

## Review by UN geographic region

| Region | M49 area skeletons | Main government authorities identified | Identity/mandate review remaining |
|---|---:|---:|---:|
| Africa | 60 | 5 | 55 |
| Americas | 57 | 9 | 48 |
| Asia | 50 | 10 | 40 |
| Europe | 51 | 8 | 43 |
| Oceania | 29 | 2 | 27 |
| Unassigned (Antarctica) | 1 | 0 | 1 |
| **Total** | **248** | **34** | **214** |

These are **geographical** counts. Nothing here implies demographic ancestry, genetic lineage, citizenship or ethnicity.

## Explicit edge-case spot checks

- **Antarctica 010**: present, has no assigned UN world region, no inferred domestic ministry or populated-area health system. **Needs treaty/station authority evidence.**
- **American Samoa 016**: own territorial government's Cabinet directory names **Department of Public Health**. Country row's parent-area M49 remains blank because legally delegated competence has not been independently corroborated. Does not imply absence of United States relationships.
- **Australia 036**: current Department of Health, Disability and Ageing distinguished from pre-2025 department title; state/territory health roles not collapsed into federal parent.
- **Brazil 076**: national `Ministério da Saúde` identified; individual state and municipal SUS administrative authorities not falsely represented as a single body.
- **China 156**: national entity is a **National Health Commission**, not a fabricated Ministry of Health; separate disease-control administration recorded after governmental reorganization.
- **Belgium 056**: federal public-health service identified; French/Dutch official names and community/regional competence flagged for specific review.
- **Denmark 208**: original official title `Sundheds- og Kirkeministeriet` (Ministry of Health and Church Affairs) and June 3 2026 reorganization recorded, rather than former Interior and Health ministry. Own ministry health agency links do not automatically establish a legally evidenced parent relationship.
- **Greenland 304; Åland 248; Caribbean Netherlands 535; Pitcairn 612**: all exist as separate M49 skeletons; unverified and **no guessed foreign parent health authority**.
- **Djibouti 262**: current ministry documented and separate supervised public-health institute and medicine purchasing body identified from government statements.
- **Western Sahara 732**: marked `UNKNOWN_REVIEW_NEEDED`; no guessed unified governmental health jurisdiction.
- **No-permanent-resident examples**: Bouvet Island 074, Heard Island/McDonald Islands 334, French Southern Territories 260, US Minor Outlying Islands 581 included; no asserted `NOT_APPLICABLE` until official legal/administrative evidence.
- **Original-language fidelity**: original script recorded for ministries wherever checked; English-only ministry identifiers explicitly marked local-language-name pending (not silently translated).

## How to repeat

From repository root:

```sh
python docs/atlas/handoffs/team-a/validate.py
```

The validator checks **structural** invariants only, not current political, legal, clinical, or institution-specific factual correctness. The next researcher should record a dated archive of the official UNSD M49 table, perform a **248-row canonical diff**, then source the remaining **214** authority records in independent 20–40 area batches. For special jurisdictions and material renames, require at least **two official confirmations** before assigning legal parent-area or institutional status.

Canonical geography: https://unstats.un.org/unsd/methodology/m49/overview/
Secondary staging mirror (not authoritative): https://github.com/datasets/country-codes/blob/main/data/country-codes.csv

**No change to clinical medical calculations or patient-facing recommendations.**
