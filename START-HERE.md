# START-HERE.md — Projeye Giriş Rehberi

> Bu dosyayı okumadan herhangi bir dosyaya müdahale etme.
> Her türlü değişiklik öncesinde buraya bak.

---

## Projenin Mimari Mantığı

Bu proje dört katmandan oluşur ve her katmanın görevi nettir:

```
HTML  → Çerçeve (sayfa iskeleti)
CSS   → Görünüm (renk, tipografi, layout)
JS    → Davranış (etkileşim, render)
content/ → Veri (içerik)
```

**Altın Kural:** İçerik sadece `content/` klasöründe yaşar.
HTML dosyalarına doğrudan içerik yazılmaz.

---

## Ne Değiştirmek İstiyorsun? — Karar Ağacı

### İçerik eklemek / güncellemek istiyorum
```
Eğitim → 5. sınıf konusu       → content/egitim/ortaokul/5-sinif.json
Eğitim → 6. sınıf konusu       → content/egitim/ortaokul/6-sinif.json
Eğitim → 7. sınıf konusu       → content/egitim/ortaokul/7-sinif.json
Eğitim → 8. sınıf konusu       → content/egitim/ortaokul/8-sinif.json
Eğitim → 9. sınıf konusu       → content/egitim/lise/9-sinif.json
Eğitim → 10. sınıf konusu      → content/egitim/lise/10-sinif.json
Eğitim → 11. sınıf konusu      → content/egitim/lise/11-sinif.json
Eğitim → 12. sınıf konusu      → content/egitim/lise/12-sinif.json
Eğitim → Son eklenenler kutusu → content/egitim/son-eklenenler.json
Eğitim → 8. sınıf arşiv kaynağı → content/egitim/ortaokul/8-sinif.json (hazineKutusu.kaynaklar)

Yapay Zeka → Yeni araç / özellik kartı → content/yapay-zeka/araclar.json
Yapay Zeka → Yeni makale / yazı        → content/yapay-zeka/makaleler.json
Yapay Zeka → Prompt koleksiyonu        → content/yapay-zeka/promptlar.json

Blog → Yeni yazı ekle          → content/blog/posts.json
Blog → Var olan yazıyı düzenle → content/blog/posts.json
```

### Görünüm değiştirmek istiyorum
```
Renkler, tipografi, boşluklar   → css/style.css (CSS değişkenlerini kullan)
Belirli bir bileşenin stili     → css/style.css (ilgili sınıfı ara)
```

### Davranış / etkileşim değiştirmek istiyorum
```
Tüm sayfalarda çalışan bir şey  → js/shared/ui.js, tabs.js veya utils.js
Arama sistemi                   → js/shared/search.js
Eğitim sayfasına özel           → js/egitim.js
Blog sayfasına özel             → js/blog.js
Yapay Zeka sayfasına özel       → js/yapay-zeka.js
```

### Sayfa yapısını (çerçeve) değiştirmek istiyorum
```
Eğitim sayfası     → egitim.html    (sadece iskelet, içerik ekleme)
Blog sayfası       → blog.html      (sadece iskelet, içerik ekleme)
Yapay Zeka sayfası → yapay-zeka.html (sadece iskelet, içerik ekleme)
Ana Sayfa          → index.html
Hakkımda           → hakkimda.html
```

---

## Dosya Yapısı

```
kursatca.com/
│
├── index.html          ← Ana sayfa çerçevesi
├── egitim.html         ← Eğitim sayfası çerçevesi (içerik yok)
├── yapay-zeka.html     ← YZ sayfası çerçevesi (içerik yok)
├── blog.html           ← Blog sayfası çerçevesi (içerik yok)
├── hakkimda.html       ← Hakkımda sayfası
│
├── content/            ← BÜTÜN İÇERİK BURADADIR
│   ├── egitim/
│   │   ├── ortaokul/
│   │   │   ├── 5-sinif.json
│   │   │   ├── 6-sinif.json
│   │   │   ├── 7-sinif.json
│   │   │   └── 8-sinif.json
│   │   ├── lise/
│   │   │   ├── 9-sinif.json
│   │   │   ├── 10-sinif.json
│   │   │   ├── 11-sinif.json
│   │   │   └── 12-sinif.json
│   │   └── son-eklenenler.json
│   ├── yapay-zeka/
│   │   ├── araclar.json
│   │   ├── makaleler.json
│   │   └── promptlar.json
│   └── blog/
│       └── posts.json
│
├── js/
│   ├── main.js         ← Sadece başlatıcı, buraya özellik ekleme
│   ├── egitim.js       ← Eğitim sayfası renderer
│   ├── blog.js         ← Blog sayfası renderer
│   ├── yapay-zeka.js   ← YZ sayfası renderer
│   └── shared/
│       ├── ui.js       ← Nav, scroll, sayaç, tilt
│       ├── tabs.js     ← Sekme ve akordiyon sistemi
│       ├── search.js   ← Global site araması
│       └── utils.js    ← fetchJSON, escapeHTML, initReveal
│
├── css/
│   └── style.css       ← Tüm tasarım sistemi
│
└── img/                ← Görseller
```

---

## Örnek Değişiklik Senaryoları

### Senaryo 1: "5. sınıf 1. üniteye yeni konu ekle"
```
1. Aç: content/egitim/ortaokul/5-sinif.json
2. Bul: uniteler[0].konular dizisi (1. ünite = "Birlikte Yaşamak")
3. Ekle:
   { "no": 4, "baslik": "Yeni Konunun Adı", "badge": "Yeni", "href": "#" }
4. Kaydet. Başka hiçbir dosyaya dokunma.
```

### Senaryo 2: "Yapay Zeka bölümüne yeni araç ekle"
```
1. Aç: content/yapay-zeka/araclar.json
2. Dizinin sonuna ekle:
   {
     "slug": "yeni-arac",
     "baslik": "Aracın Adı",
     "aciklama": "Açıklama metni.",
     "ikonTip": "emoji",
     "ikon": "🔬",
     "href": "#"
   }
3. Kaydet. Başka hiçbir dosyaya dokunma.
```

### Senaryo 3: "Blog'a yeni yazı ekle"
```
1. Aç: content/blog/posts.json
2. Dizinin başına (veya uygun yere) ekle:
   {
     "slug": "yazi-basligi",
     "baslik": "Yazının Başlığı",
     "kategori": "kitap",          ← kitap | tarih | dusunce
     "tarih": "Nisan 2026",
     "okumaSuresi": "8 dk okuma",
     "aciklama": "Kısa açıklama.",
     "href": "#",
     "ikonTip": "emoji",
     "ikon": "📘"
   }
3. Kaydet. Başka hiçbir dosyaya dokunma.
```

### Senaryo 4: "Son eklenenler kutusunu güncelle"
```
1. Aç: content/egitim/son-eklenenler.json
2. Eski girdiyi kaldır veya güncelle, yenisini ekle:
   { "baslik": "8. Sınıf - Lozan Barış Antlaşması", "sinif": 8, "href": "#", "renk": "primary" }
3. Kaydet.
```

### Senaryo 5: "8. sınıf arşivine yeni PDF kaynağı ekle"
```
1. Aç: content/egitim/ortaokul/8-sinif.json
2. Bul: hazineKutusu.kaynaklar dizisi
3. Yeni kaynak nesnesini ekle (mevcut örnekleri model al)
4. Kaydet.
```

### Senaryo 6: "Tab davranışını değiştir"
```
1. Aç: js/shared/tabs.js
2. İlgili fonksiyonu bul (initMainTabs, initGradeTabs, initFilterTabs)
3. Değiştir. Eğitim, blog, YZ sayfaları hepsini bu dosya yönetir.
```

### Senaryo 7: "Arama sonuçlarına yeni içerik ekle"
```
1. Aç: js/shared/search.js
2. SEARCH_DATA dizisini bul
3. Yeni nesneyi ekle:
   { title: '...', description: '...', href: '...', category: '...', path: '...', icon: 'book', keywords: '...' }
4. Kaydet.
```

---

## Kırmızı Çizgiler — Dokunma Kuralları

**1. HTML dosyalarına içerik yazma**
egitim.html, blog.html, yapay-zeka.html dosyaları sadece iskelet içerir.
Bu dosyalara ders konusu, blog yazısı, makale bilgisi ekleme.

**2. main.js'e yeni özellik ekleme**
main.js sadece başlatıcıdır. Yeni bir özellik gerekiyorsa:
- Tüm sayfaları etkiliyor → js/shared/ içine yeni dosya aç
- Bir sayfaya özel → ilgili sayfa JS dosyasına ekle

**3. İçeriği yanlış dosyaya koyma**
- Blog içeriği → sadece content/blog/posts.json
- Eğitim içeriği → sadece ilgili sınıf JSON dosyası
- YZ içeriği → sadece content/yapay-zeka/ altındaki dosyalar
- Birini diğerine karıştırma

**4. Büyük inline stil bloğu ekleme**
CSS değişikliği gerekiyorsa css/style.css'e git.
HTML'e uzun style="..." blokları yazma.

**5. fetch() yerine hardcode içerik**
İçerik her zaman JSON dosyasından yüklenir.
Renderer fonksiyonlarının içine (egitim.js, blog.js, yapay-zeka.js)
sabit metin / içerik gömme.

---

## Sistemi Çalıştırma

Bu site statik bir site olduğu için JSON dosyalarını yüklemek
için bir web sunucusu gerekir.

**Yerel geliştirme için:**
- VS Code → Live Server eklentisi (önerilen)
- Python: `python -m http.server 8000`
- Node: `npx serve .`

`file://` protokolüyle doğrudan açmak JSON yüklemesini engeller.

---

## Ortak Sistem Dosyaları (Dikkatli Doku)

Bu dosyalar tüm siteyi etkiler, değiştirmeden önce düşün:

| Dosya | Etkisi |
|-------|--------|
| css/style.css | Tüm sayfaların görünümü |
| js/shared/ui.js | Nav, scroll, sayaçlar — her sayfada |
| js/shared/tabs.js | Tüm sekme ve akordiyon sistemleri |
| js/shared/search.js | Global arama — her sayfada |
| js/shared/utils.js | fetchJSON, escapeHTML — tüm JS kullanır |
| js/main.js | Başlatıcı — her sayfada yüklenir |

---

*Son güncelleme: Nisan 2026*
