const filter = document.querySelector(".country-filter");
const filterToggle = document.querySelector(".country-filter__toggle");
const filterContinents = document.querySelector(".country-filter__continents");
const filterCountries = document.querySelector(".country-filter__countries");

const filterCloseText = document.querySelector(".country-filter__close");
const filterShowAllText = document.querySelector(".country-filter__show-all");


const filterTurnButton = document.querySelector(".country-filter__turn-button");

function filterToggler() {
  filterToggle.classList.toggle("country-filter__toggle--opened");
  filterContinents.classList.toggle("country-filter--opened");
  filterCountries.classList.toggle("country-filter--opened");
  filter.classList.toggle("country-filter__opened");

  filterCloseText.classList.toggle("d-none");
  filterShowAllText.classList.toggle("d-none");
}

filterToggle.addEventListener("click", filterToggler);
filterTurnButton.addEventListener("click", filterToggler);
