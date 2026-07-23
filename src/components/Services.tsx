"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, Move, UserCheck } from "lucide-react";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { SITE_CONFIG } from "@/config/site";

const services = [
  {
    id: "funcional",
    icon: Activity,
    title: "Funcional Personalizado",
    description:
      "Treinos dinâmicos para desenvolver força, resistência, coordenação, mobilidade e condicionamento físico.",
    badge: "Força & Agilidade",
  },
  {
    id: "musculacao",
    icon: Dumbbell,
    title: "Musculação Adaptada",
    description:
      "Exercícios planejados de acordo com as necessidades, limitações e objetivos individuais de cada aluno.",
    badge: "Segurança & Saúde",
  },
  {
    id: "alongamento",
    icon: Move,
    title: "Alongamento Avançado",
    description:
      "Trabalho voltado à flexibilidade, mobilidade, consciência corporal e qualidade dos movimentos.",
    badge: "Mobilidade & Postura",
  },
  {
    id: "personal",
    icon: UserCheck,
    title: "Personal Training",
    description:
      "Acompanhamento individual durante todo o treino, com orientação técnica, correção dos movimentos e planejamento personalizado.",
    badge: "Foco 100% Individual",
  },
];

export default function Services() {
  return (
    <section id="treinamentos" className="scroll-mt-20 py-24 bg-[#F3F3F3] text-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="inline-block bg-[#C81010]/10 text-[#C81010] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
          >
            Nossas Modalidades
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-[#090909] tracking-tight"
          >
            Treinamentos personalizados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
          >
            Modalidades desenvolvidas para diferentes objetivos, necessidades e níveis de condicionamento.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const cardWhatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre a modalidade de ${service.title} no Espaço Fitness Silveira.`
            )}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-200 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Red top border highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C81010] to-[#8F0808] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#090909] text-white flex items-center justify-center group-hover:bg-[#C81010] transition-colors duration-200 shadow-md">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C81010] bg-[#C81010]/10 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-[#090909] group-hover:text-[#C81010] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={cardWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#090909] group-hover:text-[#C81010] transition-colors"
                  >
                    <WhatsappIcon className="w-4 h-4 text-[#C81010]" />
                    <span>Quero agendar este treino</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
