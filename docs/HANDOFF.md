# HANDOFF — 2026-06-25

## Epic en cours
Audit contenu + anti-cannibalisation — **pivot focus FEMMES** (valeur + lead-gen)

## État
- **Phase 0 — Hygiène technique (FAIT, déployé)** : redirect 301 `www→apex`, prop `noindex`
  câblé `metadata→BaseLayout→Seo` (actif sur `/blog/tags/*`), tags exclus du sitemap.
- **Phase 1 — Consolidation + quick wins (FAIT, déployé)** : différenciation femmes
  (landing `/services/boxe-femme` transactionnel vs article `boxe-femme-…-guide` informationnel),
  titles CTR-gap réécrits (`boxe-perte-de-poids-femme`, `equipement-boxe-debutant`, `/studio`).
  Commit `2599f57`.
- **Phase 1b — Foyer cannibalisation débutant (FAIT cette session, à déployer)** :
  consolidation pillar/article. L'article `cours-de-boxe-geneve-guide-debutant` (pos 13.6,
  CTR 0.53%) cannibalisait le pillar `/cours-de-boxe-geneve` (pos 8.7, CTR 0.49%) — slugs
  quasi identiques, les 2 rankaient mal. **Décision : fusion + 301.** Les 2 blocs narratifs
  uniques de l'article (« première séance minute par minute » + « les freins ») absorbés en
  prose dans le pillar (`src/pages/cours-de-boxe-geneve.astro`), article supprimé, 301 ajouté
  dans `netlify.toml`, maillage entrant re-pointé. Build : 113 pages, 0 erreur.

## Prochaine étape (par quoi commencer)
**Phase 2 — Topical map expansion femmes** (`/seo-topical-map`) : combler les trous sémantiques
non encore captés (« boxe féminine », « boxe avant/après corps femme », self-défense femme ;
ménopause/grossesse déjà planifié S21 6 sept), installer l'autorité thématique femme, brancher
la lead-gen vers `/services/boxe-femme` (CTR 6.74%, meilleur convertisseur). C'est le moteur du
focus principal.

## Pièges / contexte chaud
- **Phase 1b non déployée** : prend effet après `git push` → deploy Netlify. Surveiller GSC
  2-3 semaines (le pillar débutant doit remonter au-dessus de pos 8.7 après consolidation).
- Données GSC fraîches : `.seo-data/gsc-bisrepetita-ch-last_3_months.json` (3977 imp, 121 clics,
  pos moy 8.4).
- **Focus projet = FEMMES** : tout nouveau contenu = valeur + capture de lead. Meilleur aimant
  actuel : `boxe-perte-de-poids-femme` (353 imp). Meilleur convertisseur : `/services/boxe-femme`.
- Surveiller toujours : query "coach boxe" (159 imp) captée par la home (pos 13.5) > page
  service `/services/coaching-prive` (pos 18.5).
- 4 erreurs `npm run check` préexistantes (PostItem, Form, PricingTable, ZenamuCalendar) —
  hors scope, ne bloquent pas le build.
