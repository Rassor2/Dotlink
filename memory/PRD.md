# Dot Link — Site vitrine

## Problème initial
"Crée un site vitrine pour le jeu dot Link screens je t'envoie. Doit être conforme stripe Apple Store et Google play store"

## Choix utilisateur
- Type : Site vitrine pur (pas de paiement, pas de back-office)
- Liens stores : "Bientôt disponible"
- Sections : Version minimale (Hero + Fonctionnalités + Stores + Légal)
- Pages légales : Templates standards
- Éditeur : RelaxPlay One — marre199@proton.me
- Langue : Français

## Architecture
- Frontend React (CRA) avec routes : `/`, `/confidentialite`, `/cgu`, `/mentions-legales`, `/remboursement`, `/support`
- Backend FastAPI inchangé (non utilisé, vitrine pure)
- Polices : Bodoni Moda (display) + Outfit (sans)
- Couleur signature : or #F5C518 sur noir #000

## Implémenté (Déc 2025)
- Hero asymétrique "Dot Link" + tagline cosmique + visuel orbital animé + stats (5/400/12+)
- Section Fonctionnalités (5 mondes, skins, classement, boutique)
- Section Mondes : Lumina / Aurora / Zenith / Eclipse / Void avec couleurs authentiques
- Section Téléchargement avec badges "Bientôt disponible" (App Store + Google Play)
- Footer complet avec liens légaux et contact
- 5 pages légales conformes Stripe/Apple/Google :
  - Politique de confidentialité (RGPD + CCPA)
  - CGU
  - Mentions légales
  - Politique de remboursement
  - Support / FAQ

## Backlog (P1)
- Remplacer les placeholders d'adresse dans Mentions légales par l'adresse réelle de RelaxPlay One
- Ajouter les vrais liens App Store / Google Play une fois publié
- Ajouter une page presskit (médias, captures, logos téléchargeables)
- Multilingue EN/FR via i18n
- Newsletter "Être prévenu de la sortie" → backend + intégration email
