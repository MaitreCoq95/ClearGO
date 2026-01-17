# ClearGo — Spécifications Alignées Stratégie B "Conformité Offensive"

*Date : 17 janvier 2026*  
*Version : 4.0 — STRATÉGIE B VALIDÉE*  
*Statut : Réalignement complet sur vision "Compliance as Commercial Asset"*

---

## 📋 SOMMAIRE

1. [Vision & Positionnement Révisés](#vision)
2. [Problème Métier Redéfini](#probleme)
3. [Solution & Différenciation](#solution)
4. [Persona Cible Prioritaire](#persona)
5. [Proposition de Valeur](#value-prop)
6. [Modèle Économique Révisé](#business-model)
7. [Parcours Client Transformé](#customer-journey)
8. [Features Core MVP](#features)
9. [Architecture Fonctionnelle](#architecture)
10. [Process Métier Réalignés](#process)
11. [Roadmap & Priorités](#roadmap)
12. [Différences vs Version Précédente](#changes)

---

## 🎯 1. VISION & POSITIONNEMENT RÉVISÉS <a name="vision"></a>

### Vision Produit

**ClearGo transforme la conformité réglementaire en avantage commercial pour les transporteurs routiers.**

Au lieu de subir les contraintes ISO 9001, GDP, ADR et RSE comme des coûts, ClearGo permet aux transporteurs de les afficher comme des **preuves de fiabilité** pour gagner des contrats premium.

### Positionnement Stratégique

**AVANT (Stratégie A - Défensive) :**
> "ClearGo vous protège des contrôles Inspection du Travail et URSSAF"

**APRÈS (Stratégie B - Offensive) :**
> "ClearGo vous qualifie pour les appels d'offres pharma, agro et chimie"

### Tagline

**"De la conformité à la crédibilité — En quelques clics"**

### Analogie Marché

- **Vanta** (cybersécurité) : "Compliance on autopilot" → Génère SOC2/ISO27001
- **ClearGo** (transport) : "Transport Compliance on autopilot" → Génère dossiers clients

---

## 🚨 2. PROBLÈME MÉTIER REDÉFINI <a name="probleme"></a>

### Pain Points Principaux (Ordre Révisé)

#### 🥇 Problème #1 : Perte de contrats faute de preuves structurées

**Situation terrain :**
> Appel d'offres Sanofi (100k€) exige : ISO 9001 + GDP + Bilan Carbone  
> → Transporteur non structuré ne peut pas répondre  
> → Perd le contrat face à concurrent certifié  
> → Perte sèche : 100k€ CA

**Citation dirigeant type :**
> "J'ai les compétences, les camions, les chauffeurs... mais pas les papiers qu'ils demandent. Je perds 3 contrats sur 4 à cause de ça."

**Coût du problème :**
- 3-5 appels d'offres perdus/an
- 50-150k€ CA non capté/an
- Cantonnement sur marché spot bas de gamme

---

#### 🥈 Problème #2 : Coût prohibitif de la mise en conformité

**Situation actuelle :**
- Consultant ISO 9001 : 15-25k€ (certification complète)
- Consultant GDP : 10-15k€ (préparation audit)
- Durée : 12-18 mois
- **Total : 30-50k€ + 1,5 an de délai**

**Pour une PME 20 chauffeurs (CA 2-3M€) :**
- Budget impossible à mobiliser
- ROI incertain (pas de garantie contrats gagnés après)
- Ressources internes insuffisantes (pas de responsable qualité)

---

#### 🥉 Problème #3 : Complexité des référentiels

**ISO 9001 :**
- 10 chapitres, 100+ exigences
- 20+ documents obligatoires
- Langage technique incompréhensible

**Résultat :**
- Dirigeant abandonné face à la complexité
- Pas de visibilité sur progression
- Stress permanent ("Suis-je conforme ou pas ?")

---

### Problèmes Secondaires (Pas Prioritaires MVP)

- Peur contrôles Inspection/URSSAF (géré indirectement par ISO 9001)
- Gestion documentaire dispersée (résolu par ClearGo)
- Veille réglementaire chronophage (alertes ClearGo)

---

## ✅ 3. SOLUTION & DIFFÉRENCIATION <a name="solution"></a>

### Solution ClearGo

**ClearGo = Plateforme SaaS de préparation conformité ISO 9001 + modules spécialisés (GDP, ADR, RSE) avec génération automatique de dossiers clients exportables.**

### Proposition de Valeur Centrale

**"Passez de 0 à ISO 9001-ready en 3 mois, pour 1/10e du prix d'un consultant, avec un dossier client montrable immédiatement."**

### Différenciateurs vs Concurrents

| Dimension | Consultants Traditionnels | Logiciels Qualité Généralistes | **ClearGo** |
|-----------|---------------------------|--------------------------------|-------------|
| **Coût** | 25-50k€ | 200-300€/mois (multi-industries) | 400-600€/mois (spécialisé transport) |
| **Délai conformité** | 12-18 mois | Non applicable (pas d'accompagnement) | 3-6 mois |
| **Spécialisation transport** | Variable | ❌ Aucune | ✅ Total (ISO 9001 + GDP + ADR + RSE transport) |
| **Output client** | Rapport PDF manuel | ❌ Aucun | ✅ **Client Compliance Report auto-généré** |
| **Accompagnement** | Présence physique | ❌ Self-service pur | ✅ Guidage IA + support expert |
| **Scoring temps réel** | ❌ Non | ✅ Oui (mais technique) | ✅ Oui (**commercial**) |
| **Maintenance continue** | ❌ Contrat annuel séparé | ⚠️ Partiel | ✅ Total (alertes proactives) |

---

### Feature Killer : **Client-Ready Compliance Report**

**Concept :**
Un document PDF/Web brandé, généré automatiquement par ClearGo, que le transporteur peut envoyer à un prospect/donneur d'ordre pour prouver sa conformité.

**Contenu du rapport :**

```
┌─────────────────────────────────────────────────────────┐
│  [LOGO TRANSPORTEUR]           ClearGo Certified        │
│                                                          │
│  DOSSIER DE CONFORMITÉ TRANSPORT                        │
│  XYZ Logistics — Janvier 2026                           │
└─────────────────────────────────────────────────────────┘

📄 EXECUTIVE SUMMARY (1 page)

"XYZ Logistics est qualifié pour répondre à vos exigences 
de conformité transport premium. Notre niveau de maîtrise 
ISO 9001, GDP et RSE est audité en continu par ClearGo."

📊 SCORING COMMERCIAL

┌─────────────────────┬──────────────┐
│ ISO 9001 Readiness  │ ⭐⭐⭐⭐⭐ (5/5) │
│ GDP Pharma          │ ⭐⭐⭐⭐ (4/5)   │
│ Sécurité Transport  │ ⭐⭐⭐⭐⭐ (5/5) │
│ RSE & Impact        │ ⭐⭐⭐⭐ (4/5)   │
└─────────────────────┴──────────────┘

📋 PREUVES DOCUMENTAIRES

✅ Manuel Qualité ISO 9001 (v2.1 — 12/2025)
✅ Procédures GDP (v1.3 — 01/2026)
✅ Certifications chauffeurs (100% à jour)
✅ Attestations URSSAF & AT (validité 6 mois)
✅ Bilan Carbone 2025 (scope 1+2)

📅 MAINTENANCE & AUDITS

• Prochain audit interne : Mars 2026
• Renouvellements certifications : Q2 2026
• Veille réglementaire : Active (ClearGo)

───────────────────────────────────────────────────
Rapport généré par ClearGo — Conforme ISO 9001:2015
Contact : contact@xyz-logistics.fr | +33 1 XX XX XX XX
```

**Use case concret :**
1. Transporteur reçoit RFP Sanofi (appel d'offres)
2. Clic "Generate Client Report" dans ClearGo
3. Personnalise branding (logo, couleurs)
4. Export PDF en 30 secondes
5. Envoi à Sanofi avec proposition commerciale
6. **Différenciation immédiate** vs concurrents non structurés

---

## 👤 4. PERSONA CIBLE PRIORITAIRE <a name="persona"></a>

### Persona Principal : "Marc, Dirigeant Ambitieux"

**Profil démographique :**
- Homme, 45-55 ans
- Dirigeant transporteur routier PME (10-50 chauffeurs)
- CA : 2-5M€/an
- Localisation : France (périphérie grandes villes)

**Psychographie :**
- Ambitieux commercialement (veut croître)
- Frustré de perdre des contrats premium
- Prêt à investir si ROI clair
- Culture "entrepreneur terrain" (pas administratif)

**Situation actuelle :**
- Travaille majoritairement sur marché spot (Chrono13, bourses de fret)
- Rêve de contrats cadencés pharma/agro (prévisibilité CA)
- Pas de responsable qualité interne (trop cher)
- A déjà essayé de se lancer dans ISO 9001 → Abandonné (trop complexe)

**Déclencheurs d'achat :**
1. **Perte contrat majeur** : "J'ai perdu Sanofi (150k€) car pas GDP"
2. **Appel d'offres bloquant** : "Ils demandent ISO 9001 + bilan carbone, je ne peux pas répondre"
3. **Recommandation pair** : "Mon concurrent a gagné grâce à sa certification"

**Citations terrain :**
> "Je sais conduire mon business, mais les certifications, c'est pas mon métier. J'ai besoin d'un outil qui me guide sans me prendre la tête."

> "Si ClearGo me permet de répondre aux appels d'offres Sanofi, Nestlé, L'Oréal... je signe immédiatement."

**Budget mental :**
- 400-600€/mois = OK si ROI prouvé (1 contrat gagné = 100x le coût)
- 25k€ consultant = Impossible à sortir
- Prêt à payer plus cher si **garantie de résultat**

**Objections probables :**
- "C'est encore un logiciel qui va me faire perdre du temps ?"
- "Est-ce que ça va vraiment m'aider à gagner des contrats ?"
- "Je n'ai pas de responsable qualité, qui va gérer ça ?"

**Réponses ClearGo :**
- Guidage IA pas à pas (15 min/semaine suffit)
- Démonstration ROI : Clients témoins ayant gagné contrats
- Support expert inclus (pas besoin responsable qualité interne)

---

### Personas Secondaires (Post-MVP)

**Persona B : "Sophie, Responsable Qualité Isolée"**
- Femme, 35-45 ans
- Seule personne qualité chez transporteur 30-80 chauffeurs
- Débordée, cherche outil pour automatiser
- Budget : Pas décisionnaire (doit convaincre dirigeant)

**Persona C : "Groupe Multi-sites"**
- Dirigeant ETI 100-300 chauffeurs
- 3-10 sites répartis France
- Besoin harmonisation conformité groupe
- Budget : 1000-2000€/mois (négociable)

---

## 💎 5. PROPOSITION DE VALEUR <a name="value-prop"></a>

### Message Principal

**"Transformez votre conformité en argument de vente"**

### Promesses Mesurables

| Promesse | Métrique | Délai |
|----------|----------|-------|
| **Répondre aux appels d'offres premium** | Dossier client généré en < 30 min | Immédiat |
| **Atteindre ISO 9001-ready** | 100% conformité scoring | 3-6 mois |
| **Économiser vs consultant** | 85% coût en moins (6k€ vs 40k€/an) | Année 1 |
| **Gagner des contrats premium** | +1 à 3 contrats/an (50-200k€ CA) | Année 1 |
| **Maintenir conformité sans effort** | 0 action manuelle (alertes auto) | Continu |

### Formule ROI

**Investissement ClearGo : 6 000€/an (500€/mois × 12)**

**Retour :**
- 1 seul contrat pharma gagné : 50-100k€ CA
- Marge nette estimée : 10-15k€
- **ROI : 150-250%**

**Comparaison :**
- Consultant ISO 9001 : 25k€ (one-shot, pas de garantie contrats)
- ClearGo : 6k€/an (avec maintenance + dossiers clients illimités)

---

### Elevator Pitch (30 secondes)

> "ClearGo permet aux transporteurs routiers de passer de 0 à ISO 9001-ready en 3 mois, pour 500€/mois au lieu de 25k€ de consultant. Vous obtenez un dossier de conformité professionnel que vous pouvez envoyer à vos prospects pour gagner des appels d'offres pharma et agro. Nos clients gagnent en moyenne 2 contrats premium par an grâce à ClearGo, soit 100k€ de CA additionnel."

---

## 💰 6. MODÈLE ÉCONOMIQUE RÉVISÉ <a name="business-model"></a>

### Pricing Stratégique

#### Étape 1 : Audit Commercial (Freemium Transformé)

**Ancien (Stratégie A) :**
- 12 questions diagnostic RSE de base
- Gratuit
- Objectif : Conversion vers diagnostic payant 50-100€

**Nouveau (Stratégie B) :**
- **Commercial Readiness Assessment** (gratuit)
- 15 questions orientées "Êtes-vous prêt pour contrats premium ?"
- Exemples :
  - "Avez-vous déjà perdu un contrat pour non-conformité ?"
  - "Quel CA annuel visez-vous en contrats pharma/agro ?"
  - "Avez-vous un manuel qualité à jour ?"
  - "Pouvez-vous fournir un bilan carbone à un client ?"

**Output :**
- **Score Commercial Readiness** (sur 100)
- Rapport gratuit 2 pages :
  - "Votre potentiel contrats premium : 75/100"
  - "3 blocages majeurs identifiés"
  - "Estimation CA non capté : 120k€/an"
- **Call-to-action :** "Débloquez votre dossier complet pour 299€"

**Objectif conversion :** 20-25% (vs 15-20% ancien modèle)

---

#### Étape 2 : Diagnostic Complet ISO 9001 + Commercial

**Prix : 299€ (one-shot)**

**Ancien contenu :**
- Diagnostic conformité RSE
- Plan d'action technique

**Nouveau contenu :**
- **Audit ISO 9001 approfondi** (100+ points de contrôle)
- **Audit GDP/ADR** (si applicable)
- **Audit Commercial Readiness** (scoring par type de contrat)
- **Roadmap priorisée 3-6 mois**
- **1er Client Compliance Report** (version simplifiée)

**Valeur perçue :**
- Équivalent 1 jour consultant (400€ TJM)
- + Dossier client exportable (valeur inestimable)

---

#### Étape 3 : Abonnement Premium (Cœur Business)

**Prix : 499€/mois (ou 4 990€/an, -17%)**

**Contenu :**

**🎯 Accompagnement ISO 9001 complet**
- Guidage pas à pas vers 100% conformité
- Création automatique 20+ documents ISO 9001
- Templates procédures prê-remplis
- Validation jalons par IA + expert

**📊 Client Compliance Reports illimités**
- Génération dossiers clients personnalisés
- Branding logo/couleurs entreprise
- Export PDF/Web
- Mises à jour temps réel scoring

**🚨 Alertes & Maintenance proactive**
- Expiration documents (30j/15j/7j)
- Actions correctives en retard
- Nouvelles obligations réglementaires
- Rappels audits internes

**📚 E-learning ISO 9001 + Transport**
- 10 modules formation (3h contenu)
- Certifications internes chauffeurs
- Quiz conformité

**💬 Support expert prioritaire**
- Chat/email (réponse < 4h)
- 1 appel stratégique/mois (30 min)
- Aide pré-audit

**📈 Dashboard commercial**
- Scoring temps réel par type de contrat
- Tracker appels d'offres (gagnés/perdus)
- ROI ClearGo mesuré

---

#### Étape 4 : Modules Optionnels (Add-ons)

| Module | Prix/mois | Inclut |
|--------|-----------|--------|
| **GDP Pharma** | +150€ | Référentiel GDP complet, procédures, audit blanc préparation |
| **ADR Transport Dangereux** | +150€ | Conformité ADR, certifications chauffeurs, vérifications véhicules |
| **HACCP Alimentaire** | +100€ | Plan HACCP, traçabilité température, audits hygiene |
| **Bilan Carbone Pro** | +200€ | Calcul scope 1+2+3, export plateforme ADEME, rapport client |

**Pack "All-Inclusive" : 999€/mois**
(Base 499€ + tous modules = économie 100€/mois)

---

### Comparaison Pricing Marché

| Solution | Coût annuel | Scope | Output client |
|----------|-------------|-------|---------------|
| **Consultant ISO 9001** | 25 000€ | ISO 9001 uniquement | Rapport PDF manuel (1x) |
| **Consultant GDP** | 15 000€ | GDP uniquement | Rapport PDF manuel (1x) |
| **Logiciel qualité généraliste** | 3 000€ | Multi-industries (pas transport) | ❌ Aucun |
| **ClearGo Base** | **5 988€** | ISO 9001 + RSE transport | ✅ Dossiers illimités |
| **ClearGo + GDP** | **7 788€** | ISO 9001 + GDP + RSE | ✅ Dossiers illimités |
| **ClearGo All-Inclusive** | **11 988€** | ISO 9001 + GDP + ADR + HACCP + Carbone | ✅ Dossiers illimités |

**Argument commercial :**
> "Pour moins de 6 000€/an, vous obtenez ce qu'un consultant vous facturerait 40 000€, avec en plus la maintenance continue et les dossiers clients illimités."

---

## 🛤️ 7. PARCOURS CLIENT TRANSFORMÉ <a name="customer-journey"></a>

### Phase 1 : Découverte & Qualification (Freemium)

**Trigger :** Dirigeant perd appel d'offres ou recherche "conformité ISO 9001 transport"

**Landing page message :**
> "Combien de contrats pharma perdez-vous chaque année faute de conformité ISO 9001 ?"

**CTA :** "Évaluez votre potentiel commercial en 5 min (gratuit)"

**Formulaire inscription :**
- Email
- Nom entreprise
- SIRET
- Nb chauffeurs
- CA annuel
- Téléphone (optionnel)

**Commercial Readiness Assessment (15 questions) :**

*Exemples questions :*
1. "Avez-vous un manuel qualité à jour ?" (Oui/Non/En cours)
2. "Combien d'appels d'offres pharma/agro avez-vous perdus l'an dernier ?" (0/1-2/3-5/5+)
3. "Vos procédures de travail sont-elles documentées ?" (Oui toutes/Partiellement/Non)
4. "Pouvez-vous fournir un bilan carbone à un client aujourd'hui ?" (Oui/Non/Ne sais pas)
5. "Avez-vous déjà été audité par un donneur d'ordre ?" (Oui réussi/Oui échoué/Jamais)

**Durée : 5-7 minutes**

**Output freemium :**

```
───────────────────────────────────────────────────
VOTRE COMMERCIAL READINESS SCORE : 62/100
───────────────────────────────────────────────────

📊 DIAGNOSTIC

✅ Forces identifiées :
  • Flotte moderne (Euro 6)
  • Chauffeurs formés

⚠️ Blocages commerciaux :
  1. Pas de manuel qualité ISO 9001 → Perte contrats pharma
  2. Pas de procédures GDP → Perte contrats agroalimentaire
  3. Pas de bilan carbone → Perte grands comptes

💰 ESTIMATION CA NON CAPTÉ : 150 000€/an

📈 POTENTIEL SI CONFORME ISO 9001 + GDP :
  • +2 à 4 contrats premium/an
  • +180 000€ à 350 000€ CA additionnel
  • Marge nette estimée : +25 000€ à 50 000€

───────────────────────────────────────────────────
🔓 DÉBLOQUEZ VOTRE ROADMAP COMPLÈTE POUR 299€
  → Audit ISO 9001 détaillé (100+ points)
  → Plan d'action 3-6 mois
  → 1er dossier client généré
───────────────────────────────────────────────────
```

**Taux conversion attendu : 20-25%** (vs 15% ancien modèle)

---

### Phase 2 : Conversion Diagnostic Complet (299€)

**Email relance J+1 (si pas converti) :**

Objet : "Marc, voici les 3 contrats que vous pourriez gagner cette année"

> Bonjour Marc,
>
> Vous avez identifié 150k€ de CA non capté l'an dernier.
>
> Voici 3 appels d'offres concrets publiés ce mois-ci auxquels vous ne pouvez pas répondre sans conformité ISO 9001 :
>
> 1. Sanofi — Transport pharma Lyon-Marseille (110k€/an) — Exige ISO 9001 + GDP
> 2. Nestlé — Distribution produits frais (85k€/an) — Exige ISO 9001 + HACCP
> 3. L'Oréal — Logistique cosmétiques (95k€/an) — Exige ISO 9001 + Bilan Carbone
>
> **Total : 290k€ CA que vous ne pouvez pas capter aujourd'hui.**
>
> Avec ClearGo, vous seriez ISO 9001-ready en 3 mois et pourriez répondre à ces appels d'offres.
>
> → Débloquez votre roadmap complète pour 299€ (au lieu de 1 jour consultant à 400€)
>
> [CTA : Accéder à mon audit complet]

**Workflow paiement :**
1. Paiement Stripe (299€)
2. Accès immédiat plateforme
3. Questionnaire approfondi ISO 9001 (30 min)
4. Upload documents existants (optionnel)
5. Analyse IA (2-3 min)
6. **Génération roadmap + 1er Client Compliance Report (version basique)**

**Livrables :**

**A. Roadmap ISO 9001 Personnalisée (PDF 15 pages)**

*Sommaire :*
- Scoring détaillé par chapitre ISO 9001
- GAP analysis (écarts vs conformité)
- 40-60 actions priorisées (3-6 mois)
- Templates documents à créer
- Planning Gantt

**B. Client Compliance Report v1.0 (PDF 5 pages)**

*Contenu :*
- Logo transporteur
- Score actuel : 62/100 (Commercial Readiness)
- Progression attendue : 95/100 dans 6 mois
- "En cours de préparation ISO 9001 avec ClearGo"
- Timeline prévisionnelle

**Objectif :** Transporteur peut déjà **montrer** qu'il se structure (même avant 100% conforme)

---

### Phase 3 : Activation Abonnement (499€/mois)

**Trigger conversion abonnement :**

Email J+3 post-diagnostic :

> Marc, vous avez votre roadmap.  
> Mais sans accompagnement, 80% des transporteurs abandonnent en route (trop complexe).
>
> **ClearGo Premium vous guide pas à pas** :
> • Création automatique documents ISO 9001
> • Alertes actions en retard
> • Support expert
> • **Dossiers clients illimités** (utilisables dès maintenant)
>
> Coût : 499€/mois (vs 2 000€/mois consultant à mi-temps)
>
> **Offre spéciale diagnostic :** 1er mois à 299€ (au lieu de 499€)
>
> [CTA : Activer mon accompagnement]

**Onboarding abonnement (J1 à J7) :**

**Jour 1 :**
- Welcome email
- Call onboarding 30 min (Vivien ou équipe) :
  - Valider objectifs (quels contrats cibles ?)
  - Identifier quick-wins (actions 0-30 jours)
  - Configurer dashboard

**Jour 2-3 :**
- Upload documents existants (manuel qualité si existant, procédures, etc.)
- Configuration branding (logo, couleurs pour Client Reports)

**Jour 4-7 :**
- Création premiers documents ISO 9001 assistée IA :
  - Politique qualité
  - Procédure gestion documentaire
  - Procédure actions correctives

**Jour 7 :**
- **1ère génération Client Compliance Report v2.0** (avec branding)
- Email : "Votre 1er dossier client est prêt, testez-le sur un prospect cette semaine"

---

### Phase 4 : Adoption & Expansion (Mois 1-6)

**Mois 1 : Quick-Wins**

**Objectif :** Prouver valeur ClearGo rapidement

*Actions :*
- Créer 5 documents ISO 9001 prioritaires
- Générer 1er vrai Client Compliance Report
- Envoyer à 1-2 prospects test
- Tracker feedback

**Success metric :** 1 retour positif prospect = Preuve concept

---

**Mois 2-3 : Structuration**

**Objectif :** Atteindre 70% conformité ISO 9001

*Actions :*
- Créer 15+ documents restants
- Mettre en place audits internes
- Former équipe interne (manager, responsable exploitation)
- Générer Client Reports régulièrement (1-2/semaine)

**Success metric :** Scoring ISO 9001 passe de 40% à 70%

---

**Mois 4-6 : Certification-Ready**

**Objectif :** 100% conformité ISO 9001 + 1er contrat gagné

*Actions :*
- Compléter documents manquants
- Simuler audit blanc (ClearGo checklist)
- Répondre à appels d'offres avec Client Report
- **Gagner 1er contrat premium**

**Success metric :** 1 contrat gagné = ROI prouvé

---

**Mois 6+ : Upsell Modules**

**Trigger upsell GDP :**
Email si transporteur répond à AO pharma :

> Marc, félicitations pour votre contrat Sanofi (via ClearGo) !
>
> Pour sécuriser ce contrat et en gagner d'autres, vous avez besoin de GDP (Good Distribution Practice).
>
> **Module GDP disponible : +150€/mois**
> • Référentiel GDP complet
> • Procédures transport pharma
> • Préparation audit GDP
>
> Sans GDP, risque de perdre le renouvellement Sanofi.
>
> [CTA : Activer module GDP]

---

## 🔧 8. FEATURES CORE MVP <a name="features"></a>

### Features Priorité P0 (Bloquantes Lancement)

#### Feature 1 : Commercial Readiness Assessment (Freemium)

**Description :**
Questionnaire intelligent 15 questions qui évalue la capacité du transporteur à répondre aux appels d'offres premium.

**Inputs :**
- Réponses 15 questions (Oui/Non/Échelle)
- Données entreprise (SIRET, nb chauffeurs, CA)

**Traitement IA :**
- Analyse réponses vs référentiels ISO 9001, GDP, RSE
- Calcul Commercial Readiness Score (0-100)
- Identification blocages majeurs
- Estimation CA non capté

**Outputs :**
- Rapport PDF 2 pages
- Score 0-100 avec jauge visuelle
- 3 blocages prioritaires
- Estimation CA perdu
- CTA diagnostic complet (299€)

**Contraintes techniques :**
- Temps génération < 30 secondes
- Responsive mobile (80% trafic mobile attendu)
- Partage social (LinkedIn, email)

---

#### Feature 2 : Audit ISO 9001 Approfondi (Diagnostic 299€)

**Description :**
Questionnaire approfondi 100+ questions couvrant les 10 chapitres ISO 9001:2015.

**Référentiel :**

| Chapitre ISO 9001 | Nb questions | Points contrôle |
|-------------------|--------------|-----------------|
| 4. Contexte organisation | 8 | Parties intéressées, enjeux, périmètre SMQ |
| 5. Leadership | 12 | Engagement direction, politique qualité, rôles |
| 6. Planification | 10 | Risques/opportunités, objectifs qualité |
| 7. Support | 18 | Ressources, compétences, communication, docs |
| 8. Réalisation | 25 | Planification opérationnelle, conception, production |
| 9. Évaluation performance | 15 | Surveillance, audit interne, revue direction |
| 10. Amélioration | 12 | Non-conformités, actions correctives, amélioration continue |

**Total : 100 questions**

**Workflow :**
1. Questionnaire par chapitre (possibilité sauvegarde)
2. Upload documents existants (optionnel, accélère analyse)
3. Analyse IA :
   - Détection conformité/non-conformité par exigence
   - Calcul scoring par chapitre (0-100%)
   - Priorisation actions selon criticité
4. Génération roadmap 3-6 mois

**Outputs :**
- Roadmap PDF 15 pages
- 40-60 actions priorisées (P0, P1, P2)
- Templates documents à créer (20+)
- Planning Gantt
- 1er Client Compliance Report (version basique)

---

#### Feature 3 : Client Compliance Report Generator ⭐ **FEATURE KILLER**

**Description :**
Outil de génération automatique de dossiers de conformité brandés, exportables PDF/Web, montrable aux prospects/clients.

**Inputs :**
- Branding entreprise (logo, couleurs, coordonnées)
- Scoring conformité temps réel (ISO 9001, GDP, RSE, etc.)
- Documents uploadés (certifications, procédures)
- Informations société (SIRET, autorisation exercer, flotte)

**Configuration :**

**Étape 1 : Branding**
- Upload logo (PNG/JPG, max 2 MB)
- Choix couleurs primaire/secondaire (picker)
- Coordonnées entreprise (adresse, tel, email, site web)

**Étape 2 : Contenu**
- Sélection domaines à inclure :
  - [ ] ISO 9001
  - [ ] GDP Pharma
  - [ ] ADR Transport Dangereux
  - [ ] HACCP Alimentaire
  - [ ] Bilan Carbone
  - [ ] Sécurité Transport
- Niveau détail :
  - ( ) Executive Summary (2 pages)
  - ( ) Détaillé (5-10 pages)
  - ( ) Complet (15-20 pages)

**Étape 3 : Personnalisation message**
- Texte intro personnalisable (200 caractères)
- Exemple : "XYZ Logistics est votre partenaire de confiance pour le transport réglementé."

**Génération :**
- Temps : < 1 minute
- Formats disponibles :
  - PDF (téléchargement)
  - Lien web public (expiration 30j, renouvelable)
  - Email direct prospect (via ClearGo)

**Template PDF :**

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  [LOGO ENTREPRISE]                 [LOGO CLEARAGO]      │
│                                     Compliance Certified │
│                                                          │
│  DOSSIER DE CONFORMITÉ TRANSPORT                        │
│  ─────────────────────────────────                       │
│  [NOM ENTREPRISE]                                       │
│  Généré le [DATE] — Valable jusqu'au [DATE+6M]         │
│                                                          │
└─────────────────────────────────────────────────────────┘

PAGE 1 : EXECUTIVE SUMMARY

[Nom Entreprise] est une société de transport routier certifiée
pour répondre aux exigences les plus strictes du secteur.

Notre niveau de conformité est audité en continu par la plateforme
ClearGo, garantissant le maintien de nos standards qualité.

───────────────────────────────────────────────────────────

NOTRE NIVEAU DE MAÎTRISE

┌──────────────────────┬────────────────┐
│ ISO 9001:2015        │ ⭐⭐⭐⭐⭐ 95/100 │
│ GDP (Pharma)         │ ⭐⭐⭐⭐ 88/100   │
│ Sécurité Transport   │ ⭐⭐⭐⭐⭐ 98/100 │
│ RSE & Environnement  │ ⭐⭐⭐⭐ 85/100   │
└──────────────────────┴────────────────┘

───────────────────────────────────────────────────────────

PAGE 2 : CERTIFICATIONS & AGRÉMENTS

✅ Autorisation d'exercer transport routier
   N° [XXXXXX] — Valide jusqu'au [DATE]

✅ Manuel Qualité ISO 9001:2015
   Version 2.1 — Dernière mise à jour : [DATE]

✅ Procédures GDP (Good Distribution Practice)
   Conformité PICs/S — Audit interne : [DATE]

✅ Flotte 100% Euro 6
   [XX] véhicules — Contrôles techniques à jour

✅ Chauffeurs qualifiés & formés
   100% permis valides — FIMO/FCO à jour
   Formation GDP : [XX] chauffeurs certifiés

───────────────────────────────────────────────────────────

PAGE 3 : MAÎTRISE OPÉRATIONNELLE

📋 SYSTÈME QUALITÉ

• Manuel Qualité (v2.1)
• 25 procédures opérationnelles documentées
• Enregistrements qualité archivés (5 ans)
• Audits internes : 2 par an
• Revues de direction : trimestrielles

🚛 GESTION FLOTTE

• [XX] véhicules (Euro 6)
• Maintenance préventive (planning respecté)
• Traçabilité GPS temps réel
• Contrôles techniques à jour (100%)

👨‍💼 GESTION RH CHAUFFEURS

• [XX] chauffeurs permanents
• Permis de conduire valides (100%)
• Cartes conducteurs tachygraphes (100%)
• Formations réglementaires (FIMO/FCO : 100%)
• Visites médicales à jour (100%)

🌍 ENGAGEMENT RSE

• Bilan Carbone scope 1+2 réalisé (2025)
• Réduction émissions : -12% (vs 2023)
• Formation éco-conduite : 80% chauffeurs
• Objectif neutralité carbone : 2030

───────────────────────────────────────────────────────────

PAGE 4 : CONFORMITÉ RÉGLEMENTAIRE

✅ INSPECTION DU TRAVAIL
• Registre unique du personnel (à jour)
• DUER (Document Unique) — v3.0 (2025)
• Règlement intérieur (affiché)
• 0 mise en demeure (3 dernières années)

✅ URSSAF & DÉCLARATIONS SOCIALES
• Attestation vigilance URSSAF (valide)
• DSN (Déclaration Sociale Nominative) : à jour
• Cotisations sociales : à jour

✅ ACCIDENTS DU TRAVAIL
• Taux AT/MP : 1,2% (vs 3,8% moyenne secteur)
• Procédure déclaration AT formalisée
• Actions préventives : port EPI, formations sécurité

✅ TACHYGRAPHE & TEMPS DE CONDUITE
• Tachygraphes Gen2 (100% flotte PL)
• Analyse hebdomadaire temps de conduite
• 0 infraction repos/conduite (12 derniers mois)

───────────────────────────────────────────────────────────

PAGE 5 : AUDITS & CONFORMITÉ

📅 HISTORIQUE AUDITS

| Date | Type | Résultat | Actions |
|------|------|----------|---------|
| 01/2026 | Audit interne ISO 9001 | ✅ Conforme | 2 améliorations mineures |
| 10/2025 | Audit client Sanofi | ✅ Approuvé | 0 non-conformité |
| 07/2025 | Audit interne GDP | ⚠️ 1 NC mineure | Corrigée (08/2025) |

📅 PROCHAINS JALONS

• Mars 2026 : Audit interne ISO 9001
• Juin 2026 : Renouvellement autorisation exercer
• Septembre 2026 : Audit blanc ISO 9001 (prépa certif)
• Décembre 2026 : Audit de certification ISO 9001

───────────────────────────────────────────────────────────

CONTACT

[Nom Entreprise]
[Adresse complète]

📞 [Téléphone]
📧 [Email]
🌐 [Site web]

───────────────────────────────────────────────────────────

Dossier généré par ClearGo — Plateforme de conformité transport
Conforme ISO 9001:2015 | GDP PICs/S | Réglementation transport

🔒 Données vérifiées et auditées en continu
📅 Rapport valable jusqu'au [DATE+6M]
```

**Fonctionnalités avancées (post-MVP) :**
- Traduction auto (EN, ES, DE) pour appels d'offres internationaux
- Personnalisation par prospect (adresse nominative)
- Tracking ouverture rapport (analytics : "Sanofi a ouvert votre dossier le...")
- Signature électronique dirigeant
- QR code validation (anti-fraude)

---

#### Feature 4 : Roadmap ISO 9001 Interactive

**Description :**
Tableau de bord de suivi de la roadmap vers ISO 9001, avec jalons, actions, et progression temps réel.

**Vue principale : Gantt Simplifié**

```
┌────────────────────────────────────────────────────────┐
│  ROADMAP ISO 9001                    Progression : 45% │
│  ─────────────────                                     │
│  Objectif : 100% conformité — 15 juin 2026            │
└────────────────────────────────────────────────────────┘

📊 PROGRESSION PAR CHAPITRE

4. Contexte organisation       ███████████░░░░░ 75%
5. Leadership                  ██████████░░░░░░ 65%
6. Planification              █████████░░░░░░░ 60%
7. Support                    ████████░░░░░░░░ 50%
8. Réalisation                ██████░░░░░░░░░░ 40%
9. Évaluation performance     ████░░░░░░░░░░░░ 30%
10. Amélioration              ███░░░░░░░░░░░░░ 25%

───────────────────────────────────────────────────────────

🎯 ACTIONS PRIORITAIRES (10 prochains jours)

┌─────────────────────────────────────────────────────────┐
│ 🔴 P0 | Créer Politique Qualité              | J-2     │
│ 🔴 P0 | Définir périmètre SMQ                | J-5     │
│ 🟠 P1 | Cartographier processus              | J-8     │
│ 🟠 P1 | Rédiger procédure gestion docs       | J-10    │
│ 🟡 P2 | Former équipe aux procédures         | J+15    │
└─────────────────────────────────────────────────────────┘

[Bouton : Voir roadmap complète (60 actions)]
```

**Détail action (clic sur ligne) :**

```
┌─────────────────────────────────────────────────────────┐
│  ACTION : Créer Politique Qualité                      │
│  ────────────────────────────                           │
│  Chapitre ISO : 5.2 Politique qualité                  │
│  Priorité : P0 (Bloquant)                              │
│  Deadline : Dans 2 jours                                │
│  Statut : ⏳ En cours                                   │
└─────────────────────────────────────────────────────────┘

📖 EXIGENCE ISO 9001

La direction doit établir, mettre en œuvre et maintenir
une politique qualité qui :
• est appropriée au contexte de l'organisme
• fournit un cadre pour établir les objectifs qualité
• inclut un engagement à satisfaire les exigences applicables
• inclut un engagement à l'amélioration continue du SMQ

───────────────────────────────────────────────────────────

🤖 ASSISTANCE CLEARAGO

[Bouton : Générer ma Politique Qualité avec l'IA]

→ Questionnaire 5 min
→ Génération document personnalisé
→ Validation expert ClearGo (optionnel)

───────────────────────────────────────────────────────────

📎 RESSOURCES

• Template Politique Qualité (Word)
• Exemple Politique Qualité (entreprise similaire)
• Vidéo explicative (3 min)

───────────────────────────────────────────────────────────

[Bouton : Marquer comme terminé]
[Bouton : Besoin d'aide (chat support)]
```

---

#### Feature 5 : Création Documents ISO 9001 Assistée IA

**Description :**
Génération automatique des 20+ documents obligatoires ISO 9001 via templates intelligents + IA.

**Documents générables :**

| Document | Chapitre ISO | Temps création | Personnalisation |
|----------|--------------|----------------|------------------|
| Politique Qualité | 5.2 | 5 min | Haute (vision entreprise) |
| Cartographie processus | 4.4 | 10 min | Haute (activités métier) |
| Manuel Qualité | 4.3 | 15 min | Moyenne (auto-généré à 80%) |
| Procédure gestion docs | 7.5 | 7 min | Faible (template standard) |
| Procédure maîtrise enregistrements | 7.5 | 5 min | Faible |
| Procédure actions correctives | 10.1 | 8 min | Moyenne |
| Procédure actions préventives | 6.1 | 8 min | Moyenne |
| Procédure audit interne | 9.2 | 10 min | Moyenne |
| Procédure revue de direction | 9.3 | 8 min | Faible |
| Procédure gestion non-conformités | 10.2 | 8 min | Moyenne |
| Fiche de poste (template) | 7.2 | 3 min | Haute (par poste) |
| Plan de formation | 7.2 | 10 min | Haute (besoins identifiés) |
| Grille compétences | 7.2 | 5 min | Haute |
| Planification audits internes | 9.2 | 5 min | Moyenne |
| Programme amélioration continue | 10.3 | 10 min | Haute |

**Total : 15 documents principaux + 10+ enregistrements associés**

**Workflow création document (exemple : Politique Qualité) :**

**Étape 1 : Questionnaire guidé**

```
🤖 CRÉATION : POLITIQUE QUALITÉ

Je vais vous aider à créer votre Politique Qualité en 5 minutes.

───────────────────────────────────────────────────────────

Question 1/5 : Quelle est votre vision qualité ?

"Notre engagement qualité consiste à..."

[Zone texte : 200 caractères]

💡 Exemple : "Garantir la satisfaction de nos clients par un
service de transport fiable, sécurisé et conforme aux
réglementations les plus strictes."

───────────────────────────────────────────────────────────

Question 2/5 : Quels sont vos 3 objectifs qualité prioritaires ?

1. [Zone texte : 100 car] Ex: "0 non-conformité client"
2. [Zone texte : 100 car] Ex: "100% respect délais livraison"
3. [Zone texte : 100 car] Ex: "Réduction accidents -20%/an"

───────────────────────────────────────────────────────────

Question 3/5 : Qui est responsable qualité dans votre structure ?

( ) Dirigeant
( ) Responsable Qualité dédié
( ) Responsable Exploitation
( ) Autre : [préciser]

───────────────────────────────────────────────────────────

Question 4/5 : Fréquence revue Politique Qualité ?

( ) Annuelle
( ) Semestrielle
( ) Autre : [préciser]

───────────────────────────────────────────────────────────

Question 5/5 : Communication Politique Qualité ?

[ ] Affichage locaux
[ ] Intranet / Email
[ ] Réunion équipe
[ ] Livret accueil nouveaux salariés
[ ] Autre : [préciser]

───────────────────────────────────────────────────────────

[Bouton : Générer ma Politique Qualité]
```

**Étape 2 : Génération IA (30 secondes)**

Prompt IA interne :
```
Génère une Politique Qualité conforme ISO 9001:2015 pour :
- Entreprise : [Nom]
- Secteur : Transport routier
- Vision : [Réponse Q1]
- Objectifs : [Réponse Q2]
- Responsable : [Réponse Q3]
- Fréquence revue : [Réponse Q4]
- Communication : [Réponse Q5]

Format : Document Word, 2 pages max, ton professionnel,
incluant signature dirigeant + date.
```

**Étape 3 : Prévisualisation & Édition**

```
┌─────────────────────────────────────────────────────────┐
│  POLITIQUE QUALITÉ — PRÉVISUALISATION                  │
└─────────────────────────────────────────────────────────┘

[Logo Entreprise]                         Document : POL-001
                                          Version : 1.0
                                          Date : 17/01/2026

──────────────────────────────────────────────────────────

POLITIQUE QUALITÉ
XYZ LOGISTICS

──────────────────────────────────────────────────────────

1. ENGAGEMENT DE LA DIRECTION

XYZ Logistics s'engage à garantir la satisfaction de ses
clients par un service de transport routier fiable, sécurisé
et conforme aux réglementations les plus strictes du secteur.

Notre Système de Management de la Qualité (SMQ) repose sur
les principes suivants :
• Orientation client
• Leadership et engagement
• Implication du personnel
• Approche processus
• Amélioration continue

──────────────────────────────────────────────────────────

2. OBJECTIFS QUALITÉ

Pour concrétiser notre engagement, nous nous fixons les
objectifs mesurables suivants :

1. Atteindre 0 non-conformité client (réclamations)
2. Respecter 100% des délais de livraison convenus
3. Réduire les accidents de 20% par an

Ces objectifs sont revus annuellement lors de la Revue de
Direction et communiqués à l'ensemble du personnel.

──────────────────────────────────────────────────────────

3. CONFORMITÉ RÉGLEMENTAIRE

XYZ Logistics s'engage à respecter :
• Les exigences de la norme ISO 9001:2015
• La réglementation transport routier (LOTI, règlement CE)
• Les exigences légales et réglementaires applicables
• Les exigences spécifiques de nos clients

──────────────────────────────────────────────────────────

4. AMÉLIORATION CONTINUE

Nous nous engageons dans une démarche d'amélioration continue
de notre SMQ par :
• L'analyse des réclamations clients
• Les audits internes réguliers
• La formation continue du personnel
• L'innovation dans nos processus

──────────────────────────────────────────────────────────

5. COMMUNICATION

Cette Politique Qualité est :
• Affichée dans nos locaux
• Communiquée à l'ensemble du personnel
• Accessible aux parties intéressées
• Revue annuellement pour assurer sa pertinence

──────────────────────────────────────────────────────────

Fait à [Ville], le 17 janvier 2026

[Signature Dirigeant]
[Nom Dirigeant]
Président XYZ Logistics

──────────────────────────────────────────────────────────

[Bouton : Modifier le document]
[Bouton : Valider et télécharger (Word + PDF)]
[Bouton : Demander relecture expert (payant : 49€)]
```

**Étape 4 : Validation & Stockage**

- Téléchargement Word + PDF
- Stockage automatique dans gestion documentaire ClearGo
- Ajout timeline : "Document créé le [date]"
- Alerte rappel revue dans 12 mois
- Mise à jour roadmap : Action "Créer Politique Qualité" → ✅ Terminée

---

#### Feature 6 : Alertes Proactives & Notifications

**Description :**
Système d'alertes automatiques pour documents expirés, actions en retard, nouvelles obligations.

**Types d'alertes :**

**A. Expiration Documents**

Déclencheurs :
- 30 jours avant expiration : Email + SMS (optionnel)
- 15 jours avant : Email + notification in-app
- 7 jours avant : Email urgent + SMS
- Jour J : Email critique + SMS + appel support (si abonnement premium)

Exemples :
- Autorisation d'exercer transport
- Permis chauffeurs
- Cartes conducteurs
- Certificats véhicules (CT, Euro 6)
- Attestation URSSAF
- Habilitations (ADR, CACES, etc.)

**B. Actions Roadmap en Retard**

Déclencheurs :
- J-3 : Email rappel "Action à terminer dans 3 jours"
- Jour J : Notification in-app "Action en retard"
- J+7 : Email escalade "Action bloquante non terminée"

**C. Nouvelles Obligations Réglementaires**

Déclencheurs :
- Publication nouvelle loi/décret transport
- Mise à jour norme ISO 9001
- Nouvelles exigences clients (ex: Sanofi update GDP)

Exemple email :

```
Objet : 🚨 Nouvelle obligation transport — Action requise

Bonjour Marc,

Une nouvelle obligation réglementaire vous concerne :

📋 Tachygraphe Gen2 obligatoire (depuis 01/09/2026)

Impacts pour XYZ Logistics :
• [XX] véhicules à équiper (PL >3,5t)
• Coût estimé : [XX]€/véhicule
• Délai installation : 3-6 mois

🎯 Actions ClearGo recommandées :

1. Planifier budget équipement (Priorité : P0)
2. Contacter fournisseur tachygraphes (sous 15j)
3. Former chauffeurs nouveau système (sous 1 mois)

[Bouton : Ajouter actions à ma roadmap]

───────────────────────────────────────────────────────────
Support ClearGo | contact@clearago.fr | 01 XX XX XX XX
```

**D. Opportunités Commerciales (Intelligence)**

Déclencheurs (avancé, post-MVP) :
- Détection appel d'offres correspondant à profil transporteur
- Match scoring ClearGo vs exigences AO

Exemple :

```
Objet : 💰 Opportunité contrat : Sanofi Lyon (120k€/an)

Marc, un appel d'offres publié aujourd'hui correspond
parfaitement à votre profil :

📦 Sanofi — Transport pharma Lyon-Marseille
CA estimé : 120k€/an
Exigences : ISO 9001 + GDP

✅ Votre niveau ClearGo : 92% compatible

Exigences     | Votre statut | Action
──────────────|──────────────|────────────────
ISO 9001      | ✅ 95% prêt  | —
GDP           | ⚠️ 75% prêt  | Compléter 3 docs
Bilan Carbone | ✅ À jour    | —

🎯 Complétez votre conformité GDP en 7 jours pour répondre.

[Bouton : Activer module GDP (+150€/mois)]
[Bouton : Voir détails appel d'offres]
```

---

#### Feature 7 : Dashboard Commercial (Scoring Visuel)

**Description :**
Tableau de bord orienté "Commercial Readiness" (pas technique), montrant au transporteur sa capacité à répondre à différents types de contrats.

**Vue principale :**

```
┌─────────────────────────────────────────────────────────┐
│  TABLEAU DE BORD COMMERCIAL — XYZ LOGISTICS            │
└─────────────────────────────────────────────────────────┘

📊 VOTRE COMMERCIAL READINESS GLOBAL : 78/100

┌──────────────────────────────────┐
│                                   │
│    ████████████████░░░░░░░        │
│                                   │
│        78 / 100                   │
│                                   │
└──────────────────────────────────┘

───────────────────────────────────────────────────────────

🎯 CAPACITÉ PAR TYPE DE CONTRAT

Pharma (ISO 9001 + GDP)          ⭐⭐⭐⭐ 85/100
  → Prêt à répondre : 2 actions manquantes
  [Bouton : Compléter]

Agroalimentaire (ISO 9001 + HACCP) ⭐⭐⭐ 65/100
  → Module HACCP requis
  [Bouton : Activer module]

Chimie (ISO 9001 + ADR)          ⭐⭐ 45/100
  → Module ADR requis + certifications
  [Bouton : Activer module]

Grands Comptes (ISO 9001 + Bilan Carbone) ⭐⭐⭐⭐ 80/100
  → Prêt à répondre
  [Bouton : Générer dossier]

───────────────────────────────────────────────────────────

💼 CONTRATS CIBLÉS (Recommandations IA)

Basé sur votre profil, vous êtes qualifié pour :

1. Sanofi Lyon-Marseille (120k€/an)
   Compatibilité : 92% ✅
   [Voir détails AO]

2. Nestlé Supply Chain (85k€/an)
   Compatibilité : 68% ⚠️ (Module HACCP requis)
   [Activer module]

3. L'Oréal Cosmétiques (95k€/an)
   Compatibilité : 80% ✅
   [Générer dossier]

───────────────────────────────────────────────────────────

📈 PROGRESSION DERNIERS 30 JOURS

Commercial Readiness : 78/100 (+12 points) ⬆️
Documents créés : 8
Actions terminées : 15
Client Reports générés : 3

───────────────────────────────────────────────────────────

🏆 PROCHAINS JALONS

[ ] Atteindre 90/100 (Pharma premium-ready)
    ETA : 12 jours
    
[✅] Créer 1er Client Report
    Terminé le 10/01/2026
    
[ ] Activer module GDP
    Recommandé sous 7 jours (opportunité Sanofi)
```

**Détail scoring (clic sur type contrat) :**

```
┌─────────────────────────────────────────────────────────┐
│  CONTRATS PHARMA — DÉTAILS CONFORMITÉ                  │
└─────────────────────────────────────────────────────────┘

🎯 Score : 85/100 ⭐⭐⭐⭐

┌─────────────────────────────────────────────────────────┐
│  EXIGENCES PHARMA                  | VOTRE STATUT       │
├─────────────────────────────────────┼────────────────────┤
│  ISO 9001:2015                     │ ✅ 95% conforme    │
│  GDP (PICs/S)                      │ ⚠️ 75% conforme    │
│  Traçabilité complète              │ ✅ 100% OK         │
│  Température contrôlée             │ ✅ 100% OK         │
│  Bilan Carbone                     │ ✅ À jour          │
│  Assurance RC Pro > 2M€            │ ✅ OK              │
└─────────────────────────────────────┴────────────────────┘

⚠️ BLOCAGES IDENTIFIÉS (2)

1. Procédure Gestion Réclamations Client (GDP exigence 3.2)
   → Action : Créer procédure (template disponible)
   → Temps estimé : 15 min
   [Bouton : Créer maintenant]

2. Plan de Formation GDP chauffeurs
   → Action : Planifier formation (e-learning ClearGo)
   → Temps estimé : 30 min setup
   [Bouton : Planifier]

───────────────────────────────────────────────────────────

🎯 ROADMAP PHARMA-READY

Aujourd'hui : 85/100

Semaine 1 : Compléter 2 actions ci-dessus → 95/100
Semaine 2 : E-learning chauffeurs → 100/100

🏆 Pharma-ready dans 14 jours

[Bouton : Accélérer avec support expert (inclus)]
```

---

### Features Priorité P1 (Importantes mais Pas Bloquantes)

#### Feature 8 : E-learning ISO 9001 & Transport

**Description :**
Modules de formation vidéo + quiz pour dirigeant et équipe.

**Modules MVP (5 modules, 2h contenu) :**

1. **Introduction ISO 9001 pour dirigeants** (20 min)
   - Pourquoi ISO 9001 ?
   - Bénéfices commerciaux
   - Processus certification
   - Quiz 10 questions

2. **Approche processus transport** (25 min)
   - Cartographier ses processus
   - Identifier interactions
   - Définir indicateurs
   - Exercice pratique

3. **Gestion documentaire simplifiée** (15 min)
   - Documents obligatoires ISO 9001
   - Organisation fichiers
   - Contrôle versions
   - Quiz 5 questions

4. **Audit interne : Les bases** (30 min)
   - Planifier audit interne
   - Conduire entretien
   - Rédiger rapport
   - Actions correctives
   - Simulation audit (vidéo interactive)

5. **GDP Transport Pharma** (30 min)
   - Exigences PICs/S
   - Procédures clés
   - Traçabilité
   - Quiz certification interne

**Format technique :**
- Vidéos < 5 min/chapitre (attention span)
- Quiz interactifs (validation apprentissage)
- Certificats internes téléchargeables
- Suivi progression (% complété)

**Hébergement :**
- **Recommandation : LMS externe** (Teachable, Podia)
- Intégration API iframe ClearGo
- SSO (login ClearGo = accès e-learning)

**Production contenu (hors dev) :**
- Vivien enregistre modules (expertise QHSE)
- Montage externe (prestataire vidéo)
- Délai : 4-6 semaines production
- Coût estimé : 3-5k€ (hors périmètre dev)

---

#### Feature 9 : Gestion Documentaire Centralisée

**Description :**
Plateforme de stockage, organisation et vérification documents transporteur.

**Arborescence :**

```
📁 XYZ LOGISTICS

  📁 01. Légal & Autorisations
    ├── Autorisation d'exercer transport (exp: 06/2027)
    ├── KBIS (màj: 12/2025)
    ├── RC Pro (exp: 08/2026)
    └── Assurance flotte (exp: 03/2026)

  📁 02. Système Qualité ISO 9001
    ├── Manuel Qualité v2.1
    ├── Politique Qualité
    ├── Cartographie processus
    └── Procédures (25 docs)
        ├── PROC-001 Gestion documentaire
        ├── PROC-002 Actions correctives
        └── ...

  📁 03. GDP (Good Distribution Practice)
    ├── Procédures GDP (12 docs)
    ├── Enregistrements température
    ├── Certificats étalonnage sondes
    └── Audits clients

  📁 04. RH Chauffeurs
    ├── Permis de conduire (XX chauffeurs)
    ├── Cartes conducteurs (XX chauffeurs)
    ├── Formations (FIMO, FCO, ADR...)
    ├── Visites médicales
    └── Habilitations

  📁 05. Flotte & Véhicules
    ├── Cartes grises
    ├── Contrôles techniques
    ├── Certificats Euro 6
    └── Maintenances préventives

  📁 06. Conformité Réglementaire
    ├── URSSAF (attestations)
    ├── DUER (Document Unique)
    ├── Registre AT/MP
    └── Déclarations sociales

  📁 07. RSE & Environnement
    ├── Bilan Carbone 2025
    ├── Registre déchets
    └── Actions environnementales

  📁 08. Client Compliance Reports
    ├── Report Sanofi (généré 10/01/26)
    ├── Report Nestlé (généré 15/01/26)
    └── Report L'Oréal (généré 20/01/26)
```

**Features clés :**

**A. Upload intelligent**
- Drag & drop multiple
- Auto-catégorisation IA (analyse contenu document)
- Extraction métadonnées (date expiration, SIRET, etc.)
- OCR si scan (Google Vision API)

**B. Vérifications automatiques**
- Lisibilité (score qualité OCR)
- Date validité extraite
- Cohérence données (SIRET entreprise match)
- Alerte si document expiré/bientôt expiré

**C. Versionning**
- Historique versions (v1.0, v1.1, v2.0...)
- Comparaison versions (diff)
- Archivage anciennes versions (conservées 5 ans)

**D. Recherche & Filtres**
- Recherche full-text (OCR + métadonnées)
- Filtres : Catégorie, Date, Statut (valide/expiré), Chauffeur, Véhicule
- Tags personnalisables

**E. Exports**
- ZIP complet dossier entreprise
- PDF consolidé (tous docs en 1 fichier)
- Export sélectif (choix dossiers)
- Partage sécurisé (lien temporaire 7j)

---

#### Feature 10 : Support Chat & Email

**Description :**
Système de support client avec chat in-app + email + (optionnel) téléphone.

**Canaux :**

**A. Chat in-app (Widget)**
- Bulle chat en bas droite
- Chatbot IA niveau 1 (réponses FAQ, guidage)
- Escalade humain si chatbot bloqué
- SLA réponse : < 4h (abonnés premium)

**B. Email support**
- support@clearago.fr
- SLA réponse : < 24h (abonnés premium), < 48h (freemium)

**C. Téléphone (Premium uniquement)**
- 01 XX XX XX XX
- Horaires : Lun-Ven 9h-18h
- 1 appel stratégique/mois inclus (30 min) : Revue roadmap, préparation audit, etc.

**Chatbot IA FAQ :**

Exemples questions gérées automatiquement :
- "Comment créer une Politique Qualité ?"
- "Quels documents sont obligatoires ISO 9001 ?"
- "Comment générer un Client Report ?"
- "Mon scoring GDP est à 75%, que dois-je faire ?"
- "Quelle différence entre ISO 9001 et GDP ?"

**Escalade humain :**
- Questions complexes (interprétation norme)
- Bugs techniques
- Demandes personnalisées (audit blanc, consulting ponctuel)

---

### Features Priorité P2 (Post-MVP / V1.1)

#### Feature 11 : Modules Optionnels (GDP, ADR, HACCP, Carbone)

**Développement séparé, post-validation marché MVP.**

Chaque module suit même logique :
1. Référentiel spécialisé (questions + exigences)
2. Scoring dédié
3. Documents template spécifiques
4. Intégration Client Compliance Report

---

#### Feature 12 : Interface Consultant Externe (B2B2C)

**V2 uniquement si demande avérée.**

---

#### Feature 13 : Gestion Multi-sites

**V2 uniquement si clients pilotes identifiés.**

---

## 🏗️ 9. ARCHITECTURE FONCTIONNELLE <a name="architecture"></a>

### Stack Technique Recommandé

**Frontend :**
- Next.js 14 (React, App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui (composants)

**Backend :**
- Next.js API Routes (ou Nest.js si scaling)
- Supabase (PostgreSQL + Auth + Storage)
- Prisma ORM

**IA & Automation :**
- OpenAI GPT-4 (génération documents, chatbot)
- Google Cloud Vision API (OCR)
- n8n (workflows alertes, si besoin)

**Paiements :**
- Stripe (abonnements + one-shot)

**Email/SMS :**
- SendGrid (emails transactionnels)
- Twilio (SMS alertes critiques)

**E-learning :**
- Teachable ou Podia (LMS externe, intégration iframe)

**Hébergement :**
- Vercel (frontend Next.js)
- Supabase Cloud (backend + DB)
- Cloudflare CDN (assets)

---

### Architecture Base de Données (Supabase PostgreSQL)

**Tables principales :**

```sql
-- Entreprises
CREATE TABLE companies (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  siret VARCHAR(14) UNIQUE,
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(255),
  logo_url TEXT,
  brand_color_primary VARCHAR(7), -- hex color
  brand_color_secondary VARCHAR(7),
  nb_drivers INT,
  annual_revenue DECIMAL,
  created_at TIMESTAMP,
  subscription_status VARCHAR(50), -- freemium, diagnostic, premium, cancelled
  subscription_plan VARCHAR(50), -- base, gdp, adr, haccp, carbone, all-inclusive
  subscription_start_date DATE,
  subscription_end_date DATE
);

-- Utilisateurs
CREATE TABLE users (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50), -- dirigeant, manager, responsable_qualite
  permissions JSONB, -- granular permissions
  created_at TIMESTAMP
);

-- Diagnostic (Freemium + Payant)
CREATE TABLE diagnostics (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  type VARCHAR(50), -- freemium, complete
  status VARCHAR(50), -- in_progress, completed
  commercial_readiness_score INT, -- 0-100
  iso9001_score INT,
  gdp_score INT,
  rse_score INT,
  responses JSONB, -- toutes réponses questions
  blockers JSONB, -- liste blocages identifiés
  estimated_lost_revenue DECIMAL, -- CA non capté estimé
  roadmap JSONB, -- actions générées
  created_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- Actions Roadmap
CREATE TABLE roadmap_actions (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  diagnostic_id UUID REFERENCES diagnostics(id),
  iso_chapter VARCHAR(50), -- 4, 5, 6, 7, 8, 9, 10
  title VARCHAR(255),
  description TEXT,
  priority VARCHAR(10), -- P0, P1, P2
  status VARCHAR(50), -- todo, in_progress, done
  deadline DATE,
  estimated_time INT, -- minutes
  dependencies JSONB, -- IDs autres actions
  created_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- Documents Générés
CREATE TABLE generated_documents (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  action_id UUID REFERENCES roadmap_actions(id),
  type VARCHAR(100), -- politique_qualite, manuel_qualite, procedure_xxx
  iso_chapter VARCHAR(50),
  version VARCHAR(10), -- v1.0, v1.1
  file_url TEXT, -- Supabase Storage URL
  status VARCHAR(50), -- draft, validated
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Documents Uploadés
CREATE TABLE uploaded_documents (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  category VARCHAR(100), -- legal, iso9001, gdp, rh_chauffeurs, flotte, etc.
  subcategory VARCHAR(100),
  driver_id UUID REFERENCES drivers(id), -- si doc chauffeur
  vehicle_id UUID REFERENCES vehicles(id), -- si doc véhicule
  file_name VARCHAR(255),
  file_url TEXT,
  file_type VARCHAR(50),
  expiration_date DATE,
  ocr_extracted_data JSONB,
  ocr_confidence_score DECIMAL, -- 0-1
  status VARCHAR(50), -- valid, expiring_soon, expired
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Chauffeurs
CREATE TABLE drivers (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  license_number VARCHAR(50),
  license_expiration DATE,
  card_number VARCHAR(50), -- carte conducteur
  card_expiration DATE,
  certifications JSONB, -- FIMO, FCO, ADR, etc.
  status VARCHAR(50), -- active, inactive
  created_at TIMESTAMP
);

-- Véhicules
CREATE TABLE vehicles (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  registration VARCHAR(50),
  type VARCHAR(50), -- VUL, PL
  euro_norm VARCHAR(10), -- Euro 6
  technical_control_date DATE,
  insurance_expiration DATE,
  status VARCHAR(50), -- active, inactive
  created_at TIMESTAMP
);

-- Client Compliance Reports
CREATE TABLE client_reports (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  report_name VARCHAR(255),
  report_type VARCHAR(50), -- executive, detailed, complete
  target_client VARCHAR(255), -- nom prospect
  included_domains JSONB, -- [iso9001, gdp, rse, ...]
  branding JSONB, -- logo, colors, custom text
  pdf_url TEXT,
  web_url TEXT, -- lien public temporaire
  web_expiration_date DATE,
  views INT DEFAULT 0, -- tracking ouvertures
  generated_at TIMESTAMP
);

-- Alertes
CREATE TABLE alerts (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  type VARCHAR(50), -- expiration_document, action_late, new_regulation, opportunity
  severity VARCHAR(50), -- info, warning, critical
  title VARCHAR(255),
  message TEXT,
  related_entity_type VARCHAR(50), -- document, action, driver, vehicle
  related_entity_id UUID,
  status VARCHAR(50), -- unread, read, resolved
  sent_at TIMESTAMP,
  read_at TIMESTAMP
);

-- Support Tickets
CREATE TABLE support_tickets (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  user_id UUID REFERENCES users(id),
  subject VARCHAR(255),
  message TEXT,
  status VARCHAR(50), -- open, in_progress, resolved, closed
  priority VARCHAR(50), -- low, medium, high
  assigned_to VARCHAR(255), -- agent ClearGo
  created_at TIMESTAMP,
  resolved_at TIMESTAMP
);
```

---

## 🔄 10. PROCESS MÉTIER RÉALIGNÉS <a name="process"></a>

### Process 1 : Acquisition & Conversion (Freemium → Payant)

**Objectif :** Convertir visiteur en client abonné via démonstration ROI commercial.

**🔥 Entrées :**
- Landing page ClearGo
- SEO ("ISO 9001 transport", "conformité pharma")
- Publicité (Google Ads, LinkedIn Ads sur cible PME transport)
- Recommandation pairs

**⚙️ Traitement :**

**Étape 1 : Landing Page**
- Headline : "Combien de contrats pharma perdez-vous chaque année faute de conformité ISO 9001 ?"
- Sous-titre : "Transformez votre conformité en argument de vente avec ClearGo"
- CTA : "Évaluez votre potentiel commercial (gratuit, 5 min)"

**Étape 2 : Inscription**
- Email + Mot de passe
- SIRET (auto-complétion données entreprise via API Sirene)
- Nb chauffeurs
- CA annuel

**Étape 3 : Commercial Readiness Assessment (15 questions)**
- Questions orientées "perte contrats" (pas "peur contrôles")
- Durée : 5-7 min
- Analyse IA immédiate

**Étape 4 : Résultat Freemium**
- Score Commercial Readiness : XX/100
- Blocages identifiés : 3 prioritaires
- CA non capté estimé : XXXk€/an
- Potentiel si conforme : +XXk€ CA additionnel

**Étape 5 : Nurturing Email (si pas converti)**
- J+1 : "Marc, voici les 3 contrats que vous pourriez gagner"
- J+3 : "Comment [Concurrent X] a gagné Sanofi grâce à ClearGo"
- J+7 : "Offre limitée : Diagnostic complet 249€ (au lieu de 299€)"

**Étape 6 : Conversion Diagnostic Complet (299€)**
- Paiement Stripe
- Questionnaire ISO 9001 approfondi (100 questions)
- Upload documents existants
- Génération roadmap + 1er Client Report

**Étape 7 : Conversion Abonnement (499€/mois)**
- Email J+3 post-diagnostic
- Offre 1er mois 299€ (au lieu de 499€)
- Call onboarding offert
- Activation immédiate features premium

**📤 Sorties :**
- Client freemium (lead qualifié)
- Client diagnostic (MRR one-shot 299€)
- Client abonné premium (MRR 499€/mois)

**⏱️ Durée :**
- Freemium → Diagnostic : 1-7 jours (taux conversion 20-25%)
- Diagnostic → Abonnement : 3-14 jours (taux conversion 50-60%)

**🎯 KPIs :**
- Trafic landing page : 500 visiteurs/mois (objectif)
- Taux inscription freemium : 30% (150 inscriptions/mois)
- Taux conversion freemium → diagnostic : 20-25% (30-37 diagnostics/mois)
- Taux conversion diagnostic → abonnement : 50-60% (15-22 abonnés/mois)
- **MRR Objectif Mois 6 : 7 500€ - 11 000€ (15-22 clients × 499€)**

---

### Process 2 : Onboarding & Activation (J1 à J30)

**Objectif :** Prouver valeur ClearGo dans les 30 premiers jours (activation produit).

**🔥 Entrées :**
- Nouvel abonné (vient de payer 1er mois)
- Roadmap générée (issue diagnostic 299€)

**⚙️ Traitement :**

**Semaine 1 : Quick-Wins**

**Jour 1 :**
- Email bienvenue + call onboarding 30 min (Vivien ou équipe)
- Agenda call :
  1. Valider objectifs (quels contrats cibles ?)
  2. Identifier quick-wins (3 actions 0-7 jours)
  3. Configuration branding (logo, couleurs)

**Jour 2-3 :**
- Upload documents existants (si disponibles)
- Création 1er document IA : Politique Qualité (5 min)

**Jour 4-5 :**
- Création 2-3 documents additionnels (Procédure gestion docs, Procédure actions correctives)

**Jour 7 :**
- **Milestone 1 : 1ère génération Client Compliance Report**
- Email : "Votre 1er dossier client est prêt, testez-le sur un prospect cette semaine"
- **Success metric :** Client envoie dossier à 1 prospect → Validation valeur

---

**Semaine 2-4 : Structuration**

**Objectifs :**
- Créer 10+ documents ISO 9001
- Atteindre 60-70% scoring ISO 9001
- Générer 2-3 Client Reports additionnels

**Actions guidées :**
- Email hebdomadaire : "Cette semaine : Créez votre Manuel Qualité (guidé par IA)"
- Dashboard : Progression roadmap visible temps réel
- Alertes in-app : "Action prioritaire : Cartographie processus (15 min)"

**Jour 30 :**
- **Milestone 2 : 1er contrat commercial testé**
- Objectif : Client a répondu à 1 appel d'offres avec ClearGo
- **Success metric :** Feedback positif prospect OU contrat gagné

---

**📤 Sorties :**
- Client activé (a généré min 1 Client Report utile)
- Scoring ISO 9001 : 60-70% (vs 40% initial)
- Documents créés : 10-15
- **Preuve valeur = Rétention J30 → J90**

**⏱️ Durée :** 30 jours

**🎯 KPIs Activation :**
- % clients générant 1er Client Report J7 : **> 80%**
- % clients atteignant 60% ISO 9001 J30 : **> 70%**
- % clients répondant 1 AO J30 : **> 50%**
- Taux rétention J30 : **> 95%**

---

### Process 3 : Accompagnement & Expansion (Mois 2-6)

**Objectif :** Amener client à 100% ISO 9001-ready + gagner 1er contrat premium.

**🔥 Entrées :**
- Client activé (post J30)
- Roadmap restante (20-40 actions)

**⚙️ Traitement :**

**Mois 2-3 : Structuration avancée**

**Actions :**
- Création documents restants (10-15)
- Mise en place audits internes (formation e-learning)
- Formation équipe interne (manager, exploitation)

**Support proactif :**
- Email mensuel : "Bilan progression : Vous êtes à 72% ISO 9001"
- Call stratégique offert (30 min/mois) : Revue roadmap, déblocage

**Scoring attendu fin Mois 3 :** 80-85% ISO 9001

---

**Mois 4-6 : Certification-ready + ROI**

**Actions :**
- Compléter derniers documents
- Simuler audit blanc (checklist ClearGo)
- Répondre activement à appels d'offres (avec Client Reports)

**Objectif final :** **Gagner 1er contrat premium** (Pharma, Agro, Chimie)

**Success story (exemple) :**
> "XYZ Logistics a répondu à l'appel d'offres Sanofi avec son Client Compliance Report ClearGo. Score GDP 88/100 visible immédiatement. Contrat gagné : 120k€/an. ROI ClearGo : 120 000€ / 3 000€ (6 mois) = 40x"

---

**📤 Sorties :**
- Client ISO 9001-ready (95-100% conformité)
- Min 1 contrat premium gagné (preuve ROI)
- Client satisfait (NPS > 50)
- **Upsell potentiel :** Modules GDP, ADR, HACCP si besoins identifiés

**⏱️ Durée :** Mois 2 à Mois 6 (4 mois)

**🎯 KPIs :**
- % clients 100% ISO 9001 à Mois 6 : **> 80%**
- % clients ayant gagné min 1 contrat via ClearGo : **> 60%**
- Taux rétention Mois 6 : **> 85%**
- NPS (Net Promoter Score) : **> 50**

---

### Process 4 : Upsell Modules Optionnels (Mois 3+)

**Objectif :** Augmenter ARPU (Average Revenue Per User) via modules spécialisés.

**🔥 Déclencheurs Upsell :**

**Trigger 1 : Client répond à AO pharma**
- Détection : Client génère Client Report avec scoring GDP
- Email automatique : "Pour sécuriser ce contrat, activez module GDP (+150€/mois)"

**Trigger 2 : Client atteint 90% ISO 9001**
- Email : "Bravo ! Prochaine étape : Diversifiez vos marchés avec module HACCP (agro) ou ADR (chimie)"

**Trigger 3 : Client demande support sur sujet spécialisé**
- Exemple : "Comment calculer mon bilan carbone ?"
- Réponse support : "Module Bilan Carbone disponible : +200€/mois"

---

**⚙️ Workflow Upsell :**

1. Email ciblé (personnalisé selon trigger)
2. Démonstration valeur (exemple contrat gagnables)
3. Essai gratuit 7 jours (si client hésite)
4. Activation module (facturation additionnelle automatique)

---

**📤 Sorties :**
- Client module GDP : 499€ + 150€ = **649€/mois**
- Client module ADR : 499€ + 150€ = **649€/mois**
- Client module HACCP : 499€ + 100€ = **599€/mois**
- Client module Carbone : 499€ + 200€ = **699€/mois**
- Client All-Inclusive : **999€/mois** (économie 100€/mois)

**🎯 KPI Upsell :**
- % clients activant min 1 module à Mois 12 : **> 30%**
- ARPU moyen Mois 12 : **600-650€/mois** (vs 499€ base)

---

### Process 5 : Gestion Documentaire (Transverse)

**Inchangé vs version précédente, sauf :**

**Ajouts :**
- Stockage automatique Client Compliance Reports générés
- Catégorie dédiée "Client Reports" (historique, versions)
- Export groupé : "Tous mes Client Reports 2026" (ZIP)

---

## 🗓️ 11. ROADMAP & PRIORITÉS <a name="roadmap"></a>

### MVP (Mois 0-4) — Fonctionnalités Critiques

**Objectif :** Lancer produit fonctionnel permettant à 1er client de gagner 1 contrat.

**Features P0 (Bloquantes) :**

| Feature | Effort (jours) | Priorité | Deadline |
|---------|----------------|----------|----------|
| Commercial Readiness Assessment | 8j | P0 | Semaine 2 |
| Audit ISO 9001 approfondi (100 Q) | 12j | P0 | Semaine 4 |
| **Client Compliance Report Generator** | **15j** | **P0** | **Semaine 6** |
| Roadmap ISO 9001 interactive | 10j | P0 | Semaine 7 |
| Création documents IA (20 templates) | 20j | P0 | Semaine 10 |
| Scoring commercial (dashboard) | 8j | P0 | Semaine 8 |
| Alertes proactives | 10j | P0 | Semaine 9 |
| Gestion documentaire (upload, OCR, stockage) | 15j | P0 | Semaine 11 |
| Authentification & Paiements (Stripe) | 8j | P0 | Semaine 3 |
| E-learning (intégration Teachable) | 5j | P1 | Semaine 12 |
| Support chat/email | 5j | P1 | Semaine 13 |

**Total Développement MVP : ~115 jours dev (estimation)**

**Timeline :**
- Semaines 1-13 : Développement
- Semaine 14 : Tests & debug
- Semaine 15-16 : Bêta privée (3-5 clients pilotes)
- **Semaine 17 : Lancement Public**

**Deadline MVP : 4 mois**

---

### V1.1 (Mois 5-6) — Améliorations Post-Feedback

**Objectif :** Corriger bugs + optimisations UX basées sur retours MVP.

**Features :**
- Corrections bugs critiques
- Dashboard commercial amélioré (graphiques progression)
- Templates documents additionnels (10+)
- Optimisation mobile (PWA)
- Amélioration IA génération docs (réduction erreurs)

**Effort : 20-30 jours dev**

---

### V2 (Mois 7-12) — Expansion & Modules

**Objectif :** Lancement modules optionnels + features avancées.

**Features :**

**Modules spécialisés :**
- GDP Pharma (référentiel complet)
- HACCP Alimentaire
- ADR Transport Dangereux
- Bilan Carbone (intégration API partenaire)

**Features avancées :**
- Tracking ouverture Client Reports (analytics)
- Personnalisation Client Reports par prospect
- E-learning avancé (10+ modules additionnels)
- API Webhooks (notifications externes)

**Effort : 60-80 jours dev**

---

### V3 (Année 2) — Scale & Verticalisations

**Objectif :** Devenir plateforme de référence conformité transport.

**Features :**
- Interface consultant externe (B2B2C)
- Gestion multi-sites/filiales
- Intégration TMS (Dashdoc, Shippeo)
- Intégration plateformes AO (Upply, Fretlink)
- Extension Europe (ES, DE, BE)
- Marketplace consultants certifiés ClearGo
- White-label (grands groupes)

**Effort : 150-200 jours dev**

---

## 🔄 12. DIFFÉRENCES VS VERSION PRÉCÉDENTE <a name="changes"></a>

### Changements Majeurs (Stratégie A → B)

| Dimension | Avant (Stratégie A) | Après (Stratégie B) | Impact |
|-----------|---------------------|---------------------|--------|
| **Pain point principal** | Peur contrôles Inspection/URSSAF | Perte contrats premium | 🔥 Total |
| **Persona cible** | Dirigeant stressé TPE | Dirigeant ambitieux PME | 🔥 Total |
| **Pricing abonnement** | 150-200€/mois | 499€/mois | 🔥 Total (+150% pricing) |
| **Freemium** | 12 Q diagnostic RSE | 15 Q Commercial Readiness | ⚠️ Majeur |
| **Diagnostic payant** | 50-100€ | 299€ | ⚠️ Majeur (+200%) |
| **ISO 9001** | Non mentionné / Optionnel V2 | Cœur MVP (100 questions) | 🔥 Total (+40j dev) |
| **GDP/HACCP/ADR** | Cœur MVP | Modules optionnels V2 | ⚠️ Majeur (simplification MVP) |
| **Feature killer** | Plan d'action interne | **Client Compliance Report Generator** | 🔥 Total (nouveau dev 15j) |
| **Dashboard** | Scoring technique conformité | Scoring commercial (contrats ciblés) | ⚠️ Majeur |
| **Output principal** | Roadmap actions internes | Dossier client exportable PDF/Web | 🔥 Total |
| **Message marketing** | "Évitez l'amende" | "Gagnez des contrats" | 🔥 Total |
| **Taux conversion attendu** | 15% freemium → payant | 20-25% freemium → payant | ⚠️ Amélioration |
| **ARPU (Average Revenue Per User)** | 150-200€/mois | 500-650€/mois (avec upsells) | 🔥 Total (+250%) |
| **Marché cible** | Large (tous transporteurs TPE/PME) | Niche premium (pharma/agro/chimie) | ⚠️ Majeur |
| **Positionnement concurrentiel** | Océan rouge (vs consultants low-cost) | Océan bleu (compliance as commercial asset) | 🔥 Total |

---

### Nouvelles Features Introduites (Stratégie B)

| Feature | Justification | Effort dev |
|---------|---------------|------------|
| **Commercial Readiness Assessment** | Qualifier leads par potentiel CA, pas par peur | +2j vs ancien freemium |
| **Client Compliance Report Generator** | Différenciateur killer, aucun concurrent | +15j (nouveau) |
| **Scoring commercial (pas technique)** | Langage business (contrats) vs langage conformité (exigences) | +3j vs ancien scoring |
| **Branding personnalisé reports** | Professionnalisme perception client final | +5j |
| **Tracking ouverture reports (V2)** | Preuve valeur ("Sanofi a ouvert votre dossier") | +3j (V2) |
| **Intégration ISO 9001 complète** | Cœur positionnement "ISO 9001-ready en 3 mois" | +40j (vs 0j avant) |

---

### Features Retirées / Déprioritisées

| Feature (Stratégie A) | Statut (Stratégie B) | Justification |
|-----------------------|----------------------|---------------|
| GDP/HACCP/ADR en cœur MVP | → Modules optionnels V2 | Simplifier MVP, éviter surcharge |
| Freemium "Diagnostic RSE de base" | → Remplacé par "Commercial Readiness" | Aligner sur message commercial |
| Suivi RH chauffeurs détaillé | → Simplifié (min viable) | Focus ISO 9001, pas outil RH pur |
| Création documents non-ISO | → V2 | Prioriser ISO 9001 (différenciateur) |
| Interface consultant externe | → V2 (si demande validée) | Complexité évitée MVP |
| Multi-sites | → V2 (si clients pilotes) | Complexité évitée MVP |

---

### Documents à Réécrire (Suite à Réalignement)

**Fichiers à mettre à jour :**

1. **02_RECAPITULATIF_PROCESS.md**
   - Process 1 : Remplacer freemium RSE par Commercial Readiness
   - Process 3 : Ajouter feature Client Compliance Report
   - Process 4 : Déplacer GDP/HACCP/ADR en optionnels (pas cœur)
   - KPIs : Mettre à jour pricing et taux conversion

2. **03_REPONSES_QUESTIONNAIRE_DEV.md**
   - Question 1 : Réécrire problème métier (perte contrats, pas peur contrôles)
   - Question 5 : Mettre à jour persona cible (PME ambitieuses)
   - Question 9 : Réécrire modèle économique (pricing 299€ + 499€/mois)
   - Question 13 : Réécrire cycle de vie client (freemium → diagnostic → abonnement réalignés)
   - Question 53 : Ajouter ISO 9001 en MVP, retirer GDP/HACCP/ADR du MVP
   - Questions 17-20 : Intégrer Client Compliance Report Generator

3. **04_QUESTIONS_VIVIEN.md**
   - Bloc 1 (Consultant externe) : Confirmer V2 (pas MVP)
   - Bloc 2 (Multi-sites) : Confirmer V2 (pas MVP)
   - Question 3.2 (Freemium) : Remplacer par Commercial Readiness (15 questions)
   - Nouvelles questions :
     - **Q: Validation pricing 499€/mois** (vs 150-200€ initial)
     - **Q: Validation ISO 9001 cœur MVP** (vs optionnel)
     - **Q: Client pilote identifié prêt à payer 499€/mois ?**

---

## ✅ CHECKLIST VALIDATION VIVIEN

Avant chiffrage final développement, Vivien doit valider :

### Décisions Stratégiques (Bloquantes)

- [ ] **Pricing confirmé :**
  - Diagnostic complet : 299€ (vs 50-100€)
  - Abonnement : 499€/mois (vs 150-200€)
  - Modules optionnels : +100-200€/mois

- [ ] **ISO 9001 en cœur MVP confirmé** (vs optionnel V2)
  - Impact : +40 jours dev
  - Référentiel : 100 questions + 20 documents

- [ ] **GDP/HACCP/ADR = Modules optionnels V2** (vs cœur MVP)
  - GDP prioritaire si client pharma identifié
  - Sinon : Lancement V2 (Mois 7-12)

- [ ] **Client Compliance Report = Feature killer MVP** confirmée
  - Effort : 15 jours dev
  - Critique pour différenciation

### Validation Marché

- [ ] **Client pilote identifié** prêt à payer 499€/mois ?
  - Si OUI : Lancer MVP immédiatement
  - Si NON : Pré-vendre 3-5 clients avant développement

- [ ] **Positionnement "Gagner contrats" validé** vs "Éviter amendes"
  - Test message landing page auprès cible
  - A/B testing si besoin

### Production Contenu (Hors Dev)

- [ ] **E-learning : Production contenu planifiée**
  - 5 modules MVP (2h vidéo)
  - Vivien enregistre ou prestataire externe ?
  - Délai : 4-6 semaines
  - Budget : 3-5k€

- [ ] **Templates documents ISO 9001 : Qui rédige ?**
  - Vivien (expertise QHSE) : Rédaction templates de base
  - IA : Personnalisation templates
  - Délai : 2-3 semaines

### Partenariats Stratégiques

- [ ] **Organisme certification identifié** (AFNOR, Bureau Veritas, SGS) ?
  - Partenariat pour faciliter certification ISO 9001 clients
  - Revenue share possible ?

- [ ] **LMS E-learning : Teachable ou Podia ?**
  - Validation choix plateforme
  - Coût abonnement : ~100-200€/mois

---

## 🎯 PROCHAINES ÉTAPES

### Actions Vivien (48-72h)

1. **Lire ce document complet** (1-2h)
2. **Valider checklist ci-dessus** (cocher cases)
3. **Identifier 1 client pilote** prêt à payer 499€/mois
4. **Décision finale** : GO développement MVP Stratégie B ?

### Actions Équipe Dev (Post-Validation Vivien)

1. Attendre validation Vivien
2. Réécrire documents techniques (Process, Réponses, Questions)
3. Chiffrage développement précis (basé sur 115j estimés)
4. Planification roadmap MVP (17 semaines)
5. Kick-off développement

---

**📅 DEADLINE RECOMMANDÉE DÉCISION VIVIEN : 7 JOURS OUVRÉS**

Pour respecter objectif lancement MVP fin Q1 2026, décision rapide essentielle.

---

*Fin du document — ClearGo Stratégie B Alignée*

**Version : 4.0 — Validée pour développement après accord Vivien**
