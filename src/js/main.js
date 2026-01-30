import { loadHTML } from './utils.js';
import { initNavbar } from './navbar.js';
import { initSidebar } from './sidebar.js';

// 1️⃣ Load Navbar
await loadHTML('#layout-header', '/src/components/navbar.html');
initNavbar();

// 2️⃣ Load Sidebar
await loadHTML('#layout-sidebar', '/src/components/sidebar.html');
initSidebar();

// 3️⃣ Load default page into content
await loadHTML('#layout-content', '/src/pages/dashboard.html');
