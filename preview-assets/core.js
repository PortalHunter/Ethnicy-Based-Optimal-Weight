
/* ===== Calculation core (pure functions, no DOM). Tested by tests/run-tests.mjs ===== */
(function (root) {
  'use strict';

  var IN_TO_CM = 2.54;            // exact by definition
  var LB_TO_KG = 0.45359237;      // exact by definition

  // Plausible adult ranges used for validation (not medical limits; they catch typos and unit mix-ups).
  var LIMITS = {
    heightCm: [120, 230],
    weightKg: [30, 300],
    wristCm:  [10, 25],
    elbowCm:  [4, 10],
    waistCm:  [40, 200],
    age:      [18, 120]
  };

  // ---------- References (every claim on the page points to one of these keys) ----------
  var REFS = [
    ['who_asian', 'WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet. 2004;363(9403):157-163.', 'https://pubmed.ncbi.nlm.nih.gov/14726171/'],
    ['nice', 'NICE guideline NG246. Overweight and obesity management: identifying and assessing overweight, obesity and central adiposity (recs 1.9.10-1.9.15, 2022 wording).', 'https://www.nice.org.uk/guidance/ng246/chapter/identifying-and-assessing-overweight-obesity-and-central-adiposity'],
    ['who_fact', 'WHO. Obesity and overweight - fact sheet (adult BMI classification).', 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight'],
    ['caley', 'Caleyachetty R, et al. Ethnicity-specific BMI cutoffs for obesity based on type 2 diabetes risk in England: a population-based cohort study. Lancet Diabetes Endocrinol. 2021;9(7):419-426.', 'https://pubmed.ncbi.nlm.nih.gov/33989535/'],
    ['grant', 'Grant JP. Handbook of Total Parenteral Nutrition. Philadelphia: W.B. Saunders; 1980 (source of the height/wrist "r" frame cut-offs; book, not online - secondary summary linked).', 'https://www.hi-r-ed.com/Anthro/Frame%20size%20(p4).htm'],
    ['medline_frame', 'MedlinePlus Medical Encyclopedia. Calculating body frame size (wrist measurement; a simpler alternative wrist chart).', 'https://medlineplus.gov/ency/imagepages/17182.htm'],
    ['metlife', 'Metropolitan Life Insurance Co. 1983 height-weight tables: elbow breadth for medium frame (heights in 1-inch heels) - reproduced with instructions at halls.md.', 'https://halls.md/met-life-ideal-weight.html'],
    ['frisancho', 'Frisancho AR, Flegel PN. Elbow breadth as a measure of frame size for US males and females. Am J Clin Nutr. 1983;37(2):311-314.', 'https://pubmed.ncbi.nlm.nih.gov/6823895/'],
    ['peterson', 'Peterson CM, Thomas DM, Blackburn GL, Heymsfield SB. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr. 2016 (Table 3 lists the Hamwi, Devine, Robinson and Miller equations).', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/'],
    ['robinson', 'Robinson JD, et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm. 1983;40(6):1016-1019.', 'https://pubmed.ncbi.nlm.nih.gov/6869387/'],
    ['pai', 'Pai MP, Paloucek FP. The origin of the "ideal" body weight equations. Ann Pharmacother. 2000;34(9):1066-1069.', 'https://pubmed.ncbi.nlm.nih.gov/10981254/'],
    ['hamwi_frame', 'Association of Nutrition & Foodservice Professionals. Common Nutrition Calculations (Hamwi formula with -10% small / +10% large frame adjustment).', 'https://www.anfponline.org/docs/default-source/supplemental-textbook-material/nf2015/nutrition-common-formulas-and-calculations-(2).pdf'],
    ['ada8', 'American Diabetes Association. 8. Obesity and Weight Management for the Prevention and Treatment of Diabetes: Standards of Care in Diabetes-2026. Diabetes Care.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12690172/'],
    ['ada5', 'American Diabetes Association. 5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes-2026. Diabetes Care (recs 5.14, 5.24).', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12690188/'],
    ['dpp', 'Diabetes Prevention Program Research Group (Knowler WC, et al.). Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin. N Engl J Med. 2002;346(6):393-403.', 'https://pubmed.ncbi.nlm.nih.gov/11832527/'],
    ['aha', '2025 AHA/ACC/multisociety Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Circulation. 2025.', 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356'],
    ['dash', 'NHLBI. Following the DASH eating plan.', 'https://www.nhlbi.nih.gov/education/dash/following-dash'],
    ['cdc_bp', 'CDC. High blood pressure facts (prevalence by race and ethnicity).', 'https://www.cdc.gov/high-blood-pressure/data-research/facts-stats/index.html'],
    ['hasan', 'Hasan B, et al. Weight loss and serum lipids in overweight and obese adults: a systematic review and meta-analysis. J Clin Endocrinol Metab. 2020;105(12):dgaa673.', 'https://pubmed.ncbi.nlm.nih.gov/32954416/'],
    ['statpearls', 'StatPearls (NCBI Bookshelf). Dietary Therapy for LDL Cholesterol Reduction.', 'https://www.ncbi.nlm.nih.gov/books/NBK551722/'],
    ['nccih', 'NCCIH. High Cholesterol and Natural Products: What the Science Says.', 'https://www.nccih.nih.gov/health/providers/digest/high-cholesterol-and-natural-products-science'],
    ['acr_gout', 'FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res. 2020;72(6):744-760.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/'],
    ['mattar', 'Mattar R, de Campos Mazo DF, Carrilho FJ. Lactose intolerance: diagnosis, genetic, and clinical factors. Clin Exp Gastroenterol. 2012;5:113-121.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3401057/'],
    ['perry', 'Perry GH, et al. Diet and the evolution of human amylase gene copy number variation. Nat Genet. 2007;39(10):1256-1260.', 'https://pubmed.ncbi.nlm.nih.gov/17828263/'],
    ['kothapalli', 'Kothapalli KS, et al. Positive selection on a regulatory insertion-deletion polymorphism in FADS2 influences apparent endogenous synthesis of arachidonic acid. Mol Biol Evol. 2016;33(7):1726-1739.', 'https://pubmed.ncbi.nlm.nih.gov/27188529/'],
    ['frontiers', 'Precision nutrition across climates: decoding diet, tradition, and genomic adaptations from South Asia to the Arctic. Front Nutr. 2025.', 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2025.1638843/full'],
    ['brooks', 'Brooks PJ, Enoch MA, Goldman D, Li TK, Yokoyama A. The alcohol flushing response: an unrecognized risk factor for esophageal cancer from alcohol consumption. PLoS Med. 2009;6(3):e50.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2659709/'],
    ['yoshida', 'Yoshida A. Genetic polymorphisms of alcohol metabolizing enzymes related to alcohol sensitivity and alcoholic diseases. Alcohol Alcohol. 1994;29(6):693-696.', 'https://pubmed.ncbi.nlm.nih.gov/7695785/'],
    ['niddk_hemo', 'NIDDK. Definition & Facts for Hemochromatosis.', 'https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis/definition-facts'],
    ['niddk_hemo_diet', 'NIDDK. Eating, Diet, & Nutrition for Hemochromatosis.', 'https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis/eating-diet-nutrition'],
    ['niddk_hemo_tx', 'NIDDK. Treatment of Hemochromatosis.', 'https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis/treatment'],
    ['niddk_celiac', 'NIDDK. Eating, Diet, & Nutrition for Celiac Disease.', 'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/eating-diet-nutrition'],
    ['deurenberg', 'Deurenberg P, Yap M, van Staveren WA. Body mass index and percent body fat: a meta analysis among different ethnic groups. Int J Obes Relat Metab Disord. 1998;22(12):1164-1171.', 'https://pubmed.ncbi.nlm.nih.gov/9877251/'],
    ['swinburn', 'Swinburn BA, Ley SJ, Carmichael HE, Plank LD. Body size and composition in Polynesians. Int J Obes Relat Metab Disord. 1999;23(11):1178-1183.', 'https://pubmed.ncbi.nlm.nih.gov/10578208/'],
    ['papier', 'Papier K, D\'Este C, Bain C, et al. Body mass index and type 2 diabetes in Thai adults: defining risk thresholds and population impacts. BMC Public Health. 2017;17(1):707.', 'https://pubmed.ncbi.nlm.nih.gov/28915801/'],
    ['odegaard', 'Odegaard AO, Koh WP, Vazquez G, et al. BMI and diabetes risk in Singaporean Chinese. Diabetes Care. 2009;32(6):1104-1106.', 'https://pubmed.ncbi.nlm.nih.gov/19324946/'],
    ['apcsc', 'Asia Pacific Cohort Studies Collaboration. Body mass index and risk of diabetes mellitus in the Asia-Pacific region. Asia Pac J Clin Nutr. 2006;15(2):127-133.', 'https://pubmed.ncbi.nlm.nih.gov/16672195/'],
    ['vicks', 'Vicks WS, Lo JC, Guo L, et al. Prevalence of prediabetes and diabetes vary by ethnicity among U.S. Asian adults at healthy weight, overweight, and obesity ranges: an electronic health record study. BMC Public Health. 2022;22(1):1954.', 'https://pubmed.ncbi.nlm.nih.gov/36273116/'],
    ['retune', 'Taylor R, Barnes AC, Hollingsworth KG, et al. Aetiology of Type 2 diabetes in people with a \'normal\' body mass index: testing the personal fat threshold hypothesis (ReTUNE). Clin Sci (Lond). 2023;137(16):1333-1346.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10472166/'],
    ['gbmc', 'Global BMI Mortality Collaboration. Body-mass index and all-cause mortality: individual-participant-data meta-analysis of 239 prospective studies in four continents. Lancet. 2016;388(10046):776-786.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4995441/'],
    ['ada_obesity', 'American Diabetes Association. 3. Screening, Diagnosis, Evaluation, and Staging of Obesity in Adults: Standards of Care in Overweight and Obesity-2026. Diabetes Obes Cardiometab Care. 2026;1(4):536-571. doi:10.2337/doci26-0003 (Table 3.1, recs 3.3a-3.3d).', 'https://diabetesjournals.org/docm-care/article/1/4/536/170058/Screening-Diagnosis-Evaluation-and-Staging-of'],
    ['wpro', 'World Health Organization Regional Office for the Western Pacific, International Association for the Study of Obesity, International Obesity Task Force. The Asia-Pacific perspective: redefining obesity and its treatment. Sydney: Health Communications Australia; 2000 (section 2, Table 2.2; provisional cut-offs).', 'https://iris.who.int/handle/10665/206936'],
    ['pagsisihan', 'Pagsisihan D, Sandoval MA, Paz-Pacheco E, Jimeno C. Low indices of overweight and obesity are associated with cardiometabolic diseases among adult Filipinos in a rural community. J ASEAN Fed Endocr Soc. 2016;31(2).', 'https://asean-endocrinejournal.org/index.php/JAFES/article/view/357'],
    ['battie', 'Battie CA, Borja-Hart N, Ancheta IB, Flores R, Rao G, Palaniappan L. Comparison of body mass index, waist circumference, and waist to height ratio in the prediction of hypertension and diabetes mellitus: Filipino-American women cardiovascular study. Prev Med Rep. 2016;4:608-613.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5118592/'],
    ['zheng', 'Zheng W, McLerran DF, Rolland B, et al. Association between body-mass index and risk of death in more than 1 million Asians. N Engl J Med. 2011;364(8):719-729.', 'https://pubmed.ncbi.nlm.nih.gov/21345101/'],
    ['pop_hfe','GeneReviews: HFE-Related Hemochromatosis, northern European ancestry.','https://www.ncbi.nlm.nih.gov/books/NBK1440/'],
    ['pop_finn','The Finnish genetic heritage in 2022: founder variants and inherited disease.','https://pmc.ncbi.nlm.nih.gov/articles/PMC9637267/'],
    ['pop_thal','CDC: Thalassemia inheritance, screening and population distribution.','https://www.cdc.gov/thalassemia/about/'],
    ['pop_apol1','National Kidney Foundation: APOL1-Mediated Kidney Disease.','https://www.kidney.org/kidney-topics/apol1-mediated-kidney-disease-amkd'],
    ['pop_cdc','Koyama et al. Cardiometabolic diseases among racial and ethnic subgroups. CDC MMWR 2024.','https://www.cdc.gov/mmwr/volumes/73/wr/mm7303a1.htm'],
    ['pop_tbc','Moltke et al. Greenlandic TBC1D4 variant and diabetes risk. Nature 2014.','https://pubmed.ncbi.nlm.nih.gov/25043022/'],
    ['pop_cpt','GeneReviews: CPT1A deficiency, Arctic variant, infant fasting tolerance.','https://www.ncbi.nlm.nih.gov/books/NBK1527/'],
    ['pop_fmf','GeneReviews: Familial Mediterranean Fever, MEFV and population epidemiology.','https://www.ncbi.nlm.nih.gov/books/NBK1227/'],
    ['pop_samoa','Minster et al. CREBRF and body mass index in Samoan populations. Nature Genetics 2016.','https://pubmed.ncbi.nlm.nih.gov/27455349/'],
    ['pop_samoa_dm','CREBRF variants, diabetes and glucose in Polynesian populations. 2022.','https://pubmed.ncbi.nlm.nih.gov/35144939/'],
    ['pop_abs','Australian Bureau of Statistics. Aboriginal and Torres Strait Islander Health Measures Survey 2022-24.','https://www.abs.gov.au/statistics/people/aboriginal-and-torres-strait-islander-peoples/national-aboriginal-and-torres-strait-islander-health-measures-survey/2022-24'],
    ['pop_fh','GeneReviews: Familial Hypercholesterolemia and founder population estimates.','https://www.ncbi.nlm.nih.gov/books/NBK174884/'],
    ['pop_acog','ACOG. Universal Hemoglobinopathy Testing, 2022; ancestry is a poor genetic proxy.','https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/08/hemoglobinopathies-in-pregnancy']
  ];
  var REF_INDEX = {};
  REFS.forEach(function (r, i) { REF_INDEX[r[0]] = i + 1; });

  function cite(keys) {
    if (!Array.isArray(keys)) keys = [keys];
    return keys.map(function (k) {
      var n = REF_INDEX[k];
      if (!n) throw new Error('Unknown reference key: ' + k);
      return '<a class="cite" data-ref="' + k + '" href="' + REFS[n - 1][2] + '" target="_blank" rel="noopener noreferrer" title="' + REFS[n - 1][1].replace(/"/g, '&quot;') + '">[' + n + ']</a>';
    }).join(' ');
  }

  // ---------- Ancestry groups ----------
  // 'standard' = WHO international adult classification.
  // 'lower'    = lower action points: WHO 2004 (Asian populations) and NICE NG246 (South Asian, Chinese,
  //              other Asian, Middle Eastern, Black African, African-Caribbean).
  var GROUPS = {
    standard: { key: 'standard', healthyLow: 18.5, overweight: 25, obese: 30,
      name: 'WHO international cut-offs', labels: ['Underweight', 'Healthy weight', 'Overweight', 'Obesity'] },
    lower: { key: 'lower', healthyLow: 18.5, overweight: 23, obese: 27.5,
      name: 'lower population-specific cut-offs (WHO 2004 / NICE)', labels: ['Underweight', 'Healthy weight', 'Overweight (increased risk)', 'Obesity (high risk)'] }
  };

  // adaAsian: "Asian background" as the ADA 2026 obesity standards define it (Asia, e.g. China, Japan,
  // Korea, and the South Asian subcontinent). Black African and Middle Eastern groups get lower BMI
  // cut-offs from NICE here, but ADA's waist thresholds for them are the non-Asian ones.
  var ANCESTRIES = {
    european:        { label: 'European / White', group: 'standard' },
    east_asian:      { label: 'East Asian (e.g., Chinese, Japanese, Korean)', group: 'lower', adaAsian: true },
    south_asian:     { label: 'South Asian (e.g., Indian, Pakistani, Bangladeshi, Sri Lankan)', group: 'lower', adaAsian: true },
    se_asian:        { label: 'Southeast Asian (e.g., Thai, Vietnamese, Filipino, Indonesian, Malaysian)', group: 'lower', adaAsian: true },
    mixed_asian:     { label: 'Mixed, with significant Asian ancestry', group: 'lower', adaAsian: true },
    african:         { label: 'Black African / African-Caribbean / African American', group: 'lower' },
    middle_eastern:  { label: 'Middle Eastern / Arab', group: 'lower' },
    hispanic:        { label: 'Hispanic / Latino', group: 'standard' },
    pacific:         { label: 'Pacific Islander', group: 'standard' },
    native_american: { label: 'Native American / Indigenous American', group: 'standard' },
    australian_indigenous: { label: 'Aboriginal Australian / Torres Strait Islander', group: 'standard' },
    other:           { label: 'Other / not listed', group: 'standard' }
  };


  // Classification additions only; no clinical thresholds or weight equations are changed.
  // Each subgroup inherits the exact WHO/NICE/ADA category of its existing broad parent.
  var POP_REGIONS = [
    ['europe','Europe','european',[['eu_scandi','Scandinavian (Norwegian, Swedish, Danish)'],['eu_finn','Finnish'],['eu_brit','British / Irish'],['eu_west','Western / Central European'],['eu_east','Eastern European / Baltic'],['eu_medit','Southern European / Mediterranean'],['eu_balkan','Balkan / Southeastern European']]],
    ['africa','Sub-Saharan Africa / African diaspora','african',[['af_west','West African'],['af_central','Central African'],['af_east','East African / Horn of Africa'],['af_south','Southern African'],['af_american','African American'],['af_caribbean','Afro-Caribbean']]],
    ['eastasia','East Asia','east_asian',[['ea_china','Chinese'],['ea_japan','Japanese'],['ea_korea','Korean'],['ea_other','Other East Asian (including Mongolian / Tibetan)']]],
    ['southasia','South Asia','south_asian',[['sa_india','Indian'],['sa_pakistan','Pakistani'],['sa_bangladesh','Bangladeshi'],['sa_srilanka','Sri Lankan / Tamil'],['sa_nepal','Nepali'],['sa_other','Other South Asian']]],
    ['southeastasia','Southeast Asia','se_asian',[['sea_philippines','Filipino'],['sea_vietnam','Vietnamese'],['sea_thai','Thai'],['sea_cambodia','Cambodian'],['sea_lao','Lao / Hmong'],['sea_indomalay','Indonesian / Malaysian'],['sea_other','Other Southeast Asian']]],
    ['mena','Middle East / North Africa','middle_eastern',[['me_gulf','Arabian Peninsula / Gulf Arab'],['me_levant','Levantine Arab'],['me_iran','Iranian / Persian'],['me_turkey','Turkish / Anatolian'],['me_armenia','Armenian / Caucasus'],['me_northafrica','North African (Maghrebi Arab / Amazigh)']]],
    ['latino','Hispanic / Latino heritage','hispanic',[['lat_mexico','Mexican / Mexican American'],['lat_puerto','Puerto Rican'],['lat_cuba','Cuban'],['lat_dominican','Dominican'],['lat_central','Central American'],['lat_south','South American'],['lat_other','Other Hispanic / Latino']]],
    ['indigenous','Indigenous Americas / Arctic','native_american',[['ind_us','American Indian / Native American (US)'],['ind_firstnations','First Nations (Canada)'],['ind_greenland','Greenlandic Inuit'],['ind_caninuit','Canadian Inuit'],['ind_inupiat','Iñupiat / Yup\u0027ik (Alaska)'],['ind_alaska','Other Alaska Native peoples'],['ind_meso','Mesoamerican Indigenous'],['ind_andean','Andean Indigenous'],['ind_south','Other South American Indigenous']]],
    ['pacific','Pacific Islands / Māori','pacific',[['pi_hawaii','Native Hawaiian'],['pi_samoa','Samoan'],['pi_tonga','Tongan'],['pi_maori','Māori'],['pi_fiji','Fijian'],['pi_chamorro','Chamorro / Guamanian'],['pi_marshall','Marshallese / other Micronesian'],['pi_other','Other Polynesian / Micronesian / Melanesian']]],
    ['australia','Aboriginal Australian / Torres Strait Islander','australian_indigenous',[['au_aboriginal','Aboriginal Australian'],['au_torres','Torres Strait Islander']]],
    ['other','Other / not listed','other',[]]
  ];
  POP_REGIONS.forEach(function (r) { r[3].forEach(function (item) {
    var parent = ANCESTRIES[r[2]];
    ANCESTRIES[item[0]] = {label:item[1],parent:r[2],group:parent.group,adaAsian:!!parent.adaAsian};
  }); });
  // Per-profile claim + source citation. Unlisted profiles are intentionally evidence-limited.
  var POP_EVIDENCE = {
    eu_scandi:['Inherited-condition evidence','Northern European HFE variants are relevant to investigating iron overload when family history, symptoms or blood tests suggest it. Heritage alone is not a diagnosis.',['pop_hfe']],
    eu_brit:['Inherited-condition evidence','HFE-associated iron overload is more common in some northern European populations. Iron studies and family history are more informative than ancestry alone.',['pop_hfe']],
    eu_finn:['Founder-population evidence','Finnish disease heritage includes rare founder-enriched conditions. The relevant screening question depends on personal or family history, not a different ideal weight.',['pop_finn']],
    eu_medit:['Inherited-condition evidence','Thalassemia is documented in Mediterranean populations and many other regions. Unexplained anemia warrants clinician-led evaluation, not automatic iron supplementation.',['pop_thal','pop_acog']],
    eu_balkan:['Population evidence','Inherited hemoglobin disorders occur in some Mediterranean and neighboring populations; appropriate screening should be based on medical context.',['pop_thal','pop_acog']],
    af_west:['Genetic association','APOL1 kidney-risk variants occur in some West African populations. Individual risk cannot be determined without clinical and, when appropriate, genetic information.',['pop_apol1']],
    af_central:['Genetic association','APOL1-associated kidney risk is documented in some Central African ancestry populations; personal kidney measures and family history are more useful for care.',['pop_apol1']],
    af_american:['Population epidemiology','Blood pressure, kidney disease and diabetes deserve assessment using personal measurements and family history; broad population averages are not diagnoses.',['pop_cdc','pop_apol1']],
    af_caribbean:['Population epidemiology','An English study identified different diabetes-risk-equivalent BMI values for Black Caribbean and Black African samples; these are not approved weight targets.',['caley']],
    ea_china:['Population epidemiology','Diabetes risk can appear at lower BMI in Chinese ancestry populations; the existing Asian BMI action points remain unchanged here.',['caley','nice']],
    ea_japan:['Population epidemiology','Diabetes prevalence varies across US East Asian subgroups. Ancestry alone cannot guide a different weight formula or rule out screening.',['pop_cdc']],
    ea_korea:['Population epidemiology','US population studies report differences in cardiometabolic prevalence across East Asian subgroups; clinical measurements should guide individual care.',['pop_cdc']],
    sa_india:['Population epidemiology','South Asian diabetes risk is often observed at BMI below international action points. Individual glucose and clinical findings matter more than an estimated subgroup risk.',['caley','nice']],
    sa_pakistan:['Population epidemiology','English diabetes cohorts document risk at lower BMI among Pakistani and other South Asian adults. No new subgroup-specific weight threshold is assumed.',['caley']],
    sa_bangladesh:['Population epidemiology','An English cohort observed particularly low diabetes-risk-equivalent BMI among Bangladeshi adults. This is not a validated ideal weight or screening cutoff.',['caley']],
    sa_srilanka:['Population epidemiology','South Asian subgroup differences in diabetes risk have been reported in England. They do not establish a separate ideal-weight formula.',['caley']],
    sa_nepal:['Population epidemiology','Nepali adults were included in research on ethnic diabetes-risk equivalence; no new BMI threshold is introduced.',['caley']],
    sea_philippines:['Population epidemiology','A US CDC survey estimated diagnosed diabetes in 15.2% of Filipino adults versus 6.3% of Vietnamese adults, adjusted for age, sex and year. These are group averages.',['pop_cdc']],
    sea_vietnam:['Population epidemiology','US CDC surveys reported a lower diagnosed-diabetes prevalence for Vietnamese than Filipino adults. This does not eliminate any individual need for diabetes screening.',['pop_cdc']],
    me_gulf:['Inherited-condition evidence','Familial Mediterranean fever occurs in some Arab families; symptoms and family history, not heritage alone, guide evaluation.',['pop_fmf']],
    me_turkey:['Inherited-condition evidence','Familial Mediterranean fever and thalassemia are documented in some Turkish populations. Medical assessment and carrier screening depend on clinical context.',['pop_fmf','pop_thal']],
    me_armenia:['Inherited-condition evidence','Familial Mediterranean fever has increased prevalence in Armenian families; a confirmed diagnosis depends on symptoms and molecular findings.',['pop_fmf']],
    me_northafrica:['Inherited-condition evidence','Hemoglobin disorders and familial Mediterranean fever occur in some North African communities. No different BMI threshold is validated here.',['pop_fmf','pop_thal']],
    lat_mexico:['Population epidemiology','Hispanic and Latino subgroups differ in US cardiometabolic disease prevalence; identity does not reliably identify genetic ancestry or personal risk.',['pop_cdc']],
    lat_puerto:['Population epidemiology','US CDC reports found differences in coronary heart disease prevalence among Puerto Rican and Cuban adults. These do not imply an ancestry-specific ideal-weight formula.',['pop_cdc']],
    lat_cuba:['Population epidemiology','US CDC reports found differences in coronary heart disease prevalence among Cuban and Puerto Rican adults. These are group statistics, not personal probabilities.',['pop_cdc']],
    ind_greenland:['Genotype-specific evidence','A TBC1D4 variant was linked to greater type 2 diabetes risk in Greenlandic people carrying two copies. This does not establish your genotype or a different BMI cutoff.',['pop_tbc']],
    ind_caninuit:['Genotype-specific evidence','A CPT1A Arctic variant can affect fasting tolerance in some infants with certain genotypes. This is primarily a newborn/pediatric issue, not an adult diet recommendation.',['pop_cpt']],
    ind_inupiat:['Genotype-specific evidence','Some Alaska Native infant populations have elevated frequency of a CPT1A Arctic variant relevant to newborn screening. Ancestry alone cannot establish the genotype.',['pop_cpt']],
    pi_samoa:['Genetic association','CREBRF variation in Samoan cohorts was associated with higher BMI but lower odds of diabetes, illustrating why BMI is not an individual metabolic diagnosis.',['pop_samoa','pop_samoa_dm']],
    pi_maori:['Body-composition evidence','Research on Polynesian and Māori body composition shows BMI can misrepresent fat mass relative to some European reference groups. Waist and lab values add context.',['swinburn']],
    au_aboriginal:['Population health survey','A 2022–24 Australian First Nations survey identified important diabetes and nutrition findings; the figures combine social and clinical influences and are not genetic predictions.',['pop_abs']],
    au_torres:['Population health survey','Australian First Nations survey findings justify attention to cardiometabolic health, but combined data must not be mislabeled as Torres Strait Islander genetic risk.',['pop_abs']]
  };
  function populationNote(key) {
    var p=POP_EVIDENCE[key];
    if (!ANCESTRIES[key] || !ANCESTRIES[key].parent) return '';
    if (!p) return '<strong>Evidence: exploratory.</strong> No separately validated BMI or dietary rule for this selected subgroup; use family history, clinical results and guideline screening. '+cite(ANCESTRIES[key].group === 'lower' ? 'nice' : 'who_fact');
    return '<strong>Evidence: '+p[0]+'.</strong> '+p[1]+' '+cite(p[2]);
  }
  var HERITAGE_NOTES = {
    ashkenazi:'Inherited founder variants are documented in some Ashkenazi families. Genetic testing should be guided by family history and inclusive screening practices, not ethnic identity alone. '+cite('pop_acog'),
    sephardic:'Some Sephardic / Mizrahi Jewish populations have increased familial Mediterranean fever prevalence. Symptoms and family history, not ethnicity alone, guide evaluation. '+cite('pop_fmf'),
    frenchcanadian:'GeneReviews reports familial hypercholesterolemia in about 1 in 80 French Canadians. Personal LDL cholesterol and family history are the actionable factors. '+cite('pop_fh'),
    finnish:'Finnish founder-population genetics includes rare inherited disorders; specific family history matters more than the ancestry label. '+cite('pop_finn'),
    otherfounder:'Discuss any known familial variant or founder-associated condition with a clinician. This selection does not imply a diagnosis.'
  };
  function heritageNote(key) { return HERITAGE_NOTES[key] || ''; }

  function ancestryNote(key) {
    if (ANCESTRIES[key] && ANCESTRIES[key].parent) return ancestryNote(ANCESTRIES[key].parent);
    switch (key) {
      case 'east_asian': case 'south_asian': case 'se_asian': case 'mixed_asian':
        return 'A WHO expert consultation found that a substantial share of Asian people have high risk of type 2 diabetes and cardiovascular disease below BMI 25, and proposed public-health action points of 23 and 27.5; it kept the standard WHO cut-offs as the international classification and noted the observed-risk cut-off varies from 22 to 25 between Asian populations. ' + cite('who_asian') +
          ' NICE uses 23 / 27.5 for South Asian, Chinese and other Asian backgrounds. ' + cite('nice') +
          (key === 'south_asian' ? ' In an English cohort, the BMI with the same diabetes risk as BMI 30 in White adults was 23.9 for South Asian adults. ' + cite('caley') : '') +
          (key === 'east_asian' ? ' In an English cohort, the BMI with the same diabetes risk as BMI 30 in White adults was 26.9 for Chinese adults. ' + cite('caley') : '') +
          ' Some charts label BMI 25 as obesity for Asians: that comes from an earlier WHO Western Pacific report (2000), which proposed provisional cut-offs of 23 (overweight) and 25 (obesity); this page uses the later WHO 2004 / NICE / ADA 2026 value of 27.5. ' + cite('wpro') +
          (key === 'se_asian' ? ' Filipino-specific evidence is limited: in 332 rural Filipino adults, the BMI cut-offs that best matched cardiometabolic disease were 24 (men) and 23 (women), with waist 84 / 77 cm ' + cite('pagsisihan') + '; in 382 Filipino-American women aged 40-65, BMI, waist and waist-to-height predicted high blood pressure and diabetes about equally and only modestly, and Asian thresholds caught more cases but with many false positives ' + cite('battie') + '. Both are small cross-sectional studies; no Filipino-specific cut-offs are established.' : '');
      case 'african':
        return 'NICE recommends the lower thresholds (overweight 23-27.4, obesity 27.5+) for Black African and African-Caribbean backgrounds. ' + cite('nice') +
          ' The evidence behind this includes an English cohort of about 1.5 million adults, in which the BMI with the same type 2 diabetes risk as BMI 30 in White adults was 28.1 for Black adults. ' + cite('caley') +
          ' In the US, the ADA 2026 standards do not set lower BMI cut-offs for Black adults, so the standard 25 / 30 is used there. ' + cite('ada_obesity') +
          ' Body composition also differs: a meta-analysis found that American Black adults had a BMI about 1.3 higher than White adults at the same body-fat level, so BMI can slightly overstate body fat. ' + cite('deurenberg') +
          ' Choose "Other / not listed" if you prefer the WHO international cut-offs.';
      case 'middle_eastern':
        return 'NICE recommends the lower thresholds (overweight 23-27.4, obesity 27.5+) for Middle Eastern backgrounds. ' + cite('nice') +
          ' In an English cohort of about 1.5 million adults, the BMI with the same type 2 diabetes risk as BMI 30 in White adults was 26.6 for Arab adults (a small group: about 2,800 people). ' + cite('caley') +
          ' The ADA 2026 standards do not set lower cut-offs for Middle Eastern backgrounds. ' + cite('ada_obesity');
      case 'pacific':
        return 'Standard WHO cut-offs are used. At the same body-fat level, Polynesian adults had a BMI about 4.5 higher than White adults in a meta-analysis ' + cite('deurenberg') + ', and in a New Zealand study Polynesian (Maori and Samoan) adults had more lean mass relative to fat than Europeans ' + cite('swinburn') + ', so BMI may overstate body fat for some Pacific Islanders; the waist-to-height check is a useful cross-check.';
      case 'hispanic':
        return 'No major guideline (WHO, NICE, ADA 2026) sets separate BMI cut-offs for Hispanic / Latino adults, so the standard WHO cut-offs are used (healthy 18.5-24.9, overweight 25-29.9, obesity 30+). ' + cite(['who_fact', 'ada_obesity']);
      case 'native_american':
        return 'No major guideline (WHO, NICE, ADA 2026) sets separate BMI cut-offs for Native American / Indigenous American adults, so the standard WHO cut-offs are used (healthy 18.5-24.9, overweight 25-29.9, obesity 30+). ' + cite(['who_fact', 'ada_obesity']);
      case 'australian_indigenous':
        return 'Standard WHO international adult BMI cut-offs are retained. Australian First Nations health surveys do not establish separate validated ideal-weight thresholds. '+cite(['who_fact','pop_abs']);
      case 'european':
        return 'Standard WHO international adult cut-offs: underweight below 18.5, healthy 18.5-24.9, overweight 25-29.9, obesity 30 or more. ' + cite('who_fact') + ' NICE uses these for White adults and for groups it does not assign lower thresholds. ' + cite('nice');
      default:
        return 'Standard WHO international adult cut-offs: underweight below 18.5, healthy 18.5-24.9, overweight 25-29.9, obesity 30 or more. ' + cite('who_fact') + ' No ancestry-specific evidence is applied for this choice.';
    }
  }

  // ---------- Numbers & units ----------
  // Plain number. Accepts "6.5" and "6,5" (comma decimal). Returns null when empty, NaN when not a number.
  function parseNum(v) {
    if (v === null || v === undefined) return null;
    var s = String(v).trim();
    if (s === '') return null;
    if (/^[+-]?(\d+,\d+|,\d+)$/.test(s)) s = s.replace(',', '.');
    if (!/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(s)) return NaN;
    return Number(s);
  }

  // Unit words a user might type after a number.
  var UNIT_WORDS = [
    ['lb', /^(lb|lbs|pound|pounds|#)$/],
    ['kg', /^(kg|kgs|kilo|kilos|kilogram|kilograms|kilogramme|kilogrammes)$/],
    ['in', /^(in|ins|inch|inches|"|\u201d|\u2033|'')$/],
    ['cm', /^(cm|cms|centimeter|centimeters|centimetre|centimetres)$/]
  ];
  var UNIT_KIND = { lb: 'weight', kg: 'weight', 'in': 'length', cm: 'length' };
  function unitFromWord(w) {
    var x = w.toLowerCase().replace(/\.$/, '');
    for (var i = 0; i < UNIT_WORDS.length; i++) if (UNIT_WORDS[i][1].test(x)) return UNIT_WORDS[i][0];
    return null;
  }
  // Feet and inches: 5'10  5'10"  5' 10.5"  5 ft 10 in  5ft10  5-10  5 10  5'
  var FT = "(?:'|\u2019|\u2032|ft\\.?|feet|foot)";
  var INCH = '(?:"|\u201d|\u2033|\'\'|in\\.?|inch|inches)';
  var NUM = '(\\d+(?:[.,]\\d+)?)';
  var FT_IN_RE = new RegExp('^(\\d+)\\s*' + FT + '\\s*(?:' + NUM + '\\s*' + INCH + '?)?$', 'i');
  var FT_IN_BARE_RE = new RegExp('^(\\d)\\s*(?:-|\\s)\\s*' + NUM + '\\s*' + INCH + '?$', 'i');
  var WITH_UNIT_RE = /^([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+))\s*([A-Za-z"'#.\u201d\u2033\u2019\u2032]+)?$/;

  // Parses what a user typed into a measurement field.
  // kind: 'length' or 'weight'. allowFeetInches: true for height.
  // Returns { empty: true } | { error: message } | { value, unit (or null if none typed), feetInches }
  function parseMeasure(raw, kind, allowFeetInches) {
    var s = raw === null || raw === undefined ? '' : String(raw).trim();
    if (s === '') return { empty: true };
    var m;
    if (allowFeetInches && ((m = FT_IN_RE.exec(s)) || (m = FT_IN_BARE_RE.exec(s)))) {
      var ft = Number(m[1]), inch = m[2] ? Number(m[2].replace(',', '.')) : 0;
      if (ft < 3 || ft > 8) return { error: 'feet must be between 3 and 8 (you typed ' + ft + ').' };
      if (!(inch >= 0 && inch < 12)) return { error: 'inches must be at least 0 and less than 12 (you typed ' + inch + ').' };
      return { value: ft * 12 + inch, unit: 'in', feetInches: true, feet: ft, inches: inch };
    }
    m = WITH_UNIT_RE.exec(s);
    if (!m) return { error: allowFeetInches ? 'must be a number, or feet and inches like 5\'10".' : 'must be a number.' };
    var v = parseNum(m[1]);
    if (isNaN(v) || !isFinite(v)) return { error: 'must be a number.' };
    var unit = null;
    if (m[2]) {
      unit = unitFromWord(m[2]);
      if (!unit) {
        if (allowFeetInches && /^(ft|feet|foot|'|\u2019|\u2032)$/i.test(m[2].replace(/\.$/, ''))) return { error: 'please write feet and inches like 5\'10" (whole feet), or give the height in inches.' };
        return { error: 'unrecognised unit "' + m[2] + '".' };
      }
      if (UNIT_KIND[unit] !== kind) return { error: '"' + m[2] + '" is a ' + UNIT_KIND[unit] + ' unit, not a ' + kind + ' unit.' };
    }
    return { value: v, unit: unit, feetInches: false };
  }
  function toCm(v, unit) { return unit === 'in' ? v * IN_TO_CM : v; }
  function toKg(v, unit) { return unit === 'lb' ? v * LB_TO_KG : v; }
  function kgToLb(kg) { return kg / LB_TO_KG; }
  function cmToIn(cm) { return cm / IN_TO_CM; }
  function round(x, d) { var f = Math.pow(10, d || 0); return Math.round(x * f) / f; }

  // ---------- Validation ----------
  var CONDITIONS = ['diabetes', 'hypertension', 'high_chol', 'gout', 'lactose', 'celiac', 'hemochromatosis'];

  var UNIT_NAMES = { 'in': 'inches', cm: 'cm', lb: 'lb', kg: 'kg' };
  // ctx collects errors, warnings, invalid field ids and unit overrides for the whole form.
  function checkMeasure(field, name, raw, unit, units, toBase, limitKey, required, ctx) {
    var lim = LIMITS[limitKey];
    var bad = function (msg) { ctx.errors.push(msg); ctx.invalid.push(field); return null; };
    var p = parseMeasure(raw, units[0] === 'lb' ? 'weight' : 'length', field === 'height');
    if (p.empty) return required ? bad(name + ' is required.') : null;
    if (p.error) return bad(name + ': ' + p.error);
    if (units.indexOf(unit) < 0) return bad(name + ': unknown unit "' + unit + '".');
    var v = p.value;
    if (p.feetInches) ctx.warnings.push(name + ': read "' + String(raw).trim() + '" as ' + p.feet + ' ft ' + p.inches + ' in (' + v + ' in).' +
      (unit !== 'in' ? ' Unit switched to inches.' : ''));
    else if (p.unit && p.unit !== unit) ctx.warnings.push(name + ': you typed "' + String(raw).trim() + '", so the unit was switched to ' + UNIT_NAMES[p.unit] + '.');
    if (p.unit && p.unit !== unit) { ctx.unitOverrides[field] = p.unit; unit = p.unit; }
    if (v <= 0) return bad(name + ' must be greater than zero.');
    var base = toBase(v, unit);
    if (base < lim[0] || base > lim[1]) {
      var other = units[0] === unit ? units[1] : units[0];
      var altBase = toBase(v, other);
      var hint = (altBase >= lim[0] && altBase <= lim[1]) ? ' Did you mean ' + other + '?' : '';
      if (field === 'height' && unit === 'in' && v >= 3 && v < 9) hint += ' For feet and inches, type it like 5\'10".';
      return bad(name + ' of ' + v + ' ' + unit + ' is outside the plausible adult range (' +
        describeRange(lim, units, toBase) + ').' + hint);
    }
    return base;
  }
  function describeRange(lim, units, toBase) {
    // units[0] is metric for every field here except weight; show both
    var metric = units.indexOf('cm') >= 0 ? 'cm' : 'kg';
    var imperial = metric === 'cm' ? 'in' : 'lb';
    var f = metric === 'cm' ? cmToIn : kgToLb;
    return round(lim[0], 0) + '-' + round(lim[1], 0) + ' ' + metric + ' / ' + round(f(lim[0]), 1) + '-' + round(f(lim[1]), 1) + ' ' + imperial;
  }

  function validate(raw) {
    var ctx = { errors: [], warnings: [], invalid: [], unitOverrides: {} };
    var errors = ctx.errors, warnings = ctx.warnings, invalid = ctx.invalid;
    var sex = raw.sex;
    if (sex !== 'male' && sex !== 'female') { errors.push('Please choose Sex: male or female (the frame and ideal-weight formulas are sex-specific).'); invalid.push('sex'); }
    var heightCm = checkMeasure('height', 'Height', raw.height, raw.heightUnit, ['in', 'cm'], toCm, 'heightCm', true, ctx);
    var weightKg = checkMeasure('weight', 'Weight', raw.weight, raw.weightUnit, ['lb', 'kg'], toKg, 'weightKg', true, ctx);
    var wristCm  = checkMeasure('wrist', 'Wrist circumference', raw.wrist, raw.wristUnit, ['in', 'cm'], toCm, 'wristCm', true, ctx);
    var elbowCm  = checkMeasure('elbow', 'Elbow breadth', raw.elbow, raw.elbowUnit, ['in', 'cm'], toCm, 'elbowCm', false, ctx);
    var waistCm  = checkMeasure('waist', 'Waist circumference', raw.waist, raw.waistUnit, ['in', 'cm'], toCm, 'waistCm', false, ctx);

    if (heightCm && waistCm) {
      var wh = waistCm / heightCm;
      if (wh < 0.3 || wh > 1.2) invalid.push('waist'), errors.push('Height and waist together give a waist-to-height ratio of ' + round(wh, 2) + ', which is outside the range seen in adults (about 0.35-1.1). Please re-check the waist value and its unit.');
    }
    if (heightCm && wristCm) {
      var r = heightCm / wristCm;
      if (r < 6 || r > 15) invalid.push('height', 'wrist'), errors.push('Height and wrist together give a height/wrist ratio of ' + round(r, 1) + ', which is outside the range seen in adults (about 8-13). Please re-check both values and their units.');
    }

    // Ancestry: single, or mixed makeup with percentages
    var ancestries = [], identifyWith = null, cutoffMode = 'single';
    if (raw.ancestryMode === 'mixed') {
      var seen = {}, total = 0;
      (raw.makeup || []).forEach(function (row, i) {
        var hasPct = !(row.pct === null || row.pct === undefined || String(row.pct).trim() === '');
        var n = i + 1;
        if (!hasPct) { if (ANCESTRIES[row.ancestry]) { errors.push('Ancestry row ' + n + ': enter a percentage (or clear the ancestry).'); invalid.push('mixPct' + n); } return; }
        var p = parseNum(String(row.pct).replace(/\s*%$/, ''));
        if (!ANCESTRIES[row.ancestry]) { errors.push('Ancestry row ' + n + ': choose an ancestry.'); invalid.push('mixAnc' + n); return; }
        if (isNaN(p) || p <= 0 || p > 100) { errors.push('Ancestry row ' + n + ': percentage must be more than 0 and at most 100.'); invalid.push('mixPct' + n); return; }
        if (seen[row.ancestry]) { errors.push('"' + ANCESTRIES[row.ancestry].label + '" is listed more than once - combine those rows.'); invalid.push('mixAnc' + n); return; }
        seen[row.ancestry] = true;
        total += p;
        ancestries.push({ key: row.ancestry, pct: p });
      });
      if (ancestries.length === 0 && !errors.some(function (e) { return /^Ancestry row/.test(e); })) { errors.push('Mixed ancestry: enter at least one ancestry with a percentage.'); invalid.push('mixAnc1', 'mixPct1'); }
      else if (ancestries.length > 0 && Math.abs(total - 100) > 1) invalid.push('mixPct1', 'mixPct2', 'mixPct3'), errors.push('Mixed ancestry percentages add up to ' + round(total, 1) + '%. They need to total 100% (within 1% for rounding).');
      // Default (ADA approach): the background the person identifies with; if none is chosen yet, the
      // one with the largest share (ties: first entered) so a result always shows.
      cutoffMode = raw.cutoffMode === 'blend' ? 'blend' : 'identify';
      if (cutoffMode === 'identify' && ancestries.length) {
        var picked = ancestries.filter(function (a) { return a.key === raw.identifyWith; })[0];
        if (!picked && raw.identifyWith) { errors.push('Cut-offs: the background you identify with must be one of the backgrounds you entered.'); invalid.push('identifyWith'); }
        else if (!picked) { picked = ancestries[0]; ancestries.forEach(function (a) { if (a.pct > picked.pct) picked = a; }); }
        if (picked) identifyWith = picked.key;
      }
    } else {
      if (!ANCESTRIES[raw.ancestry]) { errors.push('Please choose an ancestry (or "Other / not listed").'); invalid.push('ancestry'); }
      else ancestries.push({ key: raw.ancestry, pct: 100 });
    }

    var conditions = (raw.conditions || []).filter(function (c) { return CONDITIONS.indexOf(c) >= 0; });

    // Age (required): adults only.
    var age = null, ageRaw = raw.age === null || raw.age === undefined ? '' : String(raw.age).trim().replace(/\s*(years?|yrs?|y)\.?$/i, '');
    if (ageRaw === '') { errors.push('Please enter your age in years (this calculator is for adults).'); invalid.push('age'); }
    else {
      age = parseNum(ageRaw);
      if (isNaN(age)) { errors.push('Age: "' + String(raw.age).trim() + '" is not a number. Enter your age in years, e.g. 40.'); invalid.push('age'); age = null; }
      else if (age < LIMITS.age[0]) { errors.push('This calculator is for adults (18 and over). BMI cut-offs for children and teens depend on age and sex and use growth charts; please ask a pediatrician.'); invalid.push('age'); age = null; }
      else if (age > LIMITS.age[1]) { errors.push('Age ' + age + ' is outside the range this calculator accepts (18-120). Please re-check it.'); invalid.push('age'); age = null; }
    }
    var pregnant = sex === 'female' && !!raw.pregnant;

    if (errors.length) return { ok: false, errors: errors, warnings: warnings, invalid: invalid, unitOverrides: ctx.unitOverrides };
    if (age >= 65) warnings.push('Age 65 or over: BMI is less accurate in older adults (muscle and height are lost with age, so the same BMI can mean more body fat), and the BMI linked to the lowest risk tends to be somewhat higher. Treat the ranges below as rough and discuss targets with your clinician.');
    if (heightCm < 152.4) warnings.push('The ideal-body-weight formulas were published only for heights of 5 ft (152.4 cm) and over, so for your height only the BMI-based range is used.');
    return { ok: true, errors: [], warnings: warnings, invalid: [], unitOverrides: ctx.unitOverrides, values: {
      sex: sex, heightCm: heightCm, weightKg: weightKg, wristCm: wristCm, elbowCm: elbowCm, waistCm: waistCm,
      ancestries: ancestries, cutoffMode: cutoffMode, identifyWith: identifyWith, conditions: conditions, age: age, pregnant: pregnant } };
  }

  // ---------- BMI ----------
  function bmi(weightKg, heightCm) { var m = heightCm / 100; return weightKg / (m * m); }
  function weightForBmi(b, heightCm) { var m = heightCm / 100; return b * m * m; }

  // Classification uses BMI rounded to 1 decimal so the category always matches the number shown.
  // Accepts a group key ('standard' / 'lower') or a group object (e.g., a blended mix).
  function resolveGroup(group) {
    var g = typeof group === 'string' ? GROUPS[group] : group;
    if (!g) throw new Error('Unknown BMI group: ' + group);
    return g;
  }
  function classifyBMI(b, group) {
    var g = resolveGroup(group);
    var x = round(b, 1);
    var i = x < g.healthyLow ? 0 : x < g.overweight ? 1 : x < g.obese ? 2 : 3;
    return { index: i, label: g.labels[i], bmiShown: x };
  }

  // Mixed ancestry: the overweight and obesity cut-offs are weighted by the percentages entered
  // (linear blend between the standard and lower cut-offs). Percentages are normalised by their
  // total, so a makeup that sums to 99 or 101 (allowed for rounding) is treated as 100.
  // The blend is this calculator's own method; no guideline defines cut-offs for mixed ancestry.
  function groupForAncestries(list) {
    var total = 0, lower = 0;
    list.forEach(function (a) { total += a.pct; if (ANCESTRIES[a.key].group === 'lower') lower += a.pct; });
    var share = total > 0 ? lower / total : 0;           // fraction 0..1 in lower-cut-off groups
    var lowerShare = round(share * 100, 1);
    var std = GROUPS.standard, low = GROUPS.lower, g;
    if (share === 0) g = std;
    else if (share === 1) g = low;
    else g = { key: 'blended', healthyLow: std.healthyLow,
      overweight: round(std.overweight + (low.overweight - std.overweight) * share, 1),
      obese: round(std.obese + (low.obese - std.obese) * share, 1),
      name: 'blended cut-offs (' + lowerShare + '% weighted to the lower cut-offs)', labels: low.labels };
    return { key: g.key, group: g, share: share, lowerShare: lowerShare, mixedGroups: share > 0 && share < 1 };
  }

  function healthyBand(heightCm, group) {
    var g = resolveGroup(group);
    var hiBmi = round(g.overweight - 0.1, 1); // 24.9 or 22.9
    return { lowBmi: g.healthyLow, highBmi: hiBmi,
      lowKg: weightForBmi(g.healthyLow, heightCm), highKg: weightForBmi(hiBmi, heightCm) };
  }

  // ---------- Frame size ----------
  var R_CUTS = { male: { small: 10.4, large: 9.6 }, female: { small: 11.0, large: 10.1 } };
  function frameFromWrist(heightCm, wristCm, sex) {
    var r = round(heightCm / wristCm, 2);         // classify the value that is displayed
    var c = R_CUTS[sex];
    var size = r > c.small ? 'Small' : r >= c.large ? 'Medium' : 'Large';
    return { size: size, r: r, method: 'wrist' };
  }
  // Wrist circumference (cm) at which the frame class changes, for a given height
  function wristCutoffs(heightCm, sex) {
    var c = R_CUTS[sex];
    return { smallBelowCm: heightCm / c.small, largeAboveCm: heightCm / c.large };
  }

  // MetLife 1983 medium-frame elbow breadth (inches), by height in 1-inch heels (inches). [minHeel, maxHeelExclusive, lo, hi]
  var ELBOW_TABLE = {
    male:   [[62, 64, 2.5, 2.875], [64, 68, 2.625, 2.875], [68, 72, 2.75, 3.0], [72, 76, 2.75, 3.125], [76, Infinity, 2.875, 3.25]],
    female: [[58, 60, 2.25, 2.5], [60, 64, 2.25, 2.5], [64, 68, 2.375, 2.625], [68, 72, 2.375, 2.625], [72, Infinity, 2.5, 2.75]]
  };
  function frameFromElbow(heightCm, elbowCm, sex) {
    var heel = cmToIn(heightCm) + 1;   // table heights include 1-inch heels
    var rows = ELBOW_TABLE[sex];
    var row = null, outside = false;
    for (var i = 0; i < rows.length; i++) if (heel >= rows[i][0] && heel < rows[i][1]) { row = rows[i]; break; }
    if (!row) { row = rows[0]; outside = true; }  // shorter than the table: nearest row, flagged
    var e = round(cmToIn(elbowCm), 3);
    var size = e < row[2] ? 'Small' : e > row[3] ? 'Large' : 'Medium';
    return { size: size, mediumIn: [row[2], row[3]], outsideTable: outside, method: 'elbow' };
  }

  // ---------- Ideal-body-weight formulas (kg). Published for height >= 60 in. ----------
  function ibwFormulas(heightCm, sex) {
    var hIn = cmToIn(heightCm);
    if (hIn < 60) return null;
    var x = hIn - 60;
    if (sex === 'male') return {
      hamwi: (106 + 6 * x) * LB_TO_KG, devine: 50 + 2.3 * x, robinson: 51.65 + 1.85 * x, miller: 56.2 + 1.41 * x };
    return { hamwi: (100 + 5 * x) * LB_TO_KG, devine: 45.5 + 2.3 * x, robinson: 48.67 + 1.65 * x, miller: 53.1 + 1.36 * x };
  }
  var HAMWI_FRAME = { Small: 0.9, Medium: 1.0, Large: 1.1 };

  // Suggested range = where the published formulas (Hamwi frame-adjusted as published) overlap the
  // ancestry-specific healthy BMI band. This combination is THIS TOOL'S method, not a clinical standard.
  function suggestedRange(heightCm, sex, frames, group) {
    var band = healthyBand(heightCm, group);
    var f = ibwFormulas(heightCm, sex);
    if (!f) return { method: 'band', reason: 'short', lowKg: band.lowKg, highKg: band.highKg, band: band, formulas: null };
    var vals = [f.devine, f.robinson, f.miller];
    var hamwiAdj = frames.map(function (s) { return f.hamwi * HAMWI_FRAME[s]; });
    vals = vals.concat(hamwiAdj);
    var fLo = Math.min.apply(null, vals), fHi = Math.max.apply(null, vals);
    // Each end of the formula range is clamped into the band. Where they overlap this is the overlap;
    // if every formula lies above (below) the band, both ends meet at the band's top (bottom) edge.
    // Clamping keeps the result monotonic in frame size: a larger frame never gets a lower range.
    var clamp = function (x) { return Math.min(Math.max(x, band.lowKg), band.highKg); };
    var out = { formulas: f, hamwiAdjusted: hamwiAdj, formulaLowKg: fLo, formulaHighKg: fHi, band: band,
      lowKg: clamp(fLo), highKg: clamp(fHi) };
    if (fLo > band.highKg) { out.method = 'edge'; out.reason = 'formulas_above'; }
    else if (fHi < band.lowKg) { out.method = 'edge'; out.reason = 'formulas_below'; }
    else out.method = 'overlap';
    return out;
  }

  // ---------- Diabetes buffer zone (lower-cut-off ancestry) ----------
  // WHO 2004: in Asian populations the BMI at which risk is observed "varies from 22 kg/m2 to 25 kg/m2";
  // a Thai (Southeast Asian) cohort found diabetes risk significant from BMI ~21.6 (men) / ~20.0 (women)
  // and concluded a cut-point of 22 is justified; diabetes risk rises continuously through 18.5-23 in
  // Asian cohorts. So for lower-cut-off groups the buffer zone is BMI 22.0 up to the 23 cut-off. For a
  // mix, its start is blended like the other cut-offs (25 for standard groups, i.e. no zone; 22 for
  // lower groups). The zone is always DISPLAYED; it only CAPS the suggested range when type 2
  // diabetes / prediabetes / family history is selected. Mortality evidence (lowest from about BMI 20
  // up to 25) argues against going lower than this, so nothing moves the floor.
  var BUFFER_START_LOWER_BMI = 22.0;
  // The BMI 22 evidence is from Asian populations, so the zone uses the share of ADA-Asian backgrounds
  // only (not Black African / Middle Eastern, which have lower cut-offs from NICE but no such evidence here).
  function bufferZone(grp, heightCm, asianShare) {
    var share = asianShare;
    if (!(share > 0)) return null;
    var start = round(GROUPS.standard.overweight + (BUFFER_START_LOWER_BMI - GROUPS.standard.overweight) * share, 1);
    var top = round(grp.group.overweight - 0.1, 1);
    if (start > top) return null;
    var capBmi = round(start - 0.1, 1);
    return { startBmi: start, topBmi: top, capBmi: capBmi,
      startKg: weightForBmi(start, heightCm), topKg: weightForBmi(top, heightCm), capKg: weightForBmi(capBmi, heightCm) };
  }
  // Apply the cap to a suggested range: both ends are limited to the cap (same clamping as the band,
  // so a larger frame never gets a lower range). If the whole range is above the cap, the result is the
  // cap itself. Never empty, never below the healthy floor (capBmi >= 21.9).
  function bufferedRange(suggested, zone) {
    if (!zone || suggested.highKg <= zone.capKg) return null;
    return { lowKg: Math.min(suggested.lowKg, zone.capKg), highKg: zone.capKg,
      method: suggested.lowKg <= zone.capKg ? 'capped' : 'at_cap', capBmi: zone.capBmi };
  }

  // ---------- Waist-to-height (NICE NG246 1.9.14) ----------
  function waistToHeight(waistCm, heightCm) {
    var w = round(waistCm / heightCm, 2);
    var cat = w < 0.4 ? 'Below 0.4 (NICE gives no category for this)' : w < 0.5 ? 'Healthy central adiposity (0.4-0.49)' :
      w < 0.6 ? 'Increased central adiposity (0.5-0.59): increased health risks' : 'High central adiposity (0.6 or more): further increased health risks';
    return { ratio: w, category: cat, index: w < 0.4 ? -1 : w < 0.5 ? 0 : w < 0.6 ? 1 : 2 };
  }

  // ---------- ADA 2026 obesity diagnosis with waist (Table 3.1, recs 3.3a-d) ----------
  // In the BMI band where waist matters (Asian 23-27.4, non-Asian 25-29.9), central adiposity
  // (WHtR >= 0.5, or WC at or above the sex threshold) makes it obesity, otherwise overweight.
  // At or above the upper BMI it is obesity by BMI alone; below the band waist is information only.
  // This is a classification note; it never changes the suggested weight range.
  var ADA_WAIST = {
    asian:     { bmiLow: 23, bmiObese: 27.5, wcCm: { female: 80, male: 90 } },
    non_asian: { bmiLow: 25, bmiObese: 30, wcCm: { female: 88, male: 102 } }
  };
  // One background: its ADA criteria. A percentage blend of Asian and non-Asian backgrounds has no ADA
  // rule, so both classifications are computed and both are shown when they differ (no cut-off on the share).
  function adaAsianShare(list) {
    var total = 0, asian = 0;
    list.forEach(function (a) { total += a.pct; if (ANCESTRIES[a.key].adaAsian) asian += a.pct; });
    return total > 0 ? asian / total : 0;
  }
  function adaWaistClass(bmiValue, waistCm, heightCm, sex, bg) {
    var t = ADA_WAIST[bg];
    if (!t) throw new Error('Unknown ADA background: ' + bg);
    var whtr = round(waistCm / heightCm, 3), b = round(bmiValue, 1);
    var wcCm = t.wcCm[sex];
    var whtrHigh = whtr >= 0.5, wcHigh = round(waistCm, 2) >= wcCm;
    var zone = b < t.bmiLow ? 'below' : b < t.bmiObese ? 'waist_band' : 'above';
    var category = zone === 'below' ? null : zone === 'above' ? 'Obesity' : (whtrHigh || wcHigh ? 'Obesity' : 'Overweight');
    return { background: bg, bmiShown: b, bmiLow: t.bmiLow, bmiObese: t.bmiObese,
      bmiBandTop: round(t.bmiObese - 0.1, 1), wcThresholdCm: wcCm, whtr: whtr, whtrHigh: whtrHigh, wcHigh: wcHigh,
      zone: zone, category: category, halfHeightCm: heightCm / 2 };
  }

  function adaWaist(bmiValue, waistCm, heightCm, sex, asianShare) {
    var bgs = asianShare >= 1 ? ['asian'] : asianShare <= 0 ? ['non_asian'] : ['asian', 'non_asian'];
    var classes = bgs.map(function (bg) { return adaWaistClass(bmiValue, waistCm, heightCm, sex, bg); });
    return { asianShare: asianShare, classes: classes,
      differ: classes.length > 1 && (classes[0].category !== classes[1].category || classes[0].zone !== classes[1].zone) };
  }

  // ---------- Condition-based weight guidance ----------
  // No guideline sets a different target for people ALREADY in the healthy range because of a condition
  // or family history; inside the band, see the diabetes buffer zone and the condition weighting below.
  // Above the band, guideline weight-loss goals are computed from current weight.
  function conditionWeightGuidance(conditions, weightKg, bmiClassIndex) {
    var metabolic = conditions.filter(function (c) { return ['diabetes', 'hypertension', 'high_chol', 'gout'].indexOf(c) >= 0; });
    var out = { applies: metabolic.length > 0, overBand: bmiClassIndex >= 2, items: [], goal: null };
    if (!out.applies) return out;
    if (out.overBand) {
      out.goal = { lossLowKg: weightKg * 0.05, lossHighKg: weightKg * 0.07, toLowKg: weightKg * 0.93, toHighKg: weightKg * 0.95 };
    }
    if (metabolic.indexOf('diabetes') >= 0) out.items.push('Type 2 diabetes risk / prediabetes: in people with overweight or obesity, losing 5-7% of body weight reduces progression from prediabetes to diabetes and improves glucose, blood pressure and lipids. ' + cite('ada8') + ' The Diabetes Prevention Program lifestyle arm (goal: at least 7% weight loss plus 150 min/week activity) cut diabetes incidence by 58% versus placebo. ' + cite('dpp'));
    if (metabolic.indexOf('hypertension') >= 0) out.items.push('High blood pressure: the 2025 AHA/ACC guideline recommends maintaining or achieving a healthy weight as part of lifestyle treatment for all adults. ' + cite('aha'));
    if (metabolic.indexOf('high_chol') >= 0) out.items.push('Cholesterol: in adults with overweight or obesity, each kilogram lost through lifestyle change was associated with about 4 mg/dL lower triglycerides, 1.3 mg/dL lower LDL and 0.5 mg/dL higher HDL at 12 months. ' + cite('hasan') + ' Familial hypercholesterolemia usually needs medical treatment; diet and weight alone are rarely enough.');
    if (metabolic.indexOf('gout') >= 0) out.items.push('Gout: the 2020 ACR guideline conditionally recommends a weight-loss program for people with gout who are overweight or obese. ' + cite('acr_gout'));
    return out;
  }


  // ---------- Food guidance ----------
  function foodRecs(ancestryKeys, conditions) {
    var recs = [];
    var has = function (k) { return ancestryKeys.some(function (a) { return a===k || (ANCESTRIES[a] && ANCESTRIES[a].parent===k); }); };
    var northernEuropean = ancestryKeys.some(function (a) { return ['european','eu_scandi','eu_brit','eu_finn'].indexOf(a)>=0; });
    var anyAsian = ['east_asian', 'south_asian', 'se_asian', 'mixed_asian'].some(has);
    if (anyAsian || has('african')) recs.push('<strong>Lactose:</strong> lactase non-persistence (reduced ability to digest lactose as an adult) is common in many ' + (anyAsian && has('african') ? 'East Asian and African-descended' : anyAsian ? 'East Asian' : 'African-descended') + ' populations. If dairy causes symptoms, lactose-free milk, hard cheese, yogurt, or calcium-fortified alternatives are options. ' + cite('mattar'));
    if (northernEuropean) recs.push('<strong>Lactose:</strong> lactase persistence is more common in Northern European populations, so many people of European ancestry digest dairy well - but not all. ' + cite('mattar'));
    if (northernEuropean) recs.push('<strong>Iron:</strong> about 1 in 15 people of Northern European ancestry carry at least one copy of the HFE C282Y variant linked to hereditary hemochromatosis. Avoid iron supplements unless a blood test shows you need them. ' + cite('niddk_hemo'));
    if (anyAsian) recs.push('<strong>Starch:</strong> people from populations with traditionally high-starch diets (such as agricultural societies) have, on average, more copies of the salivary amylase gene AMY1 than people from traditionally low-starch populations. This is a population average and does not tell an individual how much starch to eat. ' + cite('perry'));
    if (has('south_asian')) recs.push('<strong>Omega fatty acids:</strong> a FADS2 "insertion" variant linked to greater conversion of plant fatty acids into long-chain forms is very common in South Asians (about 70% carry two copies) and appears to reflect adaptation to plant-based diets. Its practical dietary meaning for an individual is not established; including omega-3 sources (fish, or flax/chia/walnuts/algae for vegetarians) is reasonable. ' + cite(['kothapalli', 'frontiers']));
    if (has('east_asian')) recs.push('<strong>Alcohol:</strong> about 36% of East Asians (Japanese, Chinese, Korean) have the alcohol "flushing" reaction, mainly caused by inherited ALDH2 deficiency. People who flush and drink regularly have a much higher risk of esophageal cancer, so flushing is a reason to limit or avoid alcohol. ' + cite(['brooks', 'yoshida']));
    if (has('african')) recs.push('<strong>Blood pressure:</strong> in the US, high blood pressure is more common in non-Hispanic Black adults (59.6%) than in the other US groups reported (about 43-45%). The DASH pattern - vegetables, fruits, low-fat dairy, whole grains, nuts, less sodium - lowers blood pressure. ' + cite(['cdc_bp', 'dash']));
    if (has('pacific')) recs.push('<strong>Body composition:</strong> BMI may overstate body fat in some Polynesian adults; waist-to-height ratio and blood tests (glucose, lipids) give a better picture of metabolic risk. ' + cite(['deurenberg', 'swinburn']));

    if (conditions.indexOf('diabetes') >= 0) recs.push('<strong>Type 2 diabetes risk:</strong> ADA recommends eating patterns that include non-starchy vegetables, whole fruits, legumes, lean proteins, whole grains, nuts and seeds, and low-fat dairy or alternatives, and that minimize red meat, sugar-sweetened drinks, sweets, refined grains and ultra-processed foods; choose high-fiber carbohydrate sources (at least 14 g fiber per 1,000 kcal). ' + cite('ada5'));
    if (conditions.indexOf('hypertension') >= 0) recs.push('<strong>Blood pressure:</strong> DASH eating plan - fruits, vegetables, whole grains, low-fat dairy, fish, poultry, beans, nuts; with a sodium limit of 2,300 mg or 1,500 mg per day. ' + cite(['dash', 'aha']));
    if (conditions.indexOf('high_chol') >= 0) recs.push('<strong>Cholesterol:</strong> less saturated and trans fat, more soluble fiber (oats, beans, fruit), nuts, and plant sterols/stanols lower LDL cholesterol. ' + cite(['statpearls', 'nccih']));
    if (conditions.indexOf('gout') >= 0) recs.push('<strong>Gout:</strong> the 2020 ACR guideline conditionally recommends limiting alcohol, purine intake (e.g., organ meats, some seafood) and high-fructose corn syrup. It conditionally recommends <em>against</em> vitamin C supplements, and found the evidence on cherries too weak to recommend. ' + cite('acr_gout'));
    if (conditions.indexOf('lactose') >= 0) recs.push('<strong>Lactose intolerance:</strong> lactose-free products, hard cheeses, yogurt with live cultures, or calcium- and vitamin D-fortified alternatives. ' + cite('mattar'));
    if (conditions.indexOf('celiac') >= 0) recs.push('<strong>Celiac disease:</strong> a gluten-free diet for life. If you have not been tested, talk to a doctor before cutting out gluten, because avoiding it first can make test results inaccurate. Meat, fish, fruits, vegetables, rice and potatoes (without additives) are naturally gluten-free, as are flours made from rice, corn, potatoes, soy, beans, quinoa or buckwheat. ' + cite('niddk_celiac'));
    if (conditions.indexOf('hemochromatosis') >= 0) recs.push('<strong>Hemochromatosis:</strong> your doctor may advise avoiding iron supplements, vitamin C supplements (they increase iron absorption), and raw or undercooked shellfish. In most cases treatment is regular blood removal (phlebotomy). ' + cite(['niddk_hemo_diet', 'niddk_hemo_tx']));
    if (recs.length === 0) recs.push('No ancestry- or condition-specific notes for your selections. General healthy-eating guidance applies.');
    return recs;
  }

  // ---------- Full calculation ----------
  function calculate(values) {
    var v = values;
    // Cut-offs come from the percentage blend (default; calculator's own method) or, for a mixed
    // makeup, from the one background the person identifies with (the ADA 2026 approach).
    var cutoffAncestries = v.identifyWith ? [{ key: v.identifyWith, pct: 100 }] : v.ancestries;
    if (v.pregnant) {
      // No weight range in pregnancy or while breastfeeding: these BMI cut-offs and formulas do not apply.
      return { noRange: 'pregnancy', bmi: bmi(v.weightKg, v.heightCm), cutoffAncestries: cutoffAncestries,
        food: foodRecs(v.ancestries.map(function (a) { return a.key; }), v.conditions) };
    }
    var grp = groupForAncestries(cutoffAncestries);
    var b = bmi(v.weightKg, v.heightCm);
    var cls = classifyBMI(b, grp.group);
    var whoCls = classifyBMI(b, 'standard');
    var wf = frameFromWrist(v.heightCm, v.wristCm, v.sex);
    var ef = v.elbowCm ? frameFromElbow(v.heightCm, v.elbowCm, v.sex) : null;
    var frames = [wf.size];
    if (ef && frames.indexOf(ef.size) < 0) frames.push(ef.size);
    var band = healthyBand(v.heightCm, grp.group);
    var sug = suggestedRange(v.heightCm, v.sex, frames, grp.group);
    // Order: (1) ancestry band, (2) formulas with frame, (3) overlap = suggested, (4) diabetes buffer cap.
    var zone = bufferZone(grp, v.heightCm, adaAsianShare(cutoffAncestries));
    var buffered = v.conditions.indexOf('diabetes') >= 0 ? bufferedRange(sug, zone) : null;
    var altBands = null;
    if (grp.mixedGroups) altBands = { standard: healthyBand(v.heightCm, 'standard'), lower: healthyBand(v.heightCm, 'lower') };
    return {
      bmi: b, bmiClass: cls, cutoffMode: v.identifyWith ? 'identify' : (v.ancestries.length > 1 || v.cutoffMode === 'blend' ? 'blend' : 'single'),
      cutoffAncestries: cutoffAncestries, whoClass: whoCls, group: grp, wristFrame: wf, elbowFrame: ef, frames: frames,
      framesAgree: !ef || ef.size === wf.size,
      band: band, suggested: sug, altBands: altBands, bufferZone: zone, buffered: buffered,
      waist: v.waistCm ? waistToHeight(v.waistCm, v.heightCm) : null,
      adaWaist: v.waistCm ? adaWaist(b, v.waistCm, v.heightCm, v.sex, adaAsianShare(cutoffAncestries)) : null,
      // NICE gives Black African / Middle Eastern backgrounds lower BMI cut-offs; ADA's lower criteria are for Asian backgrounds only.
      asianShare: adaAsianShare(cutoffAncestries),
      niceAdaDiffer: cutoffAncestries.some(function (a) { return ANCESTRIES[a.key].group === 'lower' && !ANCESTRIES[a.key].adaAsian; }),
      conditionWeight: conditionWeightGuidance(v.conditions, v.weightKg, cls.index),
      food: foodRecs(v.ancestries.map(function (a) { return a.key; }), v.conditions)
    };
  }

  // Data for the wrist (0.1 in steps) vs BMI chart
  function chartSeries(heightCm, sex, group, fromIn, toIn) {
    var rows = [];
    for (var t = Math.round(fromIn * 10); t <= Math.round(toIn * 10); t++) {
      var wIn = t / 10, wCm = wIn * IN_TO_CM;
      var fr = frameFromWrist(heightCm, wCm, sex);
      var s = suggestedRange(heightCm, sex, [fr.size], group);
      rows.push({ wristIn: wIn, wristCm: wCm, frame: fr.size, r: fr.r, lowKg: s.lowKg, highKg: s.highKg, method: s.method,
        lowBmi: bmi(s.lowKg, heightCm), highBmi: bmi(s.highKg, heightCm) });
    }
    return rows;
  }

  root.EBOW = {
    IN_TO_CM: IN_TO_CM, LB_TO_KG: LB_TO_KG, LIMITS: LIMITS, REFS: REFS, GROUPS: GROUPS, ANCESTRIES: ANCESTRIES,
    POP_REGIONS: POP_REGIONS, POP_EVIDENCE: POP_EVIDENCE, populationNote: populationNote, heritageNote: heritageNote,
    cite: cite, parseNum: parseNum, parseMeasure: parseMeasure, toCm: toCm, toKg: toKg, kgToLb: kgToLb, cmToIn: cmToIn, round: round,
    validate: validate, bmi: bmi, weightForBmi: weightForBmi, classifyBMI: classifyBMI, groupForAncestries: groupForAncestries,
    healthyBand: healthyBand, frameFromWrist: frameFromWrist, wristCutoffs: wristCutoffs, frameFromElbow: frameFromElbow,
    ibwFormulas: ibwFormulas, suggestedRange: suggestedRange, waistToHeight: waistToHeight,
    conditionWeightGuidance: conditionWeightGuidance, foodRecs: foodRecs, ancestryNote: ancestryNote,
    bufferZone: bufferZone, bufferedRange: bufferedRange, BUFFER_START_LOWER_BMI: BUFFER_START_LOWER_BMI,
    ADA_WAIST: ADA_WAIST, adaAsianShare: adaAsianShare, adaWaistClass: adaWaistClass, adaWaist: adaWaist,
    resolveGroup: resolveGroup, calculate: calculate, chartSeries: chartSeries
  };
})(typeof window !== 'undefined' ? window : globalThis);
