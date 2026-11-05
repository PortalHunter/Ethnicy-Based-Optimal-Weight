# Team B status · 2026-11-05

**Incomplete after batch 39.** [Draft PR #71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71), branch `research/atlas-team-b-20261104`. No website, calculator, main or merge changes.

| Measure | Count |
|---|---:|
| UN M49 areas / seven-condition cells | 248 / 1,736 |
| Organizations / domiciled areas | 366 / 226 |
| M49 areas without domiciled identity | 22 |
| Resource relationships / source-positive cells | 256 / 236 |
| Unlinked cells | 1,500 |
| Unlinked: targeted check / no check | 128 / 1,372 |
| Provenance / condition-targeted searches | 739 / 427 |
| Community / cross-border records | 7 / 8 |
| Unresolved issuer countries / approved clinical claims | 5 / 0 |

Source-positive cells: diabetes 84 · hypertension 31 · high_chol 26 · gout 24 · lactose 17 · celiac 34 · hemochromatosis 20.

## Batch 39

Three new identities: Arthritis Ireland, Galway-based Croí, and Celiac Disease Foundation (United States). Four own-site source relationships: Irish gout education, Irish familial hypercholesterolaemia education, an Irish coeliac research-project index, and US dietitian-led celiac education. **All are research leads, not appraised clinical evidence, binding guidelines or national epidemiology.** The Coeliac Society of Ireland research page was search indexed but direct retrieval returned HTTP 403; individual papers/methods/results remain unreviewed. Existing Malaysian gout guidance was not duplicated.

## Original acceptance criteria

| Acceptance criterion | Verified position |
|---|---|
| Enumerate all M49 areas × seven conditions | **Structural gate met:** 248 × 7 cells. |
| Keep source country, study population, healthcare jurisdiction distinct | Separate 256 exact-URL contexts. Five issuer countries unresolved, with explicit reasons. |
| Respect disease/diagnostic boundaries | FH ≠ generic LDL; gout ≠ asymptomatic hyperuricaemia; celiac ≠ HLA/serology alone, etc. All resources `research_lead_only`. |
| Verify first-party publication lists, current identity and lifecycle | **Incomplete.** Twenty-two areas lack domiciled identity; 1,372 source gaps lack condition-specific search; many own-original papers not read. |
| Ten or more diversity counterexamples | 14 established cases remain in GAPS.md. |

Batch 39 structural validation: independent JavaScript implementation of the committed `validate.mjs` checks over ten fetched CSVs, **zero errors**. Actual Node CLI could not execute with a local filesystem copy this session. Full URL/legal/source-study/clinical review not done. See VALIDATION.md, GAPS.md and CONTINUE.md.
