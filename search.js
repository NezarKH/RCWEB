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

