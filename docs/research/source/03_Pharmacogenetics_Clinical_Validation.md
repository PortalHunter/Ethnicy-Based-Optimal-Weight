# Research Team 3 — Pharmacogenetics Clinical, Technical and Regulatory Validation

**As-of date:** 1 November 2026  
**Current intended use:** read-only, non-personal pharmacogenetics education.  
**Not proposed for release:** a medication prescribing tool, patient-specific pharmacogenetic interpreter, genetic-testing workflow or clinical decision support (CDS).

## Executive assessment

Published professional guidance establishes **clinical validity** for certain gene–drug relations, but it does not validate this new website, automatically justify genetic screening, or show that a consumer application improves outcomes. A responsible pathway first proves that the **evidence content is accurate, understandable and non-misleading**. Analytical test validity and prospective clinical utility become relevant *if and only if* a separately governed future application processes real genetic tests or recommends clinical actions. Do not use real patients for medication guidance during early research stages.

Evidence dimensions cannot be substituted for one another:

| Dimension | Core question | Required proof for future clinical use |
|---|---|---|
| **Analytical validity** | Does the assay accurately detect the intended allele/copy number and report the correct diplotype? | Lab assay validation, panel coverage, accuracy, repeatability, reference material, HLA and structural variant resolution, ancestry-diverse samples |
| **Clinical validity** | Does a correctly assigned genotype meaningfully predict the relevant drug exposure, efficacy or adverse reaction in this clinical setting? | Replicated association, effect size and uncertainty, phenotype classification, external applicability, medication indication, calibration |
| **Clinical utility** | Does acting on a test improve patient outcomes versus standard care? | Pragmatic clinical trials, comparative effectiveness, harms, cost/access, end-user workflow, subgroup equity |
| **Guideline concordance** | Are displayed statements faithful to the relevant current professional documents? | Versioned CPIC/DPWG/FDA/medical society comparison, independent specialist sign-off, auditable mapping |
| **User/clinician comprehension** | Can users distinguish association, screening policy, confirmed genotype and validated clinical action? | Structured usability study with objective comprehension and error analysis |
| **Privacy/consent** | Is sensitive genetic/medication data handled lawfully and ethically? | Minimum-necessary data design, consent, threat model, applicable federal/state rule and contracts, audit trails |
| **Regulatory fit** | Are software intended use and features compatible with the relevant device/testing/health-data rules? | Written counsel-supported determination before personalization; ongoing change review |

## 1. Research and source-validation requirements

### Guideline/version controls

**Primary source hierarchy:** (1) official current CPIC guideline and supplemental phenotype tables; (2) current PharmVar nomenclature, ClinPGx annotation and DPWG guidance for cross-comparison; (3) FDA official labeling and pharmacogenetic association table; (4) specialty-society *testing policy*; (5) peer-reviewed original trials, external replication and systematic reviews; (6) population allele-frequency primary datasets. Do not collapse these into an undifferentiated “evidence-backed” tag.

**Date-sensitive findings to track at the outset:**

- FDA [Table of Pharmacogenetic Associations](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations) revised **10 September 2026**. Sections 1, 2 and 3 indicate different grades/types of evidence and should be shown in context, not treated as equivalent to a routine testing recommendation. FDA explicitly directs patients not to change medicines on the basis of that table without consulting a prescriber.
- **TPMT/NUDT15**: 2025 CPIC update first online **31 January 2026** (April print), PMID [41618934](https://pubmed.ncbi.nlm.nih.gov/41618934/), [DOI:10.1002/cpt.70209](https://doi.org/10.1002/cpt.70209), includes nomenclature and combined-phenotype considerations. Previously recorded NUDT15*2 terminology must not be silently treated as unchanged. A **formal correction first published 28 April 2026 (June print)** corrected Table 1: TPMT one no-function plus one decreased-function allele is **intermediate**, not possible intermediate, and a retired NUDT15*2 example was removed ([correction DOI:10.1002/cpt.70298](https://pmc.ncbi.nlm.nih.gov/articles/PMC13652152/)); compare corrected guidance rather than the uncorrected article table.
- **DPYD**: [July 2026 interim CPIC note](https://www.clinpgx.org/guidelineAnnotation/PA166122686) regarding HapB3 `c.1129-5923C>G` reclassification exists while a comprehensive revised guideline is still being prepared. This is a tracked pending change, **not** a license to deploy unfinalized phenotype assignments.
- **SLCO1B1/statins**: CPIC 2022 guideline and later allele function reclassifications require exact star-allele version checks; [statins guideline](https://www.clinpgx.org/guideline/PA166264281).
- **ClinPGx** superseded the prior PharmGKB public experience for many resources as of 2025; verify annotation provenance and archival dates. [ClinPGx](https://www.clinpgx.org/).

### Source extraction acceptance criteria

For each `PGX-` claim: evidence grade and clinical status not conflated; source DOI/PMID/URL; source version and review date; clinical context; variant nomenclature; positive and negative limitations; effect estimator and CI **with units**; ancestry population defined from the study, not inferred; contradiction or nonsignificance highlighted; and clinical reviewer acceptance. Every source-based recommendation must have an audit trail to a *specific* guideline table/footnote before making a statement about what a genotype means.

**Critical negative controls:** TAILOR-PCI's 12-month primary endpoint P=0.06 cannot be reported as definitively positive. GLP1R rs10305420's 2026 discovery/replication (~0.76 kg additional loss per allele) cannot become patient-specific treatment selection. SLC6A4/HTR2A antidepressant pharmacodynamic candidate markers cannot be given an actionable status merely because a consumer panel includes them. Such examples prevent optimistic bias in reviews.

## 2. Analytical validation (future patient-genotype stage only)

A later clinical application must not accept unverified consumer raw data as equivalent to a diagnostic lab result. Clinical assay validation must include:

- **Identity and sample handling:** qualified laboratory credentials as applicable; specimen chain of custody, QC, sample contamination and swaps, accessioning, performance specifications.
- **Genomic representation:** reference assembly (GRCh37/38), strand and normalization, phasing of nearby variants, haplotypes/star alleles, diplotype and metabolizer-phenotype translation, confidence/quality flags.
- **Difficult loci:** CYP2D6 copy-number changes, hybrid alleles and gene conversions; HLA-B*15:02 / HLA-B*58:01 / HLA-B*57:01 high-resolution typing; MT-RNR1 mitochondrial heteroplasmy; structural variation; NUDT15 and TPMT suballeles; DPYD causal and tag variants.
- **Performance per locus:** analytical sensitivity and specificity, positive/negative percent agreement, repeatability/reproducibility, call/no-call rate, QC-failure handling, rare-variant detection and **coverage gaps by source-defined ancestry cohorts**.
- **Reference standards:** orthogonal sequencing or validated methods, traceable reference materials, controls for rare variants and copy-number states; proficiency testing where available.
- **Conservative failure mode:** missing/no-call, ambiguous phase, untested allele or uncertain function must be labeled **indeterminate**—not defaulted to “normal,” “safe,” or “noncarrier.”
- **Human review:** board-certified/appropriately qualified laboratory molecular genetics or PGx interpretation review before any future clinical result output.

This stage is **out of scope** for the proposed educational page. It becomes necessary only after a new intended use is approved.

## 3. Clinical validation and utility

### Gene–drug validity is medicine- and indication-specific

CYP2C19 loss-of-function variants predict reduced clopidogrel activation, but PCI, ACS, stroke/TIA and other contexts require differing treatment decisions. HLA-B*15:02 strongly associates with carbamazepine SJS/TEN; HLA-A*31:01 has a partly different reaction spectrum. SLCO1B1 effects differ by statin. Thus a generic “medication compatibility score” is not clinically valid.

### Evidence of changing outcomes is heterogeneous

**Examples with stronger implementation evidence:** Abacavir HLA-B*57:01 prospective screening in PREDICT-1 eliminated immunologically confirmed hypersensitivity in the screened arm (0% versus 2.7%); [PMID 18256392](https://pubmed.ncbi.nlm.nih.gov/18256392/). The [PREPARE cluster crossover trial](https://pubmed.ncbi.nlm.nih.gov/36739136/) reported 21.0% vs 27.7% clinically relevant ADRs among eligible actionable carriers using a multigene implementation; OR 0.70 (95% CI 0.54–0.91). It validated **an intervention package and local workflow**, not every gene pair independently, and its population mix limits transferability.

**Important uncertainty:** TAILOR-PCI reported HR 0.66, 95% CI 0.43–1.02; P=0.06 on its prespecified primary endpoint. It is supportive of a direction, not proof of a statistically significant primary superiority result. Other clinical conditions, standard-of-care alternatives and assay methods may alter observed utility. [PMID 32840598](https://pubmed.ncbi.nlm.nih.gov/32840598/).

### Appropriate validation metrics for possible future clinical development

Prior to real-world use, specify outcome-specific endpoints and thresholds with independent clinical review: appropriate treatment selection against specialist consensus, clinically important ADR rate, false harmful prompts, missed actionable result rate, genotyping no-call rate, inappropriate action in unknown-genotype cases, time to correct decision, user comprehension, and equity performance across source-defined groups. Prospective evaluation may require multicenter controlled design and independent data monitoring, depending on intended use and risk. **No performance threshold has been clinically validated for this proposed project**, so none should be treated as evidence that it is ready for clinical deployment.

## 4. Staged roadmap and measurable gates

| Stage | Work | Evidence deliverables | Exit criterion | Patient-level medication recommendation? |
|---|---|---|---|---|
| **0 — Source freeze and red-team** | Lock research cutoff; collect current original guidelines; reconcile trial and population data | Evidence matrix, citations, conflicts register, allele nomenclature snapshots | 100% claims source-traceable; 100% actionability labels correctly scoped; independent audit findings resolved | **No** |
| **1 — Specialist review** | Independent PGx pharmacist, clinician, medical geneticist and statistician review; independent regulatory screening | Signed evidence map, clinical safety language, guideline/label concordance, conflict disclosures | Zero critical discrepancies in content; all unfinalized guidance flagged | **No** |
| **2 — Public educational usability** | Test static pages with lay readers and clinicians, including diverse literacy and ancestry groups; accessibility testing | Scenario-based comprehension results, usability issue logs, WCAG assessment, privacy model | Predetermined comprehension goals met, with **zero** test participants believing the site has genotyped or approved a personal drug change | **No** |
| **3 — Synthetic-only software verification** | If a future clinician-oriented prototype is justified, use synthetic alleles and medicine contexts only; deterministic and property-based tests | Mapping tests, adverse-event risk register, source-to-rule traceability, audit logs, out-of-distribution checks | Perfect conformance on predeclared critical safety cases; **no real user genetic data**, no live clinical activation | **No** |
| **4 — Separately governed clinical investigation** | New regulatory intended-use assessment, approved protocols/IRB where required, validated labs, clinician oversight, diverse external validation; prospective utility study if warranted | Analytical validation reports, study protocol, consent/security review, clinical-outcome results and equity analyses | Independent clinicians/regulatory advisers find adequate benefit-risk and authorization; further prospective evidence supports intended use | Only under independently approved clinical governance; **not within this weight calculator** |

These gates are examples for **planning and quality management**, not substitutes for a validated regulatory pathway or proof of clinical efficacy.

## 5. Software regulatory assessment (United States, as of 2026)

### FDA decision support guidance

The [FDA final Clinical Decision Support Software guidance, January 2026](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software) explains four criteria for an excluded *non-device CDS* function under FD&C Act §520(o)(1)(E): (1) not acquiring/processing/analyzing medical images, IVD signals or signal-system patterns; (2) displaying/analyzing/printing patient or other medical information; (3) supporting recommendations **to a healthcare professional** regarding prevention, diagnosis or treatment; (4) enabling the professional to independently review the basis rather than rely primarily on the tool. The exclusions depend on the **actual function and intended user**, not a disclaimer. See the [FDA's step-by-step CDS interpretation](https://www.fda.gov/medical-devices/digital-health-center-excellence/step-6-software-function-intended-provide-clinical-decision-support).

A patient-facing genetic result interpreter **should not** be presumed to satisfy the clinician-focused non-device CDS exemption. Conversely, failure to meet that exemption does not automatically mean every informational tool is a regulated device: actual intent/function and other policies matter. Legal/regulatory assessment is needed **before** patient-specific features, decision rules or marketing claims are developed. The [January 2026 general-wellness guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices) should not be invoked to justify disease treatment or drug dosing claims.

### Laboratory developed tests (LDTs)

The FDA's May 2024 LDT final rule was **vacated on 31 March 2025**; the FDA **reverted the regulatory text on 19 September 2025**. Do not use an obsolete 2024 LDT phaseout schedule as the current law. Applicable CLIA/CMS and FDA device or IVD requirements depend on the actual actors and intended use, and still require legal review. [FDA LDT chronology](https://www.fda.gov/medical-devices/in-vitro-diagnostics/laboratory-developed-tests).

### Other requirements

- Clinical decision support and software-as-medical-device rules may apply in other jurisdictions; EU IVDR/MDR, data protection, professional practice and market context require separate analysis; no universal compliance assertion.
- A published gene–drug guideline does **not** authorize the developer to practice medicine or claim FDA clearance of a new app.
- Open-source licensing, provenance, copyright of guideline tables and algorithm transparency are separate issues from clinical validation.

## 6. Privacy, security and informed consent

For the static module, the safest design is to collect **no personal genetic, ancestry, medication or health information**. Avoid embedded third-party advertising/trackers in education pages; if page analytics are needed, use privacy-preserving aggregate metrics without sensitive query capture.

If a separate future system collects sensitive inputs, require a data-protection impact assessment including:

- **Consent:** clear specific purposes, retention/deletion periods, research versus clinical use, limits of inference, recontact and incidental findings; avoid bundled authorization.
- **Security:** encryption at rest and in transit, least-privilege access, audit logs, incident response, breach notification, vendor review, key management and access review.
- **Scope:** determine if HIPAA applies based on actual entities, roles and agreements; consumer health apps are **not automatically HIPAA-covered**. Evaluate the FTC Health Breach Notification Rule and state privacy/genetic privacy laws. [FTC 2024 health-app rule guidance](https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0).
- **Genetic discrimination:** federal [GINA](https://www.hhs.gov/ohrp/regulations-and-policy/guidance/guidance-on-genetic-information-nondiscrimination-act/index.html) protections generally cover employment and health insurance, not all life, disability or long-term care insurance; jurisdiction-specific variations require legal review.
- **Consumer genomics:** arrays, imputation and exports may not detect HLA types or CYP2D6 rearrangements sufficiently for clinical use; never promise "whole genome" certainty from a generic uploaded file.
- **Retention/governance:** explicit revocation and deletion procedure, limits on training of models on user data, reidentification risk assessment, consent for any secondary research and independent ethics oversight.

## 7. Required safety cases and failure-mode analysis

| Failure mode | Potential harm | Planned control | Verification |
|---|---|---|---|
| Self-reported ancestry interpreted as HLA carrier | False reassurance or unnecessary fear; medication change | No ancestry-to-genotype path, independent warnings | Static code/data review and user comprehension scenarios |
| Missing CYP2D6 structural variant reported normal | Wrong metabolic interpretation | Future assays require CNV/SV validation; unknown as indeterminate | Synthetic multi-copy and no-call test set |
| Outdated TPMT/NUDT15/SLCO1B1 assignment | Wrong phenotype despite real genotype | Versioned nomenclature; refresh requires clinical sign-off | Regression tests on historical alleles |
| Draft DPYD HapB3 update treated as final | Clinical misinformation | Pending-change flag; final guideline only for therapeutic claims | Content approval workflow |
| Odds ratio interpreted as individual's reaction probability | Unwarranted medication avoidance | Separate relative from absolute risk; no personalized risk estimators | User testing with numeracy questions |
| 2026 GLP1R association used to select semaglutide/tirzepatide | Unvalidated treatment response rule | Observational research-only label; no drug picker | UX and code review |
| Severe reaction while using the educational site | Delayed urgent medical care | Clear non-emergency intended use; seek urgent medical evaluation for suspected severe reactions | Clinical content review |
| Data leak from DNA upload | Irreversible genetic privacy exposure | **Do not accept uploads** for educational stage | Negative integration test, privacy scan |

## 8. Independent review and ongoing surveillance

**Pre-release expert group:** at minimum a pharmacogenomics-trained pharmacist or clinical pharmacologist, prescribing clinician(s) for high-risk domains, molecular diagnostics/medical genetics expert, biostatistician, privacy/security expert and accessibility/usability reviewer. Document expertise, affiliations, conflicts of interest and approval date. If a claim lacks consensus, mark uncertainty prominently instead of letting a single reviewer settle the matter silently.

**Evidence surveillance schedule:** quarterly review of CPIC, ClinPGx/PharmVar, DPWG, FDA labeling/association table and new published studies; urgent out-of-cycle review after formal safety update or guidelines that materially change interpretation. Log what changed, why, affected `PGX-` IDs, owner and disposition. Automatically generated draft updates should never automatically become published clinical recommendations.

## 9. Explicit stop/go criteria

**GO for static research publication only after:** references verified, all 36 matrix entries reviewed, evidence levels correctly conveyed, critical user confusion corrected, accessible output, no sensitive information collection, and no personalized treatment capability. A static site still benefits from medical review because readers may mistake educational summaries for personal advice.

**NO-GO for any clinical or patient-specific function unless:** separately approved intended use; qualified clinical leadership; laboratory analytical validity; prospectively defined clinical validity and utility; diverse external verification; regulatory/legal assessment; privacy and consent; safety monitoring; and documented favorable benefit–risk. Lack of any one critical safety element is a blocker.

## Sources for verification

- [FDA Table of Pharmacogenetic Associations, updated September 10, 2026](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations)
- [FDA final CDS guidance, January 2026](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software)
- [FDA CDS definition and independent-review criteria](https://www.fda.gov/medical-devices/digital-health-center-excellence/step-6-software-function-intended-provide-clinical-decision-support)
- [FDA general wellness guidance, January 2026](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices)
- [FDA LDT chronology and vacatur](https://www.fda.gov/medical-devices/in-vitro-diagnostics/laboratory-developed-tests)
- [CPIC guideline index](https://cpicpgx.org/guidelines/)
- [2026 TPMT/NUDT15 formal correction](https://pmc.ncbi.nlm.nih.gov/articles/PMC13652152/)
- [CPIC DPYD July 2026 interim note](https://www.clinpgx.org/guidelineAnnotation/PA166122686)
- [PREDICT-1 HLA-B*57:01–abacavir RCT](https://pubmed.ncbi.nlm.nih.gov/18256392/)
- [PREPARE 2023 pharmacogenetic implementation RCT](https://pubmed.ncbi.nlm.nih.gov/36739136/)
- [TAILOR-PCI 2020 RCT](https://pubmed.ncbi.nlm.nih.gov/32840598/)
- [FTC Health Breach Notification Rule guidance](https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0)
- [HHS GINA overview](https://www.hhs.gov/ohrp/regulations-and-policy/guidance/guidance-on-genetic-information-nondiscrimination-act/index.html)

**Bottom line:** The immediate clinically responsible milestone is a *source-verified, reviewed educational reference*, not clinical validation of ancestry-based medication advice or a patient-specific decision engine.