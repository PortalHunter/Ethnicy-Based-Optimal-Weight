# Resume Team B · batch 36 · 2026-11-05

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
| Organizations / areas with a domiciled organization | 358 / 223 |
| Areas without a verified domiciled organization | 25 |
| Resource relationships / cells with a linked resource | 245 / 228 |
| Cells without a linked resource | 1,508 |
| Of those, cells with / without a logged targeted check | 128 / 1,380 |
| Provenance records / targeted search checks | 711 / 407 |
| Community records / cross-border service edges | 7 / 8 |
| Approved clinical claims | 0 |

diabetes 83 · hypertension 30 · high_chol 25 · gout 21 · lactose 17 · celiac 32 · hemochromatosis 20.

This batch adds seven organizations, seven resource relationships, four newly linked area-condition cells and four cross-border service records. Kiribati, Tuvalu and the Turks and Caicos Islands now have documented domestic organizations. The session has added 45 organizations across 22 additional areas and 53 relationships across 46 additional cells.

The Kiribati clinic’s advertised services, Tuvalu’s committee roster and the historical Pacific survey are distinguished from delivered programmes. The Australian programme’s visits to Kiribati, Niue and Naoero/Nauru are documented separately. A 2025 Añisok adult study names an Equatorial Guinean university author and reports on diabetes and measured lipids. Its method describes both weekday allocation and groups defined by blood pressure and BMI.

## Remaining work, in priority order

- Triage the exact 25 missing M49 identities in CHECKPOINT.json. Among populated areas, check Caribbean Netherlands (535), Saint Pierre and Miquelon (666), Wallis and Futuna (876), and Saint Helena (654). For Naoero/Nauru, Niue and Tokelau, read the newly logged historical survey and contemporary overseas activity before seeking independent local bodies. Document service geography and historical evidence separately.
- Prioritize the least-covered streams (17 lactose, 20 hereditary iron overload, 21 gout and 25 lipid cells), especially locally issued FH, community-controlled sources and original-language guidance. Verify all nine unresolved publication-country records where edition-specific evidence exists.
- Check the lifecycle and original-language publication lists of directory-only, registry-only and partner-only organizations. For Añisok, obtain the final PLoS ONE 21(11):e0360673 source and verify its affiliations and group definitions separately from the 2025 adult paper. Preserve 14 diversity cases and source-specific caveats. Of 1,508 unlinked cells, 128 have a targeted check and 1,380 have no matching condition-specific search log.

## Ownership and acceptance

Work exclusively under `docs/atlas/handoffs/team-b/` on this branch. No website, calculator, main, merge, clinical release, messages to outside parties or new PR. Team B owns professional/patient societies, eligible universities, research bodies and community-controlled health organizations. Government authority inventory belongs to A, journal inventory to C and international network census to D. A government, university or network can host a local source without acquiring its authorship. Distinguish local domicile, people served, membership, publisher, author, endorser and host. A language edition is not another independent study. Use original-language evidence when possible. Log narrow search limits and date-bound status; a search gap cannot establish national absence. Never import identifiable health data, raw records, genomic files or copyrighted full texts.

The 248 × 7 table and 14 diversity cases satisfy two structural gates. Source country, study population and guideline healthcare jurisdiction require source-specific verification. Own original-language publication lists and current identities/lifecycle still require systematic review. An institution’s mission, a professional affiliation, or service availability alone never earns publication credit. Mark historical, redirected, disputed and superseded evidence explicitly. Retain all seven keys: diabetes, hypertension, high_chol, gout, lactose, celiac, hemochromatosis. Keep FH distinct from measured lipids, symptomatic gout from hyperuricaemia/CPPD, clinical lactose intolerance from lactase genotype/malabsorption, celiac disease from HLA/serology, and hereditary haemochromatosis from isolated ferritin. Distinguish diabetes types, prediabetes and screening results. Residence, sample location, ancestry, community affiliation, genotype and phenotype are separate. Community governance and permission require direct evidence. All resources remain `research_lead_only`. Independent claim review is tracked separately in issue #27.

## Save verified batches

Commit regularly on this PR using the expected current head and an ordinary fast-forward. On a lease conflict read the new head before reconciling. Validate the ten CSVs with the committed Node validator after each batch. Verify the immutable committed content and recursive tree blob hashes, rerun Node against those exact files, update the existing PR body and save a standalone receipt. Maintain provenance, search log, counts, GAPS and the exact outstanding roster. Clinical validity, global absence, live URL status and data permissions require separate evidence. Only declare completion when the original acceptance criteria are met.

## Verified stopping point

The last research commit is [f917e48b0a181a391b2e30d7b39c987d5171e86e](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f917e48b0a181a391b2e30d7b39c987d5171e86e). All 18 handoff files and all ten CSV inputs matched GitHub and passed validation. See [VALIDATION.md](VALIDATION.md) for the seven batch receipts and [STATUS.md](STATUS.md) for the original acceptance-criterion review.

For the nine unresolved issuer records, these already located sources give the next researcher a starting point. They have not been applied to the CSVs.

- The Rwanda article names the company that published this edition. Its university record corroborates the imprint. Compare those sources with the conflicting title-level catalogue records. [Article PDF](https://www.tandfonline.com/doi/pdf/10.1080/16549716.2025.2457826) · [University record](https://researchprofiles.ku.dk/en/publications/evaluation-of-care-and-clinical-outcomes-after-the-implementation/)
- Vanuatu’s symposium links the abstract and slides separately. The abstract names the Port Vila organization, and both sources describe the same programme. [Proceedings](https://moh.gov.vu/healthsymposium/) · [Conference abstract](https://moh.gov.vu/healthsymposium/docs/2022/VHRS%20abstract-DORRAS%20Emma.pdf)
- For the Juba study, distinguish the journal's 2025 editorial office and operator from its older catalogue imprint. [2025 publisher report](https://www.blog.panafrican-med-journal.com/posts/2026/1341/Pamj_Annual_Report_2025.pdf)
- The Swedish society’s historical brochure URL and catalogue page returned a third-party redirect when checked. Preserve the prior retrieval and verify an official replacement before relying on the live link. [Catalogue record](https://svenskgastroenterologi.se/kunskap/patientinformation-hemokromatos/)

## Exact continuation prompt

Continue Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71. Read docs/atlas/handoffs/team-b/CONTINUE.md from research/atlas-team-b-20261104, verify live state, and continue autonomously toward all original acceptance criteria. Preserve scope, source caveats, and no-website/no-merge restrictions. Commit and validate regularly; save a complete standalone GitHub checkpoint if unfinished. At the end, provide this same continuation prompt again.
