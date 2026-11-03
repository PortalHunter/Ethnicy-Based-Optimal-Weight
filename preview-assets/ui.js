
/* ===== Page wiring (DOM). All maths lives in EBOW (above). ===== */
(function () {
  'use strict';
  var E = window.EBOW;
  var $ = function (id) { return document.getElementById(id); };
  var lastValues = null, lastResult = null, lastUnit = 'lb';

  function fmtW(kg, unit) {
    // Whole pounds / half kilograms: the inputs are not precise enough to justify more.
    var lb = Math.round(E.kgToLb(kg)), k = (Math.round(kg * 2) / 2).toFixed(1);
    return unit === 'kg' ? k + ' kg (' + lb + ' lb)' : lb + ' lb (' + k + ' kg)';
  }
  function fmtRange(loKg, hiKg, unit) {
    if (Math.round(E.kgToLb(loKg)) === Math.round(E.kgToLb(hiKg)) && Math.round(loKg * 2) === Math.round(hiKg * 2)) return 'about ' + fmtW(loKg, unit);
    if (unit === 'kg') return (Math.round(loKg * 2) / 2).toFixed(1) + '-' + (Math.round(hiKg * 2) / 2).toFixed(1) + ' kg (' + Math.round(E.kgToLb(loKg)) + '-' + Math.round(E.kgToLb(hiKg)) + ' lb)';
    return Math.round(E.kgToLb(loKg)) + '-' + Math.round(E.kgToLb(hiKg)) + ' lb (' + (Math.round(loKg * 2) / 2).toFixed(1) + '-' + (Math.round(hiKg * 2) / 2).toFixed(1) + ' kg)';
  }
  var UNIT_FIELDS = ['height', 'weight', 'wrist', 'elbow', 'waist'];
  // Converted values keep 2 decimals (0.01 in / 0.01 cm / 0.01 lb), far finer than the displayed results.
  function convertUnit(n, from, to) {
    var x = n;
    if (from === 'in' && to === 'cm') x = n * E.IN_TO_CM;
    else if (from === 'cm' && to === 'in') x = n / E.IN_TO_CM;
    else if (from === 'lb' && to === 'kg') x = n * E.LB_TO_KG;
    else if (from === 'kg' && to === 'lb') x = n / E.LB_TO_KG;
    return E.round(x, 2);
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function ancestryOptions(selected, includeSubgroups) {
    return Object.keys(E.ANCESTRIES).filter(function (k) { return includeSubgroups || !E.ANCESTRIES[k].parent; }).map(function (k) {
      return '<option value="' + k + '"' + (k === selected ? ' selected' : '') + '>' + esc(E.ANCESTRIES[k].label) + '</option>';
    }).join('');
  }


  // UI adapter only: the original validation and weight algorithms read these
  // underlying ancestry keys and remain unchanged.
  function regionInfo(key) {
    for (var i = 0; i < E.POP_REGIONS.length; i++) if (E.POP_REGIONS[i][0] === key) return E.POP_REGIONS[i];
    return null;
  }
  function setupPopulationRow(prefix, underlyingId, index) {
    var region = $(prefix+'Region'+(index || '')), detail = $(prefix+'Detail'+(index || '')), underlying = $(underlyingId);
    region.innerHTML = '<option value="">-- choose --</option>' + E.POP_REGIONS.map(function (r) {
      return '<option value="'+esc(r[0])+'">'+esc(r[1])+'</option>';
    }).join('');
    function sync(reset) {
      var r = regionInfo(region.value), previous = reset ? '' : detail.value;
      detail.innerHTML = '<option value="">Use broad classification</option>' +
        (r ? r[3].map(function (a) {return '<option value="'+esc(a[0])+'">'+esc(a[1])+'</option>';}).join('') : '');
      detail.disabled = !r || !r[3].length;
      detail.value = r && r[3].some(function (a) {return a[0]===previous;}) ? previous : '';
      underlying.value = r ? (detail.value || r[2]) : '';
      refreshIdentify();
    }
    region.addEventListener('change', function () {sync(true);});
    detail.addEventListener('change', function () {
      var r = regionInfo(region.value);
      underlying.value = r ? (detail.value || r[2]) : '';
      refreshIdentify();
    });
    sync(true);
  }


  // Keep the identify-with list in step with the ancestries entered. A choice the person made is kept while
  // it is still listed; otherwise the background with the largest share is preselected (ties: first entered).
  function refreshIdentify() {
    var sel = $('identifyWith'), cur = sel.value, seen = {}, opts = '', best = '', bestPct = -1;
    for (var i = 1; i <= 3; i++) {
      var k = $('mixAnc' + i).value, p = E.parseNum(String($('mixPct' + i).value).replace(/\s*%$/, ''));
      if (!E.ANCESTRIES[k] || seen[k]) continue;
      seen[k] = true; opts += '<option value="' + k + '">' + esc(E.ANCESTRIES[k].label) + '</option>';
      if (isNaN(p)) p = 0;
      if (p > bestPct) { best = k; bestPct = p; }
    }
    sel.innerHTML = opts || '<option value="">-- enter backgrounds above --</option>';
    if (!(sel.dataset.user === '1' && seen[cur])) { sel.dataset.user = ''; cur = best; }
    sel.value = cur;
    var cm = document.querySelector('input[name="cutoffMode"]:checked');
    sel.disabled = !(cm && cm.value === 'identify') || !opts;
  }
  function syncSex() {
    var female = $('sex').value === 'female';
    $('pregBox').hidden = !female;
    if (!female) $('pregnant').checked = false;
  }
  // A single weight (both ends equal) is a ceiling or floor, not a target: say so and give its BMI.
  function fmtEdge(kg, kind, heightCm, unit) {
    return (kind === 'floor' ? 'at least ' : 'at most ') + fmtW(kg, unit) + ' (BMI ' + E.round(E.bmi(kg, heightCm), 1).toFixed(1) + ')';
  }

  function fmtLen(cm, unit) {
    return unit === 'lb' ? E.round(E.cmToIn(cm), 1) + ' in (' + E.round(cm, 1) + ' cm)' : E.round(cm, 1) + ' cm (' + E.round(E.cmToIn(cm), 1) + ' in)';
  }
  function adaWaistLine(a, unit, sex, both) {
    var h = '<strong>ADA 2026 overweight / obesity criteria, ' + (a.background === 'asian' ? 'Asian' : (both ? 'non-Asian' : 'standard')) + ' background:</strong> ';
    if (a.zone === 'waist_band') h += 'your BMI ' + a.bmiShown.toFixed(1) + ' is in the ' + a.bmiLow + '-' + a.bmiBandTop + ' band where waist decides: <strong>' + a.category + '</strong> (' +
      (a.category === 'Obesity' ? (a.whtrHigh ? 'waist-to-height ' + a.whtr.toFixed(3) + ' is 0.5 or more' : '') + (a.whtrHigh && a.wcHigh ? ' and ' : '') + (a.wcHigh ? 'waist is at or above ' + fmtLen(a.wcThresholdCm, unit) : '') : 'waist-to-height under 0.5 and waist under ' + fmtLen(a.wcThresholdCm, unit)) + ').';
    else if (a.zone === 'above') h += 'your BMI ' + a.bmiShown.toFixed(1) + ' is ' + a.bmiObese + ' or more, which meets the obesity criterion by BMI alone; waist is shown for information.';
    else h += 'your BMI ' + a.bmiShown.toFixed(1) + ' is below ' + a.bmiLow + ', where the waist criteria do not apply; waist-to-height ' + a.whtr.toFixed(3) + ' is shown for information only.';
    return h + ' Thresholds: waist-to-height 0.5 (a waist of ' + fmtLen(a.halfHeightCm, unit) + ' at your height) or waist ' + fmtLen(a.wcThresholdCm, unit) + ' (' + sex + ').';
  }
  function adaWaistHtml(aw, r, v, unit) {
    var c = E.cite, cl = aw.classes, h = '<div id="adaWaist">';
    if (cl.length === 1) {
      var asian = cl[0].background === 'asian';
      h += '<p>' + adaWaistLine(cl[0], unit, v.sex) + (asian ? ' These thresholds are used because ' + (r.cutoffMode === 'identify' ? 'the background you identify with' : 'your ancestry') + ' is an Asian background in ADA\u2019s sense (Asia and the South Asian subcontinent).' : ' These are ADA\u2019s standard thresholds, which apply to your background.');
    } else {
      var pct = E.round(aw.asianShare * 100, 1);
      h += '<p>Your blend is ' + pct + '% Asian background (in ADA\u2019s sense) and ' + E.round(100 - pct, 1) + '% non-Asian. ADA gives criteria for one background, not for a blend, so ' +
        (aw.differ ? '<strong>both are shown because they give different results</strong>; the ADA approach is to use the one for the background you identify with (choose it above).</p><ul><li>' + adaWaistLine(cl[0], unit, v.sex, true) + '</li><li>' + adaWaistLine(cl[1], unit, v.sex, true) + '</li></ul><p>' :
          'both were checked and they agree:</p><ul><li>' + adaWaistLine(cl[0], unit, v.sex, true) + '</li><li>' + adaWaistLine(cl[1], unit, v.sex, true) + '</li></ul><p>');
    }
    return h + ' This is a classification note only; it does not change the suggested weight range. ' + c('ada_obesity') + '</p></div>';
  }
  // Presentation adapter: all math remains in the unchanged EBOW core.
  function imperialHeight() {
    var f = $('heightFeet').value.trim(), i = $('heightInches').value.trim();
    if (!f && !i) return '';
    if (!f) return 'missing feet';
    return f + "'" + (i || '0') + '"';
  }
  function visibleHeight() { return $('heightUnit').value === 'cm' ? $('height').value : imperialHeight(); }
  function syncHeightMode(from, to) {
    if (from === 'in' && to === 'cm') {
      var p = E.parseMeasure(imperialHeight(), 'length', true);
      $('height').value = !p.error && p.value !== undefined ? String(E.round(p.value * E.IN_TO_CM, 2)) : '';
    } else if (from === 'cm' && to === 'in') {
      var p = E.parseMeasure($('height').value, 'length', true);
      if (!p.error && p.value !== undefined) {
        var value = E.round(p.unit === 'in' ? p.value : p.value / E.IN_TO_CM, 2);
        var feet = Math.floor(value / 12);
        $('heightFeet').value = String(feet);
        $('heightInches').value = String(E.round(value - 12 * feet, 2));
      } else { $('heightFeet').value = ''; $('heightInches').value = ''; }
    }
    $('heightImperialFields').hidden = to !== 'in';
    $('heightMetricField').hidden = to !== 'cm';
  }

  // Sliders are presentation-only controls. Existing height/weight fields remain the
  // authoritative inputs read by EBOW.validate; never round manually entered values.
  function normalizeSpacedHeight() {
    if ($('heightUnit').value !== 'in' || $('heightInches').value.trim()) return;
    // A common input such as "5 10" in the feet box should not cause an error.
    var m = /^([3-8])\\s+(\\d{1,2}(?:[.,]\\d+)?)$/.exec($('heightFeet').value.trim());
    if (!m) return;
    var inches = E.parseNum(m[2]);
    if (inches === null || !isFinite(inches) || inches < 0 || inches >= 12) return;
    $('heightFeet').value = m[1];
    $('heightInches').value = String(inches);
  }
  function currentHeightInches() {
    var p = E.parseMeasure(visibleHeight(), 'length', true);
    if (p.empty || p.error || p.value === undefined) return null;
    var inches = p.unit === 'cm' || (!p.unit && $('heightUnit').value === 'cm') ? p.value / E.IN_TO_CM : p.value;
    return isFinite(inches) && inches > 0 ? inches : null;
  }
  function updateHeightSlider() {
    var inches = currentHeightInches(), readIn = $('heightReadoutImperial'), readCm = $('heightReadoutMetric');
    if (inches === null) { readIn.textContent = '—'; readCm.textContent = '—'; return; }
    var ft = Math.floor(inches / 12), rem = E.round(inches - ft * 12, 2);
    if (rem >= 12) { ft++; rem = 0; }
    readIn.textContent = ft + ' ft ' + rem + ' in';
    readCm.textContent = E.round(inches * E.IN_TO_CM, 1) + ' cm';
    var slider = $('heightSlider');
    slider.value = String(Math.max(Number(slider.min), Math.min(Number(slider.max), inches)));
  }
  function currentWeightKg() {
    var p = E.parseMeasure($('weight').value, 'weight', false);
    if (p.empty || p.error || p.value === undefined) return null;
    var src = p.unit || $('weightUnit').value;
    var kg = src === 'kg' ? p.value : p.value * E.LB_TO_KG;
    return isFinite(kg) && kg > 0 ? kg : null;
  }
  function updateWeightSlider() {
    var kg = currentWeightKg(), readLb = $('weightReadoutImperial'), readKg = $('weightReadoutMetric');
    if (kg === null) { readLb.textContent = '—'; readKg.textContent = '—'; return; }
    var lb = E.kgToLb(kg);
    readLb.textContent = E.round(lb, 1) + ' lb';
    readKg.textContent = E.round(kg, 1) + ' kg';
    var slider = $('weightSlider');
    slider.value = String(Math.max(Number(slider.min), Math.min(Number(slider.max), lb)));
  }
  function setupMeasurementSliders() {
    $('heightSlider').addEventListener('input', function () {
      var inches = Number(this.value), feet = Math.floor(inches / 12);
      $('heightFeet').value = String(feet);
      $('heightInches').value = String(E.round(inches - feet * 12, 2));
      $('height').value = String(E.round(inches * E.IN_TO_CM, 2));
      updateHeightSlider();
    });
    $('weightSlider').addEventListener('input', function () {
      var lb = Number(this.value);
      $('weight').value = String($('weightUnit').value === 'kg' ? E.round(lb * E.LB_TO_KG, 2) : lb);
      updateWeightSlider();
    });
    ['heightFeet', 'heightInches', 'height'].forEach(function (id) {
      $(id).addEventListener('input', updateHeightSlider);
    });
    $('heightFeet').addEventListener('change', function () { normalizeSpacedHeight(); updateHeightSlider(); });
    $('weight').addEventListener('input', updateWeightSlider);
    $('heightUnit').addEventListener('change', updateHeightSlider);
    $('weightUnit').addEventListener('change', updateWeightSlider);
    updateHeightSlider();
    updateWeightSlider();
  }

  function readForm() {
    normalizeSpacedHeight();
    refreshIdentify();
    var cm = document.querySelector('input[name="cutoffMode"]:checked');
    var mode = document.querySelector('input[name="ancestryMode"]:checked');
    var makeup = [];
    for (var i = 1; i <= 3; i++) makeup.push({ ancestry: $('mixAnc' + i).value, pct: $('mixPct' + i).value });
    return {
      sex: $('sex').value, age: $('age').value, pregnant: $('pregnant').checked,
      height: visibleHeight(), heightUnit: $('heightUnit').value,
      weight: $('weight').value, weightUnit: $('weightUnit').value,
      wrist: $('wrist').value, wristUnit: $('wristUnit').value,
      elbow: $('elbow').value, elbowUnit: $('elbowUnit').value,
      waist: $('waist').value, waistUnit: $('waistUnit').value,
      ancestryMode: mode ? mode.value : 'single', ancestry: $('ancestry').value, makeup: makeup,
      cutoffMode: cm ? cm.value : 'identify', identifyWith: $('identifyWith').value,
      conditions: Array.prototype.map.call(document.querySelectorAll('.cond:checked'), function (el) { return el.value; })
    };
  }

  function syncMode() {
    var mixed = document.querySelector('input[name="ancestryMode"]:checked').value === 'mixed';
    $('singleBox').hidden = mixed; $('mixedBox').hidden = !mixed;
    refreshIdentify();
    updateMixTotal();
  }
  function updateMixTotal() {
    var t = 0;
    for (var i = 1; i <= 3; i++) { var p = E.parseNum($('mixPct' + i).value); if (p && p > 0) t += p; }
    $('mixTotal').textContent = 'Total: ' + E.round(t, 1) + '%' + (Math.abs(t - 100) <= 1 ? ' \u2713' : ' (must be 100%)');
  }

  var hasCalculated = false;

  var FIELD_IDS = ['sex', 'age', 'height', 'weight', 'wrist', 'elbow', 'waist', 'ancestry', 'mixAnc1', 'mixPct1', 'mixAnc2', 'mixPct2', 'mixAnc3', 'mixPct3', 'identifyWith'];
  function markInvalid(ids) {
    FIELD_IDS.forEach(function (id) {
      var el = $(id);
      var visibleId = id==='ancestry' ? 'singleRegion' : id.indexOf('mixAnc')===0 ? 'mixRegion'+id.slice(6) : id;
      var visible = $(visibleId) || el;
      if (ids.indexOf(id)>=0) { el.setAttribute('aria-invalid','true'); visible.setAttribute('aria-invalid','true'); }
      else { el.removeAttribute('aria-invalid'); visible.removeAttribute('aria-invalid'); }
      if (id === 'height') ['heightFeet', 'heightInches'].forEach(function (aux) { if (ids.indexOf('height') >= 0 && $('heightUnit').value === 'in') $(aux).setAttribute('aria-invalid', 'true'); else $(aux).removeAttribute('aria-invalid'); });
    });
  }
  // A unit typed in the box (e.g. "178cm", "180 lbs", 5'10") wins over the selector; keep the selector in step.
  function applyUnitOverrides(overrides) {
    for (var f in overrides) if (overrides.hasOwnProperty(f)) {
      var sel = $(f + 'Unit');
      sel.value = overrides[f]; sel.dataset.prev = overrides[f];
    }
  }

  // Returns true when results were drawn. userClicked: bring errors into view (not done on live edits).
  function run(userClicked) {
    var errBox = $('errors'), out = $('results');
    try {
      var raw = readForm();
      var res = E.validate(raw);
      applyUnitOverrides(res.unitOverrides);
      markInvalid(res.invalid);
      if (!res.ok) {
        errBox.innerHTML = '<strong>Please fix the following:</strong><ul>' + res.errors.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>';
        errBox.hidden = false;
        out.style.display = 'none'; out.innerHTML = ''; $('personalSummary').hidden = true; $('resultsEmpty').hidden = true;   // never leave stale results on screen
        lastValues = lastResult = null;
        if (userClicked) { errBox.scrollIntoView({ block: 'center' }); errBox.focus(); }
        return false;
      }
      hasCalculated = true;
      errBox.hidden = true; errBox.innerHTML = '';
      lastValues = res.values; lastUnit = res.unitOverrides.weight || raw.weightUnit;
      lastResult = E.calculate(res.values);
      render(res, lastResult, lastUnit); $('resultsEmpty').hidden = true; $('personalSummary').hidden = false;
       return true;
    } catch (err) {
      lastValues = lastResult = null;
      $('personalSummary').hidden = false;
      window.ebowShowFatal(err && err.message ? err.message : String(err));
      return false;
    }
  }
  function render(res, r, unit) {
    var v = res.values, c = E.cite;
    var h = '<h2>Detailed calculations and sources</h2>';
    if (res.warnings.length) h += '<div class="warn">' + res.warnings.map(esc).join('<br>') + '</div>';
    if (r.noRange === 'pregnancy') {
      h += '<div class="highlight" id="pregNote"><strong>No weight range is shown during pregnancy or breastfeeding.</strong> The BMI cut-offs and ideal-weight formulas on this page are for adults who are not pregnant, and weight change in pregnancy and while breastfeeding is expected and healthy. How much gain is advised depends on your weight before pregnancy, so please ask your midwife, obstetrician or doctor for a target, and do not use this page to plan weight loss now. The food notes below may still be useful; check any diet change with your care team.</div>';
      var pregSubgroups=res.values.ancestries.map(function (x) {return x.key;}).filter(function (k) {return !!E.ANCESTRIES[k].parent;});
      pregSubgroups.forEach(function (k) {
        h += '<div class="population-note"><strong>'+esc(E.ANCESTRIES[k].label)+'</strong><p>'+E.populationNote(k)+'</p></div>';
      });
      if (E.heritageNote($('heritageProfile').value)) h += '<div class="population-note"><strong>Family heritage</strong><p>'+E.heritageNote($('heritageProfile').value)+'</p></div>';
      h += '<h2>Food &amp; nutrition notes</h2><ul>' + r.food.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
      h += '<h2>References</h2><ol class="sources" id="refList"></ol>';
      var po = $('results'); po.innerHTML = '<div class="primary-result"><p class="eyebrow">Safety first</p><h3>No weight estimate during pregnancy or breastfeeding</h3><p>Nutrition notes and references appear below. Ask your care team about weight targets.</p></div><details class="result-details"><summary>Explore nutrition details and sources</summary>' + h + '</details>'; po.style.display = 'block';
      updateRefs();
      return;
    }
    var g = r.group.group;

    h += '<div class="highlight"><strong>Current BMI:</strong> ' + r.bmiClass.bmiShown.toFixed(1) + ' kg/m\u00b2 \u2014 ' + r.bmiClass.label + ' (using ' + g.name + ')';
    h += '<br><small>BMI is rounded to one decimal and the category uses that rounded value (e.g., 22.96 shows as 23.0 and is classed as 23.0).</small>';
    if (g.key !== 'standard') h += '<br><small>Under the WHO international cut-offs this BMI is: ' + r.whoClass.label + '. ' + c('who_fact') + '</small>';
    h += '<br><strong>Frame size (wrist):</strong> ' + r.wristFrame.size + ' (height \u00f7 wrist = ' + r.wristFrame.r.toFixed(2) + '; Grant cut-offs, a traditional convention rather than a health-outcome measure) ' + c('grant');
    if (r.elbowFrame) {
      h += '<br><strong>Frame size (elbow):</strong> ' + r.elbowFrame.size + ' (medium-frame elbow range for your height: ' + r.elbowFrame.mediumIn[0] + '-' + r.elbowFrame.mediumIn[1] + ' in; MetLife 1983) ' + c(['metlife', 'frisancho']);
      if (r.elbowFrame.outsideTable) h += '<br><small>Your height is below the shortest row of the elbow table, so the nearest row was used; treat the elbow result as rough.</small>';
      if (!r.framesAgree) h += '<br><small>The two methods disagree. Rather than pick one, the suggested range below covers both frame sizes.</small>';
    }
    h += '</div>';

    // Healthy band. Asian-population evidence is cited only when an Asian background sets the cut-offs.
    var asianCut = r.asianShare > 0;
    h += '<h3>1. Healthy weight range for your height</h3><p class="big">' + fmtRange(r.band.lowKg, r.band.highKg, unit) + '</p>';
    h += '<p>BMI ' + r.band.lowBmi + ' to ' + r.band.highBmi + ' (' + g.name + '). ' + (g.overweight < 25 ?
      'The upper edge comes from a lower overweight cut-off (23 for groups ' + (asianCut ? 'NICE and WHO 2004' : 'NICE') + ' treat as higher risk' + (g.overweight > 23 ? ', blended to ' + g.overweight + ' for your mix' : '') + '). That cut-off is a screening / public-health action point, where the risk of type 2 diabetes and heart disease is already raised for many people ' + c(asianCut ? ['who_asian', 'nice'] : ['nice', 'caley']) + '; it is not the BMI of lowest risk. In large cohorts, death rates were lowest at a higher BMI: ' + (asianCut ? 'about 22.6 to 27.5 in East Asian adults ' + c('zheng') + ' and ' : '') + '20 to 25 in pooled studies from four continents ' + c('gbmc') + '. So treat this range as a cautious target for diabetes and heart risk, not a longevity optimum.' :
      'The upper edge is the WHO international overweight cut-off of 25 ' + c('who_fact') + '. In pooled studies from four continents, death rates were lowest from about BMI 20 to 25 ' + c('gbmc') + '.') +
      ' This is the best-supported number on this page.</p>';
    if (r.cutoffMode === 'identify') {
      h += '<p><small id="cutoffNote">Cut-offs used: <strong>' + esc(E.ANCESTRIES[r.cutoffAncestries[0].key].label) + '</strong>, the background you identify with. The ADA 2026 obesity standards note an evidence gap for people of mixed race or ethnicity and advise using the background with which the person identifies; every cut-off below (ranges, diabetes buffer zone, waist thresholds) follows it. ' + c('ada_obesity') + '</small></p>';
    } else if (r.group.mixedGroups) {
      h += '<p><small id="cutoffNote">Your ancestry mix is ' + r.group.lowerShare + '% in groups with lower cut-offs, so the overweight cut-off is weighted to BMI ' + g.overweight + ' and the obesity cut-off to ' + g.obese + ' (a straight percentage blend of 25/30 and 23/27.5; this blending is the calculator\u2019s own method, not guideline-based; you can instead choose the background you identify with, the ADA approach ' + c('ada_obesity') + '). For comparison: standard cut-offs give ' + fmtRange(r.altBands.standard.lowKg, r.altBands.standard.highKg, unit) + '; lower cut-offs give ' + fmtRange(r.altBands.lower.lowKg, r.altBands.lower.highKg, unit) + '.</small></p>';
    }
    if (r.niceAdaDiffer) h += '<p><small id="niceAdaNote"><strong>Why the groupings differ:</strong> NICE (UK) gives the lower BMI cut-offs to Black African, African-Caribbean and Middle Eastern backgrounds ' + c('nice') + ', and this page follows NICE for the ranges. The ADA 2026 obesity criteria do not give lower BMI and waist thresholds to these backgrounds ' + c('ada_obesity') + ', so the ADA waist check uses its standard thresholds for you. The two can label the same BMI differently: BMI 24 is overweight under NICE\u2019s lower cut-offs but below ADA\u2019s standard overweight range (25 or more).</small></p>';
    var notes = {};
    v.ancestries.forEach(function (a) { notes[a.key] = true; });
    h += '<ul class="notes">' + Object.keys(notes).map(function (k) { return '<li><strong>' + esc(E.ANCESTRIES[k].label) + (v.ancestries.length > 1 ? ' (' + v.ancestries.filter(function (a) { return a.key === k; })[0].pct + '%)' : '') + ':</strong> ' + E.ancestryNote(k) + '</li>'; }).join('') + '</ul>';

    // Research cards are informational; they never enter weight calculations.
    var subgroups = Object.keys(notes).filter(function (k) {return !!E.ANCESTRIES[k].parent;});
    var heritage = E.heritageNote($('heritageProfile').value);
    if (subgroups.length || heritage) {
      h += '<h3>Population-informed health information (not a diagnosis)</h3>';
      subgroups.forEach(function (k) {
        h += '<div class="population-note"><strong>'+esc(E.ANCESTRIES[k].label)+'</strong><p>'+E.populationNote(k)+'</p></div>';
      });
      if (heritage) h += '<div class="population-note"><strong>Additional founder / family heritage</strong><p>'+heritage+'</p></div>';
      h += '<p class="hint">Population statistics do not identify your genotype. Family history, clinical measurements and testing take priority. Ancestry never rules someone out of indicated screening. '+c('pop_acog')+'</p>';
    }

    // Buffer zone (display; lower-cut-off ancestry only)
    var z = r.bufferZone;
    if (z) {
      var you = E.round(r.bmi, 1);
      h += '<p><strong>Buffer zone near the cut-off:</strong> BMI ' + z.startBmi.toFixed(1) + ' to ' + z.topBmi.toFixed(1) + ' (' + fmtRange(z.startKg, z.topKg, unit) + '). This applies to Asian backgrounds only, because its evidence comes from Asian populations. It is still within the healthy range, but in Asian populations diabetes risk keeps rising across the healthy range rather than starting at the cut-off. WHO found the BMI at which risk appears varies from 22 to 25 across Asian populations, and a Southeast Asian (Thai) cohort concluded a cut-point of 22 is justified for diabetes risk. ' + c(['who_asian', 'papier', 'odegaard', 'apcsc']) +
        (r.group.mixedGroups ? ' For your mix the zone start is blended by your Asian-background share (22 for Asian backgrounds; no zone for other backgrounds).' : '') +
        (you >= z.startBmi && you <= z.topBmi ? ' <strong>Your BMI (' + you.toFixed(1) + ') is in this zone.</strong>' : '') + '</p>';
    }

    // Suggested (frame-adjusted) range
    var s = r.suggested;
    h += '<h3>2. Frame-adjusted suggested range (estimate)</h3>';
    var sEdge = s.method === 'edge' && s.reason !== 'short';
    h += '<p class="big" id="sugRange">' + (sEdge ? fmtEdge(s.lowKg, s.reason === 'formulas_above' ? 'ceiling' : 'floor', v.heightCm, unit) : fmtRange(s.lowKg, s.highKg, unit)) + '</p>';
    if (s.method === 'overlap') {
      h += '<p>This is where the four classic ideal-body-weight formulas overlap your healthy range above. Hamwi is adjusted for frame as published (\u221210% small, +10% large) ' + c(['hamwi_frame']) + '; Devine, Robinson and Miller have no frame adjustment. ' + c(['peterson', 'robinson', 'pai']) + '</p>';
      if (s.highKg >= r.band.highKg - 1e-6) h += '<p><small id="topNote">The top of this range is the top of your healthy range (BMI ' + r.band.highBmi + '), just under the overweight cut-off. Aiming a little below the top leaves room for normal day-to-day changes in weight.</small></p>';
    } else if (s.reason === 'short') {
      h += '<p>The ideal-body-weight formulas are published only for heights of 5 ft and over, so the healthy range is shown instead. ' + c('peterson') + '</p>';
    } else {
      h += '<p>All four formulas fall ' + (s.reason === 'formulas_above' ? 'above' : 'below') + ' your healthy range (' + fmtRange(s.formulaLowKg, s.formulaHighKg, unit) + '), so the ' + (s.reason === 'formulas_above' ? 'top' : 'bottom') + ' edge of the healthy range is shown as a ' + (s.reason === 'formulas_above' ? 'ceiling: any weight in the healthy range up to it fits' : 'floor: any weight in the healthy range from it up fits') + '; it is not a precise target. Using the nearest edge (rather than the whole range) means a larger frame never gets a lower suggestion than a smaller one; this is the calculator\u2019s own method. The formulas come from mid-20th-century US insurance data and do not consider ancestry; the healthy range, which is tied to disease risk, takes precedence. ' + c(['peterson', 'pai']) + '</p>';
    }
    if (s.formulas) {
      var f = s.formulas;
      h += '<details><summary>Show each formula</summary><table class="t"><tr><th>Formula</th><th>Result</th></tr>' +
        '<tr><td>Hamwi (1964)' + (r.frames.length ? ', ' + r.frames.join(' / ') + ' frame' : '') + '</td><td>' + s.hamwiAdjusted.map(function (x) { return fmtW(x, unit); }).join(' / ') + '</td></tr>' +
        '<tr><td>Devine (1974)</td><td>' + fmtW(f.devine, unit) + '</td></tr>' +
        '<tr><td>Robinson (1983)</td><td>' + fmtW(f.robinson, unit) + '</td></tr>' +
        '<tr><td>Miller (1983)</td><td>' + fmtW(f.miller, unit) + '</td></tr></table>' +
        '<p><small>A review found the formulas are similar because they derive from the same family of height-weight tables, and none was designed as a personal health target (Devine\u2019s was for drug dosing). ' + c('pai') + '</small></p></details>';
    }
    var bf = r.buffered;
    if (bf) {
      h += '<p><strong>With type 2 diabetes / prediabetes / family history selected:</strong> <span class="big" id="bufRange">' + (bf.method === 'at_cap' ? fmtEdge(bf.highKg, 'ceiling', v.heightCm, unit) : fmtRange(bf.lowKg, bf.highKg, unit)) + '</span><br><small>' +
        (bf.method === 'capped' ? 'The range above with its top kept below the buffer zone (BMI ' + bf.capBmi.toFixed(1) + ' or less).' : 'All the formula results fall inside or above the buffer zone, so the result is a ceiling: the weight just below the zone (BMI ' + bf.capBmi.toFixed(1) + '). Any weight in the healthy range up to it fits; it is not a precise target. Using that edge means a larger frame never gets a lower suggestion than a smaller one; this is the calculator\u2019s own method.') +
        ' Why: in a US study comparing Asian ethnic groups, among middle-aged adults at a healthy BMI diabetes was about 5 to 8 times as common in Filipino and South Asian Americans as in White Americans ' + c('vicks') + ', and in a trial of people with type 2 diabetes and BMI under 27, 70% reached remission after a median 6.5% weight loss (average BMI fell from 24.8 to 22.5 over 12 months) ' + c('retune') + '. The 18.5 floor is unchanged and nothing is pushed lower: in pooled studies death rates were lowest from BMI 20 to 25 and rose below 20 ' + c('gbmc') + ', and in East Asian cohorts they were lowest from 22.6 to 27.5 ' + c('zheng') + ', so this cap is about diabetes risk, not a longer life.</small></p>';
    }
    h += '<p><small><strong>Method note:</strong> combining the formulas with the ancestry range is this calculator\u2019s own approach, not a published clinical standard. Treat it as a reasonable place to aim within the healthy range, not a precise target.</small></p>';

    // Waist
    if (r.waist) {
      h += '<h3>3. Waist measures</h3><p><strong>Waist-to-height ratio:</strong> <strong>' + r.waist.ratio.toFixed(2) + '</strong> \u2014 ' + r.waist.category + '. NICE advises keeping your waist to less than half your height; this measure works for all ethnicities and for muscular people with BMI under 35. ' + c('nice') + '</p>';
      if (r.bmi >= 35) h += '<p><small>NICE uses these categories only for BMI under 35.</small></p>';
      h += adaWaistHtml(r.adaWaist, r, v, unit);
    }

    // Conditions
    var cw = r.conditionWeight;
    if (cw.applies) {
      h += '<h3>' + (r.waist ? '4' : '3') + '. What your selected conditions mean for weight</h3>';
      if (cw.overBand && cw.goal) {
        h += '<p class="big">First goal: lose ' + fmtRange(cw.goal.lossLowKg, cw.goal.lossHighKg, unit) + ', to about ' + fmtRange(cw.goal.toLowKg, cw.goal.toHighKg, unit) + '</p>';
        h += '<p>That is 5-7% of your current weight, the amount guidelines say improves blood sugar, blood pressure and lipids in people above the healthy range (the Diabetes Prevention Program targeted at least 7%). ' + c(['ada8', 'dpp']) + ' Longer term, the healthy range above is the reference.</p>';
      }
      h += '<ul>' + cw.items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    }

    // Chart
    h += '<h2>Wrist size vs BMI chart</h2>';
    h += '<label for="chartAncestry">Show cut-offs for:</label><select id="chartAncestry">' + (r.group.mixedGroups ? '<option value="__mine" selected>Your ancestry mix (' + esc(g.name) + ')</option>' : '') + ancestryOptions(r.group.mixedGroups ? '' : (E.ANCESTRIES[r.cutoffAncestries[0].key].parent || r.cutoffAncestries[0].key)) + '</select>';
    h += '<div id="chartBox"></div>';

    // Height table
    h += heightTable(v.heightCm, g, unit);

    // Food
    h += '<h2>Food &amp; nutrition notes</h2><ul>' + r.food.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    h += '<p><small>Ancestry notes describe population averages and gene frequencies. They do not tell you your own genes; a test or your own experience (e.g., with dairy or alcohol) is a better guide.</small></p>';

    h += '<h2>References</h2><ol class="sources" id="refList"></ol>';

        // Summary first; the existing numeric output and citations remain below unchanged.
    var selected = r.buffered || r.suggested;
    var edge = r.buffered ? r.buffered.method === 'at_cap' : (r.suggested.method === 'edge' && r.suggested.reason !== 'short');
    var primaryLabel = edge ? fmtEdge(selected.highKg, r.buffered ? 'ceiling' : (r.suggested.reason === 'formulas_above' ? 'ceiling' : 'floor'), v.heightCm, unit) : fmtRange(selected.lowKg, selected.highKg, unit);
    var quick = '<div class="primary-result" id="quickRange"><p class="eyebrow">Experimental range estimate</p><div class="value">' + primaryLabel + '</div>' +
      '<div class="metrics"><div class="metric"><small>BMI-based screening reference</small><strong>' + fmtRange(r.band.lowKg, r.band.highKg, unit) + '</strong></div>' +
      '<div class="metric"><small>Current BMI · ' + esc(r.bmiClass.label) + '</small><strong>' + r.bmiClass.bmiShown.toFixed(1) + ' kg/m²</strong></div></div>' +
      '<p class="caution">This range uses the unchanged original ancestry, body-frame and selected-condition logic. It is not a validated personal target. ' +
      (r.buffered ? 'The diabetes-related cap is an unvalidated heuristic.' : 'Other selected conditions do not alter the range.') + '</p></div>';
    var out = $('results');
    out.innerHTML = quick + '<details class="result-details"><summary>Explore calculations, charts, nutrition notes and citations</summary>' + h + '</details>'; out.style.display = 'block';
    $('chartAncestry').addEventListener('change', drawChart);
    drawChart();
  }

  // Number citations by first appearance and list only the sources cited in what is on screen.
  function updateRefs() {
    var list = $('refList');
    if (!list) return;
    var links = $('results').querySelectorAll('a.cite'), order = [], num = {};
    for (var i = 0; i < links.length; i++) {
      var k = links[i].getAttribute('data-ref');
      if (!num[k]) { order.push(k); num[k] = order.length; }
      links[i].textContent = '[' + num[k] + ']';
    }
    var byKey = {};
    E.REFS.forEach(function (x) { byKey[x[0]] = x; });
    list.innerHTML = order.map(function (k) { var x = byKey[k]; return '<li data-ref="' + k + '"><a href="' + x[2] + '" target="_blank" rel="noopener noreferrer">' + esc(x[1]) + '</a></li>'; }).join('');
  }

  function heightTable(heightCm, g, unit) {
    var hIn = Math.round(E.cmToIn(heightCm));
    var rows = [];
    for (var d = -2; d <= 2; d++) rows.push(hIn + d);
    var hi = E.round(g.overweight - 0.1, 1), ohi = E.round(g.obese - 0.1, 1);
    var t = '<h3>BMI bands near your height (' + g.name + ')</h3><table class="t"><tr><th>Height</th><th class="b0">Under (&lt;18.5)</th><th class="b1">Healthy (18.5-' + hi + ')</th><th class="b2">' + g.labels[2] + ' (' + g.overweight + '-' + ohi + ')</th><th class="b3">' + g.labels[3] + ' (' + g.obese + '+)</th></tr>';
    rows.forEach(function (i) {
      var cm = i * E.IN_TO_CM;
      var w = function (b) { var kg = E.weightForBmi(b, cm); return unit === 'kg' ? (Math.round(kg * 2) / 2).toFixed(1) : Math.round(E.kgToLb(kg)); };
      var u = unit === 'kg' ? ' kg' : ' lb';
      t += '<tr' + (i === hIn ? ' class="me"' : '') + '><td>' + Math.floor(i / 12) + '\u2032' + (i % 12) + '\u2033 (' + Math.round(cm) + ' cm)</td><td class="b0">&lt;' + w(18.5) + u + '</td><td class="b1">' + w(18.5) + '-' + w(hi) + u + '</td><td class="b2">' + w(g.overweight) + '-' + w(ohi) + u + '</td><td class="b3">' + w(g.obese) + '+' + u + '</td></tr>';
    });
    return t + '</table><p><small>Rows are whole inches around your height; your row is highlighted.</small></p>';
  }

  function drawChart() {
    if (!lastValues) return;
    var v = lastValues, unit = lastUnit;
    var anc = $('chartAncestry').value;
    var g = anc === '__mine' ? lastResult.group.group : E.GROUPS[E.ANCESTRIES[anc].group];
    var gLabel = anc === '__mine' ? 'your ancestry mix' : E.ANCESTRIES[anc].label;
    var cut = E.wristCutoffs(v.heightCm, v.sex);
    var userIn = E.cmToIn(v.wristCm);
    var x0 = Math.floor((Math.min(E.cmToIn(cut.smallBelowCm) - 1, userIn - 0.3)) * 10) / 10;
    var x1 = Math.ceil((Math.max(E.cmToIn(cut.largeAboveCm) + 1, userIn + 0.3)) * 10) / 10;
    x0 = Math.max(3.5, x0); x1 = Math.min(10.5, x1);
    var data = E.chartSeries(v.heightCm, v.sex, g, x0, x1);
    var userBmi = E.bmi(v.weightKg, v.heightCm);
    var y0 = 15, y1 = Math.max(35, Math.ceil(userBmi + 1));
    var W = 680, H = 340, L = 46, R = 12, T = 12, B = 44;
    var X = function (x) { return L + (x - x0) / (x1 - x0) * (W - L - R); };
    var Y = function (y) { return T + (y1 - Math.min(Math.max(y, y0), y1)) / (y1 - y0) * (H - T - B); };
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-labelledby="chTitle chDesc" style="width:100%;height:auto;background:#fff">';
    svg += '<title id="chTitle">BMI versus wrist circumference for your height</title><desc id="chDesc">Horizontal colour bands show BMI categories for the chosen population. Vertical lines mark small, medium and large frame by wrist size. The dark band shows the frame-adjusted suggested range. The dot is you.</desc>';
    var bands = [[y0, g.healthyLow, '#cce5ff'], [g.healthyLow, g.overweight, '#d4edda'], [g.overweight, g.obese, '#fff3cd'], [g.obese, y1, '#f8d7da']];
    bands.forEach(function (b) { svg += '<rect x="' + L + '" y="' + Y(b[1]) + '" width="' + (W - L - R) + '" height="' + (Y(b[0]) - Y(b[1])) + '" fill="' + b[2] + '"/>'; });
    // y grid
    for (var y = Math.ceil(y0); y <= y1; y++) if (y % 5 === 0 || y === 23 || y === 27.5) svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(y) + '" y2="' + Y(y) + '" stroke="#999" stroke-width="0.5"/><text x="' + (L - 4) + '" y="' + (Y(y) + 4) + '" font-size="11" text-anchor="end">' + y + '</text>';
    [g.healthyLow, g.overweight, g.obese].forEach(function (y) { svg += '<text x="' + (L - 4) + '" y="' + (Y(y) + 4) + '" font-size="10" text-anchor="end" fill="#555">' + y + '</text>'; });
    // suggested band as 0.1 in columns
    var colW = (W - L - R) / (data.length - 1 || 1);
    data.forEach(function (d) {
      svg += '<rect x="' + (X(d.wristIn) - colW / 2) + '" y="' + Y(d.highBmi) + '" width="' + colW + '" height="' + Math.max(1, Y(d.lowBmi) - Y(d.highBmi)) + '" fill="#2b6cb0" fill-opacity="0.45"><title>' + d.wristIn.toFixed(1) + ' in: ' + d.frame + ' frame, BMI ' + d.lowBmi.toFixed(1) + '-' + d.highBmi.toFixed(1) + '</title></rect>';
    });
    // frame boundaries
    [[E.cmToIn(cut.smallBelowCm), 'Small | Medium'], [E.cmToIn(cut.largeAboveCm), 'Medium | Large']].forEach(function (b) {
      if (b[0] > x0 && b[0] < x1) svg += '<line x1="' + X(b[0]) + '" x2="' + X(b[0]) + '" y1="' + T + '" y2="' + (H - B) + '" stroke="#333" stroke-dasharray="4 3"/><text x="' + X(b[0]) + '" y="' + (T + 11) + '" font-size="11" text-anchor="middle">' + b[1] + '</text>';
    });
    // x ticks every 0.1, labels every 0.5
    for (var t = Math.round(x0 * 10); t <= Math.round(x1 * 10); t++) {
      var xv = t / 10, big = t % 5 === 0;
      svg += '<line x1="' + X(xv) + '" x2="' + X(xv) + '" y1="' + (H - B) + '" y2="' + (H - B + (big ? 7 : 3)) + '" stroke="#333"/>';
      if (big) svg += '<text x="' + X(xv) + '" y="' + (H - B + 19) + '" font-size="11" text-anchor="middle">' + xv.toFixed(1) + '</text>';
    }
    svg += '<text x="' + ((L + W - R) / 2) + '" y="' + (H - 6) + '" font-size="12" text-anchor="middle">Wrist circumference (inches, 0.1\u2033 ticks)</text>';
    svg += '<text x="12" y="' + ((T + H - B) / 2) + '" font-size="12" text-anchor="middle" transform="rotate(-90 12 ' + ((T + H - B) / 2) + ')">BMI (kg/m\u00b2)</text>';
    svg += '<circle cx="' + X(userIn) + '" cy="' + Y(userBmi) + '" r="6" fill="#d00" stroke="#fff" stroke-width="2"><title>You: wrist ' + userIn.toFixed(1) + ' in, BMI ' + userBmi.toFixed(1) + '</title></circle>';
    svg += '</svg>';

    var tbl = '<details><summary>Table: every 0.1\u2033 of wrist size at your height</summary><table class="t"><tr><th>Wrist</th><th>Frame</th><th>Suggested range</th><th>BMI</th></tr>';
    data.forEach(function (d) {
      var me = Math.abs(d.wristIn - Math.round(userIn * 10) / 10) < 1e-9;
      tbl += '<tr' + (me ? ' class="me"' : '') + '><td>' + d.wristIn.toFixed(1) + '\u2033 (' + d.wristCm.toFixed(1) + ' cm)</td><td>' + d.frame + '</td><td>' + fmtRange(d.lowKg, d.highKg, unit) + '</td><td>' + d.lowBmi.toFixed(1) + '-' + d.highBmi.toFixed(1) + '</td></tr>';
    });
    tbl += '</table></details>';
    $('chartBox').innerHTML = svg + '<p><small>Colour bands: under / healthy / ' + g.labels[2].toLowerCase() + ' / ' + g.labels[3].toLowerCase() + ' for ' + esc(gLabel) + ' (' + g.name + '). Dark band: frame-adjusted suggested range from section 2 (wrist method only). Frame lines use the Grant height/wrist cut-offs for your height and sex. ' + E.cite(['grant'].concat(g.overweight >= 25 ? ['who_fact'] : (anc === '__mine' ? lastResult.asianShare > 0 : E.ANCESTRIES[anc].adaAsian) ? ['nice', 'who_asian'] : ['nice'])) + '</small></p>' + tbl;
    updateRefs();
  }

  function init() {
    $('ancestry').innerHTML = '<option value="">-- choose --</option>' + ancestryOptions('', true);
    setupPopulationRow('single', 'ancestry');
    for (var i = 1; i <= 3; i++) {
      $('mixAnc' + i).innerHTML = '<option value="">-- choose --</option>' + ancestryOptions('', true);
      setupPopulationRow('mix', 'mixAnc'+i, i);
      $('mixPct' + i).addEventListener('input', updateMixTotal);
      $('mixPct' + i).addEventListener('input', refreshIdentify);
    }
    Array.prototype.forEach.call(document.querySelectorAll('input[name="ancestryMode"]'), function (el) { el.addEventListener('change', syncMode); });
    // Mark a choice the person made (on 'input' too: it reaches this element before the form's live recalculation).
    var markChoice = function () { $('identifyWith').dataset.user = '1'; };
    $('identifyWith').addEventListener('input', markChoice); $('identifyWith').addEventListener('change', markChoice);
    $('sex').addEventListener('change', syncSex);
    $('calcForm').addEventListener('submit', function (e) {
      e.preventDefault();
      if (run(true)) $('personalSummary').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    // Unit switches convert the number already typed, so the measurement itself does not change.
    UNIT_FIELDS.forEach(function (f) {
      var sel = $(f + 'Unit');
      sel.dataset.prev = sel.value;
      sel.addEventListener('change', function () {
        var inp = $(f), from = sel.dataset.prev, to = sel.value;
        if (f === 'height') { syncHeightMode(from, to); sel.dataset.prev = to; return; }
        var p = E.parseMeasure(inp.value, f === 'weight' ? 'weight' : 'length', false);
        var src = p.unit || from;   // a unit typed in the box takes precedence
        if (p.value !== undefined && src !== to) inp.value = String(convertUnit(p.value, src, to));
        sel.dataset.prev = to;
      });
    });
    setupMeasurementSliders();
    // After the first calculation, any edit recalculates (or clears the results if the input becomes invalid).
    var live = function () { if (hasCalculated) run(false); };
    $('calcForm').addEventListener('change', refreshIdentify);   // before live, so the list is current
    $('calcForm').addEventListener('input', live);
    $('calcForm').addEventListener('change', live);
    syncMode(); syncSex(); syncHeightMode('in', $('heightUnit').value);
    $('jsNotice').hidden = true;   // the script is running; hide the "script not running" notice
  }

  try {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  } catch (err) {
    window.ebowShowFatal(err && err.message ? err.message : String(err));
  }
})();
