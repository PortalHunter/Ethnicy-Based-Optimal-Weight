# Global Medical Authority Atlas — five research-team assignments

**Created:** 2026-11-04 · **Roadmap:** [#64](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64) · **Local journals:** [#66](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/66) · **Clinical evidence:** [#27](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27)

These five prompts are **standalone**. Send one complete file to each independent AI research session. **Do not rely on the session transcript for the handoff:** the teams must save their outputs directly to a durable repository branch and open or update a pull request.

## Assignment ownership (avoid duplication)

| Team | Owns | Prompt |
|---|---|---|
| A | Every UN M49 country's/area's national, territorial or delegated governmental health authority | [TEAM_A_GOVERNMENT_CENSUS.md](TEAM_A_GOVERNMENT_CENSUS.md) |
| B | National professional disease societies, biomedical institutes, guideline bodies and Indigenous/subnational health organizations for existing conditions | [TEAM_B_CLINICAL_ORGANIZATIONS.md](TEAM_B_CLINICAL_ORGANIZATIONS.md) |
| C | Local medical journals, publishers, libraries, article indexes, language search terms and article discovery | [TEAM_C_LOCAL_JOURNALS.md](TEAM_C_LOCAL_JOURNALS.md) |
| D | International and regional networks, cross-border agencies, affiliations and dated membership/remit edges | [TEAM_D_INTERNATIONAL_NETWORKS.md](TEAM_D_INTERNATIONAL_NETWORKS.md) |
| E | Independent quality control, integration contracts, clinical-applicability safeguards, data joins and map readiness | [TEAM_E_INTEGRATION_QA.md](TEAM_E_INTEGRATION_QA.md) |

Read [DATA_CONTRACT.md](DATA_CONTRACT.md) for shared keys, filenames, acceptance checks and review states. Each prompt repeats the critical save-to-GitHub protocol so it remains meaningful even without this README.

## Mandatory durable handoff

1. Before extensive research, check whether GitHub is connected with **write** access to `PortalHunter/Ethnicy-Based-Optimal-Weight`. Use the **latest `main`** as the base. Research data should go into `docs/atlas/handoffs/team-<letter>/` on a **unique** branch: `research/atlas-team-<letter>-<YYYYMMDD>`. Do not edit the calculator or write directly to `main`.
2. **Create a draft PR early, after the first data commit.** Continue saving results to the same branch/PR in batches (ideally 20–40 countries or manageable thematic chunks), not just one final upload. This prevents a long research session from becoming a lost transcript. Keep the PR draft until the maintainer reviews it.
3. Each batch must contain machine-readable data (CSV/JSON), a markdown methodology and human-readable findings note, a source/provenance register, an unresolved/coverage-gap log, and a short change log. Commit source links with each batch. **Never use a handoff ZIP or chat message as the sole copy.**
4. Cite the exact **PR URL, branch name, commit SHA and saved paths** in the research session's answer. A PR that was merely drafted or an issue number without uploaded content **does not** prove the batch was saved.
5. If the research assistant has read-only GitHub access but can open or comment on issues, post a persistent issue with an actionable machine-readable attachment/link and exact partial findings; identify the fallback clearly. If it has no persistent write access at all, produce exportable files and say **NOT SAVED TO GITHUB**—do not pretend upload happened. A local file/ZIP can be a secondary backup, but the primary handoff remains GitHub.
6. Maintain a running `STATUS.md` and `PROVENANCE.csv` in the team's directory with completed batches and gaps. Report the last verified commit rather than making unverified persistence claims.
7. **Do not merge, delete, close review issues, or alter public medical guidance** without explicit maintainer review. Do not insert private medical records, proprietary journal full texts, secrets, or personal genetic data.

## Required scope

**All current UN M49 countries and areas** form the geographic inventory, including dependent territories and other areas; do not silently equate the list to 193 UN member states or all entries to sovereign countries. Every area receives a row, even when its competent health authority is unknown or assigned through another jurisdiction. `UNKNOWN_REVIEW_NEEDED` and `DELEGATED_TO_PARENT` are legitimate documented outcomes; an empty omitted row is not.

Original-language documentation is encouraged. The study/journal's population, country of **publisher**, country of **research**, nationality, ethnicity, self-reported ancestry, verified genotype, and jurisdiction of clinical authority must remain **separate data fields**.

The seven existing condition keys are: `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, and `hemochromatosis`. Several checkboxes intentionally combine medically distinct statuses; the record cannot assume an individual's diagnosis.

**An organization being real or locally authoritative does not verify a scientific claim.** Separate organization identity, journal editorial integrity, article-level study quality and suitability for user-facing educational display. Candidate research claims belong in the [claim-review ledger / PR #63](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/63) and require issue-backed appraisal before activation.

## Relationship to earlier atlas batch

[PR #65](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/65) seeds a 25-country pilot and demonstrates preliminary entity/edge structures. It does **not** represent full geographic coverage; teams must not overwrite its files while their work is parallel. Produce isolated handoff files, then let Team E reconcile with whichever atlas branch is merged and verified later.

## Suggested dispatch

Run Teams A–D in parallel. Team E can begin immediately by establishing schemas and independently auditing the first published batches; complete the final join after the other teams have committed their results. If an agent loses its session, another researcher can resume using the GitHub draft PR plus `STATUS.md`, without needing the original chat.
