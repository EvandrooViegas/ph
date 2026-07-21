/**
 * ============================================================================
 *  FICHEIRO DE DADOS DO SITE - PH BARBER
 * ============================================================================
 *  Edite este ficheiro para alterar TODOS os textos, imagens e links do site.
 *  Não é necessário mexer em mais nenhum ficheiro para atualizar o conteúdo.
 *
 *  IMAGENS:
 *  Todas as imagens estão organizadas em /public/images/ e são referenciadas
 *  aqui pelo caminho a partir da pasta "public". Basta substituir os
 *  ficheiros dentro das respetivas pastas (mantendo o mesmo nome) ou alterar
 *  o caminho abaixo para apontar para uma nova imagem.
 *
 *  Estrutura de pastas de imagens:
 *    /public/images/logo/       -> logótipo
 *    /public/images/hero/       -> imagem de fundo da secção principal
 *    /public/images/about/      -> foto da secção "Sobre Mim"
 *    /public/images/gallery/    -> fotos do carrossel "Excelência Garantida"
 *    /public/images/services/   -> foto da secção de serviços
 * ============================================================================
 */

export const siteData = {
  /** Nome / marca apresentada no logótipo */
  brand: {
    name: "PH Barber",
    logoImage: "/images/logo/logo.png",
  },

  /** Ligações usadas em vários pontos do site */
  links: {
    // Link usado em todos os botões "Fazer Marcação" / "Agendar"
    booking: "ph-barbearia.buk.pt",
    // Link do WhatsApp (ícone no cabeçalho)
    whatsapp: "https://wa.me/351938185766",
    // Link do Instagram (ícone no cabeçalho e rodapé)
    instagram: "https://www.instagram.com/ph.barber__/",
  },

  /** Barra de navegação no topo */
  navbar: {
    links: [
      { label: "Galeria", href: "#galeria" },
      { label: "Serviços", href: "#servicos" },
      { label: "Encontre-nos", href: "#contacto" },
    ],
    ctaLabel: "Agendar",
  },

  /** Secção principal (Hero) */
  hero: {
    backgroundImage: "/images/hero/hero-bg.jpg",
    titleLine1: "Venha dar um toque no",
    titleHighlight: "Visual",
    titleLine2: "Connosco",
    primaryButtonLabel: "Fazer Marcação",
    secondaryButtonLabel: "Ver o nosso Trabalho",
    secondaryButtonHref: "#galeria",
  },

  /** Secção "Sobre Mim" */
  about: {
    image: "/images/about/about-1.jpg",
    eyebrow: "Sobre Mim",
    title: "+5 Anos Cortando o Cabelo",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  /** Secção "Excelência Garantida" (carrossel de galeria) */
  excellence: {
    eyebrow: "+100 Clientes Satisfeitos",
    titleLine1: "Excelência",
    titleHighlight: "Garantida",
    images: [
      { src: "/images/gallery/gallery-1.jpg", alt: "Corte de cabelo estilo afro com fade" },
      { src: "/images/gallery/gallery-2.jpg", alt: "Corte de cabelo com desenho e fade baixo" },
      { src: "/images/gallery/gallery-3.jpg", alt: "Cliente na cadeira da barbearia" },
    ],
  },

  /** Secção "Nossos Serviços" */
  services: {
    image: "/images/services/services-1.jpg",
    eyebrow: "Nossos Serviços",
    titleLine1: "Entregando",
    titleHighlight: "o Melhor",
    list: [
      { name: "Corte", price: "6€" },
      { name: "Pigmentação", price: "6€" },
      { name: "Barba", price: "6€" },
      { name: "Sobrancelha", price: "6€" },
      { name: "Alinhamento", price: "6€" },
      { name: "Nevou/Platinado", price: "6€" },
      { name: "Luzes/Madeixas", price: "6€" },
    ],
  },

  /** Secção "Nos Visite" (contactos + mapa) */
  contact: {
    eyebrow: "Nos Visite",
    title: "Estámos à Sua Espera",
    address: "Lorem ipsum dolor sit amet, consectetur",
    email: "ph@gmail.pt",
    phone: "+351 938 185 766",
    instagramHandle: "@ph.barber__",
    buttonLabel: "Fazer Marcação",
    // Coordenadas usadas no mapa incorporado (Google Maps)
    map: {
      latitude: 38.7576,
      longitude: -9.2302,
      embedSrc:
        "https://www.google.com/maps?q=38.7576,-9.2302&z=16&output=embed",
    },
  },

  /** Rodapé */
  footer: {
    text: "© PH Barber. Todos os direitos reservados.",
  },
};

export type SiteData = typeof siteData;
