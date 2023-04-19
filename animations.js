document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.classList.add('animate');
    });
    link.addEventListener('mouseout', () => {
      link.classList.remove('animate');
    });
  });

  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 1s, transform 1s';
    section.style.transitionDelay = `${index * 200}ms`;
  });

  window.addEventListener('load', () => {
    sections.forEach((section) => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
  });
});


