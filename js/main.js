// -----------------
// NAV TOGGLE
// -----------------

const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
    body.classList.toggle("no-scroll");

    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));

    navToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation" : "Close navigation",
    );
  });
}

const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!navToggle || !mobileNav) return;

    navToggle.classList.remove("is-active");
    mobileNav.classList.remove("is-active");
    body.classList.remove("no-scroll");

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});

// -----------------
// MENU ACCORDION
// -----------------

const menuCategories = document.querySelectorAll(".menu-category");

menuCategories.forEach((category) => {
  const trigger = category.querySelector(".menu-category__trigger");
  const content = category.querySelector(".menu-category__content");

  if (!trigger || !content) return;

  //Initial State
  if (category.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";

    trigger.setAttribute("aria-expanded", "true");
  } else {
    trigger.setAttribute("aria-expanded", "false");
  }

  trigger.addEventListener("click", () => {
    const isActive = category.classList.contains("active");

    menuCategories.forEach((item) => {
      const itemContent = item.querySelector(".menu-category__content");

      item.classList.remove("active");

      const itemTrigger = item.querySelector(".menu-category__trigger");

      if (itemTrigger) {
        itemTrigger.setAttribute("aria-expanded", "false");
      }

      if (itemContent) {
        itemContent.style.maxHeight = null;
      }
    });

    if (!isActive) {
      category.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";

      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

// -----------------
// STICKY HEADER
// -----------------

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  });
}

// -----------------
// WHATSAPP LINK
// -----------------

const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");

const whatsappUrl = "https://wa.me/6282285817141?text=Saya%20ingin%20order";

whatsappLinks.forEach((link) => {
  link.href = whatsappUrl;
});
