import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal pt-16 md:pt-24 pb-24 md:pb-32 border-t border-charcoal-lighter">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 md:mb-8">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-gold/50">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Parulian Rent Car Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-black tracking-tighter uppercase">
                Parulian<span className="text-gold">Rent</span>
              </span>
            </Link>
            <p className="text-gray-500 md:text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              Penyedia layanan rental mobil terpercaya di Kota Bandung. Armada prima, pelayanan ramah, dan harga kompetitif.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a 
                href="https://instagram.com/parulianrentcar.bdg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-charcoal-light border border-charcoal-lighter flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-charcoal-light border border-charcoal-lighter flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="text-sm font-black uppercase tracking-widest text-gold mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold text-gray-400">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#fleet" className="hover:text-white transition-colors">Armada</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-gold mb-4 md:mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-4 md:gap-6">
              <li className="flex gap-3 md:gap-4 items-start">
                <Phone size={16} className="text-gold shrink-0 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm text-gray-500 md:text-gray-400 font-bold">085111420050</span>
              </li>
              <li className="flex gap-3 md:gap-4 items-start">
                <Mail size={16} className="text-gold shrink-0 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm text-gray-500 md:text-gray-400 font-bold truncate">parulianrentcar@gmail.com</span>
              </li>
              <li className="flex gap-3 md:gap-4 items-start">
                <MapPin size={16} className="text-gold shrink-0 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm text-gray-500 md:text-gray-400 font-bold leading-relaxed">
                  Permata Buah Batu, Blok E No.64, Bojongsoang, Kab. Bandung
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-charcoal-lighter pt-6 md:border-none md:pt-0">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-gold mb-2 md:mb-8">Opening Hours</h4>
            <p className="text-xs md:text-sm text-gray-500 md:text-gray-400 mb-1">Setiap Hari (24 Jam)</p>
            <p className="text-[9px] md:text-[10px] text-gray-600 md:text-gray-500 uppercase tracking-widest font-bold">Respon Cepat via WhatsApp</p>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-charcoal-lighter text-center">
          <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-gray-600 md:text-gray-500">
            © 2026 Parulian Rent Car Bandung. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
