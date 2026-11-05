# Team A status — 2026-11-05

Research branch `research/atlas-team-a-20261104`, existing draft PR https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68; base `main`. **Do not merge.**

- **248/248** M49 geographic skeletons; **21** direct official UNSD per-row checks recorded in `M49_RECONCILIATION_20261105.csv`; **227** still pending individual canonical verification.
- Geography correction: **384 Côte d’Ivoire**, replacing mirror name `Ivory Coast`, aligned in countries and coverage records.
- **54** principal governmental health authorities identified from official government sources; **194** unknown. Identification does **not** certify all legal mandates.
- **81** separately listed governmental health bodies; **19** official-source-supported relationships; **78** provenance records; **248** area coverage rows.
- New batch on 2026-11-05: 20 principal authorities: 012 Algeria; 044 Bahamas; 060 Bermuda; 068 Bolivia (Plurinational State of); 090 Solomon Islands; 092 British Virgin Islands; 096 Brunei Darussalam; 100 Bulgaria; 108 Burundi; 120 Cameroon; 132 Cabo Verde; 136 Cayman Islands; 144 Sri Lanka; 178 Congo; 180 Democratic Republic of the Congo; 184 Cook Islands; 212 Dominica; 214 Dominican Republic; 218 Ecuador; 222 El Salvador.
- Six separate agency/programme records; five official government listing links, 26 new provenance entries.
- Structural integrity verified on prospective complete CSV contents with JavaScript checks. **Python `validate.py` not executed** in connected GitHub-only environment; run locally/CI. Structural validation is not legal/clinical verification.
- Source limitations: Algeria government directory identity but mandate and Arabic title pending; Bahamas May 2026 Gazette; Cayman April 2026 HSA transfer initiated but completion unverified; Bermuda quango separate; DRC conflicting title; Congo mandate text not retrieved; Burundi, Cabo Verde, Sri Lanka, Dominican Republic rename histories incomplete.

## Next priorities

Finish **227** official UN individual-row checks and research **194** unresolved principal health authorities, beginning ascending M49 070 Bosnia and Herzegovina, 074 Bouvet Island, 104 Myanmar, 112 Belarus, 140 Central African Republic, 148 Chad, 162 Christmas Island, 166 Cocos (Keeling) Islands, 174 Comoros, 175 Mayotte, 192 Cuba. Two independent legal/government sources for renames, disputed and delegated territories. Add ministries, institutes, regulators, surveillance and statistics separately. Run offline validator and commit to same branch; no clinical app changes.


## Full M49 reconciliation checkpoint — 2026-11-05

All 248 country-or-area rows were independently extracted from the official English UNSD overview table and compared for M49 key, ISO-alpha2, ISO-alpha3, name, region and subregion. **248/248 compared; zero pending geographic comparisons.** Corrected 238 to Falkland Islands (Malvinas) in countries and coverage. See `M49_OFFICIAL_SNAPSHOT_20261105.csv` and `M49_CORRECTIONS_20261105.csv`; the earlier 21-row ledger is historical. All earlier pending-reconciliation counts above are superseded. Authority coverage remains 54 identified / 194 unknown; 81 bodies / 19 relationships / 79 provenance rows. No institutional or clinical approval follows from geography.
