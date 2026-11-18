# Team D complete standalone GitHub continuation checkpoint — Batch 36 (2026-11-06)

## Authoritative restart and permitted scope

Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight . Existing branch: `research/atlas-team-d-20261104` ; existing PR [#70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70), targeting `main`. Independently verified PR **OPEN / DRAFT / UNMERGED** at research head `d0c9ea10c24e1b1f7796d5a98a973d5dcf811633`. The documentation checkpoint commit necessarily moves the branch head again: **always refetch live PR and head before modifying**. Never merge, mark ready, close issues, modify `main`, live/public calculator or other teams. Exclusively modify `docs/atlas/handoffs/team-d/`; do not infer personal clinical/genetic guidance.

Original Team D acceptance criteria: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`, plus shared `DATA_CONTRACT.md` on that branch. Requirements include all six distinct WHO regional offices, at least ten source-dated, typed cross-border institutional relationships and ten negative/boundary examples, seven-condition links, M49 matrix, reproducible source provenance, and unresolved membership/office/legal statuses. Structural breadth does **not** mean reviewed national authority, current premises, scientific/clinical approval or integration acceptance.

## New substantive Batch 36 and evidence limitations

Research commit: [`d0c9ea10c24e1b1f7796d5a98a973d5dcf811633`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/d0c9ea10c24e1b1f7796d5a98a973d5dcf811633). New `data/emrn_nca_national_remit_evidence_2026.csv` rows `TD-NCA-REMIT-047–054` (eight) spanning four previously unchecked EMA NCA identity candidates, with exact original candidate IDs, EMA display labels, and M49 geographic codes:
- **Bulgaria**, `TD-EMRN-NCA-003` / `100`, 2 observations, official BDA applicant procedures for national, MRP and DCP medicinal-product applications and EU clinical-trial results via CTIS; *not* a European Commission central grant, legal nationwide clinical guideline or evidence of individual study approval.
- **Cyprus**, `TD-EMRN-NCA-005` / `196`, 3 observations: Pharmaceutical Services expert dossier assessment, **Drugs Council final national MA grant** following subcommittee recommendation, and separate national/MRP/DCP/central/special/parallel-import routes. Source references 2001 national legislation; **current consolidated amendments and delegated decision-making not independently audited**.
- **Lithuania**, `TD-EMRN-NCA-020` / `440`, 2 observations: SMCA national marketing remit/exclusions and national authorisation flow separates Marketing Authorisation Board opinion from SMCA issuing the national decision. The agency page `2026-02-10` date is a **webpage update**, not date legal power began.
- **Slovakia**, `TD-EMRN-NCA-031` / `703`, 1 observation: State Institute for Drug Control inspection of manufacture, distribution, pharmacies and authorisation holders. References Act 362/2011 **as amended**; not a complete current-law audit or individual medicine marketing grant.

Six direct-opened official HTML URLs, unique provenance `TD-SRC-252–257`:
1. https://www.bda.bg/en/information-for-companies
2. https://www.moh.gov.cy/moh/phs/phs.nsf/All/6DCF211DA60106B4C22588C90022AF34
3. https://www.moh.gov.cy/moh/phs/phs.nsf/All/D7A411F2E214A625C22585820034E8EF
4. https://vvkt.lrv.lt/en/structure-and-contacts/about-us/
5. https://vvkt.lrv.lt/en/marketing-authorisation/authorisation-procedures/
6. https://www.sukl.sk/en/inspection/scope-of-activities

**Source access boundary:** Latvian ZVA official agency pages were indexed in first-party snippets but returned 403 on *direct open*, therefore Latvia remains unreviewed under the direct-official-HTML evidence threshold. Iceland island.is also returned 403 and old ima.is is expressly retired; Sweden official regulator page returned JS-only. Keep their unresolved state. No new WHO, graph or `regulates_medicines_in` edge; no apparent role automatically yields binding regulation, clinical adoption or treaty membership.

## Metrics with correct date-specific denominators

| Dimension | Confirmed | Unknown / work pending | Evidence limitation |
|---|---:|---:|---|
| Geographic M49 inventory | 249/249 tracked (248 official UN + seed exception 158) | — | geography != WHO region |
| WHO direct-current administrative region | **205/249 = 82.3%** | **44/249 = 17.7%** | cannot inherit parent/geographic grouping |
| WHO April 2026 affirmative office *hosts* | **105/249 = 42.2%** | **144/249 = 57.8%** | unknown != office absent; service != premises |
| Older survey and historic services | **46** September 2024 surveys, **228** January 2021–December 2022 services | recency/typology audit | not interchangeable with April 2026 |
| EMA NCA candidate identities | **34** across 30 EU/EEA geographic areas | multiple agencies per state | candidate identity != authority |
| Direct official role source coverage | **25/34 = 73.5%**, 54 role observations | **9/34 = 26.5%** | short official source != complete statutory law |
| Independent complete 2026 consolidated statute, delegation and exact Team A ID | **0/34 approved as complete** | **34/34** | legal audit and identity joins outstanding |
| Typed network graph | **47 nodes / 617 time-qualified relationships**, 20 seven-condition observations | conflicts below | no automatic country guideline adoption |
| Unique source URLs | **257** | primary facsimiles and legal instruments open | indexed and original dates differentiated |

## Validation, commits, readbacks and limitations

Three-file atomic substantive commit `d0c9ea10c24e1b1f7796d5a98a973d5dcf811633` changed **only** `docs/atlas/handoffs/team-d/PROVENANCE.csv`, `docs/atlas/handoffs/team-d/data/emrn_nca_national_remit_evidence_2026.csv`, and `docs/atlas/handoffs/team-d/validate.mjs`. Precommit executed targeted width/uniqueness/cross-file 54-role/257-provenance/34-EMA-candidate checks **PASS**. GitHub readbacks confirmed role/provenance/validator blobs `1d1cd62c5dafa8717be5df59ab1559530ad372a8`, `2e5af2750078870837368846e8b1c793619b804d`, `0e492d917b892c8d02d0ff30b0c9f7affd006666`, and compare enumerated exactly these three Team D paths. Updated `validate.mjs` expected counts and source/decision-boundary assertions. **Full checked-in validator for Batch 36, native Node CLI and GitHub Actions are not yet independently executed.** Batch 35 full read-only V8 shim PASS 12,092 assertions over 39 source dependencies is a **previous snapshot** and cannot be restated as Batch 36 validation. Neither structural checks nor original agency pages mean current legal, scientific, clinical or maintainer signoff. This documentation commit adds six Team D paths; refetch the final head to verify.

## Remaining research priorities and conflicts

1. WHO current administrative region **44 unknown**, especially territories and parent/region conflicts. Do not assume UN region, program service, WHO historical 2021 SIDS annex, or country event tag equals present administrative assignment. Indonesia WHO WPRO transfer **2025-05-23**, Algeria AFRO versus UN Northern Africa, US constitutional WHO governance still distinct.
2. **144** without April-2026 affirmative WHO office-host evidence; retain September 2024 profiles and 2021–22 historic office/service arrangements as separately dated observations. Physical host, liaison, MCO service and telehealth/remote cooperation are different.
3. **Nine** still needing direct national regulator role source review: Greece, Hungary, Iceland, Latvia, Liechtenstein, Luxembourg, Portugal, Romania, Sweden. **All 34** independently current complete consolidated national statutes, delegations, exact Team A organization IDs still pending. Maltese grant-attribution disagreement and French April-2026 article time slice unresolved.
4. PAHO dated 14 vs undated 13 Eastern Caribbean serviced areas including French Saint Martin, **not** Dutch Sint Maarten; PAHO Boisson former start Jan vs Feb 2021; North Macedonia SCI original accession instrument/effective day; Africa CDC APPM eight signed (only Egypt named; seven unknown) versus 15 expressions of intent; IDF NAC 22 vs 23; AOECS full/associate/affiliate category 43+1+3 versus 41+6 and explicitly nonmembers; Codex historical observer 1991 claim lacking instrument; HEARTS listed local pathways not evidenced national binding adoption, ASEAN coordination not enacted national medicine laws; exact Teams B/C joins and expert scientific/clinical review outstanding.
5. Run **full actual validator** in a real Node-capable checkout when available, independently verify source facsimiles and legislative effective-date editions, commit any source-qualified corrections. Keep PR OPEN/DRAFT/UNMERGED, only Team D research path, no site/main/other team writes.

## Exact reusable continuation prompt

```text
Continue Research Team D in [https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70).

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
