# kursatca.com - Profesyonel PDF Ekleme Rehberi 🚀

Sisteminize yeni bir PDF kaynağı eklemek (örneğin 6. Sınıf veya 7. Sınıf testleri) istediğinizde, Pro Görüntüleyicinin (pdf-pro.html) sorunsuz çalışması için izlemeniz gereken tek kural `href` linkini doğru vermektir.

## 1. PDF Dosyasını Klasöre Koyun
Yeni PDF dosyanızı bilgisayarınızda `Ders kaynakları` altındaki ilgili sınıf ve ünite klasörüne atın.
> Örnek: `Ders kaynakları/6. Sınıf/1. ünite/yeni-konu.pdf`

## 2. JSON Dosyasını Güncelleyin
İlgili sınıfın JSON dosyasına (örn: `content/egitim/ortaokul/6-sinif.json`) gidin ve yeni kaynağı JSON listesine ekleyin. 
**En önemli kısım link (href) yapısıdır.** Link her zaman şu şekilde oluşturulmalıdır:

```json
"href": "pdf-pro.html?pdf=Ders kaynakları/6. Sınıf/1. ünite/yeni-konu.pdf&title=Sekmede Görünecek Başlık"
```

- `pdf-pro.html?pdf=` : Sistemin PDF okuyucuyu başlatmasını sağlayan sihirli kısımdır. Başta hep bu olmalı.
- `Ders...yeni-konu.pdf` : Sizin eklediğiniz PDF'in klasör yolu.
- `&title=...` : Tarayıcının sekmesinde (en üstte) yazmasını istediğiniz isimdir.

## 3. Son Eklenenler (İsteğe Bağlı)
Eğer bu eklediğiniz PDF'in "Son Eklenen İçerikler" kısmında da anında görünmesini istiyorsanız, birebir aynı yapıyı kopyalayarak `content/egitim/son-eklenenler.json` dosyasının en başına ekleyin (böylece sayfada en solda görünür).

## 4. Sunucuya (Hostinger) Yükleme
`pdf-pro.html` dosyası ve kütüphanesi artık sitenize **kalıcı olarak eklendi.**
Bundan sonra yeni bir sınıf eklediğinizde sadece şunları Hostinger'a ZIP olarak atıp çıkarmanız yeterli:
1. Güncellediğiniz `.json` dosyası.
2. Yeni eklediğiniz `.pdf` dosyası.

Tebrikler, yeni nesil doküman okuyucunuz tüm kursatca.com ziyaretçilerine hayırlı olsun! 🎉
