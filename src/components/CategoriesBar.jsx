export default function CategoriesBar() {
  const categories = ["High Protein", "Halal - Meat", "Vegetarian", "Keto-Friendly", "HACCP"];

  return (
    <div className="bg-green-500 text-white py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-between items-center">
          {categories.map((category, index) => (
            <li key={index} className="text-sm md:text-base font-medium">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

