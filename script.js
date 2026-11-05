const searchInput = document.getElementById('sourceSearch');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const sourceCards = [...document.querySelectorAll('.source-card')];
const noResults = document.getElementById('noResults');
let activeFilter = 'all';

function filterSources() {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  sourceCards.forEach(card => {
    const matchesTerm = `${card.dataset.name} ${card.textContent}`.toLowerCase().includes(term);
    const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
    const show = matchesTerm && matchesFilter;
    card.hidden = !show;
    if (show) visible++;
  });
  noResults.hidden = visible !== 0;
}

searchInput.addEventListener('input', filterSources);
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    filterSources();
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

document.getElementById('year').textContent = new Date().getFullYear();
