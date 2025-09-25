const radioRatingBtns = document.getElementsByName("rating");
const submitBtn = document.querySelector(".submit-btn");
const chosenRatingDisplay = document.getElementById("chosen-rating");

const ratingContainer = document.querySelector(".rating-container");
const resultContainer = document.querySelector(".result-container");

function submitRating() {
  const chosenRating = document.querySelector(
    'input[name="rating"]:checked'
  ).value;

  chosenRatingDisplay.textContent = chosenRating;

  ratingContainer.style.display = "none";
  resultContainer.style.display = "grid";
}

function chooseRating() {
  submitBtn.disabled = !document.querySelector('input[name="rating"]:checked');
}

radioRatingBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", chooseRating);
});

submitBtn.addEventListener("click", submitRating);
