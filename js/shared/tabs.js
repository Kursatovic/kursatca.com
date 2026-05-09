/* ============================================
   shared/tabs.js — Sekme (tab) sistemi
   Ana sekmeler + sınıf alt sekmeleri
   ============================================ */

/**
 * Ana tab sistemi başlatıcı (Ortaokul / Lise veya blog kategorileri).
 * .tab-btn / .tab-panel çiftleriyle çalışır.
 */
/**
 * Ana tab sistemi başlatıcı (Ortaokul / Lise veya blog kategorileri).
 */
function initMainTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length) return;

  // localStorage'dan geri yükle
  const savedMainTab = localStorage.getItem('activeMainTab');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      localStorage.setItem('activeMainTab', targetId);

      tabBtns.forEach(b   => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');

      const panel = document.getElementById(targetId);
      if (!panel) return;
      panel.classList.add('active');

      // Eğer kayıtlı bir sınıf yoksa içindeki ilk sınıf sekmesini aktif et
      const savedGradeTab = localStorage.getItem('activeGradeTab');
      const targetGradeBtn = savedGradeTab ? panel.querySelector(`.grade-btn[data-grade="${savedGradeTab}"]`) : panel.querySelector('.grade-btn');
      
      if (targetGradeBtn) {
        targetGradeBtn.click(); // Click eventini tetikle ki lazy load çalışsın
      }
    });
  });

  // Başlangıçta aktif olanı belirle
  if (savedMainTab) {
    const target = document.querySelector(`.tab-btn[data-tab="${savedMainTab}"]`);
    if (target) target.click();
  }
}

/**
 * Sınıf alt sekmeleri (5/6/7/8 veya 9/10/11/12).
 */
function initGradeTabs() {
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGrade    = btn.dataset.grade;
      localStorage.setItem('activeGradeTab', targetGrade);
      
      const parentTabPanel = btn.closest('.tab-panel');
      if (!parentTabPanel) return;

      parentTabPanel.querySelectorAll('.grade-btn').forEach(b   => b.classList.remove('active'));
      parentTabPanel.querySelectorAll('.grade-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');

      const panel = document.getElementById('grade-' + targetGrade);
      if (panel) {
        panel.classList.add('active');
        
        // Kayıtlı akordeonu kontrol et
        const savedAccordion = localStorage.getItem(`activeAccordion_${targetGrade}`);
        if (savedAccordion) {
            setTimeout(() => {
                try {
                    const header = panel.querySelector(`.unit-accordion[data-unit-no="${savedAccordion}"] .unit-header`);
                    if (header && !header.closest('.unit-accordion').classList.contains('active')) {
                        header.click();
                    }
                } catch (e) { console.warn('Accordion restore failed', e); }
            }, 100);
        }
      }
    });
  });
}

/**
 * Blog / içerik filtreleme sekmeleri.
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
    if (header.dataset.accordionReady) return;
    header.dataset.accordionReady = '1';
    
    header.addEventListener('click', () => {
      const accordion = header.closest('.unit-accordion');
      const gradePanel = header.closest('.grade-panel');
      const gradeId = gradePanel ? gradePanel.id.replace('grade-', '') : 'null';
      const unitNo = accordion.querySelector('.unit-number')?.textContent.trim();

      const isActive = accordion.classList.contains('active');
      
      // Diğer üniteleri kapat
      const parent = accordion.parentElement;
      parent.querySelectorAll('.unit-accordion').forEach(item => item.classList.remove('active'));
      
      if (!isActive) {
        accordion.classList.add('active');
        if (unitNo) localStorage.setItem(`activeAccordion_${gradeId}`, unitNo);
      } else {
        localStorage.removeItem(`activeAccordion_${gradeId}`);
      }
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
