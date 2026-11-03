# Research Team 4 — Ancestry and Laboratory Interactions

**Research-only v0.9, November 3, 2026.** No genotype or clinical risk may be inferred from ethnicity, a photograph, surname, nationality, admixture percentage or current residence. Refer to [LAB matrix](04_Laboratory_Evidence_Matrix.md) and repository's ANC/NUT/PGX matrices for separate research ownership.

## Central conclusion

Ancestry can sometimes indicate **whether a measurement is worth scrutinizing**, a **population-level prior risk**, or an opportunity to discuss screening. It does **not** grant the calculator a different lab normal range, prove that a person carries a variant, or justify an ancestry-matched meal plan. Separate five variables in all research datasets: `self_described_ethnicity`, `geographic_family_origins`, `genetically_verified_variant`, `clinical_phenotype`, and `dietary_cultural_preferences` (optional, user-selected). Do not collapse them.

| Topic and claims | Established or potentially useful | Why ancestry is not enough / safe site behavior | Evidence |
|---|---|---|---|
| HbA1c and hemoglobin S/C/D/E, high fetal Hb (LAB-001, LAB-031) | Some inherited hemoglobin variants interfere with **some HbA1c methods**; affected assay depends on variant and platform. Red-cell survival may also modify true HbA1c–glucose relation. | For any person, use a non-stigmatizing question about *known variant, anemia, transfusion, discordant glucose*, and laboratory assay method. If known variant or serious discordance, withhold A1c-based diet/diagnosis interpretation pending clinician review. **Never auto-correct A1c by race.** | [ADA-DX], [NGSP-26] (October 2026), [NIDDK-A1C] |
| G6PD (LAB-032) | Verified G6PD deficiency can shorten RBC lifespan and affect HbA1c independent of glycemia; ADA explicitly names G6PD among conditions for plasma-glucose diagnostic criteria. | G6PD frequencies vary within Africa, Mediterranean, Middle East and South/SE Asia. Region does not establish genotype, sex-specific phenotype or effect magnitude. No inferred status and no universal correction. | [ADA-DX] |
| Low MCV or hemoglobin (LAB-023/039) | Alpha/beta thalassemia and hemoglobinopathies are important explanations of microcytosis; inherited distributions vary by region. | Use CBC, RBC count, RDW, ferritin/TSAT, hematologic history and clinician-directed hemoglobin study. Normal/elevated ferritin with microcytosis may prompt discussion—not diagnosis. Avoid empiric iron from MCV alone. | AAFP 2022 thalassemia review: https://www.aafp.org/afp/2022/0300/p272; [AGA-IDA] |
| High ferritin/TSAT and hereditary hemochromatosis (LAB-025/035) | HFE p.C282Y is more common in certain Northern European-origin populations, but penetrance and phenotype vary and non-HFE etiologies exist. | High ferritin is common with inflammation/MASLD; the combination with TSAT and clinical context matters. **Do not infer HFE genotype in Scandinavian, Celtic, Mediterranean or mixed people.** | [EASL-IRON], [NIDDK-IRON] |
| Lp(a) (LAB-013/033) | Population distributions differ; 2026 ACC/AHA identifies greater average levels in many African and South Asian-origin cohorts. Elevated **measured** Lp(a) predicts ASCVD similarly across groups. | Offer measured Lp(a) education without ancestry-based reference limits; explain it is not meaningfully lowered by ordinary diet, though overall risk can improve. Never predict an individual's level from background. | [ACC-26], [EAS-LPA] |
| Type 2 diabetes at a given BMI (ANC dependency) | Cohort data and NICE/ADA policies recognize different risk patterns and some group-specific screening thresholds. | These **anthropometric screening** findings are not different HbA1c or glucose diagnostic cutoffs, a new ideal weight, or genetically proven dietary response. Compare to ANC-001–004 and ANC-009–013 before displaying. | [ADA-DX], [NICE-OB], ANC evidence matrix |
| Race-free eGFR (LAB-015/034) | KDIGO 2024 recommends avoiding race when estimating GFR; prefer validated locally appropriate creatinine/cystatin C equations. | No automatic “African ancestry multiplier.” Racial category is not a renal physiological parameter. See creatinine/body-composition limitations and measured cystatin C when relevant. | [KDIGO-24] |
| APOL1 kidney disease (research-only) | G1/G2 high-risk genotypes disproportionately occur in some populations with recent West/Central African origins; incomplete penetrance and heterogeneous environmental modifiers. | **Do not genotype from race** or prompt routine APOL1 screening. KDIGO 2025 controversy conference found insufficient evidence for population screening/routine testing; specialist genetics discussion only. | KDIGO 2025 conference: https://pubmed.ncbi.nlm.nih.gov/40582702/ |
| Vitamin D/skin pigmentation (LAB-028) | Group differences in average total 25(OH)D exist, but clinical outcomes, binding proteins, methods and social/environmental exposure complicate interpretation. | Endocrine Society 2024 suggests **against routine screening** of otherwise healthy adults because of dark complexion or obesity. Do not create Black/White-specific deficiency cutoffs or ancestral supplement prescriptions. | [ENDO-D] |
| Statin pharmacokinetics or drugs (PGX boundary) | ACC 2026 discusses population observations for some statin pharmacokinetic effects. | PGX team owns medication variant/assay and clinical guidance; **no user-facing drug-selection or dose recommendation** in lab module. Drug intake can be captured as contextual self-report only. | [ACC-26], PGX handoff |
| CRP, thyroid, sodium, potassium | Population differences in measured distributions or comorbidity prevalence may exist. | No convincing validated ancestry-specific personal lab threshold/diet recommendation identified in this scoping review. Use general test-specific context. | LAB-017–019, LAB-029 |

## Population coverage / heterogeneity audit

**Important:** a row indicates **research context**, not a user classification. The original studies' actual participants and geography take priority over continent-level umbrellas. Sufficient randomized evidence for diet-by-ancestry personalization **was not identified** for these group labels.

| Origin or self-description to retain, if voluntarily supplied | Evidence-related question | What we can assert for an individual |
|---|---|---|
| Scandinavian / Northern European | Some historical HFE allele distribution; variation among Nordic populations | No inferred HFE status, ferritin cutoff or “Nordic diet sensitivity”; measured TSAT/ferritin and clinical history only |
| Mediterranean European | Thalassemia/hemoglobin variant and some G6PD frequencies; heterogeneity within Italy, Greece, Iberia, Balkans | No assumption of carrier status; method-aware HbA1c warning if known phenotype or observed discordance |
| Central / Eastern European | Variable HFE, thalassemia and migration history | No validated separate glucose, lipid or kidney thresholds by region |
| African origins, with subregional specification | Certain Hb variants, G6PD, APOL1 and Lp(a) distributions; very uneven West/East/Southern/North African prevalence | Measured values and verified phenotype/genotype, not “Black” category, determine interpretation |
| Middle Eastern / West Asian / North African | Multiple hemoglobin variants, thalassemia and G6PD; strong migration heterogeneity | No generic Middle Eastern laboratory reference correction |
| South Asian | Diabetes at lower BMI in some cohorts; heterogeneous Lp(a) and thalassemia prevalence | Screening *risk discussion* possible using appropriate jurisdiction; not ethnicity-specific glucose cutoffs or diets |
| East Asian | Some higher diabetes risk at lower BMI; heterogeneity among Chinese, Korean, Japanese and diaspora cohorts | No shared biochemical diagnostic range; no medication instruction |
| Southeast Asian | Hemoglobin E and thalassemia notable in selected populations, not across all | Consider known hemoglobin phenotype/assay if A1c–glucose conflict; no inferred genotype |
| Indigenous American | Large nation/community-level heterogeneity and historical/environmental diabetes disparities | No community-specific lab targets absent co-designed validated evidence; avoid treating sovereign identities as genetic categories |
| Central American | Admixture, migration, geography and socioeconomic confounding; HCHS/SOL origin groups differ | No “Central American” A1c correction or generalized nutritional response |
| South American | Strong national/indigenous/African/European/Asian admixture variation | No equation blending genetic percentages to decide biomarker thresholds |
| Caribbean | Population heterogeneity across islands, African and other diasporas; different risk patterns | No automatic hemoglobin or APOL1 genotype or lab cutoffs |
| Mixed ancestry / diaspora | Composite reporting differs by family and community; exposure context dynamic | User may decline to provide; no majority-percentage rule; lab output must remain robust without ancestry |

## Causal attribution assessment

For each proposed ancestry claim, the source steward must record: **(1)** original sampling frame and self-identification/genotyping method; **(2)** covariates (age, sex-related physiology, socioeconomic status, geography, access to care, medication, diet, assay); **(3)** replicated external cohorts; **(4)** biological mechanism if demonstrated; **(5)** whether different *action* is clinically validated; **(6)** confidence/CI and ancestry-specific denominator; **(7)** harm/fairness review. Higher observed disease prevalence in an ethnic category cannot be relabeled genetic predisposition without evidence. A public site cannot promise individual benefit just because subgroup P-values differ.

## Explicit no-go examples

- “Your Scandinavian ancestry means your ferritin should be higher” — **unsupported**.
- “Your African heritage means subtract 0.3 percentage points from your HbA1c” — **unsafe and invalid**; method and genotype matter.
- “You are of Caribbean ancestry, so your kidneys have an APOL1 mutation” — **invalid**.
- “Lipoprotein(a) is normal at a higher level in one ancestry group” — **unsupported**; risk is present independent of race labels.
- “Your mixed ancestry percentages should blend A1c, LDL or eGFR cutoffs” — **unvalidated**.
- “Choose the Mediterranean diet because you have Mediterranean *genes*” — **unsupported**. An evidence-based Mediterranean-style food pattern can be chosen by anyone, adapted to **their own** cultural foods and preferences.

## Research handoffs

- **Team 1/ANC:** population ontology, BMI-screening applicability, diaspora/geography documentation; do not import ANC weight coefficients into lab threshold logic.
- **Team 2/NUT:** hemochromatosis, thalassemia, dietary preference, celiac/malabsorption and familial dyslipidemia evidence. Family history can motivate questions, not disease diagnosis.
- **Team 3/PGX:** medication and gene–drug context flags; gene information, if ever used under separate future approvals, cannot be reconstructed from ethnic dropdown selections.

**Practical implementation boundary:** In a public educational manual-entry tool, the lowest-risk ancestry feature is an optional **methodological note** displayed when known clinical history or biomarker discordance makes it relevant. The default interpretation should not change when an ancestry field changes. Require prospective qualitative usability testing for bias and comprehension.

## Sources and unverified extensions

Primary bibliography: [matrix source register](04_Laboratory_Evidence_Matrix.md#source-register-exact-primary-titles-stable-links-and-version-notes). Additional specific sources: KDIGO Controversies Conference, *APOL1 kidney disease: conclusions…*, 2025, PMID 40582702, https://pubmed.ncbi.nlm.nih.gov/40582702/; AAFP, *Alpha- and Beta-thalassemia: Rapid Evidence Review*, 2022, https://www.aafp.org/afp/2022/0300/p272. APOL1 testing-policy research remains **research-only** and should not be promoted to personal recommendations.
