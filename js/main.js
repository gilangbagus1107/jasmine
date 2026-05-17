const navToggle = document.querySelector(".mobile-nav-toggle");

const mobileNav = document.querySelector(".mobile-nav");

const body = document.body;

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-active");

  mobileNav.classList.toggle("is-active");

  body.classList.toggle("no-scroll");
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("is-active");

    mobileNav.classList.remove("is-active");

    body.classList.remove("no-scroll");
  });
});

const menuCategories = document.querySelectorAll(".menu-category");

menuCategories.forEach((category) => {
  const trigger = category.querySelector(".menu-category__trigger");

  trigger.addEventListener("click", () => {
    const isActive = category.classList.contains("active");

    menuCategories.forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      category.classList.add("active");
    }
  });
});
