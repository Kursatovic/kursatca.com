/* ============================================
   egitim.js — Eğitim sayfası renderer
   JSON verilerini okur, HTML'e işler
   ============================================ */

/* ─── Hazine Kutusu (Arşiv) ─── */
function initArchiveToggles() {
  document.querySelectorAll('.archive-header').forEach(header => {
    if (header.dataset.archiveReady) return;
    header.dataset.archiveReady = '1';
    header.addEventListener('click', () => {
      header.closest('.special-archive-area')?.classList.toggle('open');
    });
  });
}

/* ─── Ünite Accordion Mantığı ─── */
function initAccordions(container = document) {
  container.querySelectorAll('.unit-header').forEach(header => {
    if (header.dataset.accordionReady) return;
    header.dataset.accordionReady = '1';
    header.addEventListener('click', () => {
      const accordion = header.closest('.unit-accordion');
      const isActive = accordion.classList.contains('active');
      
      // Diğer üniteleri kapat
      const parent = accordion.parentElement;
      parent.querySelectorAll('.unit-accordion').forEach(item => item.classList.remove('active'));
      
      // Tıklananı aç/kapat
      if (!isActive) {
        accordion.classList.add('active');
      }
    });
  });
}

/* ─── İkon seçici (kaynak tipine göre) ─── */
function archiveIcon(tip) {
  if (tip === 'kitap') {
    return '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>';
  }
  return '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
}

/* ─── Tek bir sınıfın HTML'ini oluştur ─── */
function buildGradeHTML(data) {
  const { sinif, stats, hazineKutusu, uniteler } = data;

  /* İstatistik satırı */
  const statsHTML = `
    <div class="grade-summary">
      <div class="grade-summary-item"><span class="gs-number">${stats.unite}</span><span class="gs-label">Ünite</span></div>
      <div class="grade-summary-item"><span class="gs-number">${stats.konu}</span><span class="gs-label">Konu</span></div>
      <div class="grade-summary-item"><span class="gs-number">${sinif}</span><span class="gs-label">Sınıf Seviyesi</span></div>
    </div>`;

  /* Hazine Kutusu */
  const archiveContentHTML = hazineKutusu.bos
    ? `<div class="archive-list" style="text-align:center;padding:40px;"><p style="color:var(--clr-text-muted);">Henüz bir döküman bulunmuyor. Yeni kaynaklar eklendiğinde burada görebileceksin.</p></div>`
    : `<div class="archive-list">${hazineKutusu.kaynaklar.map(k => `
        <div class="archive-item">
          <div class="archive-item-head">
            <div style="display:flex;align-items:center;gap:12px;">
              <div class="cat-icon" style="background:rgba(${k.ikonRenk === 'secondary' ? '6,182,212' : '124,58,237'},0.1);width:44px;height:44px;border-radius:12px;color:var(--clr-${k.ikonRenk});font-size:1.2rem;">
                ${archiveIcon(k.ikonTip)}
              </div>
              <h4>${escapeHTML(k.baslik)}</h4>
            </div>
            <span class="badge" style="background:rgba(${k.rozetRenk === 'secondary' ? '6,182,212' : '124,58,237'},0.1);color:var(--clr-${k.rozetRenk});font-size:0.7rem;">${escapeHTML(k.rozetMetin)}</span>
          </div>
          <div class="archive-content-wrapper">
            <div class="archive-description">
              ${k.paragraflar.map(p => `<p>${escapeHTML(p)}</p>`).join('')}
              <div class="archive-actions">
                <a href="${escapeHTML(k.butonHref)}" target="_blank" class="btn btn-primary">
                  <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  ${escapeHTML(k.butonMetin)}
                </a>
              </div>
            </div>
            <img src="${escapeHTML(k.gorsel)}" alt="${escapeHTML(k.gorselAlt)}" class="archive-visual">
          </div>
        </div>`).join('')}
      </div>`;

  const archiveHTML = `
    <div class="special-archive-area reveal" id="archive-${sinif}">
      <div class="archive-header">
        <div class="archive-header-left">
          <span class="archive-badge">📦 Hazine Kutusu</span>
          <h2>${escapeHTML(hazineKutusu.baslik)}</h2>
          <p style="font-size:0.85rem;color:var(--clr-text-muted);margin:0;">${escapeHTML(hazineKutusu.altBaslik)}</p>
        </div>
        <div class="archive-toggle-btn">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div class="archive-content">${archiveContentHTML}</div>
    </div>`;

  /* Ünite listesi */
  const unitsHTML = `
    <div class="unit-list">
      ${uniteler.map(unite => `
        <div class="unit-accordion">
          <div class="unit-header">
            <div class="unit-number">${unite.no}</div>
            <div class="unit-info">
              <h3>${escapeHTML(unite.baslik)}</h3>
              <span class="unit-meta">${unite.konular.length} konu</span>
            </div>
            <div class="unit-toggle"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
          </div>
          <div class="unit-body">
            <div class="unit-divider"></div>
            <div class="topic-list">
              ${unite.konular.map(konu => `
                <a href="${escapeHTML(konu.href)}" class="topic-item">
                  <span class="topic-num">${escapeHTML(String(konu.no))}</span>
                  <span class="topic-title">${escapeHTML(konu.baslik)}</span>
                  <span class="topic-badge">${escapeHTML(konu.badge)}</span>
                  <span class="topic-arrow"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></span>
                </a>`).join('')}
            </div>
          </div>
        </div>`).join('')}
    </div>`;

  return statsHTML + archiveHTML + unitsHTML;
}

/* ─── Son Eklenenler bölümü ─── */
/* content/egitim/son-eklenenler.json dosyasından verileri çeker */
async function loadRecentItems() {
  const grid = document.getElementById('recent-docs-grid');
  if (!grid) return;

  const veriler = await fetchJSON('content/egitim/son-eklenenler.json');

  if (!veriler || !veriler.length) {
    grid.innerHTML = '<p style="color:var(--clr-text-muted);padding:1rem;">Henüz yeni içerik yok.</p>';
    return;
  }

  const rgb = { primary: '124,58,237', secondary: '6,182,212', accent: '255,45,85' };
  
  grid.innerHTML = veriler.map((item) => {
    const renk = item.renk || 'primary';
    return `
      <a href="${escapeHTML(item.href)}" class="topic-item" style="background:var(--clr-bg-surface);border:1px solid var(--clr-border-glass);border-radius:var(--radius-md);">
        <div class="topic-num" style="background:rgba(${rgb[renk]},0.1);color:var(--clr-${renk});padding:8px;border-radius:8px;">
          <span style="font-size:0.7rem;font-weight:800;display:inline-block;vertical-align:middle;color:currentColor;">YENİ</span>
        </div>
        <div class="topic-title" style="font-weight:600;">${escapeHTML(item.baslik)}</div>
        <div class="topic-arrow">→</div>
      </a>`;
  }).join('');
}

/* ─── Tek sınıfı yükle ve panele yerleştir ─── */
async function loadGrade(sinif, panel) {
  if (panel.dataset.loaded) return; // Zaten yüklendi
  panel.dataset.loaded = 'loading';

  const grup = sinif <= 8 ? 'ortaokul' : 'lise';
  const data = await fetchJSON(`content/egitim/${grup}/${sinif}-sinif.json`);

  if (!data) {
    panel.innerHTML = '<p style="color:var(--clr-text-muted);padding:2rem;">İçerik yüklenemedi.</p>';
    return;
  }

  panel.innerHTML = buildGradeHTML(data);
  panel.dataset.loaded = 'done';

  // Yeni eklenen accordion ve archive listenerlarını bağla
  initAccordions(panel);
  initArchiveToggles();
  initReveal(panel);
}

/* ─── Tüm sınıf tab butonlarına lazy-load ekle ─── */
function initGradeLazyLoad() {
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const grade = parseInt(btn.dataset.grade, 10);
      const panel = document.getElementById('grade-' + grade);
      if (panel) loadGrade(grade, panel);
    });
  });

  // Varsayılan açık panelleri de yükle
  document.querySelectorAll('.grade-panel.active').forEach(panel => {
    const sinif = parseInt(panel.id.replace('grade-', ''), 10);
    if (sinif) loadGrade(sinif, panel);
  });
}

/* ─── Eğitim sayfası başlatıcısı ─── */
async function initEgitimPage() {
  await loadRecentItems();
  initGradeLazyLoad();
}
