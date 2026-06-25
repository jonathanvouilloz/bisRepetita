# HANDOFF — 2026-06-25

## Epic en cours
Audit contenu + anti-cannibalisation — **pivot focus FEMMES** (valeur + lead-gen)

## État
- **Phase 0 — Hygiène technique (FAIT, à déployer)** :
  - Redirect 301 `www→apex` dans `netlify.toml` (double indexation www/non-www)
  - Prop `noindex` câblé `metadata→BaseLayout→Seo` → actif sur `/blog/tags/*` (pages thin
    qui cannibalisaient les queries commerciales)
  - Tags exclus du sitemap (`astro.config.mjs`)
- **Phase 1 — Consolidation + quick wins (FAIT, à déployer)** :
  - Différenciation femmes : landing `/services/boxe-femme` = transactionnel
    (title « Cours de Boxe Femme à Genève — Studio Privé »), article
    `boxe-femme-geneve-guide-complet` = informationnel (title « Boxe femme débutante :
    peurs, format, première séance »). Maillage ré-intentionné (ancres croisées).
  - Titles CTR-gap réécrits : `boxe-perte-de-poids-femme` (353 imp/1.42% → title question
    « La boxe fait-elle maigrir ? »), `equipement-boxe-debutant`, `/studio`.
- Build : 117 pages, 0 erreur (validé 2×).
- Dernier commit : f346654 (les modifs Phase 0+1 ne sont PAS encore commitées/déployées)

## Prochaine étape (par quoi commencer)
**Au choix :**
1. **Phase 1b — Foyer cannibalisation débutant** : pillar `/cours-de-boxe-geneve` (pos 8.7,
   CTR 0.49%) vs article `cours-de-boxe-geneve-guide-debutant` (pos 13.6) — slugs quasi
   identiques, les 2 rankent mal. Décision fusion/redirect vs différenciation à trancher.
2. **Phase 2 — Topical map expansion femmes** (`/seo-topical-map`) : combler les trous,
   installer l'autorité thématique femme, CTA lead-gen. C'est le moteur du focus principal.

## Pièges / contexte chaud
- **Modifs non déployées** : Phase 0+1 ne prennent effet qu'après `git push` → deploy Netlify.
  Surveiller GSC 2-3 semaines après déploiement.
- Données GSC fraîches : `.seo-data/gsc-bisrepetita-ch-last_3_months.json` (3977 imp, 121 clics,
  pos moy 8.4). Query×page = preuve de cannibalisation (45 queries multi-pages).
- **Focus projet = FEMMES** : tout nouveau contenu doit donner de la valeur + capter du lead.
  Meilleur aimant actuel : `boxe-perte-de-poids-femme` (353 imp). Page qui convertit le mieux :
  `/services/boxe-femme` (CTR 6.74%).
- L'ancien epic « coach boxe genève / coaching-prive » (HANDOFF précédent) reste à surveiller :
  query "coach boxe" (159 imp) toujours captée par la home (pos 13.5) > page service (pos 26).
