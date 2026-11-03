# Research Team 3 — Pharmacogenetics Integration Handoff to Teams 1 and 2

**Project:** Ancestry-Adjusted Optimal Body Weight & Nutrition Calculator  
**Evidence cutoff:** 2026-11-01  
**Branch / role:** Team 3, pharmacogenetics and precision medication research  
**Handoff status:** complete research draft; **clinical publication requires independent SME review**. No modifications to calculator or dietary/BMI logic are authorized.

## 1. Integration decision and ownership

**Team 3 recommends** a dedicated **read-only Pharmacogenetics Research & Education** sub-page with independently versioned source records. Pharmacogenetics is a complementary research specialty: it does not supersede ancestry-specific anthropometry, inherited disease or nutrition evidence, and neither Team 1 nor Team 2 findings can override gene–drug clinical evidence without joint review. The current weight calculator should not generate medication guidance, infer genotypes or accept DNA uploads.

| Stream | Owns | Supplies to other streams | Must **not** do |
|---|---|---|---|
| **Team 1 — ancestry/anthropometry** | Population definitions, ancestry representation, BMI and body-frame/waist validity | Population metadata; warnings on cohort sampling, regional mixing and within-population variation | Derive individual's HLA or metabolizer genotype; modify drug guidance from ancestry alone |
| **Team 2 — hereditary disease/nutrition** | Hereditary conditions, dietary evidence, food response, nutritional risk | Drug–condition research *leads*, relevant comorbidity/nutrient/medication hypotheses, context requiring specialist review | Recast dietary response or keto efficacy into pharmacogenetic clinical action; derive medication choices from diet outcomes |
| **Team 3 — PGx/medication response** | Gene–drug actionability, allele definitions, pharmacokinetic/pharmacodynamic evidence, testing limits, clinical safety | Evidence records, clinical evidence hierarchy, population variant provenance, safeguards and validation roadmap | Modify BMI/diet thresholds; supersede clinical/nutritional algorithms; prescribe or interpret personal DNA |
| **Joint integration review** | Source concordance, scope boundaries, public-facing language, version updates | Decision log and accepted cross-stream links | Convert a cross-stream *association* into a medication decision without independent actionability validation |

## 2. Six artifacts to merge

| File | What it contains | Best integration use |
|---|---|---|
| `03_Pharmacogenetics_Research_Review.md` | Mechanisms, guidelines, clinical examples, outcome evidence, unsupported associations and 2026 developments | Teamwide scientific source of truth, not an end-user diagnostic resource |
| `03_Pharmacogenetics_Evidence_Matrix.md` | **36** machine-readable YAML-style `PGX-001` through `PGX-036` records, each with all 14 specified fields | Primary claim ledger: retain exact field names, source links and status |
| `03_Population_Medication_Response.md` | Allele vs carrier rates, East/South Asian, European, African, American-admixed cohort issues and equity | Coordinate **context definitions** with Team 1; no genotype prediction |
| `03_Pharmacogenetics_Module_Proposal.md` | Module options, read-only structure, UX copy, prohibitions and design tests | Dedicated static education page, external to BMI/nutrition logic |
| `03_Pharmacogenetics_Clinical_Validation.md` | Clinical/analytical validity, outcome utility, FDA/FTC/legal context and stage gates | Joint publication review; any future separate clinical program |
| `03_Pharmacogenetics_Integration_Handoff.md` | Responsibilities, conflict resolutions, dependencies and open questions | Master cross-team merge contract |

## 3. Merge contract: standardized evidence record

Every Team 3 record uses these exact fields:

```text
claim_id
domain
population_definition
exposure_or_variant
outcome
effect_estimate_and_uncertainty
study_design
source_doi_pmid_or_url
evidence_grade
clinical_status
limitations
cross_stream_dependencies
integration_target
validation_next_step
```

**ID namespace:** `PGX-001`, `PGX-002`, ... (unique and persistent). **Permitted status vocabulary only:** `guideline-supported`, `observational`, `exploratory`, `insufficient`, `contradicted`. `evidence_grade` in this team's matrix is a **locally defined research quality taxonomy** (`G1`, `G2`, `R1`, `O1`, `O2`, `E2`, `U1`), **not** synonymous with CPIC levels or PharmGKB/ClinPGx evidence scores. Other teams must not overwrite or relabel it as their grading scale without explicit documented mapping.

**Merge instruction:** retain both the clinical status *and* source study design. A randomised controlled study result can legitimately have `clinical_status: observational` when it is recorded as empirical study evidence rather than a new guideline-authorized clinical action. This prevents a trial's statistical result from being silently reclassified as a universal recommendation. Recommended future enhancement: add optional `recommendation_authority`, `guideline_version`, `last_source_check`, `source_exact_location`, `allele_definition_version`, `measurement_denominator` and `independent_reviewer`, without removing any mandatory field.

**Source data rule:** do not strip uncertainty from records to create a simplified merged dataset. For example, clopidogrel trial HR 0.66 and its 95% CI 0.43–1.02 are inseparable; GLP1R weight loss +0.76 kg and its CI are inseparable. Avoid source-level category aggregation.

## 4. Specific inter-team dependencies

| Team 3 claims | Dependency | Acceptance rule | Integration target |
|---|---|---|---|
| PGX-023, PGX-024, PGX-025 | Team 1 population labels and allele frequency denominators | Population must be source-defined; **allele frequency ≠ carriers**; no conversion to individual genotype or safety | Static frequency explainer |
| PGX-003, PGX-005, PGX-006 | Team 1 population sampling and migration/admixture caveats | Screening policy separately attributed to specialty guideline/label; never race-based treatment rule | HLA gene–drug pages, testing-policy caveat |
| PGX-009–PGX-012, PGX-020–PGX-021 | Team 1 subpopulation diversity and assay gaps | CYP2D6 CNVs and non-European variant coverage documented | Genotyping limitations glossary |
| PGX-007–PGX-008, PGX-036, PGX-016–PGX-018 | Team 2 hereditary disease / immune suppression and oncology context | Do not turn comorbidity or diet into metabolizer phenotype; require drug–condition clinical sources | Drug–disease interaction research cross-link only |
| PGX-026–PGX-028 | Team 1 weight/metabolic response context; Team 2 diet & obesity research | No change to ideal body weight, BMI risk thresholds, keto/diet suggestions or GLP-1 selection | Exploratory research page |
| PGX-013, PGX-029, PGX-033 | Teams 1 and 2 genetic/dietary association narratives | These variants stay **insufficient** for prescribing; avoid authority by association or marketing | “Not clinically actionable” glossary and examples |
| PGX-030 | All streams: validation methodology and fairness | PREPARE supports some clinician-led implementation contexts; not a universal algorithm performance claim | Joint validation methodology |
| PGX-031–PGX-032 | Team 2 cardiometabolic comorbidities | Medications matter only in separately validated gene–drug contexts | Optional research crosslinks |

## 5. Non-negotiable scientific guardrails

1. **Ancestry cannot replace a confirmed genotype.** Population frequencies may guide *research and discussions about screening policies* but cannot decide whether an individual carries a variant or will experience a drug reaction.
2. **A professional guideline does not mean universal preemptive testing.** CPIC generally describes actions when genetic results are available; ACR/FDA labels and local specialty policies address specific pre-testing practices.
3. **Drug effect ≠ weight algorithm input.** Neither GLP-1/GIP variant associations nor CYP pathways justify altered BMI targets, optimal weight estimates, or nutrition algorithms. Such changes require independent, domain-relevant evidence and explicit cross-team acceptance.
4. **Gene–drug relationships are not interchangeable.** CYP2D6 codeine activation, atomoxetine exposure and metoprolol response have different outcome types and confidence. No universal “medication compatibility score.”
5. **Allele panel absence ≠ no risk.** CYP2D6 structural variants, DPYD ancestry-diverse markers, NUDT15 suballeles and HLA resolution have analytical limitations.
6. **GLP-1/GIP findings are research only.** 2026 GLP1R rs10305420 associated with ~0.76 kg extra loss per effect allele and replicated direction in EHR, but is small and lacks prospective treatment-selection utility. Avoid ancestry-specific semaglutide/tirzepatide dose inference.
7. **No real DNA upload or medication recommendations.** Future genomic interpretation would be a different application and clinical/regulatory program.
8. **The existing calculator is untouched.** No new linkage between ancestry selection and drug advice; no modification to BMI, frame, waist, metabolic or nutrition calculations.

## 6. Apparent cross-team conflicts and resolutions

| Potential conflict | Why it matters | Recommended resolution | Review authority |
|---|---|---|---|
| Team 1 proposes fine-grained European ancestry output and Team 3 reports a broad CYP/HLA population average | False precision: one broad allele frequency does not resolve Scandinavian vs Mediterranean effects | Do **not** extrapolate. Preserve source's regional cohort label; show “not established for this subgroup.” | Team 1 population-methodology lead + PGx scientist |
| Team 1 models admixture percentages and wants to predict medication response | Genome-wide ancestry percentages do not identify medically relevant local haplotypes | Refuse direct prediction; retain only educational sampling caveats | Joint team clinical review |
| Team 2 finds an inherited disease associated with drug adverse reactions | May be drug–disease interaction, not gene–drug pharmacogenetics | Create a separate condition–medication evidence claim; do not label as PGx unless the genotype–drug effect itself is validated | Team 2 medical reviewer + PGx specialist |
| Team 2 discusses ketogenic diet and medication side effects | Diet can affect health, food intake and medication tolerability, but not necessarily a specific PGx phenotype | Clearly separate nutrition/medication counseling from genetic evidence, and demand direct interaction evidence for any claim | Team 2 nutrition lead + clinical pharmacist |
| Allopurinol HLA-B*58:01 screening recommendations cite racial groups | Overly broad, potentially inconsistent with the “ancestry is not genotype” rule | Explain conditional ACR policy, very-low policy certainty, local context and the separate strong HLA association; avoid user-specific test recommendations | Clinical/ethics lead |
| 2026 DPYD interim allele update conflicts with a previously stored function table | Incorrect phenotype mapping could cause real harm | Freeze published allele definitions until finalized primary guideline and specialist migration review | PGx pharmacist + diagnostics specialist |
| Strong HLA-associated case-control odds ratio appears to be a high personal absolute risk | Misleads and creates unnecessary alarm | Present OR as a **relative association**, with baseline penetrance unestimated and no personal risk number | Statistics + medical reviewer |
| Commercial genetic panels advertise serotonin gene-based medication choice | Some marketing claims exceed CPIC evidence | Keep SLC6A4/HTR2A findings explicitly nonactionable | PGx team |
| A merged health tool wants to recommend GLP-1 drugs by ethnicity or GLP1R allele | 2026 association does not validate choosing treatments | No go; only literature summary until prospective incremental clinical utility | Joint medical board |

## 7. Priority research findings to carry forward

**Established gene–drug themes:** clopidogrel/CYP2C19; carbamazepine/HLA-B*15:02 and HLA-A*31:01; allopurinol/HLA-B*58:01; thiopurines/TPMT–NUDT15; codeine and tramadol/CYP2D6; selected SSRIs/CYP2D6–CYP2C19–CYP2B6; selected statins/SLCO1B1–ABCG2–CYP2C9; fluoropyrimidines/DPYD; abacavir/HLA-B*57:01; tacrolimus/CYP3A5; selected aminoglycosides/MT-RNR1; and 2024/2025 updates for metoprolol/CYP2D6 and hydralazine/NAT2. Status does not imply blanket genetic screening or clinical use by the calculator.

**Strong quantitative anchors:** TAILOR-PCI HR 0.66 (95% CI 0.43–1.02), primary P=0.06; PREDICT-1 immunologically verified abacavir hypersensitivity 0% screened vs 2.7% unscreened; PREPARE actionable ADRs 21.0% vs 27.7%, OR 0.70 (95% CI 0.54–0.91); 2026 GLP1R ~0.76 kg additional weight loss per allele (95% CI ~0.34–1.27), discovery P=2.9×10^-10. See the matrix and cited primary sources for denominators, study designs and limits.

**Changing authoritative landscape:** CPIC 2025 TPMT/NUDT15 update first online January 2026, **formally corrected June 2026 (TPMT phenotype table and retired NUDT15*2 example)**; DPYD July 2026 interim note; FDA association table updated 10 September 2026; FDA CDS final guidance January 2026; 2024 LDT rule vacated 2025. All require ongoing versioned monitoring. [FDA PGx table](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations) · [FDA CDS 2026](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software).

## 8. Concrete joint review questions

1. **To Team 1:** What is your canonical population schema: region, self-report, genetic inference or study-specified ancestry? Can it preserve source-specific definitions *without mapping every label to a universal canonical ethnic category*?
2. **To Team 1:** Do you have any high-quality primary subgroup allele-frequency studies with denominators for specific South Asian, East Asian, African or admixed American cohorts? If not, mark missing rather than impute.
3. **To Team 1:** How will your calculator distinguish clinically studied anthropometric cutoffs from generic ancestry percentages? PGx must never reuse such cutoffs as genetic risk scores.
4. **To Team 2:** Which drug–disease and drug–nutrient interactions have independently verified clinical evidence, and which are hypotheses from diet, hereditary disease or observational wellness studies?
5. **To Team 2:** How are recommendations for keto or other diet patterns separated from validated inherited-disease nutrition requirements and medication effects, including situations requiring physician oversight?
6. **To both:** Can we adopt a single shared `claim_id` namespace convention and evidence-tier definitions while preserving the **full source text/version** and leaving each team's domain decisions intact?
7. **To both:** Are there claims that incorrectly infer individual outcomes from population averages? Flag these for joint no-go review rather than publishing a compromise statement.
8. **To project owner:** Is the approved next deliverable only a research review and static educational page? This team recommends **yes**, with no genomic upload, drug selection, dose outputs or patient advice.
9. **To clinical reviewers:** Which claim IDs need additional guideline primary-table checking, and which should be withheld pending allele version confirmation or updated CPIC material?
10. **To legal/privacy reviewers:** What intended-use language and technical constraints keep a separate read-only educational page outside patient-specific CDS functionality under applicable law?

## 9. Merge workflow and acceptance checklist

### Proposed order

**First:** merge scientific claims while preserving every `PGX-` row, not assuming access to the other research chats. **Second:** joint review of linked population descriptions and hereditary/nutrition hypotheses. **Third:** independent medical and statistics review of any published user-facing content. **Fourth:** separate UI proposal for a static linked module. **Fifth:** only after an explicitly different product approval, discuss genomic file upload or clinician-mediated CDS as a future research program.

### Release acceptance checks

- [ ] TPMT/NUDT15 2026 erratum checked against its corrected Table 1 (PGX-036).
- [ ] All six Team 3 files preserved and attributed; `PGX-001`–`PGX-036` all parse with 14 exact fields.
- [ ] `clinical_status` uses only the five specified statuses, with explanatory legend; no forced inflation of observational findings.
- [ ] Clear distinction of self-report versus genetic genotype; allele frequencies and carrier rates not combined.
- [ ] Published guideline dates and allele definitions reviewed against the latest official guidance.
- [ ] No medication dosing instructions to users and no personal medication safety conclusions.
- [ ] Team 1 anthropometric and Team 2 diet/inherited-disease algorithms unchanged.
- [ ] Cross-stream references are **citations/linkages**, not hidden algorithm dependencies.
- [ ] GLP1R/GIPR research distinctly nonactionable; cohort limitations and effect sizes retained.
- [ ] FDA/medical professional review, accessibility, human-comprehension and privacy controls documented before a public education launch.
- [ ] Clinical deployment explicitly blocked pending a separately approved clinical program.

## 10. Explicit final handoff decision

**MERGE for research reference and educational design. DO NOT MERGE into the operational weight/BMI/diet algorithms or any medicine-prescribing path.** This leaves Teams 1 and 2 free to pursue their own domain validity while preserving a credible, carefully bounded pharmacogenetics foundation for future independent clinical review.