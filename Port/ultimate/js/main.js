/* ============================================================
   Libby Shefferly — Ultimate Portfolio JS
   ============================================================ */

(function () {
  "use strict";

  /* ---- Cached elements ---- */
  var navbar     = document.getElementById("navbar");
  var navToggle  = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var backToTop  = document.getElementById("backToTop");
  var navLinks   = document.querySelectorAll(".nav-links a, .mobile-menu a");
  var sections   = document.querySelectorAll("section[id]");

  /* ---- Nav scroll state ---- */
  function onScroll() {
    var y = window.scrollY;

    /* Solid nav after 60px */
    if (y > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    /* Back to top */
    if (y > 320) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

    /* Scroll spy */
    var current = "";
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 90;
      if (y >= top) { current = sec.id; }
    });
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  navToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    navToggle.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
  });

  /* Close mobile menu on link click */
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      navToggle.textContent = "☰";
    });
  });

  /* ---- Scroll reveal ---- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---- Back to top ---- */
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Smooth scroll for in-page anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        var offset = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });

})();
