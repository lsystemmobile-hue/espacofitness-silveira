"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleDesktopNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    
    // Slight delay so closing drawer does not interrupt touch scroll on mobile devices
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
    }, 100);
  };

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
        <a
          href="#inicio"
          onClick={(e) => handleDesktopNavClick(e, "#inicio")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-44 h-11 sm:w-52 sm:h-12 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/imagens/logo.png"
              alt="Espaço Fitness Silveira"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleDesktopNavClick(e, link.href)}
              className="text-sm font-bold text-[#090909] hover:text-[#C81010] transition-colors duration-150 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C81010] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

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
            className="md:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-2 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="text-base font-bold text-[#090909] hover:text-[#C81010] py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors active:bg-gray-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
