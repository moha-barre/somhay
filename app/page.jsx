import Hero from "@/components/Hero";
import Operation from "@/components/Operation";  // 
import Process from "@/components/Process";

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <Hero />

      {/* Operations Section (to be added later) */}
      <Operation /> 

      {/* Process Section */}
      <Process />

      {/* CTA Banner */}
      <section className="bg-[#4169E1] py-16 mt-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to grow your business with Somhay?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get reliable access to global products today. Connect with suppliers, simplify logistics, and make secure payments all in one place.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="bg-white text-[#4169E1] px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}