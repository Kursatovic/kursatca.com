const evidence = {
  harbor: {
    title: "Liman",
    lead: "Selanik, Osmanlı Devleti'nin dış dünyaya açılan önemli limanlarından biriydi.",
    detail: "Ticaret yalnızca mal taşımaz. İnsanlar, haberler ve yeni düşünceler de liman üzerinden dolaşıma girer. Mustafa'nın çocukluğu, dış dünyayla temasın gündelik hayatın parçası olduğu bir şehirde geçti.",
    question: "Bir liman kentinde büyümek, dünyayı algılama biçimini nasıl etkileyebilir?", tags:["Ticaret","Gemi","Dış dünya"]
  },
  rail: {
    title: "Demir yolu",
    lead: "Demir yolu Selanik'i Balkanların iç kesimlerine ve Avrupa şehirlerine bağlıyordu.",
    detail: "Ulaşım ağları şehri kapalı bir taşra merkezi olmaktan çıkarıyordu. Yolculuk, ticaret, haber ve siyasal gelişmeler Selanik'e daha hızlı ulaşıyordu.",
    question: "Dünyanın farklı yerlerinden haberler alan bir çocuk, yaşadığı şehre farklı gözle bakmaya başlar mı?", tags:["Avrupa bağlantısı","Ulaşım","Haber"]
  },
  press: {
    title: "Basın ve fikir hayatı",
    lead: "Gazete ve dergiler, devletin geleceği üzerine farklı düşüncelerin tartışıldığı alanlardı.",
    detail: "Meşrutiyet, özgürlük, Osmanlıcılık ve milliyetçilik gibi fikirler yalnızca başkentte konuşulmuyordu. Selanik canlı bir basın ve düşünce çevresine sahipti.",
    question: "Farklı fikirlerle karşılaşmak, onları kabul etmek anlamına mı gelir?", tags:["Gazete","Meşrutiyet","Fikir akımları"]
  },
  neighborhood: {
    title: "Çok sesli şehir",
    lead: "Müslümanlar, Ortodokslar, Yahudiler ve başka topluluklar aynı şehrin farklı mahallelerinde yaşıyordu.",
    detail: "Minareler, kilise çan kuleleri ve sinagoglar Selanik'in gündelik manzarasının parçalarıydı. Türkçe, Rumca, Ladino ve Bulgarca sokakta ve basında duyulabiliyordu. Bu çeşitlilik kültürel karşılaşmalar üretirken Balkan milliyetçiliklerinin gerilimini de görünür kılıyordu.",
    question: "Cami, kilise ve sinagogu aynı şehirde görmek; farklılık, birlikte yaşam ve vatan düşüncesini nasıl etkileyebilir?", tags:["Cami","Kilise","Sinagog","Türkçe · Rumca · Ladino"]
  }
};

const influenceData = {
  history: { no:"01", kicker:"Tarih bilinci · Mehmet Tevfik Bey", title:"Tarih, geçmişi ezberlemek değil; geleceği anlamaktır.", text:"Manastır Askerî İdadisinde tarih öğretmeni Mehmet Tevfik Bey, Mustafa Kemal'in olayları neden-sonuç ilişkisi içinde değerlendirme alışkanlığını güçlendirdi. Devletlerin yükseliş ve çöküş sebeplerini incelerken milletlerin kaderini yalnız askerî gücün değil; eğitim, ekonomi ve millî birliğin de belirlediğini kavradı. Bu bakış, ileride sorunları geniş bir çerçevede değerlendirmesine katkı sağladı.", skill:"Tarih bilinci", question:"Bir lider geçmişteki hatalardan ders çıkarmazsa geleceği doğru planlayabilir mi?" },
  literature: { no:"02", kicker:"Edebiyat ve hitabet · Ömer Naci", title:"Güçlü fikirler, güçlü ifadelerle etkili olur.", text:"Şair ve hatip Ömer Naci, Mustafa Kemal'in edebiyata ve hitabet sanatına ilgisini artırdı. Böylece düşüncelerini etkili biçimde ifade etme yönü gelişti. Nutuk'ta ve konuşmalarında görülen güçlü anlatımın ilk gelişim alanlarından biri bu dönemdi.", skill:"Etkili iletişim ve hitabet", question:"Bir komutanın yalnız savaşmayı değil, insanları ikna etmeyi de bilmesi neden önemlidir?" },
  war: { no:"03", kicker:"1897 Türk-Yunan Savaşı", title:"Zafer kazanmak yetmez, diplomasi de gerekir.", text:"Osmanlı Devleti savaş meydanında başarı sağlasa da barış görüşmelerinde beklediği sonucu bütünüyle elde edemedi. Mustafa Kemal bu olaydan, güçlü bir devletin yalnızca ordusuyla değil dış politikasıyla da başarılı olması gerektiği sonucunu çıkardı.", skill:"Siyasi farkındalık", question:"Bir devlet savaş kazanıp barış görüşmelerinde kaybederse gerçekten kazanmış sayılır mı?" },
  french: { no:"04", kicker:"Fransızca ve yeni fikirler", title:"Yeni bir dil, yeni bir dünyanın kapısını açtı.", text:"Mustafa Kemal Fransızca sayesinde Avrupa'daki bilimsel gelişmeleri, fikir hareketlerini ve düşünürleri doğrudan takip etme fırsatı buldu. Özgürlük, milliyetçilik, eşitlik ve demokrasi gibi kavramlarla tanışması, çağdaşlaşma anlayışını besledi.", skill:"Çağdaş düşünce", question:"Farklı dilleri bilmek insanların dünyaya bakışını nasıl değiştirir?" }
};

const thinkerData = {
  namik: { group:"Osmanlı · Millî", title:"Namık Kemal", subtitle:"Osmanlı'nın Hürriyet Şairi", bio:"Şair, yazar ve gazetecidir. Tanzimat Dönemi'nde özgürlük, anayasa ve vatan sevgisini savunan eserler yazdı.", ideas:["Hürriyet","Vatan sevgisi","Millet bilinci","Meşrutiyet"], effect:"Vatan Yahut Silistre gibi eserleri, Mustafa Kemal'in vatan, hürriyet ve bağımsızlık duygularını güçlendirdi.", memory:"Vatan sevgisini bir duygu olmaktan çıkarıp mücadele fikrine dönüştürdü.", trace:["Tam bağımsızlık","Millî egemenlik","Vatan fikri"] },
  emin: { group:"Osmanlı · Millî", title:"Mehmet Emin Yurdakul", subtitle:"Türk Milletinin Şairi", bio:"Halkın anlayabileceği sade Türkçe ile şiirler yazan, Türkçülük akımının önemli temsilcilerinden bir şair ve yazardır.", ideas:["Türk kimliği","Türkçe","Millî birlik","Halkçılık"], effect:"Halkın diliyle kurduğu millî anlatım, Mustafa Kemal'e millî kimliğin geniş kitlelere nasıl ulaştırılabileceğini gösterdi.", memory:"YURDA-KUL: Yurduna bağlı, millî duyguları güçlü şair. “Ben bir Türküm; dinim, cinsim uludur.”", trace:["Türk milleti kavramı","Millî eğitim","Dil çalışmaları"] },
  ziya: { group:"Osmanlı · Millî", title:"Ziya Gökalp", subtitle:"Türk Milliyetçiliğinin Fikir Mimarı", bio:"Sosyolog, yazar ve düşünürdür; Türkiye'de sosyolojinin kurucularından kabul edilir.", ideas:["Milliyetçilik","Millî eğitim","Millî kültür","Toplum dayanışması"], effect:"Milleti ortak kültür etrafında açıklayan yaklaşımı, Mustafa Kemal'in milliyetçilik anlayışını besleyen başlıca düşünsel kaynaklardan biri oldu; ancak bu fikirler ülkenin koşulları içinde yeniden yorumlandı.", memory:"Atatürk'e atfedilen söz: “Bedenimin babası Ali Rıza Efendi, hislerimin babası Namık Kemal, fikirlerimin babası Ziya Gökalp'tir.”", trace:["Milliyetçilik ilkesi","Halkçılık","Kültür politikaları"] },
  fikret: { group:"Osmanlı · Çağdaş", title:"Tevfik Fikret", subtitle:"Aydınlanmacı ve Yenilikçi Şair", bio:"Şair, öğretmen ve eğitim yöneticisidir. Eleştirel düşünceyi, eğitimi ve çağdaşlaşmayı öne çıkardı.", ideas:["Bilim","Akıl","Çağdaşlaşma","Eğitim"], effect:"Eleştirel tavrı ile bilim ve ilerleme vurgusu, Mustafa Kemal'in çağdaşlaşma düşüncesini besledi. Bu etki, Fikret'in bütün görüşlerinin aynen benimsenmesi anlamına gelmez.", memory:"“Ben inkılap ruhunu ondan aldım.” Bu söz, Fikret'in yenilikçilik ve çağdaşlaşma etkisini anlatır.", trace:["Laiklik","Eğitim reformları","Bilimsel düşünce"] },
  rousseau: { group:"Evrensel", title:"Jean-Jacques Rousseau", subtitle:"Halk Egemenliğinin Filozofu", bio:"18. yüzyıl Aydınlanma düşünürüdür. Toplum Sözleşmesi'nde yönetimin meşruiyetini halk iradesiyle ilişkilendirdi.", ideas:["Halk egemenliği","Toplum sözleşmesi","Eşitlik","Vatandaşlık"], effect:"Yönetimin kaynağının halk olması gerektiği fikrini güçlendiren evrensel düşünce kaynaklarından biri oldu.", memory:"Yönetimin meşruiyetini hükümdardan değil, halkın iradesinden alması gerektiğini savundu.", trace:["TBMM","Cumhuriyet yönetimi","Millî egemenlik"] },
  montesquieu: { group:"Evrensel", title:"Montesquieu", subtitle:"Hukuk ve Kuvvetler Ayrılığının Savunucusu", bio:"Fransız hukukçu ve siyaset düşünürüdür. Devlet gücünün tek elde toplanmaması gerektiğini savundu.", ideas:["Hukukun üstünlüğü","Kuvvetler ayrılığı","Özgürlük","Anayasal yönetim"], effect:"Devlet gücünün tek elde toplanmaması ve yönetimin hukukla sınırlandırılması gerektiği düşüncesini güçlendirdi.", memory:"Özgürlüğü korumanın yolu yalnız iyi yöneticiler değil, gücü sınırlayan kurum ve kanunlardır.", trace:["Hukuk devleti","Anayasal düzen","Demokratik kurumlar"] }
};

const harpData = {
  school: { year:"1899", kicker:"Harp Okulu", title:"Ülkesinin geleceğini sorgulayan bir öğrenci", text:"Mustafa Kemal Harp Okulunda yalnızca askerlik eğitimi almadı. Gazeteler okuyarak ülkenin içinde bulunduğu sorunları takip etti; arkadaşlarıyla özgürlük, yönetim ve devletin geleceği üzerine tartışmalar yaptı. El yazısıyla gazete çıkararak düşüncelerini paylaşmaya başladı. Bu süreç, onun sorgulayan ve fikir üreten yönünü güçlendirdi.", skills:["Fikir üretme","Yazılı ifade","Sorgulama","Toplumsal sorunlara ilgi"], question:"Sorunları fark etmek mi daha önemlidir, çözüm üretmek mi?" },
  academy: { year:"1902-1905", kicker:"Harp Akademisi", title:"Bir subaydan kurmay subaya", text:"Mustafa Kemal Harp Akademisinde askerî strateji, planlama ve komuta eğitimi aldı. Olayları yalnızca görünen yönleriyle değil, olası sonuçlarıyla birlikte değerlendirmeyi öğrendi. Farklı seçenekleri analiz ederek karar verme becerisi geliştirdi. Mezun olduğunda yalnızca emir uygulayan bir subay değil, operasyon planlayabilen bir kurmay subay hâline geldi.", skills:["Stratejik düşünme","Analiz yapma","Planlama","Karar verme","Liderlik"], question:"Bir komutanı başarılı yapan şey cesareti mi, yoksa doğru zamanda doğru kararı verebilmesi midir?" }
};

const initiativeData = {
  civil: {
    no:"01", kicker:"Selanik Mülkiye Rüştiyesi · Kısa süre", title:"Önündeki yol henüz kendi seçimi değildi.",
    text:"Çiftlikte kesintiye uğrayan eğitiminden sonra Selanik'e dönen Mustafa, kısa bir süre Mülkiye Rüştiyesine devam etti. Bu okul onun hayatında kalıcı bir yön olmadı; çünkü zihninde askerlik mesleği giderek daha belirgin bir hedefe dönüşüyordu.",
    concept:"ARAYIŞ", insight:"İnsan bazen doğru yolu, kendisine uygun olmayan bir yolda kısa süre yürüyünce fark eder.",
    question:"Bir yolun bize uygun olmadığını fark etmek de karar sürecinin bir parçası mıdır?"
  },
  uniform: {
    no:"02", kicker:"Komşunun oğlu Ahmet Bey · Üniformanın etkisi", title:"Gördüğü üniforma, belirsiz bir isteği hedefe dönüştürdü.",
    text:"Komşuları Kadri Bey'in oğlu Ahmet Bey askerî rüştiyeye gidiyor ve okul üniforması giyiyordu. Mustafa bu üniformayı gördükçe aynı okula gitme isteğinin güçlendiğini, subaylığa ulaşmak için askerî rüştiyeye girmesi gerektiğini daha sonra kendi sözleriyle anlattı.",
    concept:"HEDEF BELİRLEME", insight:"Rol modeller, bir çocuğun gelecekte kendisini hangi konumda hayal ettiğini değiştirebilir.",
    question:"Bir mesleği istemek ile o mesleğe götüren yolu fark etmek arasında nasıl bir fark vardır?"
  },
  exam: {
    no:"03", kicker:"Annesine haber vermeden sınava girdi", title:"Bir engel karşısında yönlendirme beklemedi.",
    text:"Zübeyde Hanım, asker olan oğlunu savaşta kaybetmekten korktuğu için bu karara karşıydı. Mustafa ise kararını vermişti: Askerî Rüştiyenin giriş sınavına annesine haber vermeden katıldı ve kazandı. Annesini bir oldubittiyle karşı karşıya bırakması aile açısından zorlayıcıydı; fakat kendi yaşam yönünü belirlemek için harekete geçtiği ilk açık örneklerden biriydi.",
    concept:"İNSİYATİF", insight:"Başkalarının harekete geçmesini beklemeden sorumluluk alıp kararını uygulamak.",
    question:"Karar almak ile o kararın sorumluluğunu üstlenmek arasında nasıl bir fark vardır?"
  },
  math: {
    no:"04", kicker:"Matematik Öğretmeni Yüzbaşı Mustafa Efendi", title:"Başarısı, adına yeni bir anlam ekledi.",
    text:"Mustafa, Selanik Askerî Rüştiyesinde özellikle matematik dersindeki başarısıyla dikkat çekti. Matematik Öğretmeni Yüzbaşı Mustafa Efendi, ikisinin adını ayırmak için ona olgunluk ve yetkinlik anlamındaki “Kemal” adını verdi. Böylece okul başarısı, kimliğinin kalıcı bir parçasına dönüştü.",
    concept:"AKILCI ÖZGÜVEN", insight:"“Kemal” adı yalnızca bir hitap değildi; öğretmeninin onda gördüğü yetenek ve olgunluğun ifadesiydi.",
    question:"Bir öğretmenin öğrencisindeki yeteneği fark etmesi, o öğrencinin kendine bakışını değiştirebilir mi?"
  },
  nakiyuddin: {
    no:"05", kicker:"Fransızca Öğretmeni Yüzbaşı Nakiyüddin Bey", title:"Okul, meslek hedefinin yanına vatan fikrini ekledi.",
    text:"Nakiyüddin Bey, Mustafa'ya yalnızca Fransızca öğretmedi; ülkenin ve milletin geleceği üzerine düşünmesi için ilk fikirleri de verdi. Mustafa Kemal yıllar sonra öğretmenini anarken ilk ilhamın aileden sonra eğitimcinin dilinden, vicdanından ve terbiyesinden alındığını vurguladı.",
    concept:"MİLLÎ BİLİNÇ", insight:"Askerlik isteği böylece yalnız bir meslek arzusundan, ülkenin geleceğini düşünme sorumluluğuna doğru genişledi.",
    question:"Bir öğretmen bilgi aktarmanın ötesinde öğrencisinin hangi değerlerini şekillendirebilir?"
  }
};

const lessonState = { currentEvidence: null, collected: new Set() };
const opening = document.getElementById("opening");
const drawer = document.getElementById("evidenceDrawer");
const collectButton = document.getElementById("collectButton");

let locationTimers = [];

document.getElementById("startButton").addEventListener("click", () => {
  opening.classList.add("is-hidden");
  showScene("location");
});
document.getElementById("homeButton").addEventListener("click", () => {
  opening.classList.remove("is-hidden");
  showScene("location");
});

document.querySelectorAll(".hotspot").forEach(button => {
  button.addEventListener("click", () => openEvidence(button.dataset.evidence));
});

function openEvidence(id) {
  lessonState.currentEvidence = id;
  const item = evidence[id];
  document.getElementById("drawerTitle").textContent = item.title;
  document.getElementById("drawerLead").textContent = item.lead;
  document.getElementById("drawerDetail").textContent = item.detail;
  document.getElementById("drawerQuestion").textContent = item.question;
  document.getElementById("evidenceTags").innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join("");
  collectButton.disabled = lessonState.collected.has(id);
  collectButton.textContent = lessonState.collected.has(id) ? "Kanıt çantasında" : "Kanıt çantasına ekle";
  drawer.classList.add("is-open");
}

document.getElementById("drawerClose").addEventListener("click", () => drawer.classList.remove("is-open"));

collectButton.addEventListener("click", () => {
  if (!lessonState.currentEvidence || lessonState.collected.has(lessonState.currentEvidence)) return;
  lessonState.collected.add(lessonState.currentEvidence);
  const hotspot = document.querySelector(`[data-evidence="${lessonState.currentEvidence}"]`);
  hotspot.classList.add("is-collected");
  collectButton.disabled = true;
  collectButton.textContent = "Kanıt çantasında";
  updateBag();
});

function updateBag() {
  document.getElementById("bagCount").textContent = lessonState.collected.size;
  document.querySelectorAll(".bag-slot").forEach((slot, index) => {
    slot.classList.toggle("is-filled", index < lessonState.collected.size);
  });
  document.getElementById("revealConnection").disabled = lessonState.collected.size < 2;
}

document.getElementById("revealConnection").addEventListener("click", () => {
  drawer.classList.remove("is-open");
  document.getElementById("profilePanel").classList.add("is-open");
});
document.getElementById("profileClose").addEventListener("click", () => document.getElementById("profilePanel").classList.remove("is-open"));
document.getElementById("revealChoice").addEventListener("click", () => document.getElementById("schoolProfile").classList.add("is-open"));
document.getElementById("schoolProfileClose").addEventListener("click", () => document.getElementById("schoolProfile").classList.remove("is-open"));

function showScene(name) {
  document.querySelectorAll(".scene").forEach(scene => scene.classList.remove("is-active"));
  document.getElementById(`scene-${name}`).classList.add("is-active");
  document.querySelectorAll(".era").forEach(era => era.classList.toggle("is-active", era.dataset.scene === name));
  document.querySelectorAll(".profile-panel, .evidence-drawer").forEach(panel => panel.classList.remove("is-open"));
  document.getElementById("educationPanel").classList.remove("is-open");
  document.getElementById("sourcesPanel").classList.remove("is-open");
  document.getElementById("ideasSynthesis").classList.remove("is-open");
  document.getElementById("ideasSynthesis").setAttribute("aria-hidden", "true");
  if (name === "location") runLocationSequence();
}

function runLocationSequence() {
  locationTimers.forEach(clearTimeout);
  const stage = document.getElementById("locationStage");
  const status = document.getElementById("locationStatus");
  stage.classList.remove("is-zoomed", "is-map");
  status.innerHTML = "<span>01</span><strong>Dünya'dan Avrupa'ya yaklaşıyoruz; henüz şehir işaretlenmedi</strong>";
  locationTimers = [
    setTimeout(() => {
      stage.classList.add("is-zoomed");
      status.innerHTML = "<span>02</span><strong>Yaklaşma tamamlanıyor; 20. yüzyıl başı Avrupa siyasi haritasına geçiliyor</strong>";
    }, 900),
    setTimeout(() => {
      stage.classList.add("is-map");
      status.innerHTML = "<span>03</span><strong>Selanik bulundu: Balkanların güneyi · 40.64° K, 22.94° D</strong>";
    }, 2400)
  ];
}

document.getElementById("replayLocation").addEventListener("click", runLocationSequence);
document.getElementById("educationContextButton").addEventListener("click", () => document.getElementById("educationPanel").classList.add("is-open"));
document.getElementById("educationClose").addEventListener("click", () => document.getElementById("educationPanel").classList.remove("is-open"));
document.getElementById("sourcesButton").addEventListener("click", () => document.getElementById("sourcesPanel").classList.add("is-open"));
document.getElementById("sourcesClose").addEventListener("click", () => document.getElementById("sourcesPanel").classList.remove("is-open"));

document.querySelectorAll("[data-scene-target]").forEach(button => button.addEventListener("click", () => showScene(button.dataset.sceneTarget)));
document.querySelectorAll(".era[data-scene]").forEach(button => button.addEventListener("click", () => showScene(button.dataset.scene)));

document.querySelectorAll(".influence-item").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".influence-item").forEach(item => item.classList.toggle("is-active", item === button));
  const item = influenceData[button.dataset.influence];
  document.getElementById("influenceDetail").innerHTML = `<span class="detail-number">${item.no}</span><div><p class="eyebrow">${item.kicker}</p><h2>${item.title}</h2><p>${item.text}</p><div class="influence-skill"><span>KAZANDIRDIĞI ÖZELLİK</span><strong>${item.skill}</strong></div><div class="detail-question">${item.question}</div></div>`;
}));

document.querySelectorAll(".harp-tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".harp-tab").forEach(tab => tab.classList.toggle("is-active", tab === button));
  const item = harpData[button.dataset.harp];
  document.getElementById("harpContent").innerHTML = `<div class="harp-year">${item.year}</div><div><p class="eyebrow">${item.kicker}</p><h2>${item.title}</h2><p>${item.text}</p><div class="skill-row">${item.skills.map(skill => `<span>${skill}</span>`).join("")}</div><div class="harp-thought">${item.question}</div></div>`;
}));

document.querySelectorAll(".initiative-tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".initiative-tab").forEach(tab => tab.classList.toggle("is-active", tab === button));
  const item = initiativeData[button.dataset.initiative];
  document.getElementById("initiativeDetail").innerHTML = `<span class="initiative-number">${item.no}</span><div><p class="eyebrow">${item.kicker}</p><h2>${item.title}</h2><p>${item.text}</p><div class="initiative-definition"><span>${item.concept}</span><strong>${item.insight}</strong></div><div class="initiative-question">${item.question}</div></div>`;
}));

function renderThinker(button) {
  document.querySelectorAll(".thinker").forEach(item => item.classList.toggle("is-active", item === button));
  const item = thinkerData[button.dataset.thinker];
  const detail = document.getElementById("thinkerDetail");
  detail.className = `thinker-detail ${button.classList.contains("universal-thinker") ? "is-universal" : "is-local"}`;
  detail.innerHTML = `<header><p class="eyebrow">${item.group}</p><h2>${item.title}</h2><strong>${item.subtitle}</strong></header><div class="idea-layer"><span>KİMDİR?</span><p>${item.bio}</p></div><div class="idea-layer"><span>NEYİ SAVUNDU?</span><div class="concept-list">${item.ideas.map(idea => `<b>${idea}</b>`).join("")}</div></div><div class="idea-layer"><span>MUSTAFA KEMAL'E ETKİSİ</span><p>${item.effect}</p></div><div class="memory-note"><span>AKILDA KALSIN</span><strong>${item.memory}</strong></div><div class="idea-layer republic-trace"><span>DÜŞÜNCE DÜNYASINDAKİ İZİ</span><div class="concept-list">${item.trace.map(trace => `<b>${trace}</b>`).join("")}</div></div>`;
}

document.querySelectorAll(".thinker").forEach(button => button.addEventListener("click", () => renderThinker(button)));
renderThinker(document.querySelector(".thinker.is-active"));

document.getElementById("openIdeasSynthesis").addEventListener("click", () => {
  document.getElementById("ideasSynthesis").classList.add("is-open");
  document.getElementById("ideasSynthesis").setAttribute("aria-hidden", "false");
});
document.getElementById("closeIdeasSynthesis").addEventListener("click", () => {
  document.getElementById("ideasSynthesis").classList.remove("is-open");
  document.getElementById("ideasSynthesis").setAttribute("aria-hidden", "true");
});

document.querySelectorAll(".crisis-toggle").forEach(button => button.addEventListener("click", () => {
  const file = button.closest(".crisis-file");
  const willOpen = !file.classList.contains("is-open");
  document.querySelectorAll(".crisis-file").forEach(other => {
    const otherButton = other.querySelector(".crisis-toggle");
    other.classList.remove("is-open");
    otherButton.setAttribute("aria-expanded", "false");
    otherButton.querySelector("i").textContent = "+";
  });
  if (willOpen) {
    file.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.querySelector("i").textContent = "−";
  }
}));

document.querySelector("[data-plan='trablus']").addEventListener("click", () => {
  document.getElementById("trablusResult").textContent = "Plan çalışıyor: yerel halk + arazi bilgisi + gönüllü subayların eğitimi, İtalya'nın üstünlüğünü yok etmez; fakat ilerleyişini yavaşlatan etkili bir savunma üretir.";
});

document.getElementById("assembleLeader").addEventListener("click", () => {
  const stage = document.getElementById("finalStage");
  stage.classList.toggle("is-assembled");
  document.getElementById("assembleLeader").innerHTML = stage.classList.contains("is-assembled") ? "Bağları yeniden incele <span>↻</span>" : "Lideri oluşturan bağları kur <span>→</span>";
});

document.querySelectorAll(".formation-node").forEach(button => button.addEventListener("click", () => {
  const sceneMap = { egitim:"school", harbiye:"harp", fikirler:"ideas", krizler:"crises" };
  showScene(sceneMap[button.dataset.finalNode] || button.dataset.finalNode);
}));

const range = document.getElementById("comparisonRange");
range.addEventListener("input", () => {
  const value = range.value;
  document.querySelector(".school-side.modern").style.clipPath = `inset(0 0 0 ${value}%)`;
  document.getElementById("comparisonHandle").style.left = `${value}%`;
});

document.getElementById("fullscreenButton").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (_) {}
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") document.querySelectorAll(".profile-panel, .evidence-drawer, .education-panel, .sources-panel").forEach(panel => panel.classList.remove("is-open"));
  if (event.key === "ArrowRight" && document.getElementById("scene-selanik").classList.contains("is-active") && lessonState.collected.size >= 2) {
    document.getElementById("profilePanel").classList.add("is-open");
  }
});
