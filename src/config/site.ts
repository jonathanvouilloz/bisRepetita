import coursPortrait from "../assets/cours-portrait.webp";
import nicolasPortrait from "../assets/nicolas-portrait.webp";
import ambianceBis from "../assets/ambiance-bis-repetita.webp";
import cours2Landscape from "../assets/cours-2-landscape.webp";
import homepage from "../assets/homepage.webp";
import studioAtmosphere from "../assets/studio-atmosphere.webp";

export interface ServicePage {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
  image: ImageMetadata;
  category: "prive" | "collectif" | "corporate";
}

export const servicePages: ServicePage[] = [
  {
    slug: "coaching-prive",
    title: "Coaching Privé",
    shortDescription: "Un accompagnement sur mesure pour atteindre vos objectifs, du solo au petit groupe.",
    href: "/services/coaching-prive",
    image: coursPortrait,
    category: "prive",
  },
  {
    slug: "coaching-solo",
    title: "Coaching Solo",
    shortDescription: "Séances individuelles 100% personnalisées avec Nicolas de Boccard.",
    href: "/services/coaching-solo",
    image: nicolasPortrait,
    category: "prive",
  },
  {
    slug: "coaching-duo-trio",
    title: "Coaching Duo & Trio",
    shortDescription: "Progressez ensemble grâce à la boxe anglaise, à deux ou trois.",
    href: "/services/coaching-duo-trio",
    image: ambianceBis,
    category: "prive",
  },
  {
    slug: "small-group-training",
    title: "Small Group Training",
    shortDescription: "L'énergie du collectif, la précision du privé. 6 personnes maximum.",
    href: "/services/small-group-training",
    image: cours2Landscape,
    category: "prive",
  },
  {
    slug: "coaching-boxe-domicile",
    title: "Coaching à Domicile",
    shortDescription: "Votre coach de boxe à domicile à Genève. Matériel fourni, programme sur mesure.",
    href: "/services/coaching-boxe-domicile",
    image: coursPortrait,
    category: "prive",
  },
  {
    slug: "round-by-round",
    title: "Round by Round",
    shortDescription: "Cours collectifs intenses alliant technique de boxe et préparation physique.",
    href: "/services/round-by-round",
    image: cours2Landscape,
    category: "collectif",
  },
  {
    slug: "corporate",
    title: "Corporate",
    shortDescription: "Team building, cohésion d'équipe et bien-être en entreprise par la boxe.",
    href: "/services/corporate",
    image: studioAtmosphere,
    category: "corporate",
  },
  {
    slug: "boxe-femme",
    title: "Boxe Femme",
    shortDescription: "Coaching pour femmes : cadre privé, sans contact, toutes formules.",
    href: "/services/boxe-femme",
    image: studioAtmosphere,
    category: "prive",
  },
];

export const siteConfig = {
  name: "Bis Repetita",
  description:
    "Studio de boxe premium à Genève. Coaching privé, cours collectifs et programmes corporate avec Nicolas de Boccard.",
  url: "https://bisrepetita.ch",
  lang: "fr",
  locale: "fr_CH",
  author: "Nicolas de Boccard",
  ogImage: "/og_image.png",
  contact: {
    phone: "+41 76 801 25 96",
    email: "contact@bisrepetita.ch",
    address: "La Voie-Creuse 16, 1202 Genève",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/bisrepetitaboxing/",
    linkedin: "https://linkedin.com/company/bisrepetita",
  },
  navCta: {
    text: "Séance d'essai gratuite",
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
      href: "/services",
      groups: [
        {
          label: "Coaching Privé",
          items: [
            { text: "Coaching Privé", href: "/services/coaching-prive", description: "Quel format choisir ? Le guide", image: "cours-portrait.webp" },
            { text: "Solo", href: "/services/coaching-solo", description: "Séances individuelles sur mesure", image: "nicolas-portrait.webp" },
            { text: "Duo & Trio", href: "/services/coaching-duo-trio", description: "Progressez ensemble, à deux ou trois", image: "ambiance-bis-repetita.webp" },
            { text: "Petit Groupe", href: "/services/small-group-training", description: "L'énergie du collectif, 6 max", image: "cours-2-landscape.webp" },
            { text: "À Domicile", href: "/services/coaching-boxe-domicile", description: "Le studio vient à vous", image: "cours-portrait.webp" },
            { text: "Boxe Femme", href: "/services/boxe-femme", description: "Coaching pour femmes, cadre privé", image: "studio-atmosphere.webp" },
          ],
        },
        {
          label: "Collectif & Corporate",
          items: [
            { text: "Round by Round", href: "/services/round-by-round", description: "Cours collectifs intenses", image: "cours-2-landscape.webp" },
            { text: "Corporate", href: "/services/corporate", description: "Team building par la boxe", image: "homepage.webp" },
          ],
        },
      ],
    },
    { text: "Tarifs", href: "/tarifs" },
    { text: "Blog", href: "/blog" },
  ],
  footerLinks: {
    services: [
      { text: "Coaching Privé", href: "/services/coaching-prive" },
      { text: "Coaching Solo", href: "/services/coaching-solo" },
      { text: "Coaching Duo & Trio", href: "/services/coaching-duo-trio" },
      { text: "Small Group Training", href: "/services/small-group-training" },
      { text: "Coaching à Domicile", href: "/services/coaching-boxe-domicile" },
      { text: "Round by Round", href: "/services/round-by-round" },
      { text: "Corporate", href: "/services/corporate" },
      { text: "Boxe Femme", href: "/services/boxe-femme" },
    ],
    infos: [
      { text: "Studio", href: "/studio" },
      { text: "Tarifs", href: "/tarifs" },
      { text: "Blog", href: "/blog" },
      { text: "Cours de Boxe Genève", href: "/cours-de-boxe-geneve" },
      { text: "CGV", href: "/cgv" },
    ],
  },
};
