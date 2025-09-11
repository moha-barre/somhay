"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#051821] text-white">
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
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="bg-[#0A2433] p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Direct Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:info@somhay.com" className="underline hover:text-gray-300">
              info@somhay.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=252770722363&text=Hello%20Somhay%20team%2C%20I%20am%20interested%20in%20this%20product%3A%20[PRODUCT_URL]%2E%20Could%20you%20please%20provide%20details%20on%20pricing%2C%20minimum%20order%20quantity%2C%20and%20delivery%3F%20Thank%20you%21"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              +252 770 722 363
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}