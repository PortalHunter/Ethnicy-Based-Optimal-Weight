# Team A — complete standalone Batch53 GitHub checkpoint (2026-11-06)

**Status: research unfinished; full original acceptance INCOMPLETE / NOT MEASURED; DRAFT PR #68 must remain OPEN, DRAFT, UNMERGED.** This document contains enough pointers and instructions to resume without the previous conversation.

## GitHub state, isolated scope and original assignment

- Repository: `PortalHunter/Ethnicy-Based-Optimal-Weight`; PR [#68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68); ONLY branch `research/atlas-team-a-20261104`.
- Team A is restricted to `docs/atlas/handoffs/team-a/`. **Do not alter `main`, public website, clinical calculations/medical or ancestry claims, patient data, other teams' research, PR merge or ready-for-review status.** This is a research-staging governmental directory, NOT approved medical guidance.
- Read the **original full assignment** [TEAM_A_GOVERNMENT_CENSUS.md](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-five-team-handoff-prompts-2026-11-04/docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md): comprehensive **country/territorial governmental health and statutory public-health census** for every one of 248 dated UN M49 country-or-area records; ministry and public-health institute, government health research, medical/medicines regulator, health-policy/worker/surveillance/legal and national-devolved/autonomous/Indigenous/municipal mandates; official original-language issuer/date/URL, geographic scope, renames, effective dates, and unresolved notes. At least **two independent official source checks** for disputed authorities/delegation/substantial renames. Independent societies, journals and international network membership belong to other teams; WHO country office is not domestic health authority.
- Current handoff index [CONTINUE.md](CONTINUE.md); [STATUS](STATUS.md), [GAPS](GAPS.md), [PROVENANCE.csv](PROVENANCE.csv), six datasets `data/*.csv`, [dated official M49 snapshot](M49_OFFICIAL_SNAPSHOT_20261105.csv), [actual Python validator](validate.py), [five test cases](test_validate.py), and prior [Batch52 checkpoint](CHECKPOINT_20261106_BATCH52.md).
- **Previous Branch HEAD prior to Batch53:** `2f63759e0b2d5e83a16f3da81eb2135dc67ff273` (Batch52 documentation; earlier immutable Batch52 DATA `c918f03e053605cde57920dbc551f69a86b3965c`). New source note commit `d2af28b2eab71805458e7a71b6a909f4ab7403d0`; appended one original-source observation `2ed9fee209ab5a85695c327caf085523dced9ac1`; one updated UNKNOWN audit row `e0bb17f56bae44ca338537a003e6005916b641cf`; [QA JSON](QA_BATCH53_20261106.json) commit `966ebb12c0a7a05881882d185cafbb46b6ae292d`.
- **Immutable fully re-read DATA SHA:** [`e0bb17f56bae44ca338537a003e6005916b641cf`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/e0bb17f56bae44ca338537a003e6005916b641cf). Precise eight CSV blob SHAs, checks and three changed DATA paths in [QA_BATCH53_20261106.json](QA_BATCH53_20261106.json). Before further updates fetch **current live branch HEAD**, since subsequent documentation/concurrent sessions may advance it.

## Progress: do not confuse geographic or identity coverage with legal acceptance

| Measure | Independently verified Batch53 state | Interpretation |
| --- | ---: | --- |
| Dated official UN M49 country-or-area skeletons | **248/248 = 100.00%** | Geography only; each code/name/ISO/region exact to dated official snapshot |
| Provisional areas with scoped governmental health-body identity | **231/248 = 93.15%** | Some evidence of identity, not full mandate, currently enacted statute, clinical approval or exclusive regional control |
| Explicitly UNKNOWN areas | **17/248 = 6.85%** | Unresolved authority/competence, not evidence of absence |
| Distinct government-body identity records | **318** | Separate governmental units, not 318 complete current legal acts |
| Sourced narrow same-government relationships | **45** | No inferred cross-area parent |
| Explicit source-limited shared authority-area scopes | **4** | Explicit records only; no broad jurisdiction inference |
| Coverage review records | **248** | Review is not legal certification |
| Provenance/source-state observations | **692 (+1 over Batch52)** | Includes failures, secondary translations and historical law/policy, NOT 692 verified mandates |
| Full current original signed independent issuer + all-level legal responsibility/medicine/regulator/territorial competence | **NOT MEASURED — INCOMPLETE** | No defensible numeric legal-acceptance rate; no clinical approval |

```text
Dated official M49 geography     [####################] 248/248 100.00%
Preliminary authority identities [###################-] 231/248  93.15%
Still-UNKNOWN areas              [#-------------------]  17/248   6.85% remaining
Full enacted legal acceptance    [????????????????????] NOT MEASURED / INCOMPLETE
```

## Batch53 — substantive original-language source recovery, no premature promotion

- New source **A53-624-01**, Guinea-Bissau M49 **624**: Republic of Guinea-Bissau Ministry of Public Health (**MINSAP**), *Plano Nacional de Desenvolvimento Sanitário (PNDS III) 2023–2028*, **June 2023 final**, primary ministry-authored Portuguese report archived by **WHO**: https://extranet.who.int/uhcpartnershiplivemonitoring/system/files/doc_attachments/PNDS%202023-2028_Vers%C3%A3oFinal1.pdf .
- **PDF both text and screenshots reviewed 2026-11-06**: zero-index PDF **pp.30 and 32**, printed **report pp.31 and 33**. Printed p31 explicitly reports **“Não aplicação do estatuto do INASA e défice da dotação orçamental para a implementação do plano estratégico do INASA”** as of the **2023 plan's diagnostic**, alongside INASA regional focal points and data-quality gaps. Printed p33 describes central MINSAP policy/strategy/regulation/fiscalization and central/regional/local health tiers **as a 2023 governmental policy narrative**.
- Crucial distinction: **historical *non-application* of a statute is NOT non-enactment, legal nullity or proof of non-application in November 2026**. WHO is document host, not domestic issuer. Batch51 separately retrieved original 2025 printed Gazette (third-party FAOLEX mirror), where **Decreto 31/2024 published 27 January 2025** approves PNDS III strategic policy, not a comprehensive INASA statutes/current regulator act. Batch52 recovered **IANPHI English historical third-party translation** of 2010 INASA statutes; this is neither original domestic Gazette nor confirmed operative 2026 amended text. Distinct government authors/publishers do not amount to two independently **issuing** original current INASA health acts.
- The source, careful temporal and issuer limitations, exact URLs/pages and targeted next legal checks are in [CYCLE_624_PNDS_2023_INASA_IMPLEMENTATION_GAP_20261106.md](source_recovery/CYCLE_624_PNDS_2023_INASA_IMPLEMENTATION_GAP_20261106.md). One dated provenance ID **A53-624-01** appended without changing any prior record. Only M49 624's `data/unresolved_area_audit.csv` row updated; **other 16 UNKNOWN rows preserved**. 624 stays **UNKNOWN**, no new ministry identity, regulator, area hierarchy, delegation or clinical claim promoted.

## QA on actual immutable commit (structural, not enacted/legal)

- Fetched **all eight full CSVs from exact immutable DATA SHA** and separately recorded Git blob hashes; performed quote-aware structural mirror against repository `validate.py` invariants: 248 exact official M49 rows/region counts, zero silent omission/ISO drift, identity links and statuses, 318 government body references, 45 relationships, 4 source-backed cross-area scopes, 248 coverage rows, 17 UNKNOWN audits with valid source IDs, unique dated/HTTPS provenance. **PASS structural**.
- Prior **691** provenance records are exact byte-identical prefix of **692** records; exactly one new ID. Only M49 **624** UNKNOWN audit updated; 16 others compare equal. GitHub `compare_commits` from pre-batch HEAD to DATA commit shows **3 commits and exactly 3 paths** (source note, PROVENANCE and audit) **all inside Team A**. No edits to website/main/other teams.
- **Actual Python validator and five `test_validate.py` unit cases NOT EXECUTED in Batch53**: local `git ls-remote` fails DNS for `github.com`, preventing full checkout; last actual documented Python validation Batch41. Independent JS full-source structural mirror is **not** Python or substantive legal certification. Do not imply legal issuer independence or clinical approval.
- New file `QA_BATCH53_20261106.json` records immutable SHA, all eight exact source blob IDs and source-state caveats. Read it back after the checkpoint commit.

## Remaining area research and priority queue

**All 17 current UNKNOWN M49 codes:** `010,074,086,104,112,226,239,260,275,334,364,408,581,624,732,744,887`. Exact source-linked reasons and next actions are in `data/unresolved_area_audit.csv`. Preserve competing-sovereignty and actual control caveats, government issuer vs publisher, draft/proposed vs effective, no-permanent-population and national-vs-worker/specific-person distinctions.

1. **624 Guinea-Bissau**: recover **26 August 2010 original Portuguese Gazette no.34 third supplement**, complete Decreto 11/2010 pharmaceutical and 12/2010 INASA original text with amendments; determine whether diagnosed 2023 INASA statute *non-application* was remedied, based on signed later administrative/health acts rather than WHO host or plan approval. Current ministry organic regulation, district/regional and Autonomous Sector of Bissau health functions, research/lab/pharmacy/worker competences, independent legal issuer checks all pending.
2. **010 Antarctica**: Treaty VIII only nationality jurisdiction over designated treaty personnel for treaty functions, not area-wide health law; obtain distinct operative country/operator/station/worker health acts and person-specific jurisdictions without claims about sovereignty.
3. **581 U.S. Minor Outlying Islands**: each of nine component islands needs its own signed current health/worker delegation. Wake CFR powers and 2023 DOI amendments are narrow; FWS refuge or Navy/Air Force land control != health competence; obtain current operative written redelegations and 2026 amendment status.
4. **226 Equatorial Guinea**: obtain published original BOE June Decreto Ley 02/2026, reconcile September BOE presidential appointment 114/2026 and October reported expanded ministry title, verify INSESO hospital transfer by original completed act.
5. **744 Svalbard and Jan Mayen**: independently current full Norwegian legal FOR-2015-06-22-747 and post-2026 amendments; separate distinct geography, healthcare/worker/health-regulator powers, confidentiality and research-law commencement.
6. **Other 12 UNKNOWN** (`074,086,104,112,239,260,275,334,364,408,732,887`) plus **all 231 provisionally identified areas**: independently enacted current ministry, health/public-health/medicines regulators and institutes; national vs state/territorial/municipal/Indigenous/multilingual delegated duties, separate issuing sources and effective dates. **Full acceptance percent intentionally not fabricated.**

## Safe next-operator procedure

1. Fetch PR #68 and branch HEAD live; re-read `CONTINUE.md`, this checkpoint, original acceptance prompt and all eight CSVs/current source notes before editing. The earlier PR body may lag new GitHub handoffs; treat **branch HEAD and immutable DATA** as authoritative.
2. Research manageable targeted official-primary originals, verify dates/issuers and source scope. For each finding append a unique dated provenance record, exact official URL and source-language/issuer state; update only affected unknown-audit rows and add a narrow source-recovery note. Do not rewrite/discard historical contradictory sources or inferred parent M49 links.
3. Fetch blob SHA immediately before every change; write on `research/atlas-team-a-20261104` **only** in Team A directory, verify readback/compare commits and reconcile concurrent work safely. Run `python docs/atlas/handoffs/team-a/validate.py` and `python -m unittest discover -s docs/atlas/handoffs/team-a -p 'test_*.py'` in an available complete checkout; if unavailable, perform full exact-GitHub independent structural mirror and label Python **NOT RUN**.
4. After every batch, save full standalone checkpoint, immutable data SHA and hashes/QA, update status/gaps/continuation, report 248 geography vs 231 provisional vs 17 unknown vs **unmeasured legal acceptance**. **Leave PR OPEN/DRAFT/UNMERGED; no website or other teams.**

## Exact reusable continuation prompt (unchanged user request)

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
>
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`, including its latest checkpoint and original acceptance criteria.
>
> Verify live GitHub state and continue autonomously. Preserve all research, legal/source caveats, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team A's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.
>
> If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars showing verified geographic coverage, unresolved areas, and remaining legal-verification work. Distinguish coverage from full acceptance completion.
