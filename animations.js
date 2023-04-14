window.addEventListener('load', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target;

      // Add animation class
      target.classList.add('animate');

      // Remove animation class after 300ms
      setTimeout(() => {
        target.classList.remove('animate');
      }, 300);

      // Navigate to the target page after the animation
      setTimeout(() => {
        window.location.href = target.href;
      }, 300);
    });
  });
});
