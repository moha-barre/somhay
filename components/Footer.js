import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-form text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold text-white">Somhay</h2>
          <p className="mt-2 text-sm text-gray-400">
            Global products, local acces
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#4169E1] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#4169E1] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#4169E1] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#4169E1] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      

{/* Contact Info */}
<div className="text-white space-y-3">
  <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>

  {/* Email */}
  <div className="flex items-center gap-2">
    <Mail className="w-5 h-5 text-[#4169E1]" />
    <a href="mailto:info@somhay.com" className="hover:text-[#4169E1] transition">
      info@somhay.com
    </a>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-2">
    <Phone className="w-5 h-5 text-[#4169E1]" />
    <a href="tel:+252770722363" className="hover:text-[#4169E1] transition">
      +252 770 722 363
    </a>
  </div>

  {/* Social Media */}
  <div className="flex gap-5 mt-4">
    <a href="https://www.facebook.com/share/1CMPb8KpBh/" target="_blank" rel="noopener noreferrer" 
       className="hover:text-[#1877F2] transition transform hover:scale-110">
      <Facebook className="w-6 h-6" />
    </a>
    <a href="https://www.instagram.com/somhay_?igsh=ejkweXIxODRqOWE4" target="_blank" rel="noopener noreferrer" 
       className="hover:text-pink-500 transition transform hover:scale-110">
      <Instagram className="w-6 h-6" />
    </a>
    <a href="https://wa.me/252770722363" target="_blank" rel="noopener noreferrer" 
       className="hover:text-green-500 transition transform hover:scale-110">
      <MessageCircle className="w-6 h-6" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
       className="hover:text-blue-400 transition transform hover:scale-110">
      <Linkedin className="w-6 h-6" />
    </a>
  </div>
</div>
        
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Somhay. All rights reserved.
      </div>
    </footer>
  );
}