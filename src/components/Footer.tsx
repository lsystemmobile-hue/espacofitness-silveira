import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090909] text-white border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm border border-gray-200">
              <div className="relative w-48 h-10">
                <Image
                  src="/imagens/logo.png"
                  alt="Espaço Fitness Silveira Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Academia de treinamento personalizado focada em resultados reais, segurança, acompanhamento individual e evolução no seu ritmo.
            </p>

            <div className="pt-2 flex items-center gap-2 text-sm text-[#C81010] font-semibold">
              <span>Treinamento personalizado em Tietê–SP</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-bold font-heading text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-[#C81010] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#treinamentos" className="hover:text-[#C81010] transition-colors">
                  Treinamentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#C81010] transition-colors">
                  Sobre o Método
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#C81010] transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#C81010] transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Info & Social Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-heading text-white uppercase tracking-wider">
              Contato & Redes
            </h4>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#C81010] shrink-0 mt-0.5" />
                <span>Rua Antônio Nery, 221 — Tietê, SP</span>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.instagram.com/espacosilveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#161616] hover:bg-[#C81010] text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-white/10 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@espacosilveira no Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Espaço Fitness Silveira. Todos os direitos reservados.</p>
          <a
            href="#inicio"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#C81010] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
