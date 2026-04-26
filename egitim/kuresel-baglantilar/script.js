const slidesEl = document.getElementById("slides");
const navPills = [...document.querySelectorAll(".nav-pill")];
const slideEls = [...document.querySelectorAll(".slide")];
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const nextButtons = [...document.querySelectorAll("[data-next]")];
const visitedSlides = new Set([0]);
const crosswordInputs = [...document.querySelectorAll(".cw-input")];

let currentSlide = 0;
let selectedLeft = null;
let quizScore = 0;
let currentQuizIndex = 0;
let answeredCurrentQuestion = false;
let currentLevel = "easy";

const orgDetails = {
  un: {
    title: "Birleşmiş Milletler",
    logo: "assets/logos/un.png",
    founded: "1945",
    members: "193 üye ülke",
    area: "New York merkezi | barış, güvenlik, insan hakları, kalkınma",
    textbook: "Dünya barışını korumak, devletler arasında dostane ilişkiler geliştirmek ve küresel sorunlara ortak çözüm üretmek için çalışır.",
    turkey: "Türkiye Birleşmiş Milletler üyesidir. Barış, insani yardım, çocuk hakları, göç ve sürdürülebilir kalkınma gibi konularda görev alır.",
    note: "Genel Kurul, Güvenlik Konseyi, Ekonomik ve Sosyal Konsey, Uluslararası Adalet Divanı ve Genel Sekreterlik önemli organlarıdır."
  },
  nato: {
    title: "NATO",
    logo: "assets/logos/nato.png",
    founded: "1949",
    members: "32 üye ülke",
    area: "Brüksel merkezi | güvenlik ve ortak savunma",
    textbook: "Üye ülkelerin güvenliğini birlikte korumayı amaçlayan uluslararası savunma örgütüdür.",
    turkey: "Türkiye 1952'den beri NATO üyesidir ve ittifakın güney kanadında stratejik konuma sahiptir.",
    note: "Bir üyeye yapılan saldırı tüm üyelere yapılmış sayılır. Bu anlayış ortak savunma ilkesidir."
  },
  unesco: {
    title: "UNESCO",
    logo: "assets/logos/unesco.png",
    founded: "1945",
    members: "194 üye ülke ve 12 ortak üye",
    area: "Paris merkezi | eğitim, bilim, kültür",
    textbook: "Eğitim, bilim ve kültür alanlarında ülkeler arasında iş birliği kurarak kalıcı barışa katkı sağlar.",
    turkey: "Türkiye UNESCO üyesidir. Göbeklitepe, Kapadokya, Safranbolu ve Troya gibi değerler UNESCO ile korunur ve tanıtılır.",
    note: "Dünya Miras Listesi ve Somut Olmayan Kültürel Miras Listesi UNESCO'nun en bilinen çalışmalarındandır."
  },
  who: {
    title: "Dünya Sağlık Örgütü",
    logo: "assets/logos/who.svg",
    founded: "1948",
    members: "194 üye ülke",
    area: "Cenevre merkezi | uluslararası sağlık",
    textbook: "Salgın hastalıklar, aşılama, halk sağlığı ve sağlık krizleri gibi konularda ülkeler arasında eş güdüm sağlar.",
    turkey: "Türkiye, salgın yönetimi, aşılama ve halk sağlığı çalışmaları konusunda bu örgütle iş birliği yapar.",
    note: "WHO sağlık standartları belirler, veri toplar ve ülkelere teknik destek verir."
  },
  oic: {
    title: "İslam İş Birliği Teşkilatı",
    logo: "assets/logos/oic.png",
    founded: "1969",
    members: "57 üye ülke",
    area: "Cidde merkezi | dayanışma, diplomasi, kültür, ekonomi",
    textbook: "Üye ülkeler arasında birlik, dayanışma ve ortak meselelerde iş birliği kurmayı amaçlar.",
    turkey: "Türkiye teşkilatın aktif üyelerindendir ve siyasi, kültürel, ekonomik toplantılarda rol alır.",
    note: "Kudüs, Filistin, eğitim, kültür ve ekonomik dayanışma bu yapının öne çıkan çalışma alanlarıdır."
  },
  bsec: {
    title: "Karadeniz Ekonomik İş Birliği",
    logo: "assets/logos/bsec.png",
    founded: "1992",
    members: "13 üye ülke",
    area: "İstanbul merkezi | bölgesel ekonomik iş birliği",
    textbook: "Karadeniz çevresindeki ülkeler arasında ticaret, ulaşım, enerji ve ekonomik ilişkileri geliştirmeyi amaçlar.",
    turkey: "Türkiye kuruluşun oluşumunda öncü rol oynadı. Merkezinin İstanbul'da bulunması da bunu gösterir.",
    note: "Bölgesel refahı artırmak ve ekonomik bağları güçlendirmek için çalışır."
  },
  d8: {
    title: "D-8",
    logo: "assets/logos/d8.png",
    founded: "1997",
    members: "9 üye ülke",
    area: "İstanbul merkezi | ekonomik iş birliği ve kalkınma",
    textbook: "Üye ülkeler arasında ticaret, yatırım ve ekonomik kalkınmayı güçlendirmek için kurulmuştur.",
    turkey: "Türkiye D-8'in kurucu ülkelerindendir ve zirvelerde etkili görev üstlenir.",
    note: "Ticaret hacmini artırmak, teknoloji iş birliği yapmak ve gelişmekte olan ülkeler arasındaki dayanışmayı güçlendirmek ister."
  },
  eu: {
    title: "Avrupa Birliği",
    logo: "assets/logos/eu.svg",
    founded: "1993",
    members: "27 üye ülke",
    area: "Brüksel merkezli yapı | siyasi ve ekonomik iş birliği",
    textbook: "Avrupa ülkeleri arasında ortak pazar, ortak kurallar ve güçlü ekonomik-siyasi bağlar oluşturmayı amaçlayan birliktir.",
    turkey: "Türkiye Avrupa Birliği üyesi değildir; ancak Gümrük Birliği, ticaret, eğitim ve diplomasi alanlarında yakın ilişkiler yürütür.",
    note: "Serbest dolaşım, ortak kurallar ve güçlü ekonomik bağlar Avrupa Birliği'nin temel özelliklerindendir."
  }
};

const quizByLevel = {
  easy: [
    { title: "1. Birleşmiş Milletler", question: "Birleşmiş Milletlerin temel amaçlarından biri hangisidir?", options: { A: "Barış ve güvenliği desteklemek", B: "Sadece spor düzenlemek", C: "Turistik gezi planlamak", D: "Tarım ürünleri satmak" }, answer: "A", explanation: "BM barış, güvenlik ve iş birliği için çalışır." },
    { title: "2. NATO", question: "NATO en çok hangi alanda öne çıkar?", options: { A: "Kültür", B: "Sağlık", C: "Savunma ve güvenlik", D: "Turizm" }, answer: "C", explanation: "NATO ortak savunma ve güvenlik alanında çalışır." },
    { title: "3. UNESCO", question: "UNESCO hangi alanlarda çalışır?", options: { A: "Eğitim, bilim, kültür", B: "Silah üretimi", C: "Petrol", D: "Vergi toplama" }, answer: "A", explanation: "UNESCO eğitim, bilim ve kültür kuruluşudur." },
    { title: "4. WHO", question: "Salgınlarda öne çıkan kuruluş hangisidir?", options: { A: "AB", B: "WHO", C: "UNESCO", D: "KEİ" }, answer: "B", explanation: "Dünya Sağlık Örgütü küresel sağlık eş güdümünde öne çıkar." },
    { title: "5. İİT", question: "İİT'nin temel amacı hangisidir?", options: { A: "Dayanışma ve ortak iş birliği", B: "Sadece spor", C: "Uzay yarışı", D: "Yalnızca turizm" }, answer: "A", explanation: "İİT üye ülkeler arasında dayanışmayı güçlendirmeyi amaçlar." },
    { title: "6. KEİ", question: "KEİ neyi geliştirmeye çalışır?", options: { A: "Bölgesel ekonomik bağları", B: "Sadece sağlık yardımı", C: "Film festivalleri", D: "Askeri üsler" }, answer: "A", explanation: "KEİ ekonomik iş birliğine odaklanır." },
    { title: "7. D-8", question: "D-8 için doğru ifade hangisidir?", options: { A: "Ekonomik ilişkileri güçlendirir", B: "Sadece çevreyi inceler", C: "Savunma örgütüdür", D: "Sadece spor yapar" }, answer: "A", explanation: "D-8 ekonomik iş birliği teşkilatıdır." },
    { title: "8. Avrupa Birliği", question: "AB en doğru nasıl tanımlanır?", options: { A: "Siyasi ve ekonomik birlik", B: "Sadece sağlık örgütü", C: "Savunma örgütü", D: "Kültür kulübü" }, answer: "A", explanation: "AB siyasi ve ekonomik iş birliğini güçlendirir." }
  ],
  medium: [
    { title: "1. Birleşmiş Milletler", question: "Birleşmiş Milletler hangi ihtiyacın sonucunda ortaya çıkmıştır?", options: { A: "Küresel barışı koruma ve sorunları ortak çözme", B: "Yalnızca ticaret yapma", C: "Tek bir ülkenin gücünü artırma", D: "Sadece spor yarışları düzenleme" }, answer: "A", explanation: "BM, savaşları önleme ve ortak çözüm üretme ihtiyacından doğmuştur." },
    { title: "2. NATO", question: "NATO'nun ayırt edici yönü aşağıdakilerden hangisidir?", options: { A: "Miras alanlarını koruması", B: "Ortak savunma ilkesiyle çalışması", C: "Sağlık verisi toplaması", D: "Kültür festivalleri düzenlemesi" }, answer: "B", explanation: "NATO'nun temel özelliği ortak savunmadır." },
    { title: "3. UNESCO", question: "UNESCO'nun bir ülke için önemi en çok hangi örnekle açıklanır?", options: { A: "Tarihî ve kültürel değerlerin korunması", B: "Askerî tatbikat yapılması", C: "Gümrük vergisi belirlemesi", D: "Petrol satması" }, answer: "A", explanation: "UNESCO kültürel ve bilimsel birikimin korunmasına katkı sağlar." },
    { title: "4. WHO", question: "Aşağıdakilerden hangisi WHO'nun görev alanına girer?", options: { A: "Aşılama ve halk sağlığı standartları", B: "Savunma ittifakı kurmak", C: "Müzeleri korumak", D: "Gümrük birliği oluşturmak" }, answer: "A", explanation: "WHO sağlık standartları ve halk sağlığı çalışmaları yapar." },
    { title: "5. İİT", question: "İİT'nin varlık nedeni en iyi nasıl açıklanır?", options: { A: "Üye ülkeleri yalnız bırakmak", B: "Ortak sorunlarda dayanışma oluşturmak", C: "Sadece turistik iş birliği yapmak", D: "Sadece tek bir ülkeye hizmet etmek" }, answer: "B", explanation: "İİT ortak meselelerde dayanışma kurar." },
    { title: "6. KEİ", question: "KEİ'yi diğerlerinden ayıran yön hangisidir?", options: { A: "Karadeniz çevresinde bölgesel ekonomi ağı kurması", B: "Sağlık sistemi kurması", C: "Kültür yarışması yapması", D: "Sadece askerî eğitim vermesi" }, answer: "A", explanation: "KEİ bölgesel ekonomik iş birliğine odaklanır." },
    { title: "7. D-8", question: "D-8'in kuruluş mantığı aşağıdakilerden hangisine dayanır?", options: { A: "Gelişmekte olan ülkeler arasında ekonomik iş birliğini artırmak", B: "Sadece askerî güç kurmak", C: "Yalnızca çevre anlaşmaları yapmak", D: "Turizm gelirlerini paylaşmak" }, answer: "A", explanation: "D-8 ekonomik kalkınma iş birliği amacı taşır." },
    { title: "8. Avrupa Birliği", question: "AB ile ilgili en doğru ifade hangisidir?", options: { A: "Ekonomik ve siyasi bütünleşmeyi hedefleyen yapıdır", B: "Sadece sağlık alanında çalışır", C: "Yalnızca kültür örgütüdür", D: "Sadece askerî güç oluşturur" }, answer: "A", explanation: "AB bütünleşme ve ortak kurallar üzerine kuruludur." }
  ],
  hard: [
    { title: "1. Birleşmiş Milletler", question: "Bir devletin BM içinde etkin olması en çok hangi kazanımı sağlar?", options: { A: "Küresel sorunların çözümünde söz sahibi olma", B: "Tek başına hareket etme", C: "Hiçbir ülkeyle ilişki kurmama", D: "Sadece spor başarısı kazanma" }, answer: "A", explanation: "BM üyeliği ülkelere uluslararası karar süreçlerinde söz hakkı sağlar." },
    { title: "2. NATO", question: "NATO üyeliği Türkiye açısından hangi bakımdan anlamlıdır?", options: { A: "Kültürel mirası artırır", B: "Ortak güvenlik şemsiyesi sağlar", C: "Sadece sağlık hizmeti getirir", D: "Tarım üretimini doğrudan yönetir" }, answer: "B", explanation: "Türkiye NATO ile ortak güvenlik ve savunma düzeni içinde yer alır." },
    { title: "3. UNESCO", question: "Bir tarihî alanın UNESCO ile ilişkilendirilmesi hangi sonucu doğurur?", options: { A: "Uluslararası tanınırlık ve koruma bilinci artar", B: "Askerî statü kazanır", C: "Gümrükten muaf olur", D: "Sadece yerel kalır" }, answer: "A", explanation: "UNESCO kültürel mirasa uluslararası görünürlük ve koruma sağlar." },
    { title: "4. WHO", question: "WHO'nun küresel sağlıkta önemli olmasının temel nedeni nedir?", options: { A: "Ülkeler için ortak standart ve koordinasyon oluşturması", B: "Sadece ilaç satması", C: "Sadece tek bir kıtaya çalışması", D: "Savunma ittifakı kurması" }, answer: "A", explanation: "WHO sağlıkta ortak standart, veri ve koordinasyon üretir." },
    { title: "5. İİT", question: "İİT'nin işlevi hangi kavramla en çok ilişkilidir?", options: { A: "Dayanışma", B: "Yalıtılmışlık", C: "Tek taraflılık", D: "Rekabeti artırma" }, answer: "A", explanation: "İİT dayanışma ve ortak tavır geliştirme hedefi taşır." },
    { title: "6. KEİ", question: "KEİ'nin merkezinin İstanbul'da bulunması Türkiye için ne gösterir?", options: { A: "Bölgesel iş birliğinde etkin konumunu", B: "Sadece kültür alanında çalıştığını", C: "AB üyesi olduğunu", D: "Küresel sağlık örgütü olduğunu" }, answer: "A", explanation: "İstanbul'un merkez olması Türkiye'nin bölgesel etkisini gösterir." },
    { title: "7. D-8", question: "D-8'in amaçları düşünüldüğünde aşağıdakilerden hangisi beklenir?", options: { A: "Üyeler arası ticaret ve yatırımın gelişmesi", B: "Askerî üs sayısının artması", C: "Sadece spor faaliyetleri", D: "Kültürel miras listesi oluşturması" }, answer: "A", explanation: "D-8 ekonomik gelişme ve ticari iş birliği hedefler." },
    { title: "8. Avrupa Birliği", question: "AB ile ilgili olarak aşağıdakilerden hangisi daha kapsamlı bir yorumdur?", options: { A: "Siyasi kararlar ve ekonomi arasında ortaklık kurar", B: "Yalnızca sağlık alanında görev yapar", C: "Sadece tek bir ülkeyi temsil eder", D: "Savunma örgütü olarak kuruldu" }, answer: "A", explanation: "AB ekonomik ve siyasi bütünleşmeyi aynı çatı altında buluşturur." }
  ]
};

const matchExplanations = {
  bm: "Birleşmiş Milletler uluslararası barışı, güvenliği ve devletler arası iş birliğini destekler.",
  unesco: "UNESCO eğitim, bilim ve kültür alanlarında çalışır; kültürel mirası da korur.",
  who: "Dünya Sağlık Örgütü sağlık krizleri, salgınlar ve halk sağlığı alanında çalışır.",
  onyargi: "Ön yargı, bir kişiyi ya da grubu tanımadan önce verilen peşin karardır.",
  kuresel: "Küresel sorunlar yalnızca bir ülkeyi değil, birçok ülkeyi ve tüm insanlığı etkiler."
};

function launchConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;";
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  const colors = ["#ff7a59", "#19b7a6", "#ffcb47", "#6a7cff", "#0ea66f", "#d74d63"];
  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 10 + 6,
    h: Math.random() * 5 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.18,
  }));
  let raf;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.y += p.speed;
      p.angle += p.spin;
      p.x += Math.sin(p.angle) * 1.5;
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (pieces.some((p) => p.y < canvas.height + 20)) {
      raf = requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }
  animate();
  setTimeout(() => { cancelAnimationFrame(raf); canvas.remove(); }, 4500);
}

function getBadge(score, total) {
  if (score === total) return "Küresel Bağlantılar Ustası";
  if (score >= 6) return "Küresel Kaşif";
  if (score >= 4) return "İş Birliği Yıldızı";
  if (score >= 2) return "Meraklı Öğrenci";
  return "Başlangıç Kâşifi";
}

function updateBadge() {
  document.getElementById("badgePanel").textContent = getBadge(quizScore, 8);
}

function goToSlide(index) {
  currentSlide = index;
  visitedSlides.add(index);
  if (window.innerWidth > 1180) {
    slidesEl.style.transform = `translateX(-${index * 12.5}%)`;
  } else {
    slideEls[index].scrollIntoView({ behavior: "smooth", block: "start" });
  }
  navPills.forEach((pill, i) => pill.classList.toggle("active", i === index));
  slideEls[index].scrollTo({ top: 0, behavior: "smooth" });
  updateProgress();
}

function updateProgress() {
  const percent = Math.round((visitedSlides.size / slideEls.length) * 100);
  progressFill.style.width = `${percent}%`;
  progressLabel.textContent = `%${percent}`;
  navPills.forEach((pill, i) => {
    if (visitedSlides.has(i)) pill.dataset.done = "true";
  });
}

function normalizeText(value) {
  return value
    .toLocaleUpperCase("tr-TR")
    .replace(/\s+/g, "")
    .replace(/İ/g, "I")
    .replace(/Ş/g, "S")
    .replace(/Ç/g, "C")
    .replace(/Ğ/g, "G")
    .replace(/Ü/g, "U")
    .replace(/Ö/g, "O");
}

function renderAllQuizQuestions() {
  const questions = quizByLevel[currentLevel];
  const container = document.getElementById("quizStage");
  const levelLabel = currentLevel === "easy" ? "Kolay" : currentLevel === "medium" ? "Orta" : "Zor";
  document.getElementById("quizCurrent").textContent = "0";
  document.getElementById("quizNextBtn").hidden = true;
  document.getElementById("quizFeedback").textContent = "Soruları cevapla, puan sayacı anlık güncellenir.";
  document.getElementById("quizFeedback").className = "score-panel";

  container.innerHTML = questions.map((q, i) => `
    <article class="quiz-card" data-index="${i}">
      <div class="quiz-headline">
        <span class="quiz-num">${i + 1}.</span>
        <span class="quiz-badge">${levelLabel}</span>
      </div>
      <p>${q.question}</p>
      <div class="options">
        ${Object.entries(q.options).map(([key, val]) =>
          `<button class="option-btn" data-option="${key}" data-qi="${i}"><strong>${key}</strong> ${val}</button>`
        ).join("")}
      </div>
      <span class="quiz-mini-feedback"></span>
    </article>
  `).join("");

  container.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qi = Number(btn.dataset.qi);
      const card = container.querySelector(`.quiz-card[data-index="${qi}"]`);
      if (card.dataset.answered) return;
      card.dataset.answered = "true";
      const q = questions[qi];
      const isCorrect = btn.dataset.option === q.answer;
      if (isCorrect) quizScore++;
      card.querySelectorAll(".option-btn").forEach((opt) => {
        opt.disabled = true;
        if (opt.dataset.option === q.answer) opt.classList.add("correct");
        else if (opt === btn) opt.classList.add("wrong");
      });
      const miniFb = card.querySelector(".quiz-mini-feedback");
      miniFb.textContent = `${isCorrect ? "Doğru." : "Yanlış."} ${q.explanation}`;
      miniFb.className = `quiz-mini-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
      document.getElementById("scoreValue").textContent = quizScore;
      updateBadge();
      const answeredCount = container.querySelectorAll(".quiz-card[data-answered]").length;
      document.getElementById("quizCurrent").textContent = answeredCount;
      if (answeredCount === questions.length) {
        const total = questions.length;
        document.getElementById("quizFeedback").textContent = `Test tamamlandı! ${quizScore} / ${total} doğru yaptın ve "${getBadge(quizScore, total)}" rozetini kazandın.`;
        document.getElementById("quizFeedback").className = "score-panel is-correct";
        document.getElementById("summaryPanel").hidden = false;
        if (quizScore >= 6) launchConfetti();
      }
    });
  });
}

function resetQuiz(level = currentLevel) {
  currentLevel = level;
  quizScore = 0;
  document.getElementById("scoreValue").textContent = "0";
  document.getElementById("quizCurrent").textContent = "0";
  document.getElementById("summaryPanel").hidden = true;
  document.getElementById("quizNextBtn").hidden = true;
  updateBadge();
  renderAllQuizQuestions();
}

navPills.forEach((pill) => pill.addEventListener("click", () => goToSlide(Number(pill.dataset.slide))));
nextButtons.forEach((button) => button.addEventListener("click", () => goToSlide(currentSlide === slideEls.length - 1 ? 0 : currentSlide + 1)));

document.querySelectorAll(".difficulty-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".difficulty-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    resetQuiz(button.dataset.level);
  });
});

document.querySelectorAll(".hook-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const feedback = document.getElementById("hookFeedback");
    const agreed = button.dataset.hook === "agree";
    feedback.textContent = agreed
      ? "Harika. Küresel sorunlar karşısında ülkeler tek başına değil, birlikte hareket etmelidir."
      : "İşte sürpriz burada. En güçlü devlet bile salgın, iklim değişikliği ve ekonomik kriz gibi sorunlarda iş birliğine ihtiyaç duyar.";
    feedback.style.background = agreed ? "rgba(14, 166, 111, 0.12)" : "rgba(255, 203, 71, 0.22)";
  });
});

document.querySelectorAll(".concept-card").forEach((card) => card.addEventListener("click", () => card.classList.toggle("open")));

document.querySelectorAll(".org-card").forEach((card) => {
  card.addEventListener("click", () => {
    const details = orgDetails[card.dataset.org];
    if (!details) return;
    document.getElementById("modalTitle").textContent = details.title;
    document.getElementById("modalLogo").src = details.logo;
    document.getElementById("modalFounded").textContent = details.founded;
    document.getElementById("modalMembers").textContent = details.members;
    document.getElementById("modalArea").textContent = details.area;
    document.getElementById("modalTextbook").textContent = details.textbook;
    document.getElementById("modalTurkey").textContent = details.turkey;
    document.getElementById("modalNote").textContent = details.note;
    document.getElementById("orgModal").showModal();
  });
});

document.getElementById("closeModalBtn").addEventListener("click", () => document.getElementById("orgModal").close());

document.getElementById("orgModal").addEventListener("click", (event) => {
  const dialog = document.getElementById("orgModal");
  const rect = dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

// Bulmaca: sabit hücreleri gizle, tıklayınca tüm kelimeyi aç
function revealWord(wordName) {
  document.querySelectorAll(`.cw-cell.fixed[data-word~="${wordName}"]`).forEach((cell) => {
    cell.textContent = cell.dataset.letter;
    cell.classList.add("revealed");
  });
  crosswordInputs
    .filter((inp) => inp.dataset.word.split(" ").includes(wordName))
    .forEach((inp) => {
      inp.value = inp.dataset.answer;
      inp.classList.remove("bad");
      inp.classList.add("good");
    });
}

document.querySelectorAll(".cw-cell.fixed").forEach((cell) => {
  cell.dataset.letter = cell.textContent.trim();
  cell.textContent = "";
  cell.addEventListener("click", () => {
    if (cell.dataset.word) {
      cell.dataset.word.split(" ").forEach((w) => revealWord(w));
    }
  });
});

// Gerçek zamanlı bulmaca doğrulaması
crosswordInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const val = normalizeText(input.value);
    const ans = normalizeText(input.dataset.answer);
    if (val === "") {
      input.classList.remove("good", "bad");
    } else if (val === ans) {
      input.classList.add("good");
      input.classList.remove("bad");
    } else {
      input.classList.add("bad");
      input.classList.remove("good");
    }
  });
});

document.getElementById("crosswordCheckBtn").addEventListener("click", () => {
  ["DISTICARET", "ONYARGI", "EKONOMI", "DIPLOMASI", "SULH", "KURESELSORUN"].forEach((w) => revealWord(w));
  const feedback = document.getElementById("crosswordFeedback");
  feedback.textContent = "Bulmacadaki tüm kavramlar gösterildi.";
  feedback.className = "score-panel is-correct";
});

document.querySelectorAll(".crossword-clue-btn").forEach((button) => {
  button.addEventListener("click", () => {
    revealWord(button.dataset.word);
    const feedback = document.getElementById("crosswordFeedback");
    feedback.textContent = `"${button.textContent.trim()}" kelimesi açıldı.`;
    feedback.className = "score-panel is-correct";
  });
});

document.querySelectorAll(".match-item.left").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("matched")) return;
    document.querySelectorAll(".match-item.left").forEach((el) => el.classList.remove("selected"));
    selectedLeft = item;
    item.classList.add("selected");
  });
});

document.querySelectorAll(".match-item.right").forEach((item) => {
  item.addEventListener("click", () => {
    if (!selectedLeft || item.classList.contains("matched")) return;
    const feedback = document.getElementById("matchFeedback");
    const isCorrect = selectedLeft.dataset.group === item.dataset.group;
    if (isCorrect) {
      selectedLeft.classList.remove("selected");
      selectedLeft.classList.add("matched");
      item.classList.add("matched");
      selectedLeft = null;
      const matchedCount = document.querySelectorAll(".match-item.right.matched").length;
      if (matchedCount === 5) {
        feedback.textContent = "Tebrikler! Tüm 5 eşleştirme doğru tamamlandı!";
        feedback.style.background = "rgba(14, 166, 111, 0.2)";
        document.getElementById("matchResetBtn").hidden = false;
      } else {
        feedback.textContent = `Doğru eşleştirme. ${matchExplanations[item.dataset.group]}`;
        feedback.style.background = "rgba(14, 166, 111, 0.12)";
      }
    } else {
      feedback.textContent = "Bu çift uymadı. Kavram ile açıklamayı yeniden düşün.";
      feedback.style.background = "rgba(215, 77, 99, 0.12)";
    }
  });
});

document.getElementById("matchResetBtn").addEventListener("click", () => {
  document.querySelectorAll(".match-item").forEach((el) => el.classList.remove("selected", "matched"));
  const feedback = document.getElementById("matchFeedback");
  feedback.textContent = "Hazırsan ilk çifti seç.";
  feedback.style.background = "";
  document.getElementById("matchResetBtn").hidden = true;
  selectedLeft = null;
});

document.querySelectorAll(".tf-card").forEach((card) => {
  const answer = card.dataset.answer;
  const feedback = card.querySelector(".mini-feedback");
  card.querySelectorAll(".tf-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.value === answer;
      if (isCorrect) card.dataset.userCorrect = "true";
      card.querySelectorAll(".tf-btn").forEach((button) => {
        button.disabled = true;
        button.classList.toggle("correct", button.dataset.value === answer);
        button.classList.toggle("wrong", button === btn && button.dataset.value !== answer);
      });
      feedback.textContent = `${isCorrect ? "Doğru." : "Yanlış."} ${card.dataset.explanation}`;
      feedback.className = `mini-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
      const allAnswered = [...document.querySelectorAll(".tf-card")].every((c) => c.querySelector(".tf-btn[disabled]"));
      if (allAnswered) {
        const correct = document.querySelectorAll('.tf-card[data-user-correct="true"]').length;
        const total = document.querySelectorAll(".tf-card").length;
        const tfSummary = document.getElementById("tfSummary");
        tfSummary.textContent = `Tüm sorular tamamlandı: ${correct} / ${total} doğru! ${correct === total ? "Mükemmel!" : correct >= 4 ? "Çok iyi!" : "Tekrar gözden geçir."}`;
        tfSummary.className = `score-panel ${correct >= 4 ? "is-correct" : "is-wrong"}`;
        tfSummary.hidden = false;
      }
    });
  });
});

// quizNextBtn artık kullanılmıyor — tüm sorular aynı anda görünür

document.getElementById("restartBtn").addEventListener("click", () => location.reload());
window.addEventListener("resize", () => goToSlide(currentSlide));

updateBadge();
resetQuiz("easy");
updateProgress();

