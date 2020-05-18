const headerMain = document.querySelector(".page-header__main");
const headerToggle = document.querySelector(".page-header__toggle");
const mainNav = document.querySelector(".main-nav");
const logo = document.querySelector(".page-header__logo");

logo.classList.remove("page-header__logo--colored");
headerMain.classList.add("page-header__main--closed");
mainNav.classList.add("main-nav--closed");

headerToggle.addEventListener("click", function () {
  this.classList.toggle("page-header__toggle--opened");
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");

  headerMain.classList.toggle("page-header__main--closed");
  headerMain.classList.toggle("page-header__main--opened");
})
