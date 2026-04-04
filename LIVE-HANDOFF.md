# LIVE HANDOFF — kursatca.com

Bu dosya, projeyi başka bir agent'ın hızlıca anlayıp canlıya alabilmesi için hazırlandı.

Hedef kullanım:
- Google Gemini / Antigravity agent gibi dış agentlara doğrudan verilebilir
- canlıya alma öncesi son durum özeti sağlar
- hangi dosyaların ana kaynak olduğunu netleştirir
- son denemeler ve geri dönüş noktalarını açıklar

---

## 1. Proje Özeti

Proje adı:
- `kursatca.com`

Proje tipi:
- saf statik site
- HTML + CSS + JavaScript
- framework yok

Amaç:
- Kürşat Çelik'in kişisel/eğitim odaklı web sitesi
- ortaokul ve lise öğrencilerine yönelik eğitim içerikleri
- yapay zeka ve eğitim yazıları
- kişisel blog ve öğretici içerik vitrini

Dil:
- Türkçe

---

## 2. Şu Anki Canlı Ana Sayfalar

Canlıya alınacak ana giriş dosyaları:

- `index.html`
- `egitim.html`
- `yapay-zeka.html`
- `blog.html`
- `hakkimda.html`

Not:
Şu an bunlar doğrudan kök dizinde çalışır.
Yeni klasör yapısı hazırlığı yapılmıştır ama ana liste sayfaları henüz yeni alt klasörlere taşınmamıştır.

---

## 3. Ana Kaynak Dosyalar

Projeyi anlamak için öncelikle şu dosyalar okunmalıdır:

### Yapı ve ana sayfalar
- `index.html`
- `egitim.html`
- `yapay-zeka.html`
- `blog.html`
- `hakkimda.html`

### Stil ve davranış
- `css/style.css`
- `js/main.js`

### İçerik ve yön
- `README.md`
- `mimari-kararlar.md`
- `brand-guide.md`
- `icerik-haritasi.md`

---

## 4. Tasarım ve Marka Referansı

Eğer dış agent yeni görsel, blok, içerik kartı veya sayfa tasarlayacaksa önce şu dosya referans alınmalıdır:

- `brand-guide.md`

Bu dosyada şunlar tanımlıdır:
- renk paleti
- tipografi
- kart mantığı
- glassmorphism yaklaşımı
- dışarıda üretilecek içeriklerin mevcut siteye nasıl uyacağı

Önemli:
README içindeki eski tema bilgileri tarihsel olabilir.
Gerçek güncel tasarım kaynağı:
- `css/style.css`
- `brand-guide.md`

---

## 5. Mimari Kararların Kaynağı

Eğer dış agent:
- neden klasörleme yapıldığını
- neden iskeletin önce güçlendirildiğini
- neden global arama kurulduğunu
- neden veri odaklı yapıya geçilmek istendiğini
anlamak istiyorsa şu dosyayı okumalı:

- `mimari-kararlar.md`

Bu dosya "ne yapıldı"dan çok "neden bu karar alındı" kısmını açıklar.

---

## 6. Klasör Yapısında Hazırlanan Alanlar

İskelet çalışması kapsamında aşağıdaki klasörler oluşturuldu:

- `blog/`
- `egitim/`
- `yapay-zeka/`
- `content/`
- `templates/`

Bu klasörler gelecekteki düzenli büyüme için hazırlandı.

Şu anki görevleri:

### `blog/`
- blog detay sayfaları için hazırlık
- örnek şablon: `blog/yazi-sablonu.html`

### `egitim/`
- eğitim konu detay sayfaları için hazırlık
- örnek şablon: `egitim/konu-sablonu.html`

### `yapay-zeka/`
- tekil yapay zeka yazıları için hazırlık
- örnek şablon: `yapay-zeka/yazi-sablonu.html`

### `content/`
- ileride içeriklerin JSON/Markdown gibi yapıdan yönetilebilmesi için hazırlık alanı
- örnek dosyalar:
  - `content/blog-index.json`
  - `content/egitim-index.json`
  - `content/yapay-zeka-index.json`

### `templates/`
- tekrar kullanılabilir ortak şablon alanı

---

## 7. Son Yapılan Önemli Değişiklikler

### Global arama eklendi
Tüm sitede çalışan sabit bir arama paneli eklendi.

İlgili dosyalar:
- `js/main.js`
- `css/style.css`

Davranış:
- sağ altta sabit `Ara` butonu var
- `/` tuşu ile açılabiliyor
- eğitim, blog, yapay zeka ve hakkında içeriklerini listeliyor

### Hakkımda sayfası yenilendi
`hakkimda.html` daha modern, daha editorial ve daha güçlü vitrin yapısına dönüştürüldü.

İlgili dosyalar:
- `hakkimda.html`
- `css/style.css`

### Sayfa başlıkları sadeleştirildi
Sekme başlıkları kısa ve temiz hale getirildi:
- `kursatca.com | Ana Sayfa`
- `kursatca.com | Eğitim`
- `kursatca.com | Blog`
- `kursatca.com | Hakkımda`
- `kursatca.com | Yapay Zeka`

### Eğitim sayfasında dekoratif arka plan denemesi yapıldı
`egitim.html` üzerinde çok silik tarih temalı arka plan motifleri denendi.

Motifler:
- dünya
- gemi
- Orta Asya çadırı
- yazıt/doku benzeri görseller

İlgili dosyalar:
- `egitim.html`
- `css/style.css`

Not:
Bu değişiklik kesin son karar değildir; deneme niteliğindedir.

---

## 8. Geri Dönüş Noktası

Eğitim sayfasındaki son arka plan denemesi için yedek alındı.

Yedek dosyalar:
- `backups/2026-03-31-egitim-deneme/egitim.html.bak`
- `backups/2026-03-31-egitim-deneme/style.css.bak`

Eğer dış agent eğitim sayfasındaki son dekoratif görsel denemesini beğenmezse ya da canlıya almadan önce geri dönmek isterse bu dosyalar referans alınmalıdır.

---

## 9. Canlıya Alma İçin Minimum Gerekli Dosyalar

Statik hosting için aşağıdaki dosya/klasörler gereklidir:

- `index.html`
- `egitim.html`
- `yapay-zeka.html`
- `blog.html`
- `hakkimda.html`
- `css/`
- `js/`
- `img/`

Ek olarak tavsiye edilen ama zorunlu olmayan dokümantasyon:
- `README.md`
- `mimari-kararlar.md`
- `brand-guide.md`
- `icerik-haritasi.md`

Gelecek hazırlıkları için bırakılabilir:
- `blog/`
- `egitim/`
- `yapay-zeka/`
- `content/`
- `templates/`
- `backups/`

Not:
`backups/` klasörü canlıya çıkmak zorunda değildir. İstenirse lokal geliştirme alanında bırakılabilir.

---

## 10. Dış Agent İçin Canlıya Alma Öncesi Kontrol Listesi

1. Tüm ana HTML dosyalarının aynı kök yapıda çalıştığını doğrula.
2. `css/style.css` ve `js/main.js` yollarının bozulmadığını kontrol et.
3. `img/avatar.png` yolunun doğru çalıştığını kontrol et.
4. Global arama panelinin tüm sayfalarda açıldığını test et.
5. Eğitim sayfasındaki arka plan denemesinin kalıp kalmayacağına karar ver.
6. Gerekirse `backups/2026-03-31-egitim-deneme/` içinden geri dönüş yap.
7. Tarayıcı sekme başlıklarının düzgün göründüğünü kontrol et.
8. Mobil görünümde menü ve arama butonunu test et.

---

## 11. Dış Agent İçin Yapılmaması Gerekenler

- Mevcut çalışan kök HTML dosyalarını tek hamlede alt klasörlere taşımak
- `css/style.css` içindeki tasarım dilini sert biçimde değiştirmek
- global aramayı blog içi aramaya geri düşürmek
- Hakkımda sayfasını yeniden CV tarzına çevirmek
- marka diline aykırı koyu cyberpunk ya da sert kurumsal tema kullanmak

---

## 12. Bir Sonraki Mantıklı Geliştirme Adımları

Canlıya alma sonrası önerilen sıra:

1. İlk gerçek blog detay sayfasını üretmek
2. İlk gerçek eğitim konu detay sayfasını üretmek
3. Liste sayfalarını yeni klasör yapısıyla bağlamak
4. İçerik verisini `content/` üzerinden daha yönetilebilir hale getirmek
5. SEO dosyalarını eklemek (`sitemap`, `robots`, meta düzeni)

---

## 13. Dış Agent'a Kısa Özet

Bu proje:
- statik HTML/CSS/JS ile çalışan
- modern, açık, glassmorphism tabanlı
- eğitim, yapay zeka ve blog ekseninde büyüyecek
- içerik odaklı bir kişisel site

Şu an canlıya alınabilir durumdadır.
Ancak iskelet büyümeye hazır hale getirilmeye başlanmıştır.

En önemli referans dosyaları:
- `README.md`
- `mimari-kararlar.md`
- `brand-guide.md`
- `css/style.css`
- `js/main.js`

