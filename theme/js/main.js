// Theme toggle functionality
const theme = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
})();

if (theme === 'dark') {
  document.documentElement.classList.add('dark');
  document.getElementById('theme-icon-moon').classList.add('hidden');
  document.getElementById('theme-icon-sun').classList.remove('hidden');
} else {
  document.getElementById('theme-icon-sun').classList.add('hidden');
  document.getElementById('theme-icon-moon').classList.remove('hidden');
}
localStorage.setItem('theme', theme);

document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    document.getElementById('theme-icon-sun').classList.add('hidden');
    document.getElementById('theme-icon-moon').classList.remove('hidden');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-icon-moon').classList.add('hidden');
    document.getElementById('theme-icon-sun').classList.remove('hidden');
  }
});
