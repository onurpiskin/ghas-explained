(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let explicitTheme = false;

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  }

  try {
    const stored = localStorage.getItem('ghas-theme');
    explicitTheme = stored === 'dark' || stored === 'light';
    setTheme(explicitTheme ? stored : (preference.matches ? 'dark' : 'light'));
  } catch (error) {
    console.warn('Theme preference storage is unavailable; using the system theme.', error);
    setTheme(preference.matches ? 'dark' : 'light');
  }
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    explicitTheme = true;
    setTheme(next);
    try {
      localStorage.setItem('ghas-theme', next);
    } catch (error) {
      console.warn('Theme changed for this page, but the preference could not be saved.', error);
    }
  });
  preference.addEventListener('change', (event) => {
    if (!explicitTheme) setTheme(event.matches ? 'dark' : 'light');
  });

  const checklist = [...document.querySelectorAll('input[name="setup"]')];
  const progress = document.getElementById('setup-progress');
  const status = document.getElementById('setup-status');
  function updateProgress() {
    const count = checklist.filter((checkbox) => checkbox.checked).length;
    progress.value = count;
    status.textContent = `${count} of ${checklist.length} steps reviewed`;
  }
  checklist.forEach((checkbox) => checkbox.addEventListener('change', updateProgress));
  document.getElementById('progress-row').hidden = false;
  window.addEventListener('pageshow', updateProgress);
  updateProgress();
})();
