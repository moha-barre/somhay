
"use client";
import Faq from "@/components/Faq";
import Condition from "@/components/Condition"; 

export default function FaqPage() {
  return (
    <div className="bg-white">
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
  );
}