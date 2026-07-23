"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Target, HeartPulse, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Avaliação Detalhada",
    description: "Análise física completa para entender seus pontos fortes e necessidades específicas.",
  },
  {
    icon: Target,
    title: "Planejamento Único",
    description: "Estratégia de treino desenhada sob medida para a sua rotina e seus objetivos.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento Próximo",
    description: "Orientação técnica em cada movimento para garantir segurança, correção e máximo resultado.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Consistente",
    description: "Progressão gradual e sustentável, respeitando o tempo e o limite do seu corpo.",
  },
];

export default function Positioning() {
  return (
    <section className="py-20 bg-[#161616] relative border-y border-white/5 overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C81010]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight"
          >
            Seu objetivo merece um{" "}
            <span className="text-[#C81010]">treinamento feito para você.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal"
          >
            Aqui, você não recebe apenas uma sequência de exercícios. O acompanhamento considera sua condição física, sua rotina, seus limites e sua evolução.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-[#090909] p-6 rounded-2xl border border-white/10 hover:border-[#C81010]/50 transition-all duration-200 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C81010]/10 border border-[#C81010]/20 flex items-center justify-center text-[#C81010] mb-4 group-hover:bg-[#C81010] group-hover:text-white transition-colors duration-200">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading group-hover:text-red-100 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
