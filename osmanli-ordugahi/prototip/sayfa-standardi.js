(() => {
  const filterLabel = document.querySelector('label[for="unitFilter"]');
  if (filterLabel) filterLabel.textContent = 'Kayda göre filtrele';
  const toggle = document.getElementById('pageThemeToggle');
  if (!toggle) return;
  let dark = false;
  try { dark = localStorage.getItem('atlas-theme') === 'dark'; } catch {}
  const apply = value => {
    document.body.classList.toggle('dark-theme', value);
    toggle.textContent = value ? 'Açık tema' : 'Koyu tema';
    toggle.setAttribute('aria-pressed', String(value));
  };
  apply(dark);
  toggle.addEventListener('click', () => {
    dark = !document.body.classList.contains('dark-theme');
    apply(dark);
    try { localStorage.setItem('atlas-theme', dark ? 'dark' : 'light'); } catch {}
  });
})();
