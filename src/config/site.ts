const defaultMsg = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma aula experimental no Espaço Fitness Silveira."
);
const defaultPhone = "5515996274940";

export const SITE_CONFIG = {
  name: "Espaço Fitness Silveira",
  segment: "Academia de treinamento personalizado",
  address: "Rua Antônio Nery, 221 — Tietê, SP",
  instagramUrl: "https://www.instagram.com/espacosilveira/",
  whatsappNumber: defaultPhone,
  whatsappMessage: defaultMsg,
  whatsappUrl: `https://wa.me/${defaultPhone}?text=${defaultMsg}`,
};
