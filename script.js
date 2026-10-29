// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple placeholder submit handler (you can replace with real backend/email)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Your request has been submitted. Windy City Transport will contact you with verification documents.');
    form.reset();
  });
}
