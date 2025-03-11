// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');
const body = document.body;

mobileMenu.addEventListener('click', () => {
  navUl.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('menu-open'); // Toggle body class
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open'); // Remove body class
  });
});

