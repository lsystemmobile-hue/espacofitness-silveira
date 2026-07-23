"use client";

import { motion } from "framer-motion";
import { Target, Dumbbell, TrendingUp, Flame } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Tenha foco no seu objetivo.",
    sub: "Metas claras alinhadas ao seu potencial individual.",
    gradient: "from-[#C81010] to-[#8F0808]",
  },
  {
    icon: Dumbbell,
    title: "Seja disciplinado na sua rotina.",
    sub: "A constância é a chave para transformar o seu corpo.",
    gradient: "from-[#8F0808] to-[#C81010]",
  },
  {
    icon: TrendingUp,
    title: "Confie no processo e os resultados virão.",
    sub: "Evolução progressiva com acompanhamento técnico contínuo.",
    gradient: "from-[#C81010] to-[#E52E2E]",
  },
];

export default function Motivational() {
  return (
    <section className="py-24 bg-[#090909] relative overflow-hidden border-y border-[#C81010]/20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C81010]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2 bg-[#C81010]/15 border border-[#C81010]/40 text-[#C81010] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Flame className="w-4 h-4 text-[#C81010]" />
            <span>Mentalidade de Resultados</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            O caminho para a sua <span className="text-[#C81010]">melhor versão</span>
          </motion.h2>
        </div>

        {/* 3 Motivational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-[#161616] p-8 rounded-3xl border border-white/10 hover:border-[#C81010] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-[#C81010]/20 hover:-translate-y-1"
              >
                {/* Background glowing corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />

                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#090909] border border-[#C81010]/30 flex items-center justify-center text-[#C81010] mb-8 group-hover:scale-105 group-hover:bg-[#C81010] group-hover:text-white transition-all duration-200 shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white leading-snug group-hover:text-red-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 font-normal leading-relaxed">
                    {item.sub}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#C81010]">
                    Pilar {index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#C81010] group-hover:scale-150 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
