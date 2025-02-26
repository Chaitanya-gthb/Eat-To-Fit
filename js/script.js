// Add any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Eat2Fit website loaded successfully!");
});

//mealplanner steps
function nextStep(step) {
  document.getElementById(`step${step}`).classList.add("hidden");
  document.getElementById(`step${step + 1}`).classList.remove("hidden");
}

function generateMealPlan() {
  const goal = document.querySelector('input[name="goal"]:checked')?.value; // Get selected radio button value
  let mealPlanHTML = "";

  if (goal === "weight_loss") {
    mealPlanHTML = `
    <div class="bg-transparent p-6">
        <h4 class="text-3xl text-black font-bold mb-10 text-center tracking-wider "> Your Weight-Loss Meal-Plan </h4>
      <div>
        <p class="text-lg font-semibold text-black mb-2">BREAKFAST</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Oatmeal with fruits</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-semibold text-black mt-4 mb-2">LUNCH</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Grilled chicken with quinoa</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-semibold text-black mt-4 mb-2">DINNER</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Salad with lean protein</p>
        </div>
      </div>
    </div>
    `;
  } else if (goal === "weight_gain") {
    mealPlanHTML = `
    <div class="bg-transparent p-6">
        <h4 class="text-3xl text-black font-bold mb-10 text-center tracking-wider "> Your Weight-G@in Meal-Plan </h4>
      <div>
        <p class="text-lg font-semibold text-black mb-2">BREAKFAST</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Oatmeal with fruits</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-semibold text-black mt-4 mb-2">LUNCH</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Grilled chicken with quinoa</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-semibold text-black mt-4 mb-2">DINNER</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Salad with lean protein</p>
        </div>
      </div>
    </div>
    `;
  } else {
    mealPlanHTML = `
    <div class="bg-transparent p-6">
        <h4 class="text-3xl text-black font-bold mb-10 text-center tracking-wider "> Your Weight-Maintain Meal-Plan </h4>
      <div>
        <p class="text-lg font-semibold text-black mb-2">BREAKFAST</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Oatmeal with fruits</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-semibold text-black mt-4 mb-2">LUNCH</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Grilled chicken with quinoa</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-semibold text-black mt-4 mb-2">DINNER</p>
        <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
          <p class="text-gray-800">Salad with lean protein</p>
        </div>
      </div>
    </div>
    `;
  }

  document.getElementById("meal-plan-result").innerHTML = mealPlanHTML;
  document.getElementById("generate-plan").classList.add("hidden");
}

function convertHeight(type) {
  let cm = document.getElementById("height-cm");
  let ft = document.getElementById("height-ft");
  let inch = document.getElementById("height-in");

  if (type === "cm") {
    let totalInches = Math.round(cm.value / 2.54); // Convert cm to inches and round
    ft.value = Math.floor(totalInches / 12);
    inch.value = totalInches % 12; // Always whole number
  } else {
    let totalInches = parseInt(ft.value) * 12 + parseInt(inch.value || 0);
    cm.value = Math.round(totalInches * 2.54); // Always whole number
  }
}

function convertWeight(type) {
  let kg = document.getElementById("weight-kg");
  let lbs = document.getElementById("weight-lbs");

  if (type === "kg") {
    lbs.value = Math.round(kg.value * 2.20462); // Convert kg to lbs and round
  } else {
    kg.value = Math.round(lbs.value / 2.20462); // Convert lbs to kg and round
  }
}

function calculateCalories() {
  let age = parseInt(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let height = parseInt(document.getElementById("height-cm").value);
  let weight = parseInt(document.getElementById("weight-kg").value);
  let activity = parseFloat(document.getElementById("activity").value);

  if (!age || !height || !weight) {
    document.getElementById("result").innerText = "Please fill all fields.";
    return;
  }

  let BMR;
  if (gender === "male") {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    BMR = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calories = BMR * activity;
  document.getElementById(
    "result"
  ).innerText = `Your daily calorie need: ${Math.round(calories)} kcal`;
  
  setTimeout(() => {
    nextStep(1);
  }, 2000);
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
