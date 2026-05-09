const fs = require('fs');

const file = 'yapay-zeka/ai-en-cok-kullanan-ogrenci.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Convert "1. Bilişsel Çöküş" style lines to <h3>
html = html.replace(/<p class="reveal">(\d\.\s[^<]+)<\/p>/g, '<h3 class="reveal" style="color: var(--clr-teal); margin-top: 1.5rem;">$1</h3>');

// 2. Bold important sentences/phrases
const boldReplacements = [
    { target: "şu anda yapay zekanın eğitimdeki riskleri faydalarını gölgeliyor", replacement: "<strong>şu anda yapay zekanın eğitimdeki riskleri faydalarını gölgeliyor</strong>" },
    { target: "Görünür faydalar var:", replacement: "<strong>Görünür faydalar var:</strong>" },
    { target: "Görünmez riskler:", replacement: "<strong>Görünmez riskler:</strong>" },
    { target: "Eğitimin Fast Food'u", replacement: "<strong>Eğitimin Fast Food'u</strong>" },
    { target: "Çocuğun beyni yeniden bağlanmıyor artık; çözülüyor.", replacement: "<strong>Çocuğun beyni yeniden bağlanmıyor artık; çözülüyor.</strong>" },
    { target: "AI kullanımı ile eleştirel düşünme becerisi arasında r = +0.72 oranında bir korelasyon", replacement: "<strong>AI kullanımı ile eleştirel düşünme becerisi arasında r = +0.72 oranında bir korelasyon</strong>" },
    { target: "botlar her zaman yanıt veriyor, asla kırılmıyor, hep onaylıyor", replacement: "<strong>botlar her zaman yanıt veriyor, asla kırılmıyor, hep onaylıyor</strong>" },
    { target: "aynı soruyu, aynı saniyede.", replacement: "<strong>aynı soruyu, aynı saniyede.</strong>" },
    { target: "her ayakta bir &quot;asıl-vekil sorunu&quot; çıkıyor.", replacement: "<strong>her ayakta bir &quot;asıl-vekil sorunu&quot; çıkıyor.</strong>" },
    { target: "YZ'nin çıktılarına sorgusuz güvenmeleri", replacement: "<strong>YZ'nin çıktılarına sorgusuz güvenmeleri</strong>" },
    { target: "kalıcı dijital iz (eternal footprint", replacement: "<strong>kalıcı dijital iz (eternal footprint</strong>" },
    { target: "teknoloji eşitleyici bir güç olarak gelmiyor; ulaştığı yerde belirli bir maliyet bırakıyor", replacement: "<strong>teknoloji eşitleyici bir güç olarak gelmiyor; ulaştığı yerde belirli bir maliyet bırakıyor</strong>" },
    { target: "Bu döngü kendi kendine kırılmaz. Dışarıdan sistematik bir &quot;Dijital Kalkan&quot; müdahalesi şart.", replacement: "<strong>Bu döngü kendi kendine kırılmaz. Dışarıdan sistematik bir &quot;Dijital Kalkan&quot; müdahalesi şart.</strong>" },
    { target: "Zayıflatan AI (Diminishing):", replacement: "<strong>Zayıflatan AI (Diminishing):</strong>" },
    { target: "Zenginleştiren AI (Enriching):", replacement: "<strong>Zenginleştiren AI (Enriching):</strong>" },
    { target: "Kabul Edilebilir Kullanım Politikaları (AUP):", replacement: "<strong>Kabul Edilebilir Kullanım Politikaları (AUP):</strong>" },
    { target: "Güvenli tedarik kontrol listesi:", replacement: "<strong>Güvenli tedarik kontrol listesi:</strong>" },
    { target: "dijital detoks", replacement: "<strong>dijital detoks</strong>" },
    { target: "farkındalık geliştirme", replacement: "<strong>farkındalık geliştirme</strong>" },
    { target: "gizlilik elçileri", replacement: "<strong>gizlilik elçileri</strong>" },
    { target: "Eğitim, sadece bilgi aktarımı değil; empati, sabır ve zorluklarla baş çıkmayı gerektiren tamamen insani bir süreçtir.", replacement: "<strong>Eğitim, sadece bilgi aktarımı değil; empati, sabır ve zorluklarla baş çıkmayı gerektiren tamamen insani bir süreçtir.</strong>" }
];

for (const { target, replacement } of boldReplacements) {
    html = html.replace(target, replacement);
}

fs.writeFileSync(file, html);
console.log('Format applied.');
