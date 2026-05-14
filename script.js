const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formStatus) {
    formStatus.textContent = "Thanks. We will get back to you soon.";
  }
});
