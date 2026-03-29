'use client';

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const orderMessage = encodeURIComponent(
    'Hi Petal Paradise! I want to place an order. Please share details.'
  );

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/923007722700?text=${orderMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[70] flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 animate-float"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-float {
          animation: float 0.8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
