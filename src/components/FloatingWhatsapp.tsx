"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { SITE_CONFIG } from "@/config/site";

export default function FloatingWhatsapp() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Hide while in Hero section (top 450px), show when scrolling down
      setIsVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip message */}
          <span className="hidden sm:inline-block bg-[#161616] text-white text-xs font-semibold px-3 py-2 rounded-xl border border-white/15 shadow-xl backdrop-blur-md">
            Fale conosco no WhatsApp!
          </span>

          {/* Button with Red Brand Color */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            className="w-14 h-14 bg-[#C81010] hover:bg-[#8F0808] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#C81010]/40 hover:scale-110 active:scale-95 transition-all duration-200 relative group"
          >
            <WhatsappIcon className="w-7 h-7" />
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-[#C81010] opacity-60 animate-ping pointer-events-none -z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
