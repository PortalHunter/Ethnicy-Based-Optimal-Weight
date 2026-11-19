# Team B — standalone Batch 94 research checkpoint · 2026-11-07
> **RESEARCH INCOMPLETE · PR #71 DRAFT / OPEN / UNMERGED · ZERO APPROVED CLINICAL CLAIMS.** Branch `research/atlas-team-b-20261104` → `main`. Team B-only research audit and documentation; no website, calculators, other teams, clinical approval, source reuse approval or Indigenous-governance authorization.

## Immutable data snapshot
- Data commit [`34e1033140aa968d5459865ff8ff80219b68cc2a`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/34e1033140aa968d5459865ff8ff80219b68cc2a), parent `1ca421babcf4c6113ff47824b6c5f3a7678104eb`; Git tree `05a335fbc49dbf7b0878dcced4944fe291460aab`, **161 entries, truncated=false**; exactly one changed research file `data/research_quality_audit.csv` with 10 additive records. No canonical CSV, validator, coverage status, organization, publication context or historical provenance rewritten.
- Independently refetched all ten canonical CSVs, unchanged `validate.mjs`, `data/research_quality_audit.csv` and `data/metadata_only_reconciliation.csv` at the exact data SHA: **13/13** GitHub file SHA-to-root-tree matches. Independent JavaScript recomputation of CSV widths, 248 overview codes and 248×7 unique area-condition cells, organization/source/context joins, issuer basis enums, 56 audit source keys, 7 depth rows, seven metadata reconciliations, preserved 10 community and eight cross-border records: **0 detected structural errors**. All 423 contexts `research_lead_only`.
- **Actual unchanged Node CLI NOT RUN**: container has Node v22.16.0 but `git ls-remote` failed `Could not resolve host: github.com`; an exact-file CLI reconstruction was not completed. This JS/tool validation and two **completed-success** GitHub workflows (Population Phase 1 regression tests and Calculator CI) do **not** establish medical accuracy, original fulltext appraisal, copyright/license, legal or clinical approval.

## Baseline → this run → final
| Measure | Before (batch 93) | After (batch 94) | Δ this run |
|---|---:|---:|---:|
| Verified local M49 identity reach | 227 / 248 | **227 / 248** | **0** (21 gaps) |
| Independent/professional organizations | 496 | **496** | **0** |
| Raw linked area×condition cells | 382 / 1736 | **382 / 1736** | **0** |
| Searched-unlinked / untouched | 175 / 1179 | **175 / 1179** | **0 / 0** |
| Exact resource/context pairs | 423 | **423** | **0** |
| Provenance / logged searches | 1134 / 656 | **1134 / 656** | **0 / 0** |
| Individually quality-audited original URLs | 46 / 423 | **56 / 423** | **+10** |
| Unaudited original URLs | 377 | **367** | **−10** |
| S1 / S2 / H / M / U | 8 / 19 / 0 / 18 / 1 | **8 / 25 / 0 / 22 / 1** | **0 / +6 / 0 / +4 / 0** |
| Historical search-depth D1 / D2 / D3 | 3 / 4 / 0 | **3 / 4 / 0** | **0** |
| Unlinked cells without active D2 | 171 | **171** | **0** |
| Original issuer-country unknowns | 5 | **5** | **0** |
| Clinically approved claims | 0 | **0** | **0** |

**Raw discovery ≠ quality-qualified substantive publication ≠ clinical release.** S1/S2/H audit classifications describe only individually inspected research inventory URLs; M records must not be counted as substantive. Preserve historical raw links and add independent actual documents when found.

## Ten exact-URL source-quality findings
| Area, condition, organization | Tier | Original URL | Inspection result / caveat |
|---|---|---|---|
| Australia 036 · gout · B-AU-ARTHRITIS | **S2** | https://www.arthritis.org.au/arthritis/arthritis-insights/understanding-arthritis/spotlight-on-gout/ | Original substantive patient education; no tested trial, guideline or rights appraisal. |
| France 250 · celiac · B-FR-AFDIAG | **M** | https://afdiag.fr/resultats-de-letude-vie100glut/ | News announces 1,740 voluntary respondents and links external report; exact page not substantive original results; sample not representative. |
| Spain 724 · celiac · B-ES-FACE | **M** | https://celiacos.org/que-hacemos/publicaciones/manual-de-la-enfermedad-celiaca/ | Association credits technicians and links separate manual; exact index is brief gateway, not reviewed manual body. |
| Andorra 020 · celiac · B-AD-ACEA | **S2** | https://celiacs.ad/ca/menu-4/que-es-la-celiaquia.html | Original Catalan coeliac explanation; HLA not diagnosis, numerical claims and date unreviewed. |
| Malta 470 · celiac · B-MT-CAM | **S2** | https://coeliacassociationmalta.org/guides/getting-diagnosed/ | Original substantive diagnosis education; undated local prevalence and family-test recommendations unreviewed. |
| Denmark 208 · hemochromatosis · B-DK-DHF | **S2** | https://haemokromatose.dk/om-haemokromatose/ | Substantive Danish hereditary-iron education; HFE carrier prevalence/penetrance and treatment claims unverified. |
| Sweden 752 · lactose · B-SE-CELIAKI | **S2** | https://www.celiaki.se/laktosintolerans/vanliga-fragor-och-svar-2/ | Substantive Swedish FAQ, secondhand national prevalence and genetic vs symptom distinction unappraised. |
| Brazil 076 · lactose · B-BR-SBP | **S2** | https://www.sbp.com.br/intolerancia-a-lactose/ | 2017 SBP scientific-department education; claims by race and national frequency need denominator appraisal. |
| Japan 392 · gout · B-JP-JSG | **M** | https://www.tukaku.jp/guideline/ | Bibliographic third-edition 2018, 2019 digest, 2022 addendum index; linked actual manuscripts not inspected. |
| Chile 152 · celiac · B-CL-CONVIVIR | **M** | https://www.fundacionconvivir.cl/suscribete/ | Self-enrollment invitation, not published study results or representative national census. |

Each of the ten audit ledger rows includes the original URL, retrieval date, limitations and follow-up. This is **not** a reuse license or independent assessment of all claims. No source/context pairs or positive cells were added; old questionable linked URLs remain historically visible.

## Acceptance gaps / next execution order
1. **367/423 exact source URLs remain individually quality-unaudited**, including old M/U material. Explicit follow-ups: inspect FACE's linked manual, AFDIAG's original Vie100Glut report and method, Japanese 2018/2022 guideline originals, and Chilean registration-to-results evidence; never attribute external original text to indexing societies.
2. **1,179 untouched area-condition cells** and **175 searched-unlinked**, 171 of which lack active two-avenue D2 depth audit. Prioritize original-language haemochromatosis (24/248 raw positives), lactose (34), gout (41), coeliac (50), rotating regions; no fabricated negative conclusion or population prevalence.
3. **21 M49 areas** lack locally verified eligible independent organization domicile; 5 unresolved original issuer-country imprints: Panama HEARTS; Portuguese WGO lactose translation; Portuguese ESPGHAN coeliac translation; Chad OA Pub/JHC; South Sudan PAMJ. Original Peru gout and Morocco diabetes legacy M-only cases still lack original substantive replacement.
4. Retain **14 anti-ancestry overgeneralization cases, 10 community/subnational cases, 8 cross-border relationships**, original imprint/denominator/edition caveats. Indigenous consent, legal authority, rights, publication recency, genetic and clinical recommendations require separate qualified review (issue #27).

## 20-slot progress bars (structural discovery, not approved healthcare)
```text
Verified local M49     [██████████████████··] 227/248 91.53% | gaps 21 | 227 → 227 Δ 0
Area×condition         [████░░··············] total 1,736
  █ raw source linked                  382/1736 22.00% | 382 → 382 Δ 0
  ░ searched but unlinked              175/1736 10.08% | 175 → 175 Δ 0
  · untouched                        1,179/1736 67.91% | 1179 → 1179 Δ 0
Original URL audited   [███·················] 56/423 13.24% | 46 → 56 Δ +10 | 367 unaudited
  Tier totals S1 8, S2 25, H 0, M 22, U 1; source ≠ approved claim.
  Depth D1 3, D2 4, D3 0 historical; 171 bounded cells still lack active D2.
```
**By condition /248 raw positives:** diabetes 110; hypertension 75; high_chol 48; gout 41; lactose 34; celiac 50; hemochromatosis 24. Total 382/1736. Raw statuses from `coverage_by_area_condition.csv`: `national_or_cross_border_body_verified` 288, `specialist_research_only` 94, `targeted_search_no_verified_resource` 175, `not_yet_researched` 1179.

## Restart and boundaries
Recheck live [PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71) draft/open/unmerged and head; reread `RUNBOOK.md`, `QUALITY_AND_COMPLETION.md`, `QUEUE.md`, `CONTINUE.md`, `CHECKPOINT.json`, this checkpoint and data/validator. Only Team B paths; never main, website, calculator, other teams, merge/mark-ready or approve any clinical claims. Follow exact queue, verify original language and source, commit/validate/read back and write next standalone checkpoint.

**Exact reusable prompt:**

Continue Research Team B in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71.

On branch "research/atlas-team-b-20261104", read "docs/atlas/handoffs/team-b/RUNBOOK.md", "QUEUE.md", and the latest "CONTINUE.md".

Follow the queue and safeguards; research, commit, validate, read back, and checkpoint Team B-only changes. Keep PR #71 draft/unmerged; approve no clinical claims.

End with quantified run deltas, remaining gaps, and the required labeled progress bar graphs. Repeat this prompt.
