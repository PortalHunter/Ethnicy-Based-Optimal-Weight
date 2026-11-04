# USER_COMPREHENSION_CASES.md
## Synthetic conflicting, misleading, and incomplete lab panels
**Purpose:** Test whether research-supported diet discussions can appear after a user selects a lab high/low/critical flag without creating diagnosis or self-treatment plans. At least 30 cases including mixed ancestry. Neutral, patient-friendly language suggested for clinician discussions.

**Date:** 2026-11-04  
**Rule:** Ideal-weight module remains independent. No case authorizes personal outcomes.

### Suggested neutral language template (use/adapt)
“These lab values are numbers your laboratory reported. They can be influenced by many things including recent food, medications, other health conditions, and how the sample was handled. Research and guidelines describe eating patterns that some groups of people have studied for blood sugar or cholesterol measures. Any changes are best discussed with your clinician or a registered dietitian who knows your full history. This information is educational only and does not diagnose a condition or recommend treatment.”

### Synthetic cases (30+)

1. A1c 6.8% (high flag), fasting glucose 98 mg/dL, self-identified mixed African/European ancestry, no meds listed.  
   **Issue:** Possible hemoglobin-variant or assay interference vs true elevation.  
   **Disposition:** context_only. Note discordance possibility; no carb-restriction claim.  
   **Language:** “A1c and glucose do not always match. Ask your clinician whether the A1c method is reliable for you and whether a different glucose test is useful.”

2. Random glucose 210 mg/dL (high), no fasting status, A1c not provided.  
   **Issue:** Unknown intake, illness, or medication.  
   **Disposition:** withhold diet claims. Stop for serious glucose concern.  
   **Language:** “A single high random glucose needs clinical review. Do not change eating patterns based on this alone.”

3. LDL-C 165 mg/dL (high), TG 140 mg/dL, HDL 48, total 230. Mediterranean ancestry.  
   **Issue:** Incomplete risk context.  
   **Disposition:** educational (Mediterranean pattern context from PREDIMED-type evidence with caveats).  
   **Language:** “Some research on Mediterranean-style eating patterns has looked at heart-event rates in high-risk adults. Talk with your clinician about whether that information is relevant to your overall risk.”

4. TG 1200 mg/dL (critical flag), fasting.  
   **Issue:** Severe hypertriglyceridemia; pancreatitis risk.  
   **Disposition:** withhold. Direct to clinician.  
   **Language:** “Very high triglycerides require prompt medical attention. Do not attempt dietary changes without guidance.”

5. eGFR 55 mL/min/1.73 m² (low flag), ACR 25 mg/g, race-free equation assumed, Asian ancestry.  
   **Issue:** Single value; not diagnostic of CKD.  
   **Disposition:** context_only (KDIGO plant-based/sodium notes).  
   **Language:** “Kidney estimates can vary. Guidelines discuss plant-based foods and sodium for many people with reduced kidney function, but only a clinician can interpret your results over time.”

6. Potassium 5.8 mmol/L (high), eGFR 42, on unknown meds.  
   **Issue:** Abnormal K+ stop condition; possible RAAS or other drug.  
   **Disposition:** withhold.  
   **Language:** “High potassium needs clinical evaluation before any diet discussion.”

7. A1c 5.6%, fasting glucose 126 mg/dL (high). Mixed ancestry.  
   **Issue:** Discordance; possible interference or lab timing.  
   **Disposition:** context_only.  
   **Language:** “When A1c and glucose disagree, clinicians often check for other factors affecting the tests.”

8. LDL 90 (normal), TG 280 (high), non-fasting, diabetes meds unknown.  
   **Issue:** TG elevation; possible non-fasting or uncontrolled glucose.  
   **Disposition:** educational with strong caveat (lifestyle for TG).  
   **Language:** “Triglycerides can rise after meals or with high blood sugar. Reducing added sugars is discussed in guidelines for elevated triglycerides; confirm with your clinician.”

9. Reported eGFR 28 (low/critical), ACR 450, pregnancy status unknown.  
   **Issue:** Flagged kidney + possible pregnancy stop.  
   **Disposition:** withhold.  
   **Language:** “These kidney values need immediate clinician review. Nutrition advice is not appropriate from this report alone.”

10. HDL 35 (low), LDL 140, total 200, self-identified East Asian ancestry.  
    **Issue:** No ideal-weight link; pattern discussion limited.  
    **Disposition:** context_only.  
    **Language:** “Cholesterol numbers are one piece of information. Eating patterns studied for heart health emphasize vegetables, fish, nuts, and limited processed foods.”

11. A1c 7.2% (high), known sickle cell trait reported by user.  
    **Issue:** Hemoglobin variant interference risk.  
    **Disposition:** withhold A1c-based diet claims.  
    **Language:** “With certain hemoglobin differences, A1c may not accurately reflect average blood sugar. Plasma glucose tests are often preferred.”

12. Fasting glucose 92, A1c 8.1% (high), iron deficiency noted in comments.  
    **Issue:** Possible false elevation of A1c.  
    **Disposition:** context_only.  
    **Language:** “Iron levels can affect A1c. Your clinician may want additional tests.”

13. TG 450 (high), alcohol intake unknown, SGLT2 use unknown.  
    **Issue:** Multiple confounders; possible stop if SGLT2 + restriction planned.  
    **Disposition:** educational with stop warning.  
    **Language:** “Elevated triglycerides have many causes including alcohol and medications. Discuss before making large diet changes.”

14. Urine ACR 15 (borderline), eGFR 78, mixed Latino/European ancestry.  
    **Issue:** Incomplete; not diagnostic.  
    **Disposition:** context_only.  
    **Language:** “Mild elevations in urine protein can have several explanations. Guidelines discuss healthy eating patterns, but interpretation requires your clinician.”

15. LDL 190 (high), family history unknown, Lp(a) not measured.  
    **Issue:** Do not estimate Lp(a) from ancestry.  
    **Disposition:** educational (lifestyle + clinician referral).  
    **Language:** “High LDL is discussed in cholesterol guidelines. Measuring lipoprotein(a) once is recommended in many guidelines; ancestry alone does not estimate it.”

16. Potassium 3.1 (low), on diuretic unknown.  
    **Issue:** Abnormal K+ stop.  
    **Disposition:** withhold.  
    **Language:** “Low potassium needs clinical review.”

17. Random glucose 65 mg/dL (low), insulin use unknown.  
    **Issue:** Hypoglycemia risk stop.  
    **Disposition:** withhold.  
    **Language:** “Low glucose readings require prompt attention, especially if you use diabetes medications.”

18. A1c 6.4%, fasting 110, prediabetes range, pregnancy possible.  
    **Issue:** Pregnancy stop if known.  
    **Disposition:** withhold if pregnancy flagged; else context_only.  
    **Language:** “Blood sugar goals differ in pregnancy. Confirm with your clinician.”

19. Total cholesterol 280, HDL 70, LDL calculated invalid because TG 800.  
    **Issue:** Severe TG; LDL not reliable.  
    **Disposition:** withhold.  
    **Language:** “Very high triglycerides make some cholesterol calculations unreliable and need medical care.”

20. eGFR 65 (low flag on some lab ranges), age 75, no ACR.  
    **Issue:** Age-related decline vs disease; lab-specific flag.  
    **Disposition:** context_only.  
    **Language:** “Kidney estimates often decline with age. A single value does not diagnose disease.”

21. Mixed ancestry panel: A1c 5.9, LDL 155, eGFR 50, K 4.8. Incomplete units.  
    **Issue:** Uncertain units/specimen.  
    **Disposition:** withhold until clarified.  
    **Language:** “Please confirm units and fasting status with your laboratory or clinician before interpreting these numbers.”

22. HDL 90 (high), LDL 110. No clinical concern.  
    **Disposition:** educational optional.  
    **Language:** “These cholesterol values are within ranges many labs consider typical. General heart-healthy eating patterns are discussed in guidelines.”

23. Fasting glucose 140 (high), A1c 6.0, SGLT2 inhibitor listed.  
    **Issue:** Medication + possible carb restriction risk.  
    **Disposition:** withhold strict restriction claims.  
    **Language:** “Certain diabetes medications have specific considerations with very low carbohydrate intake. Discuss any diet plans with your clinician.”

24. ACR 80 (high), eGFR 40, plant-based diet already followed.  
    **Disposition:** context_only.  
    **Language:** “Kidney guidelines often emphasize plant foods and sodium limits, but individual adjustments depend on your full results and other conditions.”

25. TG 180 (high), non-fasting, recent meal noted.  
    **Disposition:** educational.  
    **Language:** “Triglycerides rise after eating. Fasting samples are sometimes preferred for full interpretation.”

26. A1c critical 12%, glucose 350.  
    **Disposition:** withhold; urgent referral language.  
    **Language:** “These values suggest the need for prompt medical evaluation. Do not rely on general nutrition information.”

27. Self-identified African ancestry, measured Lp(a) 80 nmol/L (not estimated), LDL 130.  
    **Disposition:** educational; emphasize measured value.  
    **Language:** “Lipoprotein(a) is best assessed by direct measurement. Population averages differ, but your individual result is what clinicians use.”

28. Potassium 5.2 (high flag), hemolyzed sample noted by lab.  
    **Issue:** Assay quality.  
    **Disposition:** withhold interpretation.  
    **Language:** “The laboratory noted possible sample issues. Repeat testing is often needed.”

29. Incomplete: only total cholesterol 240 provided.  
    **Disposition:** context_only or withhold detailed claims.  
    **Language:** “A single total cholesterol number is limited. Full lipid panels and clinical context are needed.”

30. Mixed South Asian/European ancestry, LDL 170, TG 200, A1c 6.7.  
    **Disposition:** educational with transportability caveats.  
    **Language:** “Research on eating patterns comes from specific populations. Your clinician can help decide what information applies to you.”

31. eGFR race-adjusted (old method) 70 vs race-free would be lower; user notes “Black” in ancestry field.  
    **Issue:** Do not reintroduce race coefficient.  
    **Disposition:** note preference for race-free.  
    **Language:** “Current kidney estimates do not use race. Confirm which equation your lab used.”

32. Eating disorder history flagged by user + low glucose.  
    **Disposition:** withhold all nutrition output.  
    **Language:** “Nutrition discussions are not appropriate in this context. Please speak with your care team.”

**Summary:** In 32 synthetic cases, diet discussions are limited to educational or context_only when flags are mild and history incomplete; withheld for critical, discordant, kidney, potassium, severe TG, pregnancy, medication-risk, or uncertain data. All language directs to clinician discussion and avoids diagnosis or self-treatment.
