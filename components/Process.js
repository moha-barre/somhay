export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Choose What You Want",
      desc: "Browse trusted Chinese marketplaces such as Alibaba or Shein and pick the product that fits your needs—whether it’s fashion, electronics, or business supplies.",
    },
    {
      id: 2,
      title: "Review & Collect Product Details",
      desc: "Open the product page, carefully check the specifications, sizes, and seller ratings, then copy the product link (URL). This ensures we can find the exact item for you.",
    },
    {
      id: 3,
      title: "Share the Product With Us",
      desc: (
        <>
          Send us the link or details through{" "}
          <a
            href="https://wa.me/252770722363"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline"
          >
            WhatsApp
          </a>{" "}
          or{" "}
          <a
            href="mailto:info@somhay.com"
            className="text-[#4169E1] hover:underline"
          >
            Email
          </a>
          . Our team will confirm availability, pricing, and shipping options tailored for Somalia.
        </>
      ),
    },
    {
      id: 4,
      title: "Secure Your Order",
      desc: "Once everything is confirmed, make your payment through the method you prefer. After that, we’ll handle the purchase, shipping, and delivery right to you.",
    },
  ];

  return (
    <section className="bg-back text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-tight">
          How Somhay Works
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-900 rounded-2xl p-8 shadow-md border border-gray-800 hover:border-[#4169E1] hover:shadow-lg transition duration-300"
            >
              <div className="text-2xl font-bold text-[#4169E1] mb-3">
                {step.id}.
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}