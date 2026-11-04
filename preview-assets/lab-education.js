/* Optional laboratory education. No network, storage or changes to EBOW calculations. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SOURCES = {
    adaDx: ['ADA 2026: Diagnosis and Classification', 'https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926'],
    adaFood: ['ADA 2026: Nutrition and Health Behaviors', 'https://doi.org/10.2337/dc26-S005'],
    acc: ['ACC/AHA 2026 Dyslipidemia Guideline', 'https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016'],
    tg: ['ACC 2021 Hypertriglyceridemia Consensus', 'https://www.jacc.org/doi/10.1016/j.jacc.2021.06.011'],
    lab: ['MedlinePlus: Understanding Laboratory Results', 'https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/'],
    low: ['CDC: Low Blood Sugar', 'https://www.cdc.gov/diabetes/about/low-blood-sugar-hypoglycemia.html'],
    potassium: ['National Kidney Foundation: Potassium', 'https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium'],
    kdigo: ['KDIGO 2024: CKD Evaluation (eGFR and Urine ACR)', 'https://doi.org/10.1016/j.kint.2023.10.016']
  };
  var MARKERS = {
    a1c: {name: 'Hemoglobin A1c', units: ['%', 'mmol/mol']},
    glucose: {name: 'Fasting plasma glucose', units: ['mg/dL', 'mmol/L']},
    ldl: {name: 'LDL cholesterol', units: ['mg/dL', 'mmol/L']},
    tg: {name: 'Triglycerides', units: ['mg/dL', 'mmol/L']},
    total: {name: 'Total cholesterol', units: ['mg/dL', 'mmol/L']},
    hdl: {name: 'HDL cholesterol', units: ['mg/dL', 'mmol/L']},
    potassium: {name: 'Potassium (safety/context only)', units: ['mmol/L', 'mEq/L']},
    egfr: {name: 'Reported eGFR (kidney context only)', units: ['mL/min/1.73 m²']},
    uacr: {name: 'Urine albumin-to-creatinine ratio (kidney context only)', units: ['mg/g', 'mg/mmol']},
    other: {name: 'Another test (explanation not yet supported)', units: ['mg/dL', 'mmol/L', '%', 'g/dL', 'U/L', 'mEq/L', 'other / not listed']}
  };
  var serial = 0;
  function node(tag, cls, text) {
    var x = document.createElement(tag);
    if (cls) x.className = cls;
    if (text !== undefined) x.textContent = text;
    return x;
  }
  function paragraph(parent, message, cls) {
    var p = node('p', cls || '', message);
    parent.appendChild(p);
    return p;
  }
  function appendSource(parent, key) {
    var source = SOURCES[key] || SOURCES.lab;
    var link = node('a', '', source[0]);
    link.href = source[1];
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    var line = node('p', 'lab-source');
    line.appendChild(link);
    parent.appendChild(line);
  }
  function putUnits(row, marker) {
    var units = MARKERS[marker].units;
    var select = row.querySelector('.lab-unit');
    var previous = select.value;
    select.replaceChildren();
    units.forEach(function (unit) {
      var option = node('option', '', unit);
      option.value = unit;
      select.appendChild(option);
    });
    select.value = units.indexOf(previous) !== -1 ? previous : units[0];
  }
  function addRow() {
    serial += 1;
    var row = node('fieldset', 'lab-entry');
    row.innerHTML =
      '<legend>Lab result ' + serial + '</legend>' +
      '<div class="lab-grid">' +
      '<label>Test<select class="lab-marker">' +
      '<option value="a1c">Hemoglobin A1c</option>' +
      '<option value="glucose">Fasting plasma glucose</option>' +
      '<option value="ldl">LDL cholesterol</option>' +
      '<option value="tg">Triglycerides</option>' +
      '<option value="total">Total cholesterol</option>' +
      '<option value="hdl">HDL cholesterol</option>' +
      '<option value="potassium">Potassium (safety/context)</option>' +
      '<option value="egfr">Reported eGFR (kidney context)</option>' +
      '<option value="uacr">Urine albumin-to-creatinine ratio (kidney context)</option>' +
      '<option value="other">Another test (not yet interpreted)</option>' +
      '</select></label>' +
      '<label class="lab-other-label" hidden>Test name<input class="lab-other" type="text" maxlength="80" autocomplete="off" placeholder="As written on the report"></label>' +
      '<label>Reported value<input class="lab-value" type="text" inputmode="decimal" maxlength="25" autocomplete="off" placeholder="e.g. 6.1"></label>' +
      '<label>Units<select class="lab-unit"></select></label>' +
      '<label>Flag on report<select class="lab-flag">' +
      '<option value="other">Not flagged / not sure</option>' +
      '<option value="high">High</option><option value="low">Low</option>' +
      '<option value="critical">Critical / urgent</option>' +
      '</select></label>' +
      '<label>Laboratory reference interval (optional)<input class="lab-range" type="text" maxlength="100" autocomplete="off" placeholder="e.g. 3.5-5.0"></label>' +
      '<label>Collection date (optional)<input class="lab-date" type="date"></label>' +
      '<label class="lab-fasting-label" hidden>Was this blood glucose sample fasting?<select class="lab-fasting"><option value="unknown">Not sure</option><option value="yes">Yes</option><option value="no">No</option></select></label>' +
      '</div><button type="button" class="lab-remove">Remove this result</button>';
    var marker = row.querySelector('.lab-marker');
    marker.addEventListener('change', function () {
      putUnits(row, marker.value);
      row.querySelector('.lab-other-label').hidden = marker.value !== 'other';
      row.querySelector('.lab-fasting-label').hidden = marker.value !== 'glucose';
      $('labOutput').hidden = true;
    });
    row.querySelector('.lab-remove').addEventListener('click', function () {
      row.remove();
      $('labOutput').hidden = true;
    });
    row.querySelectorAll('input,select').forEach(function (field) {
      field.addEventListener('input', function () {
        field.removeAttribute('aria-invalid');
        $('labOutput').hidden = true;
      });
    });
    putUnits(row, 'a1c');
    $('labRows').appendChild(row);
  }
  function collect() {
    var values = [];
    var errors = [];
    var rows = Array.prototype.slice.call(document.querySelectorAll('#labRows .lab-entry'));
    rows.forEach(function (row, index) {
      var marker = row.querySelector('.lab-marker').value;
      var valueField = row.querySelector('.lab-value');
      var raw = valueField.value.trim();
      var numeric = Number(raw);
      var other = row.querySelector('.lab-other').value.trim();
      var unit = row.querySelector('.lab-unit').value;
      var flag = row.querySelector('.lab-flag').value;
      if (!/^\d+(?:\.\d+)?$/.test(raw) || !Number.isFinite(numeric) || numeric <= 0 || numeric > 100000) {
        valueField.setAttribute('aria-invalid', 'true');
        errors.push('Result ' + (index + 1) + ': enter a positive numeric value using a period for decimals.');
      }
      if (marker === 'other' && !other) {
        row.querySelector('.lab-other').setAttribute('aria-invalid', 'true');
        errors.push('Result ' + (index + 1) + ': enter the laboratory test name.');
      }
      if (marker === 'glucose' && row.querySelector('.lab-fasting').value !== 'yes') {
        // Leave the result visible, but do not call an unconfirmed specimen "fasting."
      }
      values.push({
        marker: marker,
        name: marker === 'other' ? other : MARKERS[marker].name,
        value: numeric,
        raw: raw,
        unit: unit,
        flag: flag,
        range: row.querySelector('.lab-range').value.trim(),
        date: row.querySelector('.lab-date').value,
        fasting: row.querySelector('.lab-fasting').value
      });
    });
    if (!rows.length) errors.push('Add at least one lab result.');
    return {values: values, errors: errors};
  }
  function severeTG(record) {
    return record.marker === 'tg' &&
      ((record.unit === 'mg/dL' && record.value >= 500) ||
       (record.unit === 'mmol/L' && record.value >= 5.7));
  }
  function veryLowGlucose(record) {
    return record.marker === 'glucose' &&
      ((record.unit === 'mg/dL' && record.value < 54) ||
       (record.unit === 'mmol/L' && record.value < 3.0));
  }
  function describe(record, blockNutrition) {
    if (record.flag === 'critical') return {
      text: 'Your report marked this result critical. Contact the reporting clinician or laboratory immediately for instructions. If you have severe symptoms, seek emergency care. This page cannot assess urgency or choose a treatment.',
      source: 'lab', urgent: true
    };
    if (record.marker === 'potassium') return {
      text: 'Potassium disturbances can sometimes be serious. Kidney function, medicines, specimen quality and symptoms matter. Contact your clinician promptly about this flag; do not start potassium supplements or potassium restriction based on this form.',
      source: 'potassium', caution: true
    };
    if (record.marker === 'egfr' || record.marker === 'uacr') return {
      text: record.marker === 'egfr' ?
        'eGFR is an estimate of kidney filtration, not a diagnosis from one measurement. KDIGO recommends considering urine albumin, repeat results, duration and clinical context. Race or ancestry should not be inserted into the eGFR equation. This page does not recommend a kidney-specific diet.' :
        'Urine albumin-to-creatinine ratio (ACR) helps assess kidney health alongside eGFR. KDIGO recommends confirming an abnormal urine ACR and evaluating persistence over time; one number does not establish chronic kidney disease. This page does not recommend a kidney-specific diet.',
      source: 'kdigo', caution: record.flag !== 'other'
    };
    if (veryLowGlucose(record)) return {
      text: 'This reported glucose value is in a range associated with clinically significant low blood sugar. If this value is current, seek prompt medical guidance; confusion, seizure, unconsciousness or inability to swallow requires emergency help. This is not a dietary assessment.',
      source: 'low', urgent: true
    };
    if (severeTG(record)) return {
      text: 'This entered triglyceride value reaches the range addressed as severe hypertriglyceridemia in ACC guidance. Contact a clinician promptly to review pancreatitis risk and treatment; a general food suggestion is not sufficient.',
      source: 'tg', caution: true
    };
    if (record.marker === 'a1c') {
      if (record.flag !== 'high') return {text: 'A low or unclassified HbA1c flag does not establish a nutritional deficiency or justify increasing sugar intake. Test method and red blood cell conditions may affect interpretation.', source: 'adaDx'};
      return {text: 'HbA1c reflects average glucose exposure over roughly 2–3 months; one flagged result does not by itself establish a diagnosis. ADA nutrition guidance supports individualized patterns that emphasize vegetables, whole fruit, legumes, whole grains and fiber, while limiting sugary drinks and refined grains. This is not an individual diet prescription.', source: 'adaFood', nutrition: true};
    }
    if (record.marker === 'glucose') {
      if (record.flag !== 'high') return {text: 'A low or uncertain glucose flag needs clinical context, especially symptoms and glucose-lowering medicines. Do not rely on this form to manage low glucose.', source: 'low'};
      if (record.fasting !== 'yes') return {text: 'This test was not confirmed fasting. Meal timing, illness, medications and sample handling matter; ask your clinician how this value should be interpreted before using fasting-glucose guidance.', source: 'adaDx'};
      return {text: 'A reported high fasting glucose result warrants discussion of follow-up testing and overall metabolic risk. ADA guidance supports individualized high-fiber dietary patterns and replacing sugar-sweetened drinks with water or unsweetened alternatives; this is general education, not treatment.', source: 'adaFood', nutrition: true};
    }
    if (record.marker === 'ldl') {
      if (record.flag !== 'high') return {text: 'An isolated low or uncertain LDL flag is not evidence that you should increase saturated fat. Review the full cardiovascular and medication context with a clinician.', source: 'acc'};
      return {text: 'LDL cholesterol is used to assess cardiovascular risk. Replacing sources of saturated fat with unsaturated fats, and including fiber-rich foods, is supported by lipid guidelines. The need for medication or a specific LDL goal depends on your wider clinical risk.', source: 'acc', nutrition: true};
    }
    if (record.marker === 'tg') {
      if (record.flag !== 'high') return {text: 'An isolated low or uncertain triglyceride flag does not identify a dietary problem. Discuss the full panel and any symptoms or medicines with your clinician.', source: 'acc'};
      return {text: 'For elevated triglycerides, guidelines support reducing added sugars and refined carbohydrates and minimizing alcohol. The appropriate approach depends on the triglyceride level, whether fasting, medical conditions and medicines.', source: 'acc', nutrition: true};
    }
    if (record.marker === 'hdl' || record.marker === 'total') {
      return {text: 'Total cholesterol and HDL are most meaningful alongside other lipid measurements and overall cardiovascular risk. A single flag does not justify a specific diet or an attempt to raise HDL directly.', source: 'acc'};
    }
    return {text: 'This marker is not yet supported for individualized nutrition education. Keep its original report and discuss the abnormal or uncertain flag with the ordering clinician. No diagnosis or diet recommendation is generated.', source: 'lab'};
  }
  // These are prompts, not conclusions drawn from a patient's value or a care plan.
  function clinicianQuestion(record) {
    if (record.marker === 'a1c') return 'Should this finding be compared with a plasma glucose result, and could my red blood cell health or test method affect HbA1c?';
    if (record.marker === 'glucose') return record.fasting === 'yes' ?
      'Does the specimen and fasting history support interpreting this as a fasting result, and is follow-up testing appropriate?' :
      'Does the meal timing or specimen type change how this result should be interpreted?';
    if (record.marker === 'ldl') return 'How does LDL fit with my complete lipid panel, medical and family history, and any medicines?';
    if (record.marker === 'tg') return 'Was this sample fasting, and do medications, alcohol use or other conditions change the next steps?';
    if (record.marker === 'total' || record.marker === 'hdl') return 'How does this measurement fit with LDL, triglycerides, and overall cardiovascular risk?';
    if (record.marker === 'potassium') return 'Does this result need prompt rechecking, especially considering sample handling, kidney function and medicines?';
    if (record.marker === 'egfr') return 'Should we also review urine ACR, past kidney tests and the equation or method used to report this result?';
    if (record.marker === 'uacr') return 'Should an unexpected urine ACR be confirmed using a first-morning sample and reviewed alongside eGFR and earlier tests?';
    return 'What does this exact test measure, and what further clinical information is needed to interpret the reported flag?';
  }
  function generalFoodExamples(record) {
    if (record.marker === 'a1c' || record.marker === 'glucose') {
      return 'water or unsweetened drinks instead of sugar-sweetened beverages; vegetables, beans, whole grains and other fiber-rich foods. Medication use, pregnancy and other conditions can change what is appropriate.';
    }
    if (record.marker === 'ldl') {
      return 'swapping butter or cream for unsaturated oils where suitable, and choosing foods with soluble fiber such as oats or beans. This does not replace medical assessment for very high LDL.';
    }
    if (record.marker === 'tg') {
      return 'discussing added sugars, refined carbohydrates and alcohol intake with a clinician; very high triglycerides need a different, clinician-led approach.';
    }
    return 'There is not enough context here for a lab-specific food recommendation.';
  }
  function render(records) {
    var output = $('labOutput');
    output.replaceChildren();
    output.appendChild(node('h3', '', 'Your lab discussion notes'));
    paragraph(output, 'These are educational notes based on the values and lab flags you selected, not a diagnosis. Food-pattern guidance is only shown for selected supported tests with a reported high flag; numeric safety exceptions are specifically identified. We do not independently verify the lab flag or infer normality from a number. No result changes the calculator’s weight estimate.');
    var suppressNutrition = records.some(function (r) {
      return r.flag === 'critical' || r.marker === 'potassium' ||
        ((r.marker === 'egfr' || r.marker === 'uacr') && r.flag !== 'other') ||
        severeTG(r) || veryLowGlucose(r);
    });
    if (suppressNutrition) {
      paragraph(output, 'A potential safety concern was entered. General food-change suggestions are withheld for this group of results until a clinician reviews the whole situation.', 'lab-alert');
    }
    records.forEach(function (r) {
      var box = node('section', 'lab-result-card');
      box.appendChild(node('h4', '', r.name + ' — ' + (r.flag === 'critical' ? 'Critical flag' : r.flag === 'other' ? 'Not flagged / unsure' : r.flag === 'high' ? 'High flag' : 'Low flag')));
      paragraph(box, 'You entered: ' + r.raw + ' ' + r.unit +
        (r.date ? ' | Collected: ' + r.date : '') +
        (r.range ? ' | Report interval: ' + r.range + ' (not independently verified)' : ' | No laboratory interval provided'));
      var item = describe(r, suppressNutrition);
      paragraph(box, (suppressNutrition && item.nutrition) ?
        'Diet-specific interpretation is withheld because another entered result may require more urgent or specialized clinical review. Discuss this flag with your clinician alongside the complete report.' :
        item.text, item.urgent ? 'lab-alert' : item.caution ? 'lab-caution' : '');
      if (r.marker === 'a1c') {
        paragraph(box, 'Ancestry-aware testing note: certain verified hemoglobin variants and red-cell conditions can make some HbA1c results misleading. These occur in diverse populations; ancestry alone cannot establish whether a person has a variant. Discuss known variants or disagreement with glucose results.', 'lab-ancestry');
        appendSource(box, 'adaDx');
      }
      if (r.marker === 'egfr') {
        paragraph(box, 'Ancestry and kidney testing: KDIGO recommends an eGFR calculation without a race factor. This tool does not calculate eGFR from ancestry.', 'lab-ancestry');
      }
      if (r.marker === 'glucose' && r.fasting !== 'yes') {
        paragraph(box, 'Fasting status was not confirmed; this is not interpreted as a fasting laboratory result.');
      }
      if (!item.urgent) {
        paragraph(box, 'For your clinician: ' + clinicianQuestion(r), 'lab-question');
      }
      if (!suppressNutrition && item.nutrition) {
        paragraph(box, 'Food-pattern examples to discuss: ' + generalFoodExamples(r), 'lab-food');
      }
      appendSource(box, (suppressNutrition && item.nutrition) ? 'lab' : item.source);
      output.appendChild(box);
    });
    if (records.some(function (r) { return r.marker === 'a1c' && r.flag === 'high'; }) &&
        records.some(function (r) { return r.marker === 'tg' && r.flag === 'high'; })) {
      paragraph(output, 'For your clinician: HbA1c and triglycerides were both reported high. Ask whether these findings should be assessed together in the context of glucose metabolism, medications and overall cardiovascular risk. This is not a diagnosis.', 'lab-ancestry');
    }
    paragraph(output, $('labOtherUnflagged').checked ?
      'You reported that the rest of your panel had no flags. Those unentered values remain unknown here; a non-flagged result is not a guarantee of health.' :
      'Other tests were not provided, so their values and status are unknown.');
    paragraph(output, 'Choose culturally familiar foods to apply any relevant eating pattern; ethnicity does not determine a diet, test threshold, genotype or treatment.');
    appendSource(output, 'lab');
    output.hidden = false;
    output.focus();
  }
  function init() {
    if (!$('labForm')) return;
    $('labAdd').addEventListener('click', addRow);
    // Prevent stale notes when the unflagged-panel self-report changes.
    $('labOtherUnflagged').addEventListener('change', function () {
      $('labOutput').hidden = true;
    });
    $('labForm').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = collect();
      var errorBox = $('labErrors');
      errorBox.replaceChildren();
      if (data.errors.length) {
        errorBox.textContent = data.errors.join(' ');
        errorBox.hidden = false;
        $('labOutput').hidden = true;
        errorBox.focus();
        return;
      }
      errorBox.hidden = true;
      render(data.values);
    });
    $('labClear').addEventListener('click', function () {
      $('labRows').replaceChildren();
      $('labOtherUnflagged').checked = false;
      $('labErrors').hidden = true;
      $('labOutput').replaceChildren();
      $('labOutput').hidden = true;
      addRow();
    });
    addRow();
  }
  window.EBOWLabEdu = {describe: describe, severeTG: severeTG, veryLowGlucose: veryLowGlucose};
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();