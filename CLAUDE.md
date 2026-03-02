# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Bis Repetita** — premium boxing studio website for Nicolas de Boccard in Geneva, Switzerland. French-language site (`fr_CH`) targeting local SEO for boxing/coaching services. Dark theme with gold (#D4A853) accents, glassmorphism design, GSAP scroll animations.

## Commands

```bash
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build → dist/
npm run preview      # Serve production build
npm run check        # Astro diagnostics
npm run typecheck    # TypeScript type check (tsc --noEmit)
npm run lint         # ESLint with auto-fix
npm run lint:check   # ESLint check only
npm run format       # Prettier format all
npm run fix          # Format + lint combined
npm run test         # Vitest
```

## Tech Stack

- **Astro 5** (static-first, `trailingSlash: "never"`)
- **Tailwind CSS v4** via Vite plugin (`@tailwindcss/vite`) — no `tailwind.config.js`, all config in `src/styles/global.css` using `@theme` directive
- **GSAP 3 + ScrollTrigger** for animations
- **TypeScript strict** (extends `astro/tsconfigs/strict`)
- **Netlify** deployment with security headers and redirects (`netlify.toml`)
- **Plausible Analytics** (privacy-first, loaded in BaseLayout)

## Architecture

### Layout Flow

`BaseLayout.astro` → wraps every page. Loads Google Fonts (Bricolage Grotesque for headings, Manrope/Geist for body), initializes GSAP, renders Navbar (fixed glassmorphism) + Footer (large watermark). All pages pass a `metadata` object for SEO.

### Key Directories

- `src/config/site.ts` — centralized site config (contact info, nav links, social links, map embed, footer links)
- `src/types/types.d.ts` — all TypeScript interfaces for components (Widget, HeroProps, FeaturesProps, etc.)
- `src/styles/global.css` — Tailwind v4 `@theme` config, CSS custom properties (colors, shadows), custom utilities (`.glass-card`, `.text-gradient-gold`, `.section-label`), keyframe animations
- `src/utils/gsap.ts` — GSAP initialization with ScrollTrigger, defines all animation types
- `src/content.config.ts` — blog content collection (glob `src/content/blog/*.{md,mdx}`)

### Component Pattern

Pages compose **widgets** (`src/components/widgets/`) with **UI primitives** (`src/components/ui/`):

- **Widgets** = full sections (Hero, Stats, Features, Testimonials, FAQ, PricingTable, CTABanner, LocationMap, etc.). Most accept props matching interfaces from `types.d.ts` and are wrapped in `WidgetWrapper.astro` for consistent spacing.
- **UI primitives** = Button, Card, Container, SectionTitle, Headline, Badge, Form, Tags, Pagination.
- **SEO components** (`src/components/seo/`) = `Seo.astro` (meta/OG tags), `Schema.astro` (JSON-LD supporting: WebSite, BlogPosting, SportsActivityLocation, Service, Person, FAQPage).

### GSAP Animation System

Animations are applied via HTML attributes, initialized in `src/utils/gsap.ts`:

```html
<!-- Single element -->
<div class="gsap-reveal" data-animation="fadeUp" data-delay="0" data-duration="0.8">

<!-- Staggered children -->
<div class="gsap-stagger-cards">
  <div>Card 1</div>
  <div>Card 2</div>
</div>

<!-- Count-up numbers -->
<span class="gsap-count-up" data-value="500+">0</span>
```

Available animations: `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`, `clipReveal`, `rotateIn`. Or use the `<GsapReveal>` wrapper component.

### Design Tokens

All in CSS custom properties (`global.css`): `--background` (#0a0a0a), `--foreground` (#e8e4de), `--primary` (#D4A853), `--card` (#111111), `--muted` (#141414), `--border` (#1f1f1f). Gold glow shadows: `--shadow-gold-card`, `--shadow-gold-button`, `--shadow-gold-icon`.

Custom fonts: LASVALLES family (Regular, Rounded, Vintage) loaded from `/public/fonts/`.

### Content & SEO

- Blog posts in `src/content/blog/` as Markdown/MDX with frontmatter: title, description, pubDate, author, image?, tags?, category?
- Schema.org structured data per page type via `<Schema type="..." data={...} />`
- Site URL: `https://bisrepetita.ch`
- Netlify redirect: `/about` → `/studio` (301)

## Conventions

- All content and UI text in **French**
- Icon sets: `lucide` and `tabler` via `astro-icon` (usage: `<Icon name="lucide:arrow-right" />`)
- Prettier: semicolons on, trailing commas all
- ESLint: Astro + TypeScript + jsx-a11y plugins; unused vars warned (prefix `_` to ignore)
- Image assets in `src/assets/` (Astro optimizes them); public static files in `public/`
- No path aliases configured — use relative imports
