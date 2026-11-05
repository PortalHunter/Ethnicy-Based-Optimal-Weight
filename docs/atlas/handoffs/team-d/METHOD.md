# Team D — Source method and overlap analysis

Checked: 2026-11-04. All user-facing clinical advice remains unchanged.

## Method
1. Start with institutional original sources: WHO regional office and WHO country pages, PAHO constitutional roster, ASEAN admission dates, Africa CDC mandate, EMA/ECDC network statements, and professional society official directories.
2. Create a node only with official title, entity type, mandate and source. If founding/effective date was not found, leave the field blank rather than using an unsourced approximate year.
3. Create an edge only when a document attests the relationship. Distinguish intergovernmental legal membership, technical cooperation, official institutional roles, society affiliation, patient advocacy, publication and research activity.
4. Record `as_of` separately from `valid_from` and `valid_to`. Store obsolete interval explicitly, as for Indonesia's historical SEARO assignment. Do not reinterpret UN classifications as WHO regions.
5. For the world map, use numeric country/area codes and separate network flags. The 249-code ISO-3166 numeric **candidate** seed requires comparison with the official [UN M49 countries/areas universe](https://unstats.un.org/unsd/methodology/m49/overview). Unverified rows are not an authoritative crosswalk.
6. Identify seven-condition institutional programmes separately from clinical evidence. Condition links are **not** evidence quality assessments and cannot be silently pushed to the public calculator.
7. Validate every cross-team organization linkage by an explicit original-identity crosswalk. Team A/B/C IDs have not yet been read or merged here.

## Demonstrated overlaps, not one-size-fits-all memberships

- `m49:360` Indonesia: ASEAN member since 1967; WHO SEARO **historical** until 2025-05-22; WHO WPRO from 2025-05-23. These are independent time-series dimensions.
- `m49:626` Timor-Leste: WHO SEARO roster and ASEAN member since 2025-10-26; both can be simultaneously true.
- `m49:012` Algeria: M49 Northern Africa but WHO AFRO. WHL also lists a professional Algerian society; that society is not the Algerian government.
- `m49:840` USA: PAHO formal member but WHO withdrawal notification under specific governance review; non-equivalent membership systems.
- PAHO is in dual institutional relationship with the WHO AMRO office and the Inter-American System.
- EU Member States, EEA EFTA states, EMA, ECDC and EU-IBD have different legal and technical relationships. Scope must be attached to the *particular* edge and programme, not deduced from the word 'Europe'.

## Outstanding unresolved joins

- Country-level WHO regional assignments for all remaining official M49 areas; WHO country offices (present/absent, separate from WHO governance).
- National competent medicines authorities and EEA direct/indirect authorization legal scope; local transposition status.
- All formal society-member rosters and organization IDs from Team B; national ministry IDs from Team A; local journal indexing from Team C.
- Program-specific participation lists in Africa/Pacific/Middle East/South Asia and study collaboration evidence links.

See `GAPS.md`, `data/network_coverage_gaps.csv` and `BOUNDARY_CASES.md`.

## 2026-11-05 geographic reconciliation update

The 248 English rows in the current UN M49 overview were extracted from rendered lines 16–263, deduplicated by three-character code and compared in both directions with the original 249 ISO candidates. No official UN row is missing from the seed; seed-only 158 is preserved in geographic_seed_exceptions.csv. un_m49_geographic_crosswalk.csv is authoritative for this captured UN overview roster, while m49_network_status.csv retains all legacy candidates for continuity. Region, governance and office presence are independent. Unknown inception dates use unknown; unreviewed status fields use not_verified. Consult BATCH_2026-11-05.md for stale-source conflicts.


## Batch 11 — catalogue/aggregate evidence and non-edges (2026-11-05)

PAHO document *listing* has a publication/title date; a PAHO local pathway label does **not** independently establish ministry authorship, legal adoption, date of entry into force, or whether its technical recommendations are currently used. Preserve two regional standards separately from 2024 country/territory/subnational titles. Three Mexico state titles stay subnational; Bermuda and BVI have distinct area M49s; do not infer their WHO regions or sovereign membership from a hypertension catalog. An ambiguous title, “DOMINICA REPUBLIC”, has no promoted M49 join. PAHO's aggregate 29 first-version national standards and separate 35 undated programme commitments cannot be disaggregated by assuming catalog titles are the signatories or adopters.

Africa CDC APPM counts **8 signed**, **15 intention**, **55 target** have distinct stages and no identified member-state roster. A signed procurement MoU does not change country pharmaceutical regulator authority. These are recorded in a separate `cross_border_programme_evidence_2026.csv` observation table, not as `network_memberships.csv` edges. All clinical pathway contents require independent evidence review before any patient-facing publication.
