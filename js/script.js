// Add any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
    console.log("Eat2Fit website loaded successfully!")
  })
  
  function nextStep(step) {
    document.getElementById(`step${step}`).classList.add("hidden");
    document.getElementById(`step${step + 1}`).classList.remove("hidden");
  }

  function generateMealPlan() {
        const goal = document.getElementById("goal").value;
        let mealPlan = "";

        if (goal === "weight_loss") {
            mealPlan = "Breakfast: Oatmeal with fruits\nLunch: Grilled chicken salad\nDinner: Steamed veggies and quinoa";
        } else if (goal === "weight_gain") {
            mealPlan = "Breakfast: Scrambled eggs with whole grain toast\nLunch: Brown rice with chicken\nDinner: Salmon with sweet potatoes";
        } else {
            mealPlan = "Breakfast: Greek yogurt with nuts\nLunch: Turkey sandwich with whole wheat bread\nDinner: Stir-fried tofu with veggies";
        }

        document.getElementById("meal-plan-result").innerText = mealPlan;
        document.getElementById("generate-plan").style.display = "none";
    }