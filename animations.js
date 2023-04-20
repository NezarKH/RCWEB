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
    const loading = document.getElementById('loading');
    setTimeout(() => {
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
        document.getElementById('search-container').classList.remove('hide');

        sections.forEach((section) => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0px)';
        });
      }, 1000);
    }, 2000);
  });
});

