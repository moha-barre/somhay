
"use client";
import Faq from "@/components/Faq";
import Condition from "@/components/Condition";
import SEO from "@/components/SEO"

export default function FaqPage() {
  
  return (
    <>
    <SEO
  title="Somhay FAQ & Terms - Sourcing & Delivery Information"
  description="Find answers to common questions about sourcing products from 1688 and Alibaba, delivery times, and Somhay's terms and conditions."
  keywords="Somhay FAQ, terms and conditions, 1688 sourcing questions, Alibaba sourcing FAQ, delivery policies"
  image="/nego.jpg"
  url="https://somhay.vercel.app/faq"
/>
    <div className="bg-back">
      {/* Page Hero */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-2">Help Center</h1>
        <p className="text-gray-600">Find answers to common questions and review our policies.</p>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* Policies Section */}
      <Condition />
    </div>
    </>
  );
}