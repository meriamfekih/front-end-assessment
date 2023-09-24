const burgerMenu = document.querySelector(".burger-menu-button");
const burgerMenuNav = document.querySelector(".burger-menu-links");

burgerMenu.addEventListener("click", () => {
  burgerMenuNav.classList.toggle("active");
});
