/* ============================================
   kursatca.com — Main JavaScript
   Interactivity, scroll animations, counters
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ═══════════ MOBILE NAV TOGGLE ═══════════
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ═══════════ NAVBAR SCROLL EFFECT ═══════════
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ═══════════ SCROLL REVEAL ANIMATIONS ═══════════
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.08}s`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // ═══════════ ANIMATED COUNTERS ═══════════
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ═══════════ MAIN TAB SYSTEM (Ortaokul / Lise) ═══════════
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      // Switch main tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(targetId);
      if (panel) {
        panel.classList.add('active');

        // Ensure the first grade-btn and grade-panel inside are active
        const firstGradeBtn = panel.querySelector('.grade-btn');
        const allGradeBtns = panel.querySelectorAll('.grade-btn');
        const allGradePanels = panel.querySelectorAll('.grade-panel');

        // Reset all within this tab
        allGradeBtns.forEach(b => b.classList.remove('active'));
        allGradePanels.forEach(p => p.classList.remove('active'));

        if (firstGradeBtn) {
          firstGradeBtn.classList.add('active');
          const firstGrade = firstGradeBtn.dataset.grade;
          const firstPanel = document.getElementById('grade-' + firstGrade);
          if (firstPanel) firstPanel.classList.add('active');
        }
      }
    });
  });

  // ═══════════ GRADE SUB-TABS (Scoped to parent tab) ═══════════
  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGrade = btn.dataset.grade;
      const targetPanelId = 'grade-' + targetGrade;

      // 1. Find the parent tab panel (Ortaokul or Lise)
      const parentTabPanel = btn.closest('.tab-panel');
      if (!parentTabPanel) return;

      // 2. Update button states within this tab
      parentTabPanel.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 3. Hide ALL grade panels in this tab before showing the new one
      parentTabPanel.querySelectorAll('.grade-panel').forEach(p => {
        p.classList.remove('active');
      });

      // 4. Show the target panel and scroll to top of content
      const panel = document.getElementById(targetPanelId);
      if (panel) {
        panel.classList.add('active');
        
        // Optional: Close any open accordions within the newly opened panel to keep it clean
        panel.querySelectorAll('.unit-accordion.active').forEach(acc => acc.classList.remove('active'));
      }
    });
  });

  // ═══════════ UNIT ACCORDION ═══════════
  document.querySelectorAll('.unit-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.closest('.unit-accordion');
      if (accordion) {
        accordion.classList.toggle('active');
        
        // Diğerlerini kapat (Opsiyonel: Eğer istersen aktif edilebilir)
        /*
        const siblings = accordion.parentElement.querySelectorAll('.unit-accordion.active');
        siblings.forEach(s => { if(s !== accordion) s.classList.remove('active'); });
        */
      }
    });
  });

  // ═══════════ CARD TILT MICRO-INTERACTION ═══════════
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;
      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ═══════════ SMOOTH ANCHOR SCROLLING (skip # only links) ═══════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      // Skip bare "#" links (topic items with placeholder hrefs)
      if (href === '#') {
        e.preventDefault();
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ═══════════ ACTIVE NAV HIGHLIGHTING ═══════════
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ═══════════ GLOBAL SITE SEARCH ═══════════
  const siteSearchData = [
    {
      title: 'Ana Sayfa',
      description: 'Siteye giriş, kategori kartları, eğitim içerikleri, yapay zeka ve blog alanlarının genel görünümü.',
      href: 'index.html',
      category: 'Sayfa',
      path: 'Ana Sayfa',
      icon: 'home',
      keywords: 'kursat çelik ana sayfa eğitim yapay zeka blog içerikler keşfet'
    },
    {
      title: 'Hakkımda',
      description: 'Anlatım tarzı, öğrenme yaklaşımı ve iletişim bağlantıları.',
      href: 'hakkimda.html',
      category: 'Sayfa',
      path: 'Hakkımda',
      icon: 'user',
      keywords: 'hakkımda kürşat çelik eğitimci içerik üreticisi ulaşmak için linkedin x'
    },
    {
      title: 'Eğitim İçerikleri',
      description: '5. sınıftan 12. sınıfa kadar sosyal bilgiler, tarih ve inkılap tarihi içerikleri.',
      href: 'egitim.html',
      category: 'Sayfa',
      path: 'Eğitim',
      icon: 'book',
      keywords: 'eğitim içerikleri sosyal bilgiler tarih inkılap ortaokul lise'
    },
    {
      title: 'Yapay Zeka ve Eğitim',
      description: 'YZ araçları, rehberler, prompt kullanımı ve eğitimde yapay zeka yazıları.',
      href: 'yapay-zeka.html',
      category: 'Sayfa',
      path: 'Yapay Zeka',
      icon: 'spark',
      keywords: 'yapay zeka chatgpt gemini eğitim prompt rehber edtech'
    },
    {
      title: 'Kişisel Blog',
      description: 'Kitap, tarih ve düşünce yazılarının bulunduğu blog bölümü.',
      href: 'blog.html',
      category: 'Sayfa',
      path: 'Blog',
      icon: 'pen',
      keywords: 'blog kitap tarih düşünce yazılar okuma notları'
    },
    {
      title: '5. Sınıf Sosyal Bilgiler',
      description: 'Birlikte Yaşamak, Evimiz Dünya, Ortak Mirasımız, Yaşayan Demokrasimiz ve diğer üniteler.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 5. Sınıf',
      icon: 'book',
      keywords: '5 sınıf sosyal bilgiler birlikte yaşamak evimiz dünya ortak miras demokrasi ekonomi teknoloji'
    },
    {
      title: '6. Sınıf Sosyal Bilgiler',
      description: 'Toplumsal roller, ortak miras, ekonomi, vatandaşlık ve teknoloji başlıkları.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 6. Sınıf',
      icon: 'book',
      keywords: '6 sınıf sosyal bilgiler roller ortak miras ekonomi vatandaşlık telif patent'
    },
    {
      title: '7. Sınıf Sosyal Bilgiler',
      description: 'İletişim, Osmanlı, nüfus ve göç, bilim, demokrasi ve Türkiye-dünya ilişkileri.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 7. Sınıf',
      icon: 'book',
      keywords: '7 sınıf iletişim osmanlı nüfus göç bilim demokrasi türkiye dünya'
    },
    {
      title: '8. Sınıf İnkılap Tarihi',
      description: 'Bir Kahraman Doğuyor, Millî Uyanış, Millî Mücadele ve Atatürkçülük üniteleri.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 8. Sınıf',
      icon: 'book',
      keywords: '8 sınıf inkılap tarihi milli mücadele kuvayı milliye lozan atatürkçülük'
    },
    {
      title: "Kürşat Hoca'nın LGS Ders Notları",
      description: 'LGS İnkılap Tarihi için özel hazırlanmış, kavram-tanım-örnek yapısında özet notlar.',
      href: 'egitim.html',
      category: 'Kaynak',
      path: 'Eğitim / Özel Arşiv',
      icon: 'book',
      keywords: 'lgs ders notları inkılap tarihi kürşat hoca özet çalışma kağıdı pdf'
    },
    {
      title: "Kürşat'ın Sözlüğü — Kavram Sözlüğü",
      description: 'LGS İnkılap Tarihi sorularında en çok karıştırılan kavramların detaylı açıklamaları.',
      href: 'egitim.html',
      category: 'Kaynak',
      path: 'Eğitim / Özel Arşiv',
      icon: 'book',
      keywords: 'kürşatın sözlüğü kavram sözlüğü lgs inkılap milliyetçilik bağımsızlık egemenlik'
    },
    {
      title: '9. Sınıf Tarih',
      description: 'Geçmişin İnşa Sürecinde Tarih, Eski Çağ ve Orta Çağ medeniyetleri.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 9. Sınıf',
      icon: 'book',
      keywords: '9 sınıf tarih eski çağ orta çağ tarım devrimi türklerde konargöçer yaşam'
    },
    {
      title: '10. Sınıf Tarih',
      description: 'Türkistan’dan Türkiye’ye, Beylikten Devlete Osmanlı ve Cihan Devleti Osmanlı.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 10. Sınıf',
      icon: 'book',
      keywords: '10 sınıf tarih türkistan osmanlı beylikten devlete cihan devleti'
    },
    {
      title: '11. Sınıf Tarih',
      description: 'Osmanlı siyaseti, Avrupa’daki değişim, devrimler çağı ve denge stratejisi.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 11. Sınıf',
      icon: 'book',
      keywords: '11 sınıf tarih osmanlı siyaseti devrimler çağı tanzimat islahat kanun-i esasi'
    },
    {
      title: '12. Sınıf Tarih ve İnkılap',
      description: '20. yüzyıl başları, Millî Mücadele, Atatürkçülük ve savaş sonrası Türkiye.',
      href: 'egitim.html',
      category: 'Eğitim',
      path: 'Eğitim / 12. Sınıf',
      icon: 'book',
      keywords: '12 sınıf tarih inkılap milli mücadele atatürk dönemi ikinci dünya savaşı'
    },
    {
      title: 'Prompt Mühendisliği 101',
      description: 'ChatGPT, Gemini ve Claude gibi araçlar için etkili prompt yazma teknikleri.',
      href: 'yapay-zeka.html',
      category: 'YZ Yazısı',
      path: 'Yapay Zeka / Rehber',
      icon: 'spark',
      keywords: 'prompt mühendisliği chatgpt gemini claude eğitim öğretmen öğrenci'
    },
    {
      title: 'Yapay Zeka ile Görsel Üretim',
      description: 'DALL·E, Midjourney ve Canva AI ile eğitim materyali görselleştirme.',
      href: 'yapay-zeka.html',
      category: 'YZ Yazısı',
      path: 'Yapay Zeka / Görsel',
      icon: 'spark',
      keywords: 'görsel üretim dalle midjourney canva ai poster sunum materyal'
    },
    {
      title: 'Otomatik Değerlendirme',
      description: 'Ödev değerlendirme, geri bildirim ve rubrik hazırlamada YZ kullanımı.',
      href: 'yapay-zeka.html',
      category: 'YZ Yazısı',
      path: 'Yapay Zeka / Ölçme',
      icon: 'spark',
      keywords: 'otomatik değerlendirme ödev geri bildirim rubrik yapay zeka'
    },
    {
      title: 'Gemini 3.0 Flash ile Sınıfta İlk Deneyimlerim',
      description: 'Gemini kullanımının sınıf içi etkileri ve öğrenci tepkileri üzerine notlar.',
      href: 'yapay-zeka.html',
      category: 'YZ Yazısı',
      path: 'Yapay Zeka / Deneyim',
      icon: 'spark',
      keywords: 'gemini flash sınıfta deneyimler öğrenciler google model'
    },
    {
      title: 'Yapay Zeka Öğretmenin Yerini Alabilir mi?',
      description: 'Eğitim, etik ve öğretmenin rolü üzerine düşünsel bir yazı.',
      href: 'yapay-zeka.html',
      category: 'YZ Yazısı',
      path: 'Yapay Zeka / Düşünce',
      icon: 'spark',
      keywords: 'yapay zeka öğretmenin yerini alabilir mi etik eğitim düşünce'
    },
    {
      title: 'Öğrenciler İçin En İyi 10 Ücretsiz YZ Aracı',
      description: 'Ödev, proje ve araştırma süreçlerinde kullanılabilecek ücretsiz araç önerileri.',
      href: 'yapay-zeka.html',
      category: 'YZ Yazısı',
      path: 'Yapay Zeka / Rehber',
      icon: 'spark',
      keywords: 'öğrenciler için ücretsiz yz araçları chatgpt gemini araç öneri'
    },
    {
      title: "Sapiens'i Yeniden Okudum: Bu Sefer Farklı Gördüm",
      description: 'Harari’nin kitabını ikinci okumada farklı hislerle yeniden değerlendiren yazı.',
      href: 'blog.html',
      category: 'Blog',
      path: 'Blog / Kitap',
      icon: 'pen',
      keywords: 'sapiens harari kitap notları yeniden okudum'
    },
    {
      title: "Çanakkale'yi Anlamak: Sadece Savaş Değil",
      description: 'Çanakkale’nin insani ve tarihsel katmanlarını ele alan bir yazı.',
      href: 'blog.html',
      category: 'Blog',
      path: 'Blog / Tarih',
      icon: 'pen',
      keywords: 'çanakkale savaş tarih insani hikayeler'
    },
    {
      title: 'Bayram Ziyaretlerinin Felsefesi',
      description: 'Gelenekler, internet çağı ve değişen insan ilişkileri üzerine kısa düşünce yazısı.',
      href: 'blog.html',
      category: 'Blog',
      path: 'Blog / Düşünce',
      icon: 'pen',
      keywords: 'bayram ziyaretleri felsefesi gelenek düşünce'
    },
    {
      title: 'Aylık Okuma Listesi — Mart 2026',
      description: 'Ay boyunca okunan kitaplardan kısa notlar ve tavsiyeler.',
      href: 'blog.html',
      category: 'Blog',
      path: 'Blog / Kitap',
      icon: 'pen',
      keywords: 'aylık okuma listesi mart 2026 kitap tavsiyeleri'
    },
    {
      title: "İstanbul'un Unutulan Mahalleleri",
      description: 'Şehrin gözden kaçan tarih katmanlarına doğru küçük bir yürüyüş.',
      href: 'blog.html',
      category: 'Blog',
      path: 'Blog / Tarih',
      icon: 'pen',
      keywords: 'istanbul unutulan mahalleleri tarih semt'
    },
    {
      title: 'Yeni Yılda Yeni Alışkanlıklar: 3 Ay Sonra Durum',
      description: 'Başlanan alışkanlıkların birkaç ay sonra ne durumda olduğunu anlatan samimi notlar.',
      href: 'blog.html',
      category: 'Blog',
      path: 'Blog / Düşünce',
      icon: 'pen',
      keywords: 'alışkanlıklar yeni yıl 3 ay sonra durum'
    }
  ];

  const iconMap = {
    home: '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
    user: '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    book: '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>',
    spark: '<svg class="svg-icon" viewBox="0 0 24 24"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3l1.9 5.8 1.9-5.8a2 2 0 0 1 1.3-1.3l5.8-1.9-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>',
    pen: '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21.17 6.81a1 1 0 0 0-3.98-3.98L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/></svg>'
  };

  const searchLauncher = document.createElement('button');
  searchLauncher.type = 'button';
  searchLauncher.className = 'site-search-launcher';
  searchLauncher.setAttribute('aria-label', 'Site içinde arama yap');
  searchLauncher.innerHTML = `
    <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
    <span>Ara</span>
    <span class="site-search-shortcut">/</span>
  `;

  const searchOverlay = document.createElement('div');
  searchOverlay.className = 'site-search-overlay';
  searchOverlay.setAttribute('aria-hidden', 'true');
  searchOverlay.innerHTML = `
    <div class="site-search-panel" role="dialog" aria-modal="true" aria-label="Site arama paneli">
      <div class="site-search-head">
        <div class="site-search-form">
          <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
          <input type="search" class="site-search-input" placeholder="Tüm sitede ara: 8. sınıf, Sapiens, Gemini, demokrasi..." />
          <button type="button" class="site-search-close" aria-label="Aramayı kapat">✕</button>
        </div>
      </div>
      <div class="site-search-body">
        <div class="site-search-meta">
          <span class="site-search-count">Popüler içerikler gösteriliyor</span>
          <span>ESC ile kapat</span>
        </div>
        <div class="site-search-results"></div>
      </div>
    </div>
  `;

  document.body.appendChild(searchLauncher);
  document.body.appendChild(searchOverlay);

  const searchInput = searchOverlay.querySelector('.site-search-input');
  const searchClose = searchOverlay.querySelector('.site-search-close');
  const searchResults = searchOverlay.querySelector('.site-search-results');
  const searchCount = searchOverlay.querySelector('.site-search-count');

  const scoreResult = (item, query) => {
    const haystack = `${item.title} ${item.description} ${item.keywords} ${item.category} ${item.path}`.toLowerCase();
    if (!query) return 1;
    if (item.title.toLowerCase() === query) return 200;
    if (item.title.toLowerCase().startsWith(query)) return 120;
    if (item.title.toLowerCase().includes(query)) return 80;
    if (haystack.includes(query)) return 40;
    return 0;
  };

  const renderResults = (query = '') => {
    const normalized = query.trim().toLowerCase();
    const results = siteSearchData
      .map(item => ({ item, score: scoreResult(item, normalized) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, normalized ? 10 : 8);

    if (!results.length) {
      searchResults.innerHTML = `
        <div class="site-search-empty">
          <strong>Sonuç bulunamadı.</strong>
          <p>Başka bir kelime dene. Örneğin: “8. sınıf”, “Sapiens”, “Gemini”, “demokrasi”.</p>
        </div>
      `;
      searchCount.textContent = '0 sonuç bulundu';
      return;
    }

    searchCount.textContent = normalized ? `${results.length} sonuç gösteriliyor` : 'Popüler içerikler gösteriliyor';
    searchResults.innerHTML = results.map(({ item }) => `
      <a class="site-search-result" href="${item.href}">
        <span class="site-search-result-icon">${iconMap[item.icon] || iconMap.book}</span>
        <span class="site-search-result-main">
          <div class="site-search-result-top">
            <span class="site-search-badge">${item.category}</span>
            <h3>${item.title}</h3>
          </div>
          <p>${item.description}</p>
        </span>
        <span class="site-search-result-path">${item.path}</span>
      </a>
    `).join('');
  };

  const openSearch = () => {
    searchOverlay.classList.add('open');
    searchOverlay.setAttribute('aria-hidden', 'false');
    renderResults(searchInput.value);
    window.setTimeout(() => searchInput.focus(), 40);
  };

  const closeSearch = () => {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
  };

  searchLauncher.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchInput.addEventListener('input', () => renderResults(searchInput.value));

  searchOverlay.addEventListener('click', (event) => {
    if (event.target === searchOverlay) {
      closeSearch();
    }
  });

  document.addEventListener('keydown', (event) => {
    const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

    if (event.key === '/' && !isTyping) {
      event.preventDefault();
      openSearch();
    }

    if (event.key === 'Escape' && searchOverlay.classList.contains('open')) {
      closeSearch();
    }
  });

  renderResults();

  // ═══════════ SIMPLE LIKE TOGGLE ═══════════
  document.querySelectorAll('[data-like-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const isLiked = button.classList.toggle('is-liked');
      button.setAttribute('aria-pressed', String(isLiked));
      const label = button.querySelector('.lesson-like-text');
      if (label) {
        label.textContent = isLiked ? 'Beğenildi' : 'Beğendim';
      }
    });
  });

});
