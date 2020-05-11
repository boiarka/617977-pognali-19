const profileButton = document.querySelector(".profile__button");
const profileModal = document.querySelector(".profile-modal");
const profileModalButton = document.querySelector(".profile-modal__button");

profileButton.addEventListener("click", () => {
  profileModal.classList.add("profile-modal--opened");
})

profileModalButton.addEventListener("click", () => {
  profileModal.classList.remove("profile-modal--opened");
})
