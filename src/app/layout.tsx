import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Espaço Fitness Silveira | Treinamento Personalizado em Tietê–SP",
  description:
    "Treinamento personalizado em Tietê–SP com funcional, musculação adaptada, alongamento avançado e personal training. Conheça o Espaço Fitness Silveira.",
  keywords: [
    "academia em Tietê",
    "personal trainer em Tietê",
    "treinamento personalizado em Tietê",
    "funcional personalizado",
    "musculação adaptada",
    "alongamento avançado",
    "Espaço Fitness Silveira",
    "academia personalizada",
    "personal training Tietê",
  ],
  authors: [{ name: "Espaço Fitness Silveira" }],
  creator: "Espaço Fitness Silveira",
  metadataBase: new URL("https://espacosilveira.com.br"),
  openGraph: {
    title: "Espaço Fitness Silveira | Treinamento Personalizado em Tietê–SP",
    description:
      "Treinamento personalizado em Tietê–SP com funcional, musculação adaptada, alongamento avançado e personal training. Conheça o Espaço Fitness Silveira.",
    url: "https://espacosilveira.com.br",
    siteName: "Espaço Fitness Silveira",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/imagens/foto_aluno.jpg",
        width: 1200,
        height: 630,
        alt: "Espaço Fitness Silveira - Treinamento Personalizado em Tietê SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espaço Fitness Silveira | Treinamento Personalizado em Tietê–SP",
    description:
      "Treinamento personalizado em Tietê–SP com funcional, musculação adaptada, alongamento avançado e personal training.",
    images: ["/imagens/foto_aluno.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="antialiased bg-[#090909] text-white selection:bg-[#C81010] selection:text-white">
        {children}
      </body>
    </html>
  );
}
