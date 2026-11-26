(() => {
  'use strict';

  const get = (id) => document.getElementById(id);
  const data = globalThis.AtlasPreviewData;
  if (!data) {
    get('result-status').textContent = 'The local directory data could not be loaded.';
    return;
  }

  const PAGE_SIZE = 14;
  const VERIFIED = 'https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight';
  const areas = new Map(data.areas.map((area) => [area.code, area]));
  const institutionStatus = {
    authority: 'Authority identified',
    identity: 'Identity documented',
    publication: 'Publication source indexed',
    network: 'Network role documented',
  };
  const areaStatus = {
    OFFICIAL_AUTHORITY_IDENTIFIED: 'Authority identified',
    SOURCE_SUPPORTED_SHARED_OR_DEVOLVED_AUTHORITY: 'Shared or devolved authority',
    SOURCE_SUPPORTED_DELEGATED_AUTHORITY: 'Scoped delegated authority',
    UNKNOWN_REVIEW_NEEDED: 'Authority unknown',
    UNRESOLVED_CONFLICT_EXTERNAL_REVIEW: 'Competing authority evidence',
  };
  const whoRegions = {
    AFRO: 'Africa', AMRO: 'Americas', EMRO: 'Eastern Mediterranean',
    EURO: 'Europe', SEARO: 'South-East Asia', WPRO: 'Western Pacific',
  };
  const conditionStatus = {
    qualified: 'Qualified source recorded',
    bounded: 'Bounded search, no qualifying source recorded',
    historical: 'Historical references only in this intake',
    limited: 'Evidence limited, review pending',
  };
  const evidenceScope = {
    authority: 'The cited record identifies an authority for the area or a specific function. Review the linked source for exact jurisdiction and legal scope.',
    identity: 'The cited record documents this organization’s identity. Governance, statutory powers and clinical claims require separate evidence.',
    publication: 'The cited record identifies a journal or discovery platform. Indexing, hosting and article appraisal are separate.',
    network: 'The cited record documents a network or office role at its stated scope. It does not establish a national authority or a clinical policy.',
  };
  const linkContext = {
    S1: 'Substantive original source',
    S2: 'Substantive local resource',
    H: 'Hosted source, authorship separate',
    article: 'Article discovery record, unappraised',
    programme: 'Documented institutional programme, unappraised',
  };
  const controls = ['query', 'area', 'type', 'condition', 'evidence'].map(get);
  const dialog = get('details');
  const body = get('detail-body');
  const tableHead = get('table-head');
  let mode = 'institutions';
  let page = 1;
  let sort = 'ascending';
  let openButton;

  function element(tag, value, className) {
    const node = document.createElement(tag);
    if (value) node.textContent = value;
    if (className) node.className = className;
    return node;
  }

  function link(url, text) {
    const node = element('a', text);
    node.href = url;
    return node;
  }

  function optionSet(select, options, placeholder) {
    select.replaceChildren(new Option(placeholder, ''), ...options.map(([key, value]) => new Option(value, key)));
  }

  function folded(input) {
    return input.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase().trim();
  }

  const searchableInstitutions = data.institutions.map((record) => ({
    ...record,
    searchable: folded([record.name, record.local, ...record.places.flatMap(({ code }) => {
      const area = areas.get(code);
      return [area.name, area.code, area.iso, area.iso3];
    })].join(' ')),
  }));
  const searchableAreas = data.areas.map((area) => ({
    ...area,
    searchable: folded([area.name, area.code, area.iso, area.iso3, area.region].join(' ')),
  }));
  const institutionsByTerritory = new Map();
  for (const record of data.institutions) {
    if (record.status !== 'authority') continue;
    for (const code of new Set(record.places.filter((place) => place.role !== 'Recorded organization base'
      && place.role !== 'Recorded publisher area').map((place) => place.code))) {
      if (!institutionsByTerritory.has(code)) institutionsByTerritory.set(code, []);
      institutionsByTerritory.get(code).push(record);
    }
  }

  function resultRows() {
    const [query, area, type, condition, evidence] = controls.map((control) => control.value);
    const words = folded(query).split(/\s+/).filter(Boolean);
    const records = mode === 'institutions'
      ? searchableInstitutions.filter((record) =>
        (!area || record.places.some((place) => place.code === area)) &&
        (!type || record.type === type) &&
        (!condition || Object.hasOwn(record.conditions, condition)) &&
        (!evidence || record.status === evidence))
      : searchableAreas.filter((record) => {
        const status = condition ? data.coverage[record.code][condition].status : record.status;
        return (!area || area === record.code) && (!evidence || status === evidence);
      });
    return records.filter((record) => words.every((word) => record.searchable.includes(word)))
      .sort((a, b) => (sort === 'ascending' ? 1 : -1) * a.name.localeCompare(b.name));
  }

  function resetEvidenceOptions() {
    const condition = get('condition').value;
    const values = mode === 'institutions' ? institutionStatus : condition ? conditionStatus : areaStatus;
    optionSet(get('evidence'), Object.entries(values), 'All statuses');
  }

  function renderHead() {
    const condition = get('condition').value;
    const columns = mode === 'institutions'
      ? ['Institution', 'Area or scope', 'Type', 'Evidence status', 'Citation']
      : ['Country or area', 'M49 / ISO', 'UN region', condition ? 'Condition coverage' : 'Authority status', 'Citation'];
    const header = element('tr');
    columns.forEach((label, index) => {
      const cell = element('th', index ? label : '');
      cell.scope = 'col';
      if (index === 0) {
        const button = element('button');
        button.type = 'button';
        const title = element('span', label);
        const marker = element('span', sort === 'ascending' ? ' ↑' : ' ↓');
        marker.setAttribute('aria-hidden', 'true');
        button.append(title, marker);
        cell.setAttribute('aria-sort', sort);
        button.addEventListener('click', () => {
          sort = sort === 'ascending' ? 'descending' : 'ascending';
          marker.textContent = sort === 'ascending' ? ' ↑' : ' ↓';
          cell.setAttribute('aria-sort', sort);
          page = 1;
          renderRows();
        });
        cell.append(button);
      }
      header.append(cell);
    });
    tableHead.replaceChildren(header);
  }

  function renderRows() {
    const records = resultRows();
    const pages = Math.max(1, Math.ceil(records.length / PAGE_SIZE));
    page = Math.min(page, pages);
    const start = (page - 1) * PAGE_SIZE;
    const condition = get('condition').value;
    const table = get('table-body');
    table.replaceChildren();

    for (const record of records.slice(start, start + PAGE_SIZE)) {
      const row = element('tr');
      const heading = element('td');
      const button = element('button', record.name, 'text-button name');
      button.type = 'button';
      button.addEventListener('click', () => showDetails(record, button));
      heading.append(button);
      row.append(heading);
      let state;
      let gap = false;
      let citedUrl;
      if (mode === 'institutions') {
        if (record.local) {
          const name = element('bdi', record.local, 'local');
          heading.append(name);
        }
        const names = [...new Set(record.places.map(({ code }) => areas.get(code).name))];
        row.append(element('td', names.length ? names.join(', ') : 'Multi-area or unlisted'),
          element('td', data.types[record.type]));
        state = institutionStatus[record.status];
        citedUrl = record.source;
      } else {
        const cell = condition && data.coverage[record.code][condition];
        row.append(element('td', record.code + ' / ' + record.iso), element('td', record.region || 'Unassigned'));
        state = cell ? conditionStatus[cell.status] : areaStatus[record.status];
        gap = cell ? cell.status !== 'qualified' : record.status === 'UNKNOWN_REVIEW_NEEDED'
          || record.status === 'UNRESOLVED_CONFLICT_EXTERNAL_REVIEW';
        citedUrl = data.catalog;
      }
      const stateCell = element('td');
      stateCell.append(element('span', state, gap ? 'state gap' : 'state'));
      const citeCell = element('td');
      const citation = link(citedUrl, 'Source');
      citation.setAttribute('aria-label', 'Source for ' + record.name);
      citeCell.append(citation);
      row.append(stateCell, citeCell);
      table.append(row);
    }

    get('result-status').textContent = records.length
      ? `Showing ${start + 1}–${Math.min(start + PAGE_SIZE, records.length)} of ${records.length.toLocaleString('en')} ${mode === 'institutions' ? 'records' : 'areas'}`
      : '0 results';
    get('empty').hidden = records.length !== 0;
    get('page-number').textContent = `Page ${page} of ${pages}`;
    get('previous').disabled = page === 1;
    get('next').disabled = page === pages;
  }

  function paragraph(text) {
    body.append(element('p', text));
  }

  function sectionList(title, items) {
    body.append(element('h3', title));
    const list = element('ul');
    for (const item of items) list.append(item);
    body.append(list);
  }

  function showDetails(record, trigger) {
    openButton = trigger;
    get('detail-title').textContent = record.name;
    body.replaceChildren();
    const condition = get('condition').value;
    if (mode === 'institutions') {
      if (record.local) body.append(element('bdi', record.local, 'local'));
      paragraph(evidenceScope[record.status]);
      const citation = element('p');
      citation.append(link(record.source, 'Open institution source'));
      if (/^\d{4}-\d{2}-\d{2}$/.test(record.checked)) {
        const date = element('time', record.checked);
        date.dateTime = record.checked;
        citation.append(' · Recorded check ', date);
      }
      body.append(citation);
      if (record.places.length) {
        const scoped = new Map();
        for (const place of record.places) {
          const item = element('li', areas.get(place.code).name + ' — ' + place.role + ' · ');
          item.append(link(place.source, 'Source'));
          scoped.set([place.code, place.role, place.source].join('|'), item);
        }
        sectionList('Documented area roles', scoped.values());
      }
      const matches = Object.entries(record.conditions).filter(([key]) => !condition || key === condition);
      if (matches.length) {
        const items = [];
        for (const [key, sources] of matches) {
          sources.forEach(({ source, evidence }) => {
            const item = element('li', data.conditions[key] + ' — ' + linkContext[evidence] + ' · ');
            item.append(link(source, 'Source'));
            items.push(item);
          });
        }
        sectionList('Condition-related sources', items);
      }
    } else {
      paragraph('M49 ' + record.code + ' · ISO ' + record.iso + ' / ' + record.iso3 +
        ' · UN region ' + (record.region || 'unassigned'));
      paragraph(areaStatus[record.status] + '. ' + record.scope);
      body.append(link(data.catalog, 'Open UNSD geographic source'));
      if (record.who && record.whoSource) {
        const item = element('p', 'WHO region ' + (whoRegions[record.who] || record.who) + (record.whoDate ? ' · Recorded effective date ' + record.whoDate : '') + ' · ');
        item.append(link(record.whoSource, 'WHO source'));
        body.append(item);
      } else {
        paragraph('WHO regional assignment remains unverified in this handoff.');
      }
      const authorityRecords = institutionsByTerritory.get(record.code);
      if (authorityRecords?.length) {
        const items = authorityRecords.map((item) => {
          const line = element('li', item.name + ' · ');
          line.append(link(item.source, 'Source'));
          return line;
        });
        sectionList('Indexed authorities', items);
      } else {
        paragraph('No authority record is displayed for this area.');
        if (record.status === 'UNKNOWN_REVIEW_NEEDED' || record.status === 'UNRESOLVED_CONFLICT_EXTERNAL_REVIEW') {
          body.append(link(VERIFIED + '/issues/149', 'Open authority follow-up'));
        }
      }
      const cells = Object.entries(data.coverage[record.code]).filter(([key]) => !condition || key === condition);
      sectionList('Condition research coverage', cells.map(([key, cell]) =>
        element('li', data.conditions[key] + ' — ' + conditionStatus[cell.status] +
          (cell.count ? ` (${cell.count} in the handoff)` : ''))));
    }
    dialog.showModal();
  }

  function setView(view) {
    mode = view;
    page = 1;
    get('type-filter').hidden = view === 'coverage';
    get('institutions-view').setAttribute('aria-pressed', String(view === 'institutions'));
    get('coverage-view').setAttribute('aria-pressed', String(view === 'coverage'));
    get('table-caption').textContent = view === 'institutions' ? 'Institution records' : 'Coverage by country and area';
    resetEvidenceOptions();
    renderHead();
    renderRows();
  }

  get('area-total').textContent = data.areas.length;
  get('entity-total').textContent = data.institutions.length.toLocaleString('en');
  get('dataset-link').href = VERIFIED + '/tree/' + data.snapshot + '/docs/atlas/handoffs/team-e';
  optionSet(get('area'), data.areas.map((area) => [area.code, area.name])
    .sort((a, b) => a[1].localeCompare(b[1])), 'All areas');
  optionSet(get('type'), Object.entries(data.types), 'All types');
  optionSet(get('condition'), Object.entries(data.conditions), 'All conditions');

  for (const control of controls) {
    control.addEventListener(control.id === 'query' ? 'input' : 'change', () => {
      page = 1;
      if (control.id === 'condition' && mode === 'coverage') {
        resetEvidenceOptions();
        renderHead();
      }
      renderRows();
    });
  }
  get('institutions-view').addEventListener('click', () => setView('institutions'));
  get('coverage-view').addEventListener('click', () => setView('coverage'));
  get('clear').addEventListener('click', () => {
    controls.forEach((control) => { control.value = ''; });
    setView(mode);
  });
  get('previous').addEventListener('click', () => {
    page -= 1;
    renderRows();
    if (get('previous').disabled) get('next').focus();
  });
  get('next').addEventListener('click', () => {
    page += 1;
    renderRows();
    if (get('next').disabled) get('previous').focus();
  });
  dialog.addEventListener('close', () => openButton?.focus());
  setView(mode);
})();
