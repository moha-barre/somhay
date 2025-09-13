"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-form text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">Somhay</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-[#4169E1] font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="https://api.whatsapp.com/send?phone=252770722363&text=Hello%20Somhay%20team%2C%20I%20am%20interested%20in%20this%20product%3A%20[PRODUCT_URL]%2E%20Could%20you%20please%20provide%20details%20on%20pricing%2C%20minimum%20order%20quantity%2C%20and%20delivery%3F%20Thank%20you%21"
            className="ml-4 px-4 py-2 rounded-lg bg-brand hover:bg-blue-600 text-white font-medium transition"
          >
            Chat Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden focus:outline-none"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block transition-colors ${
                pathname === item.href
                  ? "text-[#4169E1] font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* CTA Button (mobile) */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-lg bg-[#4169E1] hover:bg-blue-600 text-white font-medium transition"
          >
            Chat Now
          </Link>
        </div>
      )}
    </nav>
  );
}