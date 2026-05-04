"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-gold/50 group-hover:border-gold transition-colors">
            <Image 
              src="/images/logo.jpg" 
              alt="Parulian Rent Car Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">
            Parulian<span className="text-gold">Rent</span>
          </span>
        </Link>

        {/* Desktop & Mobile Menu Links */}
        <div className="flex items-center gap-2 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[8px] md:text-sm font-bold uppercase tracking-tighter md:tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="https://wa.me/6281287662788" target="_blank" rel="noopener noreferrer" className="btn-gold !py-1 !px-2 md:!py-2 md:!px-5 text-[8px] md:text-sm">
            Book Now
          </Link>
        </div>

        {/* Hide Mobile Toggle */}
        <button className="hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal-light border-b border-charcoal-lighter md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="https://wa.me/6281287662788" target="_blank" rel="noopener noreferrer" className="btn-gold w-full">
                Book via WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
