# Bis Repetita — Document de Cadrage Projet
> Version 1.0 — Mai 2025  
> Usage interne : stratégie, développement, contenu

---

## 1. Vue d'ensemble du projet

### Contexte
Nicolas de Boccard, boxeur licencié SwissBoxing (licence #102860), ouvre son studio premium à Genève sous la marque **Bis Repetita**. Le site actuel (bisrepetita.ch, sur Webflow) est basique et ne génère aucun trafic organique. La fiche Google Business Profile n'est pas optimisée. L'objectif est de refaire le site de A à Z sur **Astro** avec un CMS headless (TinaCMS ou PageCMS) et de déployer une stratégie SEO locale sur 3 mois.

### Objectifs business prioritaires
1. **Corporate high-ticket** — contrats récurrents avec des entreprises genevoises (400–600 CHF/séance), team-building sportif ponctuel
2. **Coaching privé premium** — 1-1 et petits groupes (jusqu'à 6 pers.)
3. **Cours collectifs "Round by Round"** — 8 pers. max, recurring revenue
4. **Notoriété locale** — devenir la référence boxe premium à Genève centre / La Voie-Creuse

### Stack technique

| Catégorie | Outil | Justification |
|---|---|---|
| Framework | Astro 5 | Static-first, performant, parfait pour site vitrine + blog |
| Styling | Tailwind CSS v4 | Intégration native Astro, config CSS-native, idéal pour dark/épuré |
| Animations | GSAP + ScrollTrigger | Niveau de finition premium, transitions de page, scroll reveals |
| CMS | TinaCMS | ⏸ En suspens — articles blog en MDX dans le repo pour l'instant |
| Formulaires | Netlify Forms | Zéro backend, contact + devis corporate |
| Hébergement | Netlify | Deploy preview par PR, intégration Git, free tier suffisant |
| Images | Astro Image (built-in) | Optimisation automatique WebP/AVIF |
| Analytics | Plausible | Privacy-first, RGPD-compliant — important pour clientèle corporate suisse |
| SEO meta | astro-seo | Gestion meta tags par page |
| Sitemap | @astrojs/sitemap | Génération automatique |
| Schema.org | JSON-LD custom | Dans chaque layout, par type de page |

**Rédaction** : assurée intégralement par le chef de projet, gérée via TinaCMS pour le blog.

---

## 2. L'offre de services

### 2.1 Coaching privé (1 à 6 personnes)
Séances sur mesure au studio. Technique boxe anglaise, préparation physique, travail au sac et au pad. Tous niveaux, de l'initiation au confirmé.

**Angle SEO** : "personal trainer boxe Genève", "cours privé boxe anglaise Genève", "coaching boxe sur mesure Genève"

### 2.2 Round by Round (cours collectifs)
8 personnes maximum. Programme structuré autour des fondamentaux de la boxe, sans opposition directe. Enchaînements techniques + travail physique. Accessible tous niveaux. Animé par Nicolas + son frère Lionel (également boxeur licencié, Champion Suisse Romand 2013 Jeunes) + coach circuit training.

**Angle SEO** : "cours de boxe collectif Genève", "circuit training boxe Genève", "groupe de boxe petit comité Genève"

### 2.3 Corporate
Deux formats :
- **Déplacement en entreprise** : Nicolas se rend dans les locaux de l'entreprise, adapte la séance à l'espace disponible
- **Session au studio** : l'équipe vient à La Voie-Creuse 16

Usages : team-building sportif, gestion du stress, bien-être au travail, événement ponctuel, contrat récurrent hebdomadaire.

**Angle SEO** : "team building boxe Genève entreprise", "cours de boxe entreprise Genève", "bien-être au travail sport Genève", "coach boxe corporate Genève"

### 2.4 Cours running / complémentaires
Coach externe intervenant ponctuellement. À positionner comme service annexe pour l'instant, pas un axe SEO prioritaire.

---

## 3. Le studio

- **Adresse** : La Voie-Creuse 16, 1202 Genève (au sein du Swiss Gun Center)
- **Surface** : très grande salle, ring de boxe professionnel, nombreux matériaux de frappe (sacs, etc.)
- **Ambiance** : propre, premium, espace privé
- **Équipements** : vestiaires, douches, serviettes et produits fournis
- **Accès** : à préciser (transports publics, parking)

**Argument clé** : l'espace privé est un différenciateur fort — pas de regard extérieur, cadre exclusif, idéal pour les profils corporate ou les débutants intimidés par les salles classiques.

---

## 4. L'équipe — angle storytelling

### Nicolas de Boccard — fondateur & head coach
- Boxeur de longue carrière, licencié SwissBoxing (#102860)
- Palmarès exact à confirmer avec lui (championnat Suisse ?)
- Pédagogie reconnue (témoignage LinkedIn : progression rapide, ambiance, explications claires)
- Vision : "mettre la boxe au service des objectifs de chacun"

### Lionel de Boccard — frère & coach
- Licencié SwissBoxing (#103010)
- **Champion Suisse Romand 2013 Jeunes** (65 kg), Cercle des Sports Genève
- Intervient sur les cours circuit training / Round by Round

### Coach circuit training / running
- Profil à documenter (prénom, spécialité)
- Coach running féminin intervenant ponctuellement

**Angle narratif** : famille de boxeurs genevois, ancrage dans la tradition locale de la boxe (le Cercle des Sports Genève est l'un des clubs historiques de la ville), transmis en studio premium moderne.  
→ **Section "Notre histoire" sur la page About** : à construire autour de cette dimension familiale.

---

## 5. Positionnement et tone of voice

### Positionnement
**"Le studio de boxe premium de Genève"** — pas un club de masse, pas une franchise. Un lieu à l'identité forte, accessible à tous les niveaux, piloté par des boxeurs de compétition qui font de la pédagogie leur priorité.

### Cible principale
- Actifs genevois 28–50 ans, pouvoir d'achat élevé
- DRH / responsables RH pour le corporate
- Femmes cherchant un cadre bienveillant et technique
- Expats (communauté internationale de Genève)

### Tone of voice
- Premium sans être prétentieux
- Technique sans être élitiste
- Sobre, direct, efficace — peu de superlatifs
- En français, avec possibilité d'une version EN pour les expats (phase 2)

### Direction visuelle
Garder l'esthétique actuelle : dark, épuré, contrasté. Élever le niveau de production (photos professionnelles du studio et de Nicolas en action recommandées avant le lancement).

---

## 6. Architecture du site

```
bisrepetita.ch/
├── / (Home)
├── /studio
├── /services/
│   ├── coaching-prive
│   ├── round-by-round
│   └── corporate
├── /about
├── /blog/
│   └── [slug]
├── /tarifs
├── /contact
└── /cgv
```

### Description des pages clés

**/** — Hero fort avec CTA "Réserver une séance d'essai" + présentation rapide des 3 services + un bloc social proof (nb d'entreprises, années d'expérience, etc.) + planning + FAQ + newsletter

**/studio** — Présentation du lieu, photos du ring, équipements, localisation, accès. Objectif : lever les freins à la visite.

**/services/coaching-prive** — Landing page optimisée. Déroulé d'une séance, profils adaptés, tarifs. CTA : séance d'essai.

**/services/round-by-round** — Landing page. Planning intégré, format, esprit du cours, progression. CTA : planning / inscription.

**/services/corporate** — Landing page dédiée avec pitch entreprise, deux formats (déplacement / studio), bénéfices, processus de devis. CTA : "Demander un devis".

**/about** — Histoire de Nicolas, palmarès, philosophie. Section "La famille de Boccard & la boxe genevoise". Présentation de l'équipe (Lionel + autres coachs).

**/blog** — Articles SEO, conseils techniques, actualités studio. Géré via CMS.

**/tarifs** — Grille claire par service, packs, politique d'essai.

**/contact** — Formulaire + carte + infos pratiques.

---

## 7. Stratégie SEO locale — vue d'ensemble

### Ancrage géographique
Mots-clés géo prioritaires : **Genève**, **Genève centre**, **1202 Genève**  
(Note : contrairement au rapport Gemini qui ciblait Chêne-Bougeries, le studio est en réalité à La Voie-Creuse 16, 1202 Genève — centre-ville. La stratégie géo est adaptée en conséquence.)

### Mots-clés prioritaires — données Google

| Cluster | Mot-clé cible | Volume mensuel | Compétition | Intention | Priorité |
|---|---|---|---|---|---|
| Niche Boxe | Boxe Genève | 500 | Moyenne | Recherche club/coach | 🔴 Haute |
| Niche Boxe | Boxe anglaise Genève | 500 | Moyenne | Passionné / Pratiquant | 🔴 Haute |
| Local / Prestige | Coach sportif Genève | 500 | Moyenne | Recherche locale | 🔴 Haute |
| Local / Prestige | Personal Trainer Genève | 500 | Moyenne | CSP+ / Expats | 🔴 Haute |
| Coaching Privé | Coaching privé | 500 | Moyenne | Qualité / Discrétion | 🔴 Haute |
| Niche Boxe | Cours de boxe femme Genève | 50 | Inconnue | Forte conversion | 🟠 Moyenne |
| B2B / Entreprise | Sport en entreprise | 50 | Faible | Décideur RH | 🟡 Faible volume |
| B2B / Entreprise | Coach sportif en entreprise | 50 | Moyenne | Recherche prestataire | 🟡 Faible volume |

### Lecture stratégique des données

**Mots-clés à volume (trafic)** — les 5 termes à 500/mois sont le moteur principal du trafic organique. Ce sont les pages piliers et la home qui doivent les capturer. Concurrence moyenne = atteignable en 2–3 mois avec un contenu bien structuré et un GBP optimisé.

**Mots-clés à conversion (leads qualifiés)** — "Cours de boxe femme Genève" à 50/mois est peu cherché mais à forte intention d'achat. Une landing page dédiée sur ce segment convertira mieux qu'une page générique à 500 visites. Même logique pour le corporate.

**Point d'attention corporate** : les termes B2B (50/mois) indiquent que les décideurs RH ne passent pas principalement par Google pour ce type de prestation. Le SEO sera un signal de crédibilité lorsqu'ils iront vérifier, pas le canal d'acquisition principal. → Prévoir une stratégie d'outreach complémentaire (LinkedIn, cold email ciblé) en parallèle du SEO pour ce segment.

### Google Business Profile — actions prioritaires
- Remplir toutes les sections (horaires, photos, services détaillés, description)
- Catégories : "Salle de boxe" + "Coach sportif" + "Centre de remise en forme"
- Ajouter photos professionnelles du studio et du ring
- Mettre en place une stratégie d'acquisition d'avis (demander aux clients existants)
- Google Posts hebdomadaires (planning cours, offres corporate, articles blog)
- Q&A : préparer 8–10 questions/réponses anticipant les freins

### Citations / Annuaires (à inscrire)
- Local.ch / Search.ch
- Agenda.ch
- Trouver-un-cours.ch
- Yelp
- Directories suisses sport/bien-être
- Réseau Sport Santé Inclusion (HUG Genève) — lien contextuel fort

### Données structurées (Schema.org)
À implémenter dans Astro :
- `LocalBusiness` avec coordonnées, horaires, géolocalisation
- `Service` pour chaque page service
- `Person` pour Nicolas (coach)
- `Review` / `AggregateRating` une fois les avis collectés
- `FAQPage` sur la home et les pages service

---

## 8. Plan de contenu — 3 mois

### Mois 1 — Fondations SEO

**Objectif** : indexer les pages critiques, optimiser le GBP, créer l'autorité de base.

**Actions site** :
- Lancement du site Astro avec toutes les pages service
- Meta titles / descriptions optimisés sur chaque page
- Schema.org implémenté
- Sitemap XML soumis à Google Search Console

**Articles blog (4)** :
1. `Pourquoi choisir un studio de boxe privé plutôt qu'une salle classique à Genève` — TOFU, différenciation
2. `Les bienfaits de la boxe pour les cadres et managers genevois` — MOFU corporate
3. `Boxe pour débutants : ce que vous devez savoir avant votre premier cours à Genève` — TOFU, volume
4. `Nicolas de Boccard : le projet derrière Bis Repetita` — E-E-A-T, storytelling, branded

**GBP** :
- Fiche complètement remplie
- 5 premières photos professionnelles
- Demande d'avis aux 10–15 clients existants

---

### Mois 2 — Densification sémantique

**Objectif** : couvrir les segments niche (féminin, corporate), renforcer l'autorité thématique.

**Articles blog (4)** :
5. `Cours de boxe pour femmes à Genève : pourquoi le studio privé change tout` — niche féminine
6. `Team building sportif à Genève : pourquoi la boxe crée de la cohésion` — corporate TOFU
7. `Circuit training et boxe : la combinaison parfaite pour votre préparation physique` — Round by Round
8. `Comment progresser en boxe quand on reprend après 30 ans` — TOFU, profil adulte actif

**GBP** :
- Google Posts 2x/semaine
- Réponses aux avis reçus (signal d'activité)
- Ajout de photos d'ambiance (cours en action, corporate)

**Citations** :
- Inscription sur tous les annuaires listés
- Vérification cohérence NAP (Name, Address, Phone) partout

---

### Mois 3 — Conversion et autorité

**Objectif** : transformer le trafic en leads, renforcer les pages à forte intention.

**Articles blog (4)** :
9. `Gérer le stress au travail par le sport : l'approche Bis Repetita` — corporate MOFU
10. `Jab, direct, crochet : comprendre les fondamentaux de la boxe anglaise` — technique, autorité E-E-A-T
11. `Comparatif : coaching privé vs cours collectifs — quel format vous correspond ?` — BOFU, aide à la décision
12. `6 mois de boxe : ce que nos clients ont vécu` — social proof, BOFU

**Actions conversion** :
- Intégration d'un système de réservation (Calendly ou équivalent) sur les pages service
- Page corporate avec formulaire de devis dédié
- Mise en place du suivi Google Analytics 4 + Search Console

---

## 9. Social proof — collecte à lancer immédiatement

Avant même le lancement du site, lancer la collecte de :

- **Témoignages écrits** : demander à 5–8 clients existants un texte court (3–5 phrases). Thèmes : progression technique, ambiance, résultats physiques, corporate.
- **Logos entreprises clientes** : pour la page corporate, même 2–3 logos crédibilisent énormément.
- **Photos d'action** : séance shooting professionnel au studio (ring, sacs, Nicolas en action, groupe corporate). Investissement indispensable pour un positionnement premium.

---

## 10. Points à confirmer avec Nicolas

- [x] Téléphone : 076 801 25 96
- [x] Horaires : Lun–Ven 09:00–20:00 / Sam 10:00–18:00 / Dim 11:00–18:00
- [ ] Palmarès exact de Nicolas (titres, années, catégories)
- [ ] Accord sur la mise en avant de l'histoire familiale (Lionel, Cercle des Sports)
- [ ] Profil complet des autres coachs (prénom, spécialité, bio courte)
- [ ] Grille tarifaire définitive (coaching privé 1-1, duo, pack, corporate)
- [ ] Photos professionnelles à planifier (shooting studio)
- [ ] Accès Google Business Profile actuel pour audit
- [ ] Accès Google Search Console (ou création si inexistant)
- [ ] Décision TinaCMS vs PageCMS
- [ ] Politique de cours d'essai (gratuit ? tarif réduit ?)
- [ ] Horaires d'ouverture du studio

---

## 11. KPIs — objectifs à 3 mois

| Indicateur | Objectif |
|---|---|
| Positions Google (mots-clés cibles) | Top 10 sur 5 requêtes locales prioritaires |
| Trafic organique mensuel | +300% vs baseline actuelle |
| Avis Google | 15+ avis, note ≥ 4.8 |
| Leads corporate (formulaire devis) | 3–5 par mois |
| Leads coaching privé | 10–15 par mois |
| Newsletter | 100 inscrits |
