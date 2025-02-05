export default function HeroSection() {
  const bgImage  = "url('https://plus.unsplash.com/premium_photo-1694707367241-379972ecdc10?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

  return (
    <section className="pt-32 pb-16 bg-transparent text-white relative min-h-screen" 
    style={{
      backgroundImage: bgImage,
      height: "100%",
      width: "100%"
      }}>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-lg mb-4">
          <span className="text-green-500">SCIENCE</span> BACKED | <span className="text-green-500">DIETITIAN</span> DESIGNED
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          LOW-CARB MEALS
        </h1>
        <p className="text-xl mb-8">
          Delivered <span className="text-green-500">fresh</span> to you
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 mb-4">
          BROWSE MENU
        </button>
        <div>
          <a href="#dates" className="text-green-500 hover:underline">
            Select your delivery dates
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </section>
  );
}

