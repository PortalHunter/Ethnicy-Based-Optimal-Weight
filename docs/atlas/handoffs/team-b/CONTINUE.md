# Resume Team B · batch 33 · 2026-11-05

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
| Organizations / areas with a domiciled organization | 329 / 208 |
| Areas without a verified domiciled organization | 40 |
| Resource relationships / cells with a linked resource | 214 / 202 |
| Cells without a linked resource | 1,534 |
| Of those, cells with / without a logged targeted check | 120 / 1,414 |
| Provenance records / targeted search checks | 603 / 343 |
| Community records / cross-border service edges | 7 / 2 |
| Approved clinical claims | 0 |

diabetes 72 · hypertension 23 · high_chol 23 · gout 20 · lactose 15 · celiac 31 · hemochromatosis 18.

All 214 publication contexts now match one exact organization/condition/URL and record organization domicile, issuer, publication-country basis, source attribution IDs, study population and healthcare jurisdiction separately. Thirteen relationships have a documented foreign issuer or journal country. Seven have an unresolved country and preserve the reason.

The original Greenland report names a Danish publisher; the Hong Kong gout consensus appeared in a German-published journal. Two library authorities disagree on the publication country of the Rwanda type 1 diabetes article. Its Rwandan study population and the country conflict are both explicit.

## Remaining work, in priority order

- Use primary local-language academic and organization publications to extend Africa and Central Asia; preserve local affiliation, recruitment setting, original issuer and clinical scope separately.
- Return to the seven unresolved source-country relationships. Prioritize original imprints or dated edition evidence, including Portuguese translations, Swedish brochure, Shefa presentations, Panama protocol and conflicting serial authorities for Rwanda.
- Continue original publication-list and lifecycle checks, regional/Indigenous governance documentation and precise condition boundaries. See GAPS.md and the remaining area roster.

## Ownership and acceptance

Work exclusively under `docs/atlas/handoffs/team-b/` on this branch. No website, calculator, main, merge, clinical release, messages to outside parties or new PR. Team B owns professional/patient societies, eligible universities, research bodies and community-controlled health organizations. Government authority inventory belongs to A, journal inventory to C and international network census to D. A government, university or network can host a local source without acquiring its authorship. Distinguish local domicile, people served, membership, publisher, author, endorser and host. A language edition is not another independent study. Use original-language evidence when possible. Log narrow search limits and date-bound status; a search gap cannot establish national absence. Never import identifiable health data, raw records, genomic files or copyrighted full texts.

The 248 × 7 table and 14 diversity cases satisfy two structural gates. Source country, study population and guideline healthcare jurisdiction require source-specific verification. Own original-language publication lists and current identities/lifecycle still require systematic review. An institution’s mission, a professional affiliation, or service availability alone never earns publication credit. Mark historical, redirected, disputed and superseded evidence explicitly. Retain all seven keys: diabetes, hypertension, high_chol, gout, lactose, celiac, hemochromatosis. Keep FH distinct from measured lipids, symptomatic gout from hyperuricaemia/CPPD, clinical lactose intolerance from lactase genotype/malabsorption, celiac disease from HLA/serology, and hereditary haemochromatosis from isolated ferritin. Distinguish diabetes types, prediabetes and screening results. Residence, sample location, ancestry, community affiliation, genotype and phenotype are separate. Community governance and permission require direct evidence. All resources remain `research_lead_only`. Independent claim review is tracked separately in issue #27.

## Save verified batches

Commit regularly on this PR using the expected current head and an ordinary fast-forward. On a lease conflict read the new head before reconciling. Validate the ten CSVs with the committed Node validator after each batch. Verify the immutable committed content and recursive tree blob hashes, rerun Node against those exact files, update the existing PR body and save a standalone receipt. Maintain provenance, search log, counts, GAPS and the exact outstanding roster. Clinical validity, global absence, live URL status and data permissions require separate evidence. Only declare completion when the original acceptance criteria are met.

## Exact continuation prompt

Continue Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71. Read docs/atlas/handoffs/team-b/CONTINUE.md from research/atlas-team-b-20261104, verify live state, and continue autonomously toward all original acceptance criteria. Preserve scope, source caveats, and no-website/no-merge restrictions. Commit and validate regularly; save a complete standalone GitHub checkpoint if unfinished. At the end, provide this same continuation prompt again.
