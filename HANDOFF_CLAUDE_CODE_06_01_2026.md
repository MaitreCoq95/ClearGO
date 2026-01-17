# 🤖 PASSATION CLAUDE CODE - VYXO CODEX

## Date : 06 Janvier 2026

> **Ce document est destiné à Claude Code** pour assurer la continuité du développement du projet Vyxo Codex. Il contient un résumé complet de l'existant, de la progression et des tâches restantes.

---

## 📋 CONTEXTE DU PROJET

**Vyxo Codex** est une plateforme B2B SaaS de **certification multi-normes** permettant aux entreprises de :

- 📊 Réaliser un **diagnostic de maturité** (assessment)
- 🗺️ Obtenir un **plan d'action personnalisé** (roadmap par sprints)
- 📚 Accéder à une **bibliothèque de templates** (Word/Excel)
- 🎓 Suivre des **formations adaptatives** (learning)
- 💳 S'abonner via **Stripe** (SaaS self-serve)

**Normes supportées :** ISO 9001, GDP, ISO 27001, HACCP, ISO 42001, ISO 13485, Sûreté Aéroportuaire

---

## 🏗️ STACK TECHNIQUE

| Technologie       | Version         | Usage                         |
| ----------------- | --------------- | ----------------------------- |
| **Next.js**       | 16.0.8          | App Router, Server Components |
| **React**         | 19.2.0          | UI Framework                  |
| **TypeScript**    | 5.x             | Full codebase typed           |
| **Tailwind CSS**  | 3.4.17          | Styling                       |
| **Shadcn/ui**     | Latest          | 27+ composants UI             |
| **Supabase**      | 2.84.0          | Auth + PostgreSQL + Storage   |
| **Prisma**        | 5.22.0          | ORM (analytics-api)           |
| **Fastify**       | 4.24.3          | Analytics API backend         |
| **Framer Motion** | 12.x            | Animations                    |
| **Recharts**      | 3.6.0           | Graphiques                    |
| **Resend**        | 6.5.2           | Emails transactionnels        |
| **Stripe**        | 20.1.0          | Paiements                     |
| **AI SDKs**       | OpenAI + Google | Intégration IA                |

---

## 📂 STRUCTURE DU PROJET

```
CODEX5.0/
├── app/
│   ├── (dashboard)/        # 14 sous-routes (dashboard, assessments, team, etc.)
│   ├── (marketing)/        # 8 sous-routes (landing, pricing, demo, etc.)
│   ├── api/                # 17+ API routes
│   └── docs/               # Documentation
├── components/
│   ├── admin/              # 4 composants admin
│   ├── analytics/          # 7 composants analytics
│   ├── assessment/         # 21 composants (builder, runtime, results)
│   ├── codex/              # 7 composants quiz/knowledge
│   ├── gamification/       # 8 composants XP/badges
│   ├── landing/            # 19 composants landing page
│   ├── learning/           # 5 composants adaptatifs
│   ├── team/               # 4 composants équipe
│   └── ui/                 # 27 composants Shadcn
├── lib/
│   ├── services/           # 20+ services métier
│   ├── codex/              # 11 fichiers quiz/questions
│   ├── data/               # 7 fichiers données
│   └── schemas/            # 2 schémas Zod
├── analytics-api/          # Backend Fastify séparé
│   ├── prisma/             # Schema Prisma (639 lignes)
│   └── src/                # Routes, jobs, etc.
└── supabase/               # Scripts SQL migrations
```

---

## ✅ CE QUI EST TERMINÉ (Phases 1, 2 & 3)

### Phase 1 - Analytics Layer ✅ 100%

- Infrastructure de tracking
- Event system
- Dashboard analytics

### Phase 2 - Core Features ✅ 100%

- **Prompt 7** : Pages publiques & Marketing (Landing, Pricing, Demo)
- **Prompt 8** : Team & Manager Features (Dashboard équipe, Heatmap compétences)
- **Prompt 9** : Admin Organization Panel (CRUD users, Departments, Content Management)
- **Prompt 10** : Assessment Engine (Builder, Runtime, 6 types de questions, Scoring)
- **Prompt 11** : Adaptive Learning Engine (Quiz, Competency Matrix, Personalized Path)
- **Prompts 12-16** : Features complémentaires

### Phase 3 - Sales Ready ✅ 100%

- **Prompt 17** : 18 certifications implémentées (Question Banks)
- **Prompt 18** : Landing Page Premium
- **Prompt 19** : Demo Flow Optimisé
- **Prompt 20** : Modules de Formation (Academy)
- **Prompt 21** : Gamification (XP, Niveaux, Badges, Leaderboard)
- **Prompt 22** : Analytics & Polish (Tracking, Dark Mode, Responsive)

### Fonctionnalités Core Existantes

- ✅ **Auth Supabase** : Login, Signup, RBAC (user/manager/admin/super_admin)
- ✅ **Assessment Engine** : 328 lignes, scoring pondéré, gaps, recommandations
- ✅ **Learning Adaptatif** : Engine 454 lignes, difficulté dynamique
- ✅ **Dashboard** : Main, Analytics, Team, Admin, Reports
- ✅ **Gamification** : XP, badges, leaderboard, confettis
- ✅ **Email Service** : Resend intégré
- ✅ **7 Normes** : Diagnostic + Roadmap + Templates pour chaque

---

## 📊 ESTIMATION GLOBALE : ~55-60% TERMINÉ

```
Technique & Infrastructure  ████████████████████░ 95%
Features Core (Assessment)  ██████████████████░░░ 90%
UI/UX Components            █████████████████░░░░ 85%
Auth & Onboarding           ████████████████░░░░░ 80%
Landing Page                ███████████████░░░░░░ 75%
Emails                      ██████████░░░░░░░░░░░ 50%
Paiement/Stripe             ████████░░░░░░░░░░░░░ 40%
Templates (Contenu)         ██░░░░░░░░░░░░░░░░░░░ 10%
Contenu Normes              █░░░░░░░░░░░░░░░░░░░░ 5%
Roadmap Generator           ░░░░░░░░░░░░░░░░░░░░░ 0%
───────────────────────────────────────────────────
GLOBAL                      ███████████░░░░░░░░░░ 55-60%
```

---

## 🔴 CE QU'IL RESTE À FAIRE

### 1. Configuration Vivien (Actions Humaines)

> Fichier : `TODO_CONFIG_VIVIEN.md`

- [ ] **Stripe** : Créer compte, clés test, produits (€399/mois & €2990 one-time), webhooks
- [ ] **Supabase** : Vérifier variables `.env.local`
- [ ] **Resend** : Vérifier API key, configurer domaine
- [ ] **DATABASE_URL** & **DIRECT_URL** : Vérifier connexion

### 2. Contenu Métier à Créer (30% du travail restant)

| Norme       | Questions | Actions | Templates |
| ----------- | --------- | ------- | --------- |
| ISO 9001    | ~30       | 50-80   | 25-30     |
| GDP         | ~25       | 40-60   | 20-25     |
| ISO 27001   | ~30       | 50-70   | 25-30     |
| HACCP       | ~20       | 30-50   | 15-20     |
| ISO 42001   | ~25       | 40-60   | 20-25     |
| Sûreté Aéro | ~20       | 30-50   | 15-20     |

**Total estimé : ~150 questions, ~300 actions, ~140 templates**

### 3. Pages/Routes à Créer

| Route                     | Priorité   | Description                     |
| ------------------------- | ---------- | ------------------------------- |
| `/signup` (multi-step)    | 🔴 HAUTE   | Onboarding avec sélection norme |
| `/checkout`               | 🔴 HAUTE   | Stripe Payment Element          |
| `/api/webhooks/stripe`    | 🔴 HAUTE   | Webhooks Stripe                 |
| `/dashboard/roadmap`      | 🔴 HAUTE   | Timeline sprints                |
| `/dashboard/templates`    | 🟡 MOYENNE | Bibliothèque templates          |
| `/dashboard/subscription` | 🟡 MOYENNE | Gestion abonnement              |

### 4. Tables DB à Créer

| Table          | Action   | Description                                           |
| -------------- | -------- | ----------------------------------------------------- |
| `users`        | Modifier | Ajouter `company_size`, `industry_sector`, `stripe_*` |
| `roadmaps`     | ❌ Créer | Roadmaps personnalisées                               |
| `actions`      | ❌ Créer | Référentiel actions par norme                         |
| `user_actions` | ❌ Créer | Progression utilisateur                               |
| `templates`    | ❌ Créer | Bibliothèque templates                                |

### 5. Fonctionnalités à Implémenter

- [ ] **Roadmap Generator** : Algo de répartition en sprints (À CRÉER DE ZÉRO)
- [ ] **Checkout Flow Stripe** : Pages + Webhooks
- [ ] **Templates Library** : Page + Supabase Storage
- [ ] **Emails Transactionnels** : Templates spécifiques (confirmation, rappels)

---

## 📋 PLAN D'ACTION RECOMMANDÉ

### Semaine 1-2 : Fondations MVP

```
PROMPT #1 : Schéma DB MVP
├── Modifier table users (ajouter champs subscription)
├── Créer tables roadmaps, actions, user_actions, templates
└── Migrations Supabase
```

### Semaine 3-5 : Core Product

```
PROMPT #2 : Auth & Onboarding
├── Page /signup multi-step
├── Sélection de norme
└── Email confirmation

PROMPT #3 : Questionnaire Diagnostic
├── Créer questions par norme (JSON/DB)
└── Page /onboarding/results

PROMPT #4 : Générateur Roadmap
├── Algo priorisation gaps → actions
├── Répartition en sprints
└── Page /dashboard/roadmap
```

### Semaine 6-7 : Dashboard & Paiement

```
PROMPT #5 : Bibliothèque Templates
├── Page /dashboard/templates
└── Upload Supabase Storage

PROMPT #6 : Dashboard de Suivi
├── Widgets progression
└── Graphiques évolution

PROMPT #7 : Stripe
├── Page /checkout
├── Webhooks
└── Customer Portal
```

### Semaine 8 : Polish & Launch

```
PROMPT #8 : Onboarding Self-Serve Complet
├── Flow Landing → SignUp → Assessment → Results → Checkout → Dashboard
├── Emails automatiques
└── Tests E2E
```

---

## 📁 FICHIERS DOCUMENTATION IMPORTANTS

| Fichier                            | Description                       |
| ---------------------------------- | --------------------------------- |
| `AUDIT_VYXO_CODEX_MVP.md`          | Audit complet de l'existant       |
| `PROMPT_PLAN_MVP.md`               | Plan des prompts MVP (9 prompts)  |
| `PROMPTS_PLAN_PHASE2.md`           | Détail Phase 2 (prompts 7-16)     |
| `PROMPTS_PLAN_PHASE3.md`           | Détail Phase 3 (prompts 17-22)    |
| `TODO_CONFIG_VIVIEN.md`            | Actions de configuration humaines |
| `docs/TODO_CONFIG_INTEGRATIONS.md` | Configuration des intégrations    |
| `ADAPTIVE_LEARNING_STATUS.md`      | Status du système adaptatif       |
| `SITEMAP.md`                       | Arborescence des pages            |
| `CODEX_README.md`                  | Documentation module Codex        |
| `CODEX_SUPABASE_SETUP.md`          | Setup Supabase                    |

---

## 🚀 COMMANDES UTILES

```bash
# Démarrer le serveur de développement
npm run dev

# Build production
npm run build

# Linter
npm run lint
```

---

## 📝 INSTRUCTIONS POUR CLAUDE CODE

### Ta mission :

1. **Reprendre le développement** là où il en est
2. **Créer un fichier `PROGRESS_TRACKER.md`** pour suivre l'avancement jour par jour
3. **Suivre le plan des prompts** (MVP #1 à #8)
4. **Demander à Vivien** pour les actions de configuration (Stripe, Supabase, etc.)

### Format du fichier PROGRESS_TRACKER.md à créer :

```markdown
# 📊 PROGRESS TRACKER - VYXO CODEX

## Dernière mise à jour : [DATE]

### 📈 Progression Globale

| Phase             | Prompts | Status |
| ----------------- | ------- | ------ |
| MVP DB            | #1      | ⏸️     |
| Auth/Onboarding   | #2      | ⏸️     |
| Assessment        | #3      | ⏸️     |
| Roadmap Generator | #4      | ⏸️     |
| Templates         | #5      | ⏸️     |
| Dashboard         | #6      | ⏸️     |
| Stripe            | #7      | ⏸️     |
| Polish            | #8      | ⏸️     |

### 📅 Journal de Progression

#### [DATE]

- ✅ Action réalisée
- 🔄 En cours
- ⏸️ En attente
```

---

## ✅ CHECKLIST PRÉ-LANCEMENT

- [ ] Toutes les variables d'environnement configurées
- [ ] Stripe en mode test fonctionnel
- [ ] Au moins 1 norme complète (questions + actions + templates)
- [ ] Flow complet testé (signup → assessment → checkout → dashboard)
- [ ] Emails transactionnels fonctionnels

---

## 🙏 BONNE CONTINUATION !

**Estimation temps restant : 4-6 semaines** pour MVP complet.

Si tu as des questions, demande à Vivien ou consulte les fichiers de documentation.

---

_Document créé le 06/01/2026 par Antigravity (Gemini)_
_Passation vers Claude Code_
