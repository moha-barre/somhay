import { Package, Truck, MapPin, CreditCard, CheckCircle } from "lucide-react";

export default function Operation() {
  const steps = [
    {
      id: 1,
      title: "Suppliers",
      icon: Package,
      blurb:
        "We connect you with verified suppliers worldwide, ensuring genuine products at the best value.",
      points: [
        "Access to 1688, Taobao, and global marketplaces",
        "Agents inspect and confirm product quality",
        "Transparent sourcing with no hidden costs",
        "Reliable supplier partnerships already in place",
      ],
    },
    {
      id: 2,
      title: "Logistics",
      icon: Truck,
      blurb:
        "We handle international transport so your goods arrive quickly, safely, and without hassle.",
      points: [
        "Fast shipment from Asia to Somalia",
        "Secure packaging to avoid damage",
        "Cost-effective logistics with no extra fees",
        "Trusted partners for sea and air freight",
        "Live shipment tracking (coming soon)",
      ],
    },
    {
      id: 3,
      title: "Delivery",
      icon: MapPin,
      blurb:
        "We bring products right to your business or doorstep, saving you time and effort.",
      points: [
        "Local handoff in Mogadishu and nearby areas",
        "Expanding last-mile delivery nationwide",
        "Easy bulk order handling for B2B",
        "Flexible delivery slots for convenience",
        "Customer support until order is received",
      ],
    },
    {
      id: 4,
      title: "Payments",
      icon: CreditCard,
      blurb:
        "We make payments simple, secure, and tailored to the methods you trust.",
      points: [
        "Pay with EVC, Zaad, Edahab, and Telesom",
        "Visa and Mastercard accepted",
        "One-time payment, no hidden charges",
        "Automated receipts for every order",
        "Safe refunds and dispute resolution",
      ],
    },
  ];

  return (
    <section className="relative w-full py-16 bg-form text-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Seamless Trade, step by step
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Source → Ship → Deliver → Pay
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white/70 backdrop-blur-sm text-gray-900 rounded-xl border shadow-sm p-6"
          >
            {/* Title + Icon */}
            <div className="flex items-center gap-3 mb-3">
              <step.icon className="w-6 h-6 text-gray-800" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>

            {/* Blurb */}
            <p className="text-sm text-gray-700 mb-4">{step.blurb}</p>

            {/* Checkpoints */}
            <ul className="space-y-2">
              {step.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}