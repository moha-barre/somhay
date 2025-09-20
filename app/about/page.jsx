"use client";
import Image from "next/image";
import 
{ DollarSign, Clock, Shield, Package, Globe, Target, Sunrise } from "lucide-react";
import SEO from "@/components/SEO"

// Hero Section
function HeroSection() {
  return (
    
    <section className="relative bg-gradient-to-b from-[#3c63aa] to-[#0b2f3d] text-white py-24 px-6 flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold">Building Bridges for Global Trade</h1>
        <p className="text-lg lg:text-xl text-gray-300">
          Somhay provides a trusted pathway that allows East African entrepreneurs to focus on growth while we handle sourcing, logistics, and delivery.
        </p>
        <div className="flex gap-4">
          <button className="bg-brand hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition">
            Partner With Us
          </button>
          <button
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })} // scroll to Our Story
            className="border border-blue-500 text-blue-600 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-2/5 mt-12 lg:mt-0">
        <Image
          src="/map.jpg"
          alt="Global Trade Map"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section className="py-16 bg-back text-[#051821]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">The Barrier to Global Trade</h2>
        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Small enterprises in East Africa often struggle to access affordable and reliable products from global suppliers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Costs</h3>
            <p className="text-gray-600">
              Middlemen and inefficiencies increase prices, making global trade expensive.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-yellow-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Uncertain Timelines</h3>
            <p className="text-gray-600">
              Shipping and delivery times are unpredictable, affecting business planning.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trust Issues</h3>
            <p className="text-gray-600">
              Navigating suppliers and languages abroad makes building reliable partnerships hard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution / How We Help
function SolutionSection() {
  return (
    <section className="py-16 bg-back text-[#051821]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            We simplify global trade so entrepreneurs can focus on growth while we handle sourcing, logistics, and secure payments.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/track.jpg"
              alt="Tracking and Logistics"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="text-brand w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Streamlined Sourcing</h3>
                <p className="text-gray-600">
                  Access quality goods at fair prices without navigating complex supply chains.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="text-brand w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Logistics</h3>
                <p className="text-gray-600">
                  We manage shipping, customs, and delivery with transparency.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-brand w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Integrated payment systems ensure safe and transparent transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Our Story Section
function StorySection() {
  return (
    <section className="py-16 bg-back text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              Somhay was founded to connect East African businesses with global markets.
            </p>
            <p className="text-lg mb-4">
              We asked: How can ambitious entrepreneurs access international trade without complex logistics?
            </p>
            <p className="text-lg">
              Today, we create opportunities for businesses to scale beyond borders and compete globally.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/team.jpg"
              alt="Team Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission & Vision Section
function MissionVisionSection() {
  return (
    <section className="py-16 bg-back text-[#051821]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-blue-300 p-8 rounded-xl border border-teal-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-lg">
            Deliver safe, accessible, and smart trade solutions that empower East African businesses to compete internationally.
          </p>
        </div>
        <div className="bg-blue-300 p-8 rounded-xl border border-teal-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center">
              <Sunrise className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>
          <p className="text-lg">
            Become the heartbeat of trade between Asia and East Africa, empowering entrepreneurs and unlocking regional potential.
          </p>
        </div>
      </div>
    </section>
  );
}

// Call to Action Section
function CTASection() {
  return (
    <section className="py-16 bg-form text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Us in Building the Future of Trade
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          We welcome investors and partners who share our belief that when barriers fall, opportunities rise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-brand hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition inline-block text-center"
          >
            Become a Partner
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=252770722363&text=Hello%20Somhay%20team%2C%20I%20am%20interested%20in%20this%20product%3A%20[PRODUCT_URL]%2E%20Could%20you%20please%20provide%20details%20on%20pricing%2C%20minimum%20order%20quantity%2C%20and%20delivery%3F%20Thank%20you%21"
            className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition inline-block text-center"
          >
            Contact our Team
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function AboutUsPage() {
  return (
    <>
    <SEO
  title="About Somhay - Who We Are & Our Mission"
  description="Learn about Somhay, our mission to help clients source products globally, and our step-by-step professional sourcing process."
  keywords="Somhay about, sourcing company, product sourcing services, 1688 sourcing, Alibaba sourcing"
  image="/logo.png"
  url="https://somhay.vecel.app/about"
/>

    <div className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StorySection />
      <MissionVisionSection />
      <CTASection />
    </div>
    </>
  );
}