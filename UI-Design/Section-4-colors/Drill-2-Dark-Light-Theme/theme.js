// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.dataset.theme = savedTheme;

// Reference toggle button
const toggleBtn = document.getElementById('theme-toggle');

// Update button label
toggleBtn.textContent = savedTheme === 'dark' ? '🌙 Dark Mode' : '🌞 Light Mode';

// Listen for click
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Apply and persist
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);

  // Update button text
  toggleBtn.textContent = newTheme === 'dark' ? '🌙 Dark Mode' : '🌞 Light Mode';
});
