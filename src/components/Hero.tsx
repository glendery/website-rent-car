"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cinematicImages = [
  "/images/sinematik1.jpg",
  "/images/sinematik2.jpg",
  "/images/sinematik3.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % cinematicImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-charcoal-lighter to-transparent blur-3xl opacity-30" />

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 gap-4 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-1.5 bg-charcoal-light border border-charcoal-lighter px-2 md:px-4 py-1 md:py-2 rounded-full mb-3 md:mb-6 w-fit">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-[7px] md:text-xs font-bold uppercase tracking-wider text-gray-400">
              Trusted Since 2023 in Bandung
            </span>
          </div>
          
          <h1 className="text-xl md:text-7xl font-black mb-2 md:mb-6 leading-tight uppercase italic tracking-tighter">
            Eksplor Bandung <br />
            <span className="text-gold">Tanpa Batas</span>
          </h1>
          
          <p className="text-[9px] md:text-lg text-gray-400 mb-4 md:mb-10 max-w-lg leading-relaxed line-clamp-3 md:line-clamp-none">
            Mau jalan-jalan di Bandung tanpa ribet? <span className="text-white font-semibold">Parulian Rent Car</span> siap sedia. Unit kami di Buah Batu selalu dalam kondisi prima. <span className="text-gold italic font-bold">Tinggal gas!</span>
          </p>

          <div className="flex gap-2 md:gap-4">
            <Link href="#fleet" className="btn-gold !py-1.5 !px-3 md:!py-3 md:!px-6 !text-[8px] md:!text-base group">
              Pilih Armada
              <ChevronRight className="w-2 h-2 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="btn-outline !py-1.5 !px-3 md:!py-3 md:!px-6 !text-[8px] md:!text-base">
              Layanan
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-6 mt-6 md:mt-12 pt-4 md:pt-12 border-t border-charcoal-lighter">
            <div className="flex flex-col">
              <span className="text-xs md:text-2xl font-black text-gold">2.5k+</span>
              <span className="text-[6px] md:text-[10px] uppercase font-bold tracking-tighter md:tracking-widest text-gray-500">Happy Cust</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-2xl font-black text-gold">100%</span>
              <span className="text-[6px] md:text-[10px] uppercase font-bold tracking-tighter md:tracking-widest text-gray-500">Ready</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-2xl font-black text-gold">24/7</span>
              <span className="text-[6px] md:text-[10px] uppercase font-bold tracking-tighter md:tracking-widest text-gray-500">Response</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-charcoal-lighter shadow-2xl shadow-gold/10 aspect-[4/3] md:aspect-auto md:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={cinematicImages[currentImage]}
                  alt="Cinematic Car"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10" />
          </div>
          
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-30 bg-gold text-charcoal p-2 md:p-4 rounded-xl md:rounded-2xl font-black shadow-xl text-[10px] md:text-sm"
          >
            Bisa Lepas Kunci!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
