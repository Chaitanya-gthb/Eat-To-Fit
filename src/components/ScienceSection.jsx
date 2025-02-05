export default function ScienceSection() {
  const benefits = [
    "Eat food low in carbs",
    "Switch from glucose to fat for fuel & create ketones",
    "Experience lower blood sugar, more energy and weight loss"
  ];

  return (
    <section className="py-16 bg-green-500 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white text-black p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                LOW CARB IS
                <br />
                <span className="text-green-500">SCIENCE BACKED</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <blockquote className="text-2xl italic">
            Keto is the ultimate way to hack your metabolism and become a
            fatburning machine
          </blockquote>
          <p className="mt-4 text-xl">— Dr. Josh Axe</p>
        </div>
      </div>
    </section>
  );
}

