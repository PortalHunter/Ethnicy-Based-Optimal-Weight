(() => {
  'use strict';

  const data = globalThis.AtlasGlobeData;
  const get = (id) => document.getElementById(id);
  const canvas = get('globe-canvas');
  const ctx = canvas.getContext('2d');
  if (!data || !ctx) {
    get('globe-count').textContent = 'Globe unavailable. Use the searchable table below.';
    return;
  }

  const layers = {
    coverage: { name: 'Regional assignment', color: '#59e9f4', dash: [], cap: 38 },
    membership: { name: 'Membership', color: '#f3b869', dash: [4, 3], cap: 22 },
    research: { name: 'Shared research', color: '#fb90d7', dash: [8, 3, 2, 3], cap: 16 },
    cooperation: { name: 'Cooperation and service', color: '#9cf2a3', dash: [1.5, 3], cap: 16 },
    organization: { name: 'Organizational role', color: '#bea7ff', dash: [], cap: 18 },
  };
  const initial = { lon: -13, lat: 26, zoom: 1 };
  const view = { ...initial };
  const focus = get('globe-focus');
  const filter = get('globe-layer');
  const indexList = get('connection-list');
  const detail = get('connection-detail');
  const previous = get('edges-prev');
  const next = get('edges-next');
  const PAGE_SIZE = 8;
  const RAD = Math.PI / 180;
  let matched = [];
  let drawn = [];
  let selected = '';
  let hovered = '';
  let page = 0;
  let frame = 0;
  let hitLines = [];
  const pointers = new Map();
  let dragged = false;

  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function source(url, title) {
    const anchor = el('a', title);
    anchor.href = url;
    return anchor;
  }

  function sphere([lon, lat]) {
    const a = lon * RAD;
    const b = lat * RAD;
    return [Math.cos(b) * Math.sin(a), Math.sin(b), Math.cos(b) * Math.cos(a)];
  }

  function interpolate(a, b, t) {
    const cosine = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
    const theta = Math.acos(cosine);
    if (theta < .0001) return a;
    const sin = Math.sin(theta);
    if (Math.abs(sin) < .00001) return t < .5 ? a : b;
    const start = Math.sin((1 - t) * theta) / sin;
    const end = Math.sin(t * theta) / sin;
    const lift = 1 + Math.sin(Math.PI * t) * Math.min(.35, .18 * theta + .035);
    return a.map((value, i) => (value * start + b[i] * end) * lift);
  }

  const points = Object.fromEntries(Object.entries(data.nodes).map(([key, node]) => [key, sphere(node.position)]));
  const coasts = data.coasts.map((ring) => ring.map(sphere));
  const dots = data.dots.map(sphere);
  const graticule = [];
  for (let lat = -60; lat <= 60; lat += 30) {
    graticule.push(Array.from({ length: 91 }, (_, i) => sphere([i * 4 - 180, lat])));
  }
  for (let lon = -180; lon < 180; lon += 30) {
    graticule.push(Array.from({ length: 46 }, (_, i) => sphere([lon, i * 4 - 90])));
  }
  const paths = new Map(data.edges.map((edge) => [edge.id, Array.from({ length: 37 }, (_, i) =>
    interpolate(points[edge.left], points[edge.right], i / 36))]));

  function render() {
    frame = 0;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (canvas.width !== Math.round(width * dpr)) canvas.width = Math.round(width * dpr);
    if (canvas.height !== Math.round(height * dpr)) canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = width / 2;
    const cy = height * .47;
    const radius = Math.min(width * .42, height * .405) * view.zoom;
    const yaw = view.lon * RAD;
    const pitch = view.lat * RAD;
    const sy = Math.sin(yaw), cyaw = Math.cos(yaw), sp = Math.sin(pitch), cp = Math.cos(pitch);
    function project([x, y, z]) {
      const rotatedDepth = sy * x + cyaw * z;
      return [cx + radius * (cyaw * x - sy * z),
        cy - radius * (cp * y - sp * rotatedDepth),
        sp * y + cp * rotatedDepth];
    }

    const background = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * .68);
    background.addColorStop(0, '#0f3349');
    background.addColorStop(.58, '#080f20');
    background.addColorStop(1, '#050b16');
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
    for (let i = 1; i <= 120; i++) {
      const x = ((i * 83) % 997) / 997 * width;
      const y = ((i * 151) % 991) / 991 * height;
      ctx.fillStyle = i % 5 === 0 ? '#628da4' : '#234355';
      ctx.fillRect(x, y, i % 11 === 0 ? 1.6 : 1, 1);
    }

    const globe = ctx.createRadialGradient(cx - radius * .3, cy - radius * .34, 0, cx, cy, radius);
    globe.addColorStop(0, '#123e55');
    globe.addColorStop(.73, '#09253d');
    globe.addColorStop(.92, '#0b273e');
    globe.addColorStop(1, '#0c2235');
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.fillStyle = globe;
    ctx.fill();
    ctx.strokeStyle = '#469bb7';
    ctx.lineWidth = 1.35;
    ctx.shadowBlur = 22;
    ctx.shadowColor = '#39b2e8aa';
    ctx.stroke();
    ctx.shadowBlur = 0;

    function polyline(vertices) {
      const visible = [];
      let previousPoint = null;
      ctx.beginPath();
      for (const vertex of vertices) {
        const point = project(vertex);
        if (point[2] > .01) {
          if (previousPoint) ctx.lineTo(point[0], point[1]);
          else ctx.moveTo(point[0], point[1]);
          if (previousPoint) visible.push([previousPoint, point]);
          previousPoint = point;
        } else {
          previousPoint = null;
        }
      }
      ctx.stroke();
      return visible;
    }

    ctx.lineWidth = .7;
    ctx.strokeStyle = '#2973955c';
    for (const line of graticule) polyline(line);
    ctx.strokeStyle = '#75c5df8c';
    ctx.lineWidth = .92;
    for (const ring of coasts) polyline(ring);

    ctx.fillStyle = '#52d1db';
    for (const dot of dots) {
      const [x, y, depth] = project(dot);
      if (depth > .025) {
        ctx.globalAlpha = .21 + depth * .51;
        const size = Math.min(3, view.zoom * 1.64) * (.55 + depth * .45);
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }
    }
    ctx.globalAlpha = 1;

    hitLines = [];
    const visibleNodes = new Set();
    const selectedEdge = matched.find((edge) => edge.id === selected);
    const baseEdges = drawn.filter((edge) => edge.id !== selected);
    if (selectedEdge) baseEdges.push(selectedEdge);
    for (const edge of baseEdges) {
      const layer = layers[edge.kind];
      const active = edge.id === selected || edge.id === hovered;
      ctx.globalAlpha = active ? 1 : selected ? .22 : edge.kind === 'coverage' ? .56 : .83;
      ctx.strokeStyle = layer.color;
      ctx.lineWidth = active ? 2.65 : edge.kind === 'coverage' ? 1.18 : 1.55;
      ctx.setLineDash(layer.dash);
      if (active) {
        ctx.shadowBlur = 13;
        ctx.shadowColor = layer.color;
      }
      const samePoint = data.nodes[edge.left].position.join() === data.nodes[edge.right].position.join();
      if (samePoint) {
        const p = project(points[edge.left]);
        if (p[2] > 0) {
          ctx.beginPath();
          ctx.arc(p[0], p[1], 8, 0, 2 * Math.PI);
          ctx.stroke();
          hitLines.push({ id: edge.id, segments: [[p, p]] });
        }
      } else {
        const segments = polyline(paths.get(edge.id));
        if (segments.length) hitLines.push({ id: edge.id, segments });
      }
      visibleNodes.add(edge.left);
      visibleNodes.add(edge.right);
      ctx.shadowBlur = 0;
    }
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;

    for (const id of visibleNodes) {
      const [x, y, depth] = project(points[id]);
      if (depth <= .025) continue;
      const hub = id.startsWith('D:');
      const active = focus.value === id || selectedEdge?.left === id || selectedEdge?.right === id;
      ctx.beginPath();
      ctx.arc(x, y, active ? 4.8 : hub ? 3.25 : 2.05, 0, 2 * Math.PI);
      ctx.fillStyle = active ? '#fff4d0' : hub ? '#9bf5ff' : '#bde5ee';
      ctx.fill();
      if (active || hub) {
        ctx.beginPath();
        ctx.arc(x, y, active ? 8 : 6.5, 0, 2 * Math.PI);
        ctx.strokeStyle = active ? '#f7d891' : '#70c7df';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (active) {
        ctx.font = '600 12px system-ui, sans-serif';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#05111d';
        ctx.strokeText(data.nodes[id].title, x + 10, y - 8);
        ctx.fillStyle = '#f4faff';
        ctx.fillText(data.nodes[id].title, x + 10, y - 8);
      }
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  function center(id) {
    [view.lon, view.lat] = data.nodes[id].position;
    schedule();
  }

  function orientToEdge(edge) {
    const a = points[edge.left], b = points[edge.right];
    const middle = a.map((x, i) => x + b[i]);
    if (Math.hypot(...middle) < .01) {
      center(edge.left);
    } else {
      view.lon = Math.atan2(middle[0], middle[2]) / RAD;
      view.lat = Math.atan2(middle[1], Math.hypot(middle[0], middle[2])) / RAD;
      schedule();
    }
  }

  function showEdge(edge, moveGlobe) {
    selected = edge.id;
    const left = data.nodes[edge.left];
    const right = data.nodes[edge.right];
    const name = el('p');
    name.append(el('strong', left.title + ' → ' + right.title));
    const location = el('p', left.location + ' → ' + right.location, 'detail-locations');
    const label = el('p', edge.label + (edge.observed ? ' · Recorded ' + edge.observed : ''));
    const locationSources = [left.locationSource, right.locationSource].filter(Boolean);
    const links = el('p');
    links.append(source(edge.source, 'Open relationship source'));
    for (const url of new Set(locationSources)) {
      links.append(' · ', source(url, 'Placement source'));
    }
    detail.replaceChildren(name, label, location, links);
    if (edge.kind === 'research') {
      detail.append(el('p', 'This line tracks attribution to a shared source. The research findings remain unappraised.', 'detail-locations'));
    }
    for (const button of indexList.querySelectorAll('button')) {
      button.setAttribute('aria-pressed', String(button.dataset.edge === selected));
    }
    if (moveGlobe) orientToEdge(edge);
    schedule();
  }

  function renderList() {
    indexList.replaceChildren();
    const slice = matched.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    for (const edge of slice) {
      const item = el('li', '', edge.kind);
      const name = data.nodes[edge.left].title + ' → ' + data.nodes[edge.right].title;
      const button = el('button', name);
      button.type = 'button';
      button.dataset.edge = edge.id;
      button.setAttribute('aria-pressed', String(edge.id === selected));
      button.append(el('small', edge.label));
      button.addEventListener('click', () => showEdge(edge, true));
      item.append(button);
      indexList.append(item);
    }
    if (!slice.length) indexList.append(el('li', 'No mapped connections match these filters.'));
    indexList.scrollTop = 0;
    previous.disabled = page === 0;
    next.disabled = (page + 1) * PAGE_SIZE >= matched.length;
  }

  function updateFilters() {
    selected = '';
    hovered = '';
    page = 0;
    matched = data.edges.filter((edge) => (!filter.value || edge.kind === filter.value) &&
      (!focus.value || edge.left === focus.value || edge.right === focus.value));
    drawn = Object.entries(layers).flatMap(([kind, layer]) => {
      const group = matched.filter((edge) => edge.kind === kind);
      if (focus.value || group.length <= layer.cap) return group;
      return Array.from({ length: layer.cap }, (_, i) => group[Math.floor(i * group.length / layer.cap)]);
    });
    get('globe-count').textContent = matched.length === drawn.length
      ? String(matched.length) + ' mapped connections'
      : String(matched.length) + ' mapped connections · ' + String(drawn.length) + ' shown in the overview';
    detail.replaceChildren(el('p', 'Select a connection to see its source.'));
    renderList();
    schedule();
  }

  function nearest(x, y) {
    let best = 64;
    let id = '';
    for (const line of hitLines) {
      for (const [a, b] of line.segments) {
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const span = dx * dx + dy * dy;
        const t = span ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / span)) : 0;
        const distance = (x - a[0] - t * dx) ** 2 + (y - a[1] - t * dy) ** 2;
        if (distance < best) {
          best = distance;
          id = line.id;
        }
      }
    }
    return id;
  }

  function zoom(scale) {
    view.zoom = Math.max(.65, Math.min(3.1, view.zoom * scale));
    schedule();
  }

  function reset() {
    Object.assign(view, initial);
    schedule();
  }

  for (const [key, layer] of Object.entries(layers)) {
    filter.add(new Option(layer.name, key));
    const chip = el('span', '', 'legend-item ' + key);
    const swatch = el('span', '', 'legend-swatch');
    swatch.setAttribute('aria-hidden', 'true');
    chip.append(swatch, layer.name);
    get('globe-legend').append(chip);
  }

  const options = Object.entries(data.nodes).sort((a, b) => a[1].title.localeCompare(b[1].title));
  for (const [key, node] of options) focus.add(new Option(node.title, key));
  focus.addEventListener('change', () => {
    if (focus.value) center(focus.value);
    updateFilters();
  });
  filter.addEventListener('change', updateFilters);
  previous.addEventListener('click', () => { page -= 1; renderList(); if (previous.disabled) next.focus(); });
  next.addEventListener('click', () => { page += 1; renderList(); if (next.disabled) previous.focus(); });
  get('globe-zoom-in').addEventListener('click', () => zoom(1.23));
  get('globe-zoom-out').addEventListener('click', () => zoom(1 / 1.23));
  get('globe-reset').addEventListener('click', reset);
  canvas.addEventListener('keydown', (event) => {
    if (['+', '='].includes(event.key)) zoom(1.23);
    else if (event.key === '-') zoom(1 / 1.23);
    else if (event.key === 'ArrowLeft') view.lon -= 10;
    else if (event.key === 'ArrowRight') view.lon += 10;
    else if (event.key === 'ArrowUp') view.lat = Math.min(87, view.lat + 10);
    else if (event.key === 'ArrowDown') view.lat = Math.max(-87, view.lat - 10);
    else if (event.key === 'Home') reset();
    else return;
    event.preventDefault();
    schedule();
  });
  canvas.addEventListener('wheel', (event) => {
    if (document.activeElement !== canvas) return;
    event.preventDefault();
    zoom(Math.exp(-event.deltaY * .0012));
  }, { passive: false });
  canvas.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    if (!pointers.size) dragged = false;
    pointers.set(event.pointerId, [event.clientX, event.clientY, event.clientX, event.clientY]);
    canvas.setPointerCapture(event.pointerId);
    canvas.focus({ preventScroll: true });
  });
  canvas.addEventListener('pointermove', (event) => {
    const point = pointers.get(event.pointerId);
    if (!point) {
      const id = nearest(event.offsetX, event.offsetY);
      if (hovered !== id) {
        hovered = id;
        canvas.style.cursor = hovered ? 'pointer' : 'grab';
        schedule();
      }
      return;
    }
    const x = event.clientX, y = event.clientY;
    if (pointers.size >= 2) {
      const other = [...pointers].find(([id]) => id !== event.pointerId)[1];
      const before = Math.hypot(point[0] - other[0], point[1] - other[1]);
      const after = Math.hypot(x - other[0], y - other[1]);
      if (before > 5 && after > 5) zoom(after / before);
      dragged = true;
    } else {
      if (Math.hypot(x - point[2], y - point[3]) > 5) dragged = true;
      if (dragged) {
        view.lon -= (x - point[0]) * .43 / view.zoom;
        view.lat = Math.max(-87, Math.min(87, view.lat + (y - point[1]) * .43 / view.zoom));
      }
    }
    point[0] = x;
    point[1] = y;
    schedule();
  });
  canvas.addEventListener('pointerup', (event) => {
    const held = pointers.delete(event.pointerId);
    if (held && !dragged && !pointers.size) {
      const id = nearest(event.offsetX, event.offsetY);
      const edge = matched.find((item) => item.id === id);
      if (edge) showEdge(edge, false);
    }
  });
  canvas.addEventListener('pointercancel', (event) => pointers.delete(event.pointerId));
  canvas.addEventListener('lostpointercapture', (event) => pointers.delete(event.pointerId));
  canvas.addEventListener('pointerleave', () => { hovered = ''; canvas.style.cursor = ''; schedule(); });
  new ResizeObserver(schedule).observe(canvas);
  updateFilters();
})();
