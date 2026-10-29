/* Ortak kalp dalgası yükleyicisi. Her sayfada <heart-wave-loader> ile kullanılabilir. */
(() => {
  const SVG_NS = 'http://www.w3.org/2000/svg';

  class HeartWaveLoader extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;

      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
        <style>
          :host { display: inline-block; width: var(--heart-loader-size, 84px); height: var(--heart-loader-size, 84px); color: var(--heart-loader-color, #7c3aed); }
          svg { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 8px 12px color-mix(in srgb, currentColor 24%, transparent)); }
          path { stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; opacity: .16; }
          @media (prefers-reduced-motion: reduce) { svg { animation: heart-loader-breathe 2.8s ease-in-out infinite; } }
          @keyframes heart-loader-breathe { 50% { transform: scale(.94); opacity: .7; } }
        </style>
        <svg viewBox="0 0 100 100" role="img" aria-label="Yükleniyor"><g><path></path></g></svg>`;

      const svg = root.querySelector('svg');
      const group = svg.querySelector('g');
      const path = svg.querySelector('path');
      path.setAttribute('stroke-width', '3.9');

      const particles = Array.from({ length: 88 }, () => {
        const dot = document.createElementNS(SVG_NS, 'circle');
        dot.setAttribute('fill', 'currentColor');
        group.appendChild(dot);
        return dot;
      });

      const pointAt = (progress, detail) => {
        const rootValue = 3.3;
        const limit = Math.sqrt(rootValue);
        const x = -limit + progress * limit * 2;
        const wave = .9 * Math.sqrt(Math.max(0, rootValue - x * x)) * Math.sin(6.4 * Math.PI * x);
        const curve = Math.pow(Math.abs(x), 2 / 3);
        return { x: 50 + x * 23.2, y: 18 + (1.75 - curve - wave) * (24.5 + detail * 1.5) };
      };
      const normalize = (value) => ((value % 1) + 1) % 1;
      const makePath = (detail) => Array.from({ length: 161 }, (_, index) => {
        const point = pointAt(index / 160, detail);
        return `${index ? 'L' : 'M'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      }).join(' ');

      const startedAt = performance.now();
      const render = (now) => {
        if (!this.isConnected) return;
        const elapsed = now - startedAt;
        const progress = (elapsed % 8400) / 8400;
        const detail = .52 + ((Math.sin((elapsed % 5600) / 5600 * Math.PI * 2 + .55) + 1) / 2) * .48;
        path.setAttribute('d', makePath(detail));
        particles.forEach((dot, index) => {
          const tail = index / (particles.length - 1);
          const point = pointAt(normalize(progress - tail * .18), detail);
          const fade = Math.pow(1 - tail, .56);
          dot.setAttribute('cx', point.x.toFixed(2));
          dot.setAttribute('cy', point.y.toFixed(2));
          dot.setAttribute('r', (0.9 + fade * 2.7).toFixed(2));
          dot.setAttribute('opacity', (0.04 + fade * .96).toFixed(3));
        });
        this.frame = requestAnimationFrame(render);
      };
      this.frame = requestAnimationFrame(render);
    }

    disconnectedCallback() {
      cancelAnimationFrame(this.frame);
    }
  }

  customElements.define('heart-wave-loader', HeartWaveLoader);
})();
