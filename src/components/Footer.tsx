import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-[#0F1B2D] via-[#15243B] to-[#0F1B2D] text-white">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#F7F2E7] to-[#C8A86B] bg-clip-text text-transparent">Petal Paradise</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Handcrafted bracelets and fresh flower bouquets made with passion and premium materials. Each piece is unique and designed to add beauty and elegance to your life.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-[#C8A86B]">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-[#F7F2E7] transition text-sm font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-gray-400 hover:text-[#F7F2E7] transition text-sm font-medium">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-[#F7F2E7] transition text-sm font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-[#F7F2E7] transition text-sm font-medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-[#C8A86B]">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">📱</span>
                  <a href="tel:03007722700" className="text-gray-400 hover:text-white transition text-sm font-medium">
                    0300 7722700
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">📧</span>
                  <a href="mailto:info@sparklebeat.com" className="text-gray-400 hover:text-white transition text-sm font-medium">
                    petalpardise@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-[#C8A86B]">Follow Us</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.tiktok.com/@petalparadise786?_r=1&_t=ZS-955rV7PhOTK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm font-medium"
                >
                  <FaTiktok className="text-lg" />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.instagram.com/patelparadise786?igsh=bzVlYW9mZDczcXhw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm font-medium"
                >
                  <FaInstagram className="text-lg" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/923007722700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm font-medium"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <hr className="border-gray-700" />

          {/* Bottom Footer */}
          <div className="mt-8 sm:mt-12 text-center text-gray-400 text-sm">
            <p className="mb-1">© {currentYear} Petal Paradise. All rights reserved.</p>
            <p>Handcrafted bracelets with love ✨</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
