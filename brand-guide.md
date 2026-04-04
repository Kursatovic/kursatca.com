# kursatca.com Brand Guide

Bu dosya, kursatca.com için görsel kimlik ve tasarım yönünü tek yerde toplamak amacıyla hazırlanmıştır.

Amaç:
- dışarıda üretilecek içeriklerin mevcut siteyle uyumlu görünmesini sağlamak
- başka yapay zekalara net bir tasarım referansı vermek
- renk, tipografi ve arayüz dilini tutarlı hale getirmek

Not:
Bu kılavuz, proje içindeki gerçek kaynak olan `css/style.css` dosyasındaki mevcut tasarım tokenlarına göre hazırlanmıştır.
README içindeki eski tema bilgileri ile birebir aynı olmayabilir.

---

## Marka Özeti

Site karakteri:
- modern
- sıcak
- insanî
- temiz
- hafif editorial
- glassmorphism etkili
- yumuşak ama sıradan olmayan

Site bir okul portalı gibi değil;
daha çok modern bir içerik vitrini ve keşif alanı gibi hissettirmelidir.

Arayüz hissi:
- sert değil
- köşeli değil
- kurumsal değil
- “light premium” hissinde

---

## Tasarım Yönü

Ana görsel yön:
- soft gradient background
- glass cards
- rounded corners
- pastel neon vurgular
- yüksek okunabilirlik

Kaçınılması gereken yönler:
- koyu cyberpunk tema
- klasik kurumsal mavi-beyaz görünüm
- ağır dashboard hissi
- düz ve sıkıcı eğitim portalı estetiği
- aşırı gölge ve karmaşa

---

## Renk Paleti

### Ana Arka Plan

Gradient arka plan:

```txt
#FFE4EF
#D4F8F4
#E0E7FF
```

CSS karşılığı:

```css
linear-gradient(135deg, #FFE4EF 0%, #D4F8F4 50%, #E0E7FF 100%)
```

### Temel Yüzeyler

- Ana yüzey: `#FFFFFF`
- Cam yüzey: `rgba(255, 255, 255, 0.45)`
- Yükseltilmiş yüzey: `rgba(255, 255, 255, 0.45)`
- Hafif glass layer: `rgba(255, 255, 255, 0.15)`
- Glass border: `rgba(255, 255, 255, 0.6)`
- Güçlü açık border: `rgba(255, 255, 255, 1)`

### Vurgu Renkleri

- Primary: `#7C3AED`
- Secondary: `#06B6D4`
- Accent: `#FF2D55`

Türev kullanımlar:
- Cyan glow: `rgba(6, 182, 212, 0.15)`
- Pink glow: `rgba(255, 45, 85, 0.15)`
- Deep cyan: `#0891b2`

### Metin Renkleri

- Primary text: `#0B1324`
- Secondary text: `#0B1324`
- Muted text: `#4B5563`

---

## Tipografi

### Ana Fontlar

- Display / Headings: `Inter`
- Body text: `Inter`
- Editorial / Dramatic accent: `Playfair Display`
- Mono / technical labels: `JetBrains Mono`

### Kullanım Mantığı

- Ana başlıklar: güçlü, temiz, modern sans yapı
- Gövde yazıları: sade ve rahat okunur
- Vurgulu tek cümleler veya özel alanlar: gerekirse `Playfair Display`
- Teknik rozet, kısa etiket, kodumsu alanlar: `JetBrains Mono`

### Font Hiyerarşisi

- Hero: `clamp(2.8rem, 6vw, 5.5rem)`
- H1: `clamp(2rem, 4vw, 3.5rem)`
- H2: `clamp(1.6rem, 3vw, 2.5rem)`
- H3: `clamp(1.2rem, 2vw, 1.5rem)`
- Body: `1.05rem`
- Small: `0.9rem`
- XS: `0.78rem`

---

## Köşe ve Form Dili

- Small radius: `12px`
- Medium radius: `16px`
- Large radius: `24px`
- Pill radius: `100px`

Bu marka dilinde:
- kartlar yumuşak köşeli olmalı
- butonlar yuvarlak/pill formunda olabilir
- keskin, sert, kutu gibi UI elemanları tercih edilmemeli

---

## Boşluk Sistemi

- XS: `0.5rem`
- SM: `0.75rem`
- MD: `1.25rem`
- LG: `2rem`
- XL: `3.5rem`
- 2XL: `6rem`

Arayüz nefes almalıdır.
Sıkışık, dar, yoğun bileşen kümeleri marka diliyle uyumlu değildir.

---

## Gölge ve Yüzey Mantığı

Kart gölgesi:

```css
0 10px 30px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.02)
```

Görsel prensip:
- hafif gölge
- blur destekli glass yüzey
- düşük agresiflikte derinlik
- temiz ve açık renkli katmanlar

Bu markada gölge:
- var ama bağırmaz
- premium görünüm verir
- karanlık, ağır, kirli görünmez

---

## Buton Sistemi

### Primary Button

- mor + pembe gradient
- beyaz yazı
- hafif glow / shadow
- hover’da hafif yükselme

### Ghost / Secondary Button

- transparent veya glass yüzey
- ince açık border
- koyu metin
- hover’da cyan veya accent vurgusu

### Hover Davranışı

- hafif translateY
- hafif shadow artışı
- sert zoom veya agresif animasyon yok

---

## Kart Sistemi

Kartlar için beklenen yapı:
- yarı şeffaf beyaz yüzey
- blur efekti
- ince açık border
- 16px–24px radius
- temiz içerik boşluğu
- hover’da hafif yükselme

Kartlar:
- dashboard widget gibi değil
- keşif kartı gibi hissettirmeli

---

## İkon Kullanımı

İkon dili:
- sade
- ince çizgili veya temiz dolgu
- modern
- çocukça olmayan ama soğuk da olmayan

İkonlar:
- küçük destekleyici öğe olmalı
- içeriğin önüne geçmemeli

---

## İçerik Üretirken Uygulanacak Kısa Kurallar

Başka bir yapay zekaya verilecek kısa özet:

1. Açık zeminli, modern, premium ama yumuşak bir arayüz üret.
2. Glassmorphism kullan ama abartma.
3. Ana vurgu renkleri `#7C3AED`, `#06B6D4`, `#FF2D55`.
4. Arka plan için pastel gradient kullan: `#FFE4EF`, `#D4F8F4`, `#E0E7FF`.
5. Metin rengi olarak koyu lacivert `#0B1324` kullan.
6. Font olarak öncelikle `Inter`, gerekirse editorial vurgu için `Playfair Display`, teknik küçük alanlar için `JetBrains Mono` kullan.
7. Sert köşeler, ağır kurumsal görünüm ve koyu cyberpunk temadan kaçın.
8. Kartlar ve bileşenler bol boşluklu, yuvarlak köşeli ve okunabilir olsun.

---

## Dışarıda Üretilecek İçerikler İçin Tavsiye

Eğer dışarıda üretilecek şey:
- interaktif konu anlatımı
- mini quiz
- mikro oyun
- yapay zeka destekli materyal
- görsel anlatım paneli
- öğretmen/öğrenci aracı
ise bu görsel prensiplere uymalıdır:

- ana ekranı kalabalık yapma
- tek ana vurgu alanı seç
- kartları beyaz glass yüzeyde tut
- CTA’ları belirgin ama sınırlı kullan
- mobilde de okunabilir olmasına dikkat et

---

## Marka Diline Uymayan Örnekler

Şunlar önerilmez:
- düz beyaz arka plan + rastgele mavi buton
- siyah arka plan + neon mor hacker estetiği
- çok fazla gradient üst üste kullanmak
- birbirinden alakasız fontlar
- keskin köşeli paneller
- aşırı animasyonlu, dikkat dağıtan yapı

---

## Kaynak

Gerçek tasarım tokenlarının ana kaynağı:

- `css/style.css`

Yapısal kararların nedenleri için:

- `mimari-kararlar.md`

