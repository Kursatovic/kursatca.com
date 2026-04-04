# kursatca.com — Proje Tanım Dosyası

## 🎯 Proje Amacı

Bu proje, **Kürşat Çelik**'in kişisel web sitesidir. Hedef kitle **ortaokul (5-8. sınıf)** ve **lise (9-12. sınıf)** öğrencileri ile eğitim dünyasıyla ilgilenen herkestir.

Site üç ana kategoriden oluşur:

1. **Eğitim İçerikleri** — Müfredata uygun interaktif ders materyalleri ve etkinlikler (sınıf seviyesine göre ayrılmış)
2. **Yapay Zeka & Eğitim** — YZ araçlarının eğitimde kullanımı, prompt rehberleri, EdTech yazıları
3. **Kişisel Blog** — Kitap notları, tarih yazıları, günlük düşünceler

## 📋 Mevcut Durum (v1.0 — İskelet)

Site şu an **statik HTML/CSS/JS** ile saf bir yapıda inşa edilmiş durumdadır. Henüz gerçek içerik (blog yazıları, ders materyalleri) girilmemiştir. Mevcut sayfalar:

| Sayfa | Dosya | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `index.html` | Hero tanıtımı + 3 kategori kartı + istatistikler |
| Eğitim | `egitim.html` | Ortaokul/Lise sekmeli ders içerik kartları |
| Yapay Zeka | `yapay-zeka.html` | YZ özellikleri grid + YZ yazıları listesi |
| Blog | `blog.html` | Tümü/Kitap/Tarih/Düşünce sekmeleriyle blog listesi |

## 🛠️ Teknik Yapı

```
kursatca.com/
├── index.html          # Ana sayfa
├── egitim.html         # Mevcut eğitim listeleme sayfası
├── yapay-zeka.html     # Mevcut yapay zeka listeleme sayfası
├── blog.html           # Mevcut blog listeleme sayfası
├── hakkimda.html       # Hakkımda sayfası
├── blog/               # Blog tekil yazı şablonları ve gelecekteki yazılar
├── egitim/             # Eğitim konu detay şablonları ve gelecekteki konu sayfaları
├── yapay-zeka/         # Yapay zeka yazı şablonları ve gelecekteki içerikler
├── content/            # Gelecekte veri odaklı içerik yapısı için hazırlık alanı
├── templates/          # Tekrar kullanılabilir genel şablonlar için alan
├── css/
│   └── style.css       # Tüm tasarım sistemi (değişkenler, renkler, bileşenler, responsive)
├── js/
│   └── main.js         # İnteraktiflik (menü, scroll animasyonları, arama, sekmeler)
├── img/
│   └── avatar.png      # Profil görseli
├── mimari-kararlar.md  # Yapısal kararların nedenleri
├── icerik-haritasi.md  # Müfredat ve içerik omurgası
├── .claude/            # Claude Code skill dosyaları (otomatik oluşturuldu)
└── README.md           # ← Bu dosya
```

- **Teknoloji:** Saf HTML5, CSS3, JavaScript (ES6+). Framework yok.
- **Font:** Bricolage Grotesque (başlıklar) + DM Sans (gövde) — Google Fonts
- **Tema:** Koyu mod (Dark editorial + glassmorphism)
- **Renk Paleti:** Derin Okyanus `#0a1628` / Teal `#00d4aa` / Amber `#ff8c42` / Violet `#8b5cf6`

## 🗺️ Yol Haritası (Sonraki Adımlar)

- [x] Mimari kararların dosyaya yazılması
- [x] Hedef klasör iskeletinin oluşturulması
- [x] Blog / Eğitim / YZ için ilk şablon dosyalarının eklenmesi
- [ ] Mevcut liste sayfalarını kademeli olarak yeni klasör yapısına bağlamak
- [ ] Tekil blog yazısı sayfası üretmek
- [ ] Tekil eğitim konu sayfası üretmek
- [ ] İçerikleri veri dosyalarından okumaya uygun hale getirmek
- [ ] Gerçek profil fotoğrafı eklenmesi (şu an yapay zeka üretimi placeholder var)
- [ ] Blog yazılarının gerçek içeriklerle doldurulması
- [ ] Eğitim kartlarına gerçek linklerin bağlanması (mevcut projeler: Demokrasi Müzesi vb.)
- [ ] İletişim sayfası / form eklenmesi
- [ ] Vercel veya Netlify'a deploy
- [ ] Domain bağlantısı (kursatca.com)
- [ ] SEO optimizasyonu (sitemap, Open Graph meta etiketleri)
- [ ] Google Analytics entegrasyonu
- [ ] Açık/Koyu mod geçiş butonu

## 📝 Başka Agentlarla Çalışırken Notlar

- Site sahibi: **Kürşat ÇELİK** (kursatca.com)
- Hedef kitle: Ortaokul ve lise öğrencileri + eğitimciler
- Dil: Türkçe (tüm içerik Türkçe olmalı)
- Tasarım stili: Modern, koyu tema, glassmorphism, animasyonlu
- İçerik ekleme: Yeni blog yazısı veya eğitim kartı eklenecekse mevcut HTML yapısına uygun card/entry formatı kullanılmalı
- CSS düzenlemeleri: Tüm stiller `css/style.css` dosyasındaki CSS değişkenleri üzerinden yönetilir
- Yapısal kararların gerekçeleri için `mimari-kararlar.md` dosyasını oku
- Marka dili ve tasarım referansı için `brand-guide.md` dosyasını oku
- Dış agent / canlıya alma özeti için `LIVE-HANDOFF.md` dosyasını oku
