## Current batch checkpoint — 2026-11-05

This section supersedes earlier coverage counts: **61 identified areas / 187 unresolved**, 93 health bodies, 22 sourced relationships, 111 provenance rows and 248 coverage rows. Official geography remains 248/248 compared. Provenance includes failed retrievals; 111 is not a count of verified sources.

Added gov-233-001 Estonia, gov-300-001 Greece, gov-332-001 Haiti, gov-500-001 Montserrat, gov-702-001 Singapore and gov-500-002 Montserrat Environmental Health Department; one ministry structural relationship. The standalone Montserrat source check is now integrated. All six records preserve identity/mandate limits and unknown effective dates; no parent-country delegation inferred. Fourteen access/placeholder/security failures were recorded with explicit unverified states.

Python validate.py passed against the complete datasets. Pending sources include Fiji, Finland, Ethiopia, Ghana, Gambia, Guyana, Jamaica, Guam, France, Ireland, Italy, Malaysia, Rwanda and Zambia; no failed retrieval is evidence of an absent authority. Continue remaining unknown areas in ascending M49 order, seeking alternate official sources for blocked pages. Legal/devolved/rename requirements remain in GAPS.md. The commit containing this section is the batch checkpoint; resolve exact SHA from live branch. Prior parent: 61ae4d2fdfa7e818e7560d43cae28162ca0fb902.

# Team A — Governmental health authority census

Research branch `research/atlas-team-a-20261104`; draft PR https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68. Snapshot: 2026-11-05. Exclusive scope: government/statutory health authorities; no clinical guidance or live-site edits.

- `data/countries.csv`: 248 M49 areas; 61 identified principal authorities; 192 explicit unknowns.
- `data/government_health_bodies.csv`: 87 distinct government bodies/units.
- `data/authority_relationships.csv`: 21 sourced structural relationships.
- `data/country_coverage.csv`: 248 area status rows.
- `PROVENANCE.csv`: 91 source records, including explicitly unverified or failed checks.
- `M49_OFFICIAL_SNAPSHOT_20261105.csv`: all 248 official English UNSD rows, with source/date and intermediate regions separately retained.
- `M49_CORRECTIONS_20261105.csv`: one remaining name discrepancy corrected (238).
- `M49_RECONCILIATION_20261105.csv`: preserved historical 21-row comparison.
- `STATUS.md`, `GAPS.md`, `CHANGELOG.md`, `QA_REPORT.md`, `CONTINUE.md`: checkpoint, limitations and continuation instructions.
- `validate.py`: reproducible structural validator. Run `python docs/atlas/handoffs/team-a/validate.py`.

The initial skeleton came from a community transcription; all keys, ISO codes, English names, regions and subregions now match the dated official UNSD overview. Geography is neither sovereignty nor health jurisdiction. The explicit intermediate-region column prevents treating Eastern Africa or Caribbean as the direct UN subregion field.

Identity verification does not certify complete statutory mandate. Preserve legal/devolved distinctions and require independent governmental/legal corroboration for delegation, disputed authority and renames. No guessed parent links; WHO offices do not substitute for domestic authorities. All findings remain research staging. Resume from CONTINUE.md after checking live branch head for newer commits.
