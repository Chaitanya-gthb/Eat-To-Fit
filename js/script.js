// Add any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Eat2Fit website loaded successfully!");
});

//mealplanner
function nextStep(step) {
  document.getElementById(`step${step}`).classList.add("hidden");
  document.getElementById(`step${step + 1}`).classList.remove("hidden");
}

function generateMealPlan() {
  const goal = document.getElementById("goal").value;
  let mealPlan = "";

  if (goal === "weight_loss") {
    mealPlan =
      "Breakfast: Oatmeal with fruits\nLunch: Grilled chicken salad\nDinner: Steamed veggies and quinoa";
  } else if (goal === "weight_gain") {
    mealPlan =
      "Breakfast: Scrambled eggs with whole grain toast\nLunch: Brown rice with chicken\nDinner: Salmon with sweet potatoes";
  } else {
    mealPlan =
      "Breakfast: Greek yogurt with nuts\nLunch: Turkey sandwich with whole wheat bread\nDinner: Stir-fried tofu with veggies";
  }

  document.getElementById("meal-plan-result").innerText = mealPlan;
  document.getElementById("generate-plan").style.display = "none";
}

//feedback
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const feedback = document.querySelector("#feedback");
let selectedRating = "Satisfied";
ratingsContainer.addEventListener("click", (e) => {
  if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.nextElementSibling
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  } else if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === "IMG"
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.innerHTML;
  }
});
sendBtn.addEventListener("click", (e) => {
  feedback.innerHTML = `
  <div class="mt-10">
        <img src="https://clipart-library.com/images/kiKneqgRT.jpg" class="w-26 h-20 ml-44 mb-4" />
        <strong >Thank You!</strong><br />
        <strong >Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our<br /> meals recipe</p>
</div>
`;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
