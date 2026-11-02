# Nutrition Calculator — Evidence-Based Refinement Recommendations
**Research Team 2 | Design specification, not a code change | 2026-11-01**

## Safety-first decision

**Do not modify the calculator in this assignment.** No ancestry-, genetic- or disease-related result from Team 2 should alter BMI formulas, percent-ancestry blending, body-frame formulas or weight bounds by itself. The most important engineering change is an **identity/data-model separation**: `condition_id` + `status` + `evidence` + `clinical markers` + `diet exposure` + `safety flags` rather than one checkbox per conflated condition. Maintain a hard boundary between informational output and individualized clinical advice.

## A. Existing code audit and disposition

Scope inspected: `optimal_body_weight_calculator-9.html`, public `main` branch, 2026-11-01 [REPO]. Anchor strings are provided to make an independent code review easier; line numbers on GitHub's rendered page may shift.

| Current behavior or line/anchor | Evidence judgment | Disposition | Target behavior |
|---|---|---|---|
| `Type 2 diabetes / prediabetes / family history` checkbox, value `diabetes` (~2397) | These are different diagnostic and prevention states | **Must split** | Separate T2D diagnosis, prediabetes lab-confirmed, family history only, uncertain and no condition |
| `calculate()` calls `bufferedRange` if `diabetes` selected (~3426–3428) | Family history alone not evidence for a personalized lower weight boundary | **Remove inherited conflation; hold BMI adjustment for Team 1 review** | No unvalidated diet/genetic weight-target modification; describe lifestyle prevention without automatic buffer from family history |
| `High cholesterol / familial hypercholesterolemia` (~2406) | FH carries special LDL and cascade-testing implications | **Must split** | High LDL measured vs FH diagnosed vs FH family history; prompt lipid and clinician review |
| `Gout / high uric acid` (~2408) | Biochemical hyperuricemia ≠ clinical gout | **Must split** | Gout diagnosed, hyperuricemia only, first-degree relative history; dietary suggestions only with correct qualifiers |
| `Hemochromatosis / iron overload` (~2405) | HFE carrier ≠ iron overload ≠ diagnosed HH | **Must split** | Confirmed diagnosis, documented TSAT/ferritin abnormality, pathogenic genotype, family history, unconfirmed |
| Ancestry triggers HFE warning for all Europeans (~3365) | Overgeneralizes Northern European prevalence; carrier status not diagnosis | **Remove ancestry-triggered supplement prohibition** | Optional background prevalence educational note and 'do not self-supplement iron without appropriate guidance' general caution, not a ban |
| `AMY1` ancestry note (~3366) | Mechanistic association; no diet threshold validated | **Research-only** | Small ‘emerging research’ panel, no grams of carbohydrate recommendation |
| `FADS2` ancestry note (~3367) | No validated genotype-specific omega-3 treatment recommendation | **Research-only** | General food-source advice independent of ancestry |
| `ALDH2` alcohol-flush ancestry note (~3368) | Clinically important alcohol–cancer topic but not a genotype-specific *nutrition response* algorithm | **Cross-team and scope review** | General harm education where relevant; no positive inference from ancestry; avoid duplicating Team 1/3 |
| African-ancestry checkbox triggers DASH advice (~3369) | DASH benefits multiple populations; measured BP is primary | **Retarget to phenotype** | Offer DASH broadly or in presence of raised BP, not race-exclusive recommendation |
| Celiac checkbox gives lifelong gluten-free diet (~3376) | Correct *if diagnosed*; if HLA-only/suspected may cause diagnostic delays | **Keep only under confirmed diagnosis** | Separate pre-diagnostic 'keep gluten until evaluated' safety education and diagnosed care |
| Lactose note from ancestry (~3362–3363) | Frequency information may be educational; symptoms dictate dietary choices | **Qualify** | No automatic dairy avoidance; options only for symptomatic intolerance or clinical indication |
| HH advice on avoiding iron/supplemental C and shellfish (~3377) | Largely consistent with guideline for confirmed disease | **Keep with verification gate** | Tie to diagnosed HH, avoid implication that low-iron diet replaces phlebotomy |
| High cholesterol diet advice (~3373) | LDL-focused diet quality supported | **Keep, sharpen** | Promote low saturated fat, soluble fiber, unsaturated fat; check LDL/non-HDL/apoB as clinically appropriate |
| Gout advice (~3374) | ACR conditional recommendations, often low certainty | **Keep with explicit conditional grade** | No 'diet cures gout'; avoid generalized bans or extrapolation to merely high urate |
| Hypertension/DASH note (~3372) | Guideline supported | **Keep with personalized sodium context** | Avoid rigid sodium prescription across pregnancy, severe illness or special medical conditions |
| Conditions all trigger same 5–7% loss logic (~3332–3347) | Weight goal magnitude can be useful in appropriate overweight/prevention contexts but not universally | **Review and constrain** | Show only for eligible adults with clinical weight-loss indication; document exceptions and medical oversight |

## B. Proposed clinical-data model (illustrative schema; no implementation here)

```json
{
  "condition_id": "celiac_disease",
  "assertion_status": "diagnosed",
  "verification_source": "clinician_record",
  "date_verified": "YYYY-MM-DD",
  "family_history_degree": null,
  "genetic_result": {"gene": "HLA-DQA1/HLA-DQB1", "variant": null, "interpretation": "not_submitted"},
  "symptoms": [],
  "measurements": [{"name": "HbA1c", "value": 0, "unit": "%", "measured_at": "YYYY-MM-DD", "source": "self_report"}],
  "diet_exposure": {"pattern": "unspecified", "start_date": null, "carbohydrate_g_day": null, "saturated_fat_g_day": null},
  "advice_intent": "education_only",
  "safety_review_required": false,
  "evidence_claim_ids": ["NUT-005"]
}
```

**Enum standards:** `assertion_status` = `diagnosed`, `clinician_suspected`, `laboratory_abnormality`, `family_history`, `genetic_susceptibility`, `self_reported_symptoms`, `none`, `unknown`. Add verification method and provenance; do not treat self-assertion as confirmed. For consumer files: never silently map a VUS or homozygous call from an unvalidated array to 'diagnosed'. A physician's diagnosis may be clinical without genetic confirmation; do not penalize that.

## C. Decision precedence and conflict resolution

**Rule order (advice may be shown as questions, not prescriptions):**

1. **Scope check:** age, pregnancy/lactation, pediatric/adult, existing medical supervision; do not produce inappropriate adult weight targets.
2. **Immediate safety restrictions:** diagnosed/suspected FAO disorders or inherited conditions with high dietary danger; flag unsafe keto/fasting; clinician/metabolic RD review; urgent symptoms warrant urgent care guidance.
3. **Established diagnoses / current laboratory abnormalities:** show verified condition-specific advice and screening/referral signals. Do not replace clinical treatment.
4. **Medication–diet interaction flags:** SGLT2 with keto, hypoglycemia risk with marked carbohydrate reduction, diet-sensitive drug/nutrient issues — **Team 3 decides clinical content**.
5. **Documented individual biomarker response:** compare HbA1c/TG/LDL/non-HDL/apoB/BP/eGFR/weight and adherence with prior values; show both benefits and harms.
6. **General evidence-backed eating patterns:** options based on goals, feasibility, food access and preference rather than ethnicity.
7. **Family history and inherited susceptibility:** suggest appropriate clinical screening, not an unverified genetic diet.
8. **Ancestry epidemiology and exploratory genetic facts:** separately labeled context; never override higher-precedence signals.

**Conflict examples:**

| Input combination | Conflict / correct resolution |
|---|---|
| Family Hx T2D + healthy glucose | Prevention/screening education; **no automatic 'diabetes' diet or BMI-buffer change** |
| Celiac diagnosed + keto preference | Celiac gluten-free restriction stands; keto not needed for celiac; attend to nutrition and lipids |
| FH diagnosed + personal TG improvement on saturated-fat-rich keto + LDL spike | Preserve measured TG benefit in report, **flag LDL risk and clinician review** |
| HFE C282Y carrier but ferritin normal + iron-deficiency anemia | **Do not** advise iron avoidance from genotype/ancestry alone |
| Lactase nonpersistence variant + no symptoms | Do not automatically remove dairy |
| HLA-DQ2 positive + no biopsy/serologic confirmation | Do not recommend lifelong gluten-free diet; evaluation if clinically indicated |
| Known MCAD + keto interest | Safety block: unsupervised keto/fasting not appropriate |
| Gout + suspected kidney disease | General diet messages require clinical tailoring; do not infer safe high-protein macronutrients |

## D. Recommended UI: evidence-aware outputs

Four distinct panels: **(1) General nutrition**, **(2) Confirmed condition guidance**, **(3) Screening/family-history prompts**, **(4) Emerging genetics (research only)**. A separate **Safety review** surface must precede diet suggestions when flags are present. Avoid urgency-colored UI for ordinary informational genetics.

Each suggestion must show: `claim_id`, clinical status, action (`screening`, `education`, `dietary_intervention`, `research_only`), whom it applies to, what measurement or verification it requires, what evidence supports it (DOI/PMID), last reviewed date, contraindications, and a 'what would change this advice' field.

**Exact phrasing candidates:**

- **Prediabetes documented:** “A clinician or registered dietitian can help you choose a sustainable, nutrient-dense eating pattern. Carbohydrate reduction is one option; it is not required for everyone.” [ADA26]
- **FH suspected (high LDL/family history):** “Some inherited LDL disorders require evaluation even at a healthy weight. Discuss your lipid results and family history with a clinician.” [FH26]
- **HLA risk genotype only:** “This genotype is associated with celiac disease but is common among people without the condition. It does not mean you should stop eating gluten.” [ACG23]
- **Unconfirmed lactose symptoms:** “Symptoms may have several causes. If dairy bothers you, consider recording symptoms and discussing lactose intolerance testing; fortified substitutes are available.” [LACT]
- **AMY1/FADS:** “A population-genetic association exists, but a diet choice based on this marker has not been validated.” [AMY26]

## E. Rule templates and tests for future engineering

```text
IF condition=celiac_disease AND status=diagnosed
 THEN education=gluten_free_lifelong; RD_referral=true
ELSE IF condition=celiac_disease AND status IN (symptoms,genetic_susceptibility,family_history)
 THEN education=diagnostic_evaluation; no_gluten_free_prescription=true

IF condition=FH AND status IN (diagnosed,clinician_suspected,abnormal_LDL)
 THEN lipid_referral=true; warn_diet_not_substitute_for_care=true

IF condition=FAO_disorder AND status IN (diagnosed,clinician_suspected)
 THEN block_unsupervised_keto=true; block_fasting=true; refer_metabolic_specialist=true

IF diet=ketogenic AND medication_class=SGLT2
 THEN clinician_medication_safety_review=true  # medication team owns rule content

IF variant=FTO_or_AMY1_or_FADS2_or_APOA2 AND no_validated_treatment_interaction
 THEN research_only=true; prohibit_specific_diet_trigger=true
```

**Required regression tests:** distinguish diabetic family history from diagnosed T2D; test HFE carrier + anemia; HLA-positive + asymptomatic; diagnosed celiac + family member at risk; apoB/LDL rising despite falling TG; strong post-keto glucose improvement + FH; suspected FAO defect + planned intermittent fasting; pediatric user; pregnancy; all condition combinations. Assertions should ensure diet module never recalculates BMI directly.

## F. Data governance and clinical validation prerequisites

- Stage genetic information with separate consent and deletion controls; require clinical-grade variant provenance, genome build, HGVS representation, zygosity, confidence, test coverage, and pathogenicity source/date before any clinician-interpreted module. Ancestry percentage ≠ clinical variant result.
- Avoid generating medical diagnoses from self-reported consumer data; uncertainty and data-missingness must be explicitly represented.
- Create an evidence registry with code unit tests, review dates and a clinician/RD approval workflow, and **one risk owner per cross-stream rule**.
- Make every evidence note manually inspectable without a genetic test or an account.

## References

- PortalHunter. optimal_body_weight_calculator-9.html, main branch, inspected 2026-11-01. https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html
- American Diabetes Association. Standards of Care in Diabetes—2026, section 5. DOI: 10.2337/dc26-S005. https://doi.org/10.2337/dc26-S005
- ACC/AHA et al. 2026 guideline on management of dyslipidemia. DOI: 10.1161/CIR.0000000000001423. https://doi.org/10.1161/CIR.0000000000001423
- 2026 ACC/AHA dyslipidemia guideline, FH testing and cascade screening. DOI: 10.1161/CIR.0000000000001423. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423
- Rubio-Tapia et al. American College of Gastroenterology Guidelines Update: Celiac Disease. Am J Gastroenterol. 2023;118:59–76. DOI: 10.14309/ajg.0000000000002075; PMID: 36602836. https://pubmed.ncbi.nlm.nih.gov/36602836/
- EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77:479–502. DOI: 10.1016/j.jhep.2022.03.033; PMID: 35662478. https://pubmed.ncbi.nlm.nih.gov/35662478/
- FitzGerald et al. 2020 American College of Rheumatology Guideline for Management of Gout. https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/
- NIDDK. Diagnosis of Lactose Intolerance (hydrogen breath testing and differential diagnosis). https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/diagnosis
- Gardner et al. JAMA. 2018;319:667–679. DOI: 10.1001/jama.2018.0245; PMID: 29466592. https://pubmed.ncbi.nlm.nih.gov/29466592/
- GeneReviews. Medium-chain acyl-CoA dehydrogenase deficiency; updated Sep 2024. https://www.ncbi.nlm.nih.gov/books/NBK1424/
- GeneReviews. Long-chain hydroxyacyl-CoA dehydrogenase/trifunctional protein deficiency. PMID: 36063482. https://pubmed.ncbi.nlm.nih.gov/36063482/
- Review: Effects of salivary amylase gene copy number on metabolic health. 2026; PMID: 42730263. https://pubmed.ncbi.nlm.nih.gov/42730263/