var profileButton = document.querySelector(".profile__button");
var profileModal = document.querySelector(".profile-modal");
var profileModalButton = document.querySelector(".profile-modal__button");

if (profileButton && profileModal && profileModalButton) {
  profileButton.addEventListener("click", function () {
    profileModal.classList.add("profile-modal--opened");
  })

  profileModalButton.addEventListener("click", function () {
    profileModal.classList.remove("profile-modal--opened");
  })
}
