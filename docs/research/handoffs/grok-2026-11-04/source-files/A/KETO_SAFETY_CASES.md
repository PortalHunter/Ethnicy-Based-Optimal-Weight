# KETO_SAFETY_CASES.md

15 synthetic edge cases where generic keto/low-carb or intermittent fasting suggestions must be suppressed in an educational app. These are not real patients. Suppression criteria are based on documented safety considerations in guidelines (e.g., ADA 2026 §5), trial limitations, and known risks (SGLT2 ketoacidosis, hypoglycemia with insulin/secretagogues, nutrient adequacy, pregnancy, kidney disease, eating disorders, etc.). No personalization from self-reported ancestry. Ideal-weight equations are not used or referenced.

Each case includes: scenario, why suppress, relevant evidence anchor, and recommended app behavior (withhold / context_only / redirect to clinician).

1. **SGLT2 inhibitor use**: Adult with T2DM on an SGLT2 inhibitor (e.g., empagliflozin) considering very-low-carb/ketogenic pattern.  
   Why suppress: ADA 2026 explicitly advises against ketogenic patterns due to euglycemic diabetic ketoacidosis risk; provide ketone monitoring tools if used.  
   Anchor: ADA SOC 2026 §5.  
   Behavior: Withhold keto/IF suggestions; flag for clinician discussion.

2. **Pregnancy**: Person who is pregnant or planning pregnancy.  
   Why suppress: Very-low-carbohydrate patterns not currently recommended in pregnancy (nutrient needs, fetal considerations).  
   Anchor: ADA 2026.  
   Behavior: Withhold; redirect to prenatal care team.

3. **Breastfeeding/lactation**: Person who is breastfeeding.  
   Why suppress: Not currently recommended; energy and nutrient demands.  
   Anchor: ADA 2026.  
   Behavior: Withhold.

4. **Type 1 diabetes on insulin**: Adult or adolescent with type 1 diabetes on insulin therapy.  
   Why suppress: Hypoglycemia risk with rapid carb reduction; requires intensive monitoring and dose adjustment. Classic ketoacidosis risk if insulin omitted.  
   Anchor: Trial safety notes; clinical practice.  
   Behavior: Withhold automated suggestions; emphasize medical supervision.

5. **Insulin or sulfonylurea use (T2DM)**: Person on insulin or insulin secretagogues.  
   Why suppress: Hypoglycemia risk when carbohydrate intake drops sharply without medication adjustment.  
   Anchor: General diabetes nutrition safety principles.  
   Behavior: Withhold; flag for medication review.

6. **Chronic kidney disease (moderate-advanced)**: eGFR <60 or diagnosed CKD.  
   Why suppress: Very-low-carb and high-protein elements may not be appropriate; protein and electrolyte management needed.  
   Anchor: ADA 2026 (kidney disease listed as situation where VLC not recommended).  
   Behavior: Withhold.

7. **Active or history of eating disorder**: Person with current or recent anorexia, bulimia, binge-eating disorder, or disordered eating patterns.  
   Why suppress: Restrictive patterns (very-low-carb, fasting) can exacerbate.  
   Anchor: ADA 2026 (eating disorder risk).  
   Behavior: Withhold; suggest professional support.

8. **Children/adolescents**: Anyone under 18.  
   Why suppress: Not recommended; growth and nutrient needs.  
   Anchor: ADA 2026.  
   Behavior: Withhold.

9. **History of pancreatitis or severe hypertriglyceridemia**: Prior acute pancreatitis or TG persistently >500–1000 mg/dL.  
   Why suppress: Fat-heavy patterns can worsen hypertriglyceridemia or pancreatitis risk in susceptible individuals.  
   Anchor: Clinical caution with high-fat diets.  
   Behavior: Withhold or context_only with strong clinician flag.

10. **Gallbladder disease / post-cholecystectomy with symptoms**: Active gallstones or fat intolerance.  
    Why suppress: High-fat intake may provoke symptoms.  
    Anchor: Mechanistic/clinical experience.  
    Behavior: Withhold generic high-fat suggestions.

11. **Severe nutrient deficiency or very low fiber intake already**: Documented low fiber, magnesium, or other deficiencies.  
    Why suppress: Keto-Med showed lower fiber and nutrient intakes on WFKD vs Mediterranean-style.  
    Anchor: Keto-Med RCT.  
    Behavior: Context_only; emphasize food quality and monitoring.

12. **Uncontrolled hypertension or heart failure on diuretics**: Concurrent use of diuretics with rapid fluid/electrolyte shifts possible on low-carb.  
    Why suppress: Electrolyte imbalance risk.  
    Anchor: General low-carb initiation cautions.  
    Behavior: Withhold unsupervised suggestions.

13. **Long-term (>1 year) adherence failure or rebound**: Person reporting repeated failed attempts with weight regain or worsening labs.  
    Why suppress: Meta-analyses show attenuation of benefits and lower sustainability beyond 6–12 months for many.  
    Anchor: BMJ 2021, VLC 2022, Keto-Med follow-up.  
    Behavior: Context_only; do not re-suggest as default.

14. **Alternate-day fasting in older adults or underweight**: Age >70 or BMI <20 with planned prolonged fasting.  
    Why suppress: Risk of lean mass loss, nutrient inadequacy, or falls; limited safety data.  
    Anchor: TRE trial focused on obesity with calorie control; broader safety gaps.  
    Behavior: Withhold.

15. **Concurrent use of other ketoacidosis-risk medications or acute illness**: Illness, dehydration, or alcohol excess combined with low-carb.  
    Why suppress: Heightened ketoacidosis or electrolyte risk.  
    Anchor: SGLT2 and general caution extensions.  
    Behavior: Withhold; urgent clinician contact if symptomatic.

In all cases, the app should default to educational context only when evidence is mixed, and suppress or redirect when hard contraindications or high-risk situations are present. No automated dietary prescription or outcome prediction.
