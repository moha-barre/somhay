import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-back text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Illustration */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/hero.jpg"
            alt="Somhay Hero Illustration"
            width={500}
            height={400}
            className="w-full max-w-md object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          {/* Tagline */}
          <p className="text-[#477CAA] font-medium text-sm uppercase tracking-wide">
            Global products, local access
          </p>

          {/* Headline */}
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
            Simplifying Global Trade for Local Businesses
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-300 text-lg max-w-xl">
            Somhay bridges businesses in Somalia with trusted Chinese suppliers. 
            We handle sourcing, logistics, and secure payments so you can focus 
            on growing without the hidden costs or risks of global trade.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-[#35607C] text-white px-6 py-3 rounded-lg font-medium text-lg transition"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="bg-gray-700 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition"
            >
              Discover More..
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
