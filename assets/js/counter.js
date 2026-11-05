(function(){
  var nodes = document.querySelectorAll('.stat-num');
  if (!nodes.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render(el, value){
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    el.textContent = prefix + value.toFixed(decimals) + suffix;
  }

  function animate(el){
    var target = parseFloat(el.getAttribute('data-target'));
    var duration = parseInt(el.getAttribute('data-duration') || '1400', 10);
    if (reduceMotion || isNaN(target)) { render(el, target || 0); return; }

    var start = null;
    function step(ts){
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      render(el, target * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    nodes.forEach(function(el){ render(el, parseFloat(el.getAttribute('data-target')) || 0); });
    return;
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nodes.forEach(function(el){ observer.observe(el); });
})();
