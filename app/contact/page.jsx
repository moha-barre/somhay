"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO"
import Process from "@/components/Process";
import Faq from "@/components/Faq;

import { Mail, Phone, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "Customer",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (MVP placeholder)");
    setForm({ name: "", email: "", inquiry: "Customer", message: "" });
  };

  return (
    <>
    <SEO
  title="Contact Somhay & Process - Get in Touch and Learn How We Work"
  description="Reach out to Somhay for sourcing products or inquiries. Learn about our professional step-by-step process for sourcing and delivery."
  keywords="contact Somhay, product sourcing inquiry, 1688 Alibaba contact, sourcing process, delivery process"
  image="/contact.jpg"
  url="https://somhay.vercel.app/contact"
/>
    <div className="min-h-screen bg-back text-white">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/nego.jpg"
          alt="Contact Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl text-center">
            Customers, partners, and investors—reach us directly.
          </p>
        </div>
      </div>

      {/* Contact Hub */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-[#0A2433] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black"
              required
            />
            <select
              name="inquiry"
              value={form.inquiry}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black"
            >
              <option value="Customer">Customer</option>
              <option value="Partner">Partner</option>
              <option value="Investor">Investor</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black h-32"
              required
            />
            <button
              type="submit"
              className="w-full bg-brand hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Info */}
    

{/* Direct Contact Info */}
<div className="bg-[#0A2433] p-8 rounded-2xl shadow-lg space-y-6 text-white">
  <h2 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">Direct Contact</h2>

  {/* Email */}
  <div className="flex items-center gap-3">
    <Mail className="w-6 h-6 text-[#0072ce]" />
    <a href="mailto:info@somhay.com" className="hover:text-gray-300 transition">
      info@somhay.com
    </a>
  </div>

  {/* WhatsApp */}
  <div className="flex items-center gap-3">
    <MessageCircle className="w-6 h-6 text-green-500" />
    <a
      href="https://api.whatsapp.com/send?phone=252770722363&text=Hello%20Somhay%20team%2C%20I%20am%20interested%20in%20this%20product%3A%20[PRODUCT_URL]%2E%20Could%20you%20please%20provide%20details%20on%20pricing%2C%20minimum%20order%20quantity%2C%20and%20delivery%3F%20Thank%20you%21"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition"
    >
      +252 770 722 363
    </a>
  </div>

  {/* Social Media */}
  <div className="flex gap-6 pt-4 border-t border-gray-600">
    <a href="https://www.instagram.com/somhay_?igsh=ejkweXIxODRqOWE4" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
      <Instagram className="w-6 h-6" />
    </a>
    <a href="https://www.facebook.com/share/1CMPb8KpBh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
      <Facebook className="w-6 h-6" />
    </a>
    <a href="https://www.tiktok.com/@somhay_?_t=ZM-8zdxCw25a5w&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12.66 2h3.11a5.91 5.91 0 0 0 5.23 5.23v3.1a9 9 0 0 1-5.23-1.63V17a7 7 0 1 1-7-7h.18v3.18a3.82 3.82 0 1 0 2.66 3.65L11.6 2h1.06Z"/>
      </svg>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
      <Linkedin className="w-6 h-6" />
    </a>
  </div>
</div>
      </div>
    </div>

    <Faq />
    </>
  );
}