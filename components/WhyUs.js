"use client"
import { Users, Globe, Target, CloudLightning, Shield, ArrowDown } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Trusted Partners",
    desc: "We carefully vet suppliers for quality you can rely on.",
    icon: <Users className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    title: "Global Connections",
    desc: "Seamlessly connecting Somalia and China for business success.",
    icon: <Globe className="w-8 h-8 text-green-500" />,
  },
  {
    id: 3,
    title: "Transparent Process",
    desc: "Track every step from order to delivery with full clarity.",
    icon: <Target className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 4,
    title: "Fast & Flexible",
    desc: "Quick response times and adaptable solutions for your needs.",
    icon: <CloudLightning className="w-8 h-8 text-purple-500" />,
  },
  {
    id: 5,
    title: "Secure & Reliable",
    desc: "Your business is in safe hands with our trusted operations.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
  },
];

  // Scroll to Process section
  

  return (
    <section className="bg-[#051821] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">
            Why Somehay Stands Out
          </h2>
          <p className="text-gray-300 text-lg">
            We connect Somalia and China through trusted sourcing, transparent operations, and a dedicated team that ensures your business grows.
          </p>

          {/* CTA at the top */}
          <button
            
            className="mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            See Our Process
            <ArrowDown className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4 p-4 bg-[#0a2536] rounded-xl hover:bg-[#0f3b56] transition">
                <div>{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/contact.jpg"
              alt="Team helping each other"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}