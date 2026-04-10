// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('zgm-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('zgm-theme', next);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'var(--bg)';
  navLinks.style.padding = '16px 24px';
  navLinks.style.borderBottom = '1px solid var(--border)';
  navLinks.style.flexDirection = 'column';
  navLinks.style.gap = '8px';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 640) {
      navLinks.style.display = 'none';
    }
  });
});

// Reset mobile menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    navLinks.removeAttribute('style');
  }
});
