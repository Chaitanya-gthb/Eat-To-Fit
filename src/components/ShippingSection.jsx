export default function ShippingSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-300 w-full h-64 rounded-lg"></div>
          </div>
          <div className="md:w-1/2 text-right">
            <h2 className="text-4xl font-bold mb-4">
              UNLOCK
              <br />
              FREE SHIPPING
              <br />
              ON
              <br />
              <span className="text-green-500">EVERY. SINGLE. ORDER</span>
            </h2>
            <div className="flex justify-end space-x-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
                Shipping Information
              </button>
              <button className="border border-green-500 text-green-500 px-6 py-3 rounded-md hover:bg-green-50">
                Subscription Perks
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

