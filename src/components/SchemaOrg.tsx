export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
        "@id": "https://espacosilveira.com.br/#organization",
        "name": "Espaço Fitness Silveira",
        "url": "https://www.instagram.com/espacosilveira/",
        "logo": "/imagens/logo.png",
        "image": "/imagens/foto_aluno.jpg",
        "description": "Treinamento personalizado em Tietê–SP com funcional personalizado, musculação adaptada, alongamento avançado e personal training.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Antônio Nery, 221",
          "addressLocality": "Tietê",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "areaServed": {
          "@type": "City",
          "name": "Tietê"
        },
        "sameAs": [
          "https://www.instagram.com/espacosilveira/"
        ],
        "knowsAbout": [
          "Treinamento Personalizado",
          "Funcional Personalizado",
          "Musculação Adaptada",
          "Alongamento Avançado",
          "Personal Training"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
