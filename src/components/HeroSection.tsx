'use client';

import HeroCarousel from './HeroCarousel';
import { Product } from '@/types';

interface HeroSectionProps {
  products: Product[];
  loading: boolean;
}

export default function HeroSection({ products, loading }: HeroSectionProps) {
  return (
    <section id="home" className="relative py-5 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F2E7]/80 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Carousel */}
        <div className="mb-7 sm:mb-10 animate-fade-in">
          <HeroCarousel products={products} loading={loading} />
        </div>

        {/* Content Below Carousel */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-[#0F1B2D] to-[#C8A86B] bg-clip-text text-transparent">
            Premium Handcrafted Bracelets & Flower Bouquets
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-6 leading-relaxed">
            Artisan-crafted jewelry and flower arrangements designed for those who appreciate quality, style, and beauty. Each piece tells a story.
          </p>
          <a
            href="https://wa.me/923007722700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#0F1B2D] to-[#C8A86B] text-white text-sm font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Shop Now on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
