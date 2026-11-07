# Team A standalone verified checkpoint — Batch66 (2026-11-07)

## Guard, exact immutable commits and acceptance
- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight; [PR #68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68) remains **OPEN / DRAFT / UNMERGED**. This checkpoint is on `research/atlas-team-a-20261104`. Never touch main, website, calculator, other teams or patient-facing/clinical claims; do not merge, approve claims or mark ready.
- Pre-batch HEAD: `f72d0d8862e616ecdca70af61f49772b2543114a`. Exact immutable research **DATA**: [`2e50af630f09a0c2cd7641be79b69a162def0f81`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/2e50af630f09a0c2cd7641be79b69a162def0f81). The later documentation/QA commit is on the same Team A branch.
- **Five and only five Team A data paths changed:** `PROVENANCE.csv`, `data/legal_verification_ledger.csv`, `data/research_queue.csv`, `data/unresolved_area_audit.csv`, and [Cycle A66 original-law note](source_recovery/CYCLE_A66_052_064_744_ORIGINAL_LAW_TRIAGE_20261107.md). No government-health-body or country identity rows were promoted.
- Original comprehensive government/statutory health authority legal census acceptance remains **INCOMPLETE**. Neither structural evidence nor legal review stage indicates clinical or legal approval.

## Original-source findings this run — do not inflate
| M49 | Source observations | Newly supported narrow evidence | Important unresolved |
| --- | --- | --- | --- |
| **052 Barbados** | `A66-052-01` | Original government revised historical Health Services Cap 44 §§3–4 **visually read**: minister disease/public-health/food-drug functions and enabling power to create health/sanitation districts. Narrow **policy + original geographic enabling scope** supported. | Printed official compilation LRO **2002**, not authenticated 2026 consolidation; actual current district delegation, 2026 amendments, medicines/professional licensing, local/public institute acts and independent legal issuers pending. |
| **064 Bhutan** | `A66-064-01`, `A66-064-02` | Original BFDA **Bhutan Medicines Rules and Regulation 2025** English PDF text gives **21 Feb 2026** commencement and supersedes 2019 rules, narrowly product regulation. Separate Ministry **2025 healthcare regulation adoption notice** identified. | BFDA original PDF screenshot **timed out** (text extracted); 2022 Civil Service Reform board continuity, parent 2003 Act/Gazette, post-2026 amendments, medical practitioner and district mandates, Dzongkha and independent issuers not checked. |
| **744 Svalbard/Jan Mayen** | `A66-744-01`, `A66-744-02` | Original official jointly minister-issued **2015** health law application regulation visually read (§§3–4 Svalbard, §§18–21 Jan Mayen, §22 original commencement). Scope explicitly differentiated; **2015 as-issued territory application** source-supported narrowly. April 2026 Ministry summary independently read. | All post-2015 amendments including **July 2026 §29e REK** and **Nov 2026** research changes not integrated into a complete authoritative 2026 consolidation. Original 2015 office titles are historical; Ministry itself warns original remarks are outdated. **744 retains UNKNOWN**, not a sole or blanket ministry. |

- Exact official URLs, language, issuing body vs hosting site, printing dates, retrieval limitations and next actions are in [Cycle A66 note](source_recovery/CYCLE_A66_052_064_744_ORIGINAL_LAW_TRIAGE_20261107.md), `PROVENANCE.csv`, source-linked legal ledger and queue. Multiple ministry pages about one law are not independently issuing legal authorities. A65 2027 Svalbard budget remains **proposal**, not law.

## Measured run deltas
| Metric | Batch65 before | Batch66 after | Change |
| --- | ---: | ---: | ---: |
| Dated official M49 country/area skeleton | 248/248 | 248/248 | 0 |
| Provisional governmental authority identities | 231/248 | 231/248 | 0 |
| Documented UNKNOWN government authority identities | 17 | 17 | 0 |
| Government bodies / relationships / shared area scopes | 318 / 45 / 4 | 318 / 45 / 4 | 0 |
| Unique source/provenance observations | 734 | **739** | **+5** |
| Ledger `PARTIAL_SOURCE_CHECKED` | 22/248 | **24/248** | **+2** |
| Ledger `UNSCORED_EXISTING_RESEARCH` | 226/248 | **224/248** | **−2** |
| Queue `EVIDENCE_ADDED_NOT_RESOLVED` | 22/248 | **24/248** | **+2** |
| Legally research-complete all-tier reviews | 0 | 0 | 0 |

Workflow percentages: partially triaged **24/248 = 9.68%** (before 22/248 = 8.87%; +0.81 percentage points); unscored **224/248 = 90.32%**. **UNSCORED means existing research not yet newly audited, not proof old laws are missing.** Legal full acceptance remains NOT MEASURED / INCOMPLETE; zero legally research-complete.

```text
M49 dated geography         [####################] 248/248  before 248 -> after 248, +0
Provisional body identity   [###################.] 231/248  before 231 -> after 231, +0 (not law)
Legal workflow partial      [##..................]  24/248  before  22 -> after  24, +2
Ledger workflow unscored    [##################..] 224/248  before 226 -> after 224, -2
Legally research-complete   [....................]   0/248  before   0 -> after   0, +0
```

## QA / exact-source integrity / no approvals
- [Immutable ten-CSV structural QA](QA_BATCH66_20261107.json) was performed **after fetching exact DATA SHA** from GitHub, quote-aware. **PASS 35 positive invariants / 7 rejected negative controls**. All 248 rows match original official M49 on names, ISO and regions; all 739 unique sources; 318 body IDs, 45 edges, 4 scope rows and sources; same-area legal source ID links; 17 source-audited UNKNOWN rows; all **734 old source observations unchanged**, all non-target legal/queue entries preserved, only five Team A data paths. Source IDs `A66-052-01`, `A66-064-01/02`, `A66-744-01/02`.
- **ACTUAL `python docs/atlas/handoffs/team-a/validate.py` NOT RUN; ACTUAL `python -m unittest discover -s docs/atlas/handoffs/team-a -p 'test_*.py'` NOT RUN.** Full local checkout unavailable; JS quote-aware GitHub mirror is not those tests.
- Structural correctness does NOT prove current legal authority, competent current issuer, medical or professional licence powers, original-language enactment completeness, or patient-facing suitability. **No legal or clinical approval.**

## Specific next queue
1. **P0 UNKNOWN:** 624 Guinea-Bissau 2010 INASA Gazette/2021 order and current status; 226 Equatorial Guinea complete numbered BOE and October INSESO assignment; 581 nine separate outlying-island government-health powers; 010 Antarctic distinct operator/ACT health laws; 744 full **2026 current** FOR-747 amendments, Jan Mayen operational authorities and Svalbard local/employer carveouts.
2. **052** recent Health Services amendments, district orders and independent medical regulator statutes.
3. **064** original Medicines Act 2003 current text, board/agency continuity under 2022 reforms, 2025 Medicines Regulations as commenced Feb2026, full signed 2025 healthcare rules and district competences.
4. Rotate further previously unscored original laws across all five populated M49 regions. Do not falsely promote a 2015 historical scope as current 2026 closure; change archival retrieval strategy on blocked original access.

## Reusable exact continuation prompt
> Continue Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68. Read docs/atlas/handoffs/team-a/RUNBOOK.md and CONTINUE.md on branch research/atlas-team-a-20261104. Work from the research queue and legal-verification ledger. Research, commit, validate and checkpoint Team A-only changes; preserve caveats, keep PR draft/unmerged, and report measured progress. End by repeating this same prompt.
