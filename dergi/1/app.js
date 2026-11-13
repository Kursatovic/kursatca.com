import * as THREE from 'three';

// ============================================================================
// 1. MAGAZINE METADATA & TABLE OF CONTENTS (36 Pages / 18 Physical Sheets)
// ============================================================================
const ARTICLES = [
  { magPage: 1,  printPage: 'Kapak', title: 'Ön Kapak: Benim Sosyal Dünyam', author: 'Kayseri Bilfen Ortaokulu • Sayı 01', color: [52, 85, 135] },
  { magPage: 2,  printPage: 'S. 1',  title: 'Künye & Yayın Ekibi', author: 'Zekeriya Biçer • Kürşat Çelik • Elif Dursun', color: [95, 110, 135] },
  { magPage: 3,  printPage: 'S. 2',  title: 'İçindekiler', author: 'Dergi Rehberi', color: [68, 102, 148] },
  { magPage: 4,  printPage: 'S. 3',  title: 'Bir Sayfa Biter, Merak Devam Eder', author: 'Editörden • Bilfen', color: [62, 112, 165] },
  { magPage: 5,  printPage: 'S. 4',  title: 'Hayata Dair Birkaç Sayfa...', author: 'Sosyal Bilgiler Zümresi', color: [178, 134, 96] },
  { magPage: 6,  printPage: 'S. 5',  title: 'Bilinmeyen Yönleriyle Atatürk', author: 'Elif Dursun', color: [175, 128, 82] },
  { magPage: 7,  printPage: 'S. 6',  title: 'Çanakkale Geçilmez...', author: 'Bir Gezi Değil, Bir Duygu', color: [178, 82, 74] },
  { magPage: 8,  printPage: 'S. 7',  title: 'İki Şehir, Bir Macera! (Moskova)', author: 'Aras Atalay (1. Bölüm)', color: [185, 78, 72] },
  { magPage: 9,  printPage: 'S. 8',  title: 'Sarayların İzinde Sanat ve Lezzet (St. Petersburg)', author: 'Aras Atalay (2. Bölüm)', color: [72, 130, 168] },
  { magPage: 10, printPage: 'S. 9',  title: 'Paris Maceram', author: 'Ela Taş', color: [192, 118, 138] },
  { magPage: 11, printPage: 'S. 10', title: 'Hayvanat Bahçesinde Bir Gün', author: 'Simay Hattat', color: [112, 158, 88] },
  { magPage: 12, printPage: 'S. 11', title: 'Bilimin İzinde: CosmoCaixa', author: 'Yusuf Kenan Çillik', color: [76, 145, 152] },
  { magPage: 13, printPage: 'S. 12', title: 'Olmekler: Taştan Kafalarıyla Şaşırtan Gizemli Uygarlık!', author: 'Derin Endürlük', color: [178, 132, 74] },
  { magPage: 14, printPage: 'S. 13', title: 'Voleybolu Sevdiren Şampiyonlar ve Unutamadığım Bir Gün', author: 'Alya Lina Şen', color: [204, 76, 86] },
  { magPage: 15, printPage: 'S. 14', title: 'Kobe Bryant: Mamba Mentalitesi', author: 'Ahmet Gülsoy', color: [148, 95, 165] },
  { magPage: 16, printPage: 'S. 15', title: 'Tabelası Olmayan Meslekler', author: 'İnceleme & Araştırma (1. Bölüm)', color: [158, 122, 88] },
  { magPage: 17, printPage: 'S. 16', title: 'İhtiyaçtan Doğan İşler', author: 'İnceleme & Araştırma (2. Bölüm)', color: [142, 115, 86] },
  { magPage: 18, printPage: 'S. 17', title: 'Bu Sene Herkes Benden Bir Şey Bekliyor...', author: 'Öğrenci Gözünden (1. Bölüm)', color: [92, 128, 115] },
  { magPage: 19, printPage: 'S. 18', title: 'Peki Ben Ne Bekliyorum?', author: 'Öğrenci Gözünden (2. Bölüm)', color: [110, 136, 102] },
  { magPage: 20, printPage: 'S. 19', title: 'Kitap Kurtları: Bir Destanın İzinde', author: 'İsmail Çınar Çelik', color: [88, 142, 158] },
  { magPage: 21, printPage: 'S. 20', title: 'Harika Kitap Önerileri', author: 'Gökçe Kardaş', color: [195, 156, 82] },
  { magPage: 22, printPage: 'S. 21', title: 'Mekipo ve Büyük Not', author: 'Ayaz Arın Toprak', color: [82, 118, 168] },
  { magPage: 23, printPage: 'S. 22', title: 'Star Wars Evreninden Favorilerim', author: 'Mila Arifoğlu', color: [62, 92, 158] },
  { magPage: 24, printPage: 'S. 23', title: 'Kâğıdın Sessiz Sanatı: Origami', author: 'Selin Yüregilli', color: [195, 92, 84] },
  { magPage: 25, printPage: 'S. 24', title: 'Benim LEGO Koleksiyonum', author: 'Ahmet Buğra Durmaz', color: [205, 142, 62] },
  { magPage: 26, printPage: 'S. 25', title: 'Süper Gücüm: Nezaket', author: 'Uzm. Psk. Dan. Melde Işıl Yücel', color: [118, 158, 126] },
  { magPage: 27, printPage: 'S. 26', title: 'Nezaketin Süper Gücü & Empati Testi', author: 'Uzm. Psk. Dan. Melde Işıl Yücel', color: [128, 164, 132] },
  { magPage: 28, printPage: 'S. 27', title: 'Pazartesi Sendromu: Belki de Pazartesiler Suçsuzdur!', author: 'Sıla Eren', color: [125, 138, 165] },
  { magPage: 29, printPage: 'S. 28', title: 'Bir Müdür Yardımcısının İtirafları', author: 'Seval Ak', color: [168, 122, 92] },
  { magPage: 30, printPage: 'S. 29', title: 'Suyun İçinde Seni Neler Bekliyor?', author: 'Spor & Yüzme', color: [58, 142, 188] },
  { magPage: 31, printPage: 'S. 30', title: 'Dürüstlük Çiçeği', author: 'Hazırlayan: Tuba Öztürk', color: [188, 118, 98] },
  { magPage: 32, printPage: 'S. 31', title: 'Zaman Küresinin Sırrı (1. Bölüm)', author: 'Hikâye • Macera', color: [64, 135, 138] },
  { magPage: 33, printPage: 'S. 32', title: 'Zaman Küresinin Sırrı (2. Bölüm)', author: 'Hikâye • Macera (Devam)', color: [64, 135, 138] },
  { magPage: 34, printPage: 'S. 33', title: 'Mesut Hocadan Sorular', author: 'Düşünce & Keşif Köşesi', color: [156, 126, 94] },
  { magPage: 35, printPage: 'S. 34', title: 'Okudum, Düşündüm, Keşfettim: Şimdi Sıra Sende!', author: 'İnteraktif Etkinlik Sayfası', color: [182, 138, 86] },
  { magPage: 36, printPage: 'Arka Kapak', title: 'Arka Kapak: Kayseri Bilfen Sosyal Bilgiler Zümresi', author: 'Benim Sosyal Dünyam', color: [82, 115, 152] }
];

const TOTAL_PAGES = 36;
const TOTAL_SHEETS = TOTAL_PAGES / 2; // 18 physical 3D sheets

// Geometry dimensions (A4 ratio: 793 / 1122 ≈ 0.70677)
const PAGE_WIDTH = 3.4;
const PAGE_HEIGHT = 4.81;
const PAGE_THICKNESS = 0.008;
const SEGMENTS_X = 36;
const SEGMENTS_Y = 26;

// ============================================================================
// 2. REALISTIC PAPER FLIP SOUND SYNTHESIZER (Web Audio API)
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playFlip(intensity = 1.0) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const duration = 0.34;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink-ish noise shaped with a smooth paper-rustle envelope
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const t = i / bufferSize;
        const white = Math.random() * 2 - 1;
        b0 = 0.997 * b0 + white * 0.029;
        b1 = 0.985 * b1 + white * 0.032;
        b2 = 0.950 * b2 + white * 0.048;
        const pink = (b0 + b1 + b2 + white * 0.18);
        // Swish envelope: soft attack, airy mid, gentle snap at the end
        const env = Math.sin(Math.PI * Math.pow(t, 0.75)) * (1 - 0.3 * t);
        data[i] = pink * env;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      // Sweeping bandpass filter to mimic paper bending through air
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      const pitchShift = 0.9 + Math.random() * 0.25;
      filter.frequency.setValueAtTime(650 * pitchShift, now);
      filter.frequency.exponentialRampToValueAtTime(1950 * pitchShift, now + duration * 0.45);
      filter.frequency.exponentialRampToValueAtTime(520 * pitchShift, now + duration);
      filter.Q.value = 1.7;

      const gain = this.ctx.createGain();
      const vol = Math.min(0.28, 0.18 * intensity);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(vol, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + duration);
    } catch (_) {
      // Ignore audio errors if blocked by browser autoplay policy
    }
  }
}

const sfx = new SoundEffects();

// ============================================================================
// 3. THREE.JS SCENE, CAMERA & LIGHTING SETUP
// ============================================================================
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  36,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
container.appendChild(renderer.domElement);

// Magazine Group
const bookGroup = new THREE.Group();
scene.add(bookGroup);

// Lighting for realistic paper shading and curl highlights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.55);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xfffbf2, 1.35);
keyLight.position.set(3.5, 6.5, 9.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
keyLight.shadow.camera.near = 2;
keyLight.shadow.camera.far = 22;
const d = 6.5;
keyLight.shadow.camera.left = -d;
keyLight.shadow.camera.right = d;
keyLight.shadow.camera.top = d;
keyLight.shadow.camera.bottom = -d;
keyLight.shadow.bias = -0.0005;
keyLight.shadow.radius = 4;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xdce8ff, 0.45);
fillLight.position.set(-6, -3, 6);
scene.add(fillLight);

// Soft drop-shadow catcher plane behind the magazine
const shadowPlaneGeo = new THREE.PlaneGeometry(24, 18);
const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.34 });
const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
shadowPlane.position.z = -0.18;
shadowPlane.receiveShadow = true;
scene.add(shadowPlane);

// Subtle center spine cylinder
const spineGeo = new THREE.CylinderGeometry(0.032, 0.032, PAGE_HEIGHT, 16);
const spineMat = new THREE.MeshStandardMaterial({
  color: 0x1e2536,
  roughness: 0.5,
  metalness: 0.2
});
const spineMesh = new THREE.Mesh(spineGeo, spineMat);
spineMesh.position.set(0, 0, -0.02);
bookGroup.add(spineMesh);

// ============================================================================
// 4. 3D DEFORMABLE PAGE SHEET CLASS (Skeletal / Vertex Page Curl)
// ============================================================================
const edgeMaterial = new THREE.MeshStandardMaterial({
  color: 0xf4efe6,
  roughness: 0.85,
  metalness: 0.0
});

// Create subtle spine shadow gradient overlay on page textures using a shared lightmap-like roughness or vertex shading
class MagazineSheet {
  constructor(sheetIndex, frontTexture, backTexture) {
    this.index = sheetIndex; // 0 .. 13
    // Progress: 0 = on right side (unflipped), 1 = on left side (flipped)
    this.progress = 0;
    this.targetProgress = 0;
    // Corner lift (-1 = bottom corner curl, +1 = top corner curl, 0 = center)
    this.curlCornerY = 0;
    this.targetCurlCornerY = 0;
    // Extra interactive drag bend
    this.dragIntensity = 0;

    // Create high-density box geometry shifted so its left edge (x=0) is on the spine
    const geo = new THREE.BoxGeometry(
      PAGE_WIDTH,
      PAGE_HEIGHT,
      PAGE_THICKNESS,
      SEGMENTS_X,
      SEGMENTS_Y,
      1
    );
    geo.translate(PAGE_WIDTH / 2, 0, 0);

    // Store pristine base vertex positions for fast real-time curl deformation
    const posAttr = geo.attributes.position;
    this.basePositions = new Float32Array(posAttr.array.length);
    this.basePositions.set(posAttr.array);

    const isCover = sheetIndex === 0 || sheetIndex === TOTAL_SHEETS - 1;
    const pageRoughness = isCover ? 0.32 : 0.48;

    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: pageRoughness,
      metalness: 0.03
    });

    const backMat = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: pageRoughness,
      metalness: 0.03
    });

    // BoxGeometry material order: [+x, -x, +y, -y, +z (front), -z (back)]
    const materials = [
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      frontMat,
      backMat
    ];

    this.mesh = new THREE.Mesh(geo, materials);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.userData.sheet = this;

    this.updateDeformation(0, true);
  }

  updateDeformation(dt, force = false) {
    const diff = this.targetProgress - this.progress;
    const isMoving = Math.abs(diff) > 0.0004 || this.dragIntensity > 0.001;

    if (!isMoving && !force) return false;

    if (!force) {
      // Smooth spring-like interpolation
      const speed = this.isDragging ? 18 : 7.5;
      this.progress += diff * Math.min(1, dt * speed);
      if (Math.abs(this.targetProgress - this.progress) < 0.0005) {
        this.progress = this.targetProgress;
      }
      this.curlCornerY += (this.targetCurlCornerY - this.curlCornerY) * Math.min(1, dt * 10);
      if (!this.isDragging) {
        this.dragIntensity *= Math.pow(0.05, dt);
      }
    }

    const p = THREE.MathUtils.clamp(this.progress, 0, 1);

    // Sine bell curve peaks at mid-flip (p = 0.5)
    const flipBell = Math.sin(p * Math.PI);
    // Direction of travel (+1 when flipping right-to-left, -1 when left-to-right)
    const dir = Math.sign(this.targetProgress - this.progress) || (p < 0.5 ? 1 : -1);

    // Stack Z-offset so pages never z-fight when resting on left or right pile
    const rightStackZ = (TOTAL_SHEETS - 1 - this.index) * (PAGE_THICKNESS * 1.35);
    const leftStackZ = this.index * (PAGE_THICKNESS * 1.35);
    const baseZ = THREE.MathUtils.lerp(rightStackZ, leftStackZ, p);
    // Lift turning page slightly above the stack during mid-turn
    const turnLiftZ = flipBell * 0.16;
    this.mesh.position.z = baseZ + turnLiftZ;

    // Deform vertices: combine spine rotation with natural paper wave & corner curl
    const posAttr = this.mesh.geometry.attributes.position;
    const arr = posAttr.array;
    const base = this.basePositions;

    // Main spine angle from 0 to -PI
    const spineAngle = -p * Math.PI;

    // Curl amount is strongest during the first and middle phases of the turn or while dragging
    const curlStrength = (flipBell * 0.78 + this.dragIntensity * 0.45);

    for (let i = 0; i < posAttr.count; i++) {
      const idx = i * 3;
      const bx = base[idx];     // 0 .. PAGE_WIDTH
      const by = base[idx + 1]; // -PAGE_HEIGHT/2 .. +PAGE_HEIGHT/2
      const bz = base[idx + 2]; // -THICKNESS/2 .. +THICKNESS/2

      const u = bx / PAGE_WIDTH; // normalized 0 (spine) -> 1 (outer edge)
      const v = by / (PAGE_HEIGHT * 0.5); // normalized -1 (bottom) -> +1 (top)

      // Diagonal corner influence: dragging top or bottom corner twists the sheet realistically
      const cornerBias = 1.0 + 0.38 * this.curlCornerY * v * Math.pow(u, 1.2);

      // Outer edge trails behind the spine rotation, creating a realistic cylindrical S-curl
      const lagAngle = curlStrength * Math.pow(u, 1.55) * 0.72 * cornerBias * (dir >= 0 ? 1 : -0.85);
      const localAngle = THREE.MathUtils.clamp(spineAngle + lagAngle, -Math.PI, 0);

      // Subtle natural paper arch near the spine when open
      const openArch = Math.sin(u * Math.PI) * 0.085 * (1 - flipBell * 0.5);

      // Compute curved position around spine (x=0)
      const cosA = Math.cos(localAngle);
      const sinA = Math.sin(localAngle);

      // Radial distance from spine slightly contracts when curled tightly
      const radius = bx * (1 - 0.025 * flipBell * u);

      const rx = radius * cosA - bz * sinA;
      // sinA is negative when localAngle is in (-PI, 0), so -radius * sinA lifts the page in +Z!
      const rz = -radius * sinA + bz * cosA + openArch;
      // Subtle vertical curve when corner is pulled
      const ry = by - Math.pow(u, 2) * flipBell * this.curlCornerY * 0.14;

      arr[idx] = rx;
      arr[idx + 1] = ry;
      arr[idx + 2] = rz;
    }

    posAttr.needsUpdate = true;
    this.mesh.geometry.computeVertexNormals();
    return true;
  }
}

// ============================================================================
// 5. APPLICATION STATE & CAMERA CONTROLLER
// ============================================================================
const state = {
  currentSheet: 0, // 0 = Front cover closed on right; 1..13 = Spread open; 14 = Back cover closed on left
  sheets: [],
  pagesMeta: [],
  zoom: 1.0,
  targetZoom: 1.0,
  minZoom: 1.0,
  maxZoom: 3.4,
  panX: 0,
  panY: 0,
  targetPanX: 0,
  targetPanY: 0,
  mobileFocus: 'both', // 'left' | 'both' | 'right'
  isMobilePortrait: false,
  baseCameraZ: 13.5,
  baseBookX: 0,
  targetBookX: 0,
  tiltX: 0,
  tiltY: 0,
  targetTiltX: 0,
  targetTiltY: 0
};

function computeResponsiveFraming() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const aspect = w / h;
  state.isMobilePortrait = w < 700 && aspect < 0.85;

  const mobileFocusEl = document.getElementById('mobile-page-focus');
  const isSpreadOpen = state.currentSheet > 0 && state.currentSheet < TOTAL_SHEETS;
  if (state.isMobilePortrait && isSpreadOpen) {
    mobileFocusEl.classList.add('visible-on-spread');
  } else {
    mobileFocusEl.classList.remove('visible-on-spread');
  }

  // Determine how wide the subject we want to fit in the viewport is
  let desiredWidth = PAGE_WIDTH * 2.15;
  let desiredHeight = PAGE_HEIGHT * 1.24;

  // Center the magazine appropriately:
  // When closed on front cover (sheet 0), shift book left by PAGE_WIDTH/2 so the front cover is dead-center
  // When closed on back cover (sheet 14), shift book right by PAGE_WIDTH/2 so the back cover is dead-center
  if (state.currentSheet === 0) {
    state.targetBookX = -PAGE_WIDTH * 0.5;
    desiredWidth = PAGE_WIDTH * 1.25;
  } else if (state.currentSheet === TOTAL_SHEETS) {
    state.targetBookX = PAGE_WIDTH * 0.5;
    desiredWidth = PAGE_WIDTH * 1.25;
  } else {
    // Open 2-page spread
    if (state.isMobilePortrait && state.mobileFocus === 'left') {
      state.targetBookX = PAGE_WIDTH * 0.48;
      desiredWidth = PAGE_WIDTH * 1.18;
    } else if (state.isMobilePortrait && state.mobileFocus === 'right') {
      state.targetBookX = -PAGE_WIDTH * 0.48;
      desiredWidth = PAGE_WIDTH * 1.18;
    } else {
      state.targetBookX = 0;
      desiredWidth = PAGE_WIDTH * 2.12;
    }
  }

  const fovRad = THREE.MathUtils.degToRad(camera.fov);
  const distForHeight = (desiredHeight / 2) / Math.tan(fovRad / 2);
  const distForWidth = (desiredWidth / 2) / (Math.tan(fovRad / 2) * aspect);
  state.baseCameraZ = Math.max(distForHeight, distForWidth, 7.2);
}

// ============================================================================
// 6. LOADING ASSETS & INITIALIZING THE 14 SHEETS
// ============================================================================
async function initMagazine() {
  const res = await fetch('assets/pages.json?v=6');
  state.pagesMeta = await res.json();

  const loader = new THREE.TextureLoader();
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
  let loadedCount = 0;

  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  const loadPageTexture = (url) =>
    new Promise((resolve) => {
      loader.load(
        url,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.anisotropy = maxAnisotropy;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          tex.magFilter = THREE.LinearFilter;
          tex.generateMipmaps = true;

          loadedCount++;
          const pct = Math.round((loadedCount / TOTAL_PAGES) * 100);
          progressFill.style.width = `${pct}%`;
          progressText.textContent = `%${pct}`;
          resolve(tex);
        },
        undefined,
        () => resolve(null)
      );
    });

  // Load all 28 page textures in parallel
  const textures = await Promise.all(
    state.pagesMeta.map((p) => loadPageTexture(p.src))
  );

  // Build 14 physical 3D sheets
  for (let i = 0; i < TOTAL_SHEETS; i++) {
    const frontTex = textures[i * 2];
    const backTex = textures[i * 2 + 1];
    const sheet = new MagazineSheet(i, frontTex, backTex);
    state.sheets.push(sheet);
    bookGroup.add(sheet.mesh);
  }

  buildTableOfContents();
  buildThumbnailStrip();
  computeResponsiveFraming();
  bookGroup.position.x = state.targetBookX;
  camera.position.z = state.baseCameraZ;
  updateUIAndAmbient();

  // Hide loading screen and perform a subtle welcoming cover peek
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('hidden');

  // Hide gesture hint after 8 seconds or on first flip
  setTimeout(() => {
    document.getElementById('gesture-hint')?.classList.add('fade-out');
  }, 8500);
}

// ============================================================================
// 7. NAVIGATION, DYNAMIC AMBIENT BACKGROUND & UI SYNC
// ============================================================================
function goToSheet(targetSheet, playSound = true) {
  const clamped = THREE.MathUtils.clamp(targetSheet, 0, TOTAL_SHEETS);
  const delta = Math.abs(clamped - state.currentSheet);
  if (delta === 0) return;

  state.currentSheet = clamped;

  state.sheets.forEach((sheet, idx) => {
    const shouldBeFlipped = idx < state.currentSheet ? 1 : 0;
    if (sheet.targetProgress !== shouldBeFlipped) {
      sheet.targetProgress = shouldBeFlipped;
      sheet.targetCurlCornerY = (Math.random() - 0.5) * 0.5;
    }
  });

  if (playSound) {
    sfx.playFlip(Math.min(1.3, 0.85 + delta * 0.15));
  }

  document.getElementById('gesture-hint')?.classList.add('fade-out');

  // If mobile portrait and user flips a page while in single-page focus, default to left page of new spread
  if (state.isMobilePortrait && state.mobileFocus !== 'both') {
    state.mobileFocus = 'left';
    syncMobileFocusButtons();
  }

  computeResponsiveFraming();
  updateUIAndAmbient();
}

function goToMagazinePage(magPageNumber) {
  // magPage 1 -> sheet 0
  // magPage 2,3 -> sheet 1
  // magPage 4,5 -> sheet 2 ...
  // magPage 28 -> sheet 14
  const targetSheet = Math.floor(magPageNumber / 2);
  goToSheet(targetSheet, true);
}

function updateUIAndAmbient() {
  const s = state.currentSheet;
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const slider = document.getElementById('page-slider');
  const counter = document.getElementById('page-counter');
  const articleTitle = document.getElementById('article-title');

  prevBtn.disabled = s <= 0;
  nextBtn.disabled = s >= TOTAL_SHEETS;
  slider.value = s;

  let leftPageNum = null;
  let rightPageNum = null;

  if (s === 0) {
    rightPageNum = 1;
    counter.textContent = `Ön Kapak (1 / ${TOTAL_PAGES})`;
  } else if (s === TOTAL_SHEETS) {
    leftPageNum = TOTAL_PAGES;
    counter.textContent = `Arka Kapak (${TOTAL_PAGES} / ${TOTAL_PAGES})`;
  } else {
    leftPageNum = s * 2;
    rightPageNum = s * 2 + 1;
    counter.textContent = `Dergi S. ${leftPageNum - 1}–${rightPageNum - 1} (${leftPageNum}–${rightPageNum}/${TOTAL_PAGES})`;
  }

  // Update active article pill title
  const primaryPage = rightPageNum || leftPageNum || 1;
  const leftArt = ARTICLES.find((a) => a.magPage === leftPageNum);
  const rightArt = ARTICLES.find((a) => a.magPage === rightPageNum);

  if (leftArt && rightArt && leftArt.title !== rightArt.title) {
    articleTitle.textContent = `${leftArt.title} • ${rightArt.title}`;
  } else {
    const activeArt = rightArt || leftArt || ARTICLES[0];
    articleTitle.textContent = activeArt.title;
  }

  // Dynamic Ambient Background Colors matched to current page(s)
  const leftColor = (leftArt || rightArt || ARTICLES[0]).color;
  const rightColor = (rightArt || leftArt || ARTICLES[0]).color;

  const glowLeft = document.getElementById('glow-left');
  const glowRight = document.getElementById('glow-right');
  const ambientBg = document.getElementById('ambient-bg');

  glowLeft.style.backgroundColor = `rgb(${leftColor[0]}, ${leftColor[1]}, ${leftColor[2]})`;
  glowRight.style.backgroundColor = `rgb(${rightColor[0]}, ${rightColor[1]}, ${rightColor[2]})`;

  const midR = Math.round((leftColor[0] + rightColor[0]) * 0.16);
  const midG = Math.round((leftColor[1] + rightColor[1]) * 0.16);
  const midB = Math.round((leftColor[2] + rightColor[2]) * 0.18);
  ambientBg.style.background = `radial-gradient(circle at 50% 45%, rgb(${midR}, ${midG}, ${midB}) 0%, #090b10 100%)`;

  // Highlight active TOC item & Thumbnail card
  document.querySelectorAll('.toc-item').forEach((el) => {
    const p = Number(el.dataset.page);
    el.classList.toggle('active', p === leftPageNum || p === rightPageNum);
  });

  document.querySelectorAll('.thumb-card').forEach((el) => {
    const sheetIdx = Number(el.dataset.sheet);
    const isActive = sheetIdx === s;
    el.classList.toggle('active', isActive);
    if (isActive) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
}

// ============================================================================
// 8. BUILD TABLE OF CONTENTS & THUMBNAIL BAR
// ============================================================================
function buildTableOfContents() {
  const tocList = document.getElementById('toc-list');
  tocList.innerHTML = '';

  ARTICLES.forEach((art) => {
    const meta = state.pagesMeta[art.magPage - 1];
    const btn = document.createElement('button');
    btn.className = 'toc-item';
    btn.dataset.page = art.magPage;
    btn.innerHTML = `
      <img class="toc-thumb" src="${meta ? meta.thumb : ''}" alt="Sayfa ${art.magPage}" loading="lazy" />
      <div class="toc-info">
        <div class="toc-title">${art.title}</div>
        <div class="toc-author">${art.author}</div>
      </div>
      <span class="toc-page-num">${art.printPage || 'S. ' + art.magPage}</span>
    `;
    btn.addEventListener('click', () => {
      goToMagazinePage(art.magPage);
      toggleTocDrawer(false);
    });
    tocList.appendChild(btn);
  });
}

function buildThumbnailStrip() {
  const strip = document.getElementById('thumb-strip');
  strip.innerHTML = '';

  for (let s = 0; s <= TOTAL_SHEETS; s++) {
    const card = document.createElement('div');
    card.className = 'thumb-card';
    card.dataset.sheet = s;

    let imgsHtml = '';
    let label = '';

    if (s === 0) {
      imgsHtml = `<img src="${state.pagesMeta[0].thumb}" alt="Ön Kapak" loading="lazy" />`;
      label = 'Ön Kapak';
    } else if (s === TOTAL_SHEETS) {
      imgsHtml = `<img src="${state.pagesMeta[TOTAL_PAGES - 1].thumb}" alt="Arka Kapak" loading="lazy" />`;
      label = 'Arka Kapak';
    } else {
      const lp = s * 2;
      const rp = s * 2 + 1;
      imgsHtml = `
        <img src="${state.pagesMeta[lp - 1].thumb}" alt="Sayfa ${lp}" loading="lazy" />
        <img src="${state.pagesMeta[rp - 1].thumb}" alt="Sayfa ${rp}" loading="lazy" />
      `;
      label = `${lp} – ${rp}`;
    }

    card.innerHTML = `
      <div class="thumb-pair">${imgsHtml}</div>
      <span class="thumb-label">${label}</span>
    `;
    card.addEventListener('click', () => goToSheet(s, true));
    strip.appendChild(card);
  }
}

function toggleTocDrawer(forceState) {
  const drawer = document.getElementById('toc-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const isOpen = forceState !== undefined ? forceState : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  backdrop.classList.toggle('open', isOpen);
}

// ============================================================================
// 9. INTERACTIVE PAGE DRAGGING, CURLING, ZOOM & PAN (MOUSE + TOUCH)
// ============================================================================
const raycaster = new THREE.Raycaster();
const pointerNDC = new THREE.Vector2();

let activeDragSheet = null;
let dragDirection = 0; // +1 = flipping right-to-left (next), -1 = flipping left-to-right (prev)
let dragStartX = 0;
let dragStartY = 0;
let isPanning = false;
let panStartX = 0;
let panStartY = 0;
let pointerDownTime = 0;
let lastTapTime = 0;

// Pinch-to-zoom tracking
const activePointers = new Map();
let initialPinchDist = 0;
let initialPinchZoom = 1;

function getTopInteractiveSheet(side) {
  // side === 'right' -> unflipped sheet on top of right stack (index === state.currentSheet)
  // side === 'left'  -> flipped sheet on top of left stack (index === state.currentSheet - 1)
  if (side === 'right' && state.currentSheet < TOTAL_SHEETS) {
    return state.sheets[state.currentSheet];
  }
  if (side === 'left' && state.currentSheet > 0) {
    return state.sheets[state.currentSheet - 1];
  }
  return null;
}

function updatePointerNDC(clientX, clientY) {
  pointerNDC.x = (clientX / window.innerWidth) * 2 - 1;
  pointerNDC.y = -(clientY / window.innerHeight) * 2 + 1;
}

function setZoom(newZoom, focusClientX = window.innerWidth / 2, focusClientY = window.innerHeight / 2) {
  const prevZoom = state.targetZoom;
  state.targetZoom = THREE.MathUtils.clamp(newZoom, state.minZoom, state.maxZoom);

  if (state.targetZoom <= 1.02) {
    state.targetZoom = 1.0;
    state.targetPanX = 0;
    state.targetPanY = 0;
  } else if (state.targetZoom > prevZoom) {
    // Nudge pan slightly toward cursor/tap location
    const nx = (focusClientX / window.innerWidth - 0.5) * 2;
    const ny = -(focusClientY / window.innerHeight - 0.5) * 2;
    const panLimitX = (state.targetZoom - 1) * PAGE_WIDTH * 0.85;
    const panLimitY = (state.targetZoom - 1) * PAGE_HEIGHT * 0.45;
    state.targetPanX = THREE.MathUtils.clamp(state.targetPanX - nx * 0.65, -panLimitX, panLimitX);
    state.targetPanY = THREE.MathUtils.clamp(state.targetPanY - ny * 0.65, -panLimitY, panLimitY);
  }

  const pct = Math.round(state.targetZoom * 100);
  document.getElementById('zoom-label').textContent = `%${pct}`;
  document.getElementById('btn-zoom-reset').style.display = state.targetZoom > 1.02 ? 'inline-flex' : 'none';
}

container.addEventListener('pointerdown', (e) => {
  if (e.target !== renderer.domElement) return;
  sfx.init();
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

  // Multi-touch pinch-to-zoom start
  if (activePointers.size === 2) {
    activeDragSheet = null;
    isPanning = false;
    const pts = Array.from(activePointers.values());
    initialPinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    initialPinchZoom = state.targetZoom;
    return;
  }

  pointerDownTime = performance.now();
  dragStartX = e.clientX;
  dragStartY = e.clientY;

  // Double-tap / double-click detection for quick zoom toggle
  if (pointerDownTime - lastTapTime < 280 && activePointers.size === 1) {
    if (state.targetZoom > 1.15) {
      setZoom(1.0);
    } else {
      setZoom(2.15, e.clientX, e.clientY);
    }
    lastTapTime = 0;
    return;
  }
  lastTapTime = pointerDownTime;

  // If zoomed in, dragging pans the camera across the page
  if (state.targetZoom > 1.08) {
    isPanning = true;
    panStartX = state.targetPanX;
    panStartY = state.targetPanY;
    container.classList.add('dragging');
    return;
  }

  // Raycast to check if user grabbed a page to curl/drag
  updatePointerNDC(e.clientX, e.clientY);
  raycaster.setFromCamera(pointerNDC, camera);
  const intersects = raycaster.intersectObjects(bookGroup.children, false);

  const hit = intersects.find((i) => i.object.userData.sheet);
  if (hit) {
    const localPoint = bookGroup.worldToLocal(hit.point.clone());
    const side = localPoint.x >= 0 ? 'right' : 'left';
    const sheet = getTopInteractiveSheet(side);

    if (sheet) {
      activeDragSheet = sheet;
      activeDragSheet.isDragging = true;
      dragDirection = side === 'right' ? 1 : -1;
      // Determine whether top or bottom corner is being pulled
      activeDragSheet.targetCurlCornerY = THREE.MathUtils.clamp(localPoint.y / (PAGE_HEIGHT * 0.5), -1, 1);
      activeDragSheet.dragIntensity = 0.65;
      container.classList.add('dragging');
    }
  }
});

window.addEventListener('pointermove', (e) => {
  if (activePointers.has(e.pointerId)) {
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  }

  // Subtle 3D parallax tilt on desktop mouse move
  if (e.pointerType === 'mouse' && !activeDragSheet && !isPanning) {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    state.targetTiltY = nx * 0.08;
    state.targetTiltX = ny * 0.05;

    // Hover corner curl preview when cursor is near outer edge of page
    if (state.targetZoom <= 1.05) {
      updatePointerNDC(e.clientX, e.clientY);
      raycaster.setFromCamera(pointerNDC, camera);
      const hits = raycaster.intersectObjects(bookGroup.children, false);
      const hit = hits.find((i) => i.object.userData.sheet);
      let hoveringCorner = false;

      // Reset subtle hover peel on non-dragged sheets
      state.sheets.forEach((sh) => {
        if (!sh.isDragging) {
          sh.targetProgress = sh.index < state.currentSheet ? 1 : 0;
        }
      });

      if (hit) {
        const lp = bookGroup.worldToLocal(hit.point.clone());
        if (Math.abs(lp.x) > PAGE_WIDTH * 0.62) {
          const side = lp.x >= 0 ? 'right' : 'left';
          const topSheet = getTopInteractiveSheet(side);
          if (topSheet) {
            hoveringCorner = true;
            topSheet.targetCurlCornerY = THREE.MathUtils.clamp(lp.y / (PAGE_HEIGHT * 0.5), -1, 1);
            topSheet.targetProgress = side === 'right' ? 0.065 : 0.935;
            topSheet.dragIntensity = 0.35;
          }
        }
      }
      container.classList.toggle('corner-hover', hoveringCorner);
    }
  }

  // Handle two-finger pinch zoom
  if (activePointers.size === 2) {
    const pts = Array.from(activePointers.values());
    const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    if (initialPinchDist > 10) {
      const scale = dist / initialPinchDist;
      setZoom(initialPinchZoom * scale);
    }
    return;
  }

  // Handle panning when zoomed in
  if (isPanning) {
    const dx = (e.clientX - dragStartX) / window.innerWidth;
    const dy = (e.clientY - dragStartY) / window.innerHeight;
    const panScale = ( 9.5 / state.targetZoom ) * state.targetZoom;
    const panLimitX = (state.targetZoom - 1) * PAGE_WIDTH * 0.95;
    const panLimitY = (state.targetZoom - 1) * PAGE_HEIGHT * 0.55;

    state.targetPanX = THREE.MathUtils.clamp(panStartX - dx * panScale, -panLimitX, panLimitX);
    state.targetPanY = THREE.MathUtils.clamp(panStartY + dy * panScale, -panLimitY, panLimitY);
    return;
  }

  // Handle interactive 3D page curl drag
  if (activeDragSheet) {
    const dragSpan = Math.min(window.innerWidth * 0.42, 380);
    const rawDelta = e.clientX - dragStartX;
    const dy = (e.clientY - dragStartY) / (window.innerHeight * 0.35);

    let dragRatio = 0;
    if (dragDirection === 1) {
      // Dragging from right to left (rawDelta < 0)
      dragRatio = THREE.MathUtils.clamp(-rawDelta / dragSpan, 0.02, 0.98);
      activeDragSheet.targetProgress = dragRatio;
    } else {
      // Dragging from left to right (rawDelta > 0)
      dragRatio = THREE.MathUtils.clamp(rawDelta / dragSpan, 0.02, 0.98);
      activeDragSheet.targetProgress = 1 - dragRatio;
    }

    activeDragSheet.dragIntensity = 0.85;
    activeDragSheet.targetCurlCornerY = THREE.MathUtils.clamp(
      activeDragSheet.targetCurlCornerY - dy * 0.5,
      -1,
      1
    );
  }
});

function handlePointerUp(e) {
  activePointers.delete(e.pointerId);
  container.classList.remove('dragging');

  if (isPanning) {
    isPanning = false;
    return;
  }

  if (activeDragSheet) {
    const elapsed = performance.now() - pointerDownTime;
    const moveDist = Math.hypot(e.clientX - dragStartX, e.clientY - dragStartY);
    const sheet = activeDragSheet;
    sheet.isDragging = false;
    activeDragSheet = null;

    // Quick click/tap on a page edge or a drag past 22% completes the page flip!
    const isQuickTap = elapsed < 260 && moveDist < 14;
    const p = sheet.targetProgress;

    if (dragDirection === 1) {
      if (isQuickTap || p > 0.22) {
        goToSheet(state.currentSheet + 1, true);
      } else {
        sheet.targetProgress = 0;
      }
    } else {
      if (isQuickTap || p < 0.78) {
        goToSheet(state.currentSheet - 1, true);
      } else {
        sheet.targetProgress = 1;
      }
    }
  }
}

window.addEventListener('pointerup', handlePointerUp);
window.addEventListener('pointercancel', handlePointerUp);

// Mouse wheel zoom
container.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.16 : 0.86;
    setZoom(state.targetZoom * zoomFactor, e.clientX, e.clientY);
  },
  { passive: false }
);

// ============================================================================
// 10. UI CONTROLS & KEYBOARD SHORTCUTS
// ============================================================================
document.getElementById('btn-prev').addEventListener('click', () => goToSheet(state.currentSheet - 1, true));
document.getElementById('btn-next').addEventListener('click', () => goToSheet(state.currentSheet + 1, true));
document.getElementById('btn-first').addEventListener('click', () => goToSheet(0, true));
document.getElementById('btn-last').addEventListener('click', () => goToSheet(TOTAL_SHEETS, true));

document.getElementById('page-slider').addEventListener('input', (e) => {
  goToSheet(Number(e.target.value), true);
});

// Zoom buttons
document.getElementById('btn-zoom-in').addEventListener('click', () => setZoom(state.targetZoom + 0.35));
document.getElementById('btn-zoom-out').addEventListener('click', () => setZoom(state.targetZoom - 0.35));
document.getElementById('btn-zoom-reset').addEventListener('click', () => setZoom(1.0));

// Sound toggle
document.getElementById('btn-sound').addEventListener('click', () => {
  sfx.enabled = !sfx.enabled;
  document.getElementById('icon-sound-on').style.display = sfx.enabled ? 'block' : 'none';
  document.getElementById('icon-sound-off').style.display = sfx.enabled ? 'none' : 'block';
  if (sfx.enabled) sfx.playFlip(0.7);
});

// Fullscreen toggle
document.getElementById('btn-fullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

// TOC Drawer toggle
document.getElementById('btn-toc').addEventListener('click', () => toggleTocDrawer());
document.getElementById('btn-toc-close').addEventListener('click', () => toggleTocDrawer(false));
document.getElementById('drawer-backdrop').addEventListener('click', () => toggleTocDrawer(false));

// Thumbnail strip toggle
const thumbWrapper = document.getElementById('thumb-strip-wrapper');
const thumbToggleBtn = document.getElementById('btn-thumbs-toggle');
thumbToggleBtn.addEventListener('click', () => {
  const isOpen = thumbWrapper.classList.toggle('open');
  thumbToggleBtn.classList.toggle('active', isOpen);
});

// Mobile Portrait Left / Both / Right page focus tabs
function syncMobileFocusButtons() {
  document.getElementById('btn-focus-left').classList.toggle('active', state.mobileFocus === 'left');
  document.getElementById('btn-focus-both').classList.toggle('active', state.mobileFocus === 'both');
  document.getElementById('btn-focus-right').classList.toggle('active', state.mobileFocus === 'right');
}

['left', 'both', 'right'].forEach((mode) => {
  document.getElementById(`btn-focus-${mode}`).addEventListener('click', () => {
    state.mobileFocus = mode;
    syncMobileFocusButtons();
    computeResponsiveFraming();
  });
});

// Keyboard navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'PageDown') {
    goToSheet(state.currentSheet + 1, true);
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    goToSheet(state.currentSheet - 1, true);
  } else if (e.key === 'Home') {
    goToSheet(0, true);
  } else if (e.key === 'End') {
    goToSheet(TOTAL_SHEETS, true);
  } else if (e.key === 'Escape') {
    toggleTocDrawer(false);
    thumbWrapper.classList.remove('open');
    thumbToggleBtn.classList.remove('active');
    if (state.targetZoom > 1.02) setZoom(1.0);
  } else if (e.key === '+' || e.key === '=') {
    setZoom(state.targetZoom + 0.3);
  } else if (e.key === '-') {
    setZoom(state.targetZoom - 0.3);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  computeResponsiveFraming();
});

// ============================================================================
// 11. MAIN ANIMATION LOOP
// ============================================================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.elapsedTime;

  // Update all 14 sheets' vertex curl deformations
  for (let i = 0; i < state.sheets.length; i++) {
    state.sheets[i].updateDeformation(dt);
  }

  // Smooth book horizontal centering & subtle floating motion
  bookGroup.position.x = THREE.MathUtils.lerp(bookGroup.position.x, state.targetBookX, dt * 7);
  bookGroup.position.y = Math.sin(elapsed * 1.4) * 0.035;

  // Smooth 3D mouse parallax tilt (attenuated when zoomed in so reading is steady)
  const tiltFactor = state.zoom > 1.2 ? 0.15 : 1.0;
  state.tiltX = THREE.MathUtils.lerp(state.tiltX, state.targetTiltX * tiltFactor, dt * 6);
  state.tiltY = THREE.MathUtils.lerp(state.tiltY, state.targetTiltY * tiltFactor, dt * 6);
  bookGroup.rotation.x = state.tiltX;
  bookGroup.rotation.y = state.tiltY;

  // Smooth camera zoom and pan interpolation
  state.zoom = THREE.MathUtils.lerp(state.zoom, state.targetZoom, dt * 9);
  state.panX = THREE.MathUtils.lerp(state.panX, state.targetPanX, dt * 10);
  state.panY = THREE.MathUtils.lerp(state.panY, state.targetPanY, dt * 10);

  const desiredZ = state.baseCameraZ / state.zoom;
  camera.position.z = THREE.MathUtils.lerp(camera.position.z, desiredZ, dt * 9);
  camera.position.x = state.panX;
  camera.position.y = state.panY;
  camera.lookAt(state.panX, state.panY, 0);

  renderer.render(scene, camera);
}

initMagazine().then(() => {
  animate();
});
