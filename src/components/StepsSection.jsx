export default function StepsSection() {
  const steps = [
    { icon: "🍽️", title: "Pick Your Meals", description: "Select from a wide range of meat-based, vegetarian, high protein, gluten free and keto meals" },
    { icon: "👨‍🍳", title: "We Cook Them To Perfection", description: "Let our gourmet chefs prepare, cook and perfectly craft your choices" },
    { icon: "🚚", title: "We Deliver Fresh To You", description: "Take the delivery at a time convenient to you and get real time updates once it leaves our kitchen" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">
              DO IT IN
              <br />
              <span className="text-green-500">3 EASY STEPS</span>
            </h2>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
              Get Started
            </button>
          </div>
          <div className="md:w-2/3 grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl bg-green-100 rounded-full">
                  {step.icon}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

