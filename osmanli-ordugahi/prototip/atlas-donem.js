const model = document.getElementById('model');
const viewer = document.querySelector('.viewer');
const unitList = document.getElementById('unitList');
const referenceImage = document.getElementById('referenceImage');
const equipment = document.getElementById('equipment');
const popup = document.getElementById('popup');
const noModelPanel = document.getElementById('noModelPanel');
const modelVariants = document.getElementById('modelVariants');const branchTabs = document.getElementById('branchTabs');
const modelLoadingCover = document.getElementById('modelLoadingCover');
const query = new URLSearchParams(location.search);
const editorEnabled = query.get('edit') === '1';
const draftMode = query.get('taslak') === '1';
const assetVersion = query.get('surum') || '23';
if (draftMode) document.body.classList.add('draft-mode');
const icons = {yeniceri:'Y', yeniceriAgasi:'YA', topcu:'T', lagimci:'L', sipahi:'S', acemi:'A', cebeci:'C', topArabacilari:'TA', cebelu:'CB', ulufeciler:'U', garipler:'G', mehterhane:'M'};

let units = {};let unitOrder = [];let records = {};let objectOrder = [];
let currentForce = 'tumu';
let currentKey = '';
let currentUnit = null;
let currentPeriod = null;
let pointerStart = null;
let pendingCamera = null;
let currentModelVariantIndex = 0;
let currentModelVariant = null;
let modelLoadTimer = null;
let renderedPoints = [];
let hotspotsVisible = true;
const measurements = [];
const MISSING_TEXT = '—';

const setText = (id, value = '') => {
  const node = document.getElementById(id);
  if (node) node.textContent = value || '';
};

function periodFor(unit, key = 'klasik') {
  return unit.donemler.find(period => period.anahtar === key) || unit.donemler.find(period => period.hazir);
}

function forceKey(unit){if(unit&&unit.kayitTuru==='nesne')return unit.grup==='gemiler'?'gemiler':'silahlar';var p=unit&&unit.teskilatYolu||[];if(p[0]==='Deniz Kuvvetleri')return'deniz';if(p[1]==='Eyalet Kuvvetleri')return'eyalet';if(p[1]==='Yardımcı Kuvvetler')return'yardimci';if(p[1]==='Saray ve Ordu Hizmetleri')return'saray';return'kapikulu';}
function branchGroup(unit) {
  const path = unit?.teskilatYolu || [], second = path[1] || path[0] || '';
  if (path[0] === 'Deniz Kuvvetleri') return 'Deniz Kuvvetleri';
  if (second === 'Yardımcı Kuvvetler') return 'Yardımcı Kuvvetler';
  if (second === 'Saray ve Ordu Hizmetleri') return 'Saray ve Ordu Hizmetleri';
  return 'Kara Ordusu';
}
function renderUnitList(filter){filter=filter||currentForce;currentForce=filter;var objects=filter==='gemiler'||filter==='silahlar';var pool=objects?objectOrder:unitOrder;var visible=filter==='tumu'?unitOrder:pool.filter(function(k){return forceKey(records[k])===filter;});unitList.replaceChildren.apply(unitList,visible.map(function(k){return unitButton(k,records[k]);}));unitList.querySelectorAll('.unit').forEach(function(b){b.classList.toggle('active',b.dataset.unit===currentKey);});}
function renderBranchTabs(){var labels={tumu:'Tümü',kapikulu:'Kapıkulu',eyalet:'Eyalet',deniz:'Deniz',yardimci:'Yardımcı',saray:'Saray/ordu',gemiler:'Gemiler',silahlar:'Silah ve teçhizat'};var discovered=Array.from(new Set(unitOrder.map(function(k){return forceKey(units[k]);})));var keys=['tumu'].concat(['kapikulu','eyalet','deniz','yardimci','saray'].filter(function(k){return discovered.includes(k);})).concat(['gemiler','silahlar']);branchTabs.replaceChildren.apply(branchTabs,keys.map(function(k){var b=document.createElement('button');b.type='button';b.className='branch-tab force-filter-'+k;b.role='tab';b.textContent=labels[k];b.setAttribute('aria-label',labels[k]+' kayıtlarını göster');b.setAttribute('aria-selected',String(k===currentForce));b.addEventListener('click',function(){currentForce=k;renderBranchTabs();renderUnitList(k);});return b;}));}
function transitionContent(update) {
  const workspace = document.querySelector('.workspace');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { update(); return; }
  workspace.classList.add('is-fading');
  setTimeout(() => { update(); requestAnimationFrame(() => workspace.classList.remove('is-fading')); }, 75);
}function unitButton(key,unit){var b=document.createElement('button');b.className='unit force-'+forceKey(unit);b.dataset.unit=key;b.innerHTML='<span class="uicon">'+(icons[key]||unit.ad[0])+'</span><span><b>'+unit.ad+'</b><small>'+unit.sinif+'</small></span>';b.setAttribute('aria-label',unit.ad);b.addEventListener('click',function(){selectUnit(key);});return b;}

function renderTree(path) {
  const tree = document.getElementById('tree');
  tree.replaceChildren(...path.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }));
}

function renderPeriods(unit, selectedKey) {
  const picker = document.getElementById('periodPicker');
  picker.replaceChildren(...unit.donemler.map(period => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'period-option';
    button.disabled = !period.hazir;
    button.classList.toggle('active', period.anahtar === selectedKey);
    button.innerHTML = `<b>${period.ad}</b><span>${period.araliq}</span>`;
    if (!period.hazir) {
      button.title = 'Bu dönem için kaynak çalışması sürüyor';
      button.setAttribute('aria-label', `${period.ad}, ${period.araliq}. Bu dönem için kaynak çalışması sürüyor.`);
    } else {
      button.addEventListener('click', () => selectPeriod(period.anahtar));
    }
    return button;
  }));
}

function clearHotspots() {
  model.querySelectorAll('.hot').forEach(node => node.remove());
}

function setPoint(button, point, index) {
  button.slot = `hotspot-${index + 1}`;
  button.dataset.position = point.position;
  button.dataset.normal = point.normal;
  button.setAttribute('data-position', point.position);
  button.setAttribute('data-normal', point.normal);
  button.setAttribute('aria-label', `${index + 1}. ${point.ad}: açıklamayı aç`);
}

function renderPoints(points = []) {
  clearHotspots();
  equipment.replaceChildren();
  renderedPoints = points.filter(point => point.koordinatDurumu !== 'kaldirildi' && ['position','normal','cameraTarget','cameraOrbit'].every(field => String(point[field] || '').trim()));
  renderedPoints.forEach((point, index) => {
    const hot = document.createElement('button');
    hot.className = 'hot'; hot.textContent = index + 1;
    setPoint(hot, point, index);
    hot.addEventListener('click', event => { event.stopPropagation(); showPoint(index); });
    model.appendChild(hot);
    const item = document.createElement('button');
    item.className = 'eq';
    item.innerHTML = '<b>' + (index + 1) + ' · ' + point.ad + '</b><span>' + point.tur + '</span>';
    item.addEventListener('click', () => showPoint(index));
    equipment.appendChild(item);
  });
  const section = document.getElementById('equipmentSection');
  if (section) section.hidden = renderedPoints.length === 0;
  const toggle = document.getElementById('hotspotToggle');
  toggle.hidden = renderedPoints.length === 0;
  viewer.classList.toggle('hotspots-hidden', !hotspotsVisible);
}
function showPoint(index) {
  const point = renderedPoints[index];
  if (!point || !String(point.position || '').trim() || !String(point.cameraTarget || '').trim() || !String(point.cameraOrbit || '').trim() || currentModelVariant?.kind !== 'model' || periodModelOptions(currentPeriod).length === 0) return;
  setText('popupNumber', index + 1);
  setText('popupKind', point.tur);
  setText('popupTitle', point.ad);
  setText('popupText', point.aciklama);
  setText('popupTrust', point.guvenNotu);
  const trust = document.getElementById('trustDetails');
  trust.hidden = !point.guvenNotu;
  trust.open = false;
  popup.classList.add('open');
  model.cameraTarget = point.cameraTarget;
  model.cameraOrbit = point.cameraOrbit;
  model.fieldOfView = '30deg';
  model.querySelectorAll('.hot').forEach((hot, i) => hot.classList.toggle('active', i === index));
}

document.getElementById('hotspotToggle').addEventListener('click', function () {
  hotspotsVisible = !hotspotsVisible;
  viewer.classList.toggle('hotspots-hidden', !hotspotsVisible);
  this.textContent = hotspotsVisible ? 'Numaraları gizle' : 'Numaraları göster';
  this.setAttribute('aria-pressed', String(hotspotsVisible));
  if (!hotspotsVisible) popup.classList.remove('open');
});

function periodModelOptions(period) {
  if (!period) return [];
  if (Array.isArray(period.modelVaryantlari) && period.modelVaryantlari.length) return period.modelVaryantlari.filter(option => typeof option.modelYolu === 'string' && option.modelYolu.trim());
  return period.modelYolu ? [{ad:"3B model", modelYolu:period.modelYolu, varsayilanKamera:period.varsayilanKamera, noktalarHazir:true}] : [];
}

function unitHasModel(unit) {
  return unit?.modelHazir === true && unit.donemler.some(period => periodModelOptions(period).some(option => option.modelYolu));
}

function versionedAsset(path) {
  const url = new URL(path, location.href);
  url.searchParams.set('surum', assetVersion);
  return url.href;
}

function showModelError(message) {
  const error = document.getElementById('modelError');
  error.textContent = message;
  error.hidden = false;
}

function activePoints() {
  if (Array.isArray(currentModelVariant?.noktalar)) return currentModelVariant.noktalar;
  if (currentModelVariant?.noktalarHazir === false) return [];
  return currentPeriod?.noktalar || [];
}

function periodVisualOptions(period) {
  const models = periodModelOptions(period).map(option => ({...option, kind:'model'}));
  const images = (period?.gorselVaryantlari || []).filter(option => typeof option.gorselYolu === 'string' && option.gorselYolu.trim()).map(option => ({...option, kind:'image'}));
  return models.concat(images);
}

function loadModelVariant(index) {
  const options = periodVisualOptions(currentPeriod);
  const option = options[index];
  if (!option) return;
  currentModelVariantIndex = index;
  currentModelVariant = option;
  modelVariants.querySelectorAll(".model-variant").forEach((button, buttonIndex) => button.classList.toggle("active", buttonIndex === index));
  popup.classList.remove("open");
  document.getElementById('modelError').hidden = true;
  clearTimeout(modelLoadTimer);

  if (option.kind === 'image') {
    modelLoadingCover.hidden = true;
    model.removeAttribute('src');
    model.hidden = true;
    referenceImage.src = versionedAsset(option.gorselYolu);
    referenceImage.alt = `${currentUnit.ad} · ${option.ad}`;
    referenceImage.hidden = false;
    pendingCamera = null;
    renderPoints([]);
    viewer.querySelector(".heading p").textContent = "Görseli incele · Farklı görünümü seç";
    refreshEditPointOptions();
    return;
  }

  referenceImage.hidden = true;
  referenceImage.removeAttribute('src');
  // Model yüklenirken kısa süreliğine bir kaynak görseli gösterip anında
  // kaybolan "yükleme kapağı" kafa karıştırıcı bulunduğu için kaldırıldı.
  modelLoadingCover.hidden = true;
  renderPoints(activePoints());
  pendingCamera = option.varsayilanKamera || currentPeriod.varsayilanKamera;
  model.alt = `${currentUnit.ad} · ${option.ad} üç boyutlu modeli`;
  model.hidden = false;
  model.setAttribute('src', versionedAsset(option.modelYolu));
  modelLoadTimer = setTimeout(() => {
    if (!model.hidden && model.getAttribute('src')) {
      showModelError('Bu 3B model beklenen sürede açılamadı. Dosyayı ve yerel sunucuyu kontrol edip yeniden deneyin.');
    }
  }, 15000);
  viewer.querySelector(".heading p").textContent = option.noktalarHazir === false ? "Döndür · Yakınlaştır · Farklı görünümü seç" : "Döndür · Yakınlaştır · Numaraları seç";
  refreshEditPointOptions();
}

function renderModelVariants(period) {
  const options = periodVisualOptions(period);
  modelVariants.hidden = options.length < 2;
  modelVariants.replaceChildren(...options.map((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "model-variant";
    button.classList.toggle("active", index === 0);
    button.textContent = option.ad;
    button.setAttribute("aria-label", `${option.ad} görünümünü göster`);
    button.addEventListener("click", () => loadModelVariant(index));
    return button;
  }));
}

function showModel(period) {
  const options = periodVisualOptions(period);
  const hasVisual = options.length > 0;
  document.querySelector('.layout').classList.toggle('no-model-layout', !hasVisual);
  viewer.querySelector(".heading p").textContent = hasVisual ? "Görünümü seç · İncele" : "Birlik bilgilerini incele";
  viewer.hidden = !hasVisual;
  model.hidden = true;
  referenceImage.hidden = true;
  noModelPanel.hidden = true;
  document.getElementById("modelError").hidden = true;
  popup.classList.remove("open");
  renderModelVariants(period);

  if (!hasVisual) {
    model.removeAttribute("src");
    referenceImage.removeAttribute("src");
    currentModelVariant = null;
    modelVariants.hidden = true;
    renderPoints([]);
    pendingCamera = null;
    clearTimeout(modelLoadTimer);
    return;
  }

  currentModelVariantIndex = 0;
  loadModelVariant(0);
}

function verifiedText(value) {
  const text = String(value || '').trim();
  if (!text || /^(bu alan için kaynak taranmadı|bu konuda elimizde doğrulanmış kaynak yok|ansiklopedi maddesine dayanan kısa özettir)\.?$/i.test(text)) return ''; 
  return text;
}

function renderOptionalCard(cardId, titleId, bodyId, title, body) {
  const card = document.getElementById(cardId);
  const cleanTitle = String(title || '').trim();
  const cleanBody = verifiedText(body);
  card.hidden = !cleanTitle || !cleanBody;
  if (card.hidden) return;
  setText(titleId, cleanTitle);
  setText(bodyId, cleanBody);
}

function renderPeriodContent(){var p=currentPeriod,objectMode=currentUnit.kayitTuru==='nesne',shipMode=objectMode&&currentUnit.grup==='gemiler';document.body.classList.toggle('object-mode',objectMode);setText('className',currentUnit.etiket);setText('unitName',currentUnit.ad);setText('sideUnitName',currentUnit.ad);setText('typeTag',currentUnit.tur);setText('armyTag',currentUnit.ordu);setText('profileTitle',objectMode?(shipMode?'Gemi profili':'Teçhizat profili'):p.profil);setText('profileSub',p.donem||p.ad+' · '+p.araliq);setText('whoLabel',shipMode?'Gemi bilgisi':objectMode?'Nesne bilgisi':'Kısaca');setText('numberLabel',shipMode?'Gemi hakkında somut bilgi':objectMode?'Nesne hakkında somut bilgi':'Belgeden bir rakam');var nl=document.getElementById('numberLine');nl.hidden=!p.rakam;setText('numberText',p.rakam);var income=verifiedText(p.gelir),role=verifiedText(p.gorev),who=verifiedText(p.otuzSaniye||p.kimdir);setText('income',income);setText('role',role);setText('who',who);document.getElementById('incomeFact').hidden=objectMode||!income;document.getElementById('roleFact').hidden=objectMode||!role;document.getElementById('whoSection').hidden=!who;renderOptionalCard('misconceptionCard','wrongTitle','wrong',p.yayginYanlisBaslik,p.yayginYanlis);renderOptionalCard('trainingCard','trainingTitle','training',p.yetismeBaslik,p.yetisme);setText('incomeTrust',p.gelirGuven||'');setText('roleTrust',p.gorevGuven||'');document.querySelector('.workspace').classList.toggle('no-training',objectMode||!String(p.yetismeBaslik||'').trim());renderObjectUsers();refreshEditPointOptions();showModel(p);}

function selectPeriod(key) {
  const next = currentUnit.donemler.find(period => period.anahtar === key && period.hazir);
  if (!next) return;
  transitionContent(() => {
    currentPeriod = next;
    renderPeriods(currentUnit, key);
    renderPeriodContent();
  });
}
function selectUnit(key){if(!records[key])return;transitionContent(function(){currentKey=key;currentUnit=records[key];if(currentForce!=='tumu'&&forceKey(currentUnit)!==currentForce)currentForce=forceKey(currentUnit);renderBranchTabs();renderUnitList(currentForce);document.querySelector('.layout').dataset.force=forceKey(currentUnit);var sp=new URLSearchParams({surum:assetVersion});sp.set(currentUnit.kayitTuru==='nesne'?'nesne':'birlik',key.replace(/^nesne-/,''));document.getElementById('sourcesLink').href='./kaynakca.html?'+sp;renderTree(currentUnit.teskilatYolu);currentPeriod=periodFor(currentUnit,'klasik')||currentUnit.donemler.find(function(p){return p.hazir;});renderPeriods(currentUnit,currentPeriod.anahtar);renderPeriodContent();});}
function normalize(value) {
  return String(value || '').trim().toLocaleLowerCase('tr-TR').replace(/\s+/g, ' ');
}

function comparisonPeriod(unit) {
  if (unit === currentUnit && currentPeriod?.hazir) return currentPeriod;
  return unit.donemler.find(period => period.hazir);
}

function organizationDivergence(a, b) {
  const left = a.teskilatYolu || [];
  const right = b.teskilatYolu || [];
  let index = 0;
  while (index < left.length && index < right.length && normalize(left[index]) === normalize(right[index])) index += 1;
  return [left[index] || left.at(-1) || MISSING_TEXT, right[index] || right.at(-1) || MISSING_TEXT];
}

function comparisonValue(period, field) {
  return verifiedText(period?.[field]);
}

function renderComparison() {
  const a = units[document.getElementById('compareA').value];
  const b = units[document.getElementById('compareB').value];
  const periodA = comparisonPeriod(a);
  const periodB = comparisonPeriod(b);
  const divergence = organizationDivergence(a, b);
  const rows = [
    ['Teşkilattaki yeri', 'teskilat'],
    ['Gelir / geçim', 'kisaGelir'],
    ['Ana görev', 'kisaGorev'],
    ['Yetişme yolu', 'kisaYetisme'],
    ['Ana silah / araç', 'kisaSilah']
  ];
  setText('compareAName', a.ad);
  setText('compareBName', b.ad);
  document.getElementById('compareAName').className = 'force-' + forceKey(a);
  document.getElementById('compareBName').className = 'force-' + forceKey(b);
  const body = document.getElementById('compareRows');
  const shortRows = rows.map(([label, field]) => {
    const [left, right] = field === 'teskilat' ? divergence : [comparisonValue(periodA, field), comparisonValue(periodB, field)];
    const row = document.createElement('section');
    row.className = 'compare-row';
    row.classList.toggle('different', normalize(left) !== normalize(right));
    row.innerHTML = `<h3><span>${label}</span><small>${a.ad}: ${periodA.ad}<br>${b.ad}: ${periodB.ad}</small></h3><div>${left}</div><div>${right}</div>`;
    return row;
  });
  const details = document.createElement('details');
  details.className = 'compare-details';
  details.innerHTML = `<summary>Yetişme ve yaygın yanlış ayrıntılarını aç</summary><div class="compare-long"><article><h3>${a.ad} · ${periodA.ad}</h3><b>Yetişme yolu</b><p>${verifiedText(periodA.yetisme)}</p><b>Yaygın yanlış</b><p>${verifiedText(periodA.yayginYanlis)}</p></article><article><h3>${b.ad} · ${periodB.ad}</h3><b>Yetişme yolu</b><p>${verifiedText(periodB.yetisme)}</p><b>Yaygın yanlış</b><p>${verifiedText(periodB.yayginYanlis)}</p></article></div>`;
  body.replaceChildren(...shortRows, details);
}

function openComparison() {
  document.getElementById('compareOverlay').hidden = false;
  document.body.classList.add('comparison-open');
  renderComparison();
  document.getElementById('compareClose').focus();
}

function closeComparison() {
  document.getElementById('compareOverlay').hidden = true;
  document.body.classList.remove('comparison-open');
  document.getElementById('compareOpen').focus();
}

function buildComparisonSelects() {
  const options = Object.entries(units).map(([key, unit]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = unit.ad;
    return option;
  });
  const a = document.getElementById('compareA');
  const b = document.getElementById('compareB');
  a.replaceChildren(...options.map(option => option.cloneNode(true)));
  b.replaceChildren(...options.map(option => option.cloneNode(true)));
  a.value = 'yeniceri';
  b.value = 'sipahi';
  a.addEventListener('change', renderComparison);
  b.addEventListener('change', renderComparison);
}

function trimNumber(value) {
  const rounded = Math.round(value * 10000) / 10000;
  return Object.is(rounded, -0) ? '0' : String(rounded);
}

function vector(value, unit = 'm') {
  return `${trimNumber(value.x)}${unit} ${trimNumber(value.y)}${unit} ${trimNumber(value.z)}${unit}`;
}

function orbit(value) {
  const degree = 180 / Math.PI;
  return `${trimNumber(value.theta * degree)}deg ${trimNumber(value.phi * degree)}deg ${trimNumber(value.radius)}m`;
}

function refreshEditPointOptions() {
  const select = document.getElementById('editPoint');
  if (!editorEnabled || !currentPeriod) return;
  select.replaceChildren(...activePoints().map((point, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${index + 1} · ${point.ad}`;
    return option;
  }));
  document.getElementById('editPanel').hidden = currentModelVariant?.kind !== 'model' || currentUnit?.modelHazir !== true || periodModelOptions(currentPeriod).length === 0;
}

function addMeasurement(label, output) {
  measurements.push({label, output});
  const item = document.createElement('article');
  item.className = 'measurement';
  const title = document.createElement('b');
  title.textContent = label;
  const pre = document.createElement('pre');
  pre.textContent = output;
  item.append(title, pre);
  document.getElementById('editMeasurements').appendChild(item);
}

function inspectPoint(event) {
  if (!editorEnabled || currentModelVariant?.kind !== 'model' || currentUnit?.modelHazir !== true || periodModelOptions(currentPeriod).length === 0) return;
  const hit = model.positionAndNormalFromPoint(event.clientX, event.clientY);
  if (!hit) {
    setText('editStatus', 'Bu tıklamada model yüzeyi bulunamadı.');
    return;
  }
  const index = Number(document.getElementById('editPoint').value || 0);
  const point = activePoints()[index];
  if (!point) return;
  const camera = model.getCameraOrbit();
  const output = `position: "${vector(hit.position)}", normal: "${vector(hit.normal)}",\ncameraTarget: "${vector(hit.position)}", cameraOrbit: "${orbit(camera)}"`;
  addMeasurement(`${currentUnit.ad} · ${index + 1}. ${point.ad}`, output);
  setText('editStatus', 'Ölçüm listeye eklendi.');
}

document.getElementById('popupClose').addEventListener('click', () => popup.classList.remove('open'));
model.addEventListener('error', () => {
  clearTimeout(modelLoadTimer);
  modelLoadingCover.hidden = true;
  if (!model.hidden) showModelError('Bu 3B model yüklenemedi. Model dosyasının yerinde olduğunu ve yerel sunucunun çalıştığını kontrol edin.');
});
referenceImage.addEventListener('error', () => {
  if (!referenceImage.hidden) showModelError('Bu görsel yüklenemedi. Görsel dosyasının yerinde olduğunu kontrol edin.');
});
referenceImage.addEventListener('load', () => {
  document.getElementById('modelError').hidden = true;
});
model.addEventListener('load', () => {
  clearTimeout(modelLoadTimer);
  modelLoadingCover.hidden = true;
  document.getElementById('modelError').hidden = true;
  if (!pendingCamera || model.hidden) return;
  model.cameraTarget = pendingCamera.target;
  model.cameraOrbit = pendingCamera.orbit;
  pendingCamera = null;
});
model.addEventListener('pointerdown', event => {
  if (!editorEnabled || event.composedPath().some(node => node.classList?.contains('hot'))) return;
  pointerStart = {x:event.clientX, y:event.clientY};
});
model.addEventListener('pointerup', event => {
  if (!pointerStart) return;
  const distance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
  pointerStart = null;
  if (distance <= 5) inspectPoint(event);
});

if (editorEnabled) {
  document.getElementById('editPanel').hidden = false;
  model.setAttribute('data-edit-mode', 'true');
}

document.getElementById('copyEdit').addEventListener('click', async () => {
  if (!measurements.length) return;
  const value = measurements.map(item => `${item.label}\n${item.output}`).join('\n\n');
  try {
    await navigator.clipboard.writeText(value);
    setText('editStatus', 'Bütün ölçümler panoya kopyalandı.');
  } catch {
    const area = document.createElement('textarea');
    area.value = value;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    setText('editStatus', 'Bütün ölçümler panoya kopyalandı.');
  }
});

document.getElementById('clearEdit').addEventListener('click', () => {
  measurements.length = 0;
  document.getElementById('editMeasurements').replaceChildren();
  setText('editStatus', 'Ölçüm listesi temizlendi.');
});

document.getElementById('editToggle').addEventListener('click', () => {
  const panel = document.getElementById('editPanel');
  panel.classList.toggle('minimized');
  document.getElementById('editToggle').textContent = panel.classList.contains('minimized') ? '+' : '−';
});

{
  const panel = document.getElementById('editPanel');
  const handle = document.getElementById('editDrag');
  let drag = null;
  handle.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    const panelBox = panel.getBoundingClientRect();
    const viewerBox = panel.parentElement.getBoundingClientRect();
    drag = {dx:event.clientX - panelBox.left, dy:event.clientY - panelBox.top, viewerBox};
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (!drag) return;
    const maxX = drag.viewerBox.width - panel.offsetWidth;
    const maxY = drag.viewerBox.height - panel.offsetHeight;
    panel.style.left = `${Math.max(0, Math.min(maxX, event.clientX - drag.viewerBox.left - drag.dx))}px`;
    panel.style.top = `${Math.max(0, Math.min(maxY, event.clientY - drag.viewerBox.top - drag.dy))}px`;
    panel.style.right = 'auto';
  });
  handle.addEventListener('pointerup', () => { drag = null; });
}

document.getElementById('compareOpen').addEventListener('click', openComparison);
document.getElementById('compareClose').addEventListener('click', closeComparison);
document.getElementById('compareOverlay').addEventListener('click', event => {
  if (event.target.id === 'compareOverlay') closeComparison();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.getElementById('compareOverlay').hidden) closeComparison();
});

document.getElementById('methodInfo').addEventListener('click', event => {
  event.stopPropagation();
  const popover = document.getElementById('methodPopover');
  popover.hidden = !popover.hidden;
  event.currentTarget.setAttribute('aria-expanded', String(!popover.hidden));
});
document.addEventListener('click', event => {
  const popover = document.getElementById('methodPopover');
  if (!popover.hidden && !event.target.closest('.method-wrap')) {
    popover.hidden = true;
    document.getElementById('methodInfo').setAttribute('aria-expanded', 'false');
  }
});

const welcomeOverlay = document.getElementById('welcomeOverlay');
const aboutOpen = document.getElementById('aboutOpen');
let welcomeReturnFocus = null;
function openWelcome() {
  welcomeReturnFocus = document.activeElement;
  welcomeOverlay.hidden = false;
  document.body.classList.add('welcome-open');
  document.querySelector('.top').inert = true;
  document.getElementById('atlasMain').inert = true;
  document.getElementById('welcomeStart').focus();
}
function closeWelcome() {
  welcomeOverlay.hidden = true;
  document.body.classList.remove('welcome-open');
  document.querySelector('.top').inert = false;
  document.getElementById('atlasMain').inert = false;
  try { localStorage.setItem('ordugah-welcome-seen', '1'); } catch {}
  if (welcomeReturnFocus && typeof welcomeReturnFocus.focus === 'function') welcomeReturnFocus.focus();
}
aboutOpen.addEventListener('click', openWelcome);
document.getElementById('welcomeClose').addEventListener('click', closeWelcome);
document.getElementById('welcomeStart').addEventListener('click', closeWelcome);
welcomeOverlay.addEventListener('click', event => { if (event.target === welcomeOverlay) closeWelcome(); });
document.addEventListener('keydown', event => {
  if (welcomeOverlay.hidden) return;
  if (event.key === 'Escape') closeWelcome();
  if (event.key === 'Tab') {
    const focusable = [...welcomeOverlay.querySelectorAll('a[href],button:not([disabled])')];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
let welcomeSeen = false;
try { welcomeSeen = localStorage.getItem('ordugah-welcome-seen') === '1'; } catch {}
if (!editorEnabled && (query.get('tanitim') === '1' || !welcomeSeen)) requestAnimationFrame(openWelcome);

const themeToggle = document.getElementById('themeToggle');
function applyTheme(dark) {
  document.body.classList.toggle('dark-theme', dark);
  themeToggle.textContent = dark ? 'Açık tema' : 'Koyu tema';
  themeToggle.setAttribute('aria-pressed', String(dark));
}
let savedDark = false;
try { savedDark = localStorage.getItem('atlas-theme') === 'dark'; } catch {}
applyTheme(savedDark);
themeToggle.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark-theme');
  applyTheme(dark);
  try { localStorage.setItem('atlas-theme', dark ? 'dark' : 'light'); } catch {}
});
function renderObjectUsers(){var section=document.getElementById('objectUsersSection'),list=document.getElementById('objectUsers');var keys=currentUnit&&currentUnit.kayitTuru==='nesne'?(currentUnit.kullananBirlikler||[]):[];section.hidden=!keys.length;list.replaceChildren.apply(list,keys.filter(function(k){return units[k];}).map(function(k){var b=document.createElement('button');b.type='button';b.className='object-user';b.textContent=units[k].ad;b.addEventListener('click',function(){currentForce=forceKey(units[k]);selectUnit(k);});return b;}));}

function makeObject(item,group){var model=Boolean(item.modelYolu||(item.modelVaryantlari||[]).some(function(v){return v.modelYolu;}));var p={anahtar:item.donemAnahtari||'klasik',ad:item.donemAdi||'Klasik dönem',araliq:item.donemAraligi||'1520–1600',hazir:true,modelYolu:item.modelYolu||null,modelVaryantlari:item.modelVaryantlari||[],gorselVaryantlari:item.gorselVaryantlari||[],varsayilanKamera:{target:'0m .5m 0m',orbit:'25deg 76deg 2.15m'},profil:item.kisaTanim,donem:(item.donemAdi||'Klasik dönem')+' · '+(item.donemAraligi||'1520–1600'),gelir:'',gorev:'',otuzSaniye:item.kisaTanim,kimdir:item.kisaTanim,rakam:item.somutVeri,yetismeBaslik:'',yetisme:'',yayginYanlisBaslik:item.yayginYanlis?'Nesneye yakından bak':'',yayginYanlis:item.yayginYanlis,noktalar:item.noktalar||[],kaynaklar:item.kaynaklar||[]};p.modelVaryantlari=p.modelVaryantlari.map(function(v){return Object.assign({},v,{noktalar:v.noktalar||(item.noktalar||[]).map(function(point){return Object.assign({},point);})});});return Object.assign({},item,{kayitTuru:'nesne',grup:group.anahtar,sinif:item.tur,etiket:group.ad,tur:item.tur,ordu:'Nesne koleksiyonu',teskilatYolu:[group.ad,item.ad],modelHazir:model,donemler:[p]});}

function startAtlas() {
  Promise.all([fetch('./birlikler.json?surum='+encodeURIComponent(assetVersion)).then(function(r){if(!r.ok)throw Error('Birlik verisi yüklenemedi');return r.json();}),fetch('./nesneler.json?surum='+encodeURIComponent(assetVersion)).then(function(r){if(!r.ok)throw Error('Nesne verisi yüklenemedi');return r.json();})]).then(function(all){var data=all[0],od=all[1];units=Object.fromEntries(Object.entries(data).filter(function(e){return !e[0].startsWith('_')&&Array.isArray(e[1].donemler);}));var objects={};objectOrder=[];(od.gruplar||[]).forEach(function(g){(g.kayitlar||[]).forEach(function(i){var k='nesne-'+i.anahtar;objects[k]=makeObject(i,g);objectOrder.push(k);});});records=Object.assign({},units,objects);var ordered=[];function walk(nodes){(nodes||[]).forEach(function(n){if(n.birlik&&!ordered.includes(n.birlik))ordered.push(n.birlik);walk(n.cocuklar);});}walk(data._teskilat);Object.keys(units).forEach(function(k){if(!ordered.includes(k))ordered.push(k);});unitOrder=ordered.filter(function(k){return units[k];});buildComparisonSelects();var requestedObject=query.get('nesne'),group=query.get('grup');if(query.get('tur')==='nesne'||requestedObject||group)currentForce=group==='silahlar'?'silahlar':'gemiler';renderBranchTabs();renderUnitList(currentForce);var raw=query.get('birlik'),aliases={sagUlufeci:'ulufeciler',solUlufeci:'ulufeciler',sagGarip:'garipler',solGarip:'garipler'},requested=aliases[raw]||raw;var objectKey=requestedObject?'nesne-'+requestedObject:objectOrder.find(function(k){return forceKey(records[k])===currentForce;});selectUnit(records[requested]?requested:(records[objectKey]?objectKey:'yeniceri'));}).catch(function(error){console.error(error);document.querySelector('.layout').innerHTML='<div class="model-error">Ordugâh bilgileri yüklenemedi. Yerel sunucuyu çalıştırıp sayfayı yeniden açın.</div>';});
}

Promise.race([
  customElements.whenDefined('model-viewer'),
  new Promise((_, reject) => setTimeout(() => reject(new Error('model-viewer zaman aşımı')), 10000))
]).then(startAtlas).catch(error => {
  console.error(error);
  showModelError('3B görüntüleyici başlatılamadı. Yerel model-viewer dosyasını kontrol edip sayfayı yenileyin.');
});
