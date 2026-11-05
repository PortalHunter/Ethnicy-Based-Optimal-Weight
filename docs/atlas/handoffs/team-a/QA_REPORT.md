## Batch 10 independent commit audit — 2026-11-05 (current)

**Audited data commit SHA:** `6a8679492553d3d24cba790608fbb3d017b7d854`. All six CSVs (five changed + official dated master) re-fetched from that **exact SHA**, parsed quote-aware, and checked independent of the in-memory write.

| Test | Outcome |
|---|---|
| 248 distinct M49 skeletons; date-stamped master has 248 | **PASS** |
| Per-row official M49 code / ISO2 / ISO3 / name / region / subregion equality | **PASS (248/248)** |
| Country status count | **PASS (85 identified, 163 explicit unknown)** |
| Governmental bodies, unique ID and M49 mapping | **PASS (126)** |
| Source-linked internal governmental relationships, valid body references | **PASS (31)** |
| Provenance ID uniqueness, primary HTTPS URI/date/language/verification fields | **PASS (167)** |
| Coverage ledger matches all 248 area statuses | **PASS (248)** |
| 20 at-risk territory/contested/parent-link sentinels | **PASS** |
| Python `python docs/atlas/handoffs/team-a/validate.py` on Batch 10 | **NOT RUN** (sandbox cannot directly checkout GitHub; historical Python pass not reused) |
| Current statutory legal/territorial mandates independently certified | **INCOMPLETE** |
| Public website, main, calculator, clinical copy | **NOT MODIFIED** |

**Method limitations:** integrity checks do not adjudicate disputed authority, parent-country delegated jurisdiction, current consolidated statutes or effective dates. Government media/portal documentation can confirm identity or limited remit, but no 2026 *proposed* decree was used as enacted authority. See Batch 10 `STATUS.md`, `GAPS.md`, `PROVENANCE.csv` and `CONTINUE.md`. Earlier QA retained below as historical, with older totals superseded.

# Team A QA — 2026-11-05

| Audit | Result |
|---|---|
| 248 country records, 248 synchronized coverage rows | PASS structural JavaScript check |
| 54 found/194 explicitly unknown governmental health authorities | PASS count; identity not complete statutory competence |
| 81 unique governmental body entries | PASS structural JavaScript check |
| 19 sourced body-to-body relations | PASS reference integrity JavaScript check |
| 78 source provenance rows | PASS required field/ID JavaScript check |
| 21 per-row official UN M49 checks | PARTIAL: 227 remaining |
| M49 384 official name Côte d’Ivoire vs Ivory Coast | CORRECTED |
| Execute repository Python `validate.py` | NOT RUN in GitHub-only connected environment |
| Confirm all legal mandates, disputed/delegated systems and original-script ministry names | INCOMPLETE |

Source limits: Bahamas May 2026 Gazette, Bermuda separate governmental institutions, Cayman April 2026 HSA public-health transfer *began* but has not been legally confirmed complete, DRC conflicting official title; precise limits in STATUS and GAPS. No clinical/app content changed.

## Historical QA (2026-11-04)

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


## Executed continuation QA — 2026-11-05

Current results supersede earlier not-executed statements: Python validate.py ran successfully before and after both batches. Official dated snapshot contains 248 unique keys and all staged codes, ISO fields, names, regions and subregions match it. No inferred delegation changes. Current counts: 248 countries and coverage rows; 56 identified areas / 192 unresolved; 87 bodies; 21 relationships; 91 provenance records, including explicitly failed/candidate checks.

Twelve isolated temporary-copy mutation checks each produced a nonzero validator exit: duplicate M49; dropped leading zero; incorrect ISO; wrong official name; wrong region; dangling body reference; missing body source; duplicate body ID; self relationship; duplicate provenance ID; coverage-state mismatch; unsupported American Samoa parent-country inference. Baseline passed after tests. These tests validate integrity constraints, not source authenticity or clinical/legal completeness.

Source retrieval limitations: Chad ministry and Primature HTTP 403; Brcko government timeout; Myanmar search-discovered competing/title ambiguity; Comoros placeholder contacts. None was promoted to a resolved authority. CAR identity corroborated by own ministry and Primature; old homepage leadership and mandate not certified. Bosnia entity bodies not encoded as subordinate to state coordinator. Geography snapshot was extracted from retrieved official English UNSD table, all 248 rows, with source table line and date retained; this is a structured factual snapshot, not a full HTML archive.

## Five-area batch validation — 2026-11-05

Python validator passed: 248 official snapshot matches; 61 identified / 187 unresolved; 93 unique bodies; 22 source-linked relationships; 248 aligned coverage rows; 111 unique provenance rows. Failed retrievals remain explicit. Six new IDs and Montserrat internal edge checked; no cross-area delegation introduced.

## 2026-11-05 — Batch 8 complete data commit QA

**Exact independently read-back data SHA:** `413def180d3982ddae65f7cacf453017e389c5c2`.

PASS: 248 unique area rows, 248 coverage rows and every official M49 snapshot key, ISO field, name, region and subregion equal. PASS: 73 identified, 175 unknown with synchronized coverage statuses and no invalid principal body references. PASS: 107 distinct body IDs with dated official-source/issuer notes. PASS: 24 internal relationship edges use valid distinct body IDs. PASS: 136 provenance IDs; three global geography sources intentionally have empty M49 code and must not be misread as missing national authority. PASS: 17 high-risk unresolved special-area checks, including Antarctica, Bouvet, Myanmar, Chad, Christmas/Cocos, Comoros, Mayotte, Caribbean Netherlands, Western Sahara; no unsupported American Samoa parent.

LIMITATION: An integrity check is not a statutory legal-mandate verification. Batch 8 used a complete quote-aware JavaScript validator and postcommit GitHub readback, **not a newly run Python `validate.py`** because the local sandbox lacks outbound GitHub clone access. Previous Python PASS applies to earlier checkpoint only. Run full Python validation on the latest branch in next executable environment; investigate and record any discrepancy.

## 2026-11-05 — Batch 9 committed-data QA report

Exact committed dataset SHA: `f0d289e1e3660212b8afd9b60c07e6450853dcfc`. All 5 CSV files independently refetched by SHA, parsed quote-aware and compared to official dated snapshot. **PASS**: 248 unique M49 and coverage keys and every staged code, ISO, name, region/subregion equals official UN snapshot; 80 resolved and 168 explicitly unknown authority states; 118 distinct valid body IDs; all 28 relationships point to distinct real government bodies with official URLs; 154 provenance rows (including three intentional global UNSD source rows with blank `area_m49`). **PASS**: 17 unresolved special legal-jurisdiction sentinels (010 074 086 104 112 148 162 166 174 175 192 334 446 535 581 612 732), plus no inferred parent links for 016 American Samoa, 238 Falklands, 316 Guam, 376 Israel. Identity and published remit cannot certify complete legal mandate or geopolitical claims.

**Execution limitation**: Batch 9 quote-aware JS validation and exact-commit readback PASS; `python docs/atlas/handoffs/team-a/validate.py` could not be rerun in the current GitHub-only execution environment (outbound clone unavailable). Previous checkpoint Python PASS is historical and does not certify this commit. Run Python on the current branch at next available full checkout and investigate any discrepancy. Preserve all earlier QA and source limitations below.
