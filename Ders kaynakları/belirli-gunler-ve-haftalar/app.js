/* Belirli Gün ve Haftalar - Akıllı Tahta 3D Sunum Uygulaması */
const HISTORICAL_DAYS = [
  {
    id: "30_agustos",
    title: "30 AĞUSTOS ZAFER BAYRAMI",
    dateDisplay: "30 AĞUSTOS 1922",
    exactDate: "1922-08-30",
    bookletOrder: 1,
    chronoOrder: 6,
    era: "Kurtuluş Savaşı Askerî Safhası",
    heroImage: "./assets/images/30_agustos_kocatepe.jpg",
    images: [
      {
        url: "./assets/images/30_agustos_kocatepe.jpg",
        title: "Mustafa Kemal Paşa Kocatepe'de (26 Ağustos 1922)",
        caption: "Etem Temel tarafından çekilen, Mustafa Kemal Paşa'nın Büyük Taarruz'un başladığı Kocatepe'deki efsanevi fotoğrafı.",
        source: "Türk Tarih Kurumu & Millî Savunma Arşivi"
      },
      {
        url: "./assets/images/30_agustos_taarruz.jpg",
        title: "Büyük Taarruz ve Türk Süvarileri Cephede",
        caption: "Başkomutanlık Meydan Muharebesi sırasında düşman hatlarını yaran Türk ordusunun taarruz anları.",
        source: "Atatürk ve Kurtuluş Savaşı Müzesi, Ankara"
      }
    ],
    paragraphs: [
      "30 Ağustos 1922, ülkemizin bağımsızlık mücadelesinin kritik dönüm noktalarından biridir. Büyük Taarruz’un başarıyla sonuçlandığı ve işgal güçlerinin Anadolu’dan tamamen çıkarılacağının kesinleştiği gündür. Bu tarihi günde kazanılan savaş aynı zamanda “Başkomutanlık Meydan Muharebesi” olarak da anılır. Çünkü savaşı bizzat Başkomutan Mustafa Kemal Atatürk yönetmiştir. Bu zafer, Kurtuluş Savaşı’nın askerî safhasını sona erdirmiş, Türkiye Cumhuriyeti Devleti’nin kuruluşuna giden yolu açmıştır.",
      "30 Ağustos Zafer Bayramı bizlere 1919 - 1922 yılları arasında devam eden Millî Mücadele Dönemi’nin sonunda yorgun ve yoksul düşmüş bir milletin, esareti kabul etmeyen ruhunu simgelemektedir. Bu Zafer, birlik olmanın mucizesini kanıtlamaktadır. Mustafa Kemal Atatürk’ün askerî dehasını ve bir milletin lideriyle nasıl bütünleştiğini tüm dünyaya gösteren bu tarihi zafer, bizlere emanet edilen vatanımıza karşı sorumluluğumuzun ne kadar büyük olduğunu bir kez daha hatırlatmaktadır."
    ],
    quote: "“Bu zafer, Kurtuluş Savaşı’nın askerî safhasını sona erdirmiş, Türkiye Cumhuriyeti Devleti’nin kuruluşuna giden yolu açmıştır.”",
    quoteAuthor: "T.C. İnkılap Tarihi ve Atatürkçülük Kaynağı",
    significance: [
      "Kurtuluş Savaşı'nın silahlı mücadele (askerî) safhasını kesin zaferle sona erdirmiştir.",
      "İşgalci güçlerin Anadolu'dan tamamen çıkarılacağını kesinleştirmiştir.",
      "Mudanya Ateşkesi ve Lozan Barış Antlaşması masasına askerî galip olarak oturulmasını sağlamıştır.",
      "Türkiye Cumhuriyeti Devleti'nin kuruluşuna giden yolu ardına kadar açmıştır."
    ],
    discussionQuestion: "Büyük Taarruz'a neden 'Başkomutanlık Meydan Muharebesi' adı verilmiştir ve Başkomutanın bizzat cephede bulunması Mehmetçik'in inancını nasıl etkilemiştir?",
    discussionHint: "Savaşı bizzat Başkomutan Mustafa Kemal Paşa ateş hattında en ön saflardan yönetmiştir. Bu durum Türk ordusunun vatan sevgisini, cesaretini ve zafere olan inancını doruğa çıkarmıştır."
  },
  {
    id: "9_eylul",
    title: "İZMİR'İN KURTULUŞU",
    dateDisplay: "9 EYLÜL 1922",
    exactDate: "1922-09-09",
    bookletOrder: 2,
    chronoOrder: 7,
    era: "Batı Anadolu'nun Kurtuluşu",
    heroImage: "./assets/images/9_eylul_izmir_giris.jpg",
    images: [
      {
        url: "./assets/images/9_eylul_izmir_giris.jpg",
        title: "Türk Ordusu'nun İzmir'e Girişi (9 Eylül 1922)",
        caption: "Yüzbaşı Şerafettin Bey komutasındaki 2. Süvari Fırkası'nın İzmir sokaklarına girişi.",
        source: "İzmir Millî Kütüphane Arşivi"
      },
      {
        url: "./assets/images/9_eylul_kurtulus_tablo.jpg",
        title: "İzmir Vilayet Konağı'nda Türk Bayrağı",
        caption: "9 Eylül 1922'de Hükümet Konağı balkonuna Türk bayrağının yeniden çekilmesi tablosu.",
        source: "Atatürk ve Kurtuluş Savaşı Müzesi"
      }
    ],
    paragraphs: [
      "I. Dünya Savaşı’nın ardından imzalanan Mondros Ateşkes Antlaşması ile Osmanlı Devleti savunmasız bırakıldı. İtilaf Devletleri İzmir’in Yunanistan tarafından işgal edilmesine karar verdi ve Yunan ordusu 15 Mayıs 1919’da İzmir’e çıktı. İzmir’in Yunanlar tarafından işgal edilmesi, Türk milletinin bağımsızlık isteğini ve mücadelesini güçlendiren önemli bir gelişme oldu.",
      "Mustafa Kemal Paşa’nın önderliğinde 19 Mayıs 1919’da başlayan Millî Mücadele’nin sonunda Türk ordusu, 26 Ağustos 1922’de Büyük Taarruz’u başlattı. 30 Ağustos’ta kazanılan Başkomutanlık Meydan Muharebesi’nin ardından Türk ordusu, işgal altındaki Batı Anadolu’yu kurtarmak için hızla ilerlemeye başladı. Bu ilerleyişin son durağı 9 Eylül 1922’de İzmir oldu. Türk ordusunun İzmir’e ulaşmasıyla şehir yaklaşık üç yıl süren işgalden kurtarıldı ve İzmir’de Türk bayrağı yeniden dalgalanmaya başladı.",
      "9 Eylül yalnızca İzmir’in kurtulduğu bir gün değil bağımsızlık yolunda verilen büyük mücadelenin zaferle sonuçlandığını gösteren tarihî bir dönüm noktasıdır. Bu zaferin ardından Mudanya Ateşkes Antlaşması’na giden süreç başlamış daha sonra Lozan Barış Antlaşması ile yeni Türk Devleti’nin bağımsızlığı uluslararası alanda kabul edilmiştir. Bu nedenle 9 Eylül 1922, işgalden bağımsızlığa uzanan Millî Mücadele yolunda unutulmayacak bir zafer günü olarak tarihimizdeki yerini almıştır."
    ],
    quote: "“Ordular! İlk hedefiniz Akdeniz'dir, ileri!”",
    quoteAuthor: "Gazi Mustafa Kemal Paşa (1 Eylül 1922)",
    significance: [
      "15 Mayıs 1919'da başlayan 3 yılı aşkın haksız işgal kesin olarak sonlandırılmıştır.",
      "Batı Anadolu işgalcilerden tamamen temizlenmiş, Türk bayrağı yeniden göndere çekilmiştir.",
      "Mudanya Ateşkesi ve Lozan Barış Antlaşması ile yeni Türk devletinin bağımsızlığı uluslararası alanda kabul edilmiştir.",
      "İşgalden bağımsızlığa uzanan Millî Mücadele zaferle taçlandırılmıştır."
    ],
    discussionQuestion: "15 Mayıs 1919'da İzmir'in işgali Türk halkında nasıl bir tepki uyandırmıştı ve 9 Eylül 1922 zaferi bu direnişi nasıl taçlandırdı?",
    discussionHint: "İzmir'in işgali vatan genelinde büyük mitinglerle protesto edilmiş ve Kuvâ-yı Millîye direnişini ateşlemiştir. 9 Eylül 1922'de bu haksız işgal bitirilmiş ve Türk milletinin bağımsızlık kararlılığı zaferle sonuçlanmıştır."
  },
  {
    id: "6_ekim",
    title: "İSTANBUL'UN DÜŞMAN İŞGALİNDEN KURTARILMASI",
    dateDisplay: "6 EKİM 1923",
    exactDate: "1923-10-06",
    bookletOrder: 3,
    chronoOrder: 8,
    era: "Payitahtın Kurtuluşu",
    heroImage: "./assets/images/6_ekim_istanbul_kurtulus.jpg",
    images: [
      {
        url: "./assets/images/6_ekim_istanbul_kurtulus.jpg",
        title: "Türk Ordusu İstanbul'da (6 Ekim 1923)",
        caption: "Şükrü Naili Paşa komutasındaki 3. Kolordu'nun Sarayburnu ve Galata Köprüsü üzerinden şehre girişi.",
        source: "Cumhuriyet Tarihi Arşivi"
      },
      {
        url: "./assets/images/6_ekim_milli_ordu.jpg",
        title: "Millî Ordu Kadıköy Sokaklarında",
        caption: "6 Ekim 1923'te İstanbul halkının Türk ordusunu çiçekler ve sevinç gözyaşlarıyla karşılaması.",
        source: "Resimli Gazete Arşivi (Ekim 1923)"
      }
    ],
    paragraphs: [
      "6 Ekim 1923, Mustafa Kemal’in 13 Kasım 1918’de İtilaf donanmasının Boğaz’a demirlediğini gördüğünde söylediği “Geldikleri gibi giderler!” sözünün tarihi bir hakikate dönüştüğü ve Türk milletinin bağımsızlık iradesinin tüm dünyaya kanıtlandığı gündür.",
      "İstanbul’da dört yıldan fazla süren işgal dönemi; Büyük Taarruz’un zaferle sonuçlanması ve Lozan Antlaşması’nın getirdiği diplomatik üstünlük sayesinde, işgalci güçlerin Türk bayrağını selamlayarak şehri terk etmesiyle son bulmuştur. Türk ordusunun şehre girişi yalnızca İstanbul’un kurtarılması değil; ulusal bağımsızlığın ve vatanın bölünmez bütünlüğünün tüm dünyaya haykırılmasıdır.",
      "6 Ekim 1923’te İstanbul’un İtilaf Devletleri’nin işgalinden kurtuluşu, yeni Türk Devleti’nin siyasi varlığını pekiştirmiş; bu zafer cumhuriyetin ilan edilmesine giden yolu da açmıştır."
    ],
    quote: "“GELDİKLERİ GİBİ GİDERLER!”",
    quoteAuthor: "Gazi Mustafa Kemal Paşa (13 Kasım 1918, Haydarpaşa)",
    significance: [
      "İstanbul'daki 4 yılı aşkın fiilî ve resmî işgal dönemi tek kurşun sıkılmadan sona erdirilmiştir.",
      "Mustafa Kemal'in 1918'de söylediği 'Geldikleri gibi giderler!' sözü tarihî bir hakikate dönüşmüştür.",
      "İşgalci güçler Türk bayrağını selamlayarak şehri tahliye etmek zorunda kalmıştır.",
      "Yeni Türk Devleti'nin siyasi varlığı pekişmiş ve cumhuriyetin ilan edilmesine giden yol açılmıştır."
    ],
    discussionQuestion: "Mustafa Kemal Paşa 13 Kasım 1918'de İtilaf donanmasını gördüğünde neden ümitsizliğe düşmeyip 'Geldikleri gibi giderler!' demiştir?",
    discussionHint: "Mustafa Kemal milletinin hürriyet tutkusuna ve bağımsız yaşama azmine sonsuz güven duyuyordu; askerî öngörüsü ve inancı bu tarihî cümlede vücut bulmuştur."
  },
  {
    id: "13_ekim",
    title: "ANKARA'NIN BAŞKENT OLUŞU",
    dateDisplay: "13 EKİM 1923",
    exactDate: "1923-10-13",
    bookletOrder: 4,
    chronoOrder: 9,
    era: "Yeni Devletin Kalbi",
    heroImage: "./assets/images/13_ekim_meclis_1920.jpg",
    images: [
      {
        url: "./assets/images/13_ekim_meclis_1920.jpg",
        title: "I. Türkiye Büyük Millet Meclisi Binası (Ankara Ulus)",
        caption: "Millî Mücadele kararlarının alındığı ve bağımsızlığın idare edildiği ilk Meclis binası.",
        source: "Kurtuluş Savaşı Müzesi"
      },
      {
        url: "./assets/images/13_ekim_ataturk_ankara.png",
        title: "Mustafa Kemal Paşa Ankara'da (30 Ekim 1920)",
        caption: "Ankara'da Millî Mücadele'yi teşkilatlandırırken Mustafa Kemal Paşa.",
        source: "Millî Kütüphane Fotoğraf Koleksiyonu"
      }
    ],
    paragraphs: [
      "Kurtuluş Savaşı’nın en zor günlerinde Anadolu’nun ortasında bir umut ışığı gibi parlayan Ankara; halkın da desteğiyle işgalden uzak ve güvenli bir direniş merkezi olmuştur. Mustafa Kemal Paşa ve silah arkadaşları bu topraklarda 23 Nisan 1920’de Türkiye Büyük Millet Meclisi’ni açarak tüm dünyaya “Egemenlik kayıtsız şartsız milletindir.” mesajını vermiştir.",
      "İstanbul’un kurtuluşundan sonra ise yeni devletin başkentinin neresi olacağı konusu gündeme gelince Millî Mücadele Dönemi’ndeki önemi düşünülerek Ankara’nın başkent olması uygun görülmüştür. Böylece 13 Ekim 1923’te İsmet İnönü tarafından Meclise sunulan kanun teklifinin kabul edilmesiyle Ankara Yeni Türk Devleti’nin başkenti olmuştur."
    ],
    quote: "“Türkiye Devleti'nin idare merkezi Ankara şehridir.”",
    quoteAuthor: "13 Ekim 1923 Kabul Edilen Kanun Metni",
    significance: [
      "Anadolu'nun kalbinde, işgale karşı güvenli ve stratejik bir başkent kurulmuştur.",
      "Eski rejimin (saltanatın) başkenti İstanbul yerine, millet iradesinin simgesi Ankara yeni merkez olmuştur.",
      "İsmet İnönü'nün Meclise sunduğu kanun teklifinin kabulüyle resmileşmiştir.",
      "Cumhuriyetin ilanından yalnızca 16 gün önce yeni devletin idare merkezi tescillenmiştir."
    ],
    discussionQuestion: "Ankara'nın jeopolitik konumu ve halkının desteği başkent seçilmesinde nasıl bir rol oynamıştır?",
    discussionHint: "Ankara Anadolu'nun tam ortasındaydı, demiryolu ve telgraf hatlarının kavşağındaydı, Batı Cephesi'ne yakındı ve halkı Millî Mücadele'ye sarsılmaz bir bağlılık göstermişti."
  },
  {
    id: "29_ekim",
    title: "CUMHURİYET BAYRAMI",
    dateDisplay: "29 EKİM 1923",
    exactDate: "1923-10-29",
    bookletOrder: 5,
    chronoOrder: 10,
    era: "Türkiye Cumhuriyeti'nin İlanı",
    heroImage: "./assets/images/29_ekim_ataturk_meclis.jpg",
    images: [
      {
        url: "./assets/images/29_ekim_cumhuriyet_gazete.jpg",
        title: "Resimli Gazete Tarihî Baskısı (3 Kasım 1923)",
        caption: "'Cumhuriyet İlan Edildi' başlığıyla çıkan ve ilk Cumhurbaşkanı Gazi Mustafa Kemal'i duyuran orijinal gazete kapağı.",
        source: "Resimli Gazete Koleksiyonu"
      },
      {
        url: "./assets/images/29_ekim_ataturk_meclis.jpg",
        title: "Atatürk'ün TBMM'den Çıkışı",
        caption: "Cumhuriyetin ilanı sonrasında Meclis binasından çıkan Cumhurbaşkanı Gazi Mustafa Kemal halkı selamlarken.",
        source: "TBMM Arşivi"
      }
    ],
    paragraphs: [
      "1919 – 1922 yılları arasında devam eden Millî Mücadele; büyük zorluklar imkansızlıklar ve kahramanlıklarla kazanılmıştı. Düşman kuvvetleri yurdumuzdan temizlenmiş, 1 Kasım 1922’de saltanat kaldırılmış ve Osmanlı Devleti’nin siyasi varlığı sona ermişti. Ancak bu durum yeni bir belirsizliği ortaya çıkardı. Ülkeyi kim, nasıl yönetecekti? Mustafa Kemal’in kafasındaki cevap en başından belliydi: Millet!",
      "28 Ekim 1923 akşamı Çankaya Köşkü’nde arkadaşlarıyla akşam yemeğinde bir araya gelen Mustafa Kemal heyecanla beklenen o tarihî cümleyi kurdu: “Efendiler, yarın Cumhuriyeti ilan edeceğiz.”",
      "29 Ekim 1923 günü Türkiye Büyük Millet Meclisi’nde yapılan görüşmelerin ardından cumhuriyet resmen ilan edildi. “Yaşasın cumhuriyet” sesleri arasında yeni devletin adı bütün dünyaya duyuruldu: Türkiye Cumhuriyeti...",
      "Cumhuriyet, egemenliğin kayıtsız şartsız millete ait olduğu, eşitlik ve özgürlük temeline dayanan yönetim şeklidir. Mustafa Kemal Atatürk bu büyük eseri Türk gençliğine emanet etmiştir. Her 29 Ekim’de evlerimizi, okullarımızı, caddelerimizi bayraklarla donatır, şiirlerle ve marşlarla bu doğuş hikayesini coşkuyla kutlarız. Cumhuriyet; özgürce kurduğumuz hayallerimizin ve aydınlık geleceğimizin en büyük güvencesidir."
    ],
    quote: "“EFENDİLER, YARIN CUMHURİYETİ İLAN EDECEĞİZ.”",
    quoteAuthor: "Mustafa Kemal Paşa (28 Ekim 1923, Çankaya Köşkü)",
    significance: [
      "Yeni Türk Devleti'nin adı ve yönetim şekli resmen 'Türkiye Cumhuriyeti' olarak ilan edilmiştir.",
      "Egemenliğin kayıtsız şartsız millete ait olduğu, eşitlik ve özgürlük temeline dayanan rejim kurulmuştur.",
      "Gazi Mustafa Kemal Paşa oy birliği ile ilk Cumhurbaşkanı seçilmiştir.",
      "Mustafa Kemal Atatürk bu büyük eseri Türk gençliğine emanet etmiştir."
    ],
    discussionQuestion: "Mustafa Kemal 'Ülkeyi kim, nasıl yönetecekti?' sorusuna neden en başından beri tereddütsüz 'Millet!' cevabını vermiştir?",
    discussionHint: "Çünkü Mustafa Kemal, bir milletin ancak kendi yöneticilerini kendi iradesiyle seçtiği, kanun önünde eşit olduğu demokratik bir cumhuriyetle ilelebet özgür ve medeni yaşayabileceğine inanıyordu."
  },
  {
    id: "27_aralik",
    title: "TEMSİL HEYETİ'NİN ANKARA'YA GELİŞİ",
    dateDisplay: "27 ARALIK 1919",
    exactDate: "1919-12-27",
    bookletOrder: 6,
    chronoOrder: 3,
    era: "Örgütlenme ve Millî Merkez",
    heroImage: "./assets/images/27_aralik_temsil_heyeti.jpg",
    images: [
      {
        url: "./assets/images/27_aralik_temsil_heyeti.jpg",
        title: "Mustafa Kemal ve Heyet-i Temsiliye Dikmen'de (27 Aralık 1919)",
        caption: "Mustafa Kemal Paşa'nın Ankara Dikmen sırtlarında Seymenler ve halk tarafından coşkuyla karşılanışı.",
        source: "Genelkurmay ATASE Daire Başkanlığı"
      },
      {
        url: "./assets/images/27_aralik_sivas_heyet.jpg",
        title: "Mustafa Kemal Paşa ve Temsil Heyeti Üyeleri",
        caption: "Sivas Kongresi günlerinde tüm yurdu temsil etmek üzere oluşturulan Millî Mücadele Heyeti.",
        source: "Atatürk Araştırma Merkezi"
      }
    ],
    paragraphs: [
      "Millî Mücadele Dönemi’nde Mustafa Kemal Paşa önderliğinde Erzurum Kongresi’nde kurulan ve Sivas Kongresi’nde tüm yurdu temsil edecek şekilde genişletilen Temsil Heyeti, Millî Mücadele’nin daha sistemli yönetilebilmesi için Ankara’yı merkez olarak belirledi. Ankara’nın seçilmesinde şehrin Anadolu’nun ortasında bulunması, önemli ulaşım ve haberleşme yolları üzerinde yer alması ile Batı Cephesi’ne yakın olması etkili oldu.",
      "27 Aralık 1919’da Temsil Heyeti üyeleri ile birlikte Ankara’ya gelen Mustafa Kemal Paşa’yı Ankara halkı, büyük bir coşkuyla karşıladı. Halkın bu karşılaması, Millî Mücadele’ye verilen desteği gösteriyordu. Temsil Heyeti’nin gelişiyle Ankara, Millî Mücadele’nin yönetim merkezi oldu. 23 Nisan 1920’de Türkiye Büyük Millet Meclisi’nin Ankara’da açılmasıyla şehrin önemi daha da arttı."
    ],
    quote: "“And olsun ki bu vatanı kurtaracağız, milletin emrindeyiz!”",
    quoteAuthor: "Ankara Seymenleri (27 Aralık 1919, Dikmen Karşılaması)",
    significance: [
      "Erzurum ve Sivas Kongrelerinde kurulan Temsil Heyeti kalıcı karargâhını Ankara'da kurmuştur.",
      "Ankara, Millî Mücadele'nin fiili yönetim ve lojistik merkezi haline gelmiştir.",
      "Ankara halkı ve Seymenler Mustafa Kemal'e vatanı kurtarma andıyla tam destek vermiştir.",
      "Dört ay sonra açılacak olan Türkiye Büyük Millet Meclisi'nin temelleri burada atılmıştır."
    ],
    discussionQuestion: "Ankara halkının ve Seymenlerin Mustafa Kemal Paşa'yı Dikmen sırtlarında karşılaması Millî Mücadele için neden kritik bir moral kaynağı oldu?",
    discussionHint: "İstanbul yönetiminin teslimiyetçi tutumuna karşılık, Anadolu insanının canı ve malıyla bağımsızlık davasına sahip çıktığını ve liderinin arkasında kenetlendiğini göstermiştir."
  },
  {
    id: "12_mart",
    title: "İSTİKLÂL MARŞI'NIN KABULÜ",
    dateDisplay: "12 MART 1921",
    exactDate: "1921-03-12",
    bookletOrder: 7,
    chronoOrder: 5,
    era: "Millî Ruh ve Bağımsızlık Andı",
    heroImage: "./assets/images/12_mart_akif.png",
    images: [
      {
        url: "./assets/images/12_mart_akif.png",
        title: "Millî Şairimiz Mehmet Âkif Ersoy",
        caption: "İstiklâl Marşı'nı kahraman ordumuza ithaf eden büyük vatan şairi Mehmet Âkif Ersoy.",
        source: "Türk Tarih Kurumu Koleksiyonu"
      },
      {
        url: "./assets/images/12_mart_istiklal_marsi_baski.png",
        title: "İstiklâl Marşı'nın İlk Matbu Baskısı (Cerîde-i Resmiye)",
        caption: "12 Mart 1921 Meclis kabulünün ardından basılan orijinal taşbaskı İstiklâl Marşı metni.",
        source: "TBMM Zabıt Ceridesi Arşivi"
      }
    ],
    paragraphs: [
      "Millî Mücadele’nin en zor günlerinde ordunun ve halkın moral gücünü yükseltmek amacıyla bir millî marş yarışması düzenlenmiş ancak katılan 724 şiir arasından aranan coşkulu ruh bulunamamıştı. Konulan 500 liralık para ödülü nedeniyle yarışmaya katılmayı reddeden Mehmet Akif Ersoy, ödülün hayır kurumuna bağışlanabileceği güvencesi verilerek ikna edildi. Türk ordusuna ithaf ettiği o muazzam şiiri kaleme alan Mehmet Akif, vatan sevgisini ve bağımsızlık inancını mısralarına döktü. Dönemin Eğitim Bakanı Hamdullah Suphi Bey’in meclis kürsüsünde okuduğu ve milletvekillerini büyük bir coşkuya boğan bu şiir, 12 Mart 1921’de Türkiye Büyük Millet Meclisi tarafından resmî millî marş olarak kabul edildi.",
      "İstiklâl Marşımız; vatan sevgimizi, bağımsızlık tutkumuzu, birlik ve beraberliğimizi anlatan en önemli millî değerlerimiz arasında yer almaktadır. Kurtuluş Savaşı’nın zorlu günlerinde milletimize umut ve cesaret veren bu eşsiz eser, bugün de bize bağımsızlığımızın ne kadar değerli olduğunu hatırlatmaktadır. Mehmet Akif Ersoy’un da söylediği gibi, İstiklâl Marşı milletimizin ortak sesidir ve sonsuza kadar gururla yaşayacaktır."
    ],
    quote: "“KORKMA, SÖNMEZ BU ŞAFAKLARDA YÜZEN AL SANCAK!”",
    quoteAuthor: "Mehmet Âkif Ersoy (Kahraman Ordumuza)",
    significance: [
      "I. İnönü Muharebesi'nin kazanıldığı günlerde ordunun ve milletin moral gücünü zirveye taşımıştır.",
      "Mehmet Âkif, 500 liralık para ödülünü Dârülmesâi adlı kadın ve çocuk hayır kurumuna bağışlamıştır.",
      "Hamdullah Suphi Bey tarafından Meclis kürsüsünden okunmuş ve ayakta alkışlarla kabul edilmiştir.",
      "Bağımsızlığımızın, bayrağımızın ve vatan sevgimizin ebedî milli andı olmuştur."
    ],
    discussionQuestion: "Mehmet Âkif Ersoy yarışmaya konulan para ödülü varken neden şiir yazmayı reddetmişti? Bu tavır onun vatan sevgisi hakkında bize ne öğretir?",
    discussionHint: "Âkif, vatan sevgisinin, ordunun kahramanlığının ve şehitlerin hatırasının para ile satılamayacak kadar kutsal olduğunu belirtmiştir; marşı milletine karşılıksız bir vefa borcu olarak sunmuştur."
  },
  {
    id: "18_mart",
    title: "ÇANAKKALE ZAFERİ",
    dateDisplay: "18 MART 1915",
    exactDate: "1915-03-18",
    bookletOrder: 8,
    chronoOrder: 1,
    era: "I. Dünya Savaşı & Çanakkale Destanı",
    heroImage: "./assets/images/18_mart_seyit_onbasi.jpg",
    images: [
      {
        url: "./assets/images/18_mart_seyit_onbasi.jpg",
        title: "Kahraman Seyit Onbaşı (Koca Seyit)",
        caption: "Ocean zırhlısını vuran 215 kg'lık top mermisini tek başına sırtlayıp namluya süren kahraman Mehmetçik.",
        source: "Askerî Müze Arşivi"
      },
      {
        url: "./assets/images/18_mart_nusret.jpg",
        title: "Nusret Mayın Gemisi",
        caption: "Erenköy Koyu'na sessizce döşediği mayınlarla Boğaz geçişini kapatan efsanevi mayın gemimiz.",
        source: "Deniz Müzesi Arşivi"
      },
      {
        url: "./assets/images/18_mart_ataturk_siper.jpg",
        title: "Mustafa Kemal Çanakkale Siperlerinde (1915)",
        caption: "Anafartalar Grup Komutanı Kurmay Albay Mustafa Kemal 27. ve 57. Alay siperlerinde askerleriyle.",
        source: "Genelkurmay ATASE Daire Başkanlığı"
      }
    ],
    paragraphs: [
      "Yıl 1915... Birinci Dünya Savaşı’nın en zorlu mücadelelerinin yaşandığı zamanlar. Dönemin en güçlü devletleri donanmaları ile Çanakkale Boğazı’na dayandılar. Amaçları Boğaz’ı geçip İstanbul’u işgal etmek ve I. Dünya Savaşı’nı kendi lehlerine kısa sürede bitirmekti.",
      "18 Mart 1915 sabahı düşman donanması Boğaz’ı geçmek için büyük bir saldırı başlattı. İtilaf Devletleri’nin “batırılamaz” denilen büyük savaş gemileri vardı. Ancak Nusret Mayın Gemisi’nin Boğaz’a sessizce döşediği mayınlar, Seyit Onbaşı’nın yaklaşık 215 kilogramlık top mermisini tek başına sırtlayıp namluya sürerek düşman zırhlısını tam isabetle vurması ve binlerce Mehmetçik’in azmi sayesinde sarsılmaya başladı. Saatler süren şiddetli çatışmaların ardından, akşam saatlerinde düşman donanması geri çekilmek zorunda kaldı. Çanakkale’nin denizden geçilemeyeceğinin anlaşılmasının ardından başlayan kara savaşlarında ise askeri dehası ile bir milletin kaderine yön veren Mustafa Kemal, “Anafartalar Kahramanı” olarak ulusal ve uluslararası alanda tanındı. Hem deniz hem de kara savaşlarında kazanılan zaferlerle I. Dünya Savaşı’nın süresi uzadı ve tüm dünya Türk askerinin cesaretini hayranlıkla izledi.",
      "Türk milletinde Millî Mücadele ruhunu uyandıran, Mustafa Kemal’in “Ben size taarruzu emretmiyorum, ölmeyi emrediyorum.” sözleriyle bütünleşen Çanakkale Savaşları yalnızca bir askeri zafer değil bir milletin bağımsızlık destanıdır."
    ],
    quote: "“BEN SİZE TAARRUZU EMRETMİYORUM, ÖLMEYİ EMREDİYORUM!”",
    quoteAuthor: "Yarbay Mustafa Kemal (25 Nisan 1915, Conkbayırı)",
    significance: [
      "18 Mart 1915 Deniz Zaferi ile 'Çanakkale Geçilmez!' sözü tarihe altın harflerle kazınmıştır.",
      "I. Dünya Savaşı'nın süresini en az iki yıl uzatmış ve Rusya'daki çarlık rejiminin yıkılmasına zemin hazırlamıştır.",
      "Mustafa Kemal'in askerî dehası (Anafartalar, Conkbayırı, Arıburnu) tüm dünyada tanınmıştır.",
      "Türk milletinde Millî Mücadele'yi ateşleyecek bağımsızlık ruhunu ve liderini ortaya çıkarmıştır."
    ],
    discussionQuestion: "Çanakkale Zaferi'nin Millî Mücadele'nin başlangıcına olan etkisi nedir ve Mustafa Kemal'in buradaki rolü sonraki yılları nasıl şekillendirmiştir?",
    discussionHint: "Çanakkale Zaferi, Türk milletine en zor şartlarda bile emperyalist güçlerin mağlup edilebileceği inancını vermiş; Mustafa Kemal'i millî bir kahraman olarak milletin gönlünde liderliğe taşımıştır."
  },
  {
    id: "23_nisan",
    title: "ULUSAL EGEMENLİK VE ÇOCUK BAYRAMI",
    dateDisplay: "23 NİSAN 1920",
    exactDate: "1920-04-23",
    bookletOrder: 9,
    chronoOrder: 4,
    era: "Millî İrade & TBMM",
    heroImage: "./assets/images/23_nisan_ataturk_cocuklar.jpg",
    images: [
      {
        url: "./assets/images/23_nisan_ataturk_cocuklar.jpg",
        title: "Atatürk ve Çocuklar (23 Nisan Bayramı)",
        caption: "Mustafa Kemal Atatürk'ün çocuklarla 23 Nisan törenlerindeki sıcacık ve unutulmaz karesi.",
        source: "Cemal Işıksel Fotoğraf Arşivi"
      },
      {
        url: "./assets/images/23_nisan_gazete.jpg",
        title: "23 Nisan Çocuk Bayramı Tarihî Gazete Manşeti",
        caption: "Çocuk Bayramı coşkusunu ve Atatürk'ün çocuklara emanetini yansıtan tarihi gazete kapağı.",
        source: "Cumhuriyet Gazetesi Arşivi (1938)"
      }
    ],
    paragraphs: [
      "Takvimler 23 Nisan 1920’yi gösterdiğinde, Ankara’nın soğuk ama umut dolu baharında tarihimizin en önemli adımlarından biri atılıyordu. O gün sadece Ankara’da bir meclisin kapıları açılmıyordu; aslında milletimizin kendi kaderini bizzat eline aldığı, “yönetim gücünün” halkın eline geçtiği yeni bir dönem başlıyordu.",
      "Türkiye Büyük Millet Meclisi’nin açılışı, egemenliğin tek bir kişiden alınıp milletin iradesine verildiği gündü. Meclis’in açılışının ilk günkü heyecanında, milletin kendi geleceğini kendi elleriyle çizeceğine dair verilen o büyük söz saklıdır. 23 Nisan günü, “Egemenlik kayıtsız şartsız milletindir.” diyerek atılan imza, aslında bir milletin yeniden doğuşunun ilanıydı. Mustafa Kemal Atatürk, bu büyük sorumluluğu sadece bir meclis çatısı altında bırakmadı. O, bu hürriyet meşalesini yarınlara taşıyacak olan çocukların ellerine teslim etti.",
      "Atatürk, “Bugünün küçükleri, yarının büyükleridir.” diyerek çocuklara sadece bir bayram armağan etmedi; onlara özgür bir ülkede, kendi kararlarını verebilen bireyler olarak yetişme sorumluluğunu verdi. Bu, dünyada eşine az rastlanan, çocuklara duyulan sarsılmaz bir güvenin ifadesiydi.",
      "23 Nisan aynı zamanda bir çocuğun millî değerlerinin evrensel barışla birleştiği gündür. Bizler bu bayramın ışığında geçmişteki bağımsızlık mücadelemizi hatırlar, meclisimizin açıldığı o günkü heyecanı yüreğimizde taşırız. Çünkü geleceği, bağımsızlığımızın ışığında, aklın ve bilimin rehberliğinde bugünün çocukları inşa edecektir."
    ],
    quote: "“EGEMENLİK KAYITSIZ ŞARTSIZ MİLLETİNDİR.”",
    quoteAuthor: "TBMM Açılış İlkesi (23 Nisan 1920)",
    significance: [
      "Türkiye Büyük Millet Meclisi açılarak halkın temsilcileri yönetim gücünü bizzat eline almıştır.",
      "Egemenlik tek bir kişiden (padişahlıktan) alınıp millet iradesine teslim edilmiştir.",
      "Dünyada çocuklara armağan edilmiş ilk ve tek bayram olarak tarihe geçmiştir.",
      "Geleceği aklın ve bilimin ışığında inşa edecek olan yeni nesillere duyulan güveni simgeler."
    ],
    discussionQuestion: "Atatürk, Meclis'in açıldığı bu tarihî günü neden büyüklere değil de doğrudan çocuklara armağan etmiştir?",
    discussionHint: "Çünkü Atatürk, 'Bugünün küçükleri, yarının büyükleridir' diyerek kurulan bağımsız cumhuriyeti koruyacak, yüceltecek ve evrensel barışa taşıyacak yegâne gücün çocuklar ve gençler olduğunu biliyordu."
  },
  {
    id: "19_mayis",
    title: "ATATÜRK'Ü ANMA, GENÇLİK VE SPOR BAYRAMI",
    dateDisplay: "19 MAYIS 1919",
    exactDate: "1919-05-19",
    bookletOrder: 10,
    chronoOrder: 2,
    era: "Millî Mücadele'nin Başlangıcı",
    heroImage: "./assets/images/19_mayis_bandirma.png",
    images: [
      {
        url: "./assets/images/19_mayis_bandirma.png",
        title: "Millî Mücadele Gemisi: Bandırma Vapuru",
        caption: "Mustafa Kemal Paşa ve kurmaylarını Samsun'a ulaştıran tarihi Bandırma Vapuru.",
        source: "Deniz Müzesi Arşivi"
      },
      {
        url: "./assets/images/19_mayis_samsun.jpg",
        title: "Mustafa Kemal Paşa Samsun'a Ayak Basarken",
        caption: "19 Mayıs 1919 sabahı Tütün İskelesi'nden Samsun'a çıkış ve kurtuluş meşalesinin yakılışı.",
        source: "Samsun Gazi Müzesi"
      },
      {
        url: "./assets/images/19_mayis_genclik_spor.jpg",
        title: "19 Mayıs Gençlik ve Spor Bayramı Stadyum Kutlamaları (1939)",
        caption: "Türk gençliğinin meydanlarda ve stadyumlarda sergilediği bayram coşkusu ve dinamizmi.",
        source: "Cumhuriyet Tarihi Fotoğraf Arşivi"
      }
    ],
    paragraphs: [
      "19 Mayıs 1919, Türk milletinin bağımsızlık ve hürriyet umutlarının somut bir adıma dönüştüğü, modern Türkiye Cumhuriyeti’nin temellerinin atıldığı en önemli dönüm noktalarından biridir. Millî Mücadele’nin başlangıcı olan bu tarih, Amasya Genelgesi, Erzurum ve Sivas Kongreleri ile devam edecek olan örgütlenme sürecinin de ilk durağıdır.",
      "19 Mayıs 1919, Osmanlı yönetiminin işgaller karşısındaki pasif ve teslimiyetçi tutumuna karşı, “Ya İstiklâl Ya Ölüm” düşüncesinin başlangıcıdır. Bu adımla dağınık hâldeki bölgesel direniş cemiyetlerinin birleştirilmesi ve halkın ortak bir amaç etrafında kenetlenmesi hız kazanmıştır.",
      "Atatürk, kendisine doğum günü sorulduğunda “Neden 19 Mayıs olmasın?” diyerek bu tarihin şahsi ve millî hayatındaki yerini vurgulamıştır. Atatürk, Kurtuluş Savaşı’nın meşalesini yaktığı bu günü Türk gençliğine armağan etmiştir."
    ],
    quote: "“YA İSTİKLÂL YA ÖLÜM!”",
    quoteAuthor: "Gazi Mustafa Kemal Paşa (Samsun - Havza Yolu)",
    significance: [
      "Kurtuluş Savaşı'nın fiilen ve resmen başladığı en kritik dönüm noktasıdır.",
      "Amasya Genelgesi, Erzurum ve Sivas Kongreleri ile devam edecek teşkilatlanmanın ilk adımıdır.",
      "Dağınık bölgesel direniş cemiyetlerinin birleştirilerek tek amaç etrafında kenetlenmesini sağlamıştır.",
      "Atatürk'ün bağımsızlık meşalesini yaktığı bu gün Türk gençliğine ve spora armağan edilmiştir."
    ],
    discussionQuestion: "Atatürk, kendisine doğum günü sorulduğunda neden 'Neden 19 Mayıs olmasın?' demiştir?",
    discussionHint: "Çünkü 19 Mayıs sadece bir şahsın değil, esarete boyun eğmeyen Türk milletinin yeniden doğuşunu, uyanışını ve bağımsızlık meşalesini simgelemektedir."
  }
];


// State Variables
let currentSelectedDayId = HISTORICAL_DAYS[0].id;
let currentSortMode = "booklet"; // "booklet" or "chrono"
let currentViewMode = "table"; // "table" or "timeline"
let isSpeaking = false;
let synth = window.speechSynthesis;
let currentUtterance = null;

// Render Cards in Table View
function renderCards() {
  const container = document.getElementById("cards-grid");
  if (!container) return;
  container.innerHTML = "";

  let days = [...HISTORICAL_DAYS];
  if (currentSortMode === "chrono") {
    days.sort((a, b) => a.chronoOrder - b.chronoOrder);
  } else {
    days.sort((a, b) => a.bookletOrder - b.bookletOrder);
  }

  const searchInput = document.getElementById("search-input");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  if (query) {
    days = days.filter(d => 
      d.title.toLowerCase().includes(query) || 
      d.dateDisplay.toLowerCase().includes(query) ||
      d.era.toLowerCase().includes(query)
    );
  }

  const counter = document.getElementById("items-counter");
  if (counter) counter.textContent = `${days.length} Gün Listelendi`;

  days.forEach(day => {
    const isActive = day.id === currentSelectedDayId;
    const card = document.createElement("div");
    card.className = `edu-card p-3.5 flex flex-col cursor-pointer transition relative group ${
      isActive ? 'active-day' : ''
    }`;
    card.onclick = () => selectDay(day.id);

    card.innerHTML = `
      <div class="w-full h-28 rounded-lg overflow-hidden relative mb-2.5 bg-slate-100 border border-slate-200">
        <img src="${day.heroImage}" alt="${day.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
        <span class="absolute top-2 left-2 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-700 text-white shadow">
          ${day.dateDisplay}
        </span>
      </div>

      <h3 class="font-serif-title font-extrabold text-xs leading-snug text-slate-900 group-hover:text-red-700 transition line-clamp-2 mb-1">
        ${day.title}
      </h3>
      <p class="text-[11px] text-slate-600 line-clamp-1 mb-2 font-medium">
        ${day.era}
      </p>

      <div class="mt-auto pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
        <span class="font-extrabold text-red-700">${currentSortMode === 'chrono' ? `${day.chronoOrder}. Kronolojik Sıra` : `${day.bookletOrder}. Kitapçık Sırası`}</span>
        <span class="text-xs group-hover:translate-x-0.5 transition text-red-700 font-bold">👉</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Timeline View
function renderTimeline() {
  const track = document.getElementById("timeline-track");
  if (!track) return;
  track.innerHTML = `
    <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-red-700 via-amber-600 to-red-700 rounded-full z-0 opacity-40"></div>
  `;

  const sortedChrono = [...HISTORICAL_DAYS].sort((a, b) => a.chronoOrder - b.chronoOrder);

  sortedChrono.forEach((day, index) => {
    const isActive = day.id === currentSelectedDayId;
    const node = document.createElement("div");
    node.className = `relative z-10 flex flex-col items-center cursor-pointer group flex-shrink-0 w-36 ${isActive ? 'scale-105' : ''}`;
    node.onclick = () => selectDay(day.id);

    node.innerHTML = `
      <span class="text-[11px] font-extrabold ${isActive ? 'text-red-800 bg-red-50 border-red-300 ring-2 ring-red-500/20' : 'text-slate-700 bg-white border-slate-300'} mb-2 whitespace-nowrap px-2.5 py-0.5 rounded border shadow-sm">
        ${day.dateDisplay}
      </span>

      <div class="w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-red-700 text-white font-extrabold ring-4 ring-red-700/20' : 'bg-white border-2 border-slate-300 text-slate-700'} transition shadow-md text-xs">
        ${index + 1}
      </div>

      <div class="mt-2.5 w-full bg-white p-2.5 rounded-xl border ${isActive ? 'border-red-600 ring-2 ring-red-600/20 shadow-md' : 'border-slate-200'} text-center shadow-sm group-hover:border-red-400 transition">
        <img src="${day.heroImage}" class="w-full h-14 object-cover rounded-lg mb-1.5">
        <p class="text-[11px] font-bold text-slate-900 line-clamp-1">${day.title}</p>
      </div>
    `;
    track.appendChild(node);
  });
}

// Select and Display Day Details
function selectDay(dayId) {
  currentSelectedDayId = dayId;
  const day = HISTORICAL_DAYS.find(d => d.id === dayId);
  if (!day) return;

  stopTTS();

  document.getElementById("detail-badge-order").textContent = currentSortMode === 'chrono' ? `${day.chronoOrder}. TARİHSEL DÖNEM` : `${day.bookletOrder}. KİTAPÇIK BÖLÜMÜ`;
  document.getElementById("detail-date").textContent = day.dateDisplay;
  document.getElementById("detail-tag").textContent = day.era;
  document.getElementById("detail-title").textContent = day.title;

  setDetailImage(day.images[0]);

  const thumbsContainer = document.getElementById("detail-thumbs-container");
  thumbsContainer.innerHTML = "";
  day.images.forEach((img, idx) => {
    const thumbBtn = document.createElement("button");
    thumbBtn.className = `flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
      idx === 0 
        ? 'border-red-700 scale-105 shadow-md ring-2 ring-red-700/20' 
        : 'border-slate-300 opacity-70 hover:opacity-100'
    }`;
    thumbBtn.innerHTML = `<img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover">`;
    thumbBtn.onclick = () => {
      setDetailImage(img);
      Array.from(thumbsContainer.children).forEach(b => {
        b.className = "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 border-slate-300 opacity-70 hover:opacity-100 transition";
      });
      thumbBtn.className = "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 border-red-700 scale-105 shadow-md ring-2 ring-red-700/20 transition";
    };
    thumbsContainer.appendChild(thumbBtn);
  });

  const textContainer = document.getElementById("detail-text-body");
  textContainer.innerHTML = day.paragraphs.map(p => `<p class="text-base leading-relaxed text-slate-800 font-normal mb-3">${p}</p>`).join("");

  if (day.quote) {
    document.getElementById("detail-quote-box").classList.remove("hidden");
    document.getElementById("detail-quote-text").textContent = day.quote;
    document.getElementById("detail-quote-author").textContent = `— ${day.quoteAuthor}`;
  } else {
    document.getElementById("detail-quote-box").classList.add("hidden");
  }

  const takeawayContainer = document.getElementById("detail-takeaways");
  takeawayContainer.innerHTML = day.significance.map(point => `
    <li class="flex items-start gap-2.5">
      <span class="text-red-700 font-bold mt-0.5 text-base">✦</span>
      <span class="font-bold text-slate-900">${point}</span>
    </li>
  `).join("");

  document.getElementById("detail-discussion-question").textContent = day.discussionQuestion;
  document.getElementById("detail-discussion-hint").innerHTML = `<span class="font-extrabold text-red-800">Öğretmen İpucu:</span> ${day.discussionHint}`;
  document.getElementById("detail-discussion-hint").classList.add("hidden");
  document.getElementById("toggle-hint-btn").textContent = "Cevap İpucunu Göster";

  renderCards();
  renderTimeline();

  if (window.triggerThreeJsPulse) {
    window.triggerThreeJsPulse(day);
  }

  if (window.innerWidth < 768) {
    document.getElementById("detail-stage").scrollIntoView({ behavior: 'smooth' });
  }
}

function setDetailImage(imgObj) {
  const mainImg = document.getElementById("detail-main-img");
  mainImg.src = imgObj.url;
  mainImg.alt = imgObj.title;
  document.getElementById("detail-img-caption").textContent = imgObj.caption;
  document.getElementById("detail-img-source").textContent = `Kaynak: ${imgObj.source}`;
  document.getElementById("zoom-img-title-hint").textContent = imgObj.title;

  document.getElementById("img-zoom-trigger").onclick = () => {
    openLightbox(imgObj.url, imgObj.title, `${imgObj.caption} • ${imgObj.source}`);
  };
  mainImg.onclick = () => {
    openLightbox(imgObj.url, imgObj.title, `${imgObj.caption} • ${imgObj.source}`);
  };
}

// Lightbox
function openLightbox(url, title, sub) {
  document.getElementById("lightbox-img").src = url;
  document.getElementById("lightbox-caption").textContent = title;
  document.getElementById("lightbox-sub").textContent = sub;
  document.getElementById("lightbox-modal").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox-modal").classList.add("hidden");
}

document.getElementById("lightbox-close-btn").onclick = closeLightbox;
document.getElementById("lightbox-modal").onclick = (e) => {
  if (e.target.id === "lightbox-modal") closeLightbox();
};

document.getElementById("toggle-hint-btn").onclick = () => {
  const hintBox = document.getElementById("detail-discussion-hint");
  const btn = document.getElementById("toggle-hint-btn");
  if (hintBox.classList.contains("hidden")) {
    hintBox.classList.remove("hidden");
    btn.textContent = "İpucu Gizle";
  } else {
    hintBox.classList.add("hidden");
    btn.textContent = "Cevap İpucunu Göster";
  }
};

function navigateDay(direction) {
  let days = [...HISTORICAL_DAYS];
  if (currentSortMode === "chrono") {
    days.sort((a, b) => a.chronoOrder - b.chronoOrder);
  } else {
    days.sort((a, b) => a.bookletOrder - b.bookletOrder);
  }
  const currentIndex = days.findIndex(d => d.id === currentSelectedDayId);
  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = days.length - 1;
  if (nextIndex >= days.length) nextIndex = 0;
  selectDay(days[nextIndex].id);
}

document.getElementById("prev-day-btn").onclick = () => navigateDay(-1);
document.getElementById("next-day-btn").onclick = () => navigateDay(1);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") navigateDay(-1);
  if (e.key === "ArrowRight") navigateDay(1);
  if (e.key === "Escape") closeLightbox();
  if (e.key.toLowerCase() === "f") toggleFullscreen();
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}
document.getElementById("fullscreen-btn").onclick = toggleFullscreen;

document.getElementById("view-table-btn").onclick = () => {
  currentViewMode = "table";
  document.getElementById("table-view").classList.remove("hidden");
  document.getElementById("timeline-view").classList.add("hidden");
  document.getElementById("view-table-btn").className = "px-3 py-1.5 rounded-md bg-white text-red-800 font-bold shadow-sm transition flex items-center gap-1.5 border border-slate-200";
  document.getElementById("view-timeline-btn").className = "px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5";
};

document.getElementById("view-timeline-btn").onclick = () => {
  currentViewMode = "timeline";
  document.getElementById("table-view").classList.add("hidden");
  document.getElementById("timeline-view").classList.remove("hidden");
  document.getElementById("view-timeline-btn").className = "px-3 py-1.5 rounded-md bg-white text-red-800 font-bold shadow-sm transition flex items-center gap-1.5 border border-slate-200";
  document.getElementById("view-table-btn").className = "px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5";
};

document.getElementById("order-booklet-btn").onclick = () => {
  currentSortMode = "booklet";
  document.getElementById("order-booklet-btn").className = "px-2.5 py-1.5 rounded-md bg-white text-slate-900 font-bold shadow-sm transition border border-slate-200";
  document.getElementById("order-chrono-btn").className = "px-2.5 py-1.5 rounded-md text-slate-600 hover:text-slate-900 transition";
  renderCards();
  renderTimeline();
};

document.getElementById("order-chrono-btn").onclick = () => {
  currentSortMode = "chrono";
  document.getElementById("order-chrono-btn").className = "px-2.5 py-1.5 rounded-md bg-white text-slate-900 font-bold shadow-sm transition border border-slate-200";
  document.getElementById("order-booklet-btn").className = "px-2.5 py-1.5 rounded-md text-slate-600 hover:text-slate-900 transition";
  renderCards();
  renderTimeline();
};

const searchInputEl = document.getElementById("search-input");
if (searchInputEl) {
  searchInputEl.addEventListener("input", () => {
    renderCards();
  });
}

document.getElementById("font-increase-btn").onclick = () => {
  document.getElementById("detail-stage").classList.add("text-scale-large");
};
document.getElementById("font-decrease-btn").onclick = () => {
  document.getElementById("detail-stage").classList.remove("text-scale-large");
};

function stopTTS() {
  if (synth && synth.speaking) {
    synth.cancel();
  }
  isSpeaking = false;
  const icon = document.getElementById("tts-icon");
  const label = document.getElementById("tts-label");
  if (icon) icon.textContent = "🔊";
  if (label) label.textContent = "Sesli Oku";
}

document.getElementById("tts-btn").onclick = () => {
  if (!synth) {
    alert("Tarayıcınız sesli okuma özelliğini desteklemiyor.");
    return;
  }

  if (isSpeaking) {
    stopTTS();
    return;
  }

  const day = HISTORICAL_DAYS.find(d => d.id === currentSelectedDayId);
  if (!day) return;

  const fullTextToRead = `${day.title}. ${day.dateDisplay}. ${day.paragraphs.join(" ")}`;
  currentUtterance = new SpeechSynthesisUtterance(fullTextToRead);
  currentUtterance.lang = "tr-TR";
  currentUtterance.rate = 0.95;

  currentUtterance.onstart = () => {
    isSpeaking = true;
    document.getElementById("tts-icon").textContent = "⏹️";
    document.getElementById("tts-label").textContent = "Durdur";
  };

  currentUtterance.onend = () => {
    stopTTS();
  };

  currentUtterance.onerror = () => {
    stopTTS();
  };

  synth.speak(currentUtterance);
};

// Initial Render
renderCards();
renderTimeline();
selectDay("30_agustos");

/* Three.js Background Implementation (Harmonious Ivory & Crimson Palette) */
(function initThreeJsBackground() {
  if (typeof THREE === 'undefined') {
    return;
  }

  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 45;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particleCount = 700;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const palette = [
    new THREE.Color(0xb91c1c), // Turkish crimson
    new THREE.Color(0xb45309), // Antique gold
    new THREE.Color(0x475569), // Warm slate
    new THREE.Color(0xd97706)  // Amber
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 110;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 70;

    const col = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.75,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    blending: THREE.NormalBlending
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  const ringGeom = new THREE.TorusGeometry(22, 0.06, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xb91c1c, transparent: true, opacity: 0.12, wireframe: true });
  const ringMesh = new THREE.Mesh(ringGeom, ringMat);
  ringMesh.rotation.x = Math.PI / 4;
  scene.add(ringMesh);

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.triggerThreeJsPulse = function(day) {
    ringMesh.rotation.z += 0.6;
    material.size = 1.1;
    setTimeout(() => { material.size = 0.75; }, 350);
  };

  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    particleSystem.rotation.y += 0.0006;
    particleSystem.rotation.x += 0.0003;

    ringMesh.rotation.z += 0.0015;
    ringMesh.rotation.y += 0.0008;

    camera.position.x = targetX * 8;
    camera.position.y = -targetY * 8;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();
})();
