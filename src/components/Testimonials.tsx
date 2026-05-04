"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Ramadhan",
    date: "2 minggu yang lalu",
    text: "Mobilnya wangi banget dan bersih parah! Pelayanan mas adminnya juga ramah banget, jemput unit di stasiun gampang. Recomended!",
    rating: 5
  },
  {
    name: "Siska Amelia",
    date: "1 bulan yang lalu",
    text: "Fast respon! Pas butuh mendadak buat ke Lembang, langsung dilayani. Innovanya prima banget buat nanjak. Mantap Parulian!",
    rating: 5
  },
  {
    name: "Budi Santoso",
    date: "3 minggu yang lalu",
    text: "Lepas kunci prosesnya ga ribet. Unit Fortunernya bener-bener berasa kayak mobil baru. Pasti langganan kalau ke Bandung lagi.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-3">
            Happy <span className="text-gold">Customers</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">Apa kata mereka tentang pengalaman berkendara bersama kami?</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-charcoal-light border border-charcoal-lighter relative group"
            >
              <Quote className="absolute top-4 right-4 text-gold/10 w-6 h-6 md:w-12 md:h-12 group-hover:text-gold/20 transition-colors" />
              
              <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-4">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={10} className="md:w-4 md:h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-[10px] md:text-base text-gray-300 italic mb-4 md:mb-6 leading-tight md:leading-relaxed relative z-10 line-clamp-3 md:line-clamp-none">
                "{testi.text}"
              </p>

              <div className="flex flex-col">
                <span className="font-bold text-white text-[11px] md:text-lg">{testi.name}</span>
                <span className="text-[8px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mt-0.5 md:mt-1">{testi.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
