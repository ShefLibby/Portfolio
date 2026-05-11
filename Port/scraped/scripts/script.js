function hamburger() {
  var menu = document.getElementById("menuLinks");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Scroll-triggered reveal for below-fold elements
document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".scroll-reveal").forEach(function (el) {
    observer.observe(el);
  });
});
