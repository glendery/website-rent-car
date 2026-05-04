"use client";

import { motion } from "framer-motion";
import { Car, Shield, MapPin, Sparkles, UserCheck, Heart } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    title: "Armada Bersih & Wangi",
    desc: "Setiap unit disterilisasi dan dibersihkan sebelum diserahkan ke pelanggan."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-gold" />,
    title: "Bisa Lepas Kunci",
    desc: "Nikmati privasi perjalanan Anda dengan layanan lepas kunci yang mudah."
  },
  {
    icon: <Shield className="w-8 h-8 text-gold" />,
    title: "Terpercaya Sejak 2023",
    desc: "Ribuan pelanggan telah mempercayakan perjalanan mereka kepada kami."
  },
  {
    icon: <MapPin className="w-8 h-8 text-gold" />,
    title: "Gratis Antar Jemput",
    desc: "Layanan antar-jemput unit untuk area tertentu di Bandung (S&K Berlaku)."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-3">
            Mengapa <span className="text-gold">Kami?</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Kami mengutamakan kenyamanan dan keamanan Anda selama berkendara di Kota Bandung.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-charcoal border border-charcoal-lighter hover:border-gold/30 transition-all duration-300"
            >
              <div className="mb-3 md:mb-6 scale-75 md:scale-100 origin-left">{service.icon}</div>
              <h3 className="text-xs md:text-xl font-bold mb-2 md:mb-4 uppercase tracking-tight line-clamp-1">{service.title}</h3>
              <p className="text-gray-500 md:text-gray-400 text-[10px] md:text-sm leading-tight md:leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
