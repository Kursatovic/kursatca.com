/* ============================================
   shared/ui.js — Ortak UI davranışları
   Nav, scroll efektleri, sayaçlar, kart tilt
   ============================================ */

/** Mobil nav toggle */
function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/** Scroll'da nav'a cam efekti ekle */
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/** Aktif nav linkini işaretle */
function initActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  const active = Array.from(links).find(a => a.getAttribute('href') === current);
  if (!active) return;

  links.forEach(a => {
    a.classList.toggle('active', a === active);
  });
}

/** Animasyonlu sayaçlar ([data-count] attribute'lu elemanlar) */
function initCounters() {
  const els = document.querySelectorAll('.stat-number[data-count]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  els.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const start  = performance.now();
  const dur    = 1500;
  (function update(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + '+';
    if (p < 1) requestAnimationFrame(update);
  })(performance.now());
}

/** Smooth scroll (# linkleri atla) */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') { e.preventDefault(); return; }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/** Kart tilt efekti (.cat-card) */
function initCardTilt() {
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -3;
      const ry = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  3;
      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/** Beğeni toggle butonu */
function initLikeToggle() {
  document.querySelectorAll('[data-like-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const liked = btn.classList.toggle('is-liked');
      btn.textContent = liked ? 'Beğenildi' : 'Beğendim';
      btn.setAttribute('aria-pressed', liked);
    });
  });
}

/** Tüm ortak UI başlatıcısı — her sayfada çağrılır */
function initSharedUI() {
  initNavToggle();
  initNavScroll();
  initActiveNav();
  initCounters();
  initSmoothScroll();
  initCardTilt();
  initLikeToggle();
}
