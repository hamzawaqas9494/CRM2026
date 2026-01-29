export function initSidebar() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const navItems = document.querySelectorAll('#sidebar-nav .nav-item');

  // Safety check
  if (!sidebar || navItems.length === 0) return;

  /* ---------------------------------------------------
     MOBILE SIDEBAR TOGGLE
  --------------------------------------------------- */
  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }

  // Close sidebar when clicking outside (mobile only)
  document.addEventListener('click', (e) => {
    if (window.innerWidth >= 1024) return;
    if (toggle && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.add('-translate-x-full');
    }
  });

  /* ---------------------------------------------------
     RESET ALL NAV ITEMS TO DEFAULT STATE
  --------------------------------------------------- */
  const resetNavItems = () => {
    navItems.forEach(item => {
      item.classList.remove(
        'bg-purple-100',
        'text-purple-600',
        'font-bold'
      );

      item.classList.add(
        'text-gray-400',
        'font-semibold'
      );

      // Hide active indicator
      item.querySelector('.active-indicator').classList.add('hidden');
    });
  };

  /* ---------------------------------------------------
     SET DEFAULT ACTIVE ITEM (FIRST ONE)
  --------------------------------------------------- */
  resetNavItems();

  navItems[0].classList.remove('text-gray-400', 'font-semibold');
  navItems[0].classList.add('bg-purple-100', 'text-purple-600', 'font-bold');
  navItems[0].querySelector('.active-indicator').classList.remove('hidden');

  /* ---------------------------------------------------
     CLICK HANDLER FOR NAV ITEMS
  --------------------------------------------------- */
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent page jump

      resetNavItems();

      item.classList.remove('text-gray-400', 'font-semibold');
      item.classList.add('bg-purple-100', 'text-purple-600', 'font-bold');
      item.querySelector('.active-indicator').classList.remove('hidden');
    });
  });
}
