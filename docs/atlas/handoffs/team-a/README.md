## Latest research checkpoint — Batch 10, 2026-11-05

**85/248** authority identities found; **163** explicitly unresolved; **248/248** official M49 geography; **126** government health bodies; **31** documented internal relationships; **167** provenance rows; **248** coverage rows. Last dataset commit `6a8679492553d3d24cba790608fbb3d017b7d854`. Batch 10 includes Chad, Ethiopia, Gabon, Georgia and India, plus Ethiopian Public Health Institute and two Indian federal health entities. These figures supersede historical totals below; verified identity **does not certify legal responsibility**. Government/legislative source caveats and failures are preserved; no guessed territory parent links or clinical implications. Official geography and references passed independent exact-commit quote-aware readback; Python validator is outstanding for Batch 10.

**Restart exclusively from [CONTINUE.md](CONTINUE.md)**, [GAPS.md](GAPS.md), [QA_REPORT.md](QA_REPORT.md), current CSV datasets and the original Team A assignment. This remains a draft-only research staging PR; do not merge or edit production.

## Current official-source checkpoint — Batch 9 (2026-11-05)

**Authority identity coverage: 80/248 M49 country/area principal governmental health authorities identified; 168 explicitly unresolved.** Dated official UN M49 comparison remains **248/248** complete (country keys, ISO, English names and region/subregion). Current normalized files hold 118 governmental bodies, 28 sourced within-government relationships, 154 provenance rows including failed and corroboration attempts, and 248 area coverage rows. Counts supersede older summaries below; source provenance quantity is not a count of fully legally certified mandates.

Batch 9: 238 Falkland Islands (Malvinas) gov-238-001; 316 Guam gov-316-001; 340 Honduras gov-340-001; 360 Indonesia gov-360-001; 376 Israel gov-376-001; 398 Kazakhstan gov-398-001; 404 Kenya gov-404-001. Added subordinate governmental public-health departments: gov-238-002 Falkland Islands Public Health Unit; gov-316-002 Guam Division of Public Health; gov-404-002 Kenya State Department for Medical Services; gov-404-003 Kenya State Department for Public Health and Professional Standards; four within-area source-backed organizational links. National or territorial authority identity is **not** legal proof of an exclusive health jurisdiction; the Falkland Islands territorial sovereignty dispute, Guam federal/territorial legal responsibilities, Israeli/Palestinian area jurisdiction and Kenya county devolution remain qualified, with no guessed parent-area M49 assignments. Earlier provenance/source failures and legal caveats are preserved.

Dataset commit `f0d289e1e3660212b8afd9b60c07e6450853dcfc` passed independent exact-SHA GitHub readback of all 5 data CSVs and official dated M49 snapshot: all 248 geographic fields match, 80/168 status counts, all 118 body IDs and 28 organizational relationships coherent, and 154 provenance entries present. Quote-aware JS structural validation and 17 territorial/competing-authority boundary sentinels passed. **Python validate.py was not freshly run** on Batch 9 because this execution environment cannot clone the GitHub repository; earlier Python PASS refers to the prior checkpoint. The accompanying checkpoint-document commit comes after the data commit; verify live branch HEAD before writing again.

## Prior README historical context (earlier counts superseded)

## Latest checkpoint — Batch 8, 2026-11-05

**73/248 areas have government-identified principal health authorities; 175 remain explicitly unresolved.** All 248 M49 countries/areas and 248 coverage rows match the official dated UNSD geography snapshot; 107 governmental health bodies, 24 sourced organizational relationships, and 136 source-provenance rows (including candidate, failed and second-check evidence). This summary supersedes older counts below.

New principal IDs: gov-242-001 (Fiji), gov-246-001 (Finland), gov-250-001 (France), gov-270-001 (The Gambia), gov-288-001 (Ghana), gov-296-001 (Kiribati), gov-308-001 (Grenada), gov-320-001 (Guatemala), gov-328-001 (Guyana), gov-372-001 (Ireland), gov-380-001 (Italy), gov-388-001 (Jamaica). New secondary bodies: gov-270-002 (The Gambia's Ministry Directorate of Health Research) and gov-288-002 (Ghana Health Service), with two internal published structural edges. Earlier failed direct-page attempts remain recorded as failed, even when an alternate official government source verified the identity. These are identity and limited institutional-remit records, **not exhaustive legal mandates**; do not infer parent-country authority or an effective date from the source alone.

Dataset commit: `413def180d3982ddae65f7cacf453017e389c5c2`. Its full five-CSV data integrity and M49 official-snapshot readback were independently checked at this exact SHA: PASS (73 identified, 175 unknown; 248 M49 matches, 107 bodies, 24 edges, 136 provenance). This accompanying checkpoint-document commit follows it; resolve its own SHA from current branch HEAD. The Python `validate.py` baseline passed in the prior batch; **Python was not independently rerun for Batch 8** because the execution sandbox could not access GitHub to clone. Quote-aware full-data JS structural tests and 17 disputed/delegated boundary sentinels passed. Maintain PR #68 as draft; no site, main or clinical code modifications.

## Earlier README notes — prior counts historical

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
