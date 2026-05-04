"use client";

import { motion } from "framer-motion";
import { Search, MessageSquare, CarFront } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-gold" />,
    title: "Pilih Unit",
    desc: "Pilih mobil yang sesuai dengan kebutuhan perjalanan Anda di Bandung."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-gold" />,
    title: "Konfirmasi WA",
    desc: "Klik tombol booking dan admin kami akan langsung cek ketersediaan unit."
  },
  {
    icon: <CarFront className="w-8 h-8 text-gold" />,
    title: "Unit Diantar",
    desc: "Mobil siap diantar ke lokasi Anda atau bisa diambil langsung di Buah Batu."
  }
];

const BookingSteps = () => {
  return (
    <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-3">
            Cara <span className="text-gold">Pesan</span>
          </h2>
          <p className="text-gray-400 text-sm">Proses cepat dan mudah, tidak pakai ribet.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-12 relative">
          {/* Decorative Line - Desktop Only */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-charcoal-light border border-charcoal-lighter flex items-center justify-center mb-3 md:mb-6 group-hover:border-gold/50 transition-colors relative z-10">
                <div className="absolute -top-2 -right-2 w-5 h-5 md:w-8 md:h-8 rounded-full bg-gold text-charcoal font-black flex items-center justify-center text-[10px] md:text-sm">
                  {index + 1}
                </div>
                <div className="scale-75 md:scale-100">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-[10px] md:text-xl font-bold mb-1 md:mb-4 uppercase tracking-tighter md:tracking-normal">{step.title}</h3>
              <p className="text-[8px] md:text-sm text-gray-500 md:text-gray-400 leading-tight md:leading-relaxed max-w-[80px] md:max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
