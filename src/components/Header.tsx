"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { SITE_CONFIG } from "@/config/site";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Treinamentos", href: "#treinamentos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 border-b border-gray-200 shadow-md"
          : "bg-white py-4 border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-44 h-11 sm:w-52 sm:h-12 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/imagens/logo.png"
              alt="Espaço Fitness Silveira"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-[#090909] hover:text-[#C81010] transition-colors duration-150 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C81010] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-700 hover:text-[#C81010] hover:bg-gray-100 rounded-full transition-colors duration-150"
            title="Instagram Espaço Fitness Silveira"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C81010] hover:bg-[#8F0808] text-white text-sm font-extrabold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#C81010]/20 hover:scale-[1.03] active:scale-95"
          >
            <WhatsappIcon className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#090909] hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C81010]"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-[#090909] hover:text-[#C81010] py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-[#C81010] hover:bg-[#8F0808] text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all text-center"
              >
                <WhatsappIcon className="w-5 h-5" />
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gray-100 border border-gray-200 text-[#090909] font-bold py-3 rounded-xl transition-all text-center text-sm hover:bg-gray-200"
              >
                <Instagram className="w-4 h-4 text-[#C81010]" />
                <span>Ver Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
