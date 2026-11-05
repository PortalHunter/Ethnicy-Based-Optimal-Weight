# Resume Team B · batch 37 · 2026-11-05

**INCOMPLETE.** Continue the assignment on `PortalHunter/Ethnicy-Based-Optimal-Weight`, branch `research/atlas-team-b-20261104`, [draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71). Verify the current PR head before using this snapshot. The original assignment, data contract and live GitHub files together are sufficient to resume.

## Start from live state

1. Confirm PR #71 is open, draft and unmerged, its head is the stated branch and its base is main. Read new commits, comments, reviews and the recursive tree for applicable AGENTS.md files. At session start the head was `a031f8e4f5e738ba1782e713a776ef7da743bd92`, with zero comments or reviews and no AGENTS.md.
2. On branch `research/atlas-five-team-handoff-prompts-2026-11-04`, read `docs/atlas/research-team-prompts/TEAM_B_CLINICAL_ORGANIZATIONS.md` and `docs/atlas/research-team-prompts/DATA_CONTRACT.md`. Those contain the original acceptance criteria.
3. On the live research head, read every file in `docs/atlas/handoffs/team-b/`. [CHECKPOINT.json](CHECKPOINT.json) has the exact remaining M49 roster and validation metadata. [GAPS.md](GAPS.md) preserves the original 14 diversity cases and all earlier source-specific exceptions. [CHANGELOG.md](CHANGELOG.md), [PROVENANCE.csv](PROVENANCE.csv), [STATUS.md](STATUS.md), [VALIDATION.md](VALIDATION.md), the data CSVs and [README.md](README.md) are required context. Inspect existing IDs and searches before adding rows.
4. Run `node docs/atlas/handoffs/team-b/validate.mjs` on files fetched from the verified commit and compare their Git blob hashes. An unlinked area-condition cell can already have a targeted search in `data/search_log.csv`.

## Current coverage

| Measure | Count |
|---|---:|
| UN M49 areas / unique area-condition cells | 248 / 1,736 |
| Organizations / areas with a domiciled organization | 361 / 226 |
| Areas without a verified domiciled organization | 22 |
| Resource relationships / cells with a linked resource | 249 / 230 |
| Cells without a linked resource | 1,506 |
| Of those, cells with / without a logged targeted check | 129 / 1,377 |
| Provenance records / targeted search checks | 726 / 420 |
| Community records / cross-border service edges | 7 / 8 |
| Approved clinical claims | 0 |

diabetes 84 · hypertension 31 · high_chol 25 · gout 21 · lactose 17 · celiac 32 · hemochromatosis 20.

This batch adds three organizations in three previously empty areas, four resource relationships and two newly linked area-condition cells (Caribbean Netherlands diabetes and hypertension). Four issuer-country unknowns were resolved with edition-specific evidence; five remain. The final PLoS ONE Añisok geriatric paper is indexed separately from the 2025 adult Anales Médicos study.

## Remaining work, in priority order

- Triage the exact 22 missing M49 identities in CHECKPOINT.json. Populated gaps still include Saint Helena (654; government-only logged), Naoero/Nauru (520), Niue (570), Tokelau (772), Saint Barthélemy (652), Norfolk Island (574), Falkland Islands (238), and Monaco (492 historical dissolution already logged). Keep Antarctic/uninhabited codes as documented absences when justified. For Naoero/Nauru, Niue and Tokelau, read the already logged historical survey and overseas activity before seeking independent local bodies.
- Prioritize the least-covered streams (17 lactose, 20 hereditary iron overload, 21 gout and 25 lipid cells), especially locally issued FH, community-controlled sources and original-language guidance. Resolve the five remaining issuer-country unknowns (Panama HEARTS host, Portuguese WGO/ESPGHAN hosted translations, Chad Open Access Pub, PAMJ South Sudan imprint conflict) where edition-specific evidence exists.
- Check the lifecycle and original-language publication lists of directory-only, registry-only and partner-only organizations (including AFDD statutes-2013 and Diabète SPM without own site). Preserve the Añisok 1,500/202 independence caveat between the 2025 adult and 2026 geriatric papers. Preserve 14 diversity cases and source-specific caveats. Of 1,506 unlinked cells, 129 have a targeted check and 1,377 have no matching condition-specific search log.

## Ownership and acceptance

Work exclusively under `docs/atlas/handoffs/team-b/` on this branch. No website, calculator, main, merge, clinical release, messages to outside parties or new PR. Team B owns professional/patient societies, eligible universities, research bodies and community-controlled health organizations. Government authority inventory belongs to A, journal inventory to C and international network census to D. A government, university or network can host a local source without acquiring its authorship. Distinguish local domicile, people served, membership, publisher, author, endorser and host. A language edition is not another independent study. Use original-language evidence when possible. Log narrow search limits and date-bound status; a search gap cannot establish national absence. Never import identifiable health data, raw records, genomic files or copyrighted full texts.

The 248 × 7 table and 14 diversity cases satisfy two structural gates. Source country, study population and guideline healthcare jurisdiction require source-specific verification. Own original-language publication lists and current identities/lifecycle still require systematic review. An institution’s mission, a professional affiliation, or service availability alone never earns publication credit. Mark historical, redirected, disputed and superseded evidence explicitly. Retain all seven keys: diabetes, hypertension, high_chol, gout, lactose, celiac, hemochromatosis. Keep FH distinct from measured lipids, symptomatic gout from hyperuricaemia/CPPD, clinical lactose intolerance from lactase genotype/malabsorption, celiac disease from HLA/serology, and hereditary haemochromatosis from isolated ferritin. Distinguish diabetes types, prediabetes and screening results. Residence, sample location, ancestry, community affiliation, genotype and phenotype are separate. Community governance and permission require direct evidence. All resources remain `research_lead_only`. Independent claim review is tracked separately in issue #27.

## Save verified batches

Commit regularly on this PR using the expected current head and an ordinary fast-forward. On a lease conflict read the new head before reconciling. Validate the ten CSVs with the committed Node validator after each batch. Verify the immutable committed content and recursive tree blob hashes, rerun Node against those exact files, update the existing PR body and save a standalone receipt. Maintain provenance, search log, counts, GAPS and the exact outstanding roster. Clinical validity, global absence, live URL status and data permissions require separate evidence. Only declare completion when the original acceptance criteria are met.

## Verified stopping point

The last research commit is [8becb1962fa1baf9fa8f79ef446ed49b9998f488](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/8becb1962fa1baf9fa8f79ef446ed49b9998f488). All 18 handoff files and all ten CSV inputs matched GitHub and passed validation. See [VALIDATION.md](VALIDATION.md) for receipts and [STATUS.md](STATUS.md) for the original acceptance-criterion review.

Remaining unresolved issuer records (not applied further in this batch):

- Panama HEARTS protocol: ministry approval and PAHO host; original place of issue still unresolved.
- Portuguese SPG WGO lactose PDF and SPGP ESPGHAN celiac translation: edition-specific place of issue unresolved.
- Chad Open Access Pub / Journal of Hypertension and Cardiology issue-country pending.
- South Sudan PAMJ article: older NLM imprint versus present operator still conflict.

## Exact continuation prompt

Continue Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71. Read docs/atlas/handoffs/team-b/CONTINUE.md from research/atlas-team-b-20261104, verify live state, and continue autonomously toward all original acceptance criteria. Preserve scope, source caveats, and no-website/no-merge restrictions. Commit and validate regularly; save a complete standalone GitHub checkpoint if unfinished. At the end, provide this same continuation prompt again.
