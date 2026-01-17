# ClearGo — Récapitulatif des Process

*Date : 16 janvier 2026*  
*Version : 3.0 — Validée*

---

## Vue d'ensemble

ClearGo est structuré autour de **5 process principaux** qui accompagnent le transporteur depuis la découverte jusqu'à la conformité totale.

---

## Process 1 : Acquisition & Diagnostic (Freemium → Payant)

### 🎯 Objectif
Convertir un visiteur en client payant via un diagnostic freemium puis complet.

### 📥 Entrées
- Inscription utilisateur (dirigeant transporteur)
- Réponses aux **12 questions freemium** (diagnostic RSE de base)
- *(Optionnel)* Paiement diagnostic complet
- Documents obligatoires uploadés :
  - ✅ Autorisation d'exercer
  - ✅ Nombre de chauffeurs / véhicules
  - ✅ Cartes conducteurs (validité) — **uniquement pour poids lourds**
  - ❌ ~~Consommation carburant flotte~~ → **RETIRÉ (trop éliminatoire)**

### ⚙️ Traitement
1. **Analyse IA des réponses + documents**
2. **Scoring de conformité RSE** par domaine :
   - 🚨 Suivi des chauffeurs (formations, habilitations)
   - 🚨 Déclarations sociales (URSSAF)
   - 🚨 Prévention accidents du travail
   - Tachygraphe & temps de conduite
   - Facturation électronique (préparation 2026)
3. **Génération automatique du plan d'action**

### 📤 Sorties

#### Freemium
- Score de base RSE (vue d'ensemble)
- Alertes sur risques immédiats (Inspection, URSSAF, AT)
- Teasing du diagnostic complet (frustration contrôlée)

#### Payant
- Plan d'action détaillé + roadmap priorisée
- Analyse domaine par domaine
- Alertes prioritaires avec échéances
- Recommandations personnalisées

### ⏱️ Durée estimée
- Freemium : 5-10 minutes
- Diagnostic complet : 30-45 minutes (upload documents inclus)

---

## Process 2 : Choix du transporteur post-diagnostic

### 🎯 Objectif
Orienter le transporteur vers la meilleure option selon ses besoins.

### 📥 Entrées
- Plan d'action reçu (issu du diagnostic payant)
- Profil transporteur (taille, budget, autonomie)

### 📤 Sorties (3 options possibles)

#### Option A : Application autonome
- **Profil** : Transporteur autonome, budget limité
- **Action** : Télécharge le plan d'action
- **Statut ClearGo** : Exit plateforme ou consultation ponctuelle

#### Option B : Souscription accompagnement ClearGo
- **Profil** : Besoin de suivi, pas de compétence interne
- **Action** : Souscrit abonnement mensuel/annuel
- **Statut ClearGo** : Client actif (process 3)

#### Option C : Partage avec consultant externe
- **Profil** : Déjà accompagné par consultant
- **Action** : Partage plan via interface B2B2C
- **Statut ClearGo** : Consultant gère le suivi

---

## Process 3 : Accompagnement (Abonnement)

### 🎯 Objectif
Maintenir la conformité RSE du transporteur dans la durée.

### 📥 Entrées
- Abonnement actif (mensuel ou annuel)
- Plan d'action validé
- Actions correctives à mettre en œuvre

### ⚙️ Traitement

#### 1. Suivi des jalons
- Validation étape par étape des actions
- Mise à jour du tableau de bord
- Calcul progression globale

#### 2. Accès e-learning
- Modules de formation réglementaire
- Sensibilisation chauffeurs
- Préparation aux contrôles

#### 3. Système d'alertes automatiques
- ⏰ Actions en retard
- 📄 Documents expirés (permis, cartes, habilitations)
- 📢 Nouvelles obligations réglementaires (veille)
- 🚨 Rappels inspections prévisionnelles

#### 4. Ressources premium
- Modèles de documents
- FAQ avancée
- Accès support prioritaire

#### 5. **NOUVEAU : Création de documents**
Templates disponibles :
- 📋 Recadrage salarié
- ⚠️ Fiches de non-conformité
- 📝 Procès-verbaux d'accidents
- 📚 Registres obligatoires (formation, contrôle, etc.)

**Workflow** :
1. Sélection du template
2. Remplissage formulaire (données pré-remplies si possible)
3. Génération IA du document
4. Validation + export (PDF/Word)
5. Stockage automatique dans gestion documentaire

#### 6. **NOUVEAU : Rappels textes réglementaires**
- Synthèses lois applicables (vulgarisées)
- Changements réglementaires commentés
- Impact sur l'activité du transporteur
- Actions à mettre en place

### 📤 Sorties
- Tableau de bord de progression (temps réel)
- Dossier de conformité (prêt pour inspection)
- Certificat de conformité (si 100% validé)
- Historique des actions menées

### ⏱️ Durée
- Suivi continu (mensuel/annuel selon abonnement)
- Objectif : 100% conformité maintenue

---

## Process 4 : Modules optionnels (GDP / HACCP / ADR / Empreinte Carbone)

### 🎯 Objectif
Accompagner les transporteurs ayant des besoins spécialisés.

### 📥 Entrées
- Abonnement actif + demande module spécialisé
- Documents spécifiques selon module :
  - **GDP** : procédures qualité, cartographie locaux, certificats étalonnage
  - **HACCP** : plan HACCP, traçabilité température
  - **ADR** : certificats ADR chauffeurs, conformité véhicules
  - **Empreinte Carbone** : consommation carburant, km parcourus, poids transporté

### ⚙️ Traitement
- Analyse IA spécialisée selon référentiel
- Génération plan d'action complémentaire
- Suivi spécifique au module

### 📤 Sorties
- Plan d'action module spécialisé
- Accompagnement renforcé (si abonnement actif)
- Préparation audit (pour GDP uniquement)

### 💡 Note importante
**Empreinte Carbone** :
- Module OPTIONNEL (pas cœur de métier)
- Peut être intégré via API externe (partenariat)
- Méthodologie ISO 14083 si activé
- Export plateforme EVE (ADEME) disponible

---

## Process 5 : Gestion documentaire (Transverse)

### 🎯 Objectif
Centraliser et sécuriser tous les documents obligatoires du transporteur.

### 📥 Entrées
- Documents uploadés par le transporteur (PDF, scan, images)
- Documents générés par ClearGo (process 3)

### ⚙️ Traitement
1. **Vérification automatique**
   - Lisibilité (OCR si nécessaire)
   - Date de validité
   - Cohérence des données

2. **Stockage centralisé**
   - Classement par catégorie
   - Versionning des documents
   - Archivage sécurisé (RGPD)

3. **Système d'alertes expiration**
   - 📅 Permis de conduire chauffeurs
   - 📇 Cartes conducteurs (tachygraphe)
   - 🚛 Autorisation d'exercer
   - 🔧 Certificats véhicules (Euro 6, contrôle technique)
   - 🎓 Habilitations/formations

### 📤 Sorties
- Plateforme documentaire toujours à jour
- Notifications proactives d'expiration (30j, 15j, 7j avant)
- Export ZIP pour audit
- Historique des modifications

### ⏱️ Durée
- Processus continu
- Vérification quotidienne automatique

---

## Interactions entre les process

```
Process 1 (Diagnostic) → Process 2 (Choix) → {
  Option A : Exit
  Option B : Process 3 (Accompagnement) ⟷ Process 5 (Gestion doc)
                                        ⟷ Process 4 (Modules optionnels)
  Option C : Consultant externe
}
```

**Process transverses** :
- Process 5 (Gestion documentaire) : actif pour tous les clients payants
- Process 4 (Modules optionnels) : à la demande uniquement

---

## Indicateurs clés de performance (KPI) par process

### Process 1 : Acquisition & Diagnostic
- Taux de conversion freemium → payant : **objectif 15-20%**
- Temps moyen complétion diagnostic : **< 45 min**
- Score moyen conformité première visite : **indicateur marché**

### Process 2 : Choix transporteur
- Répartition des 3 options (A/B/C) : **suivi distribution**
- Taux de souscription abonnement (option B) : **objectif 60%**

### Process 3 : Accompagnement
- Taux de rétention abonnement : **objectif > 85%**
- Taux de complétion plan d'action : **objectif 80% à 6 mois**
- NPS (satisfaction) : **objectif > 50**

### Process 4 : Modules optionnels
- Taux d'adoption module optionnel : **objectif 25-30%**
- Revenu moyen par utilisateur (ARPU) : **suivi évolution**

### Process 5 : Gestion documentaire
- Taux de documents à jour : **objectif > 95%**
- Nombre moyen alertes/transporteur/mois : **indicateur engagement**

---

## Hypothèses de charge (MVP)

| Métrique | Valeur estimée | Base calcul |
|----------|----------------|-------------|
| Durée diagnostic freemium | 5-10 min | 12 questions simples |
| Durée diagnostic complet | 30-45 min | Upload docs + analyse |
| Temps analyse IA | < 2 min | Traitement automatisé |
| Génération plan d'action | < 1 min | Templates pré-définis |
| Création document (process 3) | 3-5 min | Formulaire + génération |
| Nb alertes/transporteur/mois | 5-10 | Documents + actions + veille |

---

## Risques identifiés & mitigations

### Process 1
**Risque** : Taux abandon élevé au freemium  
**Mitigation** : Questions ultra-simples, scoring immédiat visible

### Process 3
**Risque** : Faible engagement abonnés  
**Mitigation** : Alertes proactives + création docs automatisée

### Process 4
**Risque** : Complexité module Empreinte Carbone  
**Mitigation** : Délégation via API partenaire (pas dev interne)

### Process 5
**Risque** : Upload documents incomplets/illisibles  
**Mitigation** : Vérification temps réel + OCR + guidage utilisateur

---

*Fin du document — ClearGo Récapitulatif Process*
