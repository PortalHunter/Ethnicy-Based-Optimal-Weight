# Team D — standalone Batch 56 evidence-closure checkpoint (2026-11-07)

## Authorized scope and starting state

Research branch `research/atlas-team-d-20261104`; draft [PR #70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70), live checked OPEN/DRAFT/UNMERGED. Starting PR SHA `f8b480f61e60754126f8e3b4f5ed2a00d4780cd2` (Batch 55); Batch 56 case + provenance + validator data tip `6c022a569259d929c29568c228e27ad436d379b0`. Only `docs/atlas/handoffs/team-d/` is writable in this assignment. No main, website, Team A/B/C or clinical-publishing modifications; no merge or ready-for-review transition. Recheck live state before any subsequent mutation.

Read [CONTINUATION_PROMPT.md](CONTINUATION_PROMPT.md), [COMPLETION_PLAYBOOK.md](COMPLETION_PLAYBOOK.md), [GAPS.md](GAPS.md) and the [original Team D acceptance](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-five-team-handoff-prompts-2026-11-04/docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md). Earlier checkpoints and contradictions are preserved.

## Four existing-gap audits, two new inspectable original sources, one blocked primary URL

The four machine-readable decisions are in [batch56 cases](data/closure_case_review_2026-11-07_batch56.csv). The original source ledger increased **313 → 316 URLs** (+3; **two currently readable sources and one discovered but inaccessible original-delegation PDF target**). Greenland source references `TD-SRC-194/195` were already in the existing ledger, **not duplicate new citations**.

1. **Malta original regulations, `TD-CASE-056-001`:** inspected 82-page original consolidated [S.L. 458.34 PDF](https://legislation.mt/getpdf/65fa9e89041a1a19f02cdf53), point-in-time 12 March 2024 (the title page lists L.N. 61/2024), including visual pages 1, 4 and 7. Regulation 4(1)(a) calls for the **Licensing Authority** grant except the distinct European-centralised route; regulation 5(1)(a) refers applications to the **Medicines Authority for processing**. Current Maltese [government service page](https://www.servizz.gov.mt/en/services/web-00169), last updated 16 June 2026, directs Regulation 4(2) application filings to the Medicines Authority's Licensing Directorate. Processing or application location **does not** prove who signs grants under a current delegation; the agency's conflicting registration attribution remains unadjudicated. This is **direct primary-rule substantiation for a narrow provision**, not a complete 2026 national law + delegation + exact Team A ID audit.
2. **Malta S.L. 458.39 original delegation, `TD-CASE-056-002`:** official [portal](https://legislation.mt/eli/sl/458.39/eng/pdf) exposes viewer resource [getpdf/6022596dbc8272018c0f4798](https://legislation.mt/getpdf/6022596dbc8272018c0f4798). Direct PDF open failed and local network DNS download was unavailable. Its full operative text, amendment chain, effective-date language, actual grant-decision authority and exact Team A regulator identity **have not been read or resolved**. This is a useful original retrieval lead, **not evidence that the delegation exists in a particular current scope**. The portal is a historical 22 July 2010 point-in-time view.
3. **Greenland M49 304 region, `TD-CASE-056-003`:** re-reviewed existing WHO original [2023 ministerial visit](https://www.who.int/europe/news/item/04-07-2023-a-new-era-of-partnership-and-exchange-between-who-europe-and-greenland) and [2024 5-year health-cooperation MoU announcement](https://www.who.int/europe/news-room/01-07-2024-strengthening-health-and-well-being-in-greenland--a-landmark-collaboration-agreement-with-who-europe). They document bilateral WHO/Europe cooperation, **not** direct-current WHO institutional territory administration, separate regional membership or a WHO office in Greenland. The 2024 newsroom item appeared through official indexed text but its direct page returned a generic newsroom template. Retain `not_verified` current 2026 region; 1955 provisional historical EURO assertion remains historical only.
4. **Greenland April host survey, `TD-CASE-056-004`:** same older cooperation releases do **not** contain an affirmative April 2026 WHO office-host survey return or establish a Greenland physical resident office. Distinguish Copenhagen WHO/Europe headquarters meetings, cross-border cooperation, country-office premises and the April 2026 source snapshot. Missing-positive does **not** mean office absent.

**Closure accounting:** four existing gaps selected; **zero original strict WHO-region, April affirmative host, complete regulator-law/Team A audit closures**; two case-specific source-qualified subclaims (Malta S.L. 458.34 provision and already-documented Greenland WHO/Europe cooperation), one primary instrument blocked (S.L.458.39), one April survey classification still pending. New unique provenance rows **+3**, of which one records an inaccessible official PDF route. No new network nodes or graph edges; no novel Greenland agreement invented.

## Live-branch structural metric readback and required 20-slot visual gates

Direct GitHub branch CSV readback after validator/data commit gives 249 ISO numeric candidate codes, 47 network nodes, 619 typed dated edges, 316 distinct provenance IDs and distinct source URLs, 34 EMA NCA identity candidates and 105 affirmative April office-host rows. Exactly 205 direct-current WHO administrative rows remain assigned and 44 `not_verified`. These bars measure **separate evidence thresholds**, not a merged completeness or approval score.

```text
Strict evidence gate                    Before → After                                   Δ run    Remaining unresolved/without equivalent evidence
WHO current institutional regions       ████████████████░░░░ 205/249 (82.3%) → 205/249 (82.3%)   +0      44 M49 cases not_verified
April 2026 affirmative office host      ████████░░░░░░░░░░░░ 105/249 (42.2%) → 105/249 (42.2%)   +0     144 without the specific positive, NOT 144 absent offices
EMA original role-source identities     ████████████████████ 34/34 (100%) → 34/34 (100%)         +0       0 source-description gaps; legal tests still open
Full law+delegation+exact Team A ID      ░░░░░░░░░░░░░░░░░░░░   0/34 (0%) → 0/34 (0%)             +0      34 full legal/identity packets unverified
```

The 46 older September-2024 survey rows and 228 separately historic 2021–2022 office/service records are preserved without promotion. The 144 non-affirmatives are an evidence denominator, **not** a claim that 144 separate offices should exist.

## Source quality, tests, and immutable commits

- [Case creation `51fd0d14`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/51fd0d14cc171847816f745c36b3149c4e561e86); [case source-ID reconciliation `a257074b`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/a257074ba58ed99d06e883640a891b9f6b0158d1); [provenance source addition `ceb25c50`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/ceb25c50a8c445dfca43df1a60e7e1dbbcf84a31); [validator update `6c022a56`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/6c022a569259d929c29568c228e27ad436d379b0).
- Targeted live-GitHub RFC-4180 CSV parsing and source join checks **PASS**: 4 unique case keys, 316 unique provenance IDs and URLs, matching case source ID/URL pairs, valid CSV widths, M49 codes for cases, all four strict numerator delta cells `0`, 249/205/44 WHO rows, 105 office-positive rows, 34 EMA candidate identities, 47/619 graph. `validate.mjs` now checks Batch 56 and 17 assertions use the updated 316-source count. Immutable file blobs read back at `10bda0b2` (cases), `52cc8c1d` (provenance), `8fa89b3b` (validator).
- **FULL CURRENT-SNAPSHOT CHECKED-IN NODE VALIDATOR NOT RUN**: no executable authorized full repo checkout in this runtime; native GitHub clone DNS was unavailable. Read-only targeted parser checks are **not** equivalent to running the 102kB `validate.mjs`, a complete V8 shim or GitHub Actions. No primary S.L.458.39 facsimile or independent national statutory audit, clinical/scientific/legal appraisal, or maintainer approval.

## Original acceptance matrix and next routes

| Original gate | Structural status | Gaps, approval separation |
| --- | --- | --- |
| Six WHO regional offices and dated transitions | Met structurally | 44 current territory assignments unresolved; Indonesia 2025 transition retained, source-owner review needed |
| At least 10 typed source- and date-qualified international relationships | Met structurally: 619 edges unchanged | Specific governance instruments and periods still incomplete |
| At least 10 explicit negative/boundary cases | Met structurally | Cross-border service, legal authorization, office host and membership must remain disjoint |
| M49/network status + provenance + overlap model | Met structurally: 249 candidates, 316 URLs | Full native validator and original-document source review pending |
| All seven condition keys have international institutional links | Met structurally: 20 refs inherited | **Separate independent scientific/clinical appraisal never approved** |
| National medicines authority full amended law+delegation+exact Team A ID | **Not met: 0/34** | Primary Malta S.L.458.39; all remaining agencies need original operative law and **independent legal review** |

Next select 2–5 evidence gaps with new original retrieval leads, rather than repeatedly reading older insufficient sources. Ask the Malta State Advocate's legislation custodian for an accessible operative S.L.458.39 and amendment/commencement chain; separately obtain the exact current Malta Medicines Authority Team A identity read-only and an original grant specimen. Request WHO Headquarters/Europe **explicit current Greenland administrative territorial allocation** and **April 2026 WHO original host survey respondent**, not inferred from a 2024 MoU. Continue WHO other 43 territory questions and relevant international primary governance instruments after two distinct source routes saturate. Preserve all previously documented PAHO, IDF, AOECS, Codex, SCI, APPM and institutional-status contradictions.

The new standalone checkpoint is an auditable research handoff, **not a legal, scientific, clinical or maintainer signoff**. Keep PR #70 open, draft and unmerged.
