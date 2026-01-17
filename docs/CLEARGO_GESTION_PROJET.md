# 🎯 ClearGo — Guide de Gestion de Projet

## Plan d'Actions & Suivi Développement

> **Date :** 17 janvier 2026 | **Version :** 1.0 | **Auteur :** Équipe Produit

---

## 📋 Comment utiliser ce document

Ce guide accompagne le document de cadrage technique (`CLEARGO_CADRAGE_TECHNIQUE.md`) et propose des **actions concrètes** pour structurer le développement du MVP ClearGo.

---

## 🏗️ Phase 1 : Setup & Architecture (Semaines 1-2)

### Actions techniques

| #   | Action                                     | Responsable  | Durée | Livrable            |
| --- | ------------------------------------------ | ------------ | :---: | ------------------- |
| 1.1 | Setup projet Next.js 14 + TypeScript       | Lead Dev     |  1j   | Repo configuré      |
| 1.2 | Configuration Supabase (PostgreSQL + Auth) | Lead Dev     |  1j   | BDD prête           |
| 1.3 | Intégration Stripe (sandbox)               | Backend Dev  |  1j   | Paiements testables |
| 1.4 | Setup CI/CD (GitHub Actions + Vercel)      | DevOps       |  1j   | Pipeline actif      |
| 1.5 | Design System (Tailwind + Shadcn/ui)       | Frontend Dev |  2j   | Composants base     |

### Checklist architecture

- [ ] Schéma base de données validé
- [ ] Structure des dossiers définie
- [ ] Variables d'environnement documentées
- [ ] Tests unitaires configurés
- [ ] Linting + Prettier configurés

---

## 🔐 Phase 2 : Authentification & Onboarding (Semaines 2-4)

### User Stories prioritaires

| US#   | En tant que... | Je veux...                     | Afin de...                    | Points |
| ----- | -------------- | ------------------------------ | ----------------------------- | :----: |
| US-01 | Visiteur       | M'inscrire avec email/mdp      | Accéder au diagnostic gratuit |   3    |
| US-02 | Visiteur       | Me connecter                   | Retrouver mon dossier         |   2    |
| US-03 | Nouveau user   | Compléter l'onboarding         | Configurer mon entreprise     |   5    |
| US-04 | User           | Réinitialiser mon mot de passe | Récupérer mon accès           |   2    |

### Actions développement

| #   | Action                       | Détails                                 |
| --- | ---------------------------- | --------------------------------------- |
| 2.1 | Pages Auth                   | `/login`, `/signup`, `/forgot-password` |
| 2.2 | Middleware protection routes | Vérification session Supabase           |
| 2.3 | Formulaire onboarding        | Nom entreprise, SIRET, secteur, flotte  |
| 2.4 | Stockage profil utilisateur  | Table `profiles` + `companies`          |

---

## 📊 Phase 3 : Diagnostic Freemium (Semaines 4-6)

### User Stories

| US#   | En tant que... | Je veux...                                   | Points |
| ----- | -------------- | -------------------------------------------- | :----: |
| US-05 | Transporteur   | Répondre au questionnaire RSE (12 questions) |   5    |
| US-06 | Transporteur   | Voir mon score de conformité                 |   3    |
| US-07 | Transporteur   | Comprendre mes risques principaux            |   3    |

### Actions développement

| #   | Action                     | Détails                          |
| --- | -------------------------- | -------------------------------- |
| 3.1 | Questionnaire multi-étapes | 12 questions avec progress bar   |
| 3.2 | Algorithme de scoring      | Pondération 6 domaines RSE       |
| 3.3 | Page résultats             | Score global + alertes + teasing |
| 3.4 | Sauvegarde réponses        | Table `assessments`              |

### Critères d'évaluation RSE (à implémenter)

```javascript
const WEIGHTS = {
  inspection_travail: 0.25,
  urssaf: 0.25,
  accidents_travail: 0.2,
  tachygraphe: 0.15,
  facturation_electronique: 0.1,
  environnement: 0.05,
};
```

---

## 💳 Phase 4 : Paiement & Diagnostic Complet (Semaines 6-8)

### User Stories

| US#   | En tant que... | Je veux...                              | Points |
| ----- | -------------- | --------------------------------------- | :----: |
| US-08 | Transporteur   | Payer pour le diagnostic complet        |   5    |
| US-09 | Transporteur   | Uploader mes documents                  |   5    |
| US-10 | Transporteur   | Recevoir mon plan d'action personnalisé |   8    |

### Actions développement

| #   | Action               | Détails                         |
| --- | -------------------- | ------------------------------- |
| 4.1 | Checkout Stripe      | Paiement one-shot 50-100€       |
| 4.2 | Upload documents     | Drag & drop + validation format |
| 4.3 | Stockage sécurisé    | Supabase Storage + chiffrement  |
| 4.4 | Analyse IA documents | OCR + extraction entités        |
| 4.5 | Génération roadmap   | Actions correctives priorisées  |

---

## 🔄 Phase 5 : Abonnement & Suivi (Semaines 8-12)

### User Stories

| US#   | En tant que... | Je veux...                          | Points |
| ----- | -------------- | ----------------------------------- | :----: |
| US-11 | Transporteur   | Souscrire un abonnement mensuel     |   5    |
| US-12 | Transporteur   | Voir mon dashboard de conformité    |   8    |
| US-13 | Transporteur   | Marquer des actions comme terminées |   3    |
| US-14 | Transporteur   | Recevoir des alertes automatiques   |   5    |
| US-15 | Transporteur   | Créer des documents avec l'IA       |   8    |

### Actions développement

| #   | Action                    | Détails                            |
| --- | ------------------------- | ---------------------------------- |
| 5.1 | Abonnement Stripe Billing | Récurrence mensuelle/annuelle      |
| 5.2 | Dashboard transporteur    | Score + actions + alertes          |
| 5.3 | Gestion actions           | CRUD + statuts + historique        |
| 5.4 | Système alertes           | Cron jobs + emails automatiques    |
| 5.5 | Générateur documents IA   | Templates + personnalisation GPT-4 |

---

## 📚 Phase 6 : E-learning & Support (Semaines 12-16)

### User Stories

| US#   | En tant que... | Je veux...                       | Points |
| ----- | -------------- | -------------------------------- | :----: |
| US-16 | Transporteur   | Accéder aux modules de formation |   5    |
| US-17 | Transporteur   | Contacter le support par chat    |   5    |
| US-18 | Support        | Répondre aux tickets             |   5    |

---

## 📈 Métriques de suivi projet

### KPIs développement

| Métrique               |      Cible       | Fréquence mesure |
| ---------------------- | :--------------: | ---------------- |
| Vélocité équipe        | 40 points/sprint | Hebdo            |
| Couverture tests       |      > 60%       | CI/CD            |
| Bugs critiques ouverts |        0         | Daily            |
| Temps de review PR     |      < 24h       | Hebdo            |

### KPIs produit (post-lancement)

| Métrique             | Cible | Fréquence   |
| -------------------- | :---: | ----------- |
| Inscriptions/semaine |  20+  | Hebdo       |
| Conversion free→paid |  15%  | Mensuel     |
| NPS                  | > 50  | Trimestriel |
| Churn                | < 5%  | Mensuel     |

---

## 🗓️ Planning prévisionnel

```
Semaine      1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
             │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │
Setup        ████████
Auth & Onboard   ████████████
Diag Freemium            ████████████
Paiement & Diag                  ████████████
Abonnement & Suivi                       ████████████████████
E-learning & Support                                     ████████████████
             │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │
             │       │       │       │       │       │       │       │   │
           Sprint  Sprint  Sprint  Sprint  Sprint  Sprint  Sprint  Sprint
             1       2       3       4       5       6       7       8
```

---

## 🔧 Outils recommandés

### Gestion de projet

- **Trello / Notion** : Kanban sprints
- **Linear** : Issue tracking (alternative)
- **GitHub Projects** : Intégré au repo

### Communication

- **Slack** : Communication équipe
- **Loom** : Vidéos asynchrones
- **Figma** : Commentaires design

### Documentation

- **Notion** : Wiki équipe
- **Storybook** : Documentation composants
- **README.md** : Documentation technique

---

## ✅ Rituels équipe recommandés

| Rituel           | Fréquence | Durée  | Participants |
| ---------------- | --------- | :----: | ------------ |
| Daily standup    | Quotidien | 15 min | Tous         |
| Sprint planning  | Bi-hebdo  |   1h   | Tous         |
| Sprint review    | Bi-hebdo  | 30 min | Tous + PO    |
| Retro            | Bi-hebdo  | 45 min | Tous         |
| Backlog grooming | Hebdo     | 30 min | PO + Lead    |

---

## 📝 Templates utiles

### Template User Story

```markdown
## US-XX : [Titre]

**En tant que** [persona]
**Je veux** [action]
**Afin de** [bénéfice]

### Critères d'acceptation

- [ ] Critère 1
- [ ] Critère 2

### Notes techniques

- Point technique important

### Maquette

[Lien Figma]
```

### Template Bug Report

```markdown
## Bug : [Titre]

**Sévérité** : Critique / Haute / Moyenne / Basse
**Environnement** : Prod / Staging / Dev

### Étapes de reproduction

1. Aller sur...
2. Cliquer sur...
3. Observer...

### Comportement attendu

[Ce qui devrait se passer]

### Comportement actuel

[Ce qui se passe réellement]

### Screenshots

[Captures d'écran]
```

---

## 🚀 Checklist lancement MVP

### Technique

- [ ] Tests E2E passent
- [ ] Performance OK (< 2s chargement)
- [ ] Sécurité auditée
- [ ] Sauvegardes automatiques
- [ ] Monitoring configuré

### Légal

- [ ] CGU/CGV rédigées
- [ ] Politique confidentialité
- [ ] Mentions légales
- [ ] Conformité RGPD

### Business

- [ ] Pricing finalisé
- [ ] Landing page prête
- [ ] Emails transactionnels configurés
- [ ] Support opérationnel

---

_Document évolutif — Mettre à jour au fil du projet_
