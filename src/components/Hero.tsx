"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { SITE_CONFIG } from "@/config/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[650px] w-full flex flex-col items-center justify-between pt-28 pb-10 overflow-hidden bg-[#090909]">
      {/* Background Video with Lighter Bottom-to-Top Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 filter brightness-90 object-center"
        >
          <source src="/videos/video_hero.mp4" type="video/mp4" />
        </video>

        {/* Lighter bottom-to-top gradient for crisp video visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-black/30" />
        
        {/* Soft subtle glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C81010]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Empty top spacing block for vertical balance */}
      <div className="h-2 pointer-events-none" />

      {/* Main Content (Centered) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.12] max-w-4xl drop-shadow-lg"
        >
          Treinamento personalizado para{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[#C81010] text-glow-red">
            evoluir no seu ritmo.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mt-6 text-base sm:text-xl text-gray-200 max-w-2xl font-normal leading-relaxed drop-shadow-md"
        >
          Treinos desenvolvidos sob medida para suas necessidades, limitações e objetivos. Foco em segurança e resultados reais.
        </motion.p>

        {/* WhatsApp Conversion Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C81010] hover:bg-[#8F0808] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-2xl shadow-[#C81010]/40 hover:shadow-[#C81010]/60 hover:scale-[1.03] active:scale-95"
          >
            <WhatsappIcon className="w-6 h-6" />
            <span>Agendar Aula Experimental</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Section: Rating Stars + Line Break + Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center gap-2"
      >
        {/* Line 1: 5 Yellow Stars */}
        <div className="flex items-center gap-1.5 text-amber-400">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>

        {/* Line Break & Line 2: Text */}
        <div className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 drop-shadow">
          5.0 no Google • Atendimento Individualizado em Tietê–SP
        </div>
      </motion.div>
    </section>
  );
}
