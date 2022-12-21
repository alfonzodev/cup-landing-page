const navbar = document.querySelector(".navbar");
const logo = document.getElementById("header-img");
const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelectorAll(".nav-link");

// Change navbar styling on scroll
document.addEventListener("scroll", (event) => {
  if (window.scrollY >= navbar.offsetHeight) {
    navbar.classList.add("navbar-colored");
    logo.src = "images/logo-white.png";
  } else {
    navbar.classList.remove("navbar-colored");
    logo.src = "images/logo-black.png";
  }
});

// On Click hamburguer menu icon activate/deactivate menu
hamburguer.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});

// On click navlinks deactivate hamburguer menu
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});
