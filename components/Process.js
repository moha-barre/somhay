import { ShoppingCart, MessageCircle, CreditCard } from "lucide-react";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Pick Your Favorite Product",
      desc: "Find the item you love—fashion, electronics, or business supplies—on trusted marketplaces like Alibaba or Shein. Choose what suits you best!",
      icon: <ShoppingCart className="w-10 h-10 text-blue-500 mb-4" />,
    },
    {
      id: 2,
      title: "Choose How to Order",
      desc: (
        <>
          You can place your order in the way that feels easiest for you:
          <ul className="list-disc list-inside mt-3 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <li>
              <strong>Order Online:</strong>{" "}
              <a href="/order" className="text-blue-500 hover:underline">
                Visit our order page
              </a>{" "}
              and fill in your details. Submit in just a few clicks!
            </li>
            <li>
              <strong>Contact Us Directly:</strong>{" "}
              Send the product link or details via{" "}
              <a
                href="https://wa.me/252770722363"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                WhatsApp
              </a>{" "}
              or{" "}
              <a href="mailto:info@somhay.com" className="text-blue-500 hover:underline">
                Email
              </a>
              . We'll quickly confirm availability, price, and shipping.
            </li>
          </ul>
        </>
      ),
      icon: <MessageCircle className="w-10 h-10 text-green-500 mb-4" />,
    },
    {
      id: 3,
      title: "Confirm & Receive Your Order",
      desc: "After confirming, make your payment using your preferred method. Then relax—we’ll take care of everything from purchase to delivery right to your door.",
      icon: <CreditCard className="w-10 h-10 text-purple-500 mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-tight text-gray-900 dark:text-white">
          How Somhay Works
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg transition duration-300 text-left"
            >
              <div>{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}