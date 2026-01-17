# ClearGo — Questions à clarifier avec Vivien

*Date : 16 janvier 2026*  
*Version : 3.0*  
*Destinataire : Vivien*

---

## 📌 Contexte

Ce document regroupe **toutes les questions bloquantes** qui nécessitent une décision de Vivien avant de pouvoir finaliser les spécifications techniques et le chiffrage du développement.

Les questions sont regroupées en **2 blocs thématiques** pour faciliter la discussion.

---

## 🔹 BLOC 1 : Consultant Externe (Interface B2B2C)

### Contexte
Certains transporteurs sont déjà accompagnés par des consultants externes. Il pourrait être intéressant de leur permettre d'utiliser ClearGo pour gérer leurs clients.

---

### ❓ Question 1.1 : Périmètre fonctionnel exact

**Le consultant externe doit-il avoir :**

| Fonctionnalité | Option A | Option B | Option C |
|----------------|----------|----------|----------|
| **Interface** | Accès simple multi-comptes (vue de plusieurs transporteurs dans la même interface) | Interface dédiée complètement séparée (portail consultant) | Pas d'interface spécifique (juste partage de diagnostics par email/PDF) |
| **Droits sur les plans d'action** | Lecture seule uniquement | Peut modifier les plans d'action de ses clients | Peut créer/modifier/valider les plans d'action |
| **Création de transporteurs** | Le consultant peut créer des comptes transporteurs | Le transporteur s'inscrit lui-même, puis invite le consultant | Les deux possibilités |

**💡 Recommandation :** Option A (interface simple multi-comptes) pour MVP, Option B (portail dédié) pour V2.

---

### ❓ Question 1.2 : Modèle tarifaire consultant

**Comment le consultant paie-t-il pour utiliser ClearGo ?**

| Option | Description | Avantages | Inconvénients |
|--------|-------------|-----------|---------------|
| **A. Par client géré** | Le consultant paie X€/mois par transporteur qu'il gère | Simple, scalable | Coût variable pour consultant |
| **B. Forfait global** | Le consultant paie un abonnement fixe (ex: 500€/mois) quel que soit le nombre de clients | Prévisible pour consultant | Moins rentable si peu de clients |
| **C. Crédits diagnostics** | Le consultant achète des "crédits diagnostic" (ex: pack de 10 diagnostics à 400€) qu'il revend à ses clients | Flexibilité maximale | Complexité gestion stocks |
| **D. Commission ClearGo** | Le transporteur paie, ClearGo reverse une commission au consultant (ex: 20%) | Pas d'avance de frais consultant | Complexité facturation |

**💡 Recommandation :** Option A (par client géré) pour simplicité, ou Option D (commission) si on veut faciliter l'adoption par les consultants.

---

### ❓ Question 1.3 : Permissions et cloisonnement

**Questions spécifiques :**

1. **Un consultant peut-il voir les données financières de ses clients ?**
   - ❌ Non (données sensibles)
   - ✅ Oui, mais uniquement ce qui concerne ClearGo (abonnement, factures ClearGo)
   - ✅ Oui, toutes les données financières

2. **Un transporteur peut-il avoir plusieurs consultants simultanément ?**
   - ❌ Non, 1 seul consultant à la fois
   - ✅ Oui, mais avec des périmètres différents (ex: consultant RSE + consultant GDP)
   - ✅ Oui, tous avec accès complet

3. **Le consultant peut-il être notifié des actions du transporteur ?**
   - ❌ Non, il doit se connecter pour voir
   - ✅ Oui, notifications par email (résumé hebdomadaire)
   - ✅ Oui, notifications temps réel (chaque action)

**💡 Recommandation :**
- Données financières : ❌ Non (RGPD)
- Plusieurs consultants : ✅ Oui, périmètres différents (V2)
- Notifications : ✅ Oui, résumé hebdomadaire

---

### ❓ Question 1.4 : Priorité du développement

**Quand développer l'interface consultant ?**

| Option | Timeline | Critères déclenchement |
|--------|----------|------------------------|
| **MVP** | Dès le lancement | Si demande avérée de consultants partenaires |
| **V1.1** | 3 mois post-MVP | Si 5+ consultants demandent cette fonctionnalité |
| **V2** | 6-12 mois post-MVP | Si marché B2B2C se confirme (20+ consultants) |
| **Jamais** | Hors périmètre | Si pas de demande / pas rentable |

**💡 Recommandation :** V2 (6-12 mois post-MVP) sauf si partenariat stratégique consultant identifié avant.

---

## 🔹 BLOC 2 : Gestion Multi-sites / Filiales

### Contexte
Certains transporteurs ont plusieurs sites (agences, filiales, établissements secondaires). Il faut définir comment gérer ces cas.

---

### ❓ Question 2.1 : Modèle de facturation

**Comment facturer un transporteur avec plusieurs sites ?**

| Option | Description | Exemple | Complexité |
|--------|-------------|---------|------------|
| **A. Par site** | Chaque site = 1 abonnement séparé | Transporteur avec 3 sites = 3 × 200€/mois = 600€/mois | Faible (simple) |
| **B. Forfait global** | 1 abonnement pour tous les sites (prix unique) | Transporteur avec 3 sites = 200€/mois (même prix) | Faible (risque perte revenus) |
| **C. Forfait + supplément par site** | 1 site = 200€/mois, sites additionnels = +100€/mois | Transporteur avec 3 sites = 200 + 100 + 100 = 400€/mois | Moyenne |
| **D. Volume par chauffeurs** | Facturation selon nombre total de chauffeurs (tous sites confondus) | 50 chauffeurs répartis sur 3 sites = 300€/mois (exemple) | Moyenne |

**💡 Recommandation :** Option C (forfait + supplément) pour équilibre rentabilité/attractivité.

---

### ❓ Question 2.2 : Cloisonnement des données

**Les sites doivent-ils avoir des données séparées ou partagées ?**

| Aspect | Option A : Cloisonné | Option B : Partagé | Option C : Hybride |
|--------|---------------------|--------------------|--------------------|
| **Documents** | Chaque site upload ses propres docs | Tous les docs visibles par tous les sites | Documents site-specific + documents groupe |
| **Actions correctives** | Chaque site a sa propre roadmap | 1 seule roadmap commune | Roadmap site + roadmap groupe |
| **Utilisateurs** | Utilisateurs assignés à un site | Utilisateurs accès tous sites | Utilisateurs avec périmètre configurable |
| **Score conformité** | 1 score par site | 1 score global groupe | 1 score par site + 1 score consolidé |

**💡 Recommandation :** Option C (Hybride) pour flexibilité maximale.

---

### ❓ Question 2.3 : Gestion des droits inter-sites

**Qui peut voir/modifier les données des autres sites ?**

| Profil | Accès données site A | Accès données site B | Accès données site C |
|--------|---------------------|---------------------|---------------------|
| **Dirigeant (siège)** | ✅ Full accès | ✅ Full accès | ✅ Full accès |
| **Manager site A** | ✅ Full accès | ❌ Aucun accès | ❌ Aucun accès |
| **Responsable Qualité groupe** | ✅ Lecture seule | ✅ Lecture seule | ✅ Lecture seule |

**Questions spécifiques :**

1. **Un manager de site A peut-il créer des actions pour le site B ?**
   - ❌ Non (cloisonnement strict)
   - ✅ Oui, si le dirigeant l'autorise
   - ✅ Oui, toujours (collaboration inter-sites)

2. **Les alertes sont-elles consolidées ou séparées par site ?**
   - Séparées (chaque site reçoit uniquement ses alertes)
   - Consolidées (dirigeant reçoit toutes les alertes)
   - Les deux (dirigeant = consolidé, manager site = site uniquement)

**💡 Recommandation :**
- Manager site : ❌ Aucun accès autres sites (sauf autorisation dirigeant)
- Alertes : Les deux (consolidé pour dirigeant, séparé pour managers)

---

### ❓ Question 2.4 : Identification des sites

**Comment identifier et gérer les sites dans le système ?**

| Méthode | Description | Avantages | Inconvénients |
|---------|-------------|-----------|---------------|
| **A. SIRET par site** | Chaque site = 1 SIRET unique | Traçabilité légale parfaite | Complexité saisie (multi-SIRET) |
| **B. Code site libre** | Transporteur définit un code (ex: "SITE-PARIS", "SITE-LYON") | Simple, flexible | Pas de validation légale |
| **C. Adresse** | Identification par adresse postale | Intuitif | Risque doublons si déménagement |
| **D. SIRET + code site** | Combinaison des deux (SIRET entreprise + code site) | Équilibre traçabilité/simplicité | Saisie un peu lourde |

**💡 Recommandation :** Option D (SIRET + code site) pour conformité légale + UX.

---

### ❓ Question 2.5 : Priorité du développement

**Quand développer la gestion multi-sites ?**

| Option | Timeline | Critères déclenchement |
|--------|----------|------------------------|
| **MVP** | Dès le lancement | Si clients pilotes identifiés ont plusieurs sites |
| **V1.1** | 3 mois post-MVP | Si 10+ transporteurs demandent cette fonctionnalité |
| **V2** | 6-12 mois post-MVP | Si marché ETI/Grands Groupes se confirme |
| **Jamais** | Hors périmètre | Si cible reste TPE/PME mono-site |

**💡 Recommandation :** V2 (6-12 mois post-MVP) sauf si client pilote multi-sites identifié avant.

---

## 🔹 BLOC 3 : Questions Complémentaires (Optionnelles)

### ❓ Question 3.1 : Modules optionnels — Priorité de lancement

**Dans quel ordre lancer les modules optionnels ?**

| Module | Complexité dev | Demande marché estimée | Priorité recommandée |
|--------|----------------|------------------------|----------------------|
| **GDP** | Élevée (référentiel complexe) | Moyenne (niche pharma) | 3e |
| **HACCP** | Moyenne (référentiel standard) | Moyenne (alimentaire) | 2e |
| **ADR** | Élevée (référentiel très technique) | Faible (niche dangereuses) | 4e |
| **Empreinte Carbone** | Faible si API externe | Forte (tendance RSE) | 1er |

**💡 Recommandation :** Lancer dans cet ordre :
1. Empreinte Carbone (via API partenaire) — V2
2. HACCP (demande alimentaire) — V2
3. GDP (si clients pharma identifiés) — V3
4. ADR (si demande avérée) — V3

**Question pour Vivien :** Es-tu d'accord avec cet ordre ? Y a-t-il des clients pilotes identifiés pour GDP/HACCP/ADR ?

---

### ❓ Question 3.2 : Freemium — Contenu exact des 12 questions

**Les 12 questions freemium doivent-elles couvrir :**

| Domaine | Nb questions | Exemple question |
|---------|--------------|------------------|
| Inspection du Travail | 3 questions | "Avez-vous des registres du personnel à jour ?" |
| URSSAF | 2 questions | "Vos déclarations sociales sont-elles à jour ?" |
| Accidents du Travail | 2 questions | "Avez-vous un Document Unique d'Évaluation des Risques (DUER) ?" |
| Tachygraphe & Temps conduite | 2 questions | "Vos chauffeurs ont-ils des cartes conducteurs valides ?" |
| Facturation électronique 2026 | 2 questions | "Êtes-vous prêt pour la facturation électronique (septembre 2026) ?" |
| Normes environnementales | 1 question | "Vos véhicules de +3,5t sont-ils conformes Euro 6 ?" |

**💡 Recommandation :** Valider cette répartition avec Vivien ou ajuster selon priorités métier.

**Question pour Vivien :** Ces 12 questions te semblent-elles pertinentes pour le freemium ? Faut-il en modifier certaines ?

---

### ❓ Question 3.3 : E-learning — Contenu MVP

**Quels modules e-learning inclure dans le MVP ?**

| Module | Durée | Public cible | Priorité |
|--------|-------|--------------|----------|
| Introduction RSE transport | 15 min | Dirigeants | ✅ MVP |
| Inspection du Travail : ce qu'il faut savoir | 20 min | Dirigeants, Managers | ✅ MVP |
| URSSAF : éviter les erreurs | 20 min | Dirigeants | ✅ MVP |
| Accidents du Travail : prévention et déclaration | 30 min | Tous | ✅ MVP |
| Tachygraphe Gen2 : nouveautés 2026 | 15 min | Chauffeurs, Managers | ✅ MVP |
| Facturation électronique : se préparer | 20 min | Dirigeants | ⚠️ V1.1 |
| FIMO/FCO : obligations formation chauffeurs | 30 min | Managers | ⚠️ V2 |

**💡 Recommandation :** 5 modules MVP (total ~2h de contenu), extensible V2.

**Question pour Vivien :** Ces modules te semblent-ils suffisants pour le MVP ? Faut-il en prioriser d'autres ?

---

### ❓ Question 3.4 : Partenariats stratégiques

**Y a-t-il des partenariats à anticiper dès le MVP ?**

| Partenaire potentiel | Intérêt | Impact développement |
|---------------------|---------|----------------------|
| **Cabinet juridique** | Validation base connaissances réglementaire | Moyen (veille légale) |
| **Organisme formation** | E-learning FIMO/FCO | Faible (intégration simple) |
| **Solution Empreinte Carbone** | Module CO2 (API) | Moyen (intégration API) |
| **Consultant partenaire** | Tests interface B2B2C | Élevé (besoin réel à valider) |
| **Assureur** | Réduction prime si conformité ClearGo | Faible (commercial) |

**Question pour Vivien :** As-tu identifié des partenaires stratégiques à intégrer dès le MVP ou V2 ?

---

## 📊 Récapitulatif des décisions attendues

### 🚨 Bloquantes pour le MVP

| Question | Impact | Décision attendue |
|----------|--------|-------------------|
| **Multi-sites : modèle facturation** | Élevé | Option C recommandée (forfait + supplément) |
| **Freemium : 12 questions exactes** | Moyen | Valider ou ajuster la liste proposée |
| **E-learning : modules MVP** | Moyen | Valider ou ajuster les 5 modules proposés |

### ⚠️ Importantes pour la V2

| Question | Impact | Décision attendue |
|----------|--------|-------------------|
| **Consultant externe : périmètre** | Élevé | Valider si V2 ou hors scope |
| **Consultant externe : modèle tarifaire** | Élevé | Choisir entre options A/B/C/D |
| **Multi-sites : cloisonnement données** | Moyen | Option C recommandée (hybride) |
| **Modules optionnels : ordre lancement** | Moyen | Valider priorités (CO2 > HACCP > GDP > ADR) |

### ✅ Optionnelles (à discuter)

| Question | Impact | Décision attendue |
|----------|--------|-------------------|
| **Partenariats stratégiques** | Variable | Identifier partenaires prioritaires |
| **Consultant externe : priorité dev** | Faible | V2 recommandé (sauf client pilote) |
| **Multi-sites : priorité dev** | Faible | V2 recommandé (sauf client pilote) |

---

## 🎯 Prochaines étapes

### Actions Vivien
1. **Lire ce document** (30 min)
2. **Répondre aux questions bloquantes** (BLOC 1 + BLOC 2)
3. **Valider les recommandations** ou proposer alternatives
4. **Identifier clients pilotes** (si multi-sites ou consultant externe souhaité au MVP)

### Actions équipe
1. Attendre décisions Vivien
2. Finaliser spécifications techniques
3. Chiffrer développement MVP
4. Planifier roadmap V2

---

## 📅 Deadline recommandée

**Date souhaitée pour les réponses : [À DÉFINIR]**

Pour respecter le planning de développement, il serait idéal d'avoir les réponses sous **7 jours ouvrés** maximum.

---

*Fin du document — Questions pour Vivien*

**📧 Merci de répondre directement dans ce document ou lors d'une réunion de cadrage.**
