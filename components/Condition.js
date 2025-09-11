"use client";
import { Shield, Truck, RefreshCcw, CreditCard, XCircle, Globe } from "lucide-react";

export default function Condition() {
  const policies = [
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Shipping & Delivery",
      desc: "We source products from trusted Chinese suppliers and ship directly to Somalia. Delivery takes 15–30 business days depending on customs and logistics.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-green-600" />,
      title: "Return & Refunds",
      desc: "Returns are accepted only for defective or incorrect items within 7 days of receiving. Refunds are processed once the product is returned and inspected.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-purple-600" />,
      title: "Payments",
      desc: "All orders must be paid in full before processing. We accept bank transfer, mobile money (EVC Plus, Zaad), and secure online payments where available.",
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      title: "Cancellations",
      desc: "Orders can be canceled within 24 hours of payment. After this period, cancellation is not guaranteed as suppliers may have begun processing.",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      title: "Customs & Import",
      desc: "Customers are responsible for providing accurate delivery and customs details. Import duties or clearance fees are the customer’s responsibility.",
    },
    {
      icon: <Shield className="w-6 h-6 text-gray-700" />,
      title: "Privacy",
      desc: "We only collect necessary customer information (name, phone, address) for order processing. Data is kept secure and never sold to third parties.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Policies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="shrink-0">{policy.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                <p className="text-gray-600 text-sm">{policy.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}