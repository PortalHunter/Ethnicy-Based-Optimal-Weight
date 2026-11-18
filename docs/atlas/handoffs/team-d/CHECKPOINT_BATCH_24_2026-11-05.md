# Team D — complete standalone research checkpoint, Batch 24 (2026-11-05)

## Authorized research state and independent recovery

- GitHub: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight; existing [PR #70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70), **OPEN / DRAFT / UNMERGED** when checked after the data commit.
- Branch: `research/atlas-team-d-20261104`; PR base `main`. Initial batch head `488a1942617e58936437a2a47326a3374c47cc82`; new **data, source ledger and validator** commit [`aa8e5c74b649b4481c61780cac74356198374467`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/aa8e5c74b649b4481c61780cac74356198374467). This checkpoint is written in a later documentation commit; **refetch live PR head before any further edit**.
- Every authorized write is under `docs/atlas/handoffs/team-d/`. Never edit `main`, the public website, calculator, clinical content, other teams' files, close research issues, or merge the PR. Keep sources, unknowns and time qualifications intact.
- Original assignment: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`. All six WHO regional offices, documented typed relations, at least ten negative boundaries, seven non-clinical condition keys, M49-indexed status and source-dated reproducible graph are required. The structural baseline is established, **source, scientific and legal review remain incomplete**.

## Batch 24 research contribution

Created `data/who_sph_reporting_region_context.csv` with **six unique evidence records (TD-WHO-SPH-001–006) across five M49 areas**: `438` Liechtenstein (two source/year records), `136` Cayman Islands, `060` Bermuda, `092` British Virgin Islands, and `850` United States Virgin Islands.

1. WHO's Strategic Partnership for Health Security and Emergency Preparedness (SPH) portal explicitly tags **Liechtenstein European Region** in **2019** and **2024** annual IHR States Parties Self-assessment Annual Reporting (SPAR) records; each record displays **Submitted**. These are the *report reference years*, **not** page-publication dates, legal instruments or evidence of WHO constitutional membership. The existing WHO/Europe 5 November **2025** report describes the pan-European space as **53 European Region Member States plus Liechtenstein** (prior `TD-SRC-125`). Do not conflate WHO-region programme metadata, IHR annual reporting, pan-European cooperation and membership. No 2026 administrative-region placement promoted.
2. An **undated** WHO SPH Cayman Islands profile displays **Region of the Americas**. This does not prove 2026 WHO office operation, IHR SPAR submission, WHO governance, statutory law or a national clinical protocol.
3. WHO SPH's **2020 COVID-19 emergency event** records tag Bermuda (`2020-E000181`), British Virgin Islands (`2020-E000243`) and United States Virgin Islands (`2020-E000195`) as **Region of the Americas**. The year applies to emergency-event metadata, **not** to continuing WHO administrative membership, clinical authority or current country-office premises.
4. **No new international network graph edge**, WHO 2026 administrative region assignment, country-office host confirmation, clinical guideline, legal enactment or individual medical claim was inferred. The original 44 current WHO administrative-region unknowns include all five areas above.

Six new **directly opened official WHO SPH portal webpages**, `TD-SRC-196–201`, were appended to `PROVENANCE.csv` for **201 distinct URLs**. Exact source locations:

- `TD-SRC-196`: [Liechtenstein WHO SPH 2019 self-assessment](https://extranet.who.int/sph/liechtenstein-2019)
- `TD-SRC-197`: [Liechtenstein WHO SPH 2024 self-assessment](https://extranet.who.int/sph/spar-liechtenstein-submitted2024)
- `TD-SRC-198`: [Cayman Islands WHO SPH region profile, undated](https://extranet.who.int/sph/cayman-islands)
- `TD-SRC-199`: [Bermuda WHO SPH 2020 COVID-19 event](https://extranet.who.int/sph/coronavirus-disease-covid-19-bermuda)
- `TD-SRC-200`: [British Virgin Islands WHO SPH 2020 COVID-19 event](https://extranet.who.int/sph/coronavirus-disease-covid-19-british-virgin-islands)
- `TD-SRC-201`: [United States Virgin Islands WHO SPH 2020 COVID-19 event](https://extranet.who.int/sph/coronavirus-disease-covid-19-united-states-virgin-islands)

Source retrieval caveat: these were directly opened **HTML metadata pages**, not certified primary statutes, signed agreements or a site-wide comprehensive WHO administrative roster. Even a currently viewable portal page may describe a past reporting year or event.

### Changed data and tests

[`aa8e5c74` commit](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/aa8e5c74b649b4481c61780cac74356198374467) changed **only three files**:
- `docs/atlas/handoffs/team-d/data/who_sph_reporting_region_context.csv` (new six-record table)
- `docs/atlas/handoffs/team-d/PROVENANCE.csv` (six new unique URL and ID records)
- `docs/atlas/handoffs/team-d/validate.mjs` (revised global count, six-source assertions, time, region and non-promotion guards)

**Readback and targeted verification PASS** after data commit: all three files read from GitHub; six unique records; 201 unique source IDs and URLs; exactly five coded areas; every new source referenced in provenance; each M49 present in the 44-item unresolved queue and still `not_verified`; prior region status **205 verified / 44 unknown**. `validate.mjs` contains new Batch-24 invariants and expected source count 201.

**The entire checked-in validator was not executed under native Node, GitHub Actions, or a complete JS replay after this batch**. The most recent *full structural* read-only JavaScript shim PASS applies to the prior Batch 23 commit (`5bb0e50...`), not this revised Batch 24 validator. A legitimate Node checkout must run `node docs/atlas/handoffs/team-d/validate.mjs`, record toolchain/exit output, and inspect primary sources. Current tests are structural, **not** legal, clinical, scientific or methodological approval. No fabricated CI claim.

## Retained research baseline (Batch 23 + Batch 24)

- Institutional graph: **47 nodes / 617 typed and dated edges**, at least **20 institutional condition references** covering **all seven keys** (`diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`). Institutional reference is **not clinical-appraisal approval**.
- Geographic universe: **249 ISO-seed geographic candidates**; **248** current UN M49 overview rows plus a separately flagged **158** ISO-seed exception. **205 source-verified contemporary WHO administrative region placements, 44 `not_verified`**. Indonesia switched SEARO → WPRO on **2025-05-23**; separate from its UN statistical region.
- Country-office evidence: **105 affirmative April-2026 M49 host attestations**; **144 other candidate areas without equivalent April direct evidence** (unknown, not absent). **153** source-dated survey labels = **106 April 2026 / 46 September 2024 / 1 unavailable**; all 46 old labels separately corroborated, but recency and physical premises not established by those older sources.
- Historical material: **228 Jan 2021–Dec 2022 WHO office/service records and 225 historical graph edges**, plus selective 2019 and 2021 Eastern Caribbean/SIDS material and 2025 epidemiological WER classifications. Not current 2026 office status or constitutional WHO membership.
- Additional evidence: **34 EMA NCA agency identity candidates** awaiting statutes/Team A joins; **24** PAHO HEARTS pathway catalog entries and **five** aggregate programme metrics; **19** regulatory cooperation records; **44** PAHO governance category and **21** technical cooperation records; **12** representative assertions and **four** Cayman/Sint Maarten local activities; **four** Greenland WHO/Europe cooperation observations; **six** new WHO SPH metadata observations; **201** unique source URLs.
- Greenland's **1 July 2024** WHO/Europe five-year MoU was recorded as a cooperation edge only; full signed instrument and SCI/RHN participation remain unreviewed. PAHO notices have source-index/403 caveats. Do not conflate French Saint Martin `663` and Dutch Sint Maarten `534`.

## Open research, review and integration work

1. **44** WHO administrative region assignments require a direct **contemporary administrative** source, including Greenland and the five WHO SPH source-tag cases. WHO surveillance or emergency-reporting region fields alone do not remove the gap.
2. **144** without equivalent direct April 2026 WHO host evidence; the 46 old survey profiles' operational status, office types and premises; multicountry services vs local office location. Historical 2021–2022 data stays historical.
3. PAHO 13-vs-14 Eastern Caribbean French Saint Martin 663 disputed scope; PAHO Boisson predecessor tenure **January vs February 2021** conflict and 403 article direct re-opening; no inferred handover/office. HEARTS Cayman programme vs verified version/adoption; Dutch Sint Maarten lab-framework consultation vs actual enactment.
4. North Macedonia SCI meeting observer **2023** vs member **April 10–12 2024** (exact admission day/instrument pending); seven other unnamed APPM signed states and 15 intents; signed EDA/UPA agreements and EMA national regulator statutory remits; national HEARTS 2.0 editions, ASEAN country implementations, cross-team exact identity joins and scientific society networks.
5. Maintain documentation-only draft review. Clinical recommendations, ancestry-based conclusions, legal delegation and scientific certainty are not warranted. Full native Node validation, primary legal texts and maintainer/scientific signoff are required before integration.

## Safe restart

1. Refetch live PR #70 metadata, head SHA and status; read this checkpoint, `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `PROVENANCE.csv`, `CHANGELOG.md`, `VALIDATION.md`, `validate.mjs` and relevant data.
2. Use original Team D prompt and shared data contract on their research branch. Preserve prior IDs/links and source caveats; do not duplicate Teams A/B/C or modify user-facing content.
3. Pursue new *first-party*, source/date-qualified findings; commit in bounded batches on existing Team D branch using expected-head/fast-forward ref semantics, read back each changed file, rerun structural checks. If unfinished, save another self-contained GitHub checkpoint.
4. Leave PR open/draft/unmerged. Report real validation method and exact SHAs; never imply asynchronous continuation.

## Exact original user continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
