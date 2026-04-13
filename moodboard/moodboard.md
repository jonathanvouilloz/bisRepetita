---
project: bis-repetita
version: 1
base_style: photoreal-dslr
language: fr-CH

identity:
  brand_name: Bis Repetita
  positioning: "Studio de boxe premium à Genève — coaching privé, cadre exclusif, pédagogie de compétition"
  audience: "Actifs genevois 28–50 ans, CSP+ · Femmes cherchant un cadre bienveillant · Expats · DRH corporate"
  tone:
    - "Premium sans être prétentieux"
    - "Technique sans être élitiste"
    - "Sobre, direct, efficace"
  forbidden_subjects:
    - "Violence, sang, combat avec opposition directe"
    - "Ambiance salle low-cost (équipements abîmés, foule, désordre)"
    - "Texte ou logo incrusté dans l'image générée"

palette:
  primary_dark: "#1a1a1a"
  primary_light: "#f5f2ee"
  accent: "#B8A47E"
  accent_rule: "Palette neutre earthy — beige, blanc cassé, noir, terracotta. Saturation basse. L'or (#B8A47E) en touch discrète sur les matières (gants cuir, bandes). Jamais de fond entièrement noir."

typography:
  display: "LASVALLES (Regular, Rounded, Vintage) — titres, watermarks"
  body: "Bricolage Grotesque / Manrope — corps de texte, labels"
  rules: "Uppercase sparingly, letter-spacing large sur les labels de section"

photography:
  rendering: "Photographie DSLR photoréaliste lifestyle — pas d'illustration, pas de rendu 3D"
  lighting: "Lumière douce diffuse, naturelle ou window light simulée. Ombres légères et sculptantes. Contraste modéré — sauf option B&W éditoriale plus contrastée."
  lens: "Portrait 85mm f/2.0 pour les portraits. 35–50mm pour les scènes d'ensemble. Profondeur de champ modérée."
  skin: "Naturel, athlétique, tonique. Teintes earthy — pas de retouche excessive. Feeling réel, pas publicité."
  composition: "Cadrage centré, poses statiques ou légèrement asymétriques. Beaucoup d'espace négatif. Focus silhouette + matière + posture. Fond clair (béton, mur blanc/gris, vestiaires propres)."
  ratios_allowed:
    - "16:9 (blog-cover)"
    - "4:3 (blog-inline)"
    - "1:1 (service-portrait)"
    - "4:5 (category-hero)"
    - "16:10 (scene-wide)"

negatives:
  - "Pas de fond entièrement noir ou ambiance dark cinématique"
  - "Pas de rim light dramatique ou éclairage de scène"
  - "Pas de mouvement extrême — pas d'action boxing agressive (sparring, coups échangés)"
  - "Pas de couleurs vives ou saturées (rouge flashy, bleu fluo)"
  - "Pas d'ambiance street/urban dur — pas de graffiti, entrepôt, ruelle"
  - "Pas de texte dans l'image"
  - "Pas d'effet HDR, pas de saturation excessive"
  - "Pas de foule, spectateurs, ambiance compétition"

references:
  default_portrait: refs/portrait-ambient.webp
  default_scene: refs/scene-wide.webp
  default_blog_cover: refs/blog-cover-style.webp
---

# Moodboard — Bis Repetita

## ADN visuel

Bis Repetita est un studio de boxe premium genevois. Les images incarnent **la performance maîtrisée** : un athlète calme et confiant dans un espace épuré, une lumière douce qui sculpte sans dramatiser, des matières techniques qui disent le soin apporté à chaque détail. L'esthétique est celle d'une **luxury wellness brand** — clean athletic editorial, pas de boxe aggressive.

Le fond est clair — béton poli, mur blanc ou gris doux, vestiaires premium. La palette est neutre et earthy (beige, blanc cassé, noir sobre, terracotta). Pas de noir dominant. L'or (#B8A47E) apparaît dans les matières (cuir des gants, bandes de boxe) et nulle part ailleurs. La sobriété est le luxe.

## Lieux et environnements types

- **Studio épuré** : mur blanc ou béton clair, sol béton poli ou parquet, sacs de frappe en cuir naturel en arrière-plan discret
- **Vestiaires premium** : mur de casiers gris/sage, banc simple, lumière douce — moment de préparation ou récupération
- **Espace neutre lifestyle** : fond mur béton texture, dallage propre — pour portraits et duos fitness

## Sujets autorisés

- Athlète au repos ou en préparation (enroulement de bandes, équipement posé, geste calme et concentré)
- Portrait coach : debout, confiant, tenue technique stylée — expression calme, pas en action
- Duo mixte ou duo homme/femme en tenue sport — complicité, énergie positive, pas de contact brutal
- Détail matière : gants de boxe en cuir naturel, bandes blanches, chaussures de sport propres
- Femme en studio boxing : posture assurée, élégante, jamais agressive ni sexualisée

## Sujets interdits

- Boxe en action agressive — sparring, échange de coups, mouvement extrême
- Ambiance dark / cinématique / sombre — ring sous projecteurs, fond noir dominant
- Blessures, sang, visages marqués ou sueur excessive
- Ambiance club de masse, foule, compétition, ring de gala
- Équipements colorés vifs (rouge/bleu flashy), logos sportifs mainstream trop visibles
- Fond entièrement noir, éclairage dramatique de scène, rim light agressif

## Références inspirations externes

- Marques : BOXRAW (editorial boxing lifestyle), Reigning Champ (minimal performance), Vuori (wellness clean)
- Style : campagnes Nike Training Club (moments calmes), Lululemon editorial (lifestyle athlétique)
- Photo B&W éditoriale autorisée : style mode/fashion avec contexte boxing — mur blanc, sacs en cuir, poses mode

## Notes prompt-engineering

**Toujours inclure** : `soft diffuse light`, `clean light background`, `neutral earthy tones`, `athletic lifestyle editorial`, `premium boxing studio`, `calm confident pose`, `technical sportswear`, `minimal composition`, `negative space`.

**Toujours exclure** : `dark background`, `dramatic rim light`, `aggressive boxing action`, `colorful equipment`, `crowd`, `competition`, `text overlay`, `HDR`, `oversaturated`, `street style`.

Pour les covers blog : sujet positionné sur la moitié droite du cadre, côté gauche clair avec espace négatif — réserve l'espace pour le texte en post-traitement.
