# Team D — complete standalone research checkpoint, Batch 29 (2026-11-05)

## Live PR, branch and safe continuation
- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70, **OPEN / DRAFT / UNMERGED** as independently refetched immediately before checkpoint creation.
- Research branch: `research/atlas-team-d-20261104`, PR base `main`. **Last read-back branch HEAD before this checkpoint:** `8da0fdd6482f6f31c9628d0bb13828e16c31a9a5`. Creating this checkpoint and subsequently refreshing `CONTINUATION_PROMPT.md` will advance it; always refetch live PR/head rather than trusting this snapshot.
- **Exclusive write scope:** `docs/atlas/handoffs/team-d/`. Never modify main, public calculator/website, Team A/B/C folders, clinical recommendations, private patient data, issue closure, or PR merge status.
- Original [Team D requirements](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-five-team-handoff-prompts-2026-11-04/docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md) and [atlas data contract](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-five-team-handoff-prompts-2026-11-04/docs/atlas/research-team-prompts/DATA_CONTRACT.md) remain controlling. Source-qualified institutional relationships are not recommendations for individual patients, genetic/ancestry classifications or domestic medical standards.

## Batch 29 — substantive research committed and independently read back

New machine-readable source-observation file: [`data/ema_authorisation_role_boundaries_2026.csv`](data/ema_authorisation_role_boundaries_2026.csv). **11** unique, first-party, checked-on-2026-11-05 regulatory role assertions, **six** new unique official URLs, all with unknown source publication/effective dates. Source observations distinguish (1) CHMP initial scientific assessment, (2) CHMP referrals and variations, (3) binding European Commission centralised authorisation, (4) centralised EU authorisation extension to EEA Iceland/Liechtenstein/Norway, (5) separate national procedures, (6) mutual recognition, (7) decentralised procedures, (8) EMA medicines database centrally evaluated scope versus national listings, (9) European Commission Union Register and exceptional/withdrawn/refused entries, (10) medicine price and availability outside EMA control, and (11) qualifying newly authorised active-substance diabetes medicines within compulsory central-procedure scope (not all diabetes medicines). No membership edges or national agency legal remits were added.

**Directly opened official HTML evidence, each linked by exact URL in the dataset and provenance:**
- `TD-SRC-212`: https://www.ema.europa.eu/en/committees/committee-medicinal-products-human-use-chmp — CHMP assessment/referrals, not a binding grant.
- `TD-SRC-213`: https://www.ema.europa.eu/en/about-us/frequently-asked-questions — centralised vs national/multistate procedures and lack of control over pricing/availability.
- `TD-SRC-214`: https://www.ema.europa.eu/en/medicines — EMA medicines finder is not an exhaustive national list.
- `TD-SRC-215`: https://health.ec.europa.eu/medicinal-products/union-register_en — Commission Union Register includes other decisions and refusal/withdrawal cases.
- `TD-SRC-216`: https://health.ec.europa.eu/medicinal-products/legal-framework-governing-medicinal-products-human-use-eu/authorisation-procedures-centralised-procedure_en — Commission's legally binding central procedure and indication qualification linked to Regulation (EC) 726/2004. The consolidated statute has **not** been independently legally audited here.
- `TD-SRC-217`: https://www.ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/obtaining-eu-marketing-authorisation-step-step — scientific CHMP versus Commission grant, Iceland/Liechtenstein/Norway scope. No product launch or national guideline adoption inferred.

**Provenance count: 217 unique source IDs and URLs**, `TD-SRC-001–217`. EU/EMA source pages in this batch have an observed check date rather than asserted page-publication or authorisation-effective dates; legislative details, national statutory powers, actual product marketing authorisations and national clinical pathways require separate official instruments.

## Durable GitHub commits and committed files

1. [`5690bcfb99ed123c0a12a010be6a05b088ad44f0`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/5690bcfb99ed123c0a12a010be6a05b088ad44f0): `data/ema_authorisation_role_boundaries_2026.csv`, 11 records and six distinct first-party source URLs.
2. [`4c243877dd52764f201cd94bfb2684d5bd3923d1`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4c243877dd52764f201cd94bfb2684d5bd3923d1): `PROVENANCE.csv`, six new source IDs `TD-SRC-212–217`.
3. [`ec29b443970a394c650e743548679d931ce665ac`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/ec29b443970a394c650e743548679d931ce665ac): `validate.mjs` updated for the batch, total source count 217 and role/class/source cross-checks.
4. [`cc6d7bfd426fd0e90fad3b23bbca7a9b28c8799c`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/cc6d7bfd426fd0e90fad3b23bbca7a9b28c8799c): `STATUS.md` append-only front section.
5. [`4c2aef151d4f163297427cf77670da1e1c291e3a`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4c2aef151d4f163297427cf77670da1e1c291e3a): `GAPS.md` follow-up limitations.
6. [`088a7e6fd48d7ecb60d2864863dceef35ae8b99b`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/088a7e6fd48d7ecb60d2864863dceef35ae8b99b): `VALIDATION.md` method and exact counts.
7. [`8da0fdd6482f6f31c9628d0bb13828e16c31a9a5`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/8da0fdd6482f6f31c9628d0bb13828e16c31a9a5): `CHANGELOG.md` commit list and non-inference boundaries.

All seven files were independently re-fetched at current branch and their blob SHAs observed; new dataset has exactly 11 data rows, provenance ledger exactly 217 source rows. No files outside Team D were changed in this batch.

## Validation — exactly what passed, and what did not

**PASS** complete checked-in `validate.mjs` structural assertions in a read-only V8 JavaScript replay at code SHA `ec29b443970a394c650e743548679d931ce665ac`: **11,479 assertions**, all **38 distinct CSV/provenance dependencies** supplied directly from GitHub PR/current branch. PR had **63 addition-only changed-file records**; 57 full patches reconstructed and six patch-omitted files directly fetched from the branch, including five large/special CSVs and `validate.mjs`. Source rows and code were not modified for the replay other than replacing Node's `fs.readFileSync(new URL(file, import.meta.url))` and strict assertion imports with isolated read-only equivalent input/assert adapters. Final validator JSON reported `PASS` with **47 institutional graph nodes, 617 typed dated edges, 20 condition rows, 249 M49 candidates (248 in UN crosswalk plus 158 ISO exception), 205 explicitly verified/44 still unverified contemporary WHO administrative region assignments, 105 direct April 2026 office-host positives, 153 mixed-year office survey labels, 228 strictly historical 2021–22 office/service observations, 34 EMA NCA identity candidates, 217 official provenance URLs and 11 new EMA role observations**.

**NOT** a native `node docs/atlas/handoffs/team-d/validate.mjs` execution: local Node v22 was available but DNS resolution of github.com blocked Git clone. **NOT** GitHub Actions, independent peer review, primary-law consolidation, per-regulator statute audit, source-document clinical/regulatory/legal approval, or verification of all product/clinical claims. Re-run native Node in an authorised full checkout and audit underlying law and decisions before publishing.

## Preserved baseline boundaries and remaining work

- **WHO:** Six regional institutions retained. All **44** explicit current WHO administrative-region `not_verified` cases remain unresolved even where 2019/2020/2021/2024/2025 WHO reporting or cooperation metadata identifies a region. **144** M49 candidates lack equivalent April 2026 affirmative physical office-host evidence; that is **not evidence of no office**. **46** retained September 2024 office survey records remain old even though independent secondary official-source checks exist; 228 WHO Jan-2021–Dec-2022 coverage records remain a separate historical cohort. Greenland July 2024 WHO/Europe MoU is not constitutional membership or 2026 regional assignment.
- **PAHO:** Dated 24 Aug 2026 14-area Barbados/Eastern Caribbean list includes French **Saint Martin 663**, undated 13-area list excludes it, and Dutch **Sint Maarten 534** is a separate area served via another route. PAHO October 2026 representative notices give January vs February 2021 contradictory Boisson old-role starting month, retain both. Indexed PAHO articles had direct-open HTTP 403; local HEARTS technical consultations are not enacted national rules.
- **WHO Europe SCI:** North Macedonia 2023 observer vs 2024 member; exact instrument and admission day not verified. Annual snapshots cannot automatically backfill formal membership dates.
- **Africa CDC/APP M:** October 2026 count **8 signed MoUs / 15 expressions of interest / 55 targeted AU states**, but only **Egypt** named as signed party individually via first-party supporting evidence. Unnamed parties have no fabricated country edges. The separately reported UPA–Africa CDC Egypt relationship is distinct from state APPM accession and EDA–Algeria regulator agreement.
- **EMA/EMRN:** **34** possible national competent-authority organization names in 30 EU/EEA jurisdictions are *identity candidates*, not automatically agencies authorised to approve any specific medicine. New Batch 29 role boundaries do **not** establish individual NCA legal mandates or regulation-type edges; verify each national legal instrument and exact Team A ID. The Commission/EMA distinction, centralised vs national routes, legal powers vs professional advice, and national clinical recommendations remain separate.
- **Networks/programmes:** PAHO HEARTS 29 first-version national-standard adopters versus undated 35 programme commitments are different groups (no blanket v2 adoption). ASEAN sectoral programme workstreams are not national clinical statutes. IDF North America/Caribbean's **22 vs 23** organization count, absent named Curaçao association, HI full-organizational versus individual associate membership, and AOECS **43/1/3 vs 41/6** category disagreement must stay source-specific. AOECS listed **21 explicit nonmember** societies; Codex observer since 1991 is the federation's own historical claim without accession instrument. Cross-team A/B/C society, ministry and journal ID joins remain exact-identity pending.
- **Publication gate:** Scientific, legal and independent-source/maintainer review incomplete; project is nonclinical educational research. Do not publish or merge. All earlier source caveats and negative cases remain intact.

## Next recovery steps

1. Independently refetch live PR #70 state/head and this checkpoint, `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `VALIDATION.md`, `PROVENANCE.csv`, `validate.mjs`, all `data/*.csv`, and original Team D/data contract. Never infer the HEAD is still `8da0fdd`.
2. Prioritise national legal/regulatory instruments for the 34 EMA NCA candidates, exact source-backed agency IDs; WHO's 44 unresolved *current administrative* region assignments, 144 gaps in direct April host positives, 46 September 2024 office recency cases; and PAHO/SCI/APPM/HEARTS/ASEAN and federations as detailed above. Dated historical/reporting context is not current administrative membership.
3. Make bounded Team D-only research, provenance and validator commits; run full native Node if an authorised checkout is accessible (otherwise clearly label a full replay vs targeted checks). Directly read back all changed files and recheck draft PR no merge. If incomplete, add another standalone checkpoint and preserve all caveats.

## User continuation prompt (verbatim)

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read "docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md" on branch "research/atlas-team-d-20261104".

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
