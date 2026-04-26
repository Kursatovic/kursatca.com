# 🤖 AI AGENT PROJECT GUIDE — kursatca.com

Bu dosya, bu projede çalışacak gelecek AI agent'lar (Antigravity, Gemini, Claude vb.) için kritik mimari kararları ve proje yapısını özetler.

---

## 1. Proje Kimliği & Hedefi
- **Proje Adı:** Kursatca.com — Kürşat Çelik Kişisel Eğitim Portalı.
- **Ruh:** Modern, kullanıcı dostu, "Premium Luxe" estetiğine sahip bir dijital döküman merkezi.
- **Teknoloji:** Saf (Vanilla) HTML, CSS ve JavaScript. Hiçbir framework kullanılmamıştır; sadelik ve hız esastır.

## 2. Kritik UI Sistemleri & Kullanım Kuralları

### 📦 Hazine Kutusu (Özel Arşiv)
- **Yapı:** `.special-archive-area` sınıfı ile tanımlanır.
- **Davranış:** Collapsible (Açılır-Kapanır) bir sistemdir.
- **Aktivasyon:** Başlığa tıklandığında parent elemana `.open` sınıfı eklenir. `max-height` animasyonu ile açılır.
- **Dahili Öğeler:** `.archive-content` içinde `.archive-list` ve `.archive-item` (1,2) bulunur.

### 📚 Ünite Akordeon Sistemi (Accordions)
- **Fix (Turn 6.6.26):** Tüm eğitim üniteleri (5-12. sınıf) artık varsayılan olarak **KAPALI** gelir.
- **Aktivasyon:** `.unit-header` tıklandığında `.unit-accordion` elemanına `.active` sınıfı eklenir.
- **Not:** Hazine Kutusu `.open` kullanırken, üniteler `.active` sınıfını kullanır. Bu ayrım CSS çakışmalarını önlemek içindir.

### ⚠️ Event Listener ve Caching Uyarısı (Turn 4.13.26)
- **Duplicate Listeners BUG:** Sekme (Tab) geçişlerinde sayfadaki DOM elemanları silinmediğinden, `document.querySelectorAll` kullanılarak atanan tıklama eventleri (örneğin Hazine Kutusu ve Akordeonlar için) tekrar tekrar atanabilir. Bu durum, kutunun tıklandığında 1 milisaniyede açılıp geri kapanması sorununa yol açar. Bir EventListener eklerken daima `if (header.dataset.ready) return;` kontrolü KULLANIN!
- **CSS / JS Sınıf Uyuşmazlığı:** Hazine Kutusu CSS'te `.open` beklerken JavaScript'te hata ile `.active` atanabilir. Kutuların ve animasyonların çalışmaması durumunda mutlaka CSS'teki hedef sınıf ismiyle (`open` / `active`) JavaScript'teki `classList.toggle()` sınıf isimlerinin uyuşup uyuşmadığını kontrol edin.
- **Tarayıcı Önbelleği (Cache):** Proje Vanilla yapıda olduğu için, JS veya CSS dosyalarında yapılan güncellemeler Hostinger üzerinden doğrudan kullanıcı tarayıcısına eski versiyonla (Chrome Cache) geçebilir. Bir JavaScript/CSS dosyası güncellediğinizde ESNEMEDEN HTML dosyalarındaki `<script src="js/dosya.js?v=1.X.X"></script>` parametresini güncelleyin!

### 🌓 Tasarım Dili (Midnight Luxe)
- **Renkler:** `--clr-primary` (Mor/Teal), `--clr-bg` (Luxe Black/Glass).
- **Efektler:** High-blur (`backdrop-filter`), Glassmorphism, ve Custom Scroll Reveal (`.reveal.visible`).
- **Log:** Sitedeki tüm önemli görsel denemeler `brand-guide.md` dosyasına sadık kalmalıdır.

### ⚡ Önbellek Yönetimi (Cache Busting)
- **Önemli:** Canlıya alınan CSS (`style.css`) ve JS (`main.js`) yollarına `?v=1.0.1` gibi bir versiyon eki uygulanmıştır. Her majör CSS/JS değişikliğinde bu versiyon artırılmalıdır.

## 3. Dosya ve Klasör Hiyerarşisi
- `/css/style.css`: Sitenin tek ve devasa tasarım merkezi. Ad-hoc utility'den kaçın, sistem bazlı yaz.
- `/js/main.js`: Tüm interaktiflik buradadır. Akordeonlar, tablar ve animasyonlar burada kurgulanmıştır.
- `/Ders kaynakları/`: Orijinal PDF dökümanları (LGS Notları vb.).
- `/İlgili Görseller/`: Arşiv içindeki döküman kapakları.
- `/img/`: Avatar ve dekoratif motifler.

---

## 🚀 Agent'lara Mesaj:
Bu projede bir değişiklik yaparken **hiyerarşiyi (DOM Nesting)** bozmamaya azami özen gösterin. Özellikle 8. sınıf ve Lise tabı arasındaki div dengesi kritiktir. Bir değişiklik yaptıktan sonra mutlaka `browser_subagent` ile görsel stabiliteyi doğrulayın.

Mühürleyen: Antigravity AI (2026-04-05) 🛠️🚀🏆
