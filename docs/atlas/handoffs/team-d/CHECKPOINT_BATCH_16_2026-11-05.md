# Team D standalone checkpoint — Batch 16 — 2026-11-05

## Live authority and no-deployment constraints

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Research branch: `research/atlas-team-d-20261104`
- Open **draft**, **unmerged** pull request: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70
- Batch 16 source/data/validator commit: `2225b8a883e5fa6dc017c19eec3a6b278238e2f7`; corrective validator commit: `cae759dfc5e05648fcc0f9db62b99dd73abce301`.
- This checkpoint is written in a later documentation commit; **discover live GitHub head again** before writing.
- Team D edits ONLY `docs/atlas/handoffs/team-d/`. No edits to main, the calculator, public website, patient-facing clinical content, Team A/B/C files, or merge/close actions. No unreviewed research is medical advice.

## New Batch 16: historical SCI participation, transition, and observer boundary

Three primary WHO/Europe HTML pages were read directly on 2026-11-05:
1. **2023-06-07 WHO news** [11 countries and five named 2023 meeting observers](https://www.who.int/europe/news-room/07-06-2023-11-smallest-countries-in-who-european-region-adopt-landmark-statement-committing-to-key-actions-to-improve-people-s-health). The underlying event was 2023-05-10 through 2023-05-12. Eleven documented SCI member participants: Andorra (020), Cyprus (196), Estonia (233), Iceland (352), Latvia (428), Luxembourg (442), Malta (470), Monaco (492), Montenegro (499), San Marino (674), Slovenia (705). **Five named event observers**, NOT permanent SCI or WHO governance observers: Barbados (052), Bhutan (064), North Macedonia (807), Republic of Moldova (498), Seychelles (690).
2. **WHO April 2024 event page** [11-member pre-accession roster](https://www.who.int/europe/news-room/events/item/2024/04/11/default-calendar/tenth-high-level-meeting-of-the-small-countries-initiative--converging-on-small-country-health-priorities). Lists same eleven existing SCI countries. Meeting event is in April 2024; the **page publication date has not been independently established**.
3. **2024-06-05 WHO retrospective news** [North Macedonia's SCI accession during the April meeting](https://www.who.int/europe/news/item/05-06-2024-small-countries-pledge-action-to-improve-cancer-care-and-build-climate-resilient-health-systems). North Macedonia became the **12th member during the April 10–12, 2024 meeting**, from an explicitly named 2023 meeting observer. The precise accession **day and signed accession instrument remain unverified**. Barbados (052) and Republic of Moldova (498) were **2024 meeting observers only**.

Thirty new source-stamped historical snapshots (2023: 11 members + 5 event observers; 2024: 11 incumbents + 1 accession + 2 event observers) were appended to `data/who_europe_sci_snapshots.csv`, now **53** rows including the preserved 2022 video topic-tag list (11, NOT formal roster) and 2026 dated formal roster (12). Thirty separate typed as-of edges were appended to `data/network_memberships.csv`: **23 dated historical membership observations and 7 meeting-observer attendance edges**. The preexisting twelve 2026 edges remain separate. New edge relation `attended_voluntary_initiative_meeting_as_observer` is an **event-level role**, not `member_of`, enduring SCI observer governance status or constitutional WHO membership. Dates `2023-05-12` and `2024-04-12` are event-end **observation timestamps**, not affiliation start dates (`valid_from` and `valid_to` deliberately unset). WHO news publication dates and referenced meeting dates are distinguished in notes and provenance. No country programme adoption or clinical endorsement inferred.

New unique source IDs: **TD-SRC-146 through TD-SRC-148**; URLs added once each to `PROVENANCE.csv`. All source identifiers, M49 codes and edges validated against the checked-in crosswalk and existing node inventory.

## Retained data snapshot and scope

- **47** nodes; **616** typed source-stamped graph relationships; **148** unique primary/source URLs. SCI **53** source/temporal observations; 7 health-condition keys and 20 institutional non-appraised condition links.
- WHO geographic roster **249** candidates = 248 UN M49 official plus ISO exception 158; **205** separately verified WHO region assignments, **44** still `not_verified`. The WHO regions are administrative groupings, not United Nations geography or constitutional membership. Indonesia's WPRO shift effective 2025-05-23 and Liechtenstein boundary remain protected.
- WHO office survey: 153 labels, 106 April 2026 self-reports, 46 September 2024 responses retained, 1 unavailable; **105** M49 office hosts positively attested in April 2026; **144** other candidate areas lack this specific direct attestation, not proof of absent offices. Nine independently sourced office checks do NOT refresh surveys. **228** separately classified January 2021–December 2022 historical WHO office/services observations and **225** historical edges must not be treated as 2026 office presence.
- PAHO **44** formal governance categories and **21** cooperation service observations, with unresolved dated 14 versus undated 13 Eastern Caribbean lists, including French Saint Martin versus Dutch Sint Maarten distinction. These are not automatically local physical WHO offices or statutory jurisdiction.
- **34** EMA/EMRN agency identity candidates without independent individual legal remit confirmation; **19** EDA/regulator cooperation observations; eight aggregate APPM signed states versus 15 intentions/55 target must not be expanded into invented named participants. **24** HEARTS pathway catalog titles are not approved national implementations; six ASEAN governance rows are not national legal adoption.

## Validation and verification limits

**PASS**: The complete current `validate.mjs` assertion program was executed in an isolated JavaScript runtime with a read-only `fs.readFileSync` shim and strict assertion equivalents, using **25 Team D CSV data files plus PROVENANCE.csv** reconstructed from **live PR #70 GitHub patches**, except the two oversize CSVs `m49_network_status.csv` and `network_memberships.csv` fetched directly from GitHub branch. The validator program came from the same live PR patch. Results: 47 nodes / 616 edges / 20 condition rows / 249 status rows / 205 verified regions / 44 unresolved / 148 unique provenance rows / 53 SCI snapshots / 9 office checks, with all existing WHO, PAHO, EDA, Africa CDC, EMA and ASEAN structural assertions passing. GitHub's comparison reports the checked-in committed version after the corrected SCI 2026-only assertion `cae759d...`. This was **NOT** a literal `node docs/atlas/handoffs/team-d/validate.mjs` run in a local checkout; GitHub Actions were **NOT** run or verified. Structural PASS does NOT mean statutory, scientific, epidemiological or clinical endorsement.

Source, edge and snapshot files were retrieved from the live PR after commits; the documentation-only checkpoint commit should be read back independently. Retain the draft PR for scientific/maintainer review.

## Remaining work and priority queue

1. Find the primary signed/dated SCI accession instrument or contemporaneous meeting minutes if the **exact North Macedonia admission day** is required; 2023 observer and 2024 member roles are independently established.
2. Individually resolve **44** WHO area-to-region unknowns with direct WHO assignments; never inherit geographic parent's regional membership. Check 46 older WHO survey profiles and 144 candidates lacking April 2026 direct positives without treating missing evidence as absence.
3. Reconcile PAHO Eastern Caribbean 13/14 source discrepancy and independently verify source-retrieval limitations. Preserve technical services, formal PAHO category and actual physical office distinctions.
4. Find signed regulatory instruments and statutory remits for EDA/UPA, exact Team A identifiers, other seven unnamed APPM signatory states and fifteen intent countries, and each EMA competent authority; do not infer implementation from an MoU.
5. Confirm country-specific HEARTS adoption and ASEAN programme implementation with dated sources; complete exact Team B/C organization joins and seven-condition scientific-network coverage without clinical appraisal.
6. Run the **literal native Node** validator in a proper checkout and any applicable GitHub Actions; periodically re-fetch and revalidate all data; keep the PR **open, draft, unmerged**.

## Exact continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
