var headerMain = document.querySelector(".page-header__main");
var headerToggle = document.querySelector(".page-header__toggle");
var mainNav = document.querySelector(".main-nav");
var logo = document.querySelector(".page-header__logo");

document.createElement("picture");
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
