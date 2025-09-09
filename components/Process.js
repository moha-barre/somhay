export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Tell Us What You Need",
      desc: "Send us product details or share a 1688 link of the item you want.",
    },
    {
      id: 2,
      title: "We Verify & Secure Your Order",
      desc: "Our agents check suppliers, confirm quality, and handle the purchase.",
    },
    {
      id: 3,
      title: "We Handle Logistics",
      desc: "From supplier to your location, we manage shipping and customs.",
    },
    {
      id: 4,
      title: "Safe & Reliable Payments",
      desc: "We ensure transparent, secure transactions every step of the way.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How Somhay Works
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 hover:border-[#4169E1] transition"
            >
              <div className="text-2xl font-bold text-[#4169E1] mb-3">
                {step.id}.
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}