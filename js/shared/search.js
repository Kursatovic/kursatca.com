/* ============================================
   shared/search.js — Global site arama
   Arama butonu, overlay ve sıralama mantığı
   ============================================ */

const SEARCH_DATA = [
  { title: 'Ana Sayfa', description: 'Siteye giriş, kategori kartları, eğitim içerikleri, yapay zeka ve blog alanlarının genel görünümü.', href: 'index.html', category: 'Sayfa', path: 'Ana Sayfa', icon: 'home', keywords: 'kursat çelik ana sayfa eğitim yapay zeka blog içerikler keşfet' },
  { title: 'Hakkımda', description: 'Anlatım tarzı, öğrenme yaklaşımı ve iletişim bağlantıları.', href: 'hakkimda.html', category: 'Sayfa', path: 'Hakkımda', icon: 'user', keywords: 'hakkımda kürşat çelik eğitimci içerik üreticisi linkedin x' },
  { title: 'Eğitim İçerikleri', description: '5. sınıftan 12. sınıfa kadar sosyal bilgiler, tarih ve inkılap tarihi içerikleri.', href: 'egitim.html', category: 'Sayfa', path: 'Eğitim', icon: 'book', keywords: 'eğitim içerikleri sosyal bilgiler tarih inkılap ortaokul lise' },
  { title: 'Yapay Zeka ve Eğitim', description: 'YZ araçları, rehberler, prompt kullanımı ve eğitimde yapay zeka yazıları.', href: 'yapay-zeka.html', category: 'Sayfa', path: 'Yapay Zeka', icon: 'spark', keywords: 'yapay zeka chatgpt gemini eğitim prompt rehber edtech' },
  { title: 'Kişisel Blog', description: 'Kitap, tarih ve düşünce yazılarının bulunduğu blog bölümü.', href: 'blog.html', category: 'Sayfa', path: 'Blog', icon: 'pen', keywords: 'blog kitap tarih düşünce yazılar okuma notları' },

  { title: '5. Sınıf Sosyal Bilgiler', description: 'Birlikte Yaşamak, Evimiz Dünya, Ortak Mirasımız, Yaşayan Demokrasimiz ve diğer üniteler.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 5. Sınıf', icon: 'book', keywords: '5 sınıf sosyal bilgiler birlikte yaşamak evimiz dünya ortak miras demokrasi ekonomi teknoloji' },
  { title: '6. Sınıf Sosyal Bilgiler', description: 'Toplumsal roller, ortak miras, ekonomi, vatandaşlık ve teknoloji başlıkları.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 6. Sınıf', icon: 'book', keywords: '6 sınıf sosyal bilgiler roller ortak miras ekonomi vatandaşlık telif patent' },
  { title: '7. Sınıf Sosyal Bilgiler', description: 'İletişim, Osmanlı, nüfus ve göç, bilim, demokrasi ve Türkiye-dünya ilişkileri.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 7. Sınıf', icon: 'book', keywords: '7 sınıf iletişim osmanlı nüfus göç bilim demokrasi türkiye dünya' },
  { title: 'Uluslararası Kuruluşlar ve Türkiye', description: '7. sınıf için kanca sorusuyla açılan, tüm kuruluşları anlatan, etkinlik ve sertifika ekranı içeren interaktif ders materyali.', href: 'egitim/uluslararasi-kuruluslar-ve-turkiye.html', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Uluslararası Kuruluşlar', icon: 'book', keywords: 'uluslararası kuruluşlar ve türkiye bm dsö iit fao unicef unesco agit nato ab türksoy avrupa konseyi 7. sınıf' },
  { title: '8. Sınıf İnkılap Tarihi', description: 'Bir Kahraman Doğuyor, Millî Uyanış, Millî Mücadele ve Atatürkçülük üniteleri.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 8. Sınıf', icon: 'book', keywords: '8 sınıf inkılap tarihi milli mücadele kuvayı milliye lozan atatürkçülük lgs' },
  { title: "Kürşat Hoca'nın LGS Ders Notları", description: 'LGS İnkılap Tarihi için özel hazırlanmış, kavram-tanım-örnek yapısında özet notlar.', href: 'egitim.html', category: 'Kaynak', path: 'Eğitim / Özel Arşiv', icon: 'book', keywords: 'lgs ders notları inkılap tarihi kürşat hoca özet pdf' },
  { title: "Kürşat'ın Sözlüğü — Kavram Sözlüğü", description: 'LGS İnkılap Tarihi sorularında en çok karıştırılan kavramların detaylı açıklamaları.', href: 'egitim.html', category: 'Kaynak', path: 'Eğitim / Özel Arşiv', icon: 'book', keywords: 'kürşatın sözlüğü kavram sözlüğü lgs inkılap milliyetçilik egemenlik' },
  { title: '9. Sınıf Tarih', description: 'Geçmişin İnşa Sürecinde Tarih, Eski Çağ ve Orta Çağ medeniyetleri.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 9. Sınıf', icon: 'book', keywords: '9 sınıf tarih eski çağ orta çağ tarım devrimi türklerde konargöçer' },
  { title: '10. Sınıf Tarih', description: 'Türkistan\'dan Türkiye\'ye, Beylikten Devlete Osmanlı ve Cihan Devleti Osmanlı.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 10. Sınıf', icon: 'book', keywords: '10 sınıf tarih türkistan osmanlı beylikten devlete cihan devleti' },
  { title: '11. Sınıf Tarih', description: 'Osmanlı siyaseti, Avrupa\'daki değişim, devrimler çağı ve denge stratejisi.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 11. Sınıf', icon: 'book', keywords: '11 sınıf tarih osmanlı siyaseti devrimler çağı tanzimat islahat' },
  { title: '12. Sınıf Tarih ve İnkılap', description: '20. yüzyıl başları, Millî Mücadele, Atatürkçülük ve savaş sonrası Türkiye.', href: 'egitim.html', category: 'Eğitim', path: 'Eğitim / 12. Sınıf', icon: 'book', keywords: '12 sınıf tarih inkılap milli mücadele atatürk ikinci dünya savaşı' },

  { title: 'Prompt Mühendisliği 101', description: 'ChatGPT, Gemini ve Claude gibi araçlar için etkili prompt yazma teknikleri.', href: 'yapay-zeka.html', category: 'YZ Aracı', path: 'Yapay Zeka / Rehber', icon: 'spark', keywords: 'prompt mühendisliği chatgpt gemini claude eğitim öğretmen öğrenci' },
  { title: 'Yapay Zeka ile Görsel Üretim', description: 'DALL·E, Midjourney ve Canva AI ile eğitim materyali görselleştirme.', href: 'yapay-zeka.html', category: 'YZ Aracı', path: 'Yapay Zeka / Görsel', icon: 'spark', keywords: 'görsel üretim dalle midjourney canva ai poster sunum' },
  { title: 'Otomatik Değerlendirme', description: 'Ödev değerlendirme, geri bildirim ve rubrik hazırlamada YZ kullanımı.', href: 'yapay-zeka.html', category: 'YZ Aracı', path: 'Yapay Zeka / Ölçme', icon: 'spark', keywords: 'otomatik değerlendirme ödev geri bildirim rubrik yapay zeka' },
  { title: 'Gemini 3.0 Flash ile Sınıfta İlk Deneyimlerim', description: 'Gemini kullanımının sınıf içi etkileri ve öğrenci tepkileri üzerine notlar.', href: 'yapay-zeka.html', category: 'YZ Yazısı', path: 'Yapay Zeka / Deneyim', icon: 'spark', keywords: 'gemini flash sınıfta deneyimler öğrenciler google model' },
  { title: 'Yapay Zeka Öğretmenin Yerini Alabilir mi?', description: 'Eğitim, etik ve öğretmenin rolü üzerine düşünsel bir yazı.', href: 'yapay-zeka.html', category: 'YZ Yazısı', path: 'Yapay Zeka / Düşünce', icon: 'spark', keywords: 'yapay zeka öğretmenin yerini alabilir mi etik eğitim' },
  { title: 'Öğrenciler İçin En İyi 10 Ücretsiz YZ Aracı', description: 'Ödev, proje ve araştırma süreçlerinde kullanılabilecek ücretsiz araç önerileri.', href: 'yapay-zeka.html', category: 'YZ Yazısı', path: 'Yapay Zeka / Rehber', icon: 'spark', keywords: 'öğrenciler için ücretsiz yz araçları chatgpt gemini öneri' },

  { title: "Sapiens'i Yeniden Okudum: Bu Sefer Farklı Gördüm", description: 'Harari\'nin kitabını ikinci okumada farklı hislerle yeniden değerlendiren yazı.', href: 'blog.html', category: 'Blog', path: 'Blog / Kitap', icon: 'pen', keywords: 'sapiens harari kitap notları yeniden okudum' },
  { title: "Çanakkale'yi Anlamak: Sadece Savaş Değil", description: 'Çanakkale\'nin insani ve tarihsel katmanlarını ele alan bir yazı.', href: 'blog.html', category: 'Blog', path: 'Blog / Tarih', icon: 'pen', keywords: 'çanakkale savaş tarih insani hikayeler' },
  { title: 'Bayram Ziyaretlerinin Felsefesi', description: 'Gelenekler, internet çağı ve değişen insan ilişkileri üzerine kısa düşünce yazısı.', href: 'blog.html', category: 'Blog', path: 'Blog / Düşünce', icon: 'pen', keywords: 'bayram ziyaretleri felsefesi gelenek düşünce' },
  { title: 'Aylık Okuma Listesi — Mart 2026', description: 'Ay boyunca okunan kitaplardan kısa notlar ve tavsiyeler.', href: 'blog.html', category: 'Blog', path: 'Blog / Kitap', icon: 'pen', keywords: 'aylık okuma listesi mart 2026 kitap tavsiye' },
  { title: "İstanbul'un Unutulan Mahalleleri", description: 'Şehrin gözden kaçan tarih katmanlarına doğru küçük bir yürüyüş.', href: 'blog.html', category: 'Blog', path: 'Blog / Tarih', icon: 'pen', keywords: 'istanbul unutulan mahalleleri tarih semt' },
  { title: 'Yeni Yılda Yeni Alışkanlıklar: 3 Ay Sonra Durum', description: 'Başlanan alışkanlıkların birkaç ay sonra ne durumda olduğunu anlatan samimi notlar.', href: 'blog.html', category: 'Blog', path: 'Blog / Düşünce', icon: 'pen', keywords: 'alışkanlıklar yeni yıl 3 ay sonra' }
];

const ICON_MAP = {
  home:  '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  user:  '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  book:  '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>',
  spark: '<svg class="svg-icon" viewBox="0 0 24 24"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3l1.9 5.8 1.9-5.8a2 2 0 0 1 1.3-1.3l5.8-1.9-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>',
  pen:   '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21.17 6.81a1 1 0 0 0-3.98-3.98L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/></svg>'
};

function initSearch() {
  // Launcher butonu
  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'site-search-launcher';
  launcher.setAttribute('aria-label', 'Site içinde arama yap');
  launcher.innerHTML = `
    <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
    <span>Ara</span>
    <span class="site-search-shortcut">/</span>
  `;

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'site-search-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
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

  document.body.appendChild(launcher);
  document.body.appendChild(overlay);

  const input   = overlay.querySelector('.site-search-input');
  const closeBtn = overlay.querySelector('.site-search-close');
  const results = overlay.querySelector('.site-search-results');
  const counter = overlay.querySelector('.site-search-count');

  function score(item, q) {
    if (!q) return 1;
    const h = `${item.title} ${item.description} ${item.keywords} ${item.category}`.toLowerCase();
    if (item.title.toLowerCase() === q)           return 200;
    if (item.title.toLowerCase().startsWith(q))   return 120;
    if (item.title.toLowerCase().includes(q))     return 80;
    if (h.includes(q))                            return 40;
    return 0;
  }

  function render(q = '') {
    const norm = q.trim().toLowerCase();
    const list = SEARCH_DATA
      .map(item => ({ item, s: score(item, norm) }))
      .filter(e => e.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, norm ? 10 : 8);

    if (!list.length) {
      results.innerHTML = `<div class="site-search-empty"><strong>Sonuç bulunamadı.</strong><p>Başka bir kelime dene. Örneğin: "8. sınıf", "Sapiens", "Gemini", "demokrasi".</p></div>`;
      counter.textContent = '0 sonuç';
      return;
    }
    counter.textContent = norm ? `${list.length} sonuç` : 'Popüler içerikler';
    results.innerHTML = list.map(({ item }) => `
      <a class="site-search-result" href="${item.href}">
        <span class="site-search-result-icon">${ICON_MAP[item.icon] || ICON_MAP.book}</span>
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
  }

  function open()  { overlay.classList.add('open'); overlay.setAttribute('aria-hidden', 'false'); render(input.value); setTimeout(() => input.focus(), 40); }
  function close() { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); }

  launcher.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  input.addEventListener('input', () => render(input.value));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
    if (e.key === '/' && !typing) { e.preventDefault(); open(); }
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  render();
}
