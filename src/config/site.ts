import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Bis Repetita",
  description:
    "Studio de boxe premium à Genève. Coaching privé, cours collectifs et programmes corporate avec Nicolas de Boccard.",
  url: "https://bisrepetita.ch",
  lang: "fr",
  locale: "fr_CH",
  author: "Nicolas de Boccard",
  ogImage: ogImage,
  contact: {
    phone: "+41 76 801 25 96",
    email: "info@bisrepetita.ch",
    address: "La Voie-Creuse 16, 1202 Genève",
  },
  socialLinks: {
    instagram: "https://instagram.com/bisrepetita",
    linkedin: "https://linkedin.com/company/bisrepetita",
  },
  navCta: {
    text: "Reserver",
    href: "/contact",
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.8!2d6.14!3d46.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEzJzEyLjAiTiA2wrAwOCcyNC4wIkU!5e0!3m2!1sfr!2sch!4v1",
  },
  navLinks: [
    { text: "Accueil", href: "/" },
    { text: "Studio", href: "/studio" },
    {
      text: "Programmes",
      href: "/services/coaching-prive",
      children: [
        { text: "Coaching Privé", href: "/services/coaching-prive", description: "Un accompagnement sur mesure pour atteindre vos objectifs", image: "cours-portrait.webp" },
        { text: "Round by Round", href: "/services/round-by-round", description: "Des cours collectifs intenses et motivants", image: "cours-2-landscape.webp" },
        { text: "Corporate", href: "/services/corporate", description: "Team building et bien-être en entreprise", image: "homepage.webp" },
      ],
    },
    { text: "Tarifs", href: "/tarifs" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ],
  footerLinks: {
    services: [
      { text: "Coaching Privé", href: "/services/coaching-prive" },
      { text: "Round by Round", href: "/services/round-by-round" },
      { text: "Corporate", href: "/services/corporate" },
    ],
    infos: [
      { text: "Studio", href: "/studio" },
      { text: "Tarifs", href: "/tarifs" },
      { text: "Blog", href: "/blog" },
      { text: "CGV", href: "/cgv" },
    ],
  },
};
