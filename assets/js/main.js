(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('.theme-icon');
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  const paintIcon = () => { icon.textContent = root.dataset.theme === 'dark' ? '☼' : '☾'; };
  paintIcon();
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    paintIcon();
  });
  const menuButton = document.getElementById('menuToggle');
  const nav = document.querySelector('.desktop-nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('menu-open', open);
    menuButton.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('copyEmail').addEventListener('click', async () => {
    const button = document.getElementById('copyEmail');
    try { await navigator.clipboard.writeText('gvgohil232@gmail.com'); button.textContent = 'COPIED ✓'; }
    catch { button.textContent = 'gvgohil232@gmail.com'; }
    setTimeout(() => button.textContent = 'COPY ↗', 1800);
  });
})();