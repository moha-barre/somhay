"use client";
import Image from "next/image";
import { Users, Globe, Target, CloudLightning, Shield } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      id: 1,
      title: "Trusted Partners",
      desc: "We carefully vet suppliers and ensure reliable, high-quality connections for your business.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Global Reach",
      desc: "Seamlessly connecting Somalia and China to help you grow and expand internationally.",
      icon: <Globe className="w-8 h-8 text-green-500" />,
    },
    {
      id: 3,
      title: "Transparent Operations",
      desc: "From sourcing to delivery, we ensure every step is clear, trackable, and accountable.",
      icon: <Target className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 4,
      title: "Fast & Flexible",
      desc: "Quick response times and adaptable solutions to meet your unique business needs.",
      icon: <CloudLightning className="w-8 h-8 text-purple-500" />,
    },
    {
      id: 5,
      title: "Secure & Reliable",
      desc: "Your orders and data are safe with our trusted and professional operations team.",
      icon: <Shield className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <section className="bg-form text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Somehay Stands Out
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            We bridge the gap between Somalia and China by connecting trusted suppliers, providing transparent operations, and supporting businesses with flexible solutions that deliver results.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-4 p-4 bg-[#0a2536] rounded-xl hover:bg-[#0f3b56] transition"
              >
                <div>{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl">{feature.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-lg">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/contact.jpg"
              alt="Team helping each other"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}