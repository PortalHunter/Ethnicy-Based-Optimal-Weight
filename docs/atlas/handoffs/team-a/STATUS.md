## Latest checkpoint — Batch 8, 2026-11-05

**73/248 areas have government-identified principal health authorities; 175 remain explicitly unresolved.** All 248 M49 countries/areas and 248 coverage rows match the official dated UNSD geography snapshot; 107 governmental health bodies, 24 sourced organizational relationships, and 136 source-provenance rows (including candidate, failed and second-check evidence). This summary supersedes older counts below.

New principal IDs: gov-242-001 (Fiji), gov-246-001 (Finland), gov-250-001 (France), gov-270-001 (The Gambia), gov-288-001 (Ghana), gov-296-001 (Kiribati), gov-308-001 (Grenada), gov-320-001 (Guatemala), gov-328-001 (Guyana), gov-372-001 (Ireland), gov-380-001 (Italy), gov-388-001 (Jamaica). New secondary bodies: gov-270-002 (The Gambia's Ministry Directorate of Health Research) and gov-288-002 (Ghana Health Service), with two internal published structural edges. Earlier failed direct-page attempts remain recorded as failed, even when an alternate official government source verified the identity. These are identity and limited institutional-remit records, **not exhaustive legal mandates**; do not infer parent-country authority or an effective date from the source alone.

Dataset commit: `413def180d3982ddae65f7cacf453017e389c5c2`. Its full five-CSV data integrity and M49 official-snapshot readback were independently checked at this exact SHA: PASS (73 identified, 175 unknown; 248 M49 matches, 107 bodies, 24 edges, 136 provenance). This accompanying checkpoint-document commit follows it; resolve its own SHA from current branch HEAD. The Python `validate.py` baseline passed in the prior batch; **Python was not independently rerun for Batch 8** because the execution sandbox could not access GitHub to clone. Quote-aware full-data JS structural tests and 17 disputed/delegated boundary sentinels passed. Maintain PR #68 as draft; no site, main or clinical code modifications.

## Earlier status notes — prior counts historical

## Current batch checkpoint — 2026-11-05

This section supersedes earlier coverage counts: **61 identified areas / 187 unresolved**, 93 health bodies, 22 sourced relationships, 111 provenance rows and 248 coverage rows. Official geography remains 248/248 compared. Provenance includes failed retrievals; 111 is not a count of verified sources.

Added gov-233-001 Estonia, gov-300-001 Greece, gov-332-001 Haiti, gov-500-001 Montserrat, gov-702-001 Singapore and gov-500-002 Montserrat Environmental Health Department; one ministry structural relationship. The standalone Montserrat source check is now integrated. All six records preserve identity/mandate limits and unknown effective dates; no parent-country delegation inferred. Fourteen access/placeholder/security failures were recorded with explicit unverified states.

Python validate.py passed against the complete datasets. Pending sources include Fiji, Finland, Ethiopia, Ghana, Gambia, Guyana, Jamaica, Guam, France, Ireland, Italy, Malaysia, Rwanda and Zambia; no failed retrieval is evidence of an absent authority. Continue remaining unknown areas in ascending M49 order, seeking alternate official sources for blocked pages. Legal/devolved/rename requirements remain in GAPS.md. The commit containing this section is the batch checkpoint; resolve exact SHA from live branch. Prior parent: 61ae4d2fdfa7e818e7560d43cae28162ca0fb902.

# Team A status — 2026-11-05

Branch: `research/atlas-team-a-20261104`; draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68. Research staging; do not merge.

| Measure | Current checkpoint |
|---|---:|
| M49 country/area rows | 248/248 |
| Official UN per-row comparisons | 248/248 |
| Geographic comparisons outstanding | 0 |
| Areas with identified principal government authority | 56 |
| Areas with unresolved authority | 192 |
| Separate governmental health-body records | 87 |
| Sourced structural relationships | 21 |
| Source provenance records, including explicit failed/candidate checks | 91 |
| Coverage rows | 248 |

## Completed this continuation

1. Geography batch committed as `4df172b19d6434cf5c2df93cb39ab1418bd790bd`, independently read back. Official English M49 overview table extracted for all 248 areas, including intermediate regions separately; name 238 corrected to Falkland Islands (Malvinas). Dated official snapshot and correction ledger committed. Historical 21-row ledger retained.
2. Authority batch: Bosnia and Herzegovina 070 state coordinator, Health Sector, health statistics department, Federation ministry, and Republika Srpska ministry; Central African Republic 140 ministry identity. Added six body records and two genuine internal structural relationships. Entity ministries are not represented as subordinates of the state ministry.
3. Recorded failed Chad HTTP 403 and Brcko timeout checks, Comoros placeholder/title concern and Myanmar competing/title uncertainty without promoting them to resolved authorities.

Python validator executed successfully against complete local files before and after changes. It now enforces key-set and field equality against the dated official M49 snapshot. Structural QA is not legal mandate certification. Source provenance includes unsuccessful investigations explicitly; 91 is not a count of verified authorities or verified sources.

## Exact checkpoint and next steps

The commit containing this file is the authority-batch checkpoint; obtain its exact SHA from current branch/PR head, independently fetch the committed files, and check for newer work before resuming. Prior verified parent: `4df172b19d6434cf5c2df93cb39ab1418bd790bd`.

Next unresolved M49 queue: 074 Bouvet; 104 Myanmar; 112 Belarus; 148 Chad; 162 Christmas Island; 166 Cocos (Keeling) Islands; 174 Comoros; 175 Mayotte; 192 Cuba, then remaining unknowns in ascending M49 order. Finish Bosnia Brcko and canton mapping, legal instruments and regulators. Follow GAPS.md and CONTINUE.md. Preserve two-source legal standards for disputed/delegated/renamed authorities. No clinical application, main, merges or patient-facing guidance changes.
