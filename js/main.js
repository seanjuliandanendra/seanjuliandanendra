/* ==========================================================================
   Sean Julian Danendra — Personal Portfolio
   Vanilla JavaScript. Every feature degrades gracefully if this file fails.
   ========================================================================== */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var MENU_BREAKPOINT = '(max-width: 959px)';

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Navigation: scrolled state ---------- */
  function initNavScroll() {
    var nav = document.getElementById('nav');
    if (!nav) return;

    var ticking = false;
    function update() {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  /* ---------- Navigation: active section ---------- */
  function initActiveSection() {
    var sections = document.querySelectorAll('[data-section]');
    var links = document.querySelectorAll('[data-nav]');
    if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

    function setActive(id) {
      links.forEach(function (link) {
        if (link.getAttribute('data-nav') === id) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.getAttribute('data-section'));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
    setActive('home');
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    var nav = document.getElementById('nav');
    var toggle = document.querySelector('.nav__toggle');
    var menu = document.getElementById('menu');
    if (!nav || !toggle || !menu) return;

    var menuLinks = menu.querySelectorAll('a');
    var isOpen = false;

    function setOpen(open) {
      isOpen = open;
      menu.classList.toggle('is-open', open);
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
      if ('inert' in menu) menu.inert = !open;
    }

    // Start closed (also makes the hidden menu unreachable by keyboard)
    setOpen(false);

    toggle.addEventListener('click', function () { setOpen(!isOpen); });

    // Close before the browser follows the anchor so scrolling is never locked
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        setOpen(false);
        toggle.focus();
        return;
      }

      // Keep keyboard focus inside the open menu (toggle + links)
      if (event.key === 'Tab') {
        var focusable = [toggle].concat(Array.prototype.slice.call(menuLinks));
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    // Reset if the window grows past the menu breakpoint
    var query = window.matchMedia(MENU_BREAKPOINT);
    var onChange = function (e) { if (!e.matches && isOpen) setOpen(false); };
    if (query.addEventListener) query.addEventListener('change', onChange);
    else if (query.addListener) query.addListener(onChange);
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    function showAll() {
      items.forEach(function (item) { item.classList.add('is-visible'); });
    }

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    items.forEach(function (item) { observer.observe(item); });
  }

  /* ---------- Hero parallax (desktop and tablet only, tiny range) ---------- */
  function initParallax() {
    var cover = document.querySelector('.hero__cover');
    if (!cover) return;

    var wide = window.matchMedia('(min-width: 768px)');
    var ticking = false;

    function update() {
      ticking = false;
      if (reducedMotion.matches || !wide.matches) {
        cover.style.removeProperty('--parallax');
        return;
      }
      var limit = cover.offsetHeight * 0.06;
      var offset = Math.min(Math.max(window.scrollY * 0.08, 0), limit);
      cover.style.setProperty('--parallax', offset.toFixed(1) + 'px');
    }

    window.addEventListener('scroll', function () {
      if (window.scrollY > cover.offsetHeight) return; // hero is off screen
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- Placeholder links ---------- */
  // Links that still need a real address do nothing until you replace them.
  function initPlaceholderLinks() {
    document.querySelectorAll('[data-placeholder="true"], [data-placeholder-email="true"]').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var isPlaceholder = link.getAttribute('data-placeholder') === 'true' || href.indexOf('mailto:?') === 0;
      if (!isPlaceholder) return;
      link.setAttribute('title', 'Placeholder: add your real link in index.html');
      link.addEventListener('click', function (event) { event.preventDefault(); });
    });
  }

  /* ---------- Back to top ---------- */
  function initBackToTop() {
    var link = document.getElementById('back-to-top');
    var home = document.getElementById('home');
    if (!link || !home) return;

    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      home.setAttribute('tabindex', '-1');
      home.focus({ preventScroll: true });
    });
  }

  function init() {
    initYear();
    initNavScroll();
    initActiveSection();
    initMenu();
    initReveal();
    initParallax();
    initPlaceholderLinks();
    initBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
