# Research Team B — structural validation record

Run date: **2026-11-04**. Scope: committed CSV files in `docs/atlas/handoffs/team-b/` after three research batches. **Result: 0 CSV structural failures.** This report does not certify research quality, live link permanence, legal mandates, geographic completeness of organization discovery, clinical applicability or permission to reuse copyrighted publications.

## Assertions actually checked

| Rule | Result |
|---|---|
| Seven exact condition keys `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis` | Pass |
| M49 area-code row count and uniqueness | 248, pass |
| M49×condition row count and unique composite key | 1,736, pass |
| Organization ID uniqueness and known area references | 60, pass |
| Publication organization foreign keys and seven-condition constraints | 60, pass |
| Publication title, original-language field, URL, relationship and review-state present | Pass |
| Organization HTTPS official and source URLs, language, checked date, identity state populated | Pass (syntactic only) |
| Condition area cells with source evidence agree with source records | 57 positive, pass |
| All remaining coverage rows labeled `not_yet_researched` | 1,679, pass |
| Separate subnational/Indigenous source entities | 3, pass |
| Provenance index count | 121, recorded |
| Clinical approval | 0 |

## Important checks not claimed as passed

- Current UNSD machine-readable M49 export comparison; the local 248-code roster is **pending** a reproducible independent diff.
- Real-time HTTP success of **all** distinct source URLs, redirected canonical destinations, inactive or archived endpoints. Verified from official website pages during research, but full crawl not performed.
- Country/subnational jurisdiction-specific guideline legal validity, recency/supersession, conflict of interest, authorship and copyright licensing.
- Clinical study sampling and risk-of-bias appraisal; no ethnicity- or genetic-risk inferencing is approved.
- Review of medical positions by licensed clinicians or human maintainers.

## Reproducible developer checks

Parse each CSV according to RFC 4180; enforce expected header fields from `README.md`; ensure each organization ID unique; verify `area_m49` exists in area index; `condition_organizations.org_id` and `publication_context.org_id` reference a real organization; join each condition row to its source country's M49 code and confirm the corresponding coverage cell records positive discovery. Count coverage `not_yet_researched` explicitly. Flag any discontinued organization or duplicate consortium publication before presenting current sources. Do not conflate external host, contributor, author, funder and clinical regulator.

## 2026-11-05 — Batch 4 structural check (local in-memory, pre-commit)

- Checks executed: M49 count (248), seven-condition matrix count and unique composite keys (1,736), organization ID uniqueness (71), publication-to-organization ID and condition joins (67), HTTPS publication URLs, positive-vs-unresearched cell count (64/1672), publication-context row count (67).
- Result: **0 observed structural check failures**; counts and indexed foreign keys passed. This does **not** establish complete M49 code-set equivalence, external link accessibility, legal identity, resource authenticity or guideline medical validity.
- Pending: full UNSD numeric roster diff, actual live HTTP crawl, source-governance and publication copyright review; Ghana co-authorship/copyright, Barbados page accuracy, Tanzania/Zanzibar remit, historical Netherlands NDF status re-audit.

## 2026-11-05 — Batch 5 enhanced structural QA, prior to commit

- Checked 248 unique roster identifiers, all seven exact condition keys per M49 area, 1,736 unique composite keys, 84 unique organization IDs and valid M49 foreign keys, 74 condition resources and matched publication-context records, positive source-coverage support (70), 1666 explicit unresearched cells, 159 unique provenance IDs with metadata, official HTTPS URL syntax for organization and publication references, retained original organizational identity states, and 3 unchanged community-specific records.
- **Result: 0 structural errors**; all scripted in-memory structural assertions passed.
- Explicit pending external checks: UNSD independent machine-readable M49 code-set diff; complete live-link crawl and redirect audit; original third-party identity verification for IDF/ISE-only profiles; copyright and medical-scientific review; Samoa ethics discrepancy, Panama supersession, Uzbekistan association continuity. Structural integrity does not mean scientific validity.

## Batch 6 — 2026-11-05

CSV quote/width parsing; unique organization/provenance/resource keys; 248 M49 references; 1736 unique area×condition keys with seven keys each; organization area references; publication and context joins; publication URL presence in provenance; exact findings_count agreement; unsupported positive-cell rejection; HTTPS syntax and metadata: **0 failures after corrections**. Counts: {"organizations":88,"areas":54,"resources":78,"positive":73,"unresearched":1663,"provenance":168,"conditions":{"diabetes":38,"hypertension":12,"high_chol":6,"gout":4,"lactose":2,"celiac":8,"hemochromatosis":3},"structuralErrors":0}.

New checks detected two old Samoa publication rows with blank notes and prose in review-state, plus two blank provenance notes. Restored typed uncertainty status and narrative notes. Hypertension MANUIA state corrected to specialist_research_only, consistent with its diabetes arm and no published results. Prior blanket metadata-pass statements were too broad for these fields.

Targeted first-party page/catalogue checks covered four new resources. Not a comprehensive live crawl, independent UNSD export diff, full-text appraisal or clinical approval. Fourteen boundary examples retained in GAPS.md.

## Batch 7 — 2026-11-05

Repeated all batch-6 structural checks against updated seven CSV tables: **0 failures**. {"organizations":92,"areas":58,"resources":81,"positive":76,"unresearched":1660,"provenance":175,"conditions":{"diabetes":40,"hypertension":12,"high_chol":6,"gout":4,"lactose":2,"celiac":9,"hemochromatosis":3},"structuralErrors":0}. Three Indigenous/community rows unchanged. Guernsey identity has no resource so all its coverage cells remain unresearched. Separate territory M49 codes verified against retained roster; no independent fresh UNSD diff claimed. Targeted first-party URL inspection covered Bermuda/Jersey/Uruguay; Guernsey own-site retrieval failed and directory explicitly disclaims registration currency. No full external link crawl, underlying screening-PDF methods appraisal or clinical endorsement.

## Batch 8 — 2026-11-05

Added validate.mjs with CSV parsing, row widths, unique scoped/composite keys, 248×7 keys, organization/M49/provenance joins, publication-context relation alignment, exact resource findings_count, no unsupported coverage promotion, research_lead_only boundaries, HTTPS syntax and search-log metadata checks. **Core evaluated in orchestration runtime: 0 failures** against all eight CSVs. Node CLI wrapper provided but not independently executed. Metrics {"organizations":112,"areas":72,"resources":95,"positive":89,"unresearched":1647,"provenance":209,"search_log":20,"community":3,"by_condition":{"diabetes":40,"hypertension":12,"high_chol":6,"gout":4,"lactose":2,"celiac":22,"hemochromatosis":3}}.

Targeted first-party discovery for 20 identities; five remained directory-only, one identity-only. Fourteen resource pages/catalogues indexed; no scientific quality certification, underlying full-text review, live crawl or independent UNSD machine-readable diff claimed. Existing 14 boundary examples retained. Search log distinguishes retrieval failures from absence.
