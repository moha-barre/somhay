import Hero from "@/components/Hero";
import Operation from "@/components/Operation";  // 
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import SEO from "@/components/SEO"



export default function HomePage() {
  return (
    <>
    <SEO
  title="Somhay - Global Sourcing & Product Delivery Services"
  description="Somhay helps you source products from marketplaces like 1688 and Alibaba quickly and reliably. Get high-quality products delivered to your doorstep."
  keywords="1688 sourcing, Alibaba products, global product sourcing, Somhay delivery, order products online"
  image="/hero.jpg"
  url="https://somhay.vercel.app"
/>
    <div className="bg-back text-white">
      {/* Hero Section */}
      <Hero />

      {/* Operations Section  */}
      <Operation /> 

      {/* Process Section */}
      <Process />
      <WhyUs />

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
    </>
  );
}