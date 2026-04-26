/* ============================================
   kursatca.com — main.js
   Sadece başlatıcı. Asıl mantık shared/ ve
   sayfa JS dosyalarında bulunuyor.

   DOKUNMA KURALI:
   Bu dosyaya yeni özellik ekleme. Paylaşılan
   davranışlar → js/shared/  içine git.
   Sayfa özelinde bir şey → egitim.js, blog.js
   veya yapay-zeka.js içine git.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Ortak UI (tüm sayfalar) ──────────────────
  initSharedUI();   // js/shared/ui.js
  initReveal();     // js/shared/utils.js
  initSearch();     // js/shared/search.js
  initAllTabs();    // js/shared/tabs.js

  // ── Sayfa özelinde başlatma ──────────────────
  const page = document.body.dataset.page;

  if (page === 'egitim')     initEgitimPage();    // js/egitim.js
  if (page === 'blog')       initBlogPage();      // js/blog.js
  if (page === 'yapay-zeka') initYapayZekaPage(); // js/yapay-zeka.js

});
