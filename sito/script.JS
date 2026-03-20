'use strict';
 
 function makeSVG(color1, color2, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1}"/>
        <stop offset="100%" style="stop-color:${color2}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#g)"/>
    <rect width="800" height="450" fill="rgba(0,0,0,0.25)"/>
    <text x="400" y="200" font-family="Georgia,serif" font-size="48" font-weight="bold"
          fill="rgba(255,255,255,0.1)" text-anchor="middle">${label}</text>
    <g transform="translate(200,240)" fill="rgba(255,255,255,0.12)">
      <ellipse cx="200" cy="60" rx="200" ry="55"/>
      <rect x="60" y="10" width="280" height="50" rx="20"/>
      <circle cx="80"  cy="70" r="28" fill="rgba(0,0,0,0.4)"/>
      <circle cx="80"  cy="70" r="16" fill="rgba(255,255,255,0.2)"/>
      <circle cx="320" cy="70" r="28" fill="rgba(0,0,0,0.4)"/>
      <circle cx="320" cy="70" r="16" fill="rgba(255,255,255,0.2)"/>
    </g>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
 

const CARS = [
  {
    id: 1, brand: 'Ferrari', model: '488 Pista', type: 'Coupé',
    cv: 720, top: 340, accel: 2.85, price: 280000, year: 2022, color: 'Rosso Corsa',
    img: makeSVG('#8B0000', '#2a0000', 'Ferrari'),
    desc: 'La 488 Pista è l\'apice della famiglia 488. Motore V8 biturbo da 3.9L portato a 720 CV, aerodinamica mutuata dalla SF70H di Formula 1. Un capolavoro di ingegneria italiana.',
  },
  {
    id: 2, brand: 'Lamborghini', model: 'Huracán EVO', type: 'Coupé',
    cv: 640, top: 325, accel: 2.9, price: 220000, year: 2021, color: 'Giallo Belén',
    img: makeSVG('#7a6200', '#2a2000', 'Lamborghini'),
    desc: 'La Huracán EVO eleva l\'esperienza di guida con il suo V10 aspirato da 640 CV e la trazione integrale LDVI. Ogni curva diventa un\'esperienza sensoriale unica.',
  },
  {
    id: 3, brand: 'Porsche', model: '911 GT3 RS', type: 'Coupé',
    cv: 525, top: 296, accel: 3.2, price: 195000, year: 2023, color: 'Chalk',
    img: makeSVG('#2a2a2a', '#0a0a0a', 'Porsche'),
    desc: 'La 911 GT3 RS è il laboratorio tecnologico di Porsche su strada. L\'ala attiva e il boxer 4.0L aspirato da 525 CV la rendono il riferimento assoluto del segmento.',
  },
  {
    id: 4, brand: 'McLaren', model: '720S', type: 'Coupé',
    cv: 720, top: 341, accel: 2.9, price: 260000, year: 2022, color: 'Silica White',
    img: makeSVG('#00578a', '#001a2a', 'McLaren'),
    desc: 'La McLaren 720S è nata per ridefinire il concetto di supercar. Carrozzeria monolitica in fibra di carbonio, aerodinamica attiva e un V8 biturbo che grida fino a 7500 giri.',
  },
  {
    id: 5, brand: 'Bugatti', model: 'Chiron Sport', type: 'Hypercar',
    cv: 1500, top: 420, accel: 2.4, price: 2800000, year: 2023, color: 'Bleu Royal',
    img: makeSVG('#00268a', '#00082a', 'Bugatti'),
    desc: 'Il Chiron Sport è l\'espressione suprema della filosofia Bugatti. W16 da 8.0L con 1500 CV, capace di 420 km/h limitati elettronicamente. Un\'opera d\'arte meccanica irripetibile.',
  },
  {
    id: 6, brand: 'Aston Martin', model: 'DBS Superleggera', type: 'Coupé',
    cv: 725, top: 340, accel: 3.4, price: 285000, year: 2022, color: 'Magnetic Silver',
    img: makeSVG('#1a3a1a', '#050f05', 'AstonMartin'),
    desc: 'La DBS Superleggera unisce eleganza britannica e prestazioni brutali. V12 biturbo da 5.2L da 725 CV in una carrozzeria lavorata artigianalmente. Il Grand Tourer definitivo.',
  },
  {
    id: 7, brand: 'Pagani', model: 'Huayra BC', type: 'Hypercar',
    cv: 791, top: 370, accel: 2.8, price: 2400000, year: 2021, color: 'Argento Boden',
    img: makeSVG('#4a3500', '#1a1000', 'Pagani'),
    desc: 'La Huayra BC è prodotta in soli 20 esemplari mondiali. AMG V12 biturbo da 6.0L per 791 CV. Ogni componente è un\'opera d\'arte firmata da Horacio Pagani in persona.',
  },
  {
    id: 8, brand: 'Lamborghini', model: 'Urus Performante', type: 'SUV',
    cv: 666, top: 306, accel: 3.3, price: 250000, year: 2023, color: 'Arancio Borealis',
    img: makeSVG('#7a3000', '#2a1000', 'UrusPerf'),
    desc: 'L\'Urus Performante è il SUV più sportivo al mondo. V8 biturbo da 4.0L spinto a 666 CV, 47 kg più leggero dell\'Urus standard. La pista incontra l\'utilità quotidiana.',
  },
  {
    id: 9, brand: 'Ferrari', model: 'Roma Spider', type: 'Roadster',
    cv: 620, top: 320, accel: 3.4, price: 230000, year: 2023, color: 'Bianco Avus',
    img: makeSVG('#6a0000', '#1a0000', 'RomaSpider'),
    desc: 'La Roma Spider combina la bellezza senza tempo della Ferrari Roma con il piacere della guida en plein air. V8 biturbo da 620 CV, capote elettrica retrattile in 13.5 secondi.',
  },
  {
    id: 10, brand: 'McLaren', model: '765LT Spider', type: 'Roadster',
    cv: 765, top: 330, accel: 2.8, price: 380000, year: 2022, color: 'Papaya Spark',
    img: makeSVG('#7a4500', '#2a1500', '765LT'),
    desc: 'La 765LT Spider è la Long Tail con il tetto aperto. Alleggerita di 80 kg, il V8 biturbo eroga 765 CV per un\'esperienza viscerale e senza compromessi.',
  },
  {
    id: 11, brand: 'Porsche', model: 'Cayenne Turbo GT', type: 'SUV',
    cv: 640, top: 300, accel: 3.3, price: 185000, year: 2023, color: 'GT Silver',
    img: makeSVG('#1a1a3a', '#05050f', 'CayenneTGT'),
    desc: 'Il Cayenne Turbo GT è il SUV sportivo estremo di Porsche. V8 biturbo da 640 CV e cambio PDK. Il SUV che ha battuto il Nürburgring in 7:38.9.',
  },
  {
    id: 12, brand: 'Aston Martin', model: 'Vantage Roadster', type: 'Roadster',
    cv: 510, top: 306, accel: 3.7, price: 155000, year: 2022, color: 'Onyx Black',
    img: makeSVG('#0a0a0a', '#1a1510', 'VantageR'),
    desc: 'Il Vantage Roadster porta l\'eleganza britannica all\'aria aperta. AMG V8 biturbo da 510 CV, capote in tessuto che si apre in 6.7 secondi fino a 50 km/h.',
  },
];
 

const state = {
  favorites: [],
  currentPage: 1,
  itemsPerPage: 6,
  filters: { search: '', brand: '', type: '', sort: 'default' },
  modalOpenId: null,
};
 
 
function el(id) { return document.getElementById(id); }
 
function createElement(tag, attrs, children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'className') node.className = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, v);
  }
  if (children !== undefined && children !== null) {
    if (Array.isArray(children)) {
      children.forEach(c => node.appendChild(c instanceof Node ? c : document.createTextNode(String(c))));
    } else if (children instanceof Node) {
      node.appendChild(children);
    } else {
      node.appendChild(document.createTextNode(String(children)));
    }
  }
  return node;
}
 
function formatPrice(n) {
  if (typeof n !== 'number' || isNaN(n)) return '—';
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}
 
function sanitize(s) { return String(s ?? '').trim().toLowerCase(); }
 

function loadFavorites() {
  try {
    const raw = localStorage.getItem('veloce_favs');
    const parsed = raw ? JSON.parse(raw) : [];
    state.favorites = Array.isArray(parsed) ? parsed.filter(id => typeof id === 'number') : [];
  } catch {
    state.favorites = [];
  }
}
 
function saveFavorites() {
  try { localStorage.setItem('veloce_favs', JSON.stringify(state.favorites)); } catch { /* silenzioso */ }
}
 
function loadTheme() {
  applyTheme(localStorage.getItem('veloce_theme') ?? 'dark');
}
 
function applyTheme(theme) {
  const body = el('app');
  const icon = el('themeToggle')?.querySelector('.theme-icon');
  if (!body) return;
  body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  if (icon) icon.textContent = theme === 'light' ? '☽' : '☀';
  try { localStorage.setItem('veloce_theme', theme); } catch { /* silenzioso */ }
}
 

function showToast(message) {
  const container = el('toastContainer');
  if (!container) return;
  const toast = createElement('div', { className: 'toast' }, message);
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 3000);
}
 

function getFiltered() {
  const { search, brand, type, sort } = state.filters;
  let result = CARS.filter(car => {
    const q = sanitize(search);
    const matchSearch = !q || sanitize(car.model).includes(q) || sanitize(car.brand).includes(q);
    const matchBrand  = !brand || car.brand === brand;
    const matchType   = !type  || car.type  === type;
    return matchSearch && matchBrand && matchType;
  });
  if (sort === 'price-asc')  result.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'name-asc')   result.sort((a, b) => a.model.localeCompare(b.model));
  if (sort === 'cv-desc')    result.sort((a, b) => b.cv - a.cv);
  return result;
}
 

function buildCard(car, isFav) {
  const card = createElement('article', {
    className: 'car-card', role: 'listitem',
    'aria-label': `${car.brand} ${car.model}`,
  });
 
  const imgWrap = createElement('div', { className: 'car-img-wrap' });
  imgWrap.appendChild(createElement('img', {
    className: 'car-img', src: car.img,
    alt: `${car.brand} ${car.model} – ${car.color}`, loading: 'lazy',
  }));
  imgWrap.appendChild(createElement('span', { className: 'car-badge' }, car.type));
  card.appendChild(imgWrap);
 
  const body = createElement('div', { className: 'car-body' });
  body.appendChild(createElement('p',  { className: 'car-brand' }, car.brand));
  body.appendChild(createElement('h3', { className: 'car-name'  }, car.model));
 
  const specs = createElement('div', { className: 'car-specs-mini' });
  specs.appendChild(createElement('span', { 'aria-label': `${car.cv} cavalli` }, `⚡ ${car.cv} CV`));
  specs.appendChild(createElement('span', { 'aria-label': `0-100 in ${car.accel} secondi` }, `🏁 ${car.accel}s`));
  specs.appendChild(createElement('span', { 'aria-label': `Top speed ${car.top} kmh` }, `↗ ${car.top} km/h`));
  body.appendChild(specs);
 
  const footer = createElement('div', { className: 'car-footer' });
  footer.appendChild(createElement('span', {
    className: 'car-price', 'aria-label': `Prezzo: ${formatPrice(car.price)}`,
  }, formatPrice(car.price)));
 
  const actions = createElement('div', { className: 'car-actions' });
 
  const btnDetail = createElement('button', {
    className: 'btn btn-sm btn-outline', 'aria-label': `Dettagli ${car.brand} ${car.model}`,
  }, 'Dettagli');
  btnDetail.addEventListener('click', e => { e.stopPropagation(); openModal(car.id); });
 
  const btnFav = createElement('button', {
    className: `btn-fav${isFav ? ' active' : ''}`,
    'aria-label': isFav ? `Rimuovi ${car.model} dai preferiti` : `Aggiungi ${car.model} ai preferiti`,
    'aria-pressed': String(isFav),
  }, isFav ? '★' : '☆');
  btnFav.addEventListener('click', e => { e.stopPropagation(); toggleFav(car.id); });
 
  actions.appendChild(btnDetail);
  actions.appendChild(btnFav);
  footer.appendChild(actions);
  body.appendChild(footer);
  card.appendChild(body);
  card.addEventListener('click', () => openModal(car.id));
  return card;
}
 
function renderCatalog() {
  const grid = el('carGrid');
  const cnt  = el('resultsCount');
  if (!grid) return;
 
  const filtered   = getFiltered();
  const total      = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / state.itemsPerPage));
 
  if (state.currentPage > totalPages) state.currentPage = totalPages;
 
  const start = (state.currentPage - 1) * state.itemsPerPage;
  const slice = filtered.slice(start, start + state.itemsPerPage);
 
  if (cnt) cnt.textContent = `${total} auto trovate`;
 
  grid.textContent = ''; // svuota senza innerHTML
  if (slice.length === 0) {
    grid.appendChild(createElement('p', { className: 'empty-state' }, 'Nessuna auto corrisponde ai filtri.'));
  } else {
    slice.forEach(car => grid.appendChild(buildCard(car, state.favorites.includes(car.id))));
  }
 
  renderPagination(totalPages);
}
 
function renderPagination(totalPages) {
  const pag = el('pagination');
  if (!pag) return;
  pag.textContent = '';
  if (totalPages <= 1) return;
 
  const prev = createElement('button', { className: 'page-btn', 'aria-label': 'Pagina precedente' }, '‹');
  if (state.currentPage === 1) prev.disabled = true;
  prev.addEventListener('click', () => { state.currentPage--; renderCatalog(); });
  pag.appendChild(prev);
 
  for (let i = 1; i <= totalPages; i++) {
    const btn = createElement('button', {
      className: `page-btn${i === state.currentPage ? ' active' : ''}`,
      'aria-label': `Vai a pagina ${i}`,
      'aria-current': i === state.currentPage ? 'page' : undefined,
    }, String(i));
    const pageNum = i;
    btn.addEventListener('click', () => { state.currentPage = pageNum; renderCatalog(); });
    pag.appendChild(btn);
  }
 
  const next = createElement('button', { className: 'page-btn', 'aria-label': 'Pagina successiva' }, '›');
  if (state.currentPage === totalPages) next.disabled = true;
  next.addEventListener('click', () => { state.currentPage++; renderCatalog(); });
  pag.appendChild(next);
}
 

function renderFavs() {
  const grid  = el('favGrid');
  const empty = el('emptyFavs');
  if (!grid) return;
 
  grid.querySelectorAll('.car-card').forEach(c => c.remove());
  const favCars = CARS.filter(c => state.favorites.includes(c.id));
 
  if (favCars.length === 0) {
    if (empty) empty.style.display = 'block';
  } else {
    if (empty) empty.style.display = 'none';
    favCars.forEach(car => grid.appendChild(buildCard(car, true)));
  }
  updateBadge();
}
 
function updateBadge() {
  const badge = el('favBadge');
  if (!badge) return;
  badge.textContent = String(state.favorites.length);
  badge.classList.remove('pulse');
  void badge.offsetWidth; // forza reflow per riattivare animazione CSS
  badge.classList.add('pulse');
}
 
function toggleFav(id) {
  if (typeof id !== 'number') return;
  const car = CARS.find(c => c.id === id);
  if (!car) return;
 
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    showToast(`★ ${car.brand} ${car.model} aggiunta ai preferiti`);
  } else {
    state.favorites.splice(idx, 1);
    showToast(`☆ ${car.brand} ${car.model} rimossa dai preferiti`);
  }
 
  saveFavorites();
  renderCatalog();
  renderFavs();
  if (state.modalOpenId === id) updateModalFavBtn(id);
}
 

function openModal(id) {
  const car     = CARS.find(c => c.id === id);
  const overlay = el('modalOverlay');
  if (!car || !overlay) return;
  state.modalOpenId = id;
 
  const setT = (elId, text) => { const e = el(elId); if (e) e.textContent = text; };
  setT('modalBrand', car.brand);
  setT('modalTitle', `${car.brand} ${car.model}`);
  setT('modalPrice', formatPrice(car.price));
  setT('modalDesc',  car.desc);
 
  const imgEl = el('modalImg');
  if (imgEl) { imgEl.src = car.img; imgEl.alt = `${car.brand} ${car.model}`; }
 
  const specsList = el('modalSpecs');
  if (specsList) {
    specsList.textContent = '';
    const specs = [
      ['Tipo',     car.type],
      ['Potenza',  `${car.cv} CV`],
      ['Top Speed',`${car.top} km/h`],
      ['0–100',    `${car.accel}s`],
      ['Anno',     String(car.year)],
      ['Colore',   car.color],
    ];
    specs.forEach(([label, value]) => {
      const li = document.createElement('li');
      li.appendChild(createElement('strong', {}, `${label}: `));
      li.appendChild(document.createTextNode(value));
      specsList.appendChild(li);
    });
  }
 
  updateModalFavBtn(id);
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => el('modalClose')?.focus(), 50);
}
 
function updateModalFavBtn(id) {
  const btn = el('modalFavBtn');
  if (!btn) return;
  const isFav = state.favorites.includes(id);
  btn.textContent = isFav ? '★ Rimuovi dai preferiti' : '☆ Aggiungi ai preferiti';
}
 
function closeModal() {
  const overlay = el('modalOverlay');
  if (!overlay) return;
  overlay.hidden = true;
  document.body.style.overflow = '';
  state.modalOpenId = null;
}

function validateForm(form) {
  let valid = true;
 
  form.querySelectorAll('.form-error').forEach(e => e.textContent = '');
  form.querySelectorAll('.form-input').forEach(e => { e.classList.remove('invalid'); e.removeAttribute('aria-invalid'); });
 
  const setErr = (errId, inputEl, msg) => {
    const errEl = el(errId);
    if (errEl) errEl.textContent = msg;
    if (inputEl) { inputEl.classList.add('invalid'); inputEl.setAttribute('aria-invalid', 'true'); }
    valid = false;
  };
 
  const nome  = form.querySelector('#inputNome');
  const email = form.querySelector('#inputEmail');
  const msg   = form.querySelector('#inputMessaggio');
  const priv  = form.querySelector('#inputPrivacy');
 
  if (nome && sanitize(nome.value).length < 2)
    setErr('errNome', nome, 'Inserisci il tuo nome (min 2 caratteri)');
 
  if (email) {
    if (!sanitize(email.value))
      setErr('errEmail', email, 'Email obbligatoria');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))
      setErr('errEmail', email, 'Email non valida (es. nome@dominio.it)');
  }
 
  if (msg && sanitize(msg.value).length < 10)
    setErr('errMessaggio', msg, 'Messaggio troppo corto (min 10 caratteri)');
 
  if (priv && !priv.checked)
    setErr('errPrivacy', null, 'Devi accettare la Privacy Policy');
 
  return valid;
}

function animateCounter(elem) {
  const target = parseInt(elem.dataset.target, 10);
  if (isNaN(target)) return;
  const start = performance.now();
  const dur = 1500;
  (function tick(now) {
    const p    = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(2, -10 * p); // easeOutExpo
    elem.textContent = Math.round(ease * target).toLocaleString('it-IT');
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}
 

document.addEventListener('DOMContentLoaded', () => {
 
  loadTheme();
  loadFavorites();
 
  const brandSel = el('filterBrand');
  [...new Set(CARS.map(c => c.brand))].sort().forEach(b => {
    brandSel?.appendChild(createElement('option', { value: b }, b));
  });
 
  const intSel = el('inputInteresse');
  CARS.forEach(c => {
    intSel?.appendChild(createElement('option', { value: String(c.id) }, `${c.brand} ${c.model}`));
  });
 
  renderCatalog();
  renderFavs();
 
  const hamburger = el('hamburger');
  const navLinks  = el('navLinks');
 
  hamburger?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });
 
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });
   const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks?.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        navLinks?.querySelector(`[href="#${entry.target.id}"]`)?.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
 
  ['home', 'catalogo', 'preferiti', 'contatti'].forEach(id => {
    const sec = document.getElementById(id);
    if (sec) sectionObserver.observe(sec);
  });
 
  el('themeToggle')?.addEventListener('click', () => {
    const isLight = el('app').classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
    showToast(isLight ? '🌑 Tema scuro attivato' : '☀️ Tema chiaro attivato');
  });
 
  el('searchInput')?.addEventListener('input', e => {
    state.filters.search = e.target.value;
    state.currentPage = 1;
    renderCatalog();
  });
  el('filterBrand')?.addEventListener('change', e => {
    state.filters.brand = e.target.value;
    state.currentPage = 1;
    renderCatalog();
  });
  el('filterType')?.addEventListener('change', e => {
    state.filters.type = e.target.value;
    state.currentPage = 1;
    renderCatalog();
  });
  el('sortSelect')?.addEventListener('change', e => {
    state.filters.sort = e.target.value;
    state.currentPage = 1;
    renderCatalog();
  });
  el('resetFilters')?.addEventListener('click', () => {
    state.filters = { search: '', brand: '', type: '', sort: 'default' };
    state.currentPage = 1;
    ['searchInput', 'filterBrand', 'filterType'].forEach(id => { const e = el(id); if (e) e.value = ''; });
    const ss = el('sortSelect'); if (ss) ss.value = 'default';
    renderCatalog();
    showToast('Filtri azzerati');
  });
 
  el('modalOverlay')?.addEventListener('click', e => {
    if (e.target === el('modalOverlay')) closeModal();
  });
  el('modalClose')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && el('modalOverlay') && !el('modalOverlay').hidden) closeModal();
  });
  el('modalFavBtn')?.addEventListener('click', () => {
    if (state.modalOpenId !== null) toggleFav(state.modalOpenId);
  });
 
  const form = el('contactForm');
  form?.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
      const errId = input.getAttribute('aria-describedby');
      if (errId) { const errEl = el(errId); if (errEl) errEl.textContent = ''; }
    });
  });
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm(form)) {
      showToast('✅ Richiesta inviata! Ti contatteremo presto.');
      form.reset();
    }
  });
 
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(n => counterObserver.observe(n));
 
  console.log('[VELOCE] App inizializzata correttamente.');
});
