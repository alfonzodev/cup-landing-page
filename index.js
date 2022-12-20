const navbar = document.querySelector(".navbar");
const logo = document.getElementById("header-img");

document.addEventListener("scroll", (event) => {
  if (window.scrollY >= navbar.offsetHeight) {
    navbar.classList.add("navbar-colored");
    logo.src = "images/logo-white.png";
  } else {
    navbar.classList.remove("navbar-colored");
    logo.src = "images/logo-black.png";
  }
});
