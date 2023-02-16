const primaryHeader = document.querySelector(".primary-header");
const toggleNav = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

toggleNav.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
