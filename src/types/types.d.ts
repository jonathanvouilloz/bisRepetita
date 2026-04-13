export interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  icon?: string;
  ariaLabel?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  iconClass?: string;
}

export type Value = Feature;

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface NavChildLink {
  text: string;
  href: string;
  description?: string;
  image?: string;
}

export interface NavGroup {
  label: string;
  items: NavChildLink[];
}

export interface NavLink {
  text: string;
  href: string;
  children?: NavChildLink[];
  groups?: NavGroup[];
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  containerClass?: string;
  classes?: Record<string, string>;
  fullBleed?: boolean;
}

export interface HeadlineProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  titleAs?: string;
  align?: "left" | "center";
}

export interface HeroProps extends HeadlineProps {
  description?: string;
  actions?: string | CallToAction[];
  image?: ImageMetadata | string;
  imageAlt?: string;
  variant?: "default" | "centered";
  ctaStyle?: "default" | "outline-gold" | "dark";
  lightOverlay?: boolean;
  videoSrc?: string;
  socialProof?: {
    avatars: (ImageMetadata | string)[];
    badge?: string;
    text: string;
  };
  locationBadge?: {
    text: string;
  };
}

export interface FeaturesProps extends HeadlineProps {
  features?: Feature[];
  columns?: number;
  headlineAlign?: "left" | "center";
}

export interface ContentProps extends HeadlineProps {
  content?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  items?: Feature[];
  isReversed?: boolean;
  isAfterContent?: boolean;
  description?: string[];
  actions?: string | CallToAction[];
}

export interface ServiceListProps extends HeadlineProps {
  services?: Service[];
}

export interface ValuesProps extends HeadlineProps {
  items?: Value[];
  columns?: 1 | 2 | 3 | 4;
}

// Bis Repetita specific types

export interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: CallToAction;
  highlighted?: boolean;
  popularLabel?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMemberData {
  name: string;
  role: string;
  bio: string[];
  credentials?: string[];
  image?: ImageMetadata | string;
  socialLinks?: Record<string, string>;
}

// Widget Props
export interface StatsProps extends Widget {
  stats: Stat[];
  badge?: string;
  badgeHref?: string;
  intro?: string;
}

export interface TestimonialsRating {
  score: string;
  stars: number;
  count: string;
  source: string;
}

export interface TestimonialsProps extends HeadlineProps {
  testimonials: Testimonial[];
  rating?: TestimonialsRating;
}

export interface PricingTableProps extends HeadlineProps {
  tiers: PricingTier[];
  columns?: 2 | 3;
}

export interface FAQProps extends HeadlineProps {
  items: FAQItem[];
}

export interface TeamMemberProps extends Widget {
  member: TeamMemberData;
}

export interface ServiceCardData {
  title: string;
  description: string;
  href: string;
  image?: ImageMetadata | string;
  index?: number;
}

// Pricing Nav
export interface PricingNavItem {
  label: string;
  anchorId: string;
  icon?: string;
}

export interface PricingNavProps {
  items: PricingNavItem[];
}

// Quiz Formule
export interface QuizOption {
  label: string;
  value: string;
  icon?: string;
}

export interface QuizResult {
  key: string;
  title: string;
  tagline: string;
  cta: CallToAction;
  anchorId: string;
}
