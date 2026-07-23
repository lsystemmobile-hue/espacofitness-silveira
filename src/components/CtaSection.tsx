"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { SITE_CONFIG } from "@/config/site";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#C81010] via-[#A80C0C] to-[#8F0808] text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight"
        >
          Comece a cuidar do seu corpo com um <br className="hidden sm:inline" />
          <span className="underline decoration-white/40 underline-offset-8">treinamento feito para você.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mt-6 text-lg sm:text-xl text-red-100 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Agende agora sua aula experimental e descubra uma forma mais segura, personalizada e eficiente de treinar em Tietê–SP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary WhatsApp Action on Red Section - High Contrast White/Dark Button */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#090909] hover:bg-[#161616] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-2xl hover:scale-[1.03] active:scale-95 border border-white/10"
          >
            <WhatsappIcon className="w-6 h-6 text-[#C81010]" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          {/* Instagram Secondary */}
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-md hover:scale-[1.02]"
          >
            <Instagram className="w-5 h-5" />
            <span>Ver Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
