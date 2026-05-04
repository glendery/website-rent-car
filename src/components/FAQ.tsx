"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa saja syarat lepas kunci?",
    answer: "Syarat utama meliputi KTP, SIM A aktif,. Tim kami akan melakukan verifikasi cepat via WhatsApp sebelum unit diserahkan."
  },
  {
    question: "Bagaimana jika terjadi kendala di jalan?",
    answer: "Jangan khawatir! Kami menyediakan layanan bantuan 24 jam. Jika terjadi kendala teknis, tim kami akan segera meluncur ke lokasi atau memberikan unit pengganti jika diperlukan."
  },
  {
    question: "Apakah mobil dijamin bersih dan wangi?",
    answer: "Tentu! Standar operasional kami adalah melakukan cuci luar-dalam dan sterilisasi kabin sebelum unit diserahkan ke pelanggan baru."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 text-gold mb-3 md:mb-4">
              <HelpCircle size={16} className="md:w-5 md:h-5" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Pertanyaan Umum</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 md:mb-6">
              Punya <span className="text-gold">Pertanyaan?</span>
            </h2>
            <p className="text-gray-500 md:text-gray-400 text-xs md:text-base leading-relaxed">
              Kami merangkum beberapa hal yang paling sering ditanyakan pelanggan untuk membantu Anda lebih cepat memulai perjalanan.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-3 md:gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-charcoal border border-charcoal-lighter rounded-xl md:rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-charcoal-lighter/50 transition-colors"
                >
                  <span className="font-bold text-sm md:text-lg pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus size={16} className="text-gold shrink-0 md:w-5 md:h-5" />
                  ) : (
                    <Plus size={16} className="text-gold shrink-0 md:w-5 md:h-5" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-500 md:text-gray-400 text-[11px] md:text-sm leading-relaxed border-t border-charcoal-lighter pt-3 md:pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
