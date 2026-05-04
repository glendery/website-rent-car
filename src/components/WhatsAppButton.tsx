"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhatsAppButton = () => {
  const waLink = "https://wa.me/6285111420050?text=Halo Parulian Rent Car, saya ingin tanya ketersediaan unit untuk tanggal...";

  return (
    <>
      {/* Desktop Floating Button */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-3 bg-white text-charcoal p-2 pr-6 rounded-full shadow-2xl shadow-white/10 border border-gold/30 hover:border-gold transition-all"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
          <Image 
            src="/images/logo.jpg" 
            alt="Parulian Rent Car" 
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-gold leading-none mb-1">Book via</span>
          <span className="font-bold text-sm">WhatsApp</span>
        </div>
      </motion.a>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-charcoal-light/80 backdrop-blur-lg border-t border-charcoal-lighter p-4">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full py-4 flex items-center justify-center gap-3"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-charcoal/20">
            <Image 
              src="/images/logo.jpg" 
              alt="Logo" 
              fill
              className="object-cover"
            />
          </div>
          Booking via WhatsApp
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
