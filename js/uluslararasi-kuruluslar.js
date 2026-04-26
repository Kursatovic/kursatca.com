const ORG_DATA = [
  { id: 'bm', short: 'BM', name: 'Birleşmiş Milletler', year: '1945', center: 'Uluslararası ana yapı', turkey: 'Türkiye üyedir.', purpose: 'Dünya barışını ve güven ortamını korumak; ekonomik, sosyal, kültürel, bilimsel ve siyasal iş birliğini sağlamak.', summary: 'Birleşmiş Milletler, dünya barışını korumak ve uluslararası iş birliğini güçlendirmek amacıyla kuruldu.', highlight: 'Genel Kurul bütün üye ülkelerin temsilcilerinden oluşur. Güvenlik Konseyi ise barış, güvenlik ve anlaşmazlıklara çözüm üretme görevleriyle öne çıkar.', logo: '../img/kurumlar/bm.svg' },
  { id: 'dso', short: 'DSÖ', name: 'Dünya Sağlık Örgütü', year: '7 Nisan 1948', center: 'Sağlık alanı', turkey: 'Türkiye 1949’da üye oldu.', purpose: 'İnsanların en yüksek sağlık düzeyine erişmesini sağlamak.', summary: 'Dünya Sağlık Örgütü, sağlık alanında uluslararası dayanışmayı güçlendiren bir kuruluştur.', highlight: 'Kuruluş yıl dönümü olan 7 Nisan, Dünya Sağlık Günü olarak kutlanır.', logo: '../img/kurumlar/dso.svg' },
  { id: 'iit', short: 'İİT', name: 'İslam İşbirliği Teşkilatı', year: '1969', center: 'Cidde', turkey: 'Türkiye kuruluşundan itibaren üyedir.', purpose: 'İslam dünyasının hak ve çıkarlarını korumak, İslam devletleri arasında iş birliği ve dayanışmayı artırmak.', summary: 'İİT, İslam ülkeleri arasında dayanışmayı ve ortak hareket etmeyi hedefleyen bir kuruluştur.', highlight: 'Birleşmiş Milletlerden sonra dünyanın ikinci büyük uluslararası kuruluşu olarak verilir.', logo: '../img/kurumlar/iit.svg' },
  { id: 'fao', short: 'FAO', name: 'Birleşmiş Milletler Gıda ve Tarım Örgütü', year: '1945', center: 'Roma', turkey: 'Türkiye 1948’de üye oldu.', purpose: 'Dünyada açlığı ortadan kaldırmak ve beslenme koşullarını iyileştirmek.', summary: 'FAO, açlıkla mücadele ve tarım alanında destek sağlayan uluslararası bir yapıdır.', highlight: 'Tarım, hayvancılık ve ormancılıkta danışmanlık sağlar. Logosundaki “Fiat Panis” ifadesi “Ekmek Olsun!” anlamına gelir.', logo: '../img/kurumlar/fao.svg' },
  { id: 'unicef', short: 'UNICEF', name: 'Birleşmiş Milletler Çocuklara Yardım Fonu', year: '1946', center: 'New York', turkey: 'Türkiye 1954’te üye oldu.', purpose: 'Çocuk haklarının sağlanması, çocukların temel ihtiyaçlarının karşılanması ve bu konuda farkındalık oluşturmak.', summary: 'UNICEF, çocuk hakları ve çocukların temel ihtiyaçları için çalışan bir kuruluştur.', highlight: 'Bebek ve çocuk ölümlerini azaltma, anne sütü ile beslenme ve bağışıklık gibi alanlarda çalışmalar yapar.', logo: '../img/kurumlar/unicef.svg' },
  { id: 'unesco', short: 'UNESCO', name: 'Birleşmiş Milletler Eğitim, Bilim ve Kültür Teşkilatı', year: '1945', center: 'Paris', turkey: 'Türkiye UNESCO’nun kurucu üyesidir.', purpose: 'Eğitim, bilim ve kültür alanlarında faaliyet yürütmek.', summary: 'UNESCO, eğitim, bilim ve kültür yoluyla uluslararası iş birliğini güçlendiren bir kuruluştur.', highlight: 'Dünya Miras Komitesi aracılığıyla doğal ve kültürel mirasları belirler.', logo: '../img/kurumlar/unesco.svg' },
  { id: 'agit', short: 'AGİT', name: 'Avrupa Güvenlik ve İşbirliği Teşkilatı', year: '1975', center: 'Viyana', turkey: 'Türkiye kurucu üyedir.', purpose: 'Üye ülkelerde demokrasiyi, hukukun üstünlüğünü, insan hak ve özgürlüklerine saygıyı desteklemek.', summary: 'AGİT, güvenlik kadar demokrasi ve insan haklarına da önem veren bir teşkilattır.', highlight: 'Helsinki Nihai Senedi’nde eşitlik, egemenliğe saygı, barışçıl çözüm ve iş birliği vurgulanır.', logo: '../img/kurumlar/agit.svg' },
  { id: 'nato', short: 'NATO', name: 'Kuzey Atlantik Antlaşması Teşkilatı', year: '1949', center: 'Brüksel', turkey: 'Türkiye 1952’de üye oldu.', purpose: 'Üye ülkelerin özgürlüklerini ve güvenliklerini korumak.', summary: 'NATO, ortak savunma ilkesine dayanan askerî bir örgüttür.', highlight: 'Herhangi bir NATO ülkesine yapılan saldırı, bütün NATO’ya yapılmış kabul edilir.', logo: '../img/kurumlar/nato.svg' },
  { id: 'ab', short: 'AB', name: 'Avrupa Birliği', year: 'Ekonomik ve siyasi birlik', center: 'Brüksel', turkey: 'Türkiye tam üyelik sürecindedir.', purpose: 'Üye ülkeler arasında ekonomik ve siyasi örgütlenme kurmak, ortak pazar oluşturmak.', summary: 'Avrupa Birliği, üye ülkeler arasında ekonomik ve siyasi bir örgütlenmedir.', highlight: 'Türkiye 1963’te ortaklık antlaşması imzaladı, 1987’de tam üyelik başvurusunda bulundu, 1999’da aday ülke kabul edildi ve 2005’te tam üyelik görüşmeleri başladı.', logo: '../img/kurumlar/ab.svg' },
  { id: 'turksoy', short: 'TÜRKSOY', name: 'Uluslararası Türk Kültürü Teşkilatı', year: '1993', center: 'Türk dünyası odaklı yapı', turkey: 'Türkiye üyedir.', purpose: 'Türk halklarının gönül birlikteliğini güçlendirmek, ortak Türk kültürünü gelecek nesillere aktarmak ve dünyaya tanıtmak.', summary: 'TÜRKSOY, Türk dünyasının kültürel bağlarını güçlendirmeye çalışan bir kuruluştur.', highlight: 'Üye ülkeler arasında bilim, eğitim, kültür ve sanat alanlarında iş birliğini geliştirir.', logo: '../img/kurumlar/turksoy.svg' },
  { id: 'coe', short: 'CoE', name: 'Avrupa Konseyi', year: '1949', center: 'Strasburg', turkey: 'Türkiye kurucu üyedir.', purpose: 'İnsan hak ve özgürlüklerini korumak, hukukun üstünlüğünü sağlamak ve demokrasi standartlarını geliştirmek.', summary: 'Avrupa Konseyi, insan hakları ve demokrasi standartlarıyla öne çıkan bir kuruluştur.', highlight: 'Avrupa İnsan Hakları Mahkemesi bu yapı bünyesindedir ve kararları üye ülkeler için bağlayıcıdır.', logo: '../img/kurumlar/avrupa-konseyi.svg' }
];

const MATCH_DATA = [
  { id: 'nato', label: 'NATO', pair: 'Bir ülkeye yapılan saldırı bütün örgüte yapılmış sayılır.' },
  { id: 'dso', label: 'DSÖ', pair: 'İnsanların en yüksek sağlık düzeyine erişmesini hedefler.' },
  { id: 'fao', label: 'FAO', pair: 'Açlığı azaltmak ve beslenme koşullarını iyileştirmek için çalışır.' },
  { id: 'unesco', label: 'UNESCO', pair: 'Dünya mirasını eğitim, bilim ve kültür alanlarıyla ilişkilendirir.' },
  { id: 'turksoy', label: 'TÜRKSOY', pair: 'Ortak Türk kültürünü gelecek nesillere aktarmayı amaçlar.' }
];

const TRUE_FALSE_DATA = [
  { text: 'Türkiye, Dünya Sağlık Örgütüne 1949 yılında üye olmuştur.', answer: true, feedback: 'Doğru. Kitapta Türkiye’nin DSÖ’ye 1949’da üye olduğu belirtilir.' },
  { text: 'UNICEF, tarım ve hayvancılık alanında çalışan bir kuruluştur.', answer: false, feedback: 'Yanlış. UNICEF çocuk hakları ve çocukların temel ihtiyaçları için çalışır.' },
  { text: 'Türkiye, AGİT’in kurucu üyelerinden biridir.', answer: true, feedback: 'Doğru. Kitapta Türkiye’nin AGİT’in kurucu üyesi olduğu yazıyor.' },
  { text: 'Avrupa Konseyi ile Avrupa Birliği aynı kuruluştur.', answer: false, feedback: 'Yanlış. Kitapta yakın iş birliği içinde olsalar da birbirinden bağımsız yapılar olduğu vurgulanır.' },
  { text: 'İslam İşbirliği Teşkilatı sadece İslam ülkelerinin üye olduğu bir kuruluştur.', answer: true, feedback: 'Doğru. Kitapta bu kuruluş İslam ülkeleri arasındaki iş birliği ve dayanışma için anlatılır.' }
];

const QUIZ_DATA = [
  { question: 'Birleşmiş Milletlerin temel amacı nedir?', options: ['Sadece askeri ittifak kurmak', 'Dünya barışını ve güven ortamını korumak', 'Yalnızca Avrupa ülkelerini yönetmek', 'Sadece çocuk haklarıyla ilgilenmek'], answer: 1, feedback: 'Doğru cevap: Dünya barışını ve güven ortamını korumaktır.' },
  { question: 'Dünya Sağlık Örgütü hangi alanda çalışır?', options: ['Sağlık', 'Kültür', 'Gıda', 'Savunma'], answer: 0, feedback: 'DSÖ, insanların en yüksek sağlık düzeyine erişmesini sağlamayı amaçlar.' },
  { question: 'İslam dünyasının hak ve çıkarlarını korumak amacıyla kurulan kuruluş hangisidir?', options: ['UNESCO', 'AGİT', 'İİT', 'AB'], answer: 2, feedback: 'Bu kuruluş İslam İşbirliği Teşkilatıdır.' },
  { question: '“Fiat Panis” ifadesi hangi kuruluşun logosunda yer alır?', options: ['FAO', 'NATO', 'UNICEF', 'TÜRKSOY'], answer: 0, feedback: '“Fiat Panis”, FAO logosunda yer alır ve “Ekmek Olsun!” anlamına gelir.' },
  { question: 'Çocuk hakları ve çocukların temel ihtiyaçları için çalışan kuruluş hangisidir?', options: ['UNICEF', 'BM', 'DSÖ', 'CoE'], answer: 0, feedback: 'UNICEF çocuk haklarıyla öne çıkan kuruluştur.' },
  { question: 'Türkiye’nin kurucu üye olduğu ve Dünya Miras Komitesi ile bilinen kuruluş hangisidir?', options: ['UNESCO', 'AB', 'NATO', 'FAO'], answer: 0, feedback: 'UNESCO’nun kurucu üyelerinden biri Türkiye’dir.' },
  { question: '“Bir NATO ülkesine yapılan saldırı bütün NATO’ya yapılmış sayılır.” ifadesi hangi kuruluşun özelliğidir?', options: ['AGİT', 'NATO', 'AB', 'BM'], answer: 1, feedback: 'Bu ortak savunma ilkesi NATO için geçerlidir.' },
  { question: 'Avrupa İnsan Hakları Mahkemesi hangi yapı bünyesinde yer alır?', options: ['Avrupa Birliği', 'Avrupa Konseyi', 'AGİT', 'UNESCO'], answer: 1, feedback: 'Avrupa İnsan Hakları Mahkemesi Avrupa Konseyi bünyesindedir.' }
];

let selectedOrgId = 'bm';
let matchSelection = { left: null, right: null };
let matchedIds = new Set();
let quizState = new Array(QUIZ_DATA.length).fill(null);
let quizCompleted = false;
let quizScore = 0;

function updateProgress() {
  const sections = Array.from(document.querySelectorAll('[data-step]'));
  const current = sections.reduce((best, section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.35) return Number(section.dataset.step);
    return best;
  }, 1);
  const percent = Math.round(((current - 1) / (sections.length - 1)) * 100);
  document.getElementById('uk-progress-bar').style.width = `${percent}%`;
  document.getElementById('uk-progress-text').textContent = `${percent}%`;
}

function initOpinionButtons() {
  const feedback = document.getElementById('opinion-feedback');
  document.querySelectorAll('[data-opinion]').forEach(button => {
    button.addEventListener('click', () => {
      const isAgree = button.dataset.opinion === 'katiliyorum';
      feedback.textContent = isAgree
        ? 'Güçlü bir ülke bile salgın, açlık, güvenlik ya da kültürel miras gibi konularda başka ülkelerle iş birliği yapmak zorunda kalabilir.'
        : 'İlk bakışta öyle görünse de kitapta göreceğimiz gibi sağlık, güvenlik, çocuk hakları ve kültürel miras gibi alanlarda tek başına hareket etmek çoğu zaman yetmez.';
      document.querySelectorAll('[data-opinion]').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
    });
  });
}

function initConceptCards() {
  document.querySelectorAll('.uk-concept-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('is-open'));
  });
}

function renderOrgList() {
  const list = document.getElementById('org-list');
  list.innerHTML = ORG_DATA.map(org => `
    <button type="button" class="uk-org-btn${org.id === selectedOrgId ? ' is-active' : ''}" data-org-id="${org.id}">
      <span class="uk-org-chip"><img src="${org.logo}" alt="${org.name} logosu" onerror="this.remove(); this.parentElement.textContent='${org.short}'" /></span>
      <span class="uk-org-btn-copy"><strong>${org.short}</strong><span>${org.name}</span></span>
    </button>
  `).join('');
  list.querySelectorAll('[data-org-id]').forEach(button => {
    button.addEventListener('click', () => {
      selectedOrgId = button.dataset.orgId;
      renderOrgList();
      renderOrgDetail();
    });
  });
}

function renderOrgDetail() {
  const org = ORG_DATA.find(item => item.id === selectedOrgId);
  const logo = document.getElementById('org-logo');
  const fallback = document.getElementById('org-logo-fallback');
  document.getElementById('org-name').textContent = org.name;
  document.getElementById('org-summary').textContent = org.summary;
  document.getElementById('org-year').textContent = org.year;
  document.getElementById('org-center').textContent = org.center;
  document.getElementById('org-turkey').textContent = org.turkey;
  document.getElementById('org-purpose').textContent = org.purpose;
  document.getElementById('org-highlight').textContent = org.highlight;
  logo.hidden = false;
  fallback.hidden = true;
  logo.src = org.logo;
  logo.alt = `${org.name} logosu`;
  logo.onerror = () => {
    logo.hidden = true;
    fallback.hidden = false;
    fallback.textContent = org.short;
  };
}

function shuffle(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function updateMatchStatus() {
  const status = document.getElementById('match-status');
  status.textContent = matchedIds.size === MATCH_DATA.length ? 'Harika. Tüm eşleştirmeleri tamamladın.' : `${MATCH_DATA.length - matchedIds.size} eşleştirme kaldı.`;
}

function renderMatchGame() {
  document.getElementById('match-orgs').innerHTML = MATCH_DATA.map(item => `<button type="button" class="uk-match-card${matchedIds.has(item.id) ? ' is-matched' : ''}" data-match-side="left" data-match-id="${item.id}">${item.label}</button>`).join('');
  document.getElementById('match-facts').innerHTML = shuffle(MATCH_DATA).map(item => `<button type="button" class="uk-match-card${matchedIds.has(item.id) ? ' is-matched' : ''}" data-match-side="right" data-match-id="${item.id}">${item.pair}</button>`).join('');
  document.querySelectorAll('[data-match-side]').forEach(button => button.addEventListener('click', () => handleMatchSelection(button)));
  updateMatchStatus();
}

function handleMatchSelection(button) {
  const side = button.dataset.matchSide;
  const id = button.dataset.matchId;
  if (matchedIds.has(id)) return;
  document.querySelectorAll(`.uk-match-card[data-match-side="${side}"]`).forEach(item => item.classList.remove('is-selected'));
  button.classList.add('is-selected');
  matchSelection[side] = id;
  if (matchSelection.left && matchSelection.right) {
    if (matchSelection.left === matchSelection.right) {
      matchedIds.add(id);
      setTimeout(() => {
        matchSelection = { left: null, right: null };
        renderMatchGame();
      }, 220);
    } else {
      document.getElementById('match-status').textContent = 'Bu eşleşme olmadı. Bir kez daha dene.';
      setTimeout(() => {
        matchSelection = { left: null, right: null };
        document.querySelectorAll('.uk-match-card').forEach(item => item.classList.remove('is-selected'));
        updateMatchStatus();
      }, 600);
    }
  }
}

function renderTrueFalse() {
  const container = document.getElementById('truefalse-list');
  container.innerHTML = TRUE_FALSE_DATA.map((item, index) => `
    <article class="uk-tf-card">
      <p class="uk-mini-label">Soru ${index + 1}</p>
      <h3>${item.text}</h3>
      <div class="uk-tf-actions">
        <button type="button" class="uk-tf-choice" data-tf-index="${index}" data-tf-value="true">Doğru</button>
        <button type="button" class="uk-tf-choice" data-tf-index="${index}" data-tf-value="false">Yanlış</button>
      </div>
      <p class="uk-feedback" id="tf-feedback-${index}"></p>
    </article>
  `).join('');
  container.querySelectorAll('[data-tf-index]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.tfIndex);
      const userValue = button.dataset.tfValue === 'true';
      const item = TRUE_FALSE_DATA[index];
      const choices = container.querySelectorAll(`[data-tf-index="${index}"]`);
      choices.forEach(choice => {
        choice.disabled = true;
        if ((choice.dataset.tfValue === 'true') === item.answer) choice.classList.add('is-correct');
      });
      if (userValue !== item.answer) button.classList.add('is-wrong');
      document.getElementById(`tf-feedback-${index}`).textContent = item.feedback;
    });
  });
}

function updateQuizSummary() {
  if (quizState.some(answer => answer === null)) return;
  quizScore = quizState.reduce((total, answer, index) => total + (answer === QUIZ_DATA[index].answer ? 1 : 0), 0);
  const percent = Math.round((quizScore / QUIZ_DATA.length) * 100);
  quizCompleted = true;
  const summary = document.getElementById('quiz-summary');
  summary.hidden = false;
  document.getElementById('quiz-score').textContent = `${percent} / 100`;
  let message = 'Konuyu yeniden gözden geçirirsen çok daha iyi olacak.';
  if (percent >= 90) message = 'Mükemmel. Konudaki kuruluşları çok iyi öğrenmiş görünüyorsun.';
  else if (percent >= 70) message = 'Güzel sonuç. Ana kavramları ve kuruluşları büyük ölçüde kavradın.';
  else if (percent >= 50) message = 'Temel fikri yakaladın. Kuruluş kartlarını bir kez daha incelemek iyi olabilir.';
  document.getElementById('quiz-message').textContent = message;
}

function renderQuiz() {
  const container = document.getElementById('quiz-list');
  container.innerHTML = QUIZ_DATA.map((item, index) => `
    <article class="uk-quiz-card">
      <p class="uk-mini-label">Test Sorusu ${index + 1}</p>
      <h3>${item.question}</h3>
      <div class="uk-option-list">
        ${item.options.map((option, optionIndex) => `<button type="button" class="uk-option-btn" data-quiz-index="${index}" data-option-index="${optionIndex}">${option}</button>`).join('')}
      </div>
      <p class="uk-feedback" id="quiz-feedback-${index}"></p>
    </article>
  `).join('');
  container.querySelectorAll('[data-quiz-index]').forEach(button => {
    button.addEventListener('click', () => {
      const qIndex = Number(button.dataset.quizIndex);
      const optionIndex = Number(button.dataset.optionIndex);
      if (quizState[qIndex] !== null) return;
      quizState[qIndex] = optionIndex;
      const question = QUIZ_DATA[qIndex];
      const siblings = container.querySelectorAll(`[data-quiz-index="${qIndex}"]`);
      siblings.forEach(sibling => {
        sibling.disabled = true;
        if (Number(sibling.dataset.optionIndex) === question.answer) sibling.classList.add('is-correct');
      });
      if (optionIndex !== question.answer) button.classList.add('is-wrong');
      document.getElementById(`quiz-feedback-${qIndex}`).textContent = question.feedback;
      updateQuizSummary();
    });
  });
}

function initCertificate() {
  document.getElementById('build-certificate').addEventListener('click', () => {
    const name = document.getElementById('student-name').value.trim() || 'Öğrenci';
    document.getElementById('certificate-name').textContent = name;
    document.getElementById('certificate-score').textContent = quizCompleted ? `${Math.round((quizScore / QUIZ_DATA.length) * 100)} / 100` : 'Test bekleniyor';
    let message = 'Önce test bölümünü tamamla, sonra bu ekran puanına göre kişiselleşsin.';
    if (quizCompleted) {
      const percent = Math.round((quizScore / QUIZ_DATA.length) * 100);
      if (percent >= 90) message = `${name}, konuyu çok güçlü bir başarıyla tamamladı.`;
      else if (percent >= 70) message = `${name}, konuyu başarıyla tamamladı.`;
      else message = `${name}, konuyu tamamladı ve tekrar ederek daha da güçlenebilir.`;
    }
    document.getElementById('certificate-message').textContent = message;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initOpinionButtons();
  initConceptCards();
  renderOrgList();
  renderOrgDetail();
  renderMatchGame();
  renderTrueFalse();
  renderQuiz();
  initCertificate();
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
});
