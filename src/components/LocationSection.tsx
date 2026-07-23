"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";

export default function LocationSection() {
  const mapAddress = "Rua Antônio Nery, 221 - Tietê, SP";
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    mapAddress
  )}`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Espaço Fitness Silveira Rua Antônio Nery 221 Tietê SP"
  )}`;

  return (
    <section id="localizacao" className="scroll-mt-20 py-24 bg-[#090909] text-white relative overflow-hidden">
      {/* Background glowing element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C81010]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2 bg-[#161616] border border-[#C81010]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#C81010] mb-3"
          >
            <Compass className="w-4 h-4 text-[#C81010]" />
            <span>Nossa Localização</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Venha conhecer nosso espaço
          </motion.h2>
        </div>

        {/* Location Content: Details + Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-[#161616] rounded-3xl p-8 border border-white/10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C81010]/10 border border-[#C81010]/20 text-[#C81010] flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                Espaço Fitness Silveira
              </h3>

              <p className="mt-4 text-base text-gray-300 font-medium leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C81010] shrink-0 mt-1" />
                <span>Rua Antônio Nery, 221 — Tietê, SP</span>
              </p>

              <div className="mt-8 p-4 rounded-2xl bg-[#090909] border border-white/5 space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400">
                  Segmento
                </div>
                <div className="text-sm font-semibold text-white">
                  Academia de treinamento personalizado
                </div>
              </div>
            </div>

            {/* Location Action Buttons */}
            <div className="mt-10 space-y-3">
              <a
                href={googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C81010] hover:bg-[#8F0808] text-white font-bold text-base py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#C81010]/25 hover:scale-[1.02] active:scale-95"
              >
                <Navigation className="w-5 h-5" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#090909] hover:bg-[#222222] border border-white/15 text-gray-300 hover:text-white font-medium text-sm py-3 px-6 rounded-xl transition-all"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 min-h-[350px] lg:min-h-[450px] shadow-2xl relative"
          >
            <iframe
              title="Mapa de localização do Espaço Fitness Silveira em Tietê SP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.721498687791!2d-47.7170!3d-23.1040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6198f24444444%3A0x0!2sRua%20Ant%C3%B4nio%20Nery%2C%20221%2C%20Tiet%C3%AA%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[350px] lg:min-h-[450px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
