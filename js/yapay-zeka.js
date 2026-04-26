/* ============================================
   yapay-zeka.js — Yapay Zeka sayfası renderer
   content/yapay-zeka/ dosyalarından yükler
   ============================================ */

/* ─── Premium Makale Kartı (Önizleme Görselli) ─── */
function buildMakaleCard(makale) {
  // Önizleme görseli varsa img, yoksa emoji placeholder
  let thumbHTML;
  if (makale.onizlemeGorsel) {
    thumbHTML = `
      <div class="yz-article-thumb">
        <img src="${escapeHTML(makale.onizlemeGorsel)}" alt="${escapeHTML(makale.baslik)}" loading="lazy" />
      </div>`;
  } else {
    const emoji = (makale.ikonTip === 'emoji' && makale.ikon) ? makale.ikon : '📝';
    thumbHTML = `<div class="yz-article-thumb-emoji">${emoji}</div>`;
  }

  return `
    <a href="${escapeHTML(makale.href)}" class="yz-article-card reveal">
      ${thumbHTML}
      <div class="yz-article-body">
        <div class="yz-article-meta">
          <span class="yz-article-kategori">${escapeHTML(makale.kategori)}</span>
          <span class="yz-article-tarih">${escapeHTML(makale.tarih)}</span>
          <span class="yz-article-okuma">${escapeHTML(makale.okumaSuresi)}</span>
        </div>
        <h3 class="yz-article-title">${escapeHTML(makale.baslik)}</h3>
        <p class="yz-article-desc">${escapeHTML(makale.aciklama)}</p>
        <span class="yz-article-cta">
          Yazıyı Oku
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </a>`;
}

/* ─── Yapay Zeka sayfası başlatıcısı ─── */
async function initYapayZekaPage() {
  const makaleler = await fetchJSON('content/yapay-zeka/makaleler.json');

  const makaleList = document.getElementById('yz-makale-list');
  if (makaleList && makaleler && makaleler.length > 0) {
    makaleList.innerHTML = makaleler.map(buildMakaleCard).join('');
    initReveal(makaleList);
  } else if (makaleList) {
    makaleList.innerHTML = `
      <div class="yz-empty-state">
        <span>🚀</span>
        <p>Henüz yayınlanmış yazı yok. Yakında burada olacak!</p>
      </div>`;
  }
}
