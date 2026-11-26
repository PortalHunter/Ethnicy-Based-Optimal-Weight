# Team A standalone Batch54 checkpoint — 2026-11-06

## Scope and immutable commits

- Repository: [PortalHunter/Ethnicy-Based-Optimal-Weight](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight); pull request [#68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68); branch `research/atlas-team-a-20261104`. **MUST REMAIN OPEN / DRAFT / UNMERGED**; not ready for review.
- Allowed scope: only `docs/atlas/handoffs/team-a/`. No main, public site, clinical calculator, ancestry/medical claims, other teams, journal/network areas or approval. Never merge.
- Live base before this run `baf022ec82a1ded32655b81e87cb6306dc414033`. Immutable **source/research DATA** commit: [`115e82103cc6fd9ab1ec3443a5b69c989cd8cf7b`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/115e82103cc6fd9ab1ec3443a5b69c989cd8cf7b). QA/guard commit: [`748fc20d39cf131bb8bc122211e7ddbcc5ad5fa3`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/748fc20d39cf131bb8bc122211e7ddbcc5ad5fa3). This checkpoint is a later document-only commit; **refresh live branch HEAD before any new write**. Original acceptance remains [TEAM_A_GOVERNMENT_CENSUS.md](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/research/atlas-five-team-handoff-prompts-2026-11-04/docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md), preserved in [RUNBOOK](RUNBOOK.md).
- Single research commit changed precisely `PROVENANCE.csv`, `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `data/unresolved_area_audit.csv`, `data/legal_verification_ledger.csv`, `data/research_queue.csv`, and new `source_recovery/CYCLE_A54_020_036_074_PRIMARY_LEGAL_20261106.md`. GitHub compare confirmed only Team A files. Independent exact GitHub readback of all original + new tracking CSVs and source note succeeded. Separate QA commit changed only `validate.py`, `test_validate.py`, `QA_BATCH54_20261106.json`, all read back.

## Exact research findings, sources, original issuers and caveats

**020 Andorra — TWO original BOPA legal documents, ONE Government issuer**:
- `A54-020-01`: Govern d'Andorra / Cap de Govern **Decret 488/2025** (23 Dec 2025), [original 1-page BOPA PDF](https://bopadocuments.blob.core.windows.net/bopa-documents/037157/pdf/GD_2025_12_24_13_28_07.pdf). BOPA official issue **157 of 31 Dec 2025**, visually verified original Catalan. Repeals 2020 foundation and 72/2021 amendment of `Laboratori Nacional d'Epidemiologia` beginning **1 January 2026**, not a declaration that all epidemiology functions disappeared.
- `A54-020-02`: same Government issuer **Decret 489/2025**, [original 3-page BOPA PDF](https://bopadocuments.blob.core.windows.net/bopa-documents/037157/pdf/GD_2025_12_24_13_29_33.pdf), p.2 visually verified. Amends 297/2023 Article 2 effective **1 Jan 2026**, lists prevention/surveillance, professional/medicine/resource area and **Central Public Health Laboratory**, not the separate abolished epidemiology laboratory. BOPA publication host is not an independent statutory issuer. Previously recorded Ministry structure webpage continues listing old lab (outdated for this narrow point). Preserved `gov-020-003` historical body with repeal caveat; removed it from current country and legal-ledger body-link lists, while retaining `gov-020-001/002`. Current 2026 amendment sequence, exact independent medicines/licensure regulators, municipality, and possible successor bodies still need inspection.

**036 Australia — federal scope only**:
- `A54-036-01`: [Commonwealth Administrative Arrangements Order official text](https://www.legislation.gov.au/C2025Q00003/2025-07-01/2025-07-01/text/original/epub/OEBPS/document_1/document_1.html), signed by Governor-General **13 May 2025** on Federal Executive Council advice, latest in-force government register schedule compiled **1 Jul 2025**. Part 9 assigns federal public-health, prevention, research, human quarantine and therapeutic-goods matters to Department of Health, Disability and Ageing. Part 6 assigns work health and safety to Employment and Workplace Relations. It does **not** prove independent TGA/other regulator Acts, the full 2026 amendment chain, state/territorial/Indigenous/local delegations or clinical competence. Independent issuer checks still incomplete.

**074 Bouvet Island — still UNKNOWN**:
- `A54-074-01`: original Norwegian `LOV-1930-02-27-3`, [Lovdata indexed §§1–2](https://lovdata.no/nav/lov/1930-02-27-3/%C2%A71). Norwegian private/criminal/procedural law applies, but King decides extension of *other* laws; there is no automatic universal health ministry. **Direct consolidated Lovdata open HTTP 405**; all later amendment and health law extensions need direct official retrieval. Previously recorded `A41-074-01` 2017 transplant-specific extension does not establish worker clinical or general public-health jurisdiction. Other original 16 UNKNOWN rationales preserved.

## Measured audit results (NOT statutory/legal certification)

| Metric | At start | After Batch54 | Meaning |
| --- | ---: | ---: | --- |
| Dated official M49 geography rows | 248/248 | 248/248 | Dated geographic skeleton, NOT health authority acceptance |
| Provisional identity-positive areas | 231/248 | 231/248 | Provisional names/functions only |
| Explicit UNKNOWN areas | 17/248 | 17/248 | All require further jurisdiction-specific proof |
| Historical/current body records | 318 | 318 | A formerly created Andorran lab stays historical |
| Relationships / shared scope links | 45 / 4 | 45 / 4 | Narrow existing mappings preserved |
| Unique source observations | 692 | **696 (+4)** | Four new scoped original/index findings |
| Legal ledger partly triaged | 0/248 | **3/248** | Workflow progress, not 3 complete jurisdictions |
| Legal ledger UNSCORED existing research | 248/248 | **245/248** | Earlier research not yet evaluated in this ledger |
| Queue evidence-added, unresolved | 0 | **3** | All three remain incomplete |

```text
Official M49 geographic skeleton    [####################] 248/248
Provisional body identity only       [###################-] 231/248
Explicit unresolved M49 areas        [#-------------------]  17/248 remain
New legal ledger partly triaged      [--------------------]   3/248 (1.21%)
New legal ledger still unscored      [####################] 245/248 (98.79%)
All-tier current enacted legal proof [????????????????????] NOT MEASURED / INCOMPLETE
```

## Validation, negative controls and legal-source hierarchy

- [`QA_BATCH54_20261106.json`](QA_BATCH54_20261106.json) preserves exact source, M49, original eight research CSV, queue/ledger, and source-note **blob SHAs** at DATA `115e82103cc6fd9ab1ec3443a5b69c989cd8cf7b`. Independent quote-aware JavaScript structural audit **PASS**: complete exact 248 M49/ISO/region matching, 696 unique source IDs, 318 body keys, 45 relationships, 4 shared scopes, 17 UNKNOWN auditable links, country/body/ledger/queue consistency, preserved historical Andorra record and its absence from current links.
- **Three structural negative controls PASS**: rejected cross-area authority link, nonexistent provenance source, and unsupported legal research-completion claim. Added `validate.py` guard that forbids `FORMER_` bodies in current country links, plus a **10th Python test definition** `test_historical_repealed_body_not_current_link`; their exact GitHub readbacks passed.
- **Actual `python docs/atlas/handoffs/team-a/validate.py`: NOT RUN. Actual `python -m unittest discover -s docs/atlas/handoffs/team-a -p 'test_*.py'`: NOT RUN.** Complete checkout cannot resolve github.com DNS in local execution; therefore DO NOT claim these tests passed. Last prior real Python execution documented by earlier Batch41. JS structural invariants do **not** verify original enacted legal text or legal/clinical acceptance.
- Publishing website vs legal issuer, historical vs current, detailed functional/territorial limits, and original-source accessibility are kept separate. Full enacted all-level legal acceptance is **NOT MEASURED / INCOMPLETE**, never clinical approval.

## Next autonomous run

1. Re-fetch **live** PR/draft/HEAD, `RUNBOOK.md`, `CONTINUE.md`, this latest checkpoint, current 248-item queue, ledger, relevant source notes and original provenance before writes. Concurrent edits require reconciling updated blob SHA/HEAD; only Team A directory may change.
2. P0 UNKNOWN priorities `624` original 2010 Guinea-Bissau Gazette and operative INASA/2026 implementation; `226` Equatorial Guinea BOE original 02/2026 / October and INSESO transfer; `581` distinct nine U.S. outlying-island delegated powers; `744` current post-July Norwegian 747 consolidated law, Svalbard versus Jan Mayen; `010` national/operator/station Antarctic people-specific law. Other 12 UNKNOWN still in audit; `074` newly reviewed bilandsloven direct-current law remains access-blocked. Do not repeat a failed source path without changing publisher/act identifier/archive or issuer.
3. Continue provisional multi-region legal review; next P1 rotation `016` (Oceania), `012` (Africa), `028` (Americas), `004` (Asia), `008` (Europe) and other viable areas. Original enacted establishing law, amendments/commencement, regional/devolved/Indigenous/municipal and medicines/professional, worker and surveillance powers, independent issuers, and source conflicts must be audited. Ledger `UNSCORED` means earlier material not yet rescored, not absent law.
4. Commit + readback + structural/actual Python validation when possible; update status and standalone checkpoint; preserve caveats, PR draft/unmerged, no website/main/other-team changes.

## Exact copy-paste continuation prompt

Continue Team A in [https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68).

Read `docs/atlas/handoffs/team-a/RUNBOOK.md` and `CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Work from the research queue and legal-verification ledger. Research, commit, validate and checkpoint Team A-only changes; preserve caveats, keep PR draft/unmerged, and report measured progress.

End by repeating this same prompt.
