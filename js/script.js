// Add any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Eat2Fit website loaded successfully!");
});

// mealplanner steps
function nextStep(step) {
  document.getElementById(`step${step}`).classList.add("hidden");
  document.getElementById(`step${step + 1}`).classList.remove("hidden");
}

const mealPlans = {
  weight_loss: {
    vegan: [
      {
        meal: "BREAKFAST",
        food: "Chia Pudding with Berries",
        img: "chia_pudding.jpg",
        calories: 300,
      },
      {
        meal: "MID-MORNING SNACK",
        food: "Almond Butter Toast",
        img: "almond_toast.jpg",
        calories: 250,
      },
      {
        meal: "LUNCH",
        food: "Quinoa Salad with Chickpeas & Avocado",
        img: "quinoa_salad.jpg",
        calories: 500,
      },
      {
        meal: "EVENING SNACK",
        food: "Green Smoothie (Spinach, Banana, Chia)",
        img: "green_smoothie.jpg",
        calories: 300,
      },
      {
        meal: "DINNER",
        food: "Stir-fried Tofu with Brown Rice & Vegetables",
        img: "stir_fry_tofu.jpg",
        calories: 600,
      },
    ],
    keto: [
      {
        meal: "BREAKFAST",
        food: "Scrambled Eggs with Avocado",
        img: "eggs_avocado.jpg",
        calories: 350,
      },
      {
        meal: "MID-MORNING SNACK",
        food: "Cheese and Almonds",
        img: "cheese_almonds.jpg",
        calories: 300,
      },
      {
        meal: "LUNCH",
        food: "Grilled Chicken with Broccoli & Butter Sauce",
        img: "grilled_chicken.jpg",
        calories: 600,
      },
      {
        meal: "EVENING SNACK",
        food: "Keto Fat Bombs (Coconut & Peanut Butter)",
        img: "fat_bombs.jpg",
        calories: 400,
      },
      {
        meal: "DINNER",
        food: "Salmon with Asparagus & Garlic Butter",
        img: "salmon_asparagus.jpg",
        calories: 800,
      },
    ],
  },
  weight_gain: {
    vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Oatmeal with Peanut Butter & Banana",
        img: "oatmeal_pb.jpg",
        calories: 600,
      },
      {
        meal: "MID-MORNING SNACK",
        food: "Mango Smoothie with Yogurt & Nuts",
        img: "mango_smoothie.jpg",
        calories: 500,
      },
      {
        meal: "LUNCH",
        food: "Paneer Curry with Brown Rice & Chapati",
        img: "paneer_curry.jpg",
        calories: 900,
      },
      {
        meal: "EVENING SNACK",
        food: "Roasted Chickpeas & Dates",
        img: "roasted_chickpeas.jpg",
        calories: 400,
      },
      {
        meal: "DINNER",
        food: "Lentil Soup with Whole Wheat Bread & Butter",
        img: "lentil_soup.jpg",
        calories: 800,
      },
    ],
    high_protein: [
      {
        meal: "BREAKFAST",
        food: "Greek Yogurt with Nuts & Honey",
        img: "yogurt_nuts.jpg",
        calories: 500,
      },
      {
        meal: "MID-MORNING SNACK",
        food: "Protein Shake with Almond Butter",
        img: "protein_shake.jpg",
        calories: 700,
      },
      {
        meal: "LUNCH",
        food: "Grilled Steak with Sweet Potatoes & Butter",
        img: "steak_sweet_potato.jpg",
        calories: 1000,
      },
      {
        meal: "EVENING SNACK",
        food: "Hard-Boiled Eggs with Cheese",
        img: "eggs_cheese.jpg",
        calories: 500,
      },
      {
        meal: "DINNER",
        food: "Tuna Salad with Eggs & Avocado",
        img: "tuna_salad.jpg",
        calories: 900,
      },
    ],
    mass_gain: [
      {
        meal: "BREAKFAST",
        food: "Whole Eggs with Sausages & Toast",
        img: "eggs_sausages.jpg",
        calories: 800,
      },
      {
        meal: "MID-MORNING SNACK",
        food: "Peanut Butter & Banana Shake",
        img: "pb_shake.jpg",
        calories: 700,
      },
      {
        meal: "LUNCH",
        food: "Grilled Chicken with Rice & Avocado",
        img: "chicken_rice.jpg",
        calories: 1200,
      },
      {
        meal: "EVENING SNACK",
        food: "Nuts & Dried Fruits Mix",
        img: "nuts_dried_fruits.jpg",
        calories: 600,
      },
      {
        meal: "DINNER",
        food: "Beef Stir Fry with Brown Rice & Butter",
        img: "beef_rice.jpg",
        calories: 1500,
      },
    ],
  },
};

function generateMealPlan() {
  const goal = document.querySelector('input[name="goal"]:checked')?.value;
  const diet = document.querySelector('input[name="diet"]:checked')?.value;
  let mealPlanHTML = "";

  if (goal && diet && mealPlans[goal][diet]) {
    mealPlanHTML = `<div class='bg-transparent p-6'>
      <h4 class='text-3xl text-black font-bold mb-10 text-center tracking-wider'>Your ${goal.replace(
        "_",
        "- "
      )} Meal Plan (${diet})</h4>`;

    mealPlans[goal][diet].forEach((meal) => {
      mealPlanHTML += `
        <div>
          <p class='text-lg font-semibold text-black mb-2'>${meal.meal}</p>
          <div class='meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md'>
            <img src='${meal.img}' class='w-32 h-20 rounded-md'/>
            <p class='text-gray-800'>${meal.food} - ${meal.calories} kcal</p>
          </div>
        </div>`;
    });
    mealPlanHTML += "</div>";
  } else {
    mealPlanHTML =
      "<p class='text-red-500'>Please select both a goal and a diet type.</p>";
  }

  document.getElementById("meal-plan-result").innerHTML = mealPlanHTML;
  document.getElementById("generate-plan").classList.add("hidden");
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

  let BMR =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  let calories = BMR * activity;
  document.getElementById(
    "result"
  ).innerText = `Your daily calorie need: ${Math.round(calories)} kcal`;

  setTimeout(() => {
    nextStep(1);
  }, 2000);
}

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
