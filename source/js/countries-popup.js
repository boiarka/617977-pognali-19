const chosoeButton = document.querySelector(".choose-country__button");
const chooseCountryWrapper = document.querySelector(".choose-country");
const chooseClose = document.querySelector(".choose-country__close");
const choosePopup = document.querySelector(".countries-popup ");



chosoeButton.addEventListener("click", function () {
  chooseCountryWrapper.classList.add("choose-country--active");
  choosePopup.classList.add("countries-popup--opened");
})

chooseClose.addEventListener("click", function () {
  chooseCountryWrapper.classList.remove("choose-country--active");
  choosePopup.classList.remove("countries-popup--opened");
})