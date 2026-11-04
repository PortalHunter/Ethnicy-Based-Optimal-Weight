# Four-team evidence integration — provenance and publication policy

**November 4, 2026 | Research consolidation | No calculator mathematics changed**

## Canonical inventory

The original Team 1–3 research matrices contain **28 ANC**, **30 NUT** and **36 PGX** claim IDs. The draft Team 4 matrix adds **42 LAB** claims, for **136** unique claims across four independently owned streams. All IDs are indexed in [unified machine-readable CSV](UNIFIED_CLAIM_INDEX_2026-11-04.csv), including original grade/status fields when present and this pass's separate verification status. **An index entry is NOT a source audit.** For ANC, NUT and PGX the CSV deliberately says `NOT_AUDITED_IN_THIS_PASS`; it does not reclassify their original evidence.

| Owner | Research scope | ID count | Original matrix | Independent source verification as of this pass |
|---|---|---:|---|---|
| ANC | Ancestry/anthropometry | 28 | [ANC matrix](evidence/01_Ancestry_Evidence_Matrix.md) | Existing Team 1 review only; not repeated here |
| NUT | Hereditary disease and nutrition | 30 | [NUT matrix](evidence/02_Nutrition_Evidence_Matrix.md) | Existing Team 2 review only; not repeated here |
| PGX | Pharmacogenetics | 36 | [PGX matrix](evidence/03_Pharmacogenetics_Evidence_Matrix.md) | Existing Team 3 review only; versioned gene–drug tables still require review |
| LAB | Laboratory biomarker education | 42 | [LAB matrix](evidence/04_Laboratory_Evidence_Matrix.md) | **All 42 individually triaged** in [claim audit](evidence/04_LAB_CLAIM_AUDIT_2026-11-04.md); 26 narrow-source checks, 8 qualified, 7 gaps, 1 prohibited personalized use |

The research report counts (17 original Team 1–3 Markdown files plus 8 unchanged Team 4 reports) do **not** equal the 136 standardized evidence claim IDs. The files in the legacy source index cover the original reports; this consolidation does not silently rewrite their research findings.

## Unified interpretation vocabulary

| Tag | Meaning | What the app can do |
|---|---|---|
| **Guideline-supported (population/scenario-specific)** | Relevant authoritative recommendations, with dated jurisdiction and population | Carefully cite the scope; no app diagnosis or personalized target without separate validation |
| **Intervention evidence** | Trial/meta-analysis finding for participants, comparison, duration and measured outcomes | Describe study outcome, effect size and uncertainty—not personal predicted improvement |
| **Observed population association** | Observational/genetic epidemiology, subject to confounding and transportability | Context only; never infer individual genotype, physiology or risk score |
| **Exploratory** | Unsettled/insufficiently replicated inference | Clearly label research-only or suppress |
| **Unvalidated heuristic** | Calculator-derived rule without prospective validation | Label explicitly; don't elevate to clinical advice |
| **Withheld** | Missing safety/evidence, incorrect citation, or inappropriate individualization | Do not generate action/recalculation |

The LAB audit status (`SUPPORTED_SCOPE`, `QUALIFIED`, `SOURCE_GAP`, `WITHHELD`) is an **additional verification workflow**; do not conflate it with the original A/B/C/D feature tiers or with GRADE/CPIC grading.

## Cross-stream reconciliation by topic

| Shared question | Claims that intersect | Resolution for Ancestry Health |
|---|---|---|
| BMI action thresholds vs personal target weight | ANC-001/002/024/025/027; LAB-040/041 | Guidelines support group-level *screening* at specified contexts; they do **not** validate ancestry-weight equations or lab-based target recalculation. Existing formula issues remain open in [Issue #2](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/2). |
| Diabetes family history vs diagnosis | NUT-001/002/012; ANC screening profiles; LAB-001–007, LAB-037 | Record parent/sibling history, diagnosed condition and measured lab independently. No diabetes cap based on inferred disease or one value. |
| A1c assay validity and ancestry | LAB-001/006/031/032; ANC subgroup context | Confirm *known* variant/turnover and assay method; ancestry is not an Hb-variant test or A1c correction factor. |
| Lipids, inherited dyslipidemia and diet | LAB-008–014/033/041; NUT-003/015/016; PGX-014/015 | Lipid diet guidance can be broad; genotype cannot be inferred, and high LDL or measured Lp(a) should not trigger consumer medication or genetic advice. |
| Kidney function and electrolytes | LAB-015–019/034/038; ANC; PGX drug context | Use measured values and clinical context. No race factor in eGFR; no automatic potassium restriction/supplement. |
| Hemochromatosis and anemia | LAB-023–027/035/039; NUT-004 | Use measured ferritin/TSAT plus symptoms/diagnosis context. No ancestry-inferred HFE or reflex iron restriction/supplement. |
| Uric acid / allopurinol PGx | LAB-030; PGX-005/006 | Urate alone is not gout diagnosis; **HLA-B*58:01** PGx/ancestry screening evidence does not authorize drug choice from ethnicity. LAB-030's original citation is mismatched and needs replacement. |
| Medication effects on markers | LAB-005/017/038; PGX broad set | Medications can change measured values; do not calculate or recommend drug dosing, drug stoppage, or genetic phenotype from labs. |
| MASLD and weight | LAB-020–022; NUT nutritional outcomes; ANC body-weight heuristics | Disease-specific weight loss guidance applies to confirmed MASLD contexts, not a recalculation of ideal weight from ALT/AST. |
| Privacy/standards | LAB-042; all streams | For any future file import use verified LOINC/UCUM/FHIR mapping and clear provenance, never silently store or export health data. |

## Explicit release boundaries and next steps

1. Team 4 research is **not** merged into live calculations and does not expand the existing manual-entry laboratory module's narrow cited statements.
2. Existing LAB educational advice remains separate from `preview-assets/core.js` and must not silently alter height, weight, body-frame or ancestry calculations. Personal therapeutic targets, emergencies, prescriptions, confirmed diagnoses and medication advice require distinct controls and qualified review.
3. **Both 2026 ACC/AHA guideline errata were reviewed:** June corrected the ApoB-related TG example to ≥150 mg/dL; September corrected bile-acid-sequestrant medication table entries, including a critical unit typo. Preserve these amended versions in source provenance; any future new thresholds or medication-related text still require separate evidence review and cannot become app prescribing instructions.
4. Independently review the 94 pre-existing ANC/NUT/PGX claims in future passes; the current index provides traceability but does not pretend those reviews occurred today. Recheck PGX gene–drug recommendations against current source/allele versions before any individual-facing content.
5. If evidence cannot be supported at the requested specificity, output **unknown / insufficient evidence**. Never treat absent labs as normal, self-reported heritage as genotype, or a trial's average effect as a patient's prediction.

See [Team 4 claim audit](evidence/04_LAB_CLAIM_AUDIT_2026-11-04.md), [existing integration review](../EVIDENCE_INTEGRATION.md), [lab prototype limits](../LAB_EDUCATION.md) and [review process](../process/CLINICAL_REVIEW.md).
