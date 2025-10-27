// Load stored theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.dataset.theme = savedTheme;

// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.textContent = savedTheme === 'dark' ? '🌙 Dark Mode' : '🌞 Light Mode';

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  toggleBtn.textContent = next === 'dark' ? '🌙 Dark Mode' : '🌞 Light Mode';
});
