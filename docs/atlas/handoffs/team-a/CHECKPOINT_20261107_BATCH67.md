# Team A standalone verified checkpoint — Batch67 (2026-11-07)

## State, safeguards and immutable data
- Branch: `research/atlas-team-a-20261104`; [PR #68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68), **OPEN / DRAFT / UNMERGED** throughout this run. Research staging only, no merge, ready-for-review, clinical approval, legal sign-off, main, site, calculator or other team modification.
- Pre-run head: [`1c20278dc721fcf143c2d4083e7732fde7f9ead5`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/1c20278dc721fcf143c2d4083e7732fde7f9ead5). **Immutable verified research DATA**: [`be228bd8aa459e59e7da243f72800c55070f2f78`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/be228bd8aa459e59e7da243f72800c55070f2f78).
- Exact source analysis [Cycle A67](source_recovery/CYCLE_A67_010_072_090_ORIGINAL_LAW_TRIAGE_20261107.md); independent structural audit [QA_BATCH67_20261107.json](QA_BATCH67_20261107.json). Only **five** original research paths changed from baseline through data commit: `PROVENANCE.csv`, `data/legal_verification_ledger.csv`, `data/research_queue.csv`, `data/unresolved_area_audit.csv`, and Cycle A67 note; all within Team A.
- Preserve source caveats, issuer distinctions, incomplete statutory scope and all 739 pre-batch provenance observations. Official M49, country/identity/bodies/relationship/scope records are unchanged.

## Exact original law and jurisdiction findings
| Area | New observations | What the checked source actually supports | Still missing |
| --- | --- | --- | --- |
| **090 Solomon Islands** | `A67-090-01` | AG authorised English Health Services Act Cap100 reprint **as in force 5 Feb 2024**, original §§3–4 Ministry and primary healthcare, §§10–12 provincial / Honiara **permitted** arrangements; 2023 Act17 amendment §14 effective Feb 2024. Original issuing legislator, government publication host distinguished. | 2025/2026 amendments and current commencement, evidence actual provincial/Honiara arrangements, medicine/profession/surveillance and independent issuer laws. Narrow law dimensions SOURCE_SUPPORTED as dated **2024** evidence, not complete current jurisdiction. |
| **072 Botswana** | `A67-072-01/02/03` | Original Parliament as-issued **Public Health Act No11/2013** and **Medicines and Related Substances Act No29/2025**. Both expressly require **Minister Gazette commencement ON NOTICE**. Regulator BoMRA Aug 2026 narrative says implementation yet describes regulations as **DRAFT**. | Original Gazette appointed-date notices, post-assent changes, repeal/transitional status, current 2026 regulation final text, professions, municipal laws and distinct legal issuers. All scored operative legal dimensions **RESEARCHED_INCOMPLETE**; neither law promoted to current force just from assent/press. |
| **010 Antarctica** | `A67-010-01` | ACT government `Public Health Act 1997` A1997-69 current R45 effective 26 Nov 2025 **in ACT**; 2026 bill identified as proposed. Commonwealth AAT Act §6 has **qualified and sector-specific** application rules, previously reviewed in A55. | Specific AAT extension/subordinate orders, station and worker laws, foreign operators and nationality jurisdiction. ACT law is **not automatically continent-wide**. 010 remains UNKNOWN. |

**Legal issuers vs hosts:** Australian ACT Legislative Assembly/ACT Register, Botswana Parliament vs WHO/BoMRA hosts, Solomon Islands Parliament vs AG reprint are not counted as independent two-issuer enactments of the same law. Neither a PDF's publication date nor a regulator press article makes uncommenced law effective.

## Measured Batch66 → Batch67 run changes
| Metric | Before | After | Run Δ |
| --- | ---: | ---: | ---: |
| Dated official M49 country/area keys | 248/248 | 248/248 | 0 |
| Provisional scoped health-body identities | 231/248 | 231/248 | 0 |
| Documented UNKNOWN identities | 17 | 17 | 0 |
| Bodies / narrow edges / explicit shared scopes | 318 / 45 / 4 | 318 / 45 / 4 | 0 |
| Source/provenance observations | 739 | **744** | **+5** |
| Legal ledger `PARTIAL_SOURCE_CHECKED` | 24/248 | **26/248** | **+2** |
| Ledger `UNSCORED_EXISTING_RESEARCH` | 224/248 | **222/248** | **−2** |
| Research queue `EVIDENCE_ADDED_NOT_RESOLVED` | 24/248 | **26/248** | **+2** |
| All-tier current enacted-law research-complete | 0 | 0 | 0 |

**Workflow partial** now **26/248 = 10.48%** (formerly 24/248 = 9.68%, +0.81 percentage points). **Unscored** now **222/248 = 89.52%**. These are workflow statuses, not legal-acceptance or patient-safety percent. Previously sourced unscored does **not** mean absent or invalid evidence. Comprehensive enacted legal/issuer/devolved legal research acceptance **not measured / incomplete**; no legal or clinical approval.

```text
M49 geographic keys         [####################] 248/248 before 248 -> after 248, +0
Provisional body identity   [###################.] 231/248 before 231 -> after 231, +0 (not law)
Legal workflow partial      [##..................]  26/248 before  24 -> after  26, +2
Ledger workflow unscored    [##################..] 222/248 before 224 -> after 222, -2
Legally research-complete   [....................]   0/248 before   0 -> after   0, +0
```

## Structural validation — exactly what ran
- **Independent exact SHA ten-complete-CSV quote-aware audit PASS**: **32/32 positive structural/semantic controls** plus **7/7 negative controls rejected**; no false cross-area source, duplicate provenance, overclaimed Botswana commencement, passed-as-enacted draft, ACT Antarctic-wide assignment, 2024 reprint treated as current 2026, or unwarranted legal approval. Blob checksums and individual checks in [QA_BATCH67](QA_BATCH67_20261107.json).
- Audited all 248 exact official names, ISO/UN region data and synchronized coverage, 318 unique bodies, 45 valid links, four shared area scopes, 744 unique provenance, 248 legal + 248 queue rows, 17 UNKNOWN audit items and source-linked constraints. Verified all **739 prior** provenance observations, **245 unrelated** legal rows, **245 unrelated** queue rows and **16 unrelated UNKNOWN** audit rows unchanged. Exact before→DATA commit diff was **only five Team A research paths**.
- **ACTUAL Python `python docs/atlas/handoffs/team-a/validate.py` NOT RUN; ACTUAL `python -m unittest discover -s docs/atlas/handoffs/team-a -p 'test_*.py'` NOT RUN.** Complete local repo checkout unavailable due GitHub DNS; JS mirror **is not** either Python test. This is structural checking and source triage, not specialist review.

## Remaining legal gaps and next queue
1. **072:** Obtain primary Botswana Gazette **commencement appointment** of 2013 and 2025 Acts, verify BoMRA 2026 signed regulations and transition, separate medical-profession/municipal legal provisions.
2. **090:** Track post-February 2024 original amendments, legal application of provincial/Honiara clinic/health functions, professions, medicines and surveillance.
3. **010:** Identify Commonwealth Australian Antarctic Territory application instruments and actual station/operator/worker health legal delegations, research national laws of non-Australian operators independently, retain Antarctic Treaty Article IV/VIII constraints.
4. Reprioritise other high-priority UNKNOWN **624 Guinea-Bissau** 2010 INASA official Gazette/2021 order, **226 Equatorial Guinea** BOE/INSESO transfer, **581 outlying islands** nine separate jurisdictions, **744 Svalbard/Jan Mayen** full 2026 Norwegian regulation amendment and distinct Jan Mayen authority. Rotate untouched provisional areas across Africa, Americas, Asia, Europe and Oceania, including independent regulator and subnational statutes.

## Repeat short continuation prompt
> Continue Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68. Read docs/atlas/handoffs/team-a/RUNBOOK.md and CONTINUE.md on branch research/atlas-team-a-20261104. Work from the research queue and legal-verification ledger. Research, commit, validate and checkpoint Team A-only changes; preserve caveats, keep PR draft/unmerged, and report measured progress. End by repeating this same prompt.
