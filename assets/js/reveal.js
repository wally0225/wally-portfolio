(function(){
  var selector = '.portal-card, .list-card, .feature, .feature-full, .step, '
    + '.mini-step, .result-mark, .arch-box, .dual-list, .wrap-scroll, '
    + '.tl-item, .skill-group, .flow > div';
  var targets = document.querySelectorAll(selector);
  if (!targets.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }

  targets.forEach(function(el, i){
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i * 60, 300) + 'ms';
  });

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function(el){ observer.observe(el); });
})();
