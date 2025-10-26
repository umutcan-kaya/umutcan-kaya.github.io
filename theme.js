(function(){
  // Find the toggle button
  function $(id){ return document.getElementById(id); }
  var btn = $('themeToggle');
  if (!btn) return;

  // Determine initial theme: saved → system → default (light)
  var saved = localStorage.getItem('theme');
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var initial = saved || (systemDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', initial);
  btn.textContent = initial === 'dark' ? '☀️ Light' : '🌙 Dark';

  btn.addEventListener('click', function(){
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
  });
})();
