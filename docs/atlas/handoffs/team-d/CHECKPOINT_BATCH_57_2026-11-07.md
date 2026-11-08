# Team D — standalone Batch 57 evidence-closure checkpoint (2026-11-07)

## Scope, acceptance and immutable commits

[Draft PR #70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70) on `research/atlas-team-d-20261104` was **OPEN / DRAFT / UNMERGED** when checked. Starting branch SHA `c1b2269d5775a8fa91dc41aac69eec1ab1f21145` (Batch 56 handoff); evidence/validator SHA `20a171907801902901048b4514ccd08756ef0d95`. The original Team D [acceptance criteria](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-five-team-handoff-prompts-2026-11-04/docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md), [completion playbook](COMPLETION_PLAYBOOK.md) and preceding [Batch 56 checkpoint](CHECKPOINT_BATCH_56_2026-11-07.md) were read. This run modified **Team D research only**; no `main`, public site, Team A/B/C, merge, PR readiness change or clinical claim approval.

Immutable research commits: [four gap cases `6bbee41f`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/6bbee41f6d254b1b90679243cdac71913f5ad65c), [five provenance additions `81ecd5a7`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/81ecd5a775a5bac49da8d7c9387128d54bb4500f), [validator checks `20a17190`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/20a171907801902901048b4514ccd08756ef0d95). Four auditable [case records](data/closure_case_review_2026-11-07_batch57.csv), `TD-CASE-057-001–004`, and new `TD-SRC-317–321` were independently read back from GitHub. `PROVENANCE.csv`: **316 → 321 unique original URLs (+5)**.

## Four selected existing gaps; source-qualified findings and strict closure

1. **Mayotte (M49 175), WHO regional administration — `TD-CASE-057-001`.** Directly inspected [WHO April 2025 operational report, PDF p. 13](https://cdn.who.int/media/docs/default-source/documents/emergencies/whe-mou-april-2025-final.pdf?download=true), including screenshot: WHO/Europe coordinated a GOARN rapid-response mobile laboratory in Mayotte between **15 January and 3 March 2025**. This verifies temporary operational support, not Mayotte's **current 2026 WHO institutional administrative region**. Retain `not_verified`. New source `TD-SRC-317`.
2. **Mayotte April-2026 office host — `TD-CASE-057-002`.** The same dated 2025 temporary deployment is not a 2026 WHO office survey, a country-host agreement or proof of continuing occupied WHO premises. No affirmative April 2026 join promoted; absence of positive is not evidence of an absent office. Request original WHO 2026 country-presence profile/host survey.
3. **Latvia national medicines law, EMA candidate `TD-EMRN-NCA-018` — `TD-CASE-057-003`.** Inspected Latvia's original-language official [*Farmācijas likums* consolidation](https://m.likumi.lv/ta/id/43127-farmacijas-likums), valid **29 May–17 November 2026**. Sections **3–5, 10 and 11** distinguish Ministry of Health, Health Inspectorate, State Agency of Medicines and National Health Service roles. Section 10 directly identifies Agency medicine evaluation/registration, clinical trial decisions, manufacturer/wholesaler licensing and pharmacovigilance functions; outpatient reimbursement pricing under section 11 is a separate National Health Service function. The official [English translation](https://likumi.lv/ta/en/en/id/43127-pharmaceutical-law) itself warns it is outdated after **28 May 2026** and omits the 30 April 2026 amendment. These are original text and controlled comparison **partial legal-remit findings** (sources `TD-SRC-318–319`), **not** a complete amended implementing-regulation/delegation/commencement/current grant/exact Team A agency identity packet; independent legal-language review remains necessary.
4. **French Guiana (M49 254) WHO region — `TD-CASE-057-004`.** WHO's directly opened [GISRS National Influenza Centres page](https://www.who.int/initiatives/global-influenza-surveillance-and-response-system/national-influenza-centres) lists **France – French Guiana – Cayenne, Institut Pasteur de la Guyane** under its Americas surveillance programme inventory. The official [PAHO territory page](https://www.paho.org/en/french-guiana) was visible through first-party indexed text, but direct opening failed **HTTP 403**. Neither a WHO-recognized laboratory nor an indexed PAHO territory profile is a binding WHO institutional territorial allocation, independent WHO Country Office premises, or April affirmative host survey. Keep `not_verified` current WHO region. Sources `TD-SRC-320–321`.

**Run throughput:** Existing gaps selected **4**; directly verified **strict gate closures 0**; source-qualified narrow propositions documented **3** (Mayotte time-bounded deployment, Latvia current statutory remit, French Guiana influenza programme presence); missing source-boundary/criterion classifications documented **3**; new provenance sources **5**; no current formal allocation or full legal audit promoted. No additional graph edge or society membership inferred.

## Live GitHub metrics and 20-slot evidence bars

Measured at evidence SHA `20a17190` from original CSVs and source ledger, not prior prose. Four numerators and denominators are deliberately separate:

```text
Gate                                 Before → After                                Δ run   Still unresolved / without equivalent positive
Current WHO administrative regions   ████████████████░░░░ 205/249 (82.3%) → 205/249 (82.3%)  +0  44 not_verified
April 2026 affirmative office hosts  ████████░░░░░░░░░░░░ 105/249 (42.2%) → 105/249 (42.2%)  +0  144 without April positive; not 144 absent offices
EMA first-party role identities      ████████████████████  34/34 (100%) → 34/34 (100%)         +0  0 original role-list gaps; no statute signoff
Full law + delegation + Team A join  ░░░░░░░░░░░░░░░░░░░░   0/34 (0%) → 0/34 (0%)              +0  34 full legal packets pending
```

Preserved **47 graph nodes/619 typed dated edges**, **46 older September 2024 WHO office survey labels**, **228 separate historical 2021–22 service/office records**. The April denominator is an *evidence coverage* gate, not a goal that all areas must host a physical WHO office. Percentage slot widths are rounded to nearest slot.

## Validation and write isolation

**Targeted cross-file GitHub readback checks PASS**, based on eight files at `20a17190`: correct RFC-4180 widths; unique four case IDs and unchanged strict-delta field; exact five new IDs/URLs joined into **321 unique provenance IDs/URLs**; 249 M49 areas, 205 source-verified administrative regions and 44 unknown; 105 direct April affirmative hosts; 34 EMA identities; 47 nodes and 619 edges; correct Latvia and WHO M49 candidates; updated Batch57 validator checks and its 18 expected-321 count assertions. GitHub compare `c1b2269...20a17190` gives exactly **three Team D-only files/commits**, ahead 3, behind 0, with no outside paths.

**FULL CHECKED-IN CURRENT-SNAPSHOT VALIDATOR NOT RUN.** A read-only full V8 replay was attempted but the connected GitHub tools reached their call limit before loading all ~61 CSV dependencies; local `git ls-remote` independently failed GitHub DNS resolution, so native Node checkout was unavailable. **No native Node run, GitHub Actions, independent law/delegation review, medical/scientific/clinical appraisal or maintainer approval** is claimed. Prior historical shim passes do not validate this snapshot.

## Original acceptance matrix, next evidence routes

| Original Team D gate | Structural status | Evidence/review still needed |
| --- | --- | --- |
| Six dated WHO regional offices/transitions | Met structurally | 44 territories without direct-current institutional assignments; request specific administrative authority |
| At least ten typed dated international relations | Met structurally (619 edges) | Original agreements, dates and legal/voluntary category conflicts remain |
| Ten or more explicit negative/boundary cases | Met structurally | Historic emergency operations and surveillance sites are not office host/region/governance proofs |
| Reproducible M49/provenance/overlap model | Met structurally (249/321) | Full current checkout validation and source-owner quality review outstanding |
| Institutional links for all seven condition keys | Met structurally (20 inherited references) | Independent scientific/clinical review **not approved** |
| 34 current EMA NCA statute/delegation/identity packets | **0/34 complete** | Latvia implementing acts, law-language review, grant specimens and exact Team A ID; Malta S.L.458.39 and other national originals pending |

**Priority next retrieval:** obtain WHO HQ/formal territorial roster or competent regional allocation answers for **Mayotte 175** and **French Guiana 254** (do not infer from regional emergency/surveillance); seek Mayotte original April 2026 survey; for **Latvia 428**, trace the 29 May 2026 effective law to current Cabinet implementing rules, precise agency signatory, any delegated decisions and exact Team A institution read-only, with independent local-law review. If two distinct source routes saturate, switch to another of 44 WHO boundary cases, 144 April survey non-positives, 33 other incomplete national packets or named original network-instrument conflicts. Preserve contradictions and leave the PR draft/unmerged. The research is not published clinical guidance.
