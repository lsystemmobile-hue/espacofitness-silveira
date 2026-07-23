"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Vera Belaz",
    timeframe: "Aluna há 7 meses",
    rating: 5,
    initials: "VB",
    text: "Profissional dedicado, focado em atender seus alunos individualmente e de acordo com cada necessidade, sempre atualizando novas técnicas e informações. Em sete meses já tenho ótimos resultados.",
  },
  {
    name: "Elaine Gimenes",
    timeframe: "Aluna Espaço Silveira",
    rating: 5,
    initials: "EG",
    text: "Aulas diferenciadas e muito bem elaboradas. Personal superatencioso e um espaço excelente. Super indico.",
  },
  {
    name: "Adriana Oliveira",
    timeframe: "Aluna Espaço Silveira",
    rating: 5,
    initials: "AO",
    text: "Espaço organizado, bom atendimento e acolhimento com os clientes, respeitando os limites de cada um. Parabéns pelo excelente profissionalismo.",
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 py-24 bg-[#F3F3F3] text-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="inline-block bg-[#C81010]/10 text-[#C81010] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
          >
            Depoimentos & Avaliações
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-[#090909] tracking-tight"
          >
            Resultados percebidos por quem treina aqui
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
          >
            Atendimento personalizado, ambiente acolhedor e acompanhamento focado na evolução de cada aluno.
          </motion.p>
        </div>

        {/* Reviews Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-200 relative flex flex-col justify-between group"
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200 group-hover:text-[#C81010]/20 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#090909] text-white font-bold text-sm flex items-center justify-center border-2 border-[#C81010] shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#090909] text-base font-heading flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 inline" />
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {review.timeframe} • Avaliação do Google
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
