# Research Team 3 — Standardized Pharmacogenetics Evidence Matrix

**Evidence cut-off:** 2026-11-01. **Status:** research; no patient-specific drug advice.  
**Total claims:** 36. Each has all **14 mandatory harmonized fields**; claim IDs are stable and prefixed `PGX-`.

## Interpretation contract

- **`clinical_status`** is project-specific *actionability status*, not an FDA approval or CPIC confidence grade. `guideline-supported` means a source-verified gene–drug pairing or explicitly identified policy has professional action guidance; it **does not** mean universal testing is indicated. `observational` includes primary published study findings, including randomized trial *results* that are included as evidence rather than new standalone recommendations. `exploratory` means unfinalized/early evidence or a monitoring item. `insufficient` means no validated clinical action presently. `contradicted` is reserved for claims positively overturned by credible replication or consensus; no such judgment is forced where findings are simply mixed.
- **`evidence_grade`** is a **local research classification**, *not a CPIC level*: `G1` mature authoritative guidance with strong gene–drug biological/clinical support; `G2` action guidance with more limited scope/utility; `R1` randomized outcome evidence (may or may not meet its primary endpoint); `O1` replicated/meta-analyzed observational evidence; `O2` other observational/population data; `E2` emerging/version-sensitive; `U1` insufficient for implementation. Never map automatically to PharmGKB or CPIC evidence scores.
- Alleles, diplotypes, and metabolizer phenotype definitions must be rechecked against **current CPIC tables, PharmVar, and ClinPGx** before publication. A study's reported allele frequencies **are not a person's genotype**. None of the records authorizes drug changes or BMI/diet algorithm changes.
- Effect sizes use their source's own estimand (OR, HR, kilograms, allele percentage, etc.); missing estimates are acknowledged rather than fabricated. Confirm the source's denominator before plotting.
- Many citations name a **guideline landing page** rather than a frozen recommendation table. For future clinical use, each needs signed versioned extraction by a qualified pharmacogenetics clinician and pharmacist.

## Fast overview

| ID | Relationship or claim | Project clinical status | Evidence | Module |
|---|---|---|---|---|
| PGX-001 | CYP2C19 loss-of-function alleles *2 (rs4244285), *3 (rs4986893), additional validated LOF; norm | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-002 | CYP2C19 LOF-guided antiplatelet strategy in TAILOR-PCI RCT | observational | R1 | Critical appraisal attached to PGX-001 |
| PGX-003 | HLA-B*15:02 (specific HLA allele), carbamazepine | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-004 | HLA-A*31:01, carbamazepine | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-005 | HLA-B*58:01, allopurinol | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-006 | Pre-treatment HLA-B*58:01 testing for Southeast Asian descent (e.g., Han Chinese, Korean, Thai) | guideline-supported | G2 | Clinical screening-policy sidebar; never default ancestry to carrier status |
| PGX-007 | TPMT no-function/decreased-function star alleles and NUDT15 no-function alleles (notably *3.001 | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-008 | NUDT15 *3.001 (c.415C>T), *3.002 (c.415C>T plus insertion); previously described *2 alignment;  | guideline-supported | G1 | PGx glossary and versioned terminology, never raw file ingestion |
| PGX-009 | CYP2D6 duplications/functional alleles (UM) and no-function diplotypes (PM), codeine | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-010 | CYP2D6 activity score and phenotype, tramadol | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-011 | CYP2D6 PM vs normal/other phenotypes, atomoxetine | guideline-supported | G2 | Dedicated PGx educational gene–drug entry |
| PGX-012 | CYP2C19 PM/IM/NM/RM/UM and escitalopram/citalopram; CYP2D6 for selected SSRIs | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-013 | SLC6A4 5-HTTLPR and HTR2A variants; SSRIs | insufficient | U1 | Explicit nonactionable-marker warning |
| PGX-014 | SLCO1B1 c.521T>C (rs4149056), reduced-function haplotypes, simvastatin | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-015 | ABCG2 c.421C>A (rs2231142), rosuvastatin | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-016 | DPYD *2A rs3918290, *13 rs55886062, c.2846A>T rs67376798, HapB3 causal rs75017182, fluorouracil | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-017 | DPYD HapB3 c.1129-5923C>G (rs75017182) July 2026 interim reinterpretation | exploratory | E2 | Evidence-changelog / pending revision flag |
| PGX-018 | DPYD c.557A>G (rs115232898) and other underrepresented reduced-function variants | observational | O2 | Equity / test-panel coverage explainer |
| PGX-019 | HLA-B*57:01, abacavir | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-020 | CYP2C9 decreased-function alleles, VKORC1 -1639G>A (rs9923231), optional CYP4F2 p.V433M (rs2108 | guideline-supported | G2 | Dedicated PGx educational gene–drug entry |
| PGX-021 | CYP3A5 *1 expressor vs *3/*6/*7 nonexpressor diplotypes, tacrolimus | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-022 | MT-RNR1 m.1555A>G, m.1494C>T, m.1095T>C; aminoglycosides | guideline-supported | G1 | Dedicated PGx educational gene–drug entry |
| PGX-023 | HLA-B*15:02, carbamazepine; group-specific carrier prevalence in FDA label | observational | O2 | Frequency/context panel only |
| PGX-024 | HLA-B*58:01, allopurinol; ancestry-group carriage | observational | O2 | Population comparative text with provenance |
| PGX-025 | CYP2C19 *2, *3 and *17 allele frequencies across African, European, East Asian, South/Central A | observational | O2 | Statistical population atlas; no risk calculator |
| PGX-026 | GLP1R rs10305420 (p.Pro7Leu; T effect allele), GLP1 receptor agonist weight response | observational | O2 | Experimental weight-medication genetics subsection, not BMI/diet algorithm |
| PGX-027 | GIPR rs1800437 (p.Glu354Gln), tirzepatide nausea/vomiting | exploratory | E2 | Research horizon watchlist only |
| PGX-028 | GLP1R/GIPR and other variants as prospective selector for semaglutide/tirzepatide | insufficient | U1 | Prominent nonactionability statement and future-research tracking |
| PGX-029 | SLC22A1 OCT1 and other common variants, metformin | insufficient | U1 | Emerging evidence / not clinically actionable |
| PGX-030 | PREPARE 12-gene panel with clinical decision support for multiple medicines | observational | R1 | Clinical validation rationale, NOT justification to deploy consumer CDS |
| PGX-031 | CYP2D6 PM vs other metabolizer phenotypes, metoprolol | guideline-supported | G2 | Dedicated PGx educational gene–drug entry |
| PGX-032 | NAT2 rapid/intermediate/slow acetylator haplotypes, hydralazine | guideline-supported | G2 | Dedicated PGx educational gene–drug entry |
| PGX-033 | OPRM1 rs1799971 and COMT rs4680 with common opioids | insufficient | U1 | Nonactionable marketing claim register |
| PGX-034 | HLA-B*58:01 and allopurinol-related severe cutaneous adverse reactions | observational | O1 | Quantitative evidence footnote to PGX-005 |
| PGX-035 | SLCO1B1 *9, *31, *39, *41 and *45 changed functional assignments in 2025 | exploratory | E2 | Source-data version registry |
| PGX-036 | 2026 correction to CPIC 2025 TPMT/NUDT15 Table 1: TPMT one no-function PLUS one decreased-funct | guideline-supported | G1 | Version alert and nomenclature change-log, linked to PGX-007 and PGX-008 |

## Source records (YAML; individually parseable)

**Schema note:** Each fenced YAML object is one top-level mapping. For aggregation, concatenate with `---` into a multi-document YAML stream; quote/unescape the values using a YAML parser, not string splitting.

### PGX-001

```yaml
claim_id: PGX-001
domain: Platelet inhibition / cardiovascular
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2C19 loss-of-function alleles *2 (rs4244285), *3 (rs4986893), additional validated LOF;
  normal/IM/PM diplotypes; *17 increased function
outcome: Diminished clopidogrel active metabolite and platelet inhibition in LOF; CPIC 2022 supports alternative
  antiplatelet selection in specified ACS/PCI and other contexts
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:35034351; DOI:10.1002/cpt.2526
evidence_grade: G1
clinical_status: guideline-supported
limitations: Treatment setting matters; allele coverage and *2/*17 diplotype assignments; bleeding, ischemic risks
  and access to alternatives not inferable from genotype
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-002

```yaml
claim_id: PGX-002
domain: Clinical outcomes trial / clopidogrel
population_definition: Patients undergoing PCI; randomized, LOF subgroup n≈1,849
exposure_or_variant: CYP2C19 LOF-guided antiplatelet strategy in TAILOR-PCI RCT
outcome: 'Prespecified 12-month composite ischemic endpoint: 4.0% genotype-guided vs 5.9% conventional in LOF carriers;
  HR 0.66 (95% CI 0.43–1.02), P=0.06'
effect_estimate_and_uncertainty: 4.0% vs 5.9%; HR 0.66, 95% CI 0.43–1.02; primary P=0.06 (not conventionally significant)
study_design: Multicenter randomized clinical trial
source_doi_pmid_or_url: PMID:32840598; https://pubmed.ncbi.nlm.nih.gov/32840598/
evidence_grade: R1
clinical_status: observational
limitations: Primary endpoint narrowly missed prespecified significance; avoid describing superiority as conclusively
  proven; post hoc and secondary analyses do not replace primary test
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Critical appraisal attached to PGX-001
validation_next_step: Reassess trial meta-analyses and cardiology position statements separately from CPIC
```

### PGX-003

```yaml
claim_id: PGX-003
domain: Severe cutaneous adverse reaction
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: HLA-B*15:02 (specific HLA allele), carbamazepine
outcome: Markedly increased carbamazepine-associated SJS/TEN risk among carriers; CPIC actionability based on test
  result
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://cpicpgx.org/guidelines/; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50ba2042-fc67-4266-a773-a30f07649a5a
evidence_grade: G1
clinical_status: guideline-supported
limitations: Ancestry is not genotype; risk can persist in noncarriers; duration of previous tolerance and clinical
  setting affect application
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-004

```yaml
claim_id: PGX-004
domain: Severe cutaneous adverse reaction
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: HLA-A*31:01, carbamazepine
outcome: Association with multiple carbamazepine hypersensitivity phenotypes, including DRESS and maculopapular
  eruption; CPIC 2017/2018 considers allele-specific recommendations
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://cpicpgx.org/guidelines/; PMID:29392710
evidence_grade: G1
clinical_status: guideline-supported
limitations: Phenotypic spectrum not identical to HLA-B*15:02; allele prevalence broad and independent of racial
  labels
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-005

```yaml
claim_id: PGX-005
domain: Severe cutaneous adverse reaction
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: HLA-B*58:01, allopurinol
outcome: Strong allopurinol severe cutaneous adverse reaction association; genotype-guided avoidance is guideline
  supported
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: DOI:10.1002/cpt.161; https://www.clinpgx.org/guideline/PA166251446
evidence_grade: G1
clinical_status: guideline-supported
limitations: Testing does not eliminate all risk; CKD, concomitant medications, age and clinical indication matter
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-006

```yaml
claim_id: PGX-006
domain: Screening policy / allopurinol
population_definition: U.S. gout treatment context; self-reported groups used by ACR for screening policy, not genetic
  inference
exposure_or_variant: Pre-treatment HLA-B*58:01 testing for Southeast Asian descent (e.g., Han Chinese, Korean, Thai)
  or African American patients, per ACR 2020
outcome: ACR conditionally recommends testing for specified groups; recommends against universal testing in other
  groups; this is a *testing-policy* recommendation, not an ancestry-derived diagnosis
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: Professional clinical guideline based on evidence and prevalence
source_doi_pmid_or_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/
evidence_grade: G2
clinical_status: guideline-supported
limitations: Conditional and locale-specific; internally heterogeneous groups; real clinical implementation depends
  on local resources
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Clinical screening-policy sidebar; never default ancestry to carrier status
validation_next_step: Compare 2020 ACR with any post-2020 changes and assess local applicability
```

### PGX-007

```yaml
claim_id: PGX-007
domain: Myelosuppression / immunosuppression
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: TPMT no-function/decreased-function star alleles and NUDT15 no-function alleles (notably *3.001
  and *3.002); combined diplotypes, 6-MP/azathioprine/thioguanine
outcome: Genetically decreased thiopurine inactivation raises risk of profound myelosuppression; CPIC 2025 guideline
  update published 2026 supports phenotype-guided therapy
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:41618934; DOI:10.1002/cpt.70209
evidence_grade: G1
clinical_status: guideline-supported
limitations: Disease indication, co-therapy and routine blood-count monitoring still necessary; variant panels vary
  across ancestries; no personalized dose in this project
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Check finalized 2025 CPIC nomenclature and combined IM/IM branch; review with hematology/pharmacy
```

### PGX-008

```yaml
claim_id: PGX-008
domain: Allele nomenclature / NUDT15
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: NUDT15 *3.001 (c.415C>T), *3.002 (c.415C>T plus insertion); previously described *2 alignment;
  insertion-alone *6
outcome: Updated 2025 CPIC nomenclature changes how allele strings map to phenotype, without implying historical
  lab calls can be silently translated
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:41618934; DOI:10.1002/cpt.70209
evidence_grade: G1
clinical_status: guideline-supported
limitations: Version-sensitive allele definitions, strand/genome build and legacy reports; requires PharmVar/CPIC
  mapping audit
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: PGx glossary and versioned terminology, never raw file ingestion
validation_next_step: Record exact PharmVar/CPIC version and crosswalk signed off by PGx lab specialist
```

### PGX-009

```yaml
claim_id: PGX-009
domain: Opioid activation and safety
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2D6 duplications/functional alleles (UM) and no-function diplotypes (PM), codeine
outcome: Ultrarapid metabolism increases morphine-related toxicity risk; PM may have poor analgesic activation
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:33387367; https://pmc.ncbi.nlm.nih.gov/articles/PMC8249478/
evidence_grade: G1
clinical_status: guideline-supported
limitations: Structural variant detection critical; morphine toxicity is also affected by health status; opioids
  require specialist prescribing
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-010

```yaml
claim_id: PGX-010
domain: Opioid activation and safety
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2D6 activity score and phenotype, tramadol
outcome: Altered O-desmethyltramadol exposure produces efficacy/safety differences; CPIC supports phenotype-conditional
  recommendations
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8249478/
evidence_grade: G1
clinical_status: guideline-supported
limitations: Phenoconversion from CYP2D6 inhibitors can supersede genotype; not evidence for all opioids
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-011

```yaml
claim_id: PGX-011
domain: ADHD drug exposure / CYP2D6
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2D6 PM vs normal/other phenotypes, atomoxetine
outcome: Poor metabolizers may have markedly increased atomoxetine exposure; CPIC 2019 provides conditional genotype-directed
  guidance
effect_estimate_and_uncertainty: About tenfold higher exposure described in comparisons; exposure does not equal
  deterministic adverse-event risk
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://pubmed.ncbi.nlm.nih.gov/?term=CPIC+CYP2D6+atomoxetine+2019; https://cpicpgx.org/guidelines/
evidence_grade: G2
clinical_status: guideline-supported
limitations: Clinical response and tolerability are not perfectly predicted; CYP2D6 inhibitor co-medication can
  mimic PM status
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-012

```yaml
claim_id: PGX-012
domain: Antidepressant drug exposure
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2C19 PM/IM/NM/RM/UM and escitalopram/citalopram; CYP2D6 for selected SSRIs
outcome: Altered drug exposure and response/tolerability; CPIC 2023 provides drug-specific clinical recommendations
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: DOI:10.1002/cpt.2903; https://www.clinpgx.org/guideline/PA166251452
evidence_grade: G1
clinical_status: guideline-supported
limitations: Do not generalize all antidepressants or psychiatric outcomes to one genotype; shared-decision and
  clinical monitoring remain necessary
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-013

```yaml
claim_id: PGX-013
domain: Antidepressant pharmacodynamics
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: SLC6A4 5-HTTLPR and HTR2A variants; SSRIs
outcome: CPIC reviewed but did not support clinical action recommendations for these pharmacodynamic markers
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: Guideline systematic evidence appraisal
source_doi_pmid_or_url: DOI:10.1002/cpt.2903; https://www.clinpgx.org/guideline/PA166251452
evidence_grade: U1
clinical_status: insufficient
limitations: Commercial panel inclusion or statistical associations do not create clinical utility
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Explicit nonactionable-marker warning
validation_next_step: Maintain negative/insufficient registry; avoid displaying as treatment-response scores
```

### PGX-014

```yaml
claim_id: PGX-014
domain: Statin-associated myopathy
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: SLCO1B1 c.521T>C (rs4149056), reduced-function haplotypes, simvastatin
outcome: Reduced hepatic statin uptake increases systemic exposure and muscle symptom/myopathy risk; CPIC 2022 has
  statin-specific actions
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:35152405; DOI:10.1002/cpt.2557
evidence_grade: G1
clinical_status: guideline-supported
limitations: Not all statins carry equal evidence; dose, interactions and clinical circumstances influence outcome;
  alleles were reclassified in Sep 2025
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-015

```yaml
claim_id: PGX-015
domain: Statin pharmacokinetics and risk
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: ABCG2 c.421C>A (rs2231142), rosuvastatin
outcome: Altered transporter activity affects rosuvastatin exposure; CPIC 2022 provides phenotype and statin-specific
  guidance
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:35152405; DOI:10.1002/cpt.2557
evidence_grade: G1
clinical_status: guideline-supported
limitations: The genotype–exposure link must not be inflated into deterministic myopathy prediction or universal
  testing requirement
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-016

```yaml
claim_id: PGX-016
domain: Oncology drug toxicity
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: DPYD *2A rs3918290, *13 rs55886062, c.2846A>T rs67376798, HapB3 causal rs75017182, fluorouracil/capecitabine
outcome: Reduced DPD activity increases risk of life-threatening fluoropyrimidine toxicity; CPIC supports genotype/phenotype-guided
  treatment
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://www.clinpgx.org/guidelineAnnotation/PA166122686; https://www.clinpgx.org/guideline/PA166251462
evidence_grade: G1
clinical_status: guideline-supported
limitations: Panel sensitivity incomplete; nongenetic DPD deficiency exists; access to genotype and clinical protocol
  cannot be assumed; no dosing numbers in project
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-017

```yaml
claim_id: PGX-017
domain: Guideline update surveillance / DPYD
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: DPYD HapB3 c.1129-5923C>G (rs75017182) July 2026 interim reinterpretation
outcome: Announced planned assignment of allele value 0.75 while full guideline update was still in development;
  not to be presented as finalized revised dosing guidance
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: Official interim evidence update, not yet finalized guideline as of cut-off
source_doi_pmid_or_url: https://www.clinpgx.org/guidelineAnnotation/PA166122686
evidence_grade: E2
clinical_status: exploratory
limitations: Future guideline may supersede proposed mapping; unsafe to mix draft and finalized versions
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Evidence-changelog / pending revision flag
validation_next_step: Monitor finalized CPIC DPYD guideline; specialist sign-off before changing phenotype display
```

### PGX-018

```yaml
claim_id: PGX-018
domain: Diversity / DPYD assay coverage
population_definition: Underrepresented ancestry cohorts, particularly populations with recent African ancestry
exposure_or_variant: DPYD c.557A>G (rs115232898) and other underrepresented reduced-function variants
outcome: Ancestry-imbalanced testing panels may miss relevant decreased-function alleles; genotype-negative results
  have residual-risk uncertainty
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: Population genetics and clinical test coverage synthesis
source_doi_pmid_or_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11300675/
evidence_grade: O2
clinical_status: observational
limitations: Allele frequency differs by sample; assay design, LD and rare variants determine detection; do not
  use population group to call genotype
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Equity / test-panel coverage explainer
validation_next_step: Seek diverse validation panels and document residual diagnostic sensitivity by ancestry
```

### PGX-019

```yaml
claim_id: PGX-019
domain: Antiretroviral hypersensitivity
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: HLA-B*57:01, abacavir
outcome: Prospective pretherapy screening prevented immunologically confirmed hypersensitivity in PREDICT-1 and
  is guideline/label supported
effect_estimate_and_uncertainty: PREDICT-1 patch-test-confirmed reaction 0% screened vs 2.7% unscreened; screening
  effect in RCT
study_design: Randomized prospective screening trial plus professional guidance
source_doi_pmid_or_url: PMID:18256392; https://pubmed.ncbi.nlm.nih.gov/18256392/
evidence_grade: G1
clinical_status: guideline-supported
limitations: Not every carrier experiences reaction; allergy can occur independently; test must resolve specific
  HLA allele
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-020

```yaml
claim_id: PGX-020
domain: Anticoagulation / dose variability
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2C9 decreased-function alleles, VKORC1 -1639G>A (rs9923231), optional CYP4F2 p.V433M (rs2108622),
  warfarin
outcome: Genotype affects warfarin dose requirement; guideline recommendations must coexist with INR monitoring
effect_estimate_and_uncertainty: Dose prediction improves with genotype in some settings; outcome trials mixed and
  population transfer limited
study_design: CPIC synthesis and randomized studies
source_doi_pmid_or_url: https://cpicpgx.org/guidelines/; https://pubmed.ncbi.nlm.nih.gov/24251363/
evidence_grade: G2
clinical_status: guideline-supported
limitations: INR remains essential; panels omitting CYP2C9*5/*6/*8/*11 can be less valid in African ancestry patients;
  trial outcome heterogeneity
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-021

```yaml
claim_id: PGX-021
domain: Transplant immunosuppression
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP3A5 *1 expressor vs *3/*6/*7 nonexpressor diplotypes, tacrolimus
outcome: CYP3A5 expressors typically have lower dose-adjusted exposure; CPIC genotype-guided initiation information
  exists
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:25801146; https://pubmed.ncbi.nlm.nih.gov/25801146/
evidence_grade: G1
clinical_status: guideline-supported
limitations: Therapeutic drug monitoring remains essential; CYP3A5 *6/*7 testing relevant to diverse populations;
  not a standalone fixed dose
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-022

```yaml
claim_id: PGX-022
domain: Aminoglycoside ototoxicity
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: MT-RNR1 m.1555A>G, m.1494C>T, m.1095T>C; aminoglycosides
outcome: Certain mitochondrial variants confer heightened hearing-loss susceptibility; CPIC 2022 evaluates specific
  variants and advises clinical action
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://cpicpgx.org/guidelines/; https://www.clinpgx.org/labelAnnotation/PA166316381
evidence_grade: G1
clinical_status: guideline-supported
limitations: Mitochondrial heteroplasmy, variant coverage and diagnostic urgency matter; severe infections require
  physician balancing of risks
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Confirm current CPIC/DPWG/FDA texts, exact allele/phenotype tables and specialist review
```

### PGX-023

```yaml
claim_id: PGX-023
domain: Population allele frequency
population_definition: Specific regional or subgroup samples defined in US labeling; not all East Asians or South
  Asians
exposure_or_variant: HLA-B*15:02, carbamazepine; group-specific carrier prevalence in FDA label
outcome: Reported carrier prevalence >15% in selected Hong Kong, Thai, Malaysian, Philippine groups, around 10%
  Taiwan, around 4% North China, lower in Japan/Korea
effect_estimate_and_uncertainty: Carrier percentages reported as approximate ranges with substantial sampling uncertainty;
  not patient-specific risk
study_design: Label summary of population HLA frequencies
source_doi_pmid_or_url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50ba2042-fc67-4266-a773-a30f07649a5a
evidence_grade: O2
clinical_status: observational
limitations: Not all groups comparable; denominators and methods may vary and regional labels are broad
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Frequency/context panel only
validation_next_step: Locate primary HLA population datasets with denominators and dates
```

### PGX-024

```yaml
claim_id: PGX-024
domain: Population allele frequency
population_definition: Labeled regional or broad groups; samples do not cover within-group variation
exposure_or_variant: HLA-B*58:01, allopurinol; ancestry-group carriage
outcome: US label gives approximate carrier frequencies (Han Chinese ~8–10%, Thai ~8%, Korean ~6%, Black ~4%, Hispanic/Indigenous
  American ~1–2%, European/Japanese <1%)
effect_estimate_and_uncertainty: Approximate label frequencies; no comparable CI presented; observational description
  only
study_design: FDA labeling population-frequency summaries
source_doi_pmid_or_url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cdc3f33b-ff2b-4a84-a820-51a497fdf3d9
evidence_grade: O2
clinical_status: observational
limitations: Carrier frequency not equivalent to severe-reaction incidence; avoid ethnicity-based individual safety
  predictions
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Population comparative text with provenance
validation_next_step: Trace original assays and subgroup sample sizes, compare with gnomAD or peer-reviewed HLA
  frequencies
```

### PGX-025

```yaml
claim_id: PGX-025
domain: Population allele frequency
population_definition: Source-defined geographic genetic population samples, not all people within any continent
exposure_or_variant: CYP2C19 *2, *3 and *17 allele frequencies across African, European, East Asian, South/Central
  Asian populations
outcome: '*2 and *3 generally more frequent in East Asian samples than European; *17 often more prevalent in European
  than East Asian samples'
effect_estimate_and_uncertainty: 'Reported allele frequency: *2 ~0.28 East Asian vs ~0.15 European; *3 ~0.07 East
  Asian vs ~0.002 European; *17 ~0.02 East Asian vs ~0.22 European (illustrative source-specific estimates)'
study_design: Cross-population allele-frequency synthesis
source_doi_pmid_or_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12850553/
evidence_grade: O2
clinical_status: observational
limitations: Allele frequency (copies/total copies) ≠ carrier frequency or phenotype; varying sample sets and classification
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Statistical population atlas; no risk calculator
validation_next_step: Verify table transcription, geographic cohorts and confidence intervals
```

### PGX-026

```yaml
claim_id: PGX-026
domain: Obesity medicine pharmacogenomics
population_definition: 23andMe research volunteers (n=27,885 surveyed; n=15,237 main efficacy GWAS), ~78.3% European;
  All of Us n=4,855 replication
exposure_or_variant: GLP1R rs10305420 (p.Pro7Leu; T effect allele), GLP1 receptor agonist weight response
outcome: Associated with modest additional weight loss after GLP1-based treatment; independently replicated direction
  of association; no validated PGx clinical action
effect_estimate_and_uncertainty: Additional ~0.76 kg loss per effect allele, 95% CI ~0.34–1.27 kg; discovery P=2.9e-10;
  All of Us replication ΔBMI%=−0.47, P=0.001
study_design: 2026 genome-wide association in retrospective self-report with independent EHR replication
source_doi_pmid_or_url: DOI:10.1038/s41586-026-10330-z
evidence_grade: O2
clinical_status: observational
limitations: Self-report and selection bias; non-European subgroup underpowered, UK Biobank not replicated; effect
  small relative to clinical variance; no prospective test/decision rule
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Experimental weight-medication genetics subsection, not BMI/diet algorithm
validation_next_step: Prospective multi-ancestry external validation; clinical incremental utility and calibration
  before further consideration
```

### PGX-027

```yaml
claim_id: PGX-027
domain: Obesity medicine adverse reactions
population_definition: Survey participants using tirzepatide, primarily European ancestry
exposure_or_variant: GIPR rs1800437 (p.Glu354Gln), tirzepatide nausea/vomiting
outcome: Exploratory association in 2026 study of GLP1-based treatments, especially tirzepatide; no genotype-based
  drug selection
effect_estimate_and_uncertainty: Association reported; effect uncertain across ancestries and independent clinical
  cohorts; do not use risk score
study_design: 2026 genome-wide adverse-effect association study
source_doi_pmid_or_url: DOI:10.1038/s41586-026-10330-z
evidence_grade: E2
clinical_status: exploratory
limitations: Self-reported symptoms, confounding by titration and treatment exposure; no prospective treatment-utility
  study
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Research horizon watchlist only
validation_next_step: Independent replicated treatment-specific study with robust side-effect grading
```

### PGX-028

```yaml
claim_id: PGX-028
domain: Obesity medicine clinical actionability
population_definition: Potential users across ancestry groups; no clinically validated genetic selection algorithm
exposure_or_variant: GLP1R/GIPR and other variants as prospective selector for semaglutide/tirzepatide
outcome: Insufficient evidence that a PGx test improves drug selection, dose strategy, weight outcomes or safety;
  not current CPIC-based prescribing rule
effect_estimate_and_uncertainty: No clinical utility effect estimate established; broad associations do not demonstrate
  a treatment-by-genotype interaction useful for choosing drugs
study_design: GWAS plus systematic reviews; absence of prospective stratified clinical utility trial
source_doi_pmid_or_url: DOI:10.1038/s41586-026-10330-z; PMID:36999540
evidence_grade: U1
clinical_status: insufficient
limitations: Association vs selection benefit; risks algorithmic bias in smaller ancestry groups
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Prominent nonactionability statement and future-research tracking
validation_next_step: Require prospective comparative effectiveness / decision-curve study and professional guideline
  before advancement
```

### PGX-029

```yaml
claim_id: PGX-029
domain: Diabetes medication response
population_definition: Multiple heterogeneous study cohorts
exposure_or_variant: SLC22A1 OCT1 and other common variants, metformin
outcome: Published pharmacokinetic/response associations do not yet constitute broadly agreed actionable prescribing
  guidance
effect_estimate_and_uncertainty: Published estimates heterogeneous and not robustly transferable; no validated net
  benefit
study_design: Observational pharmacogenomic association literature
source_doi_pmid_or_url: https://www.clinpgx.org/; https://cpicpgx.org/guidelines/
evidence_grade: U1
clinical_status: insufficient
limitations: Glycemic control depends strongly on non-genetic factors, phenotype definitions, medication adherence
  and kidney function
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Emerging evidence / not clinically actionable
validation_next_step: Updated systematic meta-analysis with preregistered scope and diverse cohorts
```

### PGX-030

```yaml
claim_id: PGX-030
domain: Multigene implementation / clinical utility
population_definition: European multicountry implementation trial; mostly European / Mediterranean / Middle East
  participants
exposure_or_variant: PREPARE 12-gene panel with clinical decision support for multiple medicines
outcome: Significant reduction in clinically relevant ADRs among patients with actionable variants in studied sites
effect_estimate_and_uncertainty: Actionable subgroup 21.0% vs 27.7% ADRs; adjusted OR 0.70 (95% CI 0.54–0.91); broad
  recipients 21.5% vs 28.6%, OR 0.70 (0.61–0.79)
study_design: Pragmatic cluster-randomized crossover trial
source_doi_pmid_or_url: PMID:36739136; DOI:10.1016/S0140-6736(22)01841-4
evidence_grade: R1
clinical_status: observational
limitations: Multigene effect is not effect of every included pair; site/population/sample limitations; intervention
  included clinicians and infrastructure
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Clinical validation rationale, NOT justification to deploy consumer CDS
validation_next_step: Evaluate transportability, healthcare context and implementation bias before use as validation
  benchmark
```

### PGX-031

```yaml
claim_id: PGX-031
domain: Beta-blocker pharmacokinetics
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: CYP2D6 PM vs other metabolizer phenotypes, metoprolol
outcome: Exposure differences and genotype guidance in 2024 CPIC guideline; genotype not an independent instruction
  to change cardiovascular therapy
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11502236/
evidence_grade: G2
clinical_status: guideline-supported
limitations: Many clinical outcomes confounded; no extrapolation to all beta blockers; review availability of clinician
  monitoring
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Check 2024 CPIC scope and recommendation levels by phenotype
```

### PGX-032

```yaml
claim_id: PGX-032
domain: Antihypertensive exposure/toxicity
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: NAT2 rapid/intermediate/slow acetylator haplotypes, hydralazine
outcome: 2025 CPIC guidance describes genotype-specific therapeutic considerations for hydralazine
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: PMID:40974042; DOI:10.1002/cpt.70071
evidence_grade: G2
clinical_status: guideline-supported
limitations: Novel guideline; needs assessment for outcome utility and population-specific function definitions;
  no patient dosing guidance
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Dedicated PGx educational gene–drug entry
validation_next_step: Verify 2025 guideline phenotype table and 2026 implementation updates
```

### PGX-033

```yaml
claim_id: PGX-033
domain: Opioid pharmacodynamic markers
population_definition: All ancestries with a confirmed genotype; clinical indication and setting determine relevance
exposure_or_variant: OPRM1 rs1799971 and COMT rs4680 with common opioids
outcome: Associations do not warrant routine genotype-driven analgesic decisions under CPIC opioid guideline
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: CPIC guideline evidence synthesis and source studies
source_doi_pmid_or_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8249478/
evidence_grade: U1
clinical_status: insufficient
limitations: Do not infer strong effects from commercially marketed panel reports; outcome heterogeneity and confounding
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Nonactionable marketing claim register
validation_next_step: Reassess only with new randomized clinical utility evidence
```

### PGX-034

```yaml
claim_id: PGX-034
domain: Adverse drug reaction association / allopurinol
population_definition: Meta-analyzed case-control and related populations with variable ancestry representation
exposure_or_variant: HLA-B*58:01 and allopurinol-related severe cutaneous adverse reactions
outcome: Large association, but magnitude across case-control studies must not be presented as absolute probability
  in carriers
effect_estimate_and_uncertainty: Pooled odds ratio ~117.6 (95% CI 70.3–196.8) as reported in 2025 meta-analysis;
  OR ≠ absolute risk
study_design: 2025 systematic meta-analysis of 24 studies, n≈13,719
source_doi_pmid_or_url: PMID:40841814; https://pubmed.ncbi.nlm.nih.gov/40841814/
evidence_grade: O1
clinical_status: observational
limitations: Population stratification, exposure and case ascertainment heterogeneity; very large relative effects
  do not yield personal penetrance
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Quantitative evidence footnote to PGX-005
validation_next_step: Audit original meta-analysis model, quality and ancestry subgroup effects
```

### PGX-035

```yaml
claim_id: PGX-035
domain: Statin allele curation versioning
population_definition: All genotyped populations where these SLCO1B1 haplotypes are detected
exposure_or_variant: SLCO1B1 *9, *31, *39, *41 and *45 changed functional assignments in 2025
outcome: Star-allele phenotype calls are time-versioned; incorrect old translation can cause spurious statements
effect_estimate_and_uncertainty: Direction established; no single transferable pooled effect estimate
study_design: Official allele function database maintenance change
source_doi_pmid_or_url: https://www.clinpgx.org/guideline/PA166264281
evidence_grade: E2
clinical_status: exploratory
limitations: May impact old tests and legacy downstream phenotype labels; no treatment selection in this tool
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Source-data version registry
validation_next_step: Fetch exact CPIC allele function tables at the cited update and compare with current PharmVar
```

### PGX-036

```yaml
claim_id: PGX-036
domain: Published guideline correction / phenotype table
population_definition: Any population with validated TPMT and NUDT15 genotypes
exposure_or_variant: '2026 correction to CPIC 2025 TPMT/NUDT15 Table 1: TPMT one no-function PLUS one decreased-function
  allele; retired NUDT15*2 example'
outcome: The original published Table 1 incorrectly labeled this TPMT diplotype as possible intermediate metabolizer;
  corrected classification is intermediate metabolizer. Retired NUDT15*2 example was removed. The correction is
  essential for version-sensitive reporting.
effect_estimate_and_uncertainty: Corrected categorical phenotype mapping; not an efficacy or clinical risk-effect
  estimate
study_design: Formal published correction, first online April 28 2026, printed June 2026
source_doi_pmid_or_url: PMID:42050374; DOI:10.1002/cpt.70298; https://pmc.ncbi.nlm.nih.gov/articles/PMC13652152/
evidence_grade: G1
clinical_status: guideline-supported
limitations: The original Table 1 is superseded; a statement about TPMT cannot be generalized to a corresponding
  NUDT15 allele pair; corrected table and online allele reference must both be reviewed
cross_stream_dependencies: 'Team 1: allele-frequency context only; Team 2: potential drug–disease interactions reviewed
  separately'
integration_target: Version alert and nomenclature change-log, linked to PGX-007 and PGX-008
validation_next_step: Independently compare pre-/post-correction Table 1; prevent use of withdrawn TPMT possible-IM
  assignment
```

## Cross-stream merge safeguards

1. `cross_stream_dependencies` may invite contextual review. It never gives Team 1 or Team 2 authority to convert allele frequency, obesity risk or dietary findings into an individual's drug response.
2. Render source claims with status and evidence type. Do **not** collapse `PGX-001` (professional recommendation), `PGX-002` (specific RCT outcome), `PGX-025` (population allele frequencies) or `PGX-026` (GLP1R weight-loss association) into one evidentiary category.
3. Treat changes in PharmVar star-allele definitions or CPIC phenotype tables as **breaking changes** requiring version audit, not silent overwrites.
4. Keep full source links, effect units, methodological caveats, and a last-reviewed date when adapting this matrix into user-facing content.
5. End-user module should show plain-English findings only; raw machine-readable evidence records remain research assets and are not imported into a prescribing calculator.