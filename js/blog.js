/* ============================================
   blog.js — Blog sayfası renderer
   content/blog/posts.json'dan içerik yükler
   ============================================ */

/* İkon oluşturucu */
function blogIcon(post) {
  if (post.ikonTip === 'emoji') return `<span style="font-size:1.4rem;">${post.ikon}</span>`;
  if (post.ikonTip === 'kitap') {
    return '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>';
  }
  if (post.ikonTip === 'yer-imi') {
    return '<svg class="svg-icon" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>';
  }
  return '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21.17 6.81a1 1 0 0 0-3.98-3.98L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/></svg>';
}

/* Kategori etiketini okunabilir hale getir */
const KATEGORİ_ETIKET = {
  kitap:    'Kitap',
  tarih:    'Tarih',
  dusunce:  'Düşünce'
};

/* Tek blog kartı HTML'i */
function buildPostCard(post) {
  const label = KATEGORİ_ETIKET[post.kategori] || post.kategori;
  return `
    <a href="${escapeHTML(post.href)}" class="blog-entry reveal" data-category="${escapeHTML(post.kategori)}">
      <div class="blog-entry-visual">
        <div class="blog-entry-icon">${blogIcon(post)}</div>
      </div>
      <div class="blog-entry-body">
        <div class="blog-entry-meta">
          <span class="badge badge-sm">${escapeHTML(label)}</span>
          <span class="blog-entry-date">${escapeHTML(post.tarih)}</span>
          <span class="blog-entry-read">${escapeHTML(post.okumaSuresi)}</span>
        </div>
        <h3 class="blog-entry-title">${escapeHTML(post.baslik)}</h3>
        <p class="blog-entry-desc">${escapeHTML(post.aciklama)}</p>
      </div>
    </a>`;
}

/* İçeriği render et */
function renderPosts(posts) {
  const list = document.getElementById('blog-post-list');
  if (!list) return;
  list.innerHTML = posts.map(buildPostCard).join('');
  initReveal(list);
}

/* Filtreleme sekmelerini bağla */
function bindFilterTabs(posts) {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const filtered = filter === 'tumu' ? posts : posts.filter(p => p.kategori === filter);
      renderPosts(filtered);
    });
  });
}

/* Blog sayfası başlatıcısı */
async function initBlogPage() {
  const posts = await fetchJSON('content/blog/posts.json');
  if (!posts) return;

  renderPosts(posts);
  bindFilterTabs(posts);
}
