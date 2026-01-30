export function initNavbar() {
  const btn = document.getElementById('profile-btn');
  const menu = document.getElementById('profile-dropdown');

  if (!btn || !menu) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target)) menu.classList.add('hidden');
  });
}