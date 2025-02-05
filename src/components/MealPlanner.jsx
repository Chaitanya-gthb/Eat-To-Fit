import { useState } from "react";

export default function MealPlanner() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    goal: "weightLoss",
    dietaryRestrictions: "",
    allergies: "",
  });
  const [mealPlan, setMealPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockMealPlan = formData.goal === "weightLoss"
      ? {
          breakfast: "Oatmeal with berries",
          lunch: "Grilled chicken salad",
          dinner: "Baked salmon with veggies",
        }
      : {
          breakfast: "Peanut butter smoothie",
          lunch: "Beef and quinoa bowl",
          dinner: "Chicken pasta with cheese",
        };

    setMealPlan(mockMealPlan);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-black text-green-400 rounded-xl shadow-lg border border-green-600">
      <h1 className="text-3xl font-bold mb-4 text-green-300 text-center">Personalized Meal Planner</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-green-500 bg-black text-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border border-green-500 bg-black text-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (KG)"
          value={formData.weight}
          onChange={handleChange}
          className="w-full p-2 border border-green-500 bg-black text-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Height (CM)"
          value={formData.height}
          onChange={handleChange}
          className="w-full p-2 border border-green-500 bg-black text-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <div className="flex space-x-4 text-green-300">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="goal"
              value="weightLoss"
              checked={formData.goal === "weightLoss"}
              onChange={handleChange}
              className="accent-green-500"
            />
            <span>Weight Loss</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="goal"
              value="weightGain"
              checked={formData.goal === "weightGain"}
              onChange={handleChange}
              className="accent-green-500"
            />
            <span>Weight Gain</span>
          </label>
        </div>

        <textarea
          name="dietaryRestrictions"
          placeholder="Dietary Restrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
          className="w-full p-2 border border-green-500 bg-black text-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          name="allergies"
          placeholder="Allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full p-2 border border-green-500 bg-black text-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-black font-bold p-2 rounded w-full transition duration-300"
        >
          Get Meal Plan
        </button>
      </form>

      {mealPlan && (
        <div className="mt-6 p-4 bg-green-800 text-black rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-center">Your Meal Plan</h2>
          {Object.entries(mealPlan).map(([meal, recipe]) => (
            <div key={meal} className="mb-2">
              <strong>{meal.charAt(0).toUpperCase() + meal.slice(1)}:</strong> {recipe}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 
