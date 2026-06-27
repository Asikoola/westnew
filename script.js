/* ═══════════════════════════════════════
   WESTMIRE WIRED — JAVASCRIPT v6
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Hamburger menu toggle ── */
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
    document.addEventListener('click', function (e) {
      if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ── Active nav highlight on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a:not(.nav-cta), .nav-drawer a:not(.nav-cta)');
  const highlightObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        document.querySelectorAll(
          '.nav-links a[href="#' + entry.target.id + '"]:not(.nav-cta),' +
          '.nav-drawer a[href="#' + entry.target.id + '"]:not(.nav-cta)'
        ).forEach(function (a) { a.classList.add('active'); });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(function (s) { highlightObserver.observe(s); });

});
