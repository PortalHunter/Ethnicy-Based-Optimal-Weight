# Team B research status — 2026-11-04

**Phase:** Three substantive source-backed batches saved on one draft PR; geographical census is **NOT complete**. All source-to-claim medical decisions remain **research leads only**.

## Validated aggregate coverage

| Metric | Current count |
|---|---:|
| M49 countries and areas enumerated | **248** |
| Seven-condition area rows | **1,736** |
| Organization identities recorded | **60** (59 active, 1 officially discontinued) |
| Areas with at least one organization identity | **33** |
| Publication/resource index rows with exact relationship | **60** |
| Area × condition pairs with a linked source | **57** |
| Explicit `not_yet_researched` cells | **1,679** |
| Indigenous/community-specific research groups recorded | **3** |
| Provenance ledger entries | **121** |
| Candidate clinical claims approved for patient guidance | **0** |

**Structural CSV QA:** Completed 2026-11-04 against committed content — 248 unique area codes, 7 expected condition keys, 1,736 unique area-condition pairs, 60 unique organization IDs, 60 publication foreign keys found, valid-looking HTTPS URLs, nonempty issuer/language/date/identity metadata for organizations, all 57 positive coverage cells backed by at least one publication/source, all other cells explicitly unresearched. **0 structural validation failures.** This is not an external live URL crawl, guideline quality appraisal or full UNSD automated comparison; see `VALIDATION.md`.

## Batches

1. Initial 26 official-site identities in 12 areas, 23 linked publications, first source metadata and 248×7 matrix; immediate draft PR handoff.
2. Added 26 identities and 29 source rows covering South Africa, East and South Asia, Southeast Asia, Europe, Middle East/North Africa, Latin America and Oceania; identified discontinued Netherlands federation and differentiated 2026 Philippine joint guideline authorship/hosting.
3. Added 8 organizations and 8 exact links spanning Japanese hypertension, Brazilian gout, Spanish and French celiac organizations, UK FH family testing and Canadian/Australian iron overload.

## Next actions / handoff

- Continue geographically balanced M49 discovery, especially Central/West Africa, the Caribbean, Central Asia, Pacific islands and non-sovereign territories, with local-language source searches. Do **not** relabel absence of search as absence of research.
- Diversify streams: only a small minority of countries have sources for lactose, gout, celiac, FH or hemochromatosis. These are discovery gaps, **not** evidence of local lack of expertise.
- Audit original guideline authoring, joint contributions, publisher copyrights, source-country study cohorts and healthcare legal jurisdiction. External second review of source status is needed.
- Compare code skeleton against latest machine-readable UNSD M49 export before merge. Preserve source-specific community data permissions and non-inference from national populations to ancestry.
- Any potentially user-visible medical proposition requires the separate claim appraisal process in [issue #27](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27) and maintainer/human review.

No changes were made to `main`, public clinical copy, the weight engine, genetic inferences, user inputs or patient datasets.

## Verified in-process batch 4 — 2026-11-05

- Source-index aggregate: **71 organizations, 44 M49 areas, 67 linked resources, 64 positive area-condition cells, 1672 explicit unresearched cells, 139 provenance entries**. Coverage matrix remains 248 × 7 = 1736 rows; three Indigenous-specific records unchanged.
- **11** new organizational identities, **7** resource entries. Professional workshop, programme description and patient education are discoverable resources, **not clinically appraised evidence**.
- Branch commit verifies persistence; no source claims approved for public clinical guidance. This section supersedes the 2026-11-04 figures above.

## Latest batch 5 — 2026-11-05; supersedes earlier numerical snapshots

- **84 organization records in 53 M49 areas**; **74 indexed publication/resource relationships**; **70 linked positive area-condition cells**; **1666 explicit not-yet-researched cells**; **159 provenance entries**.
- M49 roster **248**, seven-condition matrix **1,736**; separate community-specific records **3**; **0** clinically approved claims. Batch 5 added **13 identities, 7 resource rows, 6 previously unresearched positive cells**.
- **20 new areas indexed across 2026-11-05 batches 4+5** relative to the verified 33-area starting baseline. National-level research incompleteness remains substantial; client product and main untouched.
## Batch 6 — 2026-11-05: sparse-condition discovery and QA correction

Added 4 first-party organization identities (Germany DGE, Poland celiac association, Austria FHchol, UK BSH) and 4 resource relationships. Totals: **88 organizations in 54 areas, 78 resources, 73 source-positive cells, 1663 not-yet-researched cells, 168 provenance entries**. M49 skeleton remains 248×7 = 1736. No clinical claims approved.

Corrected pre-existing Samoa rows: narrative had occupied source_review_status and notes were blank; restored typed uncertainty status and notes in publication/provenance rows. Both MANUIA cells now specialist_research_only, reflecting one unreported programme.

Baseline: draft PR #71 HEAD f24f1bd4ba321b282511e956d3520cf732201f97. Batch checkpoint is the commit containing this section; fetch current HEAD for exact SHA. Next: non-sovereign areas and undercovered Africa/Asia; independently validate M49; audit guideline supersession and third-party-only identities.

## Latest checkpoint — Batch 7, 2026-11-05

**92 organizations in 58 M49 areas; 81 publication/resource relationships; 76 source-positive cells; 1660 not_yet_researched cells; 175 provenance rows; 3 community-specific records; 0 clinically approved claims.** Full 248×7 skeleton unchanged. Batch 7 adds 4 identities and 3 source relationships; Guernsey is directory-only, not counted as researched condition coverage. Batch 6 saved and read back at 82c4990d773bc8f636c9a578fc38d8a0d386b21c.

Counts by source-positive condition: {"diabetes":40,"hypertension":12,"high_chol":6,"gout":4,"lactose":2,"celiac":9,"hemochromatosis":3}. Current batch SHA is the GitHub commit containing this section; recursive prompt is CONTINUE.md. Full research remains incomplete.

Next priorities: (1) underserved Africa/Asia and remaining territories with original-language first-party resources; (2) especially lactose, gout, FH and hereditary iron-overload sources; (3) first-party verification of Guernsey and other directory-only entities; (4) current independent UNSD machine-readable diff and comprehensive URL audit; (5) methods/supersession/copyright and claim appraisal #27. Do not restart completed batches.
