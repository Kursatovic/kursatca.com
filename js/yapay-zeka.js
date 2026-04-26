/* ============================================
   yapay-zeka.js — Yapay Zeka sayfası renderer
   content/yapay-zeka/ dosyalarından yükler
   ============================================ */

/* ─── Özellik kartı (araçlar) ─── */
function buildAracCard(arac) {
  const ikon = arac.ikonTip === 'emoji'
    ? `<span style="font-size:1.5rem;">${arac.ikon}</span>`
    : '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';

  return `
    <div class="feature-item reveal">
      <div class="feature-icon">${ikon}</div>
      <h3>${escapeHTML(arac.baslik)}</h3>
      <p>${escapeHTML(arac.aciklama)}</p>
    </div>`;
}

/* ─── Makale kartı ─── */
function buildMakaleCard(makale) {
  const ikon = makale.ikonTip === 'emoji'
    ? `<span style="font-size:1.4rem;">${makale.ikon}</span>`
    : '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/></svg>';

  return `
    <a href="${escapeHTML(makale.href)}" class="blog-entry reveal">
      <div class="blog-entry-visual">
        <div class="blog-entry-icon">${ikon}</div>
      </div>
      <div class="blog-entry-body">
        <div class="blog-entry-meta">
          <span class="badge badge-sm">${escapeHTML(makale.kategori)}</span>
          <span class="blog-entry-date">${escapeHTML(makale.tarih)}</span>
          <span class="blog-entry-read">${escapeHTML(makale.okumaSuresi)}</span>
        </div>
        <h3 class="blog-entry-title">${escapeHTML(makale.baslik)}</h3>
        <p class="blog-entry-desc">${escapeHTML(makale.aciklama)}</p>
      </div>
    </a>`;
}

/* ─── Yapay Zeka sayfası başlatıcısı ─── */
async function initYapayZekaPage() {
  const [araclar, makaleler] = await Promise.all([
    fetchJSON('content/yapay-zeka/araclar.json'),
    fetchJSON('content/yapay-zeka/makaleler.json')
  ]);

  const aracGrid = document.getElementById('yz-arac-grid');
  if (aracGrid && araclar) {
    aracGrid.innerHTML = araclar.map(buildAracCard).join('');
    initReveal(aracGrid);
  }

  const makaleList = document.getElementById('yz-makale-list');
  if (makaleList && makaleler) {
    makaleList.innerHTML = makaleler.map(buildMakaleCard).join('');
    initReveal(makaleList);
  }
}
