(function(){
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch(e) {}
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }
  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function(){
      var current = root.getAttribute('data-theme');
      var isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch(e) {}
    });
  });
})();
