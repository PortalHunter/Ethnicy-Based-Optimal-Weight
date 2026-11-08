# Team D standalone checkpoint — Batch 15, 5 November 2026

**Batch 15 precision correction:** research evidence dates are separated from publication dates. The Montenegro WHO event starts 2026-06-16, but the page publication date was not independently established. CSV column renamed `source_evidence_date` (not `source_published_on`); new validator assertion records `PUBLICATION_DATE_UNKNOWN`. Data/provenance/validator correction commit `7b9cfd7c7d774ad9ce182cf490370a759ce7288b`. A separate independent targeted cross-file audit of 12 CSV datasets passed (47 nodes, 586 typed edges, 145 unique sources, 249 area candidates, 205 verified/44 unverified WHO regions, 23 SCI snapshots and 9 office checks); this is NOT a full invocation of the checked-in Node validator.



## Authoritative GitHub state

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Existing research branch: research/atlas-team-d-20261104
- Existing PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70
- Data and revised validator commit: 163c3ed821b44692c6ce678bcb27c7745b7e1890
- PR state verified after the data commit: OPEN, DRAFT, UNMERGED. A newer documentation commit will be the actual branch tip; re-fetch live state before any further writing.
- Original requirements: docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md and DATA_CONTRACT.md on research/atlas-five-team-handoff-prompts-2026-11-04.

## Mission and scope

Ancestry Health is a noncommercial, open-source educational research tool, NOT a clinically validated medical device. Team D owns international health organizations and scientific networks, their dated and typed supranational affiliations and cooperation, WHO administrative areas and office-presence evidence, and provenance. It must not recompile Team A ministries, Team B national societies or Team C journals, and must not infer clinical validity, a patient's ancestry, national regulations or actual guideline adoption from international membership. Only paths inside docs/atlas/handoffs/team-d/ may be changed. Never write to main, the website, other team branches, or merge/close PR #70.

## Actual Batch 15 additions

1. A WHO European Region Small Countries Initiative (SCI) organization node was added to data/international_networks.csv, and twelve explicit 2026 dated-roster, typed participates_in_voluntary_health_initiative links to data/network_memberships.csv. WHO's 9 June 2026 first-party announcement individually names: Andorra (M49 020), Cyprus (196), Estonia (233), Iceland (352), Latvia (428), Luxembourg (442), Malta (470), Monaco (492), Montenegro (499), North Macedonia (807), San Marino (674), Slovenia (705). Edge as_of is 2026-06-09; individual valid_from/valid_to were deliberately left unknown. Initiative is a voluntary political and technical cooperation platform, not a domestic regulator. Primary source: https://www.who.int/europe/news/item/09-06-2026-european-region-s-smallest-countries-lead-with-commitment-to-stronger--more-sustainable-health-workforce

2. New data/who_europe_sci_snapshots.csv has 23 source-separated observations: eleven WHO April 11, 2022 video TOPIC TAGS, and twelve named WHO June 9, 2026 participants. North Macedonia occurs in the 2026 explicit roster but not among the older video's topic tags. A topic tag list is NOT an exhaustive formal roster; no historical nonmembership or exact accession date is inferred. Historical WHO metadata: https://www.who.int/europe/multi-media/item/what-is-the-small-countries-initiative ; institutional page: https://www.who.int/europe/initiatives/small-countries-initiative

3. New data/who_office_independent_checks_2026.csv contains nine source-qualified observations for countries whose WHO dashboard office survey still reports September 2024, with an explicit NOT_SURVEY_REFRESH scope. Three first-party WHO news sources have 2026 publication dates, and the Montenegro WHO events page has a dated 16–18 June 2026 event but UNKNOWN page publication date: Cyprus M49 196, January 28, 2026 inauguration in Nicosia (office was originally established in 2023); Ethiopia M49 231, August 3 WHO report of a July 28 agreement signed at the Addis Ababa WHO Country Office; Montenegro M49 499, WHO office cooperation in a June 16–18 event (not a physical office in the workshop venue); and South Africa M49 710, WHO office co-convened an in-person February 20 policy event (news February 23). Five official WHO institutional or representative pages lack publication dates: Azerbaijan 031, Bosnia and Herzegovina 070, Cambodia 116, Malaysia 458, and Papua New Guinea 598. These are classified UNDATED and do not establish a 2026 opening, continuous operation, or updated survey response. Malaysia's Kuala Lumpur office represents Brunei and Singapore without proving physical WHO offices within those countries.

4. Twelve direct-open first-party WHO URLs were added as TD-SRC-134 through TD-SRC-145 in PROVENANCE.csv, with source publication dates when verifiable, Montenegro's EVENT_START_DATE explicitly differentiated from the unverified page publication date, and five other pages identified as undated. Full source URLs for all nine office checks are in the new CSV and provenance ledger. The revised validate.mjs includes new count and temporal/source-category assertions.

## Retained comprehensive research snapshot

- 47 international network/programme nodes and 586 source-stamped typed graph edges; 145 distinct provenance URLs.
- Seven non-appraised condition-discovery keys with 20 institutional references: diabetes, hypertension, high_chol, gout, lactose, celiac, hemochromatosis. None is approved clinical advice.
- 249 M49/ISO candidates (248 official UN M49 rows plus separately retained exception 158); 205 independently verified WHO administrative region assignments; 44 unresolved. Six WHO regional offices, Indonesia's May 23, 2025 transfer, and the Liechtenstein nonmembership boundary remain recorded.
- WHO office roster: 153 labels, 106 self-reported April 2026 and 46 retained September 2024 responses plus one unavailable. Direct affirmative April 2026 M49 office-host attestations: 105; 144 candidates lack that specific affirmative evidence, NOT evidence of absence. The nine new independent observations do not alter those totals.
- Historical WHO Country Presence Report: 228 January 2021–December 2022 office or service observations and 225 dated historical graph edges, NOT current office presence.
- PAHO: 44 formal-category observations (35 members, 3 participating states, 4 associate members, 2 observer states) and 21 technical-cooperation area observations. Undated 13-area versus dated August 2026 14-area Eastern Caribbean source list is unresolved; French Saint Martin 663 and Dutch Sint Maarten 534 are different territories.
- EMA/EMRN: 34 unjoined national competent authority identity candidates, statutory remits pending. Egypt EDA/UPA: 19 reported regulator and APPM-support cooperation observations, original signed instruments and legal effects unverified. APPM signed eight, intent fifteen, programme target fifty-five are three distinct states of participation. PAHO HEARTS: 24 pathway catalog titles without national adoption inference. ASEAN: six health-governance observations without country implementation inference.

## Verification and exact limits

Data commit: 163c3ed821b44692c6ce678bcb27c7745b7e1890. The comparison to its parent showed one commit touching EXACTLY six Team D paths: data/international_networks.csv, data/network_memberships.csv, data/who_europe_sci_snapshots.csv, data/who_office_independent_checks_2026.csv, PROVENANCE.csv and validate.mjs. All six were fetched back from the branch through GitHub after writing. Before the commit, targeted in-memory structural checks passed: quote-aware CSV widths, count checks (47/586/145, 23 snapshots, nine office sources), unique URL and ID ledger, nonduplicate composite graph edges, exact SCI M49 identities, and all nine M49 office areas confirmed to retain 2024 survey values. The revised checked-in validator was NOT executed as a native Node process or as a full post-Batch-15 JS shim; a full successful regression is NOT claimed. The prior Batch 14 checked-in validator was tested in an isolated JS shim and passed at that older data commit only.

Run node docs/atlas/handoffs/team-d/validate.mjs in a Node-capable checkout before reporting full regression PASS; verify GitHub Actions separately, if any. No source count or institutional observation establishes statutory mandates, physical continuity, official clinical adoption or biomedical research validity.

## Remaining original research and next steps

1. Verify exact SCI membership history, especially North Macedonia, using official dated entry records. Do not infer accession dates from older WHO video tags or undated WHO country pages.
2. Investigate individually the 44 unresolved WHO administrative-region assignments, 46 aging September 2024 office surveys, and 144 M49 candidates without a direct positive April 2026 survey attestation. Preserve office types, sources and time; no missing-evidence-to-absence conversion.
3. Reconcile PAHO Eastern Caribbean 13-versus-14 lists, and distinguish PAHO legal participation, service coverage, WHO country offices and geography.
4. Locate primary signed agreements and statutory powers for Egyptian EDA/UPA and Africa CDC partnerships, seven unnamed APPM state MoU signatories and 15 expression-of-intent states; verify exact Team A identifiers and EMA competent authority statutes.
5. Verify national HEARTS 2.0 pathway adoption, ASEAN countries' actual programme implementation, and exact source-qualified Team B/C joins; expand less-visible seven-condition scientific networks without clinical inference.
6. Commit evidence-qualified Team D-only changes with source dates, run the full validator, create a new standalone handoff, re-fetch PR and changed file content, and leave PR #70 open, draft and unmerged.

## Exact continuation prompt to repeat

Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md on branch research/atlas-team-d-20261104.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
