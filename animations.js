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
function searchFunction() {
  const input = document.getElementById('search-input');
  const filter = input.value.toLowerCase();
  const sections = document.querySelectorAll('section');
  const searchResultsList = document.getElementById('search-results-list');
  const searchResults = document.getElementById('search-results');

  searchResultsList.innerHTML = '';
  let resultsFound = false;

  sections.forEach((section) => {
    const header = section.querySelector('h2') || section.querySelector('h1');
    const content = section.innerHTML;

    if (header && content.toLowerCase().indexOf(filter) > -1) {
      resultsFound = true;
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + section.id;
      link.textContent = header.textContent;
      listItem.appendChild(link);
      searchResultsList.appendChild(listItem);
    }
  });

  if (resultsFound) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
}

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
    }, 1000);
  }, 2000);
});

