"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [ { question: "What products can I order?", answer: "You can order almost everything available on trusted marketplaces like 1688, Alibaba, and Shein — from fashion and electronics to business supplies and personal items.", }, { question: "How many days does it take to get my order?", answer: "On average, delivery takes 10–15 days, depending on the product type, supplier location, and shipping method.", }, { question: "Do I have to order in bulk?", answer: "No. You can order both bulk and small quantities — whether it’s one item for personal use or larger shipments for business.", }, { question: "Can you help me find the right product?", answer: "Yes. If you share the product link, name, or even a picture, we’ll help you source it from reliable sellers.", }, { question: "How do I know if the seller is trustworthy?", answer: "We carefully check the supplier ratings, reviews, and transaction history before confirming any order.", }, { question: "How do I place an order with you?", answer: "Simply send us the product link or details, and we’ll handle the communication, purchase, and delivery process step by step.", }, { question: "What payment methods do you accept?", answer: "We accept local payments in Somalia as well as international transfer options for convenience.", }, { question: "Are there any hidden fees?", answer: "No. We are transparent. You only pay for the product cost, service fee, and shipping — nothing extra.", }, { question: "Can I track my shipment?", answer: "Yes. Once your order is shipped, you’ll get tracking updates so you know exactly where your products are.", }, { question: "Do you handle customs clearance?", answer: "Yes. We take care of customs clearance and import requirements, so your products reach you smoothly.", }, { question: "What if my product arrives damaged or incorrect?", answer: "We offer buyer protection. If something goes wrong, we will work with the supplier to resolve the issue and get you what you ordered.", }, { question: "Can businesses and shops work with you?", answer: "Absolutely. We support both individuals and businesses — from single-item shoppers to wholesalers and retail stores.", }, { question: "Do you offer discounts for large orders?", answer: "Yes. Bulk orders come with special pricing and better shipping rates.", }, { question: "Why should I use your service instead of ordering directly?", answer: "We make it easier, safer, and faster by handling product verification, payments, shipping, and delivery right to your location in Somalia.", }, ];

export default function Faq() { const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => { setOpenIndex(openIndex === index ? null : index); };

return ( <section className="max-w-4xl mx-auto px-4 py-12"> <div className="text-center mb-10"> <HelpCircle className="w-12 h-12 mx-auto text-blue-600 mb-4" /> <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2> <p className="text-gray-600">Here are some common questions about our services and process.</p> </div>

<div className="space-y-4">
    {faqs.map((faq, index) => (
      <div key={index} className="border border-gray-200 rounded-xl bg-white">
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-50"
        >
          {faq.question}
          {openIndex === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        {openIndex === index && (
          <div className="px-6 pb-4 text-gray-700">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

); }

