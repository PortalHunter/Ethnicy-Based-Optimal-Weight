# Resume Team B · batch 34 · 2026-11-05

**INCOMPLETE.** Continue the assignment on `PortalHunter/Ethnicy-Based-Optimal-Weight`, branch `research/atlas-team-b-20261104`, [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71). Verify the current PR head before using this snapshot. The original assignment, data contract and live GitHub files together are sufficient to resume.

## Start from live state

1. Confirm PR #71 is open, draft and unmerged, its head is the stated branch and its base is main. Read new commits, comments, reviews and the recursive tree for applicable AGENTS.md files. At session start the head was `7133fb56aaf3e14d843177d95d3e91fd8a5bcab7`, with zero comments or reviews and no AGENTS.md.
2. On branch `research/atlas-five-team-handoff-prompts-2026-11-04`, read `docs/atlas/research-team-prompts/TEAM_B_CLINICAL_ORGANIZATIONS.md` and `docs/atlas/research-team-prompts/DATA_CONTRACT.md`. Those contain the original acceptance criteria.
3. On the live research head, read every file in `docs/atlas/handoffs/team-b/`. [CHECKPOINT.json](CHECKPOINT.json) has the exact remaining M49 roster and validation metadata. [GAPS.md](GAPS.md) preserves the original 14 diversity cases and all earlier source-specific exceptions. [CHANGELOG.md](CHANGELOG.md), [PROVENANCE.csv](PROVENANCE.csv), [STATUS.md](STATUS.md), [VALIDATION.md](VALIDATION.md), the data CSVs and [README.md](README.md) are required context. Inspect existing IDs and searches before adding rows.
4. Run `node docs/atlas/handoffs/team-b/validate.mjs` on files fetched from the verified commit and compare their Git blob hashes. An unlinked area-condition cell can already have a targeted search in `data/search_log.csv`.

## Current coverage

| Measure | Count |
|---|---:|
| UN M49 areas / unique area-condition cells | 248 / 1,736 |
| Organizations / areas with a domiciled organization | 339 / 216 |
| Areas without a verified domiciled organization | 32 |
| Resource relationships / cells with a linked resource | 226 / 213 |
| Cells without a linked resource | 1,523 |
| Of those, cells with / without a logged targeted check | 119 / 1,404 |
| Provenance records / targeted search checks | 644 / 363 |
| Community records / cross-border service edges | 7 / 2 |
| Approved clinical claims | 0 |

diabetes 77 · hypertension 28 · high_chol 23 · gout 20 · lactose 15 · celiac 32 · hemochromatosis 18.

Added ten university or biomedical research organizations across eight previously uncovered areas: Central African Republic, Chad, Djibouti, São Tomé and Príncipe, Solomon Islands, South Sudan, Syria and Tajikistan. Twelve relationships add sources in eleven area-condition cells. The study site, author affiliation, publisher and clinical scope are recorded separately.

Direct checks include a six-facility Bangui workforce study, a São Tomé district-level conference abstract, Solomon Islands hospital self-reports and a Raqqa pediatric celiac study distinguishing 14 positive screens from seven biopsy-confirmed cases. A Syrian student thesis has conflicting sample sizes (abstract 153, subtype table 253). The Chad crisis abstract has an inconsistent subgroup sum. Both discrepancies are retained without estimates.

## Remaining work, in priority order

- Continue the remaining 32-area roster, prioritizing independent bodies or academic research in Comoros, Guinea-Bissau, Equatorial Guinea and Turkmenistan, then smaller territories and service arrangements. Check exact existing search logs first.
- Broaden the least-covered streams: direct original-language resources for lactose, hereditary iron overload, clinical gout and FH. Mark serology, urate, ferritin and generic lipid measures precisely. Revisit older official directories and dated sources.
- Resolve nine publication-country records where an original imprint or edition is unavailable or conflicting. Continue local professional governance and publication-list checks including Damascus, São Tomé, Djibouti, Chad and Tajikistan. Preserve the 14 diversity cases and all unresolved caveats in GAPS.md.

## Ownership and acceptance

Work exclusively under `docs/atlas/handoffs/team-b/` on this branch. No website, calculator, main, merge, clinical release, messages to outside parties or new PR. Team B owns professional/patient societies, eligible universities, research bodies and community-controlled health organizations. Government authority inventory belongs to A, journal inventory to C and international network census to D. A government, university or network can host a local source without acquiring its authorship. Distinguish local domicile, people served, membership, publisher, author, endorser and host. A language edition is not another independent study. Use original-language evidence when possible. Log narrow search limits and date-bound status; a search gap cannot establish national absence. Never import identifiable health data, raw records, genomic files or copyrighted full texts.

The 248 × 7 table and 14 diversity cases satisfy two structural gates. Source country, study population and guideline healthcare jurisdiction require source-specific verification. Own original-language publication lists and current identities/lifecycle still require systematic review. An institution’s mission, a professional affiliation, or service availability alone never earns publication credit. Mark historical, redirected, disputed and superseded evidence explicitly. Retain all seven keys: diabetes, hypertension, high_chol, gout, lactose, celiac, hemochromatosis. Keep FH distinct from measured lipids, symptomatic gout from hyperuricaemia/CPPD, clinical lactose intolerance from lactase genotype/malabsorption, celiac disease from HLA/serology, and hereditary haemochromatosis from isolated ferritin. Distinguish diabetes types, prediabetes and screening results. Residence, sample location, ancestry, community affiliation, genotype and phenotype are separate. Community governance and permission require direct evidence. All resources remain `research_lead_only`. Independent claim review is tracked separately in issue #27.

## Save verified batches

Commit regularly on this PR using the expected current head and an ordinary fast-forward. On a lease conflict read the new head before reconciling. Validate the ten CSVs with the committed Node validator after each batch. Verify the immutable committed content and recursive tree blob hashes, rerun Node against those exact files, update the existing PR body and save a standalone receipt. Maintain provenance, search log, counts, GAPS and the exact outstanding roster. Clinical validity, global absence, live URL status and data permissions require separate evidence. Only declare completion when the original acceptance criteria are met.

## Exact continuation prompt

Continue Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71. Read docs/atlas/handoffs/team-b/CONTINUE.md from research/atlas-team-b-20261104, verify live state, and continue autonomously toward all original acceptance criteria. Preserve scope, source caveats, and no-website/no-merge restrictions. Commit and validate regularly; save a complete standalone GitHub checkpoint if unfinished. At the end, provide this same continuation prompt again.
