const headerMain = document.querySelector(".page-header__main");
const headerToggle = document.querySelector(".page-header__toggle");

const mainNav = document.querySelector(".main-nav");
mainNav.classList.remove("main-nav__nojs");

headerToggle.addEventListener("click", function () {
  this.classList.toggle("page-header__toggle--opened");
  headerMain.classList.add("page-header__main--opened");
  mainNav.classList.toggle("main-nav__opened");
})
