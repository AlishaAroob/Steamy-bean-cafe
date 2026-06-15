// Sticky nav shadow
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile hamburger
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll animations
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll(
  '.service-card, .step, .testimonial-card, .trust-item, .about__text, .about__image-wrap, .freebie__text, .freebie__form-box, .contact__form, .contact__info-card'
).forEach(el => {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});

// Form submissions (placeholder handlers)
document.getElementById('freebieForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Check your inbox!';
  btn.style.background = '#111';
  btn.disabled = true;
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Sent! I\'ll be in touch within 24 hours.';
  btn.disabled = true;
});
