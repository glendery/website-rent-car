"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CARS } from "@/constants/cars";
import { Users, Fuel, CheckCircle2, MessageCircle, Shield, CalendarCheck, ChevronRight, LayoutGrid } from "lucide-react";
import Image from "next/image";

const CarCard = ({ car, index }: { car: any; index: number }) => {
  const waLink = `https://wa.me/6281287662788?text=Halo Parulian Rent Car, saya ingin tanya ketersediaan unit ${car.name} untuk tanggal...`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-glass group flex flex-col h-full"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden shrink-0">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-charcoal/80 backdrop-blur-md px-1.5 py-0.5 rounded-md border border-white/10 z-10">
          <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-wider text-gold">{car.type}</span>
        </div>

        {/* Hover Overlay - Hidden on small mobile to save space */}
        <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex flex-col items-center justify-center gap-2 z-20">
          <div className="flex items-center gap-1.5 text-white font-bold text-[10px] uppercase tracking-wider">
            <Shield size={14} className="text-gold" />
            Full Asuransi
          </div>
          <div className="flex items-center gap-1.5 text-white font-bold text-[10px] uppercase tracking-wider">
            <CalendarCheck size={14} className="text-gold" />
            Pajak Hidup
          </div>
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <div className="flex justify-between items-start gap-1 mb-0.5">
            <h3 className="text-[11px] md:text-base font-black uppercase italic leading-tight line-clamp-1">{car.name}</h3>
            {car.lepasKunci && (
              <span className="shrink-0 bg-green-500/10 text-green-500 p-0.5 rounded">
                <CheckCircle2 size={10} className="md:w-3 md:h-3" />
              </span>
            )}
          </div>
          <p className="text-[9px] md:text-[10px] text-gold font-black uppercase tracking-widest">{car.price}<span className="text-gray-500 font-bold">/hr</span></p>
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-2 mb-3">
          <div className="flex items-center gap-1 text-gray-400">
            <Users size={12} className="text-gold shrink-0" />
            <span className="text-[8px] md:text-[10px] font-bold">{car.capacity}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Fuel size={12} className="text-gold shrink-0" />
            <span className="text-[8px] md:text-[10px] font-bold truncate">{car.transmission.split('/')[0]}</span>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full text-[9px] md:text-[11px] py-2 md:py-2.5 flex items-center justify-center gap-1.5"
          >
            <MessageCircle size={12} className="md:w-3.5 md:h-3.5" />
            <span className="hidden xs:inline">Cek Unit</span>
            <span className="xs:hidden">Cek</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CarCatalog = () => {
  const [showAll, setShowAll] = useState(false);
  
  const featuredCars = CARS.filter(car => car.featured);
  const otherCars = CARS.filter(car => !car.featured);
  const displayCars = showAll ? [...featuredCars, ...otherCars] : featuredCars;

  return (
    <section id="fleet" className="py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-3">
              Pilihan <span className="text-gold">Armada</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              Unit pilihan di Buah Batu, bersih dan siap gas untuk keliling Bandung.
            </p>
          </div>
          
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold hover:text-white transition-colors group"
          >
            {showAll ? (
              <>Tampilkan Unggulan <ChevronRight size={14} className="rotate-180" /></>
            ) : (
              <>Lihat Semua Unit ({CARS.length}) <LayoutGrid size={14} className="group-hover:rotate-12 transition-transform" /></>
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {displayCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="btn-outline text-xs px-8"
            >
              Lihat Unit Lainnya
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarCatalog;
