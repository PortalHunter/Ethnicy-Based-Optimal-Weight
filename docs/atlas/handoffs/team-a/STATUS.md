# Team A status — 2026-11-04

- **State:** OPEN / partial research, draft PR [#68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68). Do not merge without maintainer review.
- **Branch:** `research/atlas-team-a-20261104`; base `main`.
- **Geography:** **248 / 248** expected UN M49 country-or-area skeleton rows staged from documented secondary metadata; verified against the [UNSD overview](https://unstats.un.org/unsd/methodology/m49/overview/) for table count and high-level distribution, **NOT row-by-row formally verified**. 60 Africa, 57 Americas, 50 Asia, 51 Europe, 29 Oceania, one unassigned Antarctica.
- **Authority coverage:** **19 / 248** governmental health ministries/competent departments linked to official domestic government sites; **229 / 248** have explicitly unresolved authority status. These 19 are identity/mandate-page checks, not complete governmental systems verified.
- **Government health bodies:** **29** distinct official source-linked ministry/agency/laboratory/regulator/statistics records (19 principal plus 10 distinct institute/agency records).
- **Organization relationships:** **9** source-linked direct structural or subordinate-sector listings; no guessed delegation or parent-area relationship.
- **Provenance:** **26** government/UN/secondary source records, with source issuer, title, language, reviewed date, geographic scope, status, limitations.
- **UN M49 codes:** 3-character text preserving leading zeros. Geography source mirror contained one non-UN-overview ISO area 158 and was filtered; current official overview has 248 entries. Geography text fields still require full canonical reconciliation.
- **Tests:** `validate.py` added for offline reproducible integrity checks; structural audits of committed CSVs confirmed 248 unique M49 codes, 248 coverage rows, 29 body IDs and 9 valid relationship cross-references. This is not proof of authority legal accuracy.
- **Safety:** no changes to the website, medical formulas, patient guidance, individualized ancestry interpretation or private data.

## Newly source-checked areas in batch 2 (14)

004 Afghanistan, 008 Albania, 016 American Samoa, 020 Andorra, 024 Angola, 028 Antigua and Barbuda, 031 Azerbaijan, 032 Argentina, 040 Austria, 051 Armenia, 052 Barbados, 056 Belgium, 064 Bhutan, 072 Botswana.

In combination with the initial five: 036 Australia, 076 Brazil, 276 Germany, 392 Japan, 710 South Africa.

**Important:** Some official English-language ministry websites have their local-script names pending; Albania, Antigua and Barbuda, Austria and Armenia require legal gazette/rename follow-up. American Samoa territorial competence is documented, but a legal parent M49 key is **not** asserted. For Belgian, German, Austrian, Brazilian and Australian devolved health authorities, national-only source checks are incomplete.

## Next independent batch

1. Download/compare each of 248 M49 geography rows directly with official UNSD dated master; document corrections separately.
2. Work 20–40 country/area authority records per commit, in M49 order, with local-language mandate links; use official legal acts for names and devolved structures.
3. Target the **229 unresolved** national/territorial authorities and add their medicines regulators, public-health institutes, biomedical councils, and surveillance/data units.
4. Two independent authoritative checks for legal delegation, contested jurisdiction and significant ministry name changes. Populate parent-area M49 and agency relationship rows only after direct evidence; keep unknown explicit.
5. Update `PROVENANCE.csv`, `GAPS.md`, `data/country_coverage.csv`, and this file with accurate counts after every batch.

**NOT a complete worldwide verified ministry list. NOT approved for patient-facing clinical use.**
