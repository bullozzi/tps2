'use strict';
 
const CARS = [
  {
    id: 1,
    brand: 'Ferrari',
    model: '488 Pista',
    type: 'Coupé',
    cv: 720,
    top: 340,
    accel: 2.85,
    price: 280000,
    year: 2022,
    img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
    desc: 'La 488 Pista è l\'apice della famiglia 488. Motore V8 biturbo da 3.9L portato a 720 CV, aerodinamica mutuata dalla SF70H di Formula 1. Un capolavoro di ingegneria italiana.',
    color: 'Rosso Corsa',
  },
  {
    id: 2,
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    type: 'Coupé',
    cv: 640,
    top: 325,
    accel: 2.9,
    price: 220000,
    year: 2021,
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    desc: 'La Huracán EVO eleva l\'esperienza di guida con il suo V10 naturalmente aspirato da 640 CV e la trazione integrale LDVI. Ogni curva diventa un\'esperienza sensoriale unica.',
    color: 'Giallo Belen',
  },
  {
    id: 3,
    brand: 'Porsche',
    model: '911 GT3 RS',
    type: 'Coupé',
    cv: 525,
    top: 296,
    accel: 3.2,
    price: 195000,
    year: 2023,
    img: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    desc: 'La 911 GT3 RS è il laboratorio tecnologico di Porsche su strada. L\'ala posteriore attiva e il boxer 4.0L aspirato da 525 CV la rendono il punto di riferimento assoluto del segmento.',
    color: 'Chalk',
  },
  {
    id: 4,
    brand: 'McLaren',
    model: '720S',
    type: 'Coupé',
    cv: 720,
    top: 341,
    accel: 2.9,
    price: 260000,
    year: 2022,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'La McLaren 720S è nata per ridefinire il concetto di supercar. Carrozzeria monolitica in fibra di carbonio, aerodinamica attiva e un V8 biturbo che grida fino a 7500 giri.',
    color: 'Silica White',
  },
  {
    id: 5,
    brand: 'Bugatti',
    model: 'Chiron Sport',
    type: 'Hypercar',
    cv: 1500,
    top: 420,
    accel: 2.4,
    price: 2800000,
    year: 2023,
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    desc: 'Il Chiron Sport è l\'espressione suprema della filosofia Bugatti. W16 da 8.0L con 1500 CV, capace di 420 km/h limitati elettronicamente. Un\'opera d\'arte meccanica irripetibile.',
    color: 'Bleu Royal',
  },
  {
    id: 6,
    brand: 'Aston Martin',
    model: 'DBS Superleggera',
    type: 'Coupé',
    cv: 725,
    top: 340,
    accel: 3.4,
    price: 285000,
    year: 2022,
    img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    desc: 'La DBS Superleggera unisce eleganza britannica e prestazioni brutali. V12 biturbo da 5.2L da 725 CV in una carrozzeria lavorata artigianalmente. Il Grand Tourer definitivo.',
    color: 'Magnetic Silver',
  },
  {
    id: 7,
    brand: 'Pagani',
    model: 'Huayra BC',
    type: 'Hypercar',
    cv: 791,
    top: 370,
    accel: 2.8,
    price: 2400000,
    year: 2021,
    img: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
    desc: 'La Huayra BC è prodotta in soli 20 esemplari mondiali. AMG M158 V12 biturbo da 6.0L per 791 CV. Ogni componente è un\'opera d\'arte firmata da Horacio Pagani in persona.',
    color: 'Argento Boden',
  },
  {
    id: 8,
    brand: 'Lamborghini',
    model: 'Urus Performante',
    type: 'SUV',
    cv: 666,
    top: 306,
    accel: 3.3,
    price: 250000,
    year: 2023,
    img: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=800&q=80',
    desc: 'L\'Urus Performante è il SUV più sportivo al mondo. V8 biturbo da 4.0L spinto a 666 CV, più leggero del 47 kg rispetto all\'Urus standard. La pista incontra l\'utilità quotidiana.',
    color: 'Arancio Borealis',
  },
  {
    id: 9,
    brand: 'Ferrari',
    model: 'Roma Spider',
    type: 'Roadster',
    cv: 620,
    top: 320,
    accel: 3.4,
    price: 230000,
    year: 2023,
    img: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=800&q=80',
    desc: 'La Roma Spider combina la bellezza senza tempo della Ferrari Roma con il piacere della guida en plein air. V8 biturbo da 3.9L da 620 CV e capote elettrica retrattile in 13.5 secondi.',
    color: 'Bianco Avus',
  },
  {
    id: 10,
    brand: 'McLaren',
    model: '765LT Spider',
    type: 'Roadster',
    cv: 765,
    top: 330,
    accel: 2.8,
    price: 380000,
    year: 2022,
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    desc: 'La 765LT Spider è la Long Tail allo stato puro con il tetto che si apre. Alleggerita di 80 kg rispetto alla 720S, il V8 biturbo eroga 765 CV per un\'esperienza viscerale.',
    color: 'Papaya Spark',
  },
  {
    id: 11,
    brand: 'Porsche',
    model: 'Cayenne Turbo GT',
    type: 'SUV',
    cv: 640,
    top: 300,
    accel: 3.3,
    price: 185000,
    year: 2023,
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    desc: 'Il Cayenne Turbo GT è il SUV sportivo estremo di Porsche. V8 biturbo da 640 CV abbinato al cambio PDK a 8 rapporti. Il risultato: un SUV che batte il Nürburgring in 7:38.9.',
    color: 'GT Silver Metallic',
  },
  {
    id: 12,
    brand: 'Aston Martin',
    model: 'Vantage Roadster',
    type: 'Roadster',
    cv: 510,
    top: 306,
    accel: 3.7,
    price: 155000,
    year: 2022,
    img: 'https://images.unsplash.com/photo-1517994112540-009c47ea476b?w=800&q=80',
    desc: 'Il Vantage Roadster porta l\'eleganza britannica all\'aria aperta. AMG V8 biturbo da 4.0L da 510 CV, capote in tessuto che si apre in 6.7 secondi a velocità fino a 50 km/h.',
    color: 'Onyx Black',
  },
];

const state = {
  cars: [...CARS],             /
  favorites: [],              
  currentPage: 1,
  itemsPerPage: 6,
  filters: {
    search: '',
    brand: '',
    type: '',
    sort: 'default',
  },
  modalOpenId: null,           
};
 
function createElement(tag, attrs = {}, children = null) {
  const el = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (key === 'className') {
      el.className = val;
    } else if (key.startsWith('on') && typeof val === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), val);
    } else {
      el.setAttribute(key, val);
    }
  }
  if (children !== null) {
    if (Array.isArray(children)) {
      children.forEach(child => {
        if (child instanceof Node) el.appendChild(child);
        else el.appendChild(document.createTextNode(String(child)));
      });
    } else if (children instanceof Node) {
      el.appendChild(children);
    } else {
      el.appendChild(document.createTextNode(String(children)));
    }
  }
  return el;
}
 
function formatPrice(num) {
  if (typeof num !== 'number' || isNaN(num)) return '—';
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);
}
 
function sanitize(str) {
  return String(str ?? '').trim().toLowerCase();
}

const LS_FAVS  = 'veloce_favs';
const LS_THEME = 'veloce_theme';
 
function loadFavorites() {
  try {
    const raw = localStorage.getItem(LS_FAVS);
    const parsed = raw ? JSON.parse(raw) : [];
    state.favorites = Array.isArray(parsed) ? parsed.filter(id => typeof id === 'number') : [];
  } catch {
    state.favorites = [];
  }
}
 
function saveFavorites() {
  try {
    localStorage.setItem(LS_FAVS, JSON.stringify(state.favorites));
  } catch {
  }
}
 
function loadTheme() {
  const saved = localStorage.getItem(LS_THEME) ?? 'dark';
  applyTheme(saved);
}
 
function applyTheme(theme) {
  const body = document.getElementById('app');
  const btn  = document.getElementById('themeToggle');
  const icon = btn?.querySelector('.theme-icon');
 
  if (!body) return;
 
  if (theme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    if (icon) icon.textContent = '☽';
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    if (icon) icon.textContent = '☀';
  }
 
  try {
    localStorage.setItem(LS_THEME, theme);
  } catch {  }
}
 
function currentTheme() {
  return document.getElementById('app')?.classList.contains('light-theme') ? 'light' : 'dark';
}
 

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
 
  const toast = createElement('div', { className: 'toast' }, message);
  container.appendChild(toast);
 
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 3000);
}
 
function getFilteredSortedCars() {
  const { search, brand, type, sort } = state.filters;
 
  let result = CARS.filter(car => {
    const q = sanitize(search);
    const matchSearch = !q ||
      sanitize(car.model).includes(q) ||
      sanitize(car.brand).includes(q);
    const matchBrand = !brand || car.brand === brand;
    const matchType  = !type  || car.type  === type;
    return matchSearch && matchBrand && matchType;
  });
 
  switch (sort) {
    case 'price-asc':  result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'name-asc':   result.sort((a, b) => a.model.localeCompare(b.model)); break;
    case 'cv-desc':    result.sort((a, b) => b.cv - a.cv); break;
    default:         break;
  }
 
  return result;
}
 
function buildCarCard(car, isFav) {
  const card = createElement('article', {
    className: 'car-card',
    role: 'listitem',
    'aria-label': `${car.brand} ${car.model}`,
  });
 
  const imgWrap = createElement('div', { className: 'car-img-wrap' });
  const img = createElement('img', {
    className: 'car-img',
    src: car.img,
    alt: `${car.brand} ${car.model} – colore ${car.color}`,
    loading: 'lazy',
  });
  const badge = createElement('span', { className: 'car-badge' }, car.type);
  imgWrap.appendChild(img);
  imgWrap.appendChild(badge);
  card.appendChild(imgWrap);
 
  const body = createElement('div', { className: 'car-body' });
  body.appendChild(createElement('p', { className: 'car-brand' }, car.brand));
  body.appendChild(createElement('h3', { className: 'car-name' }, car.model));
 
  const specsMini = createElement('div', { className: 'car-specs-mini' });
  specsMini.appendChild(createElement('span', { className: 'car-spec-item', 'aria-label': `${car.cv} cavalli vapore` }, `⚡ ${car.cv} CV`));
  specsMini.appendChild(createElement('span', { className: 'car-spec-item', 'aria-label': `0-100 in ${car.accel} secondi` }, `🏁 ${car.accel}s`));
  specsMini.appendChild(createElement('span', { className: 'car-spec-item', 'aria-label': `Velocità massima ${car.top} km/h` }, `↗ ${car.top} km/h`));
  body.appendChild(specsMini);
 
  const footer = createElement('div', { className: 'car-footer' });
  footer.appendChild(createElement('span', { className: 'car-price', 'aria-label': `Prezzo: ${formatPrice(car.price)}` }, formatPrice(car.price)));
 
  const actions = createElement('div', { className: 'car-actions' });
 
  const btnDetail = createElement('button', {
    className: 'btn btn-sm btn-outline',
    'aria-label': `Vedi dettagli ${car.brand} ${car.model}`,
  }, 'Dettagli');
  btnDetail.addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(car.id);
  });
 
  const btnFav = createElement('button', {
    className: `btn-fav${isFav ? ' active' : ''}`,
    'aria-label': isFav ? `Rimuovi ${car.model} dai preferiti` : `Aggiungi ${car.model} ai preferiti`,
    'aria-pressed': String(isFav),
  }, isFav ? '★' : '☆');
 
  btnFav.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(car.id);
  });
 
  actions.appendChild(btnDetail);
  actions.appendChild(btnFav);
  footer.appendChild(actions);
  body.appendChild(footer);
  card.appendChild(body);
 
  card.addEventListener('click', () => openModal(car.id));
 
  return card;
}
 
function renderCatalog() {
  const grid      = document.getElementById('carGrid');
  const pagination = document.getElementById('pagination');
  const counter   = document.getElementById('resultsCount');
 
  if (!grid || !pagination) return;
 
  const filtered = getFilteredSortedCars();
  state.cars = filtered;
 
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / state.itemsPerPage));

  if (state.currentPage > totalPages) state.currentPage = totalPages;
 
  const start = (state.currentPage - 1) * state.itemsPerPage;
  const slice = filtered.slice(start, start + state.itemsPerPage);

  if (counter) counter.textContent = `${total} auto trovate`;
 
 
  grid.textContent = '';
 
  if (slice.length === 0) {
    const empty = createElement('p', { className: 'empty-state' }, 'Nessuna auto corrisponde ai filtri selezionati.');
    grid.appendChild(empty);
  } else {
    slice.forEach(car => {
      const isFav = state.favorites.includes(car.id);
      grid.appendChild(buildCarCard(car, isFav));
    });
  }
 
  renderPagination(totalPages);
}
 
function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.textContent = '';
 
  if (totalPages <= 1) return;
 
  const prev = createElement('button', {
    className: 'page-btn',
    'aria-label': 'Pagina precedente',
  }, '‹');
  if (state.currentPage === 1) prev.disabled = true;
  prev.addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderCatalog();
      scrollToCatalog();
    }
  });
  pagination.appendChild(prev);
 
  for (let i = 1; i <= totalPages; i++) {
    const btn = createElement('button', {
      className: `page-btn${i === state.currentPage ? ' active' : ''}`,
      'aria-label': `Vai a pagina ${i}`,
      'aria-current': i === state.currentPage ? 'page' : undefined,
    }, String(i));
    const pageNum = i; 
    btn.addEventListener('click', () => {
      state.currentPage = pageNum;
      renderCatalog();
      scrollToCatalog();
    });
    pagination.appendChild(btn);
  }
 

  const next = createElement('button', {
    className: 'page-btn',
    'aria-label': 'Pagina successiva',
  }, '›');
  if (state.currentPage === totalPages) next.disabled = true;
  next.addEventListener('click', () => {
    if (state.currentPage < totalPages) {
      state.currentPage++;
      renderCatalog();
      scrollToCatalog();
    }
  });
  pagination.appendChild(next);
}
 
function scrollToCatalog() {
  document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderFavorites() {
  const grid = document.getElementById('favGrid');
  const emptyMsg = document.getElementById('emptyFavs');
  if (!grid) return;
 
  const cards = grid.querySelectorAll('.car-card');
  cards.forEach(c => c.remove());
 
  const favCars = CARS.filter(car => state.favorites.includes(car.id));
 
  if (favCars.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
  } else {
    if (emptyMsg) emptyMsg.style.display = 'none';
    favCars.forEach(car => {
      grid.appendChild(buildCarCard(car, true));
    });
  }
 
  updateFavBadge();
}
 
function updateFavBadge() {
  const badge = document.getElementById('favBadge');
  if (!badge) return;
  badge.textContent = String(state.favorites.length);
  badge.classList.remove('pulse');
  void badge.offsetWidth;
  badge.classList.add('pulse');
}

function toggleFavorite(id) {
  if (typeof id !== 'number') return;
 
  const idx = state.favorites.indexOf(id);
  const car = CARS.find(c => c.id === id);
  if (!car) return;
 
  if (idx === -1) {
    state.favorites.push(id);
    showToast(`★ ${car.brand} ${car.model} aggiunta ai preferiti`);
  } else {
    state.favorites.splice(idx, 1);
    showToast(`☆ ${car.brand} ${car.model} rimossa dai preferiti`);
  }
 
  saveFavorites();
  renderCatalog();
  renderFavorites();
 
  if (state.modalOpenId === id) updateModalFavBtn(id);
}
 

function openModal(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
 
  state.modalOpenId = id;
 
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
 
  setModalField('modalBrand', car.brand);
  setModalField('modalTitle', `${car.brand} ${car.model}`);
  setModalField('modalPrice', formatPrice(car.price));
  setModalField('modalDesc', car.desc);
 
  const imgEl = document.getElementById('modalImg');
  if (imgEl) {
    imgEl.src = car.img;
    imgEl.alt = `${car.brand} ${car.model}`;
  }
 
  const specsList = document.getElementById('modalSpecs');
  if (specsList) {
    specsList.textContent = '';
    const specs = [
      ['Motore', car.type === 'Hypercar' ? 'W16 / V12 Biturbo' : 'V8 / V10 Biturbo'],
      ['Potenza', `${car.cv} CV`],
      ['Top Speed', `${car.top} km/h`],
      ['0–100 km/h', `${car.accel}s`],
      ['Anno', String(car.year)],
      ['Colore', car.color],
    ];
    specs.forEach(([label, value]) => {
      const li = document.createElement('li');
      const strong = createElement('strong', {}, `${label}: `);
      li.appendChild(strong);
      li.appendChild(document.createTextNode(value));
      specsList.appendChild(li);
    });
  }
 
  updateModalFavBtn(id);
 
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
 
  setTimeout(() => document.getElementById('modalClose')?.focus(), 50);
}
 
function setModalField(elId, text) {
  const el = document.getElementById(elId);
  if (el) el.textContent = text;
}
 
function updateModalFavBtn(id) {
  const btn = document.getElementById('modalFavBtn');
  if (!btn) return;
  const isFav = state.favorites.includes(id);
  btn.textContent = isFav ? '★ Rimuovi dai preferiti' : '☆ Aggiungi ai preferiti';
  btn.setAttribute('aria-label', isFav ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti');
}
 
function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.hidden = true;
  document.body.style.overflow = '';
  state.modalOpenId = null;
}
 

function validateForm(form) {
  let valid = true;
 
  form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  form.querySelectorAll('.form-input').forEach(el => el.classList.remove('invalid'));
 
  const nome = form.querySelector('#inputNome');
  if (nome && sanitize(nome.value).length < 2) {
    setError('errNome', nome, 'Inserisci il tuo nome (min 2 caratteri)');
    valid = false;
  }
 
  const email = form.querySelector('#inputEmail');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email) {
    if (!sanitize(email.value)) {
      setError('errEmail', email, 'L\'email è obbligatoria');
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      setError('errEmail', email, 'Inserisci un\'email valida (es. nome@dominio.it)');
      valid = false;
    }
  }
 
  const msg = form.querySelector('#inputMessaggio');
  if (msg && sanitize(msg.value).length < 10) {
    setError('errMessaggio', msg, 'Il messaggio deve contenere almeno 10 caratteri');
    valid = false;
  }
 
  const privacy = form.querySelector('#inputPrivacy');
  if (privacy && !privacy.checked) {
    setError('errPrivacy', null, 'Devi accettare la Privacy Policy per procedere');
    valid = false;
  }
 
  return valid;
}
 
function setError(errId, inputEl, message) {
  const errEl = document.getElementById(errId);
  if (errEl) errEl.textContent = message;
  if (inputEl) {
    inputEl.classList.add('invalid');
    inputEl.setAttribute('aria-invalid', 'true');
  }
}
 

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
 
  const duration = 1500;
  const start = performance.now();
 
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.round(ease * target);
    el.textContent = current.toLocaleString('it-IT');
    if (progress < 1) requestAnimationFrame(update);
  }
 
  requestAnimationFrame(update);
}

function populateBrandSelect() {
  const select = document.getElementById('filterBrand');
  if (!select) return;
 
  const brands = [...new Set(CARS.map(c => c.brand))].sort();
  brands.forEach(brand => {
    const opt = createElement('option', { value: brand }, brand);
    select.appendChild(opt);
  });
}
 
function populateInteresseSelect() {
  const select = document.getElementById('inputInteresse');
  if (!select) return;
 
  CARS.forEach(car => {
    const opt = createElement('option', { value: String(car.id) }, `${car.brand} ${car.model}`);
    select.appendChild(opt);
  });
}
 

function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
 
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
 
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
 
  const sections = ['home', 'catalogo', 'preferiti', 'contatti'];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const activeLink = navLinks.querySelector(`[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
 
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}
 
function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    showToast(next === 'dark' ? '🌑 Tema scuro attivato' : '☀️ Tema chiaro attivato');
  });
}
 
function initFilters() {
  const search = document.getElementById('searchInput');
  const brand  = document.getElementById('filterBrand');
  const type   = document.getElementById('filterType');
  const sort   = document.getElementById('sortSelect');
  const reset  = document.getElementById('resetFilters');
 
  if (search) {
    search.addEventListener('input', () => {
      state.filters.search = search.value;
      state.currentPage = 1;
      renderCatalog();
    });
  }
 
  if (brand) {
    brand.addEventListener('change', () => {
      state.filters.brand = brand.value;
      state.currentPage = 1;
      renderCatalog();
    });
  }
 
  if (type) {
    type.addEventListener('change', () => {
      state.filters.type = type.value;
      state.currentPage = 1;
      renderCatalog();
    });
  }
 
  if (sort) {
    sort.addEventListener('change', () => {
      state.filters.sort = sort.value;
      state.currentPage = 1;
      renderCatalog();
    });
  }
 
  if (reset) {
    reset.addEventListener('click', () => {
      state.filters = { search: '', brand: '', type: '', sort: 'default' };
      state.currentPage = 1;
      if (search) search.value = '';
      if (brand)  brand.value = '';
      if (type)   type.value  = '';
      if (sort)   sort.value  = 'default';
      renderCatalog();
      showToast('Filtri azzerati');
    });
  }
}
 
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const favBtn   = document.getElementById('modalFavBtn');
 
  if (!overlay) return;
 
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
 
  closeBtn?.addEventListener('click', closeModal);
 
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });
 
  favBtn?.addEventListener('click', () => {
    if (state.modalOpenId !== null) {
      toggleFavorite(state.modalOpenId);
    }
  });
}
 
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
 
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
      const errId = input.getAttribute('aria-describedby');
      if (errId) {
        const errEl = document.getElementById(errId);
        if (errEl) errEl.textContent = '';
      }
    });
  });
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      showToast('✅ Richiesta inviata! Ti contatteremo presto.');
      form.reset();
    }
  });
}
 
function initStatsObserver() {
  const nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
 
  nums.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  loadFavorites();
 
  populateBrandSelect();
  populateInteresseSelect();
 
  renderCatalog();
  renderFavorites();
 
  initNavbar();
  initThemeToggle();
  initFilters();
  initModal();
  initForm();
  initStatsObserver();
 
  console.log('[VELOCE] App inizializzata correttamente.');
});
