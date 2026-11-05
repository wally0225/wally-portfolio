(function(){
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;

  var sections = [];
  links.forEach(function(link){
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) sections.push({ link: link, section: section });
  });
  if (!sections.length) return;

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      var match = sections.find(function(s){ return s.section === entry.target; });
      if (!match) return;
      if (entry.isIntersecting) {
        sections.forEach(function(s){ s.link.classList.remove('is-active'); });
        match.link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(function(s){ observer.observe(s.section); });
})();
