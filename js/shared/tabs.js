/* ============================================
   shared/tabs.js — Sekme (tab) sistemi
   Ana sekmeler + sınıf alt sekmeleri
   ============================================ */

/**
 * Ana tab sistemi başlatıcı (Ortaokul / Lise veya blog kategorileri).
 * .tab-btn / .tab-panel çiftleriyle çalışır.
 */
function initMainTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabBtns.forEach(b   => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');

      const panel = document.getElementById(targetId);
      if (!panel) return;
      panel.classList.add('active');

      // İçindeki ilk sınıf sekmesini aktif et
      const allGradeBtns   = panel.querySelectorAll('.grade-btn');
      const allGradePanels = panel.querySelectorAll('.grade-panel');
      allGradeBtns.forEach(b   => b.classList.remove('active'));
      allGradePanels.forEach(p => p.classList.remove('active'));

      const firstGradeBtn = panel.querySelector('.grade-btn');
      if (firstGradeBtn) {
        firstGradeBtn.classList.add('active');
        const firstPanel = document.getElementById('grade-' + firstGradeBtn.dataset.grade);
        if (firstPanel) firstPanel.classList.add('active');
      }
    });
  });
}

/**
 * Sınıf alt sekmeleri (5/6/7/8 veya 9/10/11/12).
 * .grade-btn / .grade-panel çiftleriyle çalışır.
 */
function initGradeTabs() {
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGrade    = btn.dataset.grade;
      const parentTabPanel = btn.closest('.tab-panel');
      if (!parentTabPanel) return;

      parentTabPanel.querySelectorAll('.grade-btn').forEach(b   => b.classList.remove('active'));
      parentTabPanel.querySelectorAll('.grade-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');

      const panel = document.getElementById('grade-' + targetGrade);
      if (panel) {
        panel.classList.add('active');
        // Yeni sınıf açıldığında açık akordeonları sıfırla
        panel.querySelectorAll('.unit-accordion.active').forEach(a => a.classList.remove('active'));
      }
    });
  });
}

/**
 * Blog / içerik filtreleme sekmeleri.
 * data-filter="kategori" buton, data-category="kategori" kart.
 */
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('[data-category]').forEach(card => {
        const show = filter === 'tumü' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/**
 * Ünite akordeon sistemi.
 */
function initAccordions(container = document) {
  container.querySelectorAll('.unit-header').forEach(header => {
    // Daha önce listener eklenmemişse ekle
    if (header.dataset.accordionReady) return;
    header.dataset.accordionReady = '1';
    header.addEventListener('click', () => {
      header.closest('.unit-accordion')?.classList.toggle('active');
    });
  });
}

/** Tüm sekme sistemlerini başlat */
function initAllTabs() {
  initMainTabs();
  initGradeTabs();
  initFilterTabs();
  initAccordions();
}
