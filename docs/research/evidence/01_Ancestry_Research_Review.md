# 01 — Ancestry-Specific Metabolic Risk and Anthropometric Assessment

**Research Team:** 1 (ancestry and population specificity)  
**Version:** 1.0, 1 November 2026  
**Project:** Ancestry-Adjusted Optimal Body Weight & Nutrition Calculator  
**Existing implementation inspected:** [`optimal_body_weight_calculator-9.html`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html)  
**Important limitation:** This is a targeted critical evidence review, **not** a registered exhaustive systematic review. No original individual-level data were analyzed and no thresholds were newly derived.

## Executive conclusion

There is evidence for **more precise risk information**, but not for multiplying the number of individual “ideal-weight” categories. Guidelines support selected BMI and central-adiposity assessment rules (notably Asian backgrounds in U.S. ADA guidance and additional groups in UK NICE guidance). Evidence does **not** yet support distinct Scandinavian, Mediterranean, Central-European or Eastern-European optimal-weight bands. The strongest Latin American evidence recommends differentiating national-origin populations, genetic ancestry and the social environment, while treating these as different variables rather than one mathematical input.

**Critical new evidence:** A 2026 cross-sectional analysis of **134,548 Mexican adults** found the odds of type 2 diabetes were **1.33 (95% CI 1.31–1.36)** times higher per **20-percentage-point increase** in Indigenous American genomic ancestry after demographic, socioeconomic, lifestyle and adiposity adjustment. This finding matters for **risk-model research**, not for inferring that a person with 40% ancestry should have 40% of a lower BMI cutoff. See [Berumen et al. 2026](https://doi.org/10.1016/S2468-2667(25)00305-6) and **ANC-014**.

The highest-priority corrections concern *interpretation*: the calculator currently produces a weight ceiling from a BMI-22 “diabetes buffer” and allows percentage-blended BMI thresholds. Those are neither validated personal health targets nor current guideline rules. They should be isolated from clinical-facing recommendations pending evidence. **No production changes have been made.**

## 1. Definitions and clinical interpretation

- **Genomic ancestry** is a statistical estimate of shared genetic history relative to reference panels; ancestry percentages depend on the samples, markers, algorithm and resolution. They are not a clinical dose or a causal percentage of health risk.
- **Self-identified ethnicity / race** is socially meaningful, varies by jurisdiction, and captures potential discrimination, cultural setting, access and exposures; it is not interchangeable with genotype.
- **National origin** records a country or regional heritage (e.g., Mexican, Peruvian, Brazilian) and does not specify Indigenous, European or African ancestry.
- **Country of residence / migration experience** captures health-system and environmental context. A Nordic immigrant living in another country should not be assigned that country's CVD risk only on the basis of ancestry.
- **BMI** is a convenient population screening marker, not direct adiposity or the ideal mass for an individual. **Waist circumference (WC)** and **waist-to-height ratio (WHtR)** capture some central adiposity not reflected by BMI. **DXA** quantifies whole-body composition, while **MRI/CT** measure visceral and subcutaneous adiposity more directly. These do not measure identical constructs.
- **Clinical status is source- and jurisdiction-dependent.** A standard BMI diagnosis, an observational risk equivalence, a screening-test trigger, a weight-loss target and a prediction-model coefficient are five different things.

The 2025 international commission on clinical obesity distinguishes excess adiposity and evidence of functional organ/tissue impairment from BMI classification alone; ADA's 2026 obesity standards provide their own formal screening and diagnostic criteria. The project should represent these as **separately attributed frameworks**, not silently combine them. [Commission](https://doi.org/10.1016/S2213-8587(24)00316-4); [ADA 2026](https://doi.org/10.2337/doci26-0003) (ANC-003, ANC-022).

## 2. Guideline-supported baseline — what may be retained

| Framework | Group/context | BMI action / classification | What it means | Evidence IDs |
|---|---|---|---|---|
| WHO international | General adult population | Overweight ≥25; obesity ≥30 kg/m² | Conventional international categories; not personalized ideal target | ANC-001 |
| WHO 2004 Asian consultation | Diverse Asian populations | Additional *action points* 23 and 27.5; retained standard international classification | Population-specific action points; risk starts at different BMIs in different populations | ANC-001 |
| NICE NG246 (UK) | South Asian, Chinese, other Asian, Middle Eastern, Black African, African-Caribbean | Overweight 23–27.4; obesity ≥27.5 | UK practical cutoffs, not a global ancestry law | ANC-002 |
| ADA 2026 obesity care (US) | Non-Asian background | Screen BMI ≥25; obesity BMI ≥30 **or** BMI ≥25 with WHtR ≥0.5 / high WC | Adult obesity assessment incorporating central adiposity | ANC-003 |
| ADA 2026 obesity care (US) | Asian background | Screen BMI ≥23; obesity BMI ≥27.5 **or** BMI ≥23 with WHtR ≥0.5 / high WC | Asian-background criteria for US clinical context | ANC-003 |
| ADA 2026 diabetes care | At-risk adults | Consider testing at BMI ≥25, or ≥23 if Asian ancestry, **with another risk factor** | Diabetes-testing consideration, **not** a Latino-specific optimal-BMI rule | ANC-023 |

**ADA waist thresholds for the BMI band where they affect overweight-versus-obesity classification:** Asian-background women ≥80 cm, men ≥90 cm; non-Asian women ≥88 cm, men ≥102 cm. WHtR ≥0.5 is another qualifying indicator. The calculator's code reflects these values; if the output claims to be using ADA rules, it must not quietly apply the NICE lower BMI category to a non-Asian person. [ADA 2026](https://doi.org/10.2337/doci26-0003). The current code explicitly documents the NICE/ADA distinction, which is worth retaining.

**Mixed ancestry:** ADA 2026 explicitly flags an evidence gap and directs clinicians to use the background with which the person identifies. It does **not** state that the largest genealogical or DNA fraction determines identity, and it does not endorse threshold interpolation (ANC-004).

## 3. European regions: precision in description, not arbitrary thresholds

### 3.1 Nordic / Scandinavian

Norway, Sweden, Denmark, Finland, Iceland, and wider Nordic populations are not a single genetic phenotype; Denmark/Sweden/Norway, Finland and the Sámi require cultural, historical and genomic distinctions. The evidence reviewed offers **no validated Nordic-specific BMI or waist cutoff** that outperforms currently recommended anthropometric screening for incident diabetes or cardiovascular events. Any “Nordic BMI range” in the calculator would therefore create unearned precision. Record geographic family background **only as optional descriptive information** pending direct outcome validation (ANC-026).

### 3.2 Mediterranean Europe

Italy, Greece, Spain, Portugal, southern France and neighboring Mediterranean populations vary by geography, migration and living conditions. A dietary pattern's health evidence must **not** be turned into a genetically inherited “Mediterranean ideal BMI.” Culture/diet response belongs to Team 2. European cohort evidence supports adding WC to BMI for diabetes risk, but not a unified Mediterranean-specific weight band. [EPIC-InterAct](https://pubmed.ncbi.nlm.nih.gov/22679397/) (ANC-005).

### 3.3 Central Europe

German-, Austrian-, Swiss-, Czech-, Polish-, Hungarian- and adjacent ancestries should not be presumed metabolically equivalent. Geographic genetic gradients exist in Europe: in an approximately **3,000-person** study, genetic structure mirrored geographic location despite relatively low overall differentiation. However, **genetic geographic structure was the outcome**, not excess visceral fat, diabetes or the optimal BMI. This source cannot justify different clinical thresholds. [Novembre et al.](https://doi.org/10.1038/nature07331) (ANC-008).

### 3.4 Eastern Europe / Balkans / Baltic regions

Eastern Europe is not one ancestry. Slavic, Baltic, Balkan, Roma and other populations have overlapping yet distinct histories; country of residence may be more informative than genomic ancestry for CVD risk because baseline incidence and care access vary. **SCORE2** derived models from **677,684 participants and 30,121 events**, then validated in **1,133,181 participants and 43,492 events**; calibrated predictions differ greatly across four European **country-risk** regions (C-indices ~0.67–0.81). This supports **residence-specific contextual CVD risk**, not an Eastern-European inherited BMI adjustment. [SCORE2](https://doi.org/10.1093/eurheartj/ehab309) (ANC-006).

### 3.5 European outcome evidence across regions

In the eight-country **EPIC-InterAct** case-cohort (12,403 incident diabetes cases; base cohort 340,234), higher BMI and waist were separately associated with T2D. At very high BMI and high waist, the incident-risk HR compared with low BMI/low waist was **22.0 (95% CI 14.3–33.8) in men** and **31.8 (25.2–40.2) in women** (ANC-005). These are **extreme category contrasts**, not threshold definitions. The same program evaluated 12 diabetes risk models in 27,779 participants. Model C-statistics were **0.76–0.81** overall, but model performance and calibration varied by country and subgroup; two scores overpredicted 10-year risk by **34% and 40%** respectively (ANC-007). Consequently: country-by-country calibration may matter even without ancestry-specific thresholds.

**European conclusion:** Offer Nordic / Mediterranean / Central / Eastern European choices, if useful, strictly as **informational provenance and potential research stratifiers**. Preserve established screening thresholds; display actual risk markers such as WC, BP, lipids, glycemia, family history and age. Do not make an unproven “Mediterranean vs Scandinavian ideal weight” branch.

## 4. Central and South America: stop treating a social label as a phenotype

### 4.1 U.S. Hispanic/Latino subgroups are different, but prevalence is not biology

The **HCHS/SOL** enrolled 16,415 adults 18–74 in the Bronx, Chicago, Miami and San Diego. Its diabetes analysis (**16,385**) reported weighted diabetes prevalence **16.9% (95% CI 16.11–17.69)**, with a wide range across heritage groups:

| Self-identified heritage | Diabetes prevalence (95% CI) |
|---|---:|
| Mexican | 18.3% (16.84–19.86) |
| Central American | 17.7% (15.36–20.22) |
| Cuban | 13.4% (12.03–14.91) |
| Dominican | 18.1% (16.21–20.13) |
| Puerto Rican | 18.1% (16.30–19.98) |
| South American | 10.2% (8.36–12.29) |

[HCHS/SOL original study](https://doi.org/10.2337/dc13-2939), ANC-010. **Do not interpret those prevalence percentages as the same person's intrinsic genetic odds.** Age, body mass, migration, years in the U.S., neighborhood, socioeconomic conditions and healthcare contact differ among groups. Some broad labels hide Indigenous-language communities, Afro-Latin people and distinct national populations. These are heritage-group results from four U.S. cities, not generalizable incidence for all the Americas. The HCHS/SOL acculturation analysis (N=16,415) found obesity in **42.4% of women and 36.5% of men**, with site and background variation (ANC-011).

### 4.2 Mexican adults: two important but distinct results

**Observed outcomes and adiposity:** The Mexico City Prospective Study recruited **159,755** adults. In its mortality analysis of **115,400** participants aged 35–<75 without baseline major disease, each +5 kg/m² BMI above 25 corresponded to an all-cause-mortality **HR 1.30 (95% CI 1.24–1.36)**. WC/waist-to-hip ratio provided information not subsumed by BMI. The observed mortality nadir at BMI **25–<27.5** should **not** be advertised as a Mexican “ideal BMI” or as proof of safety at that weight; mortality curves are outcome-specific and subject to selection and reverse-causality issues. [MCPS mortality analysis](https://pubmed.ncbi.nlm.nih.gov/31404923/), ANC-013.

**Genomic ancestry and diabetes:** A different **2026** analysis of **134,548** MCPS participants examined Indigenous American genomic ancestry (mean **66.2%, SD 17.9**). At the low and high deciles of ancestry, diabetes prevalence was **13.5% vs 23.4%**. The age/sex-adjusted OR per **20 percentage points** ancestry was **1.45 (1.43–1.48)** for T2D; adjustment for socioeconomic, lifestyle, BMI and WHR covariates gave **1.33 (1.31–1.36)**. The corresponding adjusted prediabetes OR was **1.18 (1.16–1.20)**. This is substantial evidence for research on ancestry-associated **diabetes risk**, but is **cross-sectional**, cannot itself prove ancestry causes disease, and supplies **no ancestry-proportional BMI or weight formula**. [Berumen et al. 2026](https://doi.org/10.1016/S2468-2667(25)00305-6), ANC-014. Even a well-estimated risk association is not automatically a calibrated individual-risk model.

A small earlier Mexico/Colombia case-control comparison illustrates why confounders are essential. An apparent European-ancestry association with lower diabetes odds was eliminated after socioeconomic adjustment in Colombia (OR shifted from **0.26 [0.08–0.78]** to **0.64 [0.19–2.12]**) and attenuated in Mexico (ANC-015). These studies differ radically in size and design and should not be forced into a pooled ancestry multiplier.

### 4.3 Central America and Indigenous American groups

The HCHS/SOL “Central American” group had n=1,730 in the diabetes subgroup table, but **cannot tell** whether Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Panama, or Indigenous communities within any country have a common threshold. The calculator's one “Native American / Indigenous American” dropdown similarly masks multiple nations and the differences among North, Central and South American peoples. Direct evidence about Indigenous ancestry in one Mexico City cohort is **not** evidence about Maya, Quechua, Aymara, Mapuche or other peoples individually. Offer distinct self-description if requested, without generating clinical cutoffs from unvalidated ancestry percentages.

### 4.4 Caribbean and African-diaspora diversity

Puerto Rican, Dominican and Cuban HCHS/SOL groups showed different diabetes distributions. These categories encompass European, African, Indigenous and other ancestry mixes; they are not interchangeable with “Black African / African-Caribbean / African American.” In particular, **NICE's UK Black African/African-Caribbean categories must not automatically be assigned to all Afro-Latin people worldwide** without explicit applicability review. Areas such as Haiti and non-Spanish-speaking Caribbean populations are not represented by a generic “Hispanic/Latino” item. The calculator should distinguish **Latino heritage**, **race/ethnicity self-identification** and **genomic ancestry**, rather than force one menu to represent all three.

### 4.5 Andean populations and Peru

In **CRONICAS** (n=3,088; Lima, Tumbes and urban/rural high-altitude Puno), **43.1%** of adults with **normal BMI** had at least two measured metabolic abnormalities under the study's composite definition. This supports not treating a BMI “healthy category” as a clean bill of health. Age, setting and altitude mattered; no Peruvian/Andean cutoff was prospectively validated. [CRONICAS](https://doi.org/10.1371/journal.pone.0138968), ANC-017. Environmental altitude exposure is not genetic ancestry.

### 4.6 Brazil

Brazil requires its **own** discussion rather than a generic “Hispanic” category. In the 15,105-person **ELSA-Brasil** cohort, participants self-identified as **52.2% White**, **16.1% Black**, **28.2% Brown/pardo** (remaining groups not summarized here). These are meaningful Brazilian social/color categories, not decimal fractions of European or African genomes. ELSA is also a civil-servant cohort with strong educational selection. It provides a **potential dataset**, not new clinical BMI cutoffs. [ELSA-Brasil cohort profile](https://doi.org/10.1093/ije/dyu027), ANC-020.

### 4.7 Southern Cone and other urban centers

The **CESCAS I** sample (n=7,524 in communities of Argentina, Chile and Uruguay) reported **35.7% obesity**, **52.9% central obesity**, **12.4% diabetes**, **37.4% metabolic syndrome**. No ancestry-specific outcome equivalent was established (ANC-019). The **CARMELA** survey (n=11,550, seven Latin American cities) found obesity **18–27%**, diabetes **4–9%** and metabolic syndrome **14–27%** across cities (ANC-018). These findings motivate location-aware context and calibration; city prevalence must not be relabeled inherited risk.

### 4.8 Does more granular ancestry help prediction?

A **2025 HCHS/SOL genetic analysis** (n=7,075) found that a weak pooled association between Amerindigenous ancestry and BMI (**β about −0.001, p=0.044**) disappeared in heritage-group-stratified analysis. It also investigated interactions among BMI polygenic scores, diet and migration; results illustrate context dependence, **not** validated diet-genotype prescriptions. [2025 genetic study](https://doi.org/10.1016/j.xhgg.2025.100451), ANC-016. Another 2025 All of Us report found wide three-way admixture and meaningful subcontinental structure, underscoring that a single broad racial label is analytically inadequate; however, this does not furnish treatment thresholds (ANC-028).

## 5. Audit of current calculator assumptions

This is a **code-and-evidence audit**, not an execution of automated test suites. The public GitHub HTML source was inspected, including `ANCESTRIES`, `GROUPS`, `groupForAncestries`, `bufferZone`, `suggestedRange`, `adaWaist`, and user-interface selection defaults.

| Existing feature | Finding | Decision for later integration |
|---|---|---|
| `GROUPS.standard` uses BMI 18.5/25/30 | Consistent with international reference categories | **Retain** with accurate screening vs ideal-weight language |
| `GROUPS.lower` uses 18.5/23/27.5 | Appropriate when explicitly attributed to WHO Asian action points or NICE-covered groups | **Retain with jurisdiction/source label**, not universal ancestry physiology |
| `ANCESTRIES.european` single standard class | No evidence for European regional threshold split | **Retain clinical thresholds; add optional descriptive origins only** |
| `ANCESTRIES.hispanic` one standard class | Conventional thresholds appropriate; label hides major populations and nationality vs biology | **Disaggregate descriptions and contextual risk**, without new cutoffs |
| `ANCESTRIES.native_american` one standard class | Does not capture heterogeneous Indigenous nations | **Improve identity taxonomy and disclaimers**, no inferred threshold |
| `ANCESTRIES.african` conflates African, Caribbean and African-American | Distinct sociogeographic populations; NICE's rule not automatically U.S. ADA rule | **Split descriptions and guideline context**, avoid blanket genetic equivalence |
| `ANCESTRIES.middle_eastern` lower | Supported under NICE but not the ADA Asian definition | **Retain UK mode only** as appropriate |
| `mixed_asian` with unspecified “significant” ancestry | Scientifically ambiguous; percentages don't define categorical Asian clinical identity | **Clarify / replace label**; ask explicit background and ruleset |
| Mixed-ancestry identify-with mode | Aligns conceptually with ADA acknowledgment of mixed-group gap | **Retain**, but **remove auto-selection of largest ancestry share as a clinical default** |
| `groupForAncestries` weighted interpolation | No clinical guideline or external validation | **Quarantine as research-only; never represent as recommended screening** |
| BMI 22 diabetes buffer and auto-capping suggested range | Converts population observation into a personalized weight ceiling | **High-priority correction before clinical claims**; separate risk note from weight target |
| BMI+waist ADA branch (`ADA_WAIST`) | Stronger evidence-based component, but currently optional waist input; two regimes interact | **Retain** with WC measurement protocol; test all edge cases |
| Hamwi, Devine, Robinson, Miller plus wrist/elbow determines “optimal” band | Legacy equations and this composition are not outcome-validated, nor ancestry-specific | **Keep heuristic separate from validated risk screening**, reconsider “optimal” wording |
| Ancestry-based food notes (lactase, HFE, AMY1, FADS2, ALDH2) | Some have real population differences, but individual advice requires Team 2/3 review | **Do not revise here**; refer to handoff |

**Important nuance:** The calculator already warns that blending is nonguideline-based and explains U.S./U.K. differences; those are valuable transparency features. The concern is not that documentation conceals all limitations, but that a *user-facing calculated number*, especially a personal weight ceiling, can nevertheless be mistaken for clinically established guidance.

## 6. Body composition, visceral adiposity, and measurement quality

- Population-level BMI-to-fat relationships vary, and individual BMI cannot distinguish muscle, fat or body-fat location. The ADA 2026 review reports a meta-analysis with pooled BMI **sensitivity 50% (95% CI 43–57)** and **specificity 90% (86–94)** for detecting excess adiposity. These findings motivate complementary measures rather than ethnic “correction constants” [ADA 2026](https://doi.org/10.2337/doci26-0003).
- In European cohorts, BMI and WC independently stratify diabetes outcomes (ANC-005). In the Mexico City mortality cohort, abdominal adiposity predicted mortality independently of BMI (ANC-013). In Peru, normal BMI did not ensure a metabolically healthy profile (ANC-017).
- The current UI asks for WC measured **midpoint between bottom rib and iliac crest**; this is consistent with a recognized WHO method. The HCHS/SOL study obtained WC at the **iliac crest**. A major international consensus found outcome associations similar across protocols but noted the absolute WC differences can change category assignment, especially for women. **Capture method as metadata; avoid unqualified comparison of hard WC thresholds across studies.** [Ross et al. consensus](https://pmc.ncbi.nlm.nih.gov/articles/PMC7027970/), ANC-021.
- A wrist- or elbow-defined “frame” should be considered a distinct anthropometric hypothesis, not a surrogate for CT visceral adiposity or a proven personal healthy-range modifier. BMI-DXA and BMI-MRI concordance with frame heuristics is an explicit validation question (ANC-027).

## 7. Why ancestry-percentage BMI interpolation is not defensible yet

**The genetic finding in Mexico is an association with odds of diabetes**, not an estimated derivative of the obesity screening cutoff with respect to ancestry. Thresholds are determined through outcome-specific sensitivity/specificity, clinical costs, calibration and policy. Their linear interpolation is mathematically arbitrary unless directly tested and validated in mixed populations.

Even the direction of pooled ancestry-BMI association can disappear after heritage-group stratification (ANC-016), while ancestry-diabetes associations can shrink after SES adjustment (ANC-015). Percent admixture may also correlate with region, language, migration, racism, environmental exposure, access to care and variant frequencies. **Best alternative:** use a documented guideline ruleset for currently supported screening; separately present a cautious risk-factor note; research ancestry-specific risk models using continuous ancestry estimates and independently observed clinical outcomes; compare them to conventional clinical models. No ancestry fraction should silently move the “optimal weight” output.

## 8. Evidence gaps and generalizability

The current targeted review did **not** establish outcome-validated weight thresholds for Nordic, Mediterranean, Central, Eastern European, Mexican, Maya, Central American, Caribbean, Andean, Brazilian, or Southern Cone genetic-ancestry groups. Even where large cohort studies exist, some examine **prevalence, not incident outcomes**; others use self-identified heritage rather than genetic ancestry. Groups with insufficient direct representation include Central American countries by nation and Indigenous group; Afro-Latin communities by region; Haiti and the non-Spanish-speaking Caribbean; Amazonian and Andean communities by nation; and underrepresented European groups (Roma, Sámi, some Balkan/Baltic communities). This is not an exhaustive claim that no literature exists—only that a *validated threshold justified for this calculator* was not established.

## 9. Decision-ready synthesis

1. **Supported:** maintain source-labelled WHO, NICE and ADA screening criteria; supplement BMI with WC/WHtR and clinical risk information (ANC-001–004, 021–023).
2. **Supported as observational context:** distinguish Latino heritage groups and use country/residence context; explain measured risk heterogeneity without making normative weight targets (ANC-005–020).
3. **Research-worthy:** test whether genomic ancestry improves calibrated T2D or CVD prediction in mixed Mexican/Latino groups **above clinical variables** (ANC-014, 016, 028).
4. **Not established:** European subdivision-specific optimal BMI bands, clinical ancestry-percentage cutoff blending, and the BMI-22 weight ceiling (ANC-024–027).
5. **Integration rule:** Team 1 owns ancestry definitions and outcome evidence only; Team 2 owns dietary/genetic disease interpretation, Team 3 owns drug-gene evidence; no cross-stream rule may become clinical without explicit joint approval.

## Selected verified references

- [ADA obesity 2026](https://doi.org/10.2337/doci26-0003)
- [ADA diabetes screening 2026](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes)
- [NICE NG246](https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity)
- [WHO Asian consultation 2004](https://doi.org/10.1016/S0140-6736(03)15268-3)
- [Caleyachetty et al. 2021](https://pubmed.ncbi.nlm.nih.gov/33989535/)
- [EPIC-InterAct 2012](https://pubmed.ncbi.nlm.nih.gov/22679397/)
- [EPIC-InterAct prediction validation 2014](https://doi.org/10.1016/S2213-8587(13)70103-7)
- [SCORE2 2021](https://doi.org/10.1093/eurheartj/ehab309)
- [Novembre et al. 2008](https://doi.org/10.1038/nature07331)
- [HCHS/SOL diabetes 2014](https://doi.org/10.2337/dc13-2939)
- [HCHS/SOL waist and CHD 2020](https://doi.org/10.2337/dc19-1855)
- [HCHS/SOL acculturation 2015](https://doi.org/10.1155/2015/186276)
- [Mexico City mortality 2019](https://pubmed.ncbi.nlm.nih.gov/31404923/)
- [Berumen et al. 2026 Mexico ancestry/T2D](https://doi.org/10.1016/S2468-2667(25)00305-6)
- [SES confounding Mexico/Colombia 2009](https://pubmed.ncbi.nlm.nih.gov/19526211/)
- [HCHS/SOL ancestry–gene–environment 2025](https://doi.org/10.1016/j.xhgg.2025.100451)
- [CRONICAS Peru 2015](https://doi.org/10.1371/journal.pone.0138968)
- [CARMELA 2008](https://doi.org/10.1016/j.amjmed.2007.08.038)
- [CESCAS I](https://pubmed.ncbi.nlm.nih.gov/25662056/)
- [ELSA-Brasil cohort profile](https://doi.org/10.1093/ije/dyu027)
- [Waist circumference consensus 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7027970/)
- [Clinical obesity commission 2025](https://doi.org/10.1016/S2213-8587(24)00316-4)
- [All of Us subcontinental ancestry 2025](https://pubmed.ncbi.nlm.nih.gov/40480197/)

*See `01_Ancestry_Evidence_Matrix.md` for 28 fully specified claim-level records and `01_Ancestry_Clinical_Validation.md` for the prospective test plan.*