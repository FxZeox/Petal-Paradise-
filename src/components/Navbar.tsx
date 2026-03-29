'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-sm bg-white/95 border-b border-[#E9DAC0] shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[76px]">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition flex-shrink-0 min-w-0">
            <Image
              src="/brand-images/logo"
              alt="Petal Paradise logo"
              width={54}
              height={54}
              className="w-12 h-12 sm:w-[54px] sm:h-[54px] object-contain"
              priority
              unoptimized
            />
            <h1 className="text-base sm:text-lg font-bold tracking-wide bg-gradient-to-r from-[#0F1B2D] to-[#C8A86B] bg-clip-text text-transparent leading-none max-w-[220px] sm:max-w-none truncate">
              Petal Paradise
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-9">
            <Link href="#home" className="text-sm text-gray-500 hover:text-[#8A6F3F] font-medium transition">
              Home
            </Link>
            <Link href="#products" className="text-sm text-gray-500 hover:text-[#8A6F3F] font-medium transition">
              Products
            </Link>
            <Link href="#about" className="text-sm text-gray-500 hover:text-[#8A6F3F] font-medium transition">
              About
            </Link>
            <Link href="#contact" className="text-sm text-gray-500 hover:text-[#8A6F3F] font-medium transition">
              Contact
            </Link>
          </div>

          {/* Admin Button */}
          <div className="hidden md:block">
            <Link
              href="/admin/login"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0F1B2D] to-[#C8A86B] text-white font-medium text-sm transition-all hover:shadow-md hover:scale-105 active:scale-95"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`w-6 h-0.5 bg-[#C8A86B] transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#C8A86B] transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#C8A86B] transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#E9DAC0]">
            <Link
              href="#home"
              className="block py-2 text-xs sm:text-sm text-gray-600 hover:text-[#8A6F3F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="block py-2 text-xs sm:text-sm text-gray-600 hover:text-[#8A6F3F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block py-2 text-xs sm:text-sm text-gray-600 hover:text-[#8A6F3F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-xs sm:text-sm text-gray-600 hover:text-[#8A6F3F] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/admin/login"
              className="block mt-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#0F1B2D] to-[#C8A86B] text-white font-semibold text-xs sm:text-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
