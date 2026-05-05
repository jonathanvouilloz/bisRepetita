import nicolasPortrait from "../assets/nicolas-portrait.webp";

export interface AuthorProfile {
  slug: string;
  name: string;
  jobTitle: string;
  shortBio: string;
  bio: string;
  longBio: string[];
  image: ImageMetadata;
  imageAlt: string;
  pageUrl: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
  };
  credentials: string[];
  expertise: string[];
}

export const authors: Record<string, AuthorProfile> = {
  "Nicolas de Boccard": {
    slug: "nicolas-de-boccard",
    name: "Nicolas de Boccard",
    jobTitle: "Head Coach & Fondateur",
    shortBio:
      "Head Coach & Fondateur de Bis Repetita, 20 ans de pratique de la boxe.",
    bio: "Nicolas pratique la boxe depuis 20 ans et coache à Bis Repetita depuis 5 ans. Il a fondé le studio à Genève pour transmettre une boxe technique, exigeante et accessible, du débutant complet au compétiteur amateur.",
    longBio: [
      "Genevois passionné, Nicolas pratique la boxe anglaise depuis plus de 20 ans. Une discipline qu'il a découverte jeune et qui a façonné sa rigueur, sa patience et sa lecture du corps en mouvement.",
      "Il y a 5 ans, il a fondé Bis Repetita à La Voie-Creuse pour offrir à Genève un studio de boxe à la hauteur de la discipline : exigeant sur la technique, attentif à la progression individuelle, et résolument premium dans son cadre.",
      "Sa méthode marie le travail technique pied-poing classique, la préparation physique adaptée à l'âge et au profil de chaque élève, et un suivi mental qui transforme la séance en outil de confiance — pas en performance pour la performance.",
      "Il accompagne aujourd'hui une centaine d'élèves réguliers : cadres et dirigeants en quête d'un sport qui décompresse vraiment, femmes qui veulent reprendre la main sur leur corps, débutants complets ou compétiteurs amateurs en préparation. Tous repartent de la même chose : un cadre net, exigeant, et bienveillant.",
    ],
    image: nicolasPortrait,
    imageAlt: "Nicolas de Boccard, Head Coach et Fondateur de Bis Repetita",
    pageUrl: "/equipe/nicolas-de-boccard",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nicolas-de-boccard-a341a450",
      instagram: "https://www.instagram.com/bisrepetitaboxing/",
    },
    credentials: [
      "20 ans de pratique de la boxe anglaise",
      "5 ans de coaching à la tête de Bis Repetita",
      "Fondateur du studio (La Voie-Creuse 16, Genève)",
      "100+ élèves accompagnés",
    ],
    expertise: [
      "Boxe anglaise",
      "Coaching privé",
      "Préparation physique",
      "Boxe femme",
      "Boxe corporate",
      "Boxe pour débutants",
    ],
  },
};

export function getAuthor(name: string): AuthorProfile | null {
  return authors[name] ?? null;
}
