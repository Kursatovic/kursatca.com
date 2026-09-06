/* ============================================
   shared/search.js — Global site arama
   Arama butonu, overlay ve sıralama mantığı
   ============================================ */

const SEARCH_DATA = [
  { title: 'Ana Sayfa', description: 'Siteye giriş, kategori kartları, eğitim içerikleri, yapay zeka ve blog alanlarının genel görünümü.', href: '/', category: 'Sayfa', path: 'Ana Sayfa', icon: 'home', keywords: 'kursat çelik ana sayfa eğitim yapay zeka blog içerikler keşfet' },
  { title: 'Hakkımda', description: 'Anlatım tarzı, öğrenme yaklaşımı ve iletişim bağlantıları.', href: '/hakkimda', category: 'Sayfa', path: 'Hakkımda', icon: 'user', keywords: 'hakkımda kürşat çelik eğitimci içerik üreticisi linkedin x' },
  { title: 'Eğitim İçerikleri', description: '5. sınıftan 12. sınıfa kadar sosyal bilgiler, tarih ve inkılap tarihi içerikleri.', href: '/egitim', category: 'Sayfa', path: 'Eğitim', icon: 'book', keywords: 'eğitim içerikleri sosyal bilgiler tarih inkılap ortaokul lise' },
  { title: 'Belirli Günler ve Haftalar', description: 'Millî bayramlar, anma günleri ve özel haftalar için görsel destekli etkileşimli sunum panosu.', href: '/Ders%20kaynaklar%C4%B1/belirli-gunler-ve-haftalar/', category: 'Etkileşimli Ders', path: 'Eğitim / Belirli Günler ve Haftalar', icon: 'book', keywords: 'belirli günler ve haftalar milli bayramlar anma günleri özel haftalar inkılap tarihi sosyal bilgiler 29 ekim 23 nisan 19 mayıs 30 ağustos 18 mart istiklal marşı akıllı tahta sunum' },
  { title: 'Yapay Zeka ve Eğitim', description: 'YZ araçları, rehberler, prompt kullanımı ve eğitimde yapay zeka yazıları.', href: '/yapay-zeka', category: 'Sayfa', path: 'Yapay Zeka', icon: 'spark', keywords: 'yapay zeka chatgpt gemini eğitim prompt rehber edtech' },
  { title: 'Kişisel Blog', description: 'Kitap, tarih ve düşünce yazılarının bulunduğu blog bölümü.', href: '/blog', category: 'Sayfa', path: 'Blog', icon: 'pen', keywords: 'blog kitap tarih düşünce yazılar okuma notları' },

  { title: '5. Sınıf Sosyal Bilgiler', description: 'Birlikte Yaşamak, Evimiz Dünya, Ortak Mirasımız, Yaşayan Demokrasimiz ve diğer üniteler.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 5. Sınıf', icon: 'book', keywords: '5 sınıf sosyal bilgiler birlikte yaşamak evimiz dünya ortak miras demokrasi ekonomi teknoloji' },
  { title: '6. Sınıf Sosyal Bilgiler', description: 'Birlikte Yaşamak, Evimiz Dünya, Ortak Mirasımız, Yaşayan Demokrasi ve diğer üniteler.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 6. Sınıf', icon: 'book', keywords: '6 sınıf sosyal bilgiler roller ortak miras ekonomi demokrasi vatandaşlık telif patent' },
  { title: '7. Sınıf Sosyal Bilgiler', description: 'İletişim, Osmanlı, nüfus ve göç, bilim, demokrasi ve Türkiye-dünya ilişkileri.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 7. Sınıf', icon: 'book', keywords: '7 sınıf iletişim osmanlı nüfus göç bilim demokrasi türkiye dünya' },
  { title: 'Uluslararası Kuruluşlar ve Türkiye', description: '7. sınıf için kanca sorusuyla açılan, tüm kuruluşları anlatan, etkinlik ve sertifika ekranı içeren interaktif ders materyali.', href: '/egitim/kuresel-baglantilar/', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Uluslararası Kuruluşlar', icon: 'book', keywords: 'uluslararası kuruluşlar ve türkiye bm dsö iit fao unicef unesco agit nato ab türksoy avrupa konseyi 7. sınıf' },
  { title: '7. Sınıf - Geçmişten Günümüze Yerleşme', description: 'Yerleşmenin tarihsel gelişimi, doğal ve beşerî faktörlerle birlikte anlatılır.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/3.%20%C3%9CN%C4%B0TE/7.3.1%20GE%C3%87M%C4%B0%C5%9ETEN%20G%C3%9CN%C3%9CM%C3%9CZE%20YERLE%C5%9EME.pdf&title=Ge%C3%A7mi%C5%9Ften%20G%C3%BCn%C3%BCm%C3%BCze%20Yerle%C5%9Fme', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Yerleşme', icon: 'book', keywords: 'geçmişten günümüze yerleşme yerleşme tarihi ilk yerleşmeler doğal faktörler beşeri faktörler 7 sınıf sosyal bilgiler' },
  { title: "7. Sınıf - Türkiye'de Nüfus", description: 'Türkiye nüfusunun dağılışı, nüfus yoğunluğu ve nüfusu etkileyen faktörler.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/3.%20%C3%9CN%C4%B0TE/7.3.2%20%20T%C3%9CRK%C4%B0YE%E2%80%99DE%20N%C3%9CFUS.pdf&title=T%C3%BCrkiye%27de%20N%C3%BCfus', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Nüfus', icon: 'book', keywords: 'türkiyede nüfus türkiye nüfusu nüfus yoğunluğu nüfus dağılışı nüfusu etkileyen faktörler 7 sınıf sosyal bilgiler' },
  { title: '7. Sınıf - Ülkemizde Göç', description: 'Göçün nedenleri, türleri ve toplumsal sonuçları üzerine PDF/slayt ders kaynağı.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/3.%20%C3%9CN%C4%B0TE/7.3.3%20.%20%C3%9CLKEM%C4%B0ZDE%20G%C3%96%C3%87.pdf&title=%C3%9Clkemizde%20G%C3%B6%C3%A7', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Göç', icon: 'book', keywords: 'ülkemizde göç göç nedenleri göç sonuçları iç göç dış göç kırdan kente göç şehirleşme 7 sınıf sosyal bilgiler' },
  { title: '7. Sınıf - Yerleşme ve Seyahat Özgürlüğü', description: 'Yerleşme ve seyahat özgürlüğünü temel haklar bağlamında ele alan ders kaynağı.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/3.%20%C3%9CN%C4%B0TE/7.3.4%20B%C4%B0R%20%C3%96ZG%C3%9CRL%C3%9CK%20OLARAK%20YERLE%C5%9EME%20VE%20SEYAHAT.pdf&title=Bir%20%C3%96zg%C3%BCrl%C3%BCk%20Olarak%20Yerle%C5%9Fme%20ve%20Seyahat', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Haklar', icon: 'book', keywords: 'yerleşme ve seyahat özgürlüğü yerleşme hakkı seyahat hakkı temel hak ve özgürlükler anayasal haklar 7 sınıf sosyal bilgiler' },
  { title: '7. Sınıf - Yazının ve Bilginin Yolculuğu', description: 'Yazının icadıyla bilginin saklanması, aktarılması ve toplumların gelişimindeki etkisi incelenir.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/4.%20%C3%9CN%C4%B0TE/7.4.1%20YAZININ%20VE%20B%C4%B0LG%C4%B0N%C4%B0N%20YOLCULU%C4%9EU%20.pdf&title=Yaz%C4%B1n%C4%B1n%20ve%20Bilginin%20Yolculu%C4%9Fu', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Bilgi', icon: 'book', keywords: '7. sınıf sosyal bilgiler yazının icadı yazının ve bilginin yolculuğu bilgi aktarımı matbaa kütüphane tablet papirüs parşömen maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Doğu’nun Bilgi Birikimi', description: 'Türk-İslam medeniyetinde bilim, kültür ve düşünce alanlarında oluşan bilgi birikimi ele alınır.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/4.%20%C3%9CN%C4%B0TE/7.4.2%20DO%C4%9EU%E2%80%99NUN%20B%C4%B0LG%C4%B0%20B%C4%B0R%C4%B0K%C4%B0M%C4%B0%20.pdf&title=Do%C4%9Fu%E2%80%99nun%20Bilgi%20Birikimi', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Bilim Mirası', icon: 'book', keywords: '7. sınıf sosyal bilgiler doğunun bilgi birikimi türk islam bilginleri bilim insanları medeniyet bilim kültür rasathane kütüphane maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Avrupa’da Yaşanan Gelişmeler', description: 'Avrupa’da bilim, sanat ve düşünce alanlarında yaşanan değişimlerin dünyaya etkisi değerlendirilir.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/4.%20%C3%9CN%C4%B0TE/7.4.3%20AVRUPA%E2%80%99DA%20YA%C5%9EANAN%20GEL%C4%B0%C5%9EMELER.pdf&title=Avrupa%E2%80%99da%20Ya%C5%9Fanan%20Geli%C5%9Fmeler', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Avrupa', icon: 'book', keywords: '7. sınıf sosyal bilgiler avrupada yaşanan gelişmeler rönesans reform aydınlanma bilimsel gelişmeler coğrafi keşifler sanayi inkılabı özgür düşünce maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Özgür Düşünce ve Bilim', description: 'Özgür düşünce ortamının bilimsel gelişmeler üzerindeki etkisi örneklerle kavranır.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/4.%20%C3%9CN%C4%B0TE/7.4.4%20%C3%96ZG%C3%9CR%20D%C3%9C%C5%9E%C3%9CNCE%20VE%20B%C4%B0L%C4%B0M%20.pdf&title=%C3%96zg%C3%BCr%20D%C3%BC%C5%9F%C3%BCnce%20ve%20Bilim', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Özgür Düşünce', icon: 'book', keywords: '7. sınıf sosyal bilgiler özgür düşünce ve bilim bilimsel düşünce sorgulama kanıt düşünce özgürlüğü bilim insanları aydınlanma maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Üretimde ve Yönetimde Toprak', description: 'Toprağın üretim, geçim, yönetim ve toplumsal düzen açısından tarih boyunca taşıdığı önem incelenir.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/5.%20%C3%9CN%C4%B0TE/7.5.1%20%C3%9CRET%C4%B0MDE%20VE%20Y%C3%96NET%C4%B0MDE%20TOPRAK.pdf&title=%C3%9Cretimde%20ve%20Y%C3%B6netimde%20Toprak', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Toprak', icon: 'book', keywords: '7. sınıf sosyal bilgiler üretimde ve yönetimde toprak toprak yönetimi üretim tarım ekonomi tımar sistemi ikta sistemi dirlik maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Teknolojinin Sosyal ve Ekonomik Hayata Etkileri', description: 'Teknolojik gelişmelerin üretim, meslekler, iletişim ve günlük yaşam üzerindeki etkileri değerlendirilir.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/5.%20%C3%9CN%C4%B0TE/7.5.2%20TEKNOLOJ%C4%B0N%C4%B0N%20SOSYAL%20VE%20EKONOM%C4%B0K%20HAYATA%20ETK%C4%B0LER%C4%B0.pdf&title=Teknolojinin%20Sosyal%20ve%20Ekonomik%20Hayata%20Etkileri', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Teknoloji', icon: 'book', keywords: '7. sınıf sosyal bilgiler teknolojinin sosyal ve ekonomik hayata etkileri teknoloji üretim tüketim dijitalleşme sanayi ekonomik hayat sosyal hayat maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Bizim İçin Çalışanlar', description: 'Toplumda farklı mesleklerin ihtiyaçları karşılama ve ortak yaşamı sürdürmedeki katkısı ele alınır.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/5.%20%C3%9CN%C4%B0TE/7.5.3%20B%C4%B0Z%C4%B0M%20%C4%B0%C3%87%C4%B0N%20%C3%87ALI%C5%9EANLAR.pdf&title=Bizim%20%C4%B0%C3%A7in%20%C3%87al%C4%B1%C5%9Fanlar', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Meslekler', icon: 'book', keywords: '7. sınıf sosyal bilgiler bizim için çalışanlar meslekler mesleklerin önemi üretim hizmet sektörler ekonomik faaliyetler maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Ahilikten Meslek Odalarına', description: 'Ahilik geleneğinden günümüzdeki meslek odalarına uzanan meslek ahlakı ve dayanışma kültürü incelenir.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/5.%20%C3%9CN%C4%B0TE/7.5.4%20%20AH%C4%B0L%C4%B0KTEN%20MESLEK%20ODALARINA.pdf&title=Ahilikten%20Meslek%20Odalar%C4%B1na', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Ahilik', icon: 'book', keywords: '7. sınıf sosyal bilgiler ahilikten meslek odalarına ahilik meslek ahlakı ahi teşkilatı lonca dayanışma meslek odaları üretim kalite maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '7. Sınıf - Mesleki Tercihler', description: 'Meslek seçimini etkileyen ilgi, yetenek, değerler ve toplumsal ihtiyaçlar üzerinde durulur.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/7.%20S%C4%B1n%C4%B1f/5.%20%C3%9CN%C4%B0TE/7.5.5%20%20MESLEK%C4%B0%20TERC%C4%B0HLER%C4%B0.pdf&title=Mesleki%20Tercihler', category: 'Eğitim', path: 'Eğitim / 7. Sınıf / Kariyer', icon: 'book', keywords: '7. sınıf sosyal bilgiler mesleki tercihler meslek seçimi ilgi yetenek kariyer planlama geleceğin meslekleri ekonomik hayat maarife uygun ders anlatımı sosyal bilgiler konu anlatımı sosyal bilgiler özet' },
  { title: '8. Sınıf İnkılap Tarihi', description: 'Bir Kahraman Doğuyor, Millî Uyanış, Millî Mücadele ve Atatürkçülük üniteleri.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 8. Sınıf', icon: 'book', keywords: '8 sınıf inkılap tarihi milli mücadele kuvayı milliye lozan atatürkçülük lgs' },
  { title: '8. Sınıf - Kavramlar', description: 'LGS İnkılap Tarihi için temel kavramları tanıtan PDF/slayt ders kaynağı.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/8.%20S%C4%B1n%C4%B1f/8.0.1%20Kavramlar.pdf&title=Kavramlar', category: 'Eğitim', path: 'Eğitim / 8. Sınıf / Kavramlar', icon: 'book', keywords: '8 sınıf kavramlar inkılap tarihi lgs kavram sözlüğü maarife uygun ders anlatımı' },
  { title: '8. Sınıf - Uyanan Avrupa', description: 'Avrupa’daki değişimlerin Osmanlı Devleti üzerindeki etkilerini anlatan PDF/slayt ders kaynağı.', href: '/pdf-pro.html?pdf=Ders%20kaynaklar%C4%B1/8.%20S%C4%B1n%C4%B1f/8.1.0%20Uyanan%20Avrupa.pdf&title=Uyanan%20Avrupa', category: 'Eğitim', path: 'Eğitim / 8. Sınıf / Uyanan Avrupa', icon: 'book', keywords: 'uyanan avrupa gelişen avrupa güç kaybeden osmanlı sanayi inkılabı fransız ihtilali sömürgecilik milliyetçilik lgs inkılap' },
  { title: 'Osmanlı Toprak Kayıpları Haritası', description: 'Uyanan Avrupa konusu için milliyetçilik ve sömürgecilik etkisini gösteren etkileşimli harita.', href: '/egitim/osmanli-kayiplari-haritasi/', category: 'Etkileşimli Ders', path: 'Eğitim / 8. Sınıf / Harita', icon: 'book', keywords: 'osmanlı toprak kayıpları haritası mısır yunanistan sırbistan romanya cezayir tunus trablusgarp sömürgecilik milliyetçilik' },
  { title: "Kürşat Hoca'nın LGS Ders Notları", description: 'LGS İnkılap Tarihi için özel hazırlanmış, kavram-tanım-örnek yapısında özet notlar.', href: '/egitim', category: 'Kaynak', path: 'Eğitim / Özel Arşiv', icon: 'book', keywords: 'lgs ders notları inkılap tarihi kürşat hoca özet pdf' },
  { title: "Kürşat'ın Sözlüğü — Kavram Sözlüğü", description: 'LGS İnkılap Tarihi sorularında en çok karıştırılan kavramların detaylı açıklamaları.', href: '/egitim', category: 'Kaynak', path: 'Eğitim / Özel Arşiv', icon: 'book', keywords: 'kürşatın sözlüğü kavram sözlüğü lgs inkılap milliyetçilik egemenlik' },
  { title: '9. Sınıf Tarih', description: 'Geçmişin İnşa Sürecinde Tarih, Eski Çağ ve Orta Çağ medeniyetleri.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 9. Sınıf', icon: 'book', keywords: '9 sınıf tarih eski çağ orta çağ tarım devrimi türklerde konargöçer' },
  { title: '10. Sınıf Tarih', description: 'Türkistan\'dan Türkiye\'ye, Beylikten Devlete Osmanlı ve Cihan Devleti Osmanlı.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 10. Sınıf', icon: 'book', keywords: '10 sınıf tarih türkistan osmanlı beylikten devlete cihan devleti' },
  { title: '11. Sınıf Tarih', description: 'Osmanlı siyaseti, Avrupa\'daki değişim, devrimler çağı ve denge stratejisi.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 11. Sınıf', icon: 'book', keywords: '11 sınıf tarih osmanlı siyaseti devrimler çağı tanzimat islahat' },
  { title: '12. Sınıf Tarih ve İnkılap', description: '20. yüzyıl başları, Millî Mücadele, Atatürkçülük ve savaş sonrası Türkiye.', href: '/egitim', category: 'Eğitim', path: 'Eğitim / 12. Sınıf', icon: 'book', keywords: '12 sınıf tarih inkılap milli mücadele atatürk ikinci dünya savaşı' },

  { title: 'AI ses dosyanızı nasıl oluşturursunuz?', description: 'Yapay zekanın size benzeyen taslaklar üretmesi için kendi AI ses dosyanızı nasıl hazırlayacağınızı adım adım anlatan rehber.', href: '/yapay-zeka/ai-ses-dosyasi-nasil-olusturulur', category: 'YZ Yazısı', path: 'Yapay Zeka / Rehber', icon: 'spark', keywords: 'ai ses dosyası yapay zeka sesi kişisel ai profili prompt chatgpt claude gemini dijital ikiz yazı sesi' },
  { title: 'Prompt Mühendisliği 101', description: 'ChatGPT, Gemini ve Claude gibi araçlar için etkili prompt yazma teknikleri.', href: '/yapay-zeka', category: 'YZ Aracı', path: 'Yapay Zeka / Rehber', icon: 'spark', keywords: 'prompt mühendisliği chatgpt gemini claude eğitim öğretmen öğrenci' },
  { title: 'Yapay Zeka ile Görsel Üretim', description: 'DALL·E, Midjourney ve Canva AI ile eğitim materyali görselleştirme.', href: '/yapay-zeka', category: 'YZ Aracı', path: 'Yapay Zeka / Görsel', icon: 'spark', keywords: 'görsel üretim dalle midjourney canva ai poster sunum' },
  { title: 'Otomatik Değerlendirme', description: 'Ödev değerlendirme, geri bildirim ve rubrik hazırlamada YZ kullanımı.', href: '/yapay-zeka', category: 'YZ Aracı', path: 'Yapay Zeka / Ölçme', icon: 'spark', keywords: 'otomatik değerlendirme ödev geri bildirim rubrik yapay zeka' },
  { title: 'Gemini 3.0 Flash ile Sınıfta İlk Deneyimlerim', description: 'Gemini kullanımının sınıf içi etkileri ve öğrenci tepkileri üzerine notlar.', href: '/yapay-zeka', category: 'YZ Yazısı', path: 'Yapay Zeka / Deneyim', icon: 'spark', keywords: 'gemini flash sınıfta deneyimler öğrenciler google model' },
  { title: 'Yapay Zeka Öğretmenin Yerini Alabilir mi?', description: 'Eğitim, etik ve öğretmenin rolü üzerine düşünsel bir yazı.', href: '/yapay-zeka', category: 'YZ Yazısı', path: 'Yapay Zeka / Düşünce', icon: 'spark', keywords: 'yapay zeka öğretmenin yerini alabilir mi etik eğitim' },
  { title: 'Yapay Zekâ ile İnsan Arasında Üç Kademe Var', description: 'OECD Yapay Zekâ Yetkinlik Göstergeleri raporu üzerinden yapay zekâ, insan becerileri ve eğitim üzerine bir inceleme.', href: '/yapay-zeka/yapay-zeka-ile-insan-arasinda-uc-kademe-var', category: 'YZ Yazısı', path: 'Yapay Zeka / İnceleme', icon: 'spark', keywords: 'yapay zeka yapay zekâ insan üç kademe oecd yetkinlik göstergeleri eğitim öğretmen beceri' },
  { title: 'Öğrenciler İçin En İyi 10 Ücretsiz YZ Aracı', description: 'Ödev, proje ve araştırma süreçlerinde kullanılabilecek ücretsiz araç önerileri.', href: '/yapay-zeka', category: 'YZ Yazısı', path: 'Yapay Zeka / Rehber', icon: 'spark', keywords: 'öğrenciler için ücretsiz yz araçları chatgpt gemini öneri' },

  { title: 'Büyütmek mi, Yetiştirmek mi?', description: 'Ebeveynliği kendi zamanının içinde düşünmek, geçmişe öfkeyle değil anlayışla bakmak ve bugünü daha iyi kurmak üzerine.', href: '/blog/buyutmek-mi-yetistirmek-mi', category: 'Blog', path: 'Blog / Düşünce', icon: 'pen', keywords: 'büyütmek mi yetiştirmek mi ebeveynlik çocuk aile kuşaklar bilinçli ebeveynlik' },
  { title: "Sapiens'i Yeniden Okudum: Bu Sefer Farklı Gördüm", description: 'Harari\'nin kitabını ikinci okumada farklı hislerle yeniden değerlendiren yazı.', href: '/blog', category: 'Blog', path: 'Blog / Kitap', icon: 'pen', keywords: 'sapiens harari kitap notları yeniden okudum' },
  { title: "Çanakkale'yi Anlamak: Sadece Savaş Değil", description: 'Çanakkale\'nin insani ve tarihsel katmanlarını ele alan bir yazı.', href: '/blog', category: 'Blog', path: 'Blog / Tarih', icon: 'pen', keywords: 'çanakkale savaş tarih insani hikayeler' },
  { title: 'Bayram Ziyaretlerinin Felsefesi', description: 'Gelenekler, internet çağı ve değişen insan ilişkileri üzerine kısa düşünce yazısı.', href: '/blog', category: 'Blog', path: 'Blog / Düşünce', icon: 'pen', keywords: 'bayram ziyaretleri felsefesi gelenek düşünce' },
  { title: 'Aylık Okuma Listesi — Mart 2026', description: 'Ay boyunca okunan kitaplardan kısa notlar ve tavsiyeler.', href: '/blog', category: 'Blog', path: 'Blog / Kitap', icon: 'pen', keywords: 'aylık okuma listesi mart 2026 kitap tavsiye' },
  { title: "İstanbul'un Unutulan Mahalleleri", description: 'Şehrin gözden kaçan tarih katmanlarına doğru küçük bir yürüyüş.', href: '/blog', category: 'Blog', path: 'Blog / Tarih', icon: 'pen', keywords: 'istanbul unutulan mahalleleri tarih semt' },
  { title: 'Yeni Yılda Yeni Alışkanlıklar: 3 Ay Sonra Durum', description: 'Başlanan alışkanlıkların birkaç ay sonra ne durumda olduğunu anlatan samimi notlar.', href: '/blog', category: 'Blog', path: 'Blog / Düşünce', icon: 'pen', keywords: 'alışkanlıklar yeni yıl 3 ay sonra' }
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
