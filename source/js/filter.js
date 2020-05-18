var filter = document.querySelector(".country-filter");
var filterToggle = document.querySelector(".country-filter__toggle");
var filterContinents = document.querySelector(".country-filter__continents");
var filterCountries = document.querySelector(".country-filter__countries");

var filterCloseText = document.querySelector(".country-filter__close");
var filterShowAllText = document.querySelector(".country-filter__show-all");

var filterTurnButton = document.querySelector(".country-filter__turn-button");

function filterToggler() {
  filterToggle.classList.toggle("country-filter__toggle--opened");
  filterContinents.classList.toggle("country-filter--opened");
  filterCountries.classList.toggle("country-filter--opened");
  filter.classList.toggle("country-filter__opened");

  filterCloseText.classList.toggle("d-none");
  filterShowAllText.classList.toggle("d-none");
}

if (filterToggle) {
  filterToggle.addEventListener("click", filterToggler);
}
if (filterTurnButton) {
  filterTurnButton.addEventListener("click", filterToggler);
}

// pick country

var countriesListDiv = document.querySelector(".country-filter__countries-checked");
var alphabetButtons = document.querySelectorAll(".alphabet .alphabet__button");
var alphabetLists = document.querySelectorAll(".alphabet .alphabet__list");

function pickList(dataset) {
  for (var k = 0; k < alphabetLists.length; k++) {
    if (alphabetLists[k].dataset.info == dataset) {
      alphabetLists[k].classList.remove("alphabet__list");
      alphabetLists[k].classList.add("country-filter__list", "countries-list", "countries-list--active");
      countriesListDiv.innerHTML = "";
      countriesListDiv.appendChild(alphabetLists[k]);
    }
  }
}

if (alphabetButtons && alphabetLists) {
  for (var i = 0; i < alphabetButtons.length; i++) {
    alphabetButtons[i].addEventListener("click", function () {
      pickList(alphabetButtons[i].dataset.info);
    });
  }
}

//search
var searchButtons = document.querySelectorAll(".page-main__filter .form-fieldset__toggle");
var searchInners = document.querySelectorAll(".page-main__filter .form-fieldset__inner");
var openedInners = document.querySelectorAll(".page-main__filter .form-fieldset__inner--opened");

function addListener(button, inner) {
  button.addEventListener("click", function () {
    inner.classList.toggle("form-fieldset__inner--closed");
    button.classList.toggle("form-fieldset__toggle--close");
  });
}

if (searchInners && searchButtons) {
  for (var i = 0; i < searchInners.length; i++) {
    searchInners[i].classList.add("form-fieldset__inner--closed");
    searchButtons[i].classList.add("form-fieldset__toggle--close");
    addListener(searchButtons[i], searchInners[i]);
  }
}
