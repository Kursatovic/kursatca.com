# Mimari Kararlar ve İskelet Notları

Bu dosya, proje içinde aldığımız yapısal kararların nedenlerini yazmak için tutulur.
Amaç sadece "ne yapacağız" demek değil, "neden böyle yapıyoruz" sorusuna da net cevap bırakmaktır.

Bu notlar özellikle:
- projeye sonradan dönen kişi için,
- başka bir agent ile çalışırken,
- içerik üretimine başlamadan önce iskeleti sağlamlaştırmak için
referans olarak kullanılmalıdır.

---

## Neden Önce İskelet?

Bu proje içerik yoğun bir site olacak.
Şu an görünen yapı statik HTML/CSS/JS ile kurulmuş bir ilk sürüm olsa da asıl yük içerik tarafında oluşacak:

- blog yazıları artacak,
- eğitim konuları sınıf/sınıf düzeyi bazında büyüyecek,
- yapay zeka yazıları rehber ve deneyim içerikleriyle çoğalacak.

Eğer bu içerikleri güçlü bir iskelet oluşturmadan eklemeye başlarsak:

- dosya yapısı hızlıca dağılır,
- aynı parçalar farklı sayfalarda farklı görünmeye başlar,
- yeni sayfa eklemek zorlaşır,
- arama, SEO ve içerik yönetimi sonradan daha maliyetli hale gelir.

Bu yüzden karar şu:
Önce iskelet, sonra içerik.

---

## Neden Klasörleme Gerekli?

Şu an dosyaların büyük kısmı kök dizinde duruyor.
Bu yapı başlangıç için hızlıdır ama büyüme için uygun değildir.

İleride:
- onlarca blog yazısı,
- sınıf bazlı eğitim konu sayfaları,
- yapay zeka rehber içerikleri,
- ortak görseller,
- veri dosyaları,
- SEO ve yardımcı dosyalar
eklendiğinde kök dizin yönetilemez hale gelir.

Bu nedenle klasörleme mantıklıdır.

Klasörleme sayesinde:
- içerikler kategori bazında ayrılır,
- yeni sayfa açmak daha hızlı olur,
- hangi dosyanın ne işe yaradığı netleşir,
- başka agentlar proje yapısını daha hızlı kavrar,
- bakım maliyeti düşer.

Hedeflenen mantık:

```txt
/
|-- index.html
|-- hakkimda.html
|-- egitim/
|-- blog/
|-- yapay-zeka/
|-- css/
|-- js/
|-- img/
|-- data/ veya content/
|-- README.md
|-- mimari-kararlar.md
```

Not:
Bu klasörleme hemen tek hamlede yapılmak zorunda değil.
Ama bundan sonraki yapısal işler bu hedefi göz önünde bulundurarak ilerlemelidir.

---

## Neden Tekil İçerik Şablonları Gerekli?

Şu an sayfalarda liste yapıları var ama içeriklerin çoğu placeholder durumda.

Eğer blog, eğitim ve yapay zeka tarafında gerçek içerik üretilecekse her biri için bir "detay sayfası" şablonu gerekir.

Örnek ihtiyaçlar:
- tekil blog yazısı sayfası,
- tekil eğitim konusu sayfası,
- tekil yapay zeka rehber sayfası.

Bunu istememizin nedeni:
- içerik kartı ile içerik detay sayfası farklı problemlerdir,
- detay sayfa tasarımı erken çözülürse içerik eklemek kolaylaşır,
- başlık, özet, tarih, kategori, görsel, benzer içerik gibi alanlar standartlaşır,
- tüm site daha profesyonel görünür.

Karar:
İçeriğe geçmeden önce en az bir blog detay şablonu ve bir eğitim konu şablonu tasarlanmalıdır.

---

## Neden Ortak Bileşen Mantığı Kuruyoruz?

Her sayfada tekrar eden alanlar var:
- navbar,
- footer,
- sayfa başlığı,
- kart yapıları,
- rozetler,
- butonlar,
- global arama.

Bu bileşenler her sayfada ayrı ayrı "elle farklılaşırsa" tutarlılık bozulur.

Bu yüzden ortak bileşen mantığı önemlidir.

Amaç:
- aynı işlevin her sayfada aynı görünmesi,
- ufak tasarım güncellemelerinin tek merkezden yapılabilmesi,
- görsel dilin dağılmaması.

Bu projede framework olmadığı için bu ortaklık şu yollarla korunmalıdır:
- ortak class isimleri,
- ortak CSS kuralları,
- tekrar kullanılan HTML bloklarının aynı yapıda tutulması,
- JS etkileşimlerinin tek merkezde toplanması.

---

## Neden Global Arama Kuruldu?

Kullanıcı ihtiyacı blog içinde arama değil, tüm sitede arama yapabilmekti.
Bu çok önemli bir ayrım.

Çünkü site sadece blog değil:
- eğitim içerikleri var,
- yapay zeka yazıları var,
- sayfa bazlı bilgi alanları var.

Bu nedenle arama şu mantıkla düşünülmelidir:
- görünür olsun,
- her sayfada erişilsin,
- kullanıcıyı kategori düşünmeye zorlamasın,
- tüm siteyi tek yerden tarasın.

Bu yüzden global arama:
- sabit bir konuma yerleştirildi,
- her sayfada görünür hale getirildi,
- içerik keşfi için merkezi bir giriş noktası olarak düşünüldü.

İleride bu yapı daha da geliştirilebilir:
- konu bazlı sonuçlar,
- sınıf filtresi,
- kategori filtresi,
- klavye ile seçim,
- gerçek veri dosyalarından beslenme.

---

## Neden Görsel Sistem Şimdiden Önemli?

İçerik henüz tam dolmadan önce bile sitenin bir karakteri olmalı.

Bu yüzden:
- yazı tipi,
- boşluk sistemi,
- kart stili,
- badge yapısı,
- buton hiyerarşisi,
- renklerin kullanım mantığı
erken aşamada netleşmelidir.

Bu kararın nedeni:
- sonradan eklenen içerikler daha kolay uyum sağlar,
- her yeni sayfada yeniden tasarım kararı vermek gerekmez,
- site tek bir ürün gibi görünür.

Not:
Mevcut projede tasarım dili modern, yumuşak gradient, glassmorphism ve yüksek okunabilirlik etrafında ilerlemelidir.

---

## Neden Mobil İskelet Erken Çözülmeli?

Bu sitede sekmeler, kartlar, sabit arama, eğitim sınıf geçişleri gibi mobilde zorlaşabilecek parçalar var.

Mobil çözüm sonradan eklenirse:
- düzen bozulur,
- kartlar sıkışır,
- arama paneli rahatsız eder,
- sekmeli yapılar kullanılamaz hale gelir.

Bu yüzden mobil, masaüstünden sonra bakılacak ayrı bir iş değil;
iskelet tasarımının bir parçasıdır.

Karar:
Yeni eklenen her yapısal bileşen mobil düşünülerek tasarlanmalıdır.

---

## Neden İçerik Verisini HTML'den Ayırmayı Düşünüyoruz?

Şu an içerikler büyük ölçüde doğrudan HTML içine yazılmış durumda.
Bu yöntem küçük projelerde hızlıdır ama içerik çoğaldıkça hantallaşır.

Özellikle eğitim tarafında:
- sınıf,
- ünite,
- konu,
- konu açıklaması,
- konu linki
gibi veriler çok tekrar eder.

Bu yüzden ileriki aşamada içeriklerin:
- JSON,
- markdown,
- ya da basit bir veri dosyası
üzerinden yönetilmesi düşünülmelidir.

Bunun faydası:
- bir yerden veri girilir,
- birden fazla yerde kullanılabilir,
- arama sistemi daha doğru çalışır,
- içerik eklemek hızlanır.

Bu karar hemen uygulanmak zorunda değildir ama sonraki agentlar yapıyı buna kapalı kurmamalıdır.

---

## Şu Ana Kadarki Yapısal Kararlar

Bu çalışma sırasında şu yönelimler benimsendi:

1. Hakkımda sayfası CV hissinden çıkarılıp daha editorial ve modern bir vitrime dönüştürüldü.
2. Blog sayfasında eksik olan Hakkımda bağlantısı düzeltildi.
3. Blog içi arama yerine tüm sitede çalışan global arama fikrine geçildi.
4. Global arama sabit ve her sayfada erişilebilir olacak şekilde kurgulandı.
5. İçerikten önce iskeletin güçlendirilmesi gerektiği netleştirildi.
6. Klasörleme, tekil şablonlar ve ortak bileşen mantığı bir sonraki aşamanın önceliği olarak belirlendi.

---

## Sonraki Agentlar İçin Net Talimat

Bu projede bir sonraki yapısal işler yapılırken şu sıraya sadık kalınması önerilir:

1. Klasör yapısını planla ve gerektiğinde kademeli taşı.
2. Blog detay ve eğitim konu detay şablonlarını oluştur.
3. Ortak bileşenleri mümkün olduğunca standardize et.
4. Global arama sistemini veri odaklı hale getirmeye hazırlan.
5. Ancak bundan sonra yoğun içerik girişine geç.

Önemli:
Bu proje içerik üretim sitesi olduğu için kısa vadeli hız uğruna uzun vadeli düzensizlik yaratılmamalıdır.

