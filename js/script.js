/* ============================================
   KUNAL SHARMA — POLITICAL RESEARCH
   script.js
   ============================================ */

(function () {
  'use strict';

  /* ── Dark Mode ─────────────────────────────────── */
  const THEME_KEY = 'ks-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  /* ── Active Nav Link ────────────────────────────── */
  function markActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a, .mobile-nav a').forEach(function (a) {
      const href = a.getAttribute('href').split('/').pop();
      if (href === path) a.classList.add('active');
    });
  }

  /* ── Mobile Nav ─────────────────────────────────── */
  function initMobileNav() {
    const btn = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!btn || !mobileNav) return;

    // Inject a mobile theme toggle next to hamburger if not on desktop
    const navRow = btn.closest('div');
    if (navRow && !navRow.querySelector('.mobile-theme-btn')) {
      const mobileTheme = document.createElement('button');
      mobileTheme.className = 'mobile-theme-btn';
      mobileTheme.id = 'theme-toggle-mobile';
      mobileTheme.setAttribute('aria-label', 'Toggle dark mode');
      mobileTheme.style.cssText = 'background:none;border:1px solid var(--border);color:var(--text-muted);cursor:pointer;width:36px;height:36px;border-radius:50%;font-size:0.95rem;transition:all 0.22s ease;';
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      mobileTheme.textContent = currentTheme === 'dark' ? '☀' : '☾';
      navRow.insertBefore(mobileTheme, btn);
      mobileTheme.addEventListener('click', function() {
        toggleTheme();
        const t = document.documentElement.getAttribute('data-theme');
        mobileTheme.textContent = t === 'dark' ? '☀' : '☾';
      });
    }

    btn.addEventListener('click', function () {
      const open = mobileNav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? '✕' : '☰';
    });
  }

  /* ── Init ───────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    markActiveNav();
    initMobileNav();

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);
  });

})();
