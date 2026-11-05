/* Research-only, optional: no calculator formulas, risk scores, lab values, or medical actions. */
(function (root) {
  'use strict';
  var SOURCES = {
  "finland": {
    "place": "Finland",
    "language": "Finnish",
    "kind": "National clinical guideline",
    "year": "2024",
    "title": "Tyypin 2 diabetes (Käypä hoito)",
    "url": "https://www.kaypahoito.fi/hoi50056",
    "note": "Finnish professional guidance considers prevention, diagnosis, family history and clinical measurements. It applies to Finland's clinical setting, not everyone of Finnish ancestry."
  },
  "spain": {
    "place": "Spain",
    "language": "Spanish",
    "kind": "Professional-society dietary review",
    "year": "2025",
    "title": "Actualización en el tratamiento dietético de la prediabetes y diabetes tipo 2",
    "url": "https://www.sediabetes.org/publicaciones/publicaciones-sed/actualizacion-en-el-tratamiento-dietetico-de-la-prediabetes-y-diabetes-tipo-2-2/",
    "note": "Spanish scientific societies review dietary management for prediabetes and type 2 diabetes. Country-specific dietary practice does not imply a genetic Mediterranean diet response."
  },
  "ghana": {
    "place": "Ghana (West Africa)",
    "language": "English",
    "kind": "Ministry of Health national guideline",
    "year": "2023",
    "title": "National Guidelines for the Management of Diabetes Mellitus",
    "url": "https://demsog.com/wp-content/uploads/2024/05/2023-Ghana-Diabetes-Guidelines.pdf",
    "note": "Ghanaian clinicians developed local guidance spanning recognition, screening and care. It is a Ghana healthcare document, not evidence about every West African ancestry group."
  },
  "southafrica": {
    "place": "South Africa",
    "language": "English",
    "kind": "Professional-society guideline index",
    "year": "2017 edition listed",
    "title": "SEMDSA: Management of Type 2 Diabetes Mellitus",
    "url": "https://www.semdsa.org.za/for-members/guidelines",
    "note": "South African professional guidance is available, but the listed type 2 diabetes edition is older. It should not be represented as the current best guidance without a version check."
  },
  "china": {
    "place": "China",
    "language": "Chinese",
    "kind": "National professional-society guideline",
    "year": "2024 edition; published 2025",
    "title": "中国糖尿病防治指南（2024版）",
    "url": "https://cs.medjournals.cn/cn/zhtnbzz/toc/65062",
    "note": "Chinese Diabetes Society guidance covers screening, diabetes diagnosis and prevention in China. It does not establish a personalized threshold from Chinese ancestry alone."
  },
  "japan": {
    "place": "Japan",
    "language": "Japanese",
    "kind": "National professional-society guideline",
    "year": "2024",
    "title": "糖尿病診療ガイドライン2024",
    "url": "https://www.jds.or.jp/modules/publication/index.php?content_id=40",
    "note": "Japanese Diabetes Society guidance reviews diabetes prevention, diagnosis and nutrition. Local clinical recommendations are not an automatic rule for all Japanese-ancestry users."
  },
  "korea": {
    "place": "South Korea",
    "language": "English (Korean-authored journal)",
    "kind": "Professional-society consensus",
    "year": "2025",
    "title": "Korean Diabetes Association consensus on screening and diabetes care",
    "url": "https://doi.org/10.4093/dmj.2025.0978",
    "note": "The Korean Diabetes Association recommends screening from age 35, or from 19 with risk factors, in its Korean clinical setting. This is not an instruction for this visitor to order tests."
  },
  "india": {
    "place": "India",
    "language": "English",
    "kind": "Government multi-state population study",
    "year": "ICMR-INDIAB national research",
    "title": "Indian Council of Medical Research: INDIAB study overview",
    "url": "https://www.icmr.gov.in/advancing-biomedical-research",
    "note": "The INDIAB program maps pronounced state, urban-rural and metabolic-health variation within India. India is not one uniform ethnic or diabetes-risk population."
  },
  "pakistan": {
    "place": "Pakistan",
    "language": "English",
    "kind": "National professional-society guideline",
    "year": "2024",
    "title": "Pakistan Endocrine Society: Type 2 Diabetes and Cardiometabolic Syndrome Guidelines",
    "url": "https://pakendosociety.org/wp-content/uploads/2024/04/PES-Guidelines-Suppl-Final.pdf",
    "note": "Pakistan-authored guidance considers diabetes screening and broader cardiometabolic management. Its applicability depends on the patient's clinical setting."
  },
  "thailand": {
    "place": "Thailand",
    "language": "Thai",
    "kind": "National clinical practice guideline",
    "year": "2023; updated 2024",
    "title": "แนวทางเวชปฏิบัติสำหรับโรคเบาหวาน 2566",
    "url": "https://dmthai.org/new/index.php/activities-and-news/news-pr/naewthang-wech-ptibati-sahrab-rokh-bea-hwan-2566-chbab-prabprung-kph-67",
    "note": "Thailand's clinical societies developed locally adapted diabetes guidance. The guidance concerns Thai health services rather than inherited risk for every Thai-descended person."
  },
  "indonesia": {
    "place": "Indonesia",
    "language": "Indonesian",
    "kind": "Ministry of Health national guideline",
    "year": "2026",
    "title": "Pedoman Nasional Pelayanan Klinis Tatalaksana Diabetes Melitus Tipe 2 Dewasa",
    "url": "https://jdih.kemkes.go.id/documents/keputusan-menteri-kesehatan-nomor-hk0107menkes3022026",
    "note": "The Indonesian Ministry of Health issued an updated type 2 diabetes care guideline in April 2026. It is specific to Indonesian clinical practice."
  },
  "malaysia": {
    "place": "Malaysia",
    "language": "English",
    "kind": "Ministry of Health national guideline",
    "year": "2020 (6th edition; check updates)",
    "title": "Management of Type 2 Diabetes Mellitus, 6th edition",
    "url": "https://www.moh.gov.my/en/publications-and-reports/policies-act-policies-guide-lines/penerbitan-klinikal/senarai-penerbitan-klinikal/panduan-amalan-klinikal-cpg",
    "note": "Malaysia's published clinical practice guideline covers local healthcare management; a later edition should be checked before translating detailed recommendations."
  },
  "vietnam": {
    "place": "Vietnam (Ho Chi Minh City)",
    "language": "Vietnamese",
    "kind": "Local hospital observational study",
    "year": "2025",
    "title": "TỶ LỆ TUÂN THỦ ĐIỀU TRỊ VÀ CÁC YẾU TỐ LIÊN QUAN Ở NGƯỜI BỆNH ĐÁI THÁO ĐƯỜNG TYPE 2",
    "url": "https://tapchiyhocvietnam.vn/index.php/vmj/article/view/13179",
    "note": "A Vietnamese clinical study investigated diabetes treatment adherence in one Ho Chi Minh City outpatient setting. A clinic sample is not a national prevalence estimate or an ancestry-based risk model."
  },
  "arab": {
    "place": "Arab region (multinational)",
    "language": "English",
    "kind": "Regional expert consensus",
    "year": "2024",
    "title": "Arab Diabetes Forum: clinical practice recommendations for diabetes",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38955658/",
    "note": "Experts from several Arab countries developed regionally informed guidance. This does not mean Levantine and Gulf populations are clinically interchangeable."
  },
  "saudi": {
    "place": "Saudi Arabia",
    "language": "English",
    "kind": "Saudi medical-society position statement",
    "year": "2024",
    "title": "Saudi Heart Association: cardiovascular diseases and diabetes mellitus",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11737320/",
    "note": "Saudi clinicians review cardiovascular and diabetes care for the Saudi healthcare context. It provides education about comorbidities, not an ancestry-specific prediction."
  },
  "mexico": {
    "place": "Mexico",
    "language": "Spanish",
    "kind": "Federal national care protocol",
    "year": "2025",
    "title": "PRONAM: Diabetes tipo 2 y síndrome metabólico",
    "url": "https://sidofqa.segob.gob.mx/notas/docFuente/5761885",
    "note": "Mexico's federal medical-care protocol is relevant to care in Mexico, not automatically to the risk of all Mexican or Mexican-American individuals."
  },
  "mexmaz": {
    "place": "Mexico (Mazahua–Otomí community)",
    "language": "Spanish",
    "kind": "Local observational study",
    "year": "2024",
    "title": "Consumo de refrescos y diabetes mellitus en una comunidad Mazahua Otomí",
    "url": "https://www.scielo.org.mx/scielo.php?pid=S2007-80642024000100102&script=sci_arttext",
    "note": "Research examines diabetes, soft-drink consumption and other factors in one Mazahua–Otomí community. It cannot be generalized to all Mesoamerican Indigenous peoples."
  },
  "brazil": {
    "place": "Brazil (example within South America)",
    "language": "Portuguese",
    "kind": "National professional-society guideline",
    "year": "2026 edition",
    "title": "Diagnóstico de diabetes mellitus — Sociedade Brasileira de Diabetes",
    "url": "https://diretriz.diabetes.org.br/diagnostico-de-diabetes-mellitus/",
    "note": "Brazilian guidance cautions against counting ethnicity as an independent screening factor in Brazil due to extensive population admixture. Brazil does not stand for all South America."
  },
  "canada": {
    "place": "Canada (First Nations, Inuit and Métis)",
    "language": "English",
    "kind": "Indigenous-focused clinical guidance",
    "year": "2018 (review for updates)",
    "title": "Diabetes Canada: Type 2 Diabetes and Indigenous Peoples",
    "url": "https://guidelines.diabetes.ca/GuideLines/media/Docs/cpg/Ch38-Type-2-Diabetes-and-Indigenous-Peoples.pdf",
    "note": "Canadian guidance emphasizes Indigenous-led, culturally safe and locally adapted care. It should not be reduced to a genetic-risk explanation."
  },
  "greenland": {
    "place": "Greenlandic Inuit",
    "language": "English",
    "kind": "Population genetics study",
    "year": "2014",
    "title": "A common Greenlandic TBC1D4 variant confers muscle insulin resistance and type 2 diabetes",
    "url": "https://pubmed.ncbi.nlm.nih.gov/25043022/",
    "note": "A TBC1D4 variant was associated with diabetes risk among people carrying two copies in a Greenlandic cohort. Self-reported Inuit ancestry does not identify anyone's genotype."
  },
  "samoa": {
    "place": "Samoa",
    "language": "English",
    "kind": "Ministry of Health local guideline",
    "year": "2024",
    "title": "Samoa Ministry of Health National Diabetes Guidelines",
    "url": "https://dm-mohsamoa.nzssd.org.nz/",
    "note": "Samoa adapted diabetes clinical guidance to its healthcare context. Samoan ancestry does not by itself establish personal diabetes risk."
  },
  "newzealand": {
    "place": "New Zealand (Māori and Pacific populations)",
    "language": "English",
    "kind": "Professional-society screening guidance",
    "year": "Current online clinical guidance; verify version",
    "title": "NZSSD: Screening for diabetes in asymptomatic adults",
    "url": "https://www.t2dm.nzssd.org.nz/Section-112-Screening-for-diabetes-in-asymptomatic-adults",
    "note": "New Zealand screening guidance explicitly considers Māori, Pacific and South Asian populations. It applies within New Zealand's healthcare system, not as an automatic diaspora testing instruction."
  },
  "australia": {
    "place": "Australia (First Nations)",
    "language": "English",
    "kind": "Government risk-assessment document",
    "year": "2025",
    "title": "Australian Type 2 Diabetes Risk Assessment Tool (AUSDRISK)",
    "url": "https://www.health.gov.au/sites/default/files/2025-03/the-australian-type-2-diabetes-risk-assessment-tool-ausdrisk-pdf-version.pdf",
    "note": "Australia's validated risk-tool materials include Aboriginal and Torres Strait Islander context along with age, family history and measured factors. Ancestry alone is not a calculated risk score here."
  }
};
  var BY_SUBGROUP = {
  "eu_finn": [
    "finland"
  ],
  "eu_medit": [
    "spain"
  ],
  "af_west": [
    "ghana"
  ],
  "af_south": [
    "southafrica"
  ],
  "ea_china": [
    "china"
  ],
  "ea_japan": [
    "japan"
  ],
  "ea_korea": [
    "korea"
  ],
  "sa_india": [
    "india"
  ],
  "sa_pakistan": [
    "pakistan"
  ],
  "sea_thai": [
    "thailand"
  ],
  "sea_indomalay": [
    "indonesia",
    "malaysia"
  ],
  "sea_vietnam": [
    "vietnam"
  ],
  "me_gulf": [
    "saudi",
    "arab"
  ],
  "me_levant": [
    "arab"
  ],
  "lat_mexico": [
    "mexico"
  ],
  "lat_south": [
    "brazil"
  ],
  "ind_greenland": [
    "greenland"
  ],
  "ind_firstnations": [
    "canada"
  ],
  "ind_meso": [
    "mexmaz"
  ],
  "pi_samoa": [
    "samoa"
  ],
  "pi_maori": [
    "newzealand"
  ],
  "au_aboriginal": [
    "australia"
  ],
  "au_torres": [
    "australia"
  ]
};
  function forAncestries(ancestries) {
    var E = root.EBOW;
    var seen = {};
    return (ancestries || []).filter(function (a) { return a && E && E.ANCESTRIES[a.key] && !seen[a.key] && (seen[a.key] = true); }).map(function (a) {
      var ids = BY_SUBGROUP[a.key] || [];
      return {
        key: a.key,
        label: E.ANCESTRIES[a.key].label,
        sources: ids.map(function (id) { return SOURCES[id]; }).filter(Boolean)
      };
    });
  }
  function add(parent, tag, value, className) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (value) el.textContent = value;
    parent.appendChild(el);
    return el;
  }
  function render(container, values) {
    if (!container) return;
    while (container.firstChild) container.removeChild(container.firstChild);
    var active = values && Array.isArray(values.conditions) && values.conditions.indexOf('diabetes') !== -1;
    if (!active) { container.hidden = true; return; }
    container.hidden = false;
    add(container, 'h3', 'Diabetes research connected to your selected backgrounds');
    add(container, 'p', 'You selected the combined type 2 diabetes / prediabetes / family-history option. It does not tell us which applies to you. These are educational references, not a diagnosis, a personal diabetes-risk estimate, a screening instruction, or an adjustment to your weight range.', 'diabetes-research-intro');
    var picks = forAncestries(values.ancestries);
    if (picks.length > 1) add(container, 'p', 'Multiple backgrounds: sources are shown separately for each selection. Ancestry percentages are not used to blend evidence or clinical recommendations.', 'diabetes-research-note');
    picks.forEach(function (picked) {
      var card = add(container, 'article', null, 'diabetes-research-card');
      add(card, 'h4', picked.label);
      if (!picked.sources.length) {
        add(card, 'p', 'No separately reviewed diabetes source is mapped to this selection yet. This is a research coverage gap—not evidence that diabetes risk is absent or that this population is homogeneous.');
      } else {
        picked.sources.forEach(function (source) {
          add(card, 'p', source.place + ' · ' + source.kind + ' · ' + source.year + ' · ' + source.language, 'diabetes-research-meta');
          var link = add(card, 'a', source.title);
          link.href = source.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          add(card, 'p', source.note);
        });
      }
    });
    var ending = add(container, 'p', null, 'diabetes-research-outro');
    ending.appendChild(document.createTextNode('The sources reflect the population or healthcare jurisdiction studied, not necessarily your own residence or ancestry. Discuss actual glucose results, diagnosis and family history with a qualified clinician. '));
    var research = add(ending, 'a', 'View the regional evidence register');
    research.href = 'docs/research/REGIONAL_DIABETES_EVIDENCE_2026-11-04.md';
  }
  root.AHDiabetesResearch = { forAncestries: forAncestries, render: render, SOURCES: SOURCES, BY_SUBGROUP: BY_SUBGROUP };
})(window);
