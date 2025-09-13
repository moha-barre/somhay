import Link from "next/link";

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
        <div>
          <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
          <p>Email: <a href="info@somhay.com" className="hover:text-[#4169E1]">info@somhay.com</a></p>
          <p className="mt-1">Phone: <a href="tel:+252770722363" className="hover:text-[#4169E1]">+2527707223</a></p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-[#4169E1]">Facebook</a>
            <a href="#" className="hover:text-[#4169E1]">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Somhay. All rights reserved.
      </div>
    </footer>
  );
}