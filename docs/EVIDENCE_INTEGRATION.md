# Three-team research integration — evidence and decisions

**2026-11-02 | Research-only, no clinical approval.**

## Source provenance

Seventeen unchanged source Markdown reports from 2026-11-01 are under [research/evidence/](research/evidence/) (evidence matrices and reviews) and [research/process-notes/](research/process-notes/) (recommendations, validation plans and handoffs). Team 1 owns `ANC-` population/anthropometry evidence; Team 2 owns `NUT-` hereditary disease and nutritional response; Team 3 owns `PGX-` pharmacogenetics. The three streams retain equal standing. See each team's evidence matrix, review, recommendations, validation roadmap and integration handoff. No study's effect size is automatically an individual prediction.

## Readiness by feature

| Stream | Integration now | Withheld pending qualified review |
|---|---|---|
| ANC | Clear distinctions between guideline thresholds, observed population association and unvalidated personal-weight heuristics; educational subgroup taxonomy (Scandinavian, Mediterranean, Central/Eastern European; multiple Latin American and Caribbean origins); notes about remaining heterogeneity | New ethnicity-specific weight targets, direct genomic ancestry inference, mixed-percentage clinical BMI blend, automatic Asian-diabetes weight cap |
| NUT | Evidence-grading and conditional education about family-history vs diagnosed disease; differentiate relatives/phenotype vs inferred genotype; explain celiac, hemochromatosis, familial hypercholesterolemia and lactose intolerance without assigning diagnosis | Ancestry-only disease labels, personalized restrictive diets, presumed pathogenic variants, dietary instructions derived from family history alone |
| PGX | Read-only literature orientation: genotype is not ancestry, CPIC vs FDA/specialty pretesting policy, gene–drug evidence context, assay gaps, variant diversity | Medication prescribing/dosing, medication-compatibility scores, allele prediction from ancestry, genetic file upload or drug-response changes to weight calculator |

## Current implementation boundary

`optimal_body_weight_calculator-9.html` is the Phase 1 baseline: original weight equations are preserved, and 62 optional subgroup profiles have been added. The live site (`index.html`, with its scripts in `preview-assets/`) is the results-below-form design; its engine `preview-assets/core.js` is identical to the v9 core, which the checks enforce. The earlier v10 and v11 preview copies were retired once the live site replaced them (they remain in the git history and the `backup-2026-11-02` tag). Height is entered as separate feet and inches (or centimeters) and passed to the original parser. All 17 reports and their links are indexed in [the research source index](research/SOURCE_INDEX.md). `research-preview.html` is a **public-facing bibliography** containing published references; internal handoffs and development-process files remain in the repository, not linked from the site. The site does not collect or display patient-level genetic information. The copies do not consume each other's numeric outputs or change medication decisions. No research-derived clinical weight thresholds or treatment algorithms are activated.

## Key evidence conflicts

1. **ANC-024/025/027:** population screening cutoffs and experimental formula intersections are not validated individual target weights. Team 1's recommendation to retire the auto-cap and prevent inferred self-identification is a safety priority for any future numerically revised calculator; it requires a separate approved algorithm and changed regression fixtures.
2. **Team 2:** self-reported diabetes family history, prediabetes, and confirmed diabetes must not share one causal indicator; current “diabetes” input conflates these. Plan a reviewed split before using the checkbox for a clinical output.
3. **PGX-036:** corrected TPMT/NUDT15 guidance and DPYD updates require primary guideline re-verification. Retain as historical research; do not implement clinical allele tables or personal recommendations.
4. National identity, phenotypic race, genomic ancestry, and particular allele frequencies are not interchangeable. Self-description should be optional, multi-select and privacy-preserving.

## Evidence label model

- **Guideline-backed screening:** explicit authority, jurisdiction, version and population; not a diagnosis.
- **Observational context:** population-level study with outcome, denominator and uncertainty; not a patient probability.
- **Research hypothesis:** preliminary association lacking validated individual utility.
- **Unvalidated heuristic:** code-derived number with no proven clinical outcome calibration.
- **Withheld:** do not emit in personal clinical advice.

Any promotion to user-facing clinical logic requires [CLINICAL_REVIEW.md](process/CLINICAL_REVIEW.md) and maintainer sign-off.

## Links to source documents

- [Team 1 recommendations](research/process-notes/01_Ancestry_Calculator_Recommendations.md), [ANC matrix](research/evidence/01_Ancestry_Evidence_Matrix.md), [integration handoff](research/process-notes/01_Ancestry_Integration_Handoff.md).
- [Team 2 recommendations](research/process-notes/02_Nutrition_Calculator_Recommendations.md), [NUT matrix](research/evidence/02_Nutrition_Evidence_Matrix.md), [integration handoff](research/process-notes/02_Nutrition_Integration_Handoff.md).
- [Team 3 proposal](research/process-notes/03_Pharmacogenetics_Module_Proposal.md), [PGX matrix](research/evidence/03_Pharmacogenetics_Evidence_Matrix.md), [integration handoff](research/process-notes/03_Pharmacogenetics_Integration_Handoff.md).

