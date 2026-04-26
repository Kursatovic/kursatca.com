/* ============================================
   shared/utils.js — Yardımcı fonksiyonlar
   Tüm sayfalarda kullanılabilir genel araçlar
   ============================================ */

/**
 * JSON dosyasını yükler. Hata durumunda konsola yazar ve null döner.
 * @param {string} path - JSON dosyasının yolu (örn: 'content/blog/posts.json')
 * @returns {Promise<any|null>}
 */
async function fetchJSON(path) {
  try {
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${path}`);
    return await res.json();
  } catch (err) {
    console.error('[kursatca] JSON yüklenemedi:', path, err);
    return null;
  }
}

/**
 * Metni kısaltır, maksimum uzunlukta keser.
 */
function truncate(text, maxLen = 120) {
  if (!text || text.length <= maxLen) return text;
  return text.slice(0, maxLen).trimEnd() + '…';
}

/**
 * HTML özel karakterlerini escape eder (XSS önlemi).
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Reveal animasyonlarını başlatır (Intersection Observer).
 * Yeni eklenen elemanlarda çağırılabilir.
 */
function initReveal(container = document) {
  const els = container.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.08}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}
