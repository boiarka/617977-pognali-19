var chosoeButton = document.querySelector(".choose-country__button");
var chooseCountryWrapper = document.querySelector(".choose-country");
var chooseClose = document.querySelector(".choose-country__close");
var choosePopup = document.querySelector(".countries-popup ");

if (chosoeButton) {
  chosoeButton.addEventListener("click", function () {
    chooseCountryWrapper.classList.add("choose-country--active");
    choosePopup.classList.add("countries-popup--opened");
  })
}

if (choosePopup) {
  chooseClose.addEventListener("click", function () {
    chooseCountryWrapper.classList.remove("choose-country--active");
    choosePopup.classList.remove("countries-popup--opened");
  })
}
