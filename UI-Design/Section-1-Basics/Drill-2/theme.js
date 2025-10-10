const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = "Toggle Theme";
toggleThemeBtn.style.margin = "1rem";
document.body.prepend(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = currentTheme === "dark" ? "" : "dark";
});
