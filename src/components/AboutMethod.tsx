"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Sparkles } from "lucide-react";

const differentials = [
  "Atendimento próximo e personalizado",
  "Exercícios adaptados para cada aluno",
  "Respeito aos limites individuais",
  "Atualização constante de técnicas",
  "Ambiente organizado e acolhedor",
  "Foco em evolução consistente",
];

export default function AboutMethod() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24 bg-[#090909] relative overflow-hidden">
      {/* Red ambient glow background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C81010]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#161616] border border-[#C81010]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#C81010] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Metodologia Exclusiva</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Treinamento com atenção a <span className="text-[#C81010]">cada detalhe.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              No Espaço Fitness Silveira, o treinamento é planejado de forma individualizada, respeitando o ritmo, os limites e os objetivos de cada aluno.
            </p>

            <p className="text-base text-gray-400 leading-relaxed font-normal">
              O acompanhamento próximo permite corrigir movimentos, adaptar exercícios e tornar cada sessão mais segura, eficiente e motivadora.
            </p>

            {/* Differentials List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  className="flex items-start gap-3 bg-[#161616]/80 p-3.5 rounded-xl border border-white/5 hover:border-[#C81010]/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C81010] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Media / Photography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/imagens/foto_aluno.jpg"
                alt="Aluno em treinamento no Espaço Fitness Silveira"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-60" />

              {/* Floating feature card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C81010] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Espaço Silveira</div>
                    <div className="text-xs text-gray-300">Ambiente exclusivo e acolhedor em Tietê–SP</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative backdrop box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#C81010]/30 -z-10 hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
