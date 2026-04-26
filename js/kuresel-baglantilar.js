const CONNECTION_DATA = {
  salgin: {
    title: 'Salgın',
    text: 'Bir hastalık hızla yayıldığında hiçbir ülke “ben kapımı kapattım, bitti” diyemez. İlaç, aşı, bilgi paylaşımı ve ortak sağlık politikaları olmadan mücadele eksik kalır.',
    tags: ['Sağlık bilgisi', 'Ortak önlem', 'Dayanışma']
  },
  iklim: {
    title: 'İklim krizi',
    text: 'Bir ülkedeki sanayi faaliyeti başka bir bölgenin havasını, suyunu ve tarımını etkileyebilir. Bu yüzden çevre meselesi sadece yerel değil, küresel bir başlıktır.',
    tags: ['Ortak hedef', 'Temiz enerji', 'Gelecek planı']
  },
  deprem: {
    title: 'Büyük deprem',
    text: 'Doğal afetler sonrasında arama kurtarma ekipleri, insani yardım ve teknik destek çoğu zaman ülkeler arası iş birliğiyle büyür ve hızlanır.',
    tags: ['İnsani yardım', 'Teknik destek', 'Hızlı koordinasyon']
  },
  ekonomi: {
    title: 'Ekonomik dalga',
    text: 'Bir bölgede yaşanan üretim sorunu, enerji krizi veya ulaşım sıkıntısı başka ülkelerde fiyatları ve ticareti etkileyebilir. Ekonomi görünmez bağlarla ilerler.',
    tags: ['Ticaret ağı', 'Enerji', 'Karşılıklı etki']
  }
};

const ORG_DATA = {
  bm: {
    kicker: 'Küresel masa',
    title: 'Birleşmiş Milletler',
    description: 'Ülkelerin savaş, barış, insan hakları ve ortak sorunlar üzerine konuştuğu en geniş uluslararası platformlardan biridir.',
    why: 'Barış, diplomasi ve uluslararası iş birliğinde söz sahibi olmak için.',
    student: 'Bazen konuşmak, çatışmaktan daha güçlüdür.',
    memory: 'Tek başına karar vermek yerine ortak masa kurmak küresel siyasetin temelidir.'
  },
  unesco: {
    kicker: 'Kültürel miras',
    title: 'UNESCO',
    description: 'Eğitim, bilim ve kültür alanında iş birliği kurar; dünya mirasını koruma konusunda öne çıkar.',
    why: 'Kültürel mirasımızı tanıtmak ve korumak için uluslararası destek sağlar.',
    student: 'Bir eser sadece taş değildir; geçmişten gelen ortak hafızadır.',
    memory: 'Göbeklitepe gibi alanlar evrensel değer taşıdığı için tüm dünyanın ilgisini çeker.'
  },
  unicef: {
    kicker: 'Çocuk odaklı',
    title: 'UNICEF',
    description: 'Çocukların sağlık, eğitim, güvenlik ve temel haklara erişimi için çalışan uluslararası bir yapıdır.',
    why: 'Çocukların korunması ve desteklenmesi konusunda ortak projeler üretilebilir.',
    student: 'Çocuk hakları sadece bir ülkenin değil, insanlığın meselesidir.',
    memory: 'Bir çocuğun iyi yaşaması, geleceğin daha güçlü olması demektir.'
  },
  nato: {
    kicker: 'Güvenlik hattı',
    title: 'NATO',
    description: 'Üye ülkeler arasında güvenlik ve savunma iş birliği oluşturmayı amaçlayan bir ittifaktır.',
    why: 'Bölgesel güvenlikte ortak hareket etme ve savunma iş birliği için önemlidir.',
    student: 'Bazı konularda ülkeler tek başına değil, birlikte caydırıcı olur.',
    memory: 'Uluslararası ilişkilerde güvenlik de en az ekonomi kadar bağlantılıdır.'
  }
};

const ECONOMY_DATA = {
  tarim: {
    meter: 'Bağlantı düzeyi: Yüksek',
    title: 'Tarım',
    text: 'Türkiye bazı tarım ürünlerini ihraç ederken bazı ürünlerde dış alım da yapabilir. Bu durum mevsim, üretim miktarı, fiyat ve ihtiyaçlara göre değişir.',
    points: [
      { title: 'İhracat fikri', text: 'Meyve, sebze ve işlenmiş gıda ürünleri farklı pazarlara ulaşabilir.' },
      { title: 'Bağımlılık riski', text: 'Kuraklık veya üretim düşüşü olduğunda dış bağlantılar daha önemli hale gelir.' },
      { title: 'Sınıf sorusu', text: 'Bir ürün sadece bizde yetişiyorsa bu avantajı nasıl kullanırız?' }
    ]
  },
  sanayi: {
    meter: 'Bağlantı düzeyi: Çok yüksek',
    title: 'Sanayi',
    text: 'Bir fabrikanın ürettiği ürünün ham maddesi bir ülkeden, parçaları başka bir ülkeden, pazarı ise bambaşka bir bölgeden gelebilir.',
    points: [
      { title: 'Üretim zinciri', text: 'Tek bir ürünün arkasında birçok ülkenin emeği olabilir.' },
      { title: 'Fırsat', text: 'Kaliteli üretim yapan ülke küresel pazarda daha güçlü yer bulur.' },
      { title: 'Sınıf sorusu', text: 'Bir parçanın gelmediği durumda üretim neden durabilir?' }
    ]
  },
  turizm: {
    meter: 'Bağlantı düzeyi: Canlı',
    title: 'Turizm',
    text: 'Ülkeler sadece mal değil, insan hareketliliğiyle de birbirine bağlanır. Turizm kültürel tanıtım ve ekonomik gelir sağlar.',
    points: [
      { title: 'Tanıtım etkisi', text: 'Bir turist deneyimi, ülke hakkında olumlu ya da olumsuz algı oluşturabilir.' },
      { title: 'Gelir katkısı', text: 'Ulaşım, konaklama ve yerel ürünler ekonomik hareketlilik üretir.' },
      { title: 'Sınıf sorusu', text: 'Turizm neden sadece gezi değil, aynı zamanda ekonomi konusudur?' }
    ]
  },
  enerji: {
    meter: 'Bağlantı düzeyi: Stratejik',
    title: 'Enerji',
    text: 'Enerji kaynakları her ülkede aynı ölçüde bulunmaz. Bu yüzden ülkeler enerji alımı, geçiş yolları ve anlaşmalar üzerinden yakın ilişki kurar.',
    points: [
      { title: 'Gerçek bağlantı', text: 'Enerji hatları ve anlaşmalar dış politikayı da etkiler.' },
      { title: 'Risk', text: 'Tek kaynağa bağlı kalmak kırılganlık oluşturabilir.' },
      { title: 'Sınıf sorusu', text: 'Enerji çeşitliliği neden bir güvenlik konusu gibi düşünülür?' }
    ]
  }
};

const SOLUTION_DATA = {
  iklim: {
    title: 'İklim değişikliği',
    text: 'Bu sorun sadece bir ülkenin fabrikalarını azaltmasıyla çözülmez; enerji, tüketim ve bilinç aynı anda değişmelidir.',
    personal: ['Enerji ve su tüketimini azaltabilir.', 'Geri dönüşüm alışkanlığı geliştirebilir.'],
    school: ['Atık ayrıştırma sistemi kurabilir.', 'İklim farkındalığı çalışmaları yapabilir.'],
    country: ['Uluslararası çevre anlaşmalarına katılabilir.', 'Temiz enerji yatırımlarını artırabilir.'],
    reflection: 'Sınıfta tartış: Bir sorun küreselse, çözümü neden sadece bireye bırakmak yetmez?'
  },
  goc: {
    title: 'Göç ve uyum',
    text: 'Göç sadece sınır geçişi değildir; eğitim, güvenlik, barınma ve toplumsal uyum gibi birçok alanı etkiler.',
    personal: ['Önyargı yerine empati geliştirebilir.', 'Farklı kültürleri tanımaya açık olabilir.'],
    school: ['Uyum etkinlikleri ve ortak projeler planlayabilir.', 'Dışlayıcı dile karşı sınıf kuralları oluşturabilir.'],
    country: ['Uluslararası hukuk çerçevesinde politika geliştirebilir.', 'İnsani destek ve uyum programları hazırlayabilir.'],
    reflection: 'Sınıfta tartış: Güvenlik ile insan hakları arasında denge kurmak neden zordur?'
  },
  yoksulluk: {
    title: 'Yoksulluk',
    text: 'Yoksulluk bir ülkenin iç sorunu gibi görünse de eğitim, ticaret, savaş ve doğal afetlerle küresel bir boyuta taşınabilir.',
    personal: ['İsrafı azaltabilir.', 'Paylaşım ve sosyal sorumluluk çalışmalarına katılabilir.'],
    school: ['Dayanışma kampanyaları düzenleyebilir.', 'Eşitsizlik üzerine farkındalık etkinlikleri yapabilir.'],
    country: ['Eğitim ve istihdam yatırımlarını güçlendirebilir.', 'Uluslararası kalkınma programlarında yer alabilir.'],
    reflection: 'Sınıfta tartış: Yardım etmekle kalıcı çözüm üretmek arasında nasıl bir fark vardır?'
  },
  afet: {
    title: 'Doğal afetler',
    text: 'Deprem, sel ve yangın gibi afetlerde hazırlık, hızlı müdahale ve uluslararası dayanışma birlikte düşünülmelidir.',
    personal: ['Afet çantası ve temel hazırlık bilgisi öğrenebilir.', 'Panik yerine planlı hareket etmeyi çalışabilir.'],
    school: ['Tatbikatlar yapabilir.', 'Güvenli toplanma ve iletişim planı oluşturabilir.'],
    country: ['Erken uyarı sistemlerini geliştirebilir.', 'Uluslararası arama kurtarma iş birlikleri kurabilir.'],
    reflection: 'Sınıfta tartış: Afet yönetiminde “hazırlık” mı yoksa “müdahale” mi daha belirleyicidir?'
  }
};

function renderTagRow(container, tags) {
  container.innerHTML = tags.map(tag => `<span>${tag}</span>`).join('');
}

function renderEconomyPoints(container, points) {
  container.innerHTML = points.map(point => `
    <article>
      <strong>${point.title}</strong>
      <p>${point.text}</p>
    </article>
  `).join('');
}

function renderList(container, items) {
  container.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function initConnectionChoices() {
  const buttons = document.querySelectorAll('[data-connection-choice]');
  const title = document.getElementById('connection-title');
  const text = document.getElementById('connection-text');
  const tags = document.getElementById('connection-tags');
  if (!buttons.length || !title || !text || !tags) return;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const data = CONNECTION_DATA[button.dataset.connectionChoice];
      if (!data) return;

      buttons.forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      title.textContent = data.title;
      text.textContent = data.text;
      renderTagRow(tags, data.tags);
    });
  });
}

function initOrganizationPanel() {
  const buttons = document.querySelectorAll('[data-org]');
  if (!buttons.length) return;

  const kicker = document.getElementById('org-kicker');
  const title = document.getElementById('org-title');
  const description = document.getElementById('org-description');
  const why = document.getElementById('org-why');
  const student = document.getElementById('org-student');
  const memory = document.getElementById('org-memory');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const data = ORG_DATA[button.dataset.org];
      if (!data) return;

      buttons.forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      kicker.textContent = data.kicker;
      title.textContent = data.title;
      description.textContent = data.description;
      why.textContent = data.why;
      student.textContent = data.student;
      memory.textContent = data.memory;
    });
  });
}

function initEconomySelector() {
  const buttons = document.querySelectorAll('[data-economy]');
  if (!buttons.length) return;

  const meter = document.getElementById('economy-meter');
  const title = document.getElementById('economy-title');
  const text = document.getElementById('economy-text');
  const points = document.getElementById('economy-points');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const data = ECONOMY_DATA[button.dataset.economy];
      if (!data) return;

      buttons.forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      meter.textContent = data.meter;
      title.textContent = data.title;
      text.textContent = data.text;
      renderEconomyPoints(points, data.points);
    });
  });
}

function initFlipCards() {
  document.querySelectorAll('[data-flip-card]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
}

function initSolutionStudio() {
  const buttons = document.querySelectorAll('[data-solution]');
  if (!buttons.length) return;

  const title = document.getElementById('solution-title');
  const text = document.getElementById('solution-text');
  const personal = document.getElementById('solution-personal');
  const school = document.getElementById('solution-school');
  const country = document.getElementById('solution-country');
  const reflection = document.getElementById('solution-reflection');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const data = SOLUTION_DATA[button.dataset.solution];
      if (!data) return;

      buttons.forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      title.textContent = data.title;
      text.textContent = data.text;
      renderList(personal, data.personal);
      renderList(school, data.school);
      renderList(country, data.country);
      reflection.textContent = data.reflection;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initConnectionChoices();
  initOrganizationPanel();
  initEconomySelector();
  initFlipCards();
  initSolutionStudio();
});
