# ClearGo — Réponses au Questionnaire de Cadrage Fonctionnel & Technique

*Date : 16 janvier 2026*  
*Version : 3.0 — Validée*  
*Destinataire : Équipe de développement*

---

## 🔹 A. Vision & Objectifs Business

### 1. Quel problème métier précis ClearGo cherche-t-il à résoudre ?

**Réponse :**
ClearGo résout **3 problèmes majeurs** des petits transporteurs routiers :

1. **🚨 Peur des contrôles** (Inspection du Travail, URSSAF, Accidents du Travail)
   - Manque de visibilité sur la conformité réglementaire
   - Risque de sanctions lourdes
   - Stress permanent face aux inspections

2. **📋 Complexité administrative RH**
   - Suivi des chauffeurs (formations, habilitations, enregistrements)
   - Déclarations sociales URSSAF
   - Gestion des accidents du travail

3. **💰 Coût prohibitif du consulting traditionnel**
   - Consultants facturent 400€/jour (TJM)
   - Pas de suivi continu
   - Pas accessible aux TPE/PME

**Problèmes secondaires :**
- Délais trop longs pour mise en conformité
- Nouvelles obligations 2026 (Tachygraphe Gen2, Facturation électronique)

---

### 2. Quel est l'objectif principal de la plateforme à court et moyen terme ?

**Court terme (6-12 mois) — MVP :**
- ✅ Diagnostic automatisé conformité RSE
- ✅ Accompagnement de bout en bout (abonnement)
- ✅ Sécurisation face aux contrôles

**Moyen terme (12-24 mois) — V2 :**
- Modules optionnels (GDP, HACCP, ADR, Empreinte Carbone)
- Interface consultant externe (B2B2C)
- Gestion multi-sites/filiales

**Pas dans le scope initial :**
- Audit blanc physique (nécessite présence terrain)
- Intégration ERP transporteur (complexité trop élevée)

---

### 3. Quels sont les objectifs business mesurables ?

| Métrique | Objectif | Horizon |
|----------|----------|---------|
| **Nombre de transporteurs accompagnés** | 500 | 12 mois |
| **Taux de réussite conformité** | 100% | Cible continue |
| **Temps moyen mise en conformité** | < 3 mois | Post-abonnement |
| **Réduction coût vs consulting** | 75% | (200€/mois vs 400€/jour) |
| **Taux conversion freemium → payant** | 15-20% | KPI principal |
| **Taux rétention abonnement** | > 85% | À 12 mois |
| **NPS (satisfaction client)** | > 50 | Suivi trimestriel |

---

### 4. ClearGo est-il pensé comme :

**Réponse : Hybride IA + Humain (mais majoritairement automatisé)**

- **80% self-service SaaS** : Diagnostic IA, alertes automatiques, création documents
- **20% humain** : Support, validation complexe, cas limites
- **Option future** : Outil pour consultants (interface B2B2C)

**Pas prévu dans MVP :**
- Support 24/7
- Accompagnement terrain physique

---

## 🔹 B. Cibles & Profils Utilisateurs

### 5. Quels sont tous les profils utilisateurs de la plateforme ?

| Profil | Rôle métier | Droits & permissions | Actions possibles | Données accessibles | Données modifiables |
|--------|-------------|----------------------|-------------------|---------------------|---------------------|
| **Transporteur (Dirigeant)** | Payeur principal, décisionnaire | Full accès admin | Gestion utilisateurs, paiements, validation finale | Toutes données entreprise | Toutes |
| **Manager / Responsable exploitation** | Opérationnel quotidien | Accès partiel | Upload docs, saisie données, suivi actions | Vue globale, pas finance | Documents, actions opérationnelles |
| **Responsable Qualité** | Gestionnaire conformité | Accès étendu | Gestion actions correctives, suivi jalons, e-learning | Conformité, formations, audits | Actions correctives, procédures |
| **Consultant externe** | Prestataire B2B2C | Interface dédiée multi-clients | Gestion clients, lecture diagnostics, suivi | Vue consolidée clients | Selon config client |
| **Chauffeur** | Personnel terrain | Accès limité (futur MVP v2) | Consultation formations, validation permis | Ses propres données uniquement | Aucune |

**Note importante :**
- Responsable Qualité **n'existe pas toujours** chez petits transporteurs (raison d'être de ClearGo)
- Chauffeur : accès mobile prévu v2, pas MVP

---

### 6. Pour chaque profil, préciser : (voir tableau ci-dessus)

✅ **Réponse intégrée dans le tableau question 5**

---

### 7. Côté transporteur, qui est l'interlocuteur principal ?

**Réponse : Dirigeant (gérant, PDG, président)**

**Interlocuteurs secondaires possibles :**
- Responsable exploitation (si structure > 10 chauffeurs)
- Responsable qualité (si existant, rare en TPE/PME)

**Critère de décision d'achat :**
- C'est toujours le dirigeant qui paie
- Mais validation terrain peut venir du responsable exploitation

---

### 8. Un transporteur peut-il avoir plusieurs utilisateurs sur la plateforme ?

**Réponse : OUI**

**Cas d'usage :**
1. **TPE (1-5 chauffeurs)** : 1 seul utilisateur (dirigeant)
2. **PME (5-20 chauffeurs)** : 2-3 utilisateurs (dirigeant + manager + responsable qualité)
3. **ETI (20-50 chauffeurs)** : 3-5 utilisateurs (dirigeant + plusieurs managers + responsable qualité)

**Gestion des droits :**
- ✅ Par rôle (voir question 5)
- ✅ Par entreprise (données cloisonnées)
- ⚠️ **Question en suspens** : Gestion multi-sites/filiales → À clarifier avec Vivien

---

## 🔹 C. Modèle Économique

### 9. Quel est le modèle économique exact ?

**Réponse : Modèle hybride freemium + abonnement**

#### Étape 1 : Freemium (gratuit)
- 12 questions diagnostic RSE de base
- Score de conformité global
- Alertes risques immédiats
- **Objectif** : Frustration contrôlée → conversion

#### Étape 2 : Diagnostic complet (paiement unique)
- Diagnostic approfondi par domaine
- Plan d'action détaillé personnalisé
- Priorisation des risques
- **Prix estimé** : ~50-100€ (one-shot)

#### Étape 3 : Accompagnement (abonnement)
- Suivi mensuel des actions correctives
- Alertes automatiques
- Création documents
- E-learning
- **Prix cible** : 150-200€/mois (ou 1500-2000€/an avec réduction)

#### Étape 4 (optionnelle) : Modules spécialisés
- GDP / HACCP / ADR / Empreinte Carbone
- **Prix** : +50-100€/mois selon module

---

### 10. Quels services sont inclus dans chaque offre ?

| Service | Freemium | Diagnostic complet | Abonnement | Modules optionnels |
|---------|----------|--------------------|-----------|--------------------|
| 12 questions RSE | ✅ | ✅ | ✅ | ✅ |
| Score conformité global | ✅ | ✅ | ✅ | ✅ |
| Analyse détaillée par domaine | ❌ | ✅ | ✅ | ✅ |
| Plan d'action personnalisé | ❌ | ✅ | ✅ | ✅ |
| Suivi mensuel actions | ❌ | ❌ | ✅ | ✅ |
| Alertes automatiques | Limitées | Limitées | ✅ | ✅ |
| Création documents IA | ❌ | ❌ | ✅ | ✅ |
| E-learning | ❌ | ❌ | ✅ | ✅ |
| Support prioritaire | ❌ | ❌ | ✅ | ✅ |
| Modules spécialisés | ❌ | ❌ | ❌ | ✅ |

---

### 11. Y a-t-il des options payantes supplémentaires ?

**Réponse :**

#### ✅ Options disponibles (payantes)
- **Modules spécialisés** : GDP, HACCP, ADR, Empreinte Carbone (+50-100€/mois)
- **Formation en ligne** : Modules e-learning avancés (potentiel upsell)
- **Accès ressources premium** : Templates documents avancés, FAQ expert

#### ❌ Options NON disponibles (hors scope MVP)
- Sessions de consulting individuel (pas le métier)
- Audit blanc physique (nécessite présence terrain)
- Accompagnement terrain (ressources insuffisantes)

**Note** : Possibilité de partenariats avec consultants externes pour ces services.

---

### 12. Comment sont gérés les paiements ?

**Réponse :**

#### Méthode de paiement
- ✅ **Paiement en ligne** (carte bancaire)
- ✅ **Prélèvement automatique** (pour abonnement)
- ⚠️ Facturation classique (virement) → À évaluer selon demande

#### PSP (Payment Service Provider)
- ✅ **Stripe** (mentionné dans retranscriptions)
- Alternative possible : Gocardless (prélèvement SEPA)

#### Workflow paiement
1. Diagnostic complet : Paiement one-shot avant accès résultats
2. Abonnement : Prélèvement mensuel/annuel automatique
3. Modules optionnels : Facturation additionnelle sur abonnement

#### Facturation
- Génération automatique factures (conformité facturation électronique 2026)
- Historique accessible dans espace client
- TVA applicable (20% France)

---

## 🔹 D. Processus Métier – Parcours Transporteur (CRITIQUE)

### 13. Décrire le cycle de vie complet d'un accompagnement

**Réponse :**

#### Phase 1 : Acquisition (Freemium)
1. **Inscription** : Email + mot de passe
2. **Onboarding** : 12 questions RSE de base (5-10 min)
3. **Score immédiat** : Vue globale conformité + alertes risques
4. **Teasing** : Incitation diagnostic complet

#### Phase 2 : Diagnostic complet (Payant)
5. **Paiement** : Carte bancaire via Stripe (~50-100€)
6. **Collecte documentaire** :
   - Autorisation d'exercer
   - Nombre chauffeurs/véhicules
   - Cartes conducteurs (si poids lourds)
7. **Analyse IA** : Traitement automatisé (< 2 min)
8. **Diagnostic / Scoring** : Note par domaine RSE
9. **Génération roadmap** : Plan d'action personnalisé priorisé

#### Phase 3 : Choix transporteur
10. **Option A** : Applique lui-même → Exit
11. **Option B** : Souscrit abonnement → Phase 4
12. **Option C** : Partage avec consultant externe → Suivi délégué

#### Phase 4 : Accompagnement (Abonnement)
13. **Suivi des actions correctives** : Validation jalons progressifs
14. **Validation des jalons** : Marquage actions terminées
15. **Création documents** : Templates IA (recadrage, non-conformité, etc.)
16. **E-learning** : Formation continue chauffeurs/managers
17. **Alertes** : Expiration documents, nouvelles obligations

#### Phase 5 (optionnelle) : Modules spécialisés
18. **Activation module** : GDP, HACCP, ADR, CO2
19. **Analyse spécialisée** : Selon référentiel choisi
20. **Plan complémentaire** : Actions additionnelles

#### Phase 6 : Clôture / Certification
21. **Dossier de conformité** : Export complet pour inspection
22. ~~Audit blanc~~ (hors MVP) : Pas de présence physique
23. **Certificat de conformité** : Attestation 100% conforme (si validé)

**⚠️ Important** : Audit blanc physique **hors scope MVP** (nécessite présence terrain).

---

### 14. Quels documents sont attendus du transporteur ?

**Réponse :**

| Document | Obligatoire | Optionnel | Format attendu | Critères acceptation |
|----------|-------------|-----------|----------------|----------------------|
| **Autorisation d'exercer** | ✅ | | PDF, scan, image | Lisible, date validité visible |
| **Nombre de chauffeurs** | ✅ | | Saisie manuelle | Nombre entier > 0 |
| **Nombre de véhicules** | ✅ | | Saisie manuelle | Nombre entier > 0 |
| **Cartes conducteurs** | Si poids lourds | VUL < 3,5t | PDF, scan | Validité > 30j |
| **Permis de conduire chauffeurs** | | ✅ | PDF, scan | Validité OK |
| **Certificat Euro 6** | Si 44 tonnes | | PDF | Date immatriculation > 01/01/2014 |
| **Procédures qualité existantes** | | ✅ | PDF, Word | Lisible |
| **Plan de formation** | | ✅ | PDF, Excel | Structuré |
| **Cartographie locaux/véhicules** | | ✅ (GDP) | PDF, image | Clair |
| **Certificats étalonnage** | | ✅ (GDP) | PDF | Validité OK |
| **Contrats sous-traitants** | | ✅ | PDF | Signés |

**⚠️ Documents RETIRÉS (trop éliminatoires) :**
- ❌ Consommation carburant flotte (module Empreinte Carbone optionnel uniquement)

---

### 15. Pour chaque document, préciser : (voir tableau ci-dessus)

✅ **Réponse intégrée dans le tableau question 14**

**Précisions supplémentaires :**

#### Critères d'acceptation détaillés
- **Lisibilité** : OCR doit pouvoir extraire texte (sinon demande re-upload)
- **Date de validité** : Vérification automatique (alerte si < 30j avant expiration)
- **Cohérence** : Cross-check avec données saisies (ex: nb chauffeurs vs permis uploadés)

#### Gestion documents incomplets
- Upload progressif autorisé (pas bloquant)
- Relances automatiques pour documents manquants
- Score conformité ajusté selon complétude

---

### 16. Quelles actions sont impossibles si une étape n'est pas validée ?

**Réponse :**

| Étape non validée | Actions bloquées | Raison |
|-------------------|------------------|--------|
| **Pas de paiement diagnostic** | Accès plan d'action détaillé | Paywall |
| **Documents minimaux manquants** | Génération roadmap complète | Analyse IA impossible |
| **Abonnement inactif** | Suivi actions, alertes, création docs | Service payant |
| **Module optionnel non activé** | Analyse GDP/HACCP/ADR/CO2 | Paywall additionnel |
| **Actions critiques non terminées** | Validation jalon final | Conformité incomplète |

**⚠️ Particularités :**
- Diagnostic freemium : **Rien n'est bloqué** (100% gratuit, juste limité)
- Documents manquants : **Scoring dégradé** mais roadmap générée quand même
- Actions correctives : **Pas de hard-block** (suivi continu, pas one-shot)

**Philosophie produit :** Accompagner progressivement, pas bloquer brutalement.

---

## 🔹 E. Base de Connaissances GDP

### 17. Quelle est la source de la base de connaissances ?

**Réponse :**

**Priorité 1 : Conformité RSE (pas uniquement GDP)**
1. **Textes réglementaires officiels** :
   - Code du Travail (Inspection du Travail)
   - Code de la Sécurité Sociale (URSSAF, AT)
   - Règlement CE n°561/2006 (Temps de conduite & repos)
   - Paquet Mobilité européen (Tachygraphe Gen2)
   - Loi facturation électronique 2026

2. **Guides de bonnes pratiques** :
   - ADEME (si module Empreinte Carbone)
   - INRS (prévention accidents du travail)
   - Ministère des Transports

3. **Retours d'expérience internes** :
   - Jurisprudence inspections
   - Cas pratiques transporteurs

**Priorité 2 : Modules optionnels**
4. **GDP** : Directive 2013/C 343/01 + ANSM
5. **HACCP** : Règlement CE 852/2004
6. **ADR** : Accord européen transport matières dangereuses

---

### 18. Qui est responsable de la mise à jour de la base de connaissances ?

**Réponse :**

#### Responsabilité
- **Équipe interne ClearGo** (veille réglementaire)
- Possible **partenariat cabinet juridique** (validation légale)

#### Processus de veille
1. **Automatique** : Abonnement flux officiels (Légifrance, JOUE)
2. **Manuelle** : Revue trimestrielle textes applicables
3. **Reactive** : Alerte immédiate sur nouveaux textes critiques

#### Fréquence mise à jour
- **Critique** : Sous 48h (nouvelle obligation majeure)
- **Importante** : Sous 1 semaine (changement réglementaire)
- **Standard** : Mensuelle (enrichissement base)

---

### 19. La base de connaissances doit-elle être :

**Réponse :**

| Critère | Statut | Détails |
|---------|--------|---------|
| **Versionnée** | ✅ OUI | Traçabilité des changements |
| **Traçable (historique)** | ✅ OUI | Audit trail complet |
| **Accessible aux utilisateurs** | ✅ PARTIELLEMENT | - Synthèses vulgarisées : OUI<br/>- Textes bruts complets : PREMIUM |

**Workflow mise à jour :**
1. Nouveau texte détecté
2. Analyse impact (quels transporteurs concernés ?)
3. Notification automatique utilisateurs concernés
4. Mise à jour base de connaissances
5. Ajustement scoring conformité si nécessaire

---

### 20. Quelles informations la base doit-elle contenir ?

**Réponse :**

#### Obligatoire (MVP)
- ✅ **Exigences réglementaires** : Articles, références légales
- ✅ **Critères d'évaluation** : Par domaine RSE
- ✅ **FAQ cas pratiques** : Situations transporteurs réelles
- ✅ **Synthèses vulgarisées** : Textes loi simplifiés

#### Optionnel (V2)
- Modèles de documents conformes (templates Word/PDF)
- Vidéos explicatives
- Webinaires archives

**Structure base de connaissances :**

```
Domaines RSE
├── Inspection du Travail
│   ├── Textes applicables
│   ├── Critères d'évaluation
│   ├── FAQ cas pratiques
│   └── Synthèses vulgarisées
├── URSSAF
│   └── ...
├── Accidents du Travail
│   └── ...
├── Tachygraphe & Temps conduite
│   └── ...
└── Facturation électronique 2026
    └── ...
```

---

## 🔹 F. Analyse IA & Scoring (ZONE CRITIQUE)

### F1. Analyse documentaire

#### 21. Quels types d'analyse l'IA doit-elle effectuer ?

**Réponse :**

| Type d'analyse | Description | Priorité MVP |
|----------------|-------------|--------------|
| **Extraction informations clés** | OCR + NER (dates, noms, numéros) | ✅ Critique |
| **Vérification conformité** | Comparaison vs référentiel réglementaire | ✅ Critique |
| **Détection documents manquants** | Cross-check vs liste obligatoire | ✅ Critique |
| **Analyse cohérence** | Nb chauffeurs déclaré vs permis uploadés | ✅ Important |
| **Extraction données structurées** | Parsing tableaux (ex: plan formation) | ⚠️ V2 |

**Cas limites :**
- Document illisible → Demande re-upload
- Document ambigu → Escalade humain (support)
- Document manquant → Scoring dégradé + relance

---

#### 22. Comment l'IA traite-t-elle les documents ?

**Réponse :**

#### Stack technique recommandée
1. **OCR** : Tesseract / Google Cloud Vision (pour scans)
2. **Parsing PDF structurés** : PyPDF2 / pdfplumber
3. **Analyse texte libre** : spaCy / HuggingFace Transformers (NER)
4. **Reconnaissance formulaires** : LayoutLM (si formulaires standardisés)

#### Workflow traitement
```
Upload PDF
    ↓
[OCR si scan] → Texte brut
    ↓
[NER] → Extraction entités (dates, noms, numéros)
    ↓
[Comparaison référentiel] → Vérification conformité
    ↓
[Scoring] → Attribution note
    ↓
[Génération insights] → Recommandations actions
```

**Temps traitement cible :** < 2 min par document

---

#### 23. Quels sont les critères d'évaluation par domaine GDP ?

**⚠️ CORRECTION : Critères d'évaluation par domaine RSE (pas uniquement GDP)**

**Réponse :**

| Domaine RSE | Critères d'évaluation | Pondération | Documents attendus |
|-------------|----------------------|-------------|--------------------|
| **1. Inspection du Travail** | - Enregistrements chauffeurs à jour<br/>- Registres obligatoires tenus<br/>- Conformité temps travail | 25% | Registres, plannings |
| **2. URSSAF** | - Déclarations sociales à jour<br/>- Cotisations payées<br/>- Cohérence effectifs | 25% | Attestations URSSAF |
| **3. Accidents du Travail** | - Déclarations AT dans délais<br/>- Document Unique à jour<br/>- Formations sécurité | 20% | DUER, fiches AT |
| **4. Tachygraphe & Temps conduite** | - Cartes conducteurs valides<br/>- Respect temps conduite/repos<br/>- Tachygraphe Gen2 (2026) | 15% | Cartes, relevés |
| **5. Facturation électronique 2026** | - Préparation solution e-facture<br/>- Identification PSP<br/>- Formation équipe | 10% | Contrat PSP |
| **6. Normes environnementales** | - Véhicules Euro 6 si 44t<br/>- Conformité contrôle technique | 5% | Certificats véhicules |

**Scoring global :** Moyenne pondérée des 6 domaines

**Pour modules optionnels (GDP, HACCP, ADR) :**
- Critères additionnels selon référentiel spécifique
- Pondération ajustée (domaines optionnels = 30%, RSE base = 70%)

---

### F2. Scoring & Notation

#### 24. Comment le score global est-il calculé ?

**Réponse :**

#### Méthode de calcul
**Score global = Moyenne pondérée par domaine RSE**

```python
score_global = (
    0.25 * score_inspection +
    0.25 * score_urssaf +
    0.20 * score_accidents +
    0.15 * score_tachygraphe +
    0.10 * score_facturation +
    0.05 * score_environnement
) / 100
```

**Échelle de notation :** 0 à 100 points

**Catégorisation :**
- 🔴 **0-40 points** : Non conforme (risque élevé)
- 🟠 **41-70 points** : Partiellement conforme (attention)
- 🟢 **71-100 points** : Conforme (sécurisé)

---

#### 25. Quels sont les seuils de décision ?

**Réponse :**

| Seuil | Signification | Actions automatiques |
|-------|---------------|----------------------|
| **< 40 points** | Risque critique | - Alerte rouge immédiate<br/>- Recommandation abonnement urgent<br/>- Priorisation actions critiques |
| **< 60 points** | Non prêt pour inspection | - Alerte orange<br/>- Roadmap 3 mois minimum |
| **≥ 80 points** | Prêt pour inspection | - Badge vert<br/>- Génération dossier conformité |
| **= 100 points** | Conformité totale | - Certificat ClearGo<br/>- Félicitations |

**Classification des écarts :**
- **Critique** : Manquement légal majeur (ex: pas d'autorisation exercer) → Action immédiate
- **Majeur** : Non-conformité importante (ex: DUER absent) → Action < 30j
- **Mineur** : Amélioration recommandée (ex: procédure non formalisée) → Action < 90j

---

#### 26. Le score est-il :

**Réponse :**

| Caractéristique | Statut | Détails |
|-----------------|--------|---------|
| **Calculé automatiquement** | ✅ OUI | IA analyse documents → scoring immédiat |
| **Validé par un humain** | ⚠️ CAS LIMITES UNIQUEMENT | - Documents ambigus<br/>- Incohérences détectées<br/>- Score critique (< 40) |
| **Modifiable manuellement** | ❌ NON (sauf admin) | Garantit objectivité<br/>Admin peut forcer recalcul si bug |

**Workflow validation humaine (cas limites) :**
1. IA détecte incohérence
2. Dossier escaladé → queue support
3. Humain analyse → valide ou corrige
4. Score mis à jour + notification transporteur

**Fréquence validation humaine estimée :** < 5% des cas

---

#### 27. Comment gérer les cas ambigus ou les documents incomplets ?

**Réponse :**

#### Stratégie de gestion

| Situation | Action automatique | Action transporteur | Impact scoring |
|-----------|-------------------|---------------------|----------------|
| **Document illisible** | Demande re-upload + guidage photo | Re-upload clair | Domaine = 0 (temporaire) |
| **Document manquant** | Relance email J+3, J+7, J+14 | Upload document | Domaine = 0 (temporaire) |
| **Information ambiguë** | Escalade support (si critique) | Clarification via chat | Scoring "en attente" |
| **Données incohérentes** | Alerte automatique + demande vérif | Correction données | Blocage temporaire |

#### Workflow cas ambigus
```
IA détecte ambiguïté
    ↓
[Critique ?]
    ↓ OUI → Escalade humain (< 24h)
    ↓ NON → Demande complément auto
    ↓
Transporteur répond
    ↓
Recalcul score
```

**Score "en attente" :**
- Affiché comme "⏳ Analyse en cours"
- Pas de blocage complet (roadmap partielle générée)
- Notification dès résolution

---

### F3. Génération de la Roadmap

#### 28. Comment la roadmap est-elle générée ?

**Réponse :**

#### Méthode de génération
**Hybride : Templates standardisés + Personnalisation IA**

1. **Actions standardisées par type d'écart**
   - Base de données 200+ actions précodées
   - Exemple : "Absence DUER" → Action "Créer Document Unique"

2. **Personnalisation selon contexte transporteur**
   - Taille flotte (nb chauffeurs/véhicules)
   - Type activité (VUL, PL, spécialisé)
   - Ressources disponibles (temps, budget)

3. **Priorisation automatique**
   - Critères : Risque légal × Urgence × Impact
   - Algorithme : Scoring pondéré

**Exemple concret :**
```
Écart détecté : "Pas de carte conducteur valide pour 3/5 chauffeurs"
    ↓
Action générée : "Demander renouvellement cartes conducteurs"
    ↓
Personnalisation :
    - Délai : 30j (validité carte)
    - Ressources : Template demande préfecture
    - Responsable suggéré : Dirigeant
    - Priorité : CRITIQUE (risque immobilisation)
```

---

#### 29. Quels éléments composent la roadmap ?

**Réponse :**

| Élément | Description | Exemple |
|---------|-------------|---------|
| **Actions correctives** | Liste priorisée tâches à réaliser | "Créer DUER", "Former chauffeurs FIMO" |
| **Délais recommandés** | Échéance réaliste par action | "Sous 15j", "Avant 01/07/2026" |
| **Ressources / Modèles** | Templates, guides, liens utiles | Template DUER, Guide FIMO |
| **Responsables suggérés** | Qui doit faire l'action | Dirigeant, Manager, Responsable Qualité |
| **Dépendances** | Actions bloquantes | "Former chauffeurs" dépend de "Réserver session FIMO" |
| **Coût estimé** | Budget action (si applicable) | "~500€ formation FIMO/chauffeur" |

**Format roadmap :**
- Vue Kanban (À faire / En cours / Terminé)
- Vue Gantt (timeline si > 10 actions)
- Vue Liste (export PDF pour impression)

---

#### 30. La roadmap peut-elle être modifiée ?

**Réponse :**

| Acteur | Peut modifier | Permissions | Traçabilité |
|--------|---------------|-------------|-------------|
| **Transporteur (Dirigeant)** | ✅ OUI | - Réordonner actions<br/>- Changer délais<br/>- Marquer "Terminé"<br/>- Ajouter actions custom | ✅ Historique complet |
| **Manager / Responsable Qualité** | ✅ OUI (limité) | - Marquer "En cours"<br/>- Ajouter commentaires | ✅ Historique |
| **Consultant externe** | ⚠️ SELON CONFIG | Droits définis par dirigeant | ✅ Historique |
| **Support ClearGo** | ✅ OUI (admin) | Correction bugs, ajustements | ✅ Historique + log |

**Traçabilité des modifications :**
- Qui a modifié
- Quand
- Quoi (ancien vs nouveau)
- Pourquoi (commentaire optionnel)

**Workflow modification :**
```
Transporteur modifie délai action
    ↓
Enregistrement historique
    ↓
Recalcul timeline globale
    ↓
Alerte si nouveau risque détecté
```

**Philosophie :** Roadmap = outil vivant, pas figé

---

## 🔹 G. Accompagnement Humain & Support

### 31. Quel est le rôle de l'équipe support/consulting ?

**Réponse :**

#### Rôles principaux (ordre de priorité)

| Rôle | Description | Volume estimé |
|------|-------------|---------------|
| **1. Réponse questions complexes** | Cas ambigus, interprétation réglementaire | 60% activité |
| **2. Validation analyses IA (cas limites)** | Documents illisibles, incohérences | 20% activité |
| **3. Onboarding clients** | Accompagnement premiers pas, formation outil | 15% activité |
| **4. Formation** | Webinaires groupe, e-learning | 5% activité |

**❌ PAS dans le scope support :**
- Accompagnement terrain physique (hors MVP)
- Audit blanc (nécessite présence)
- Conseil stratégique approfondi (pas le métier)

---

### 32. Comment s'articule le mix IA / Humain ?

**Réponse :**

**Règle 80/20 : 80% IA automatisée, 20% humain**

| Tâche | Qui ? | Quand ? |
|-------|-------|---------|
| Diagnostic conformité | 🤖 IA | Toujours |
| Génération roadmap | 🤖 IA | Toujours |
| Alertes automatiques | 🤖 IA | Toujours |
| Création documents standards | 🤖 IA | Toujours |
| Réponse FAQ simples | 🤖 Chatbot | Toujours |
| **Cas ambigus documents** | 👤 Humain | Si IA < 80% confiance |
| **Interprétation réglementaire** | 👤 Humain | Sur demande |
| **Validation finale critique** | 👤 Humain | Score < 40 |
| **Onboarding personnalisé** | 👤 Humain | Clients > 20 chauffeurs |

**Workflow escalade IA → Humain :**
```
IA traite demande
    ↓
[Confiance IA > 80% ?]
    ↓ OUI → Réponse automatique
    ↓ NON → Escalade support humain
```

---

### 33. Quels sont les canaux de communication avec le support ?

**Réponse :**

| Canal | Disponible | Priorité | SLA cible |
|-------|-----------|----------|-----------|
| **Chat intégré** | ✅ MVP | Haute | < 2h (heures ouvrées) |
| **Email** | ✅ MVP | Moyenne | < 24h |
| **Téléphone** | ⚠️ Premium uniquement | Basse | Sur RDV |
| **Visioconférence** | ⚠️ Sur demande | Basse | Sur RDV |

**Priorisation canaux :**
1. Chat in-app (réactivité + traçabilité)
2. Email (questions complexes)
3. Téléphone (cas urgents premium)

**Chatbot IA (première ligne) :**
- Répond FAQ simples
- Redirige vers humain si nécessaire
- Disponible 24/7

---

### 34. Quel est le SLA attendu pour le support ?

**Réponse :**

#### SLA par niveau priorité

| Priorité | Définition | Temps réponse | Temps résolution | Canaux |
|----------|------------|---------------|------------------|--------|
| **P0 - Critique** | Plateforme HS, bug bloquant | < 1h | < 4h | Chat, Email, Tel |
| **P1 - Haute** | Fonctionnalité majeure cassée | < 2h | < 24h | Chat, Email |
| **P2 - Moyenne** | Question complexe, cas limite | < 24h | < 3j | Chat, Email |
| **P3 - Basse** | Amélioration, question générale | < 48h | < 7j | Email |

**Disponibilité :**
- **Heures ouvrées** : Lundi-Vendredi 9h-18h (France)
- **Hors heures ouvrées** : Chatbot IA uniquement
- **Weekends** : Pas de support humain (sauf P0)

**Niveaux de priorité automatiques :**
- Score < 40 + demande support → P1
- Bug signalé → P2 (escalade P1 si confirmé bloquant)
- Question FAQ → P3

---

### 35. L'équipe support a-t-elle besoin d'outils spécifiques ?

**Réponse : OUI**

#### Outils nécessaires

| Outil | Fonction | Priorité MVP |
|-------|----------|--------------|
| **Interface gestion dossiers** | Vue consolidée tickets support | ✅ Critique |
| **Vue transporteurs** | Accès lecture dossiers clients | ✅ Critique |
| **Outils reporting** | Stats support (SLA, volume, satisfaction) | ✅ Important |
| **Base connaissances interne** | FAQ support, procédures escalade | ✅ Important |
| **Chat admin** | Réponse temps réel in-app | ✅ Critique |
| **Logs IA** | Debug erreurs analyse | ⚠️ V2 |

**Interface support recommandée :**
- Dashboard centralisant :
  - Queue tickets (triés par priorité)
  - Historique client
  - Données diagnostics
  - Actions en cours
  - Logs IA (si erreur)

**Permissions support :**
- Lecture seule dossiers clients
- Modification via validation client uniquement
- Accès admin pour debug technique

---

## 🔹 H. Conformité & Aspects Réglementaires

### 36. Quelles réglementations doivent être couvertes ?

**Réponse :**

#### Priorité 1 : Conformité RSE (MVP)
- ✅ **Code du Travail** (Inspection du Travail)
- ✅ **Code Sécurité Sociale** (URSSAF, Accidents du Travail)
- ✅ **Règlement CE n°561/2006** (Temps conduite & repos)
- ✅ **Paquet Mobilité européen** (Tachygraphe Gen2)
- ✅ **Loi facturation électronique 2026**
- ✅ **Normes Euro 6** (véhicules 44 tonnes)

#### Priorité 2 : Modules optionnels
- ⚠️ **GDP UE (2013/C 343/01)** (module optionnel)
- ⚠️ **ANSM Bonnes pratiques distribution** (module GDP)
- ⚠️ **Règlement CE 852/2004** (HACCP, module optionnel)
- ⚠️ **Accord ADR** (matières dangereuses, module optionnel)
- ⚠️ **ISO 14083** (Empreinte Carbone, module optionnel)

#### Hors scope initial
- ❌ Normes ISO transport (trop génériques)
- ❌ Réglementations stupéfiants/produits sanguins (niches trop spécifiques)

---

### 37. La plateforme doit-elle assurer :

**Réponse :**

| Obligation | Statut | Détails |
|------------|--------|---------|
| **Traçabilité complète échanges** | ✅ OUI | Historique actions, modifications, communications |
| **Journal d'audit** | ✅ OUI | Logs horodatés : Qui/Quoi/Quand |
| **Historique immuable** | ✅ OUI | Impossibilité suppression (soft delete uniquement) |
| **Conformité RGPD** | ✅ OUI | Données hébergées UE, droit à l'oubli, export données |

**Durée conservation (voir question 38)**

---

### 38. Quelle est la durée de conservation des données ?

**Réponse :**

| Type de données | Durée conservation | Base légale |
|-----------------|-------------------|-------------|
| **Dossiers transporteurs** | 10 ans après fin contrat | Prescription commerciale |
| **Documents transmis** | 10 ans | Obligation légale transport |
| **Historique échanges support** | 3 ans | RGPD |
| **Logs audit** | 5 ans | Traçabilité conformité |
| **Données paiement** | 13 mois | PCI-DSS |
| **Données RGPD sensibles** | Durée abonnement + 1 an | Droit à l'oubli |

**Archivage :**
- Actif : Base de données principale
- Archivé (> 3 ans) : Stockage froid (S3 Glacier, etc.)
- Suppression définitive : Après durée légale + validation manuelle

**Droit à l'oubli RGPD :**
- Transporteur peut demander suppression données
- Sauf si obligation légale conservation (documents transport = 10 ans)
- Anonymisation des données si suppression impossible

---

### 39. Qui porte la responsabilité en cas de mauvaise recommandation ?

**Réponse :**

#### Répartition responsabilité

**ClearGo (Plateforme) :**
- ✅ Responsable : Exactitude base de connaissances réglementaire
- ✅ Responsable : Bon fonctionnement outil (bugs, IA)
- ✅ Responsable : Mise à jour veille réglementaire

**Transporteur (Client) :**
- ✅ Responsable : Décisions finales et application actions
- ✅ Responsable : Véracité des documents uploadés
- ✅ Responsable : Conformité effective de son activité

**Clause de non-responsabilité (CGU) :**
```
ClearGo est un outil d'aide à la mise en conformité, pas un cabinet conseil.
Les recommandations sont générées automatiquement et ne constituent pas un 
avis juridique. Le transporteur reste seul responsable de sa conformité 
réglementaire et doit valider les actions suggérées.
```

**Assurance professionnelle :**
- ✅ ClearGo doit souscrire RC Professionnelle
- Couverture : Erreurs conseil, bugs logiciel
- Montant recommandé : 1-2M€

**Cas limites :**
- Erreur manifeste ClearGo → Responsabilité engagée (remboursement + dédommagement)
- Mauvaise application par transporteur → Responsabilité transporteur uniquement

---

## 🔹 I. Tableau de Bord & Suivi

### 40. Quelles informations doivent apparaître sur le dashboard transporteur ?

**Réponse :**

#### Vue d'ensemble (page d'accueil)

| Widget | Contenu | Mise à jour |
|--------|---------|-------------|
| **🎯 Score conformité actuel** | Note globale 0-100 + jauge visuelle | Temps réel |
| **📊 Progression roadmap** | % actions terminées (ex: 12/25 = 48%) | Temps réel |
| **🚨 Alertes prioritaires** | Max 3 alertes critiques (rouge) | Temps réel |
| **📅 Prochaines actions** | 5 prochaines échéances (triées par date) | Temps réel |
| **📄 Documents à renouveler** | Expiration < 30j (permis, cartes, etc.) | Quotidien |
| **📈 Historique conformité** | Graphique évolution score 6 derniers mois | Mensuel |
| **🎓 E-learning recommandé** | Modules formation suggérés | Hebdomadaire |

**Design :**
- Vue mobile-first (responsive)
- Codes couleur : 🔴 Rouge (critique) / 🟠 Orange (attention) / 🟢 Vert (OK)
- Actions rapides (boutons) : "Créer document", "Marquer terminé", "Voir détails"

---

### 41. Quelles informations pour le dashboard administrateur/consultant ?

**Réponse :**

#### Vue administrateur ClearGo

| Widget | Contenu | Utilité |
|--------|---------|---------|
| **📊 Vue d'ensemble transporteurs** | Nb clients actifs, score moyen, alertes totales | Monitoring global |
| **🚨 Alertes et escalades** | Tickets support P0/P1, bugs critiques | Réactivité |
| **📈 Statistiques globales** | Taux conversion, rétention, ARPU | Business |
| **🤖 Performance IA** | Taux confiance, erreurs, temps traitement | Qualité outil |
| **💰 Finances** | MRR, churn, LTV | Business |

#### Vue consultant externe (B2B2C)

| Widget | Contenu | Utilité |
|--------|---------|---------|
| **📋 Liste clients gérés** | Transporteurs assignés au consultant | Navigation |
| **🎯 Scores clients** | Vue consolidée conformité portefeuille | Priorisation |
| **📊 Progression globale** | % actions terminées tous clients | Reporting |
| **🚨 Alertes clients** | Risques critiques portefeuille | Réactivité |
| **📅 Prochains jalons** | Échéances importantes tous clients | Planification |

**Permissions consultant :**
- Lecture seule par défaut
- Modification selon config transporteur
- Pas d'accès données financières ClearGo

---

### 42. Faut-il des notifications automatiques ?

**Réponse : OUI, CRITIQUE pour engagement**

#### Types de notifications

| Type | Événement déclencheur | Canal | Fréquence |
|------|----------------------|-------|-----------|
| **⏰ Rappels actions** | Échéance J-7, J-3, J-1, J | Email + In-app | Selon échéance |
| **🚨 Alertes non-conformité** | Score < 40, document expiré | Email + SMS | Immédiat |
| **📢 Mises à jour réglementaires** | Nouveau texte applicable | Email | Sous 48h |
| **🎉 Félicitations jalons** | Action terminée, score +10pts | In-app | Immédiat |
| **📄 Documents expiration** | Validité < 30j | Email | J-30, J-15, J-7 |
| **💰 Facturation** | Prélèvement J-3, facture dispo | Email | Selon abonnement |

**Préférences notifications (paramétrable par utilisateur) :**
- Fréquence : Temps réel / Quotidienne / Hebdomadaire
- Canal : Email / SMS / In-app / Désactivé
- Types : Choisir catégories à recevoir

**Design notifications :**
- Claires et actionnables (CTA clair)
- Pas de spam (max 3 emails/semaine hors critique)
- Résumé hebdomadaire disponible

---

## 🔹 J. Parcours Utilisateur & UX

### 43. Décrire le parcours utilisateur pour chaque profil

**Réponse :**

#### Transporteur (Dirigeant)

**1. Inscription**
- Landing page → Formulaire 3 champs (nom, email, mot de passe)
- Vérification email (lien validation)
- Onboarding : 3 écrans intro produit (skippable)

**2. Onboarding / Premier diagnostic**
- 12 questions freemium (5-10 min)
- Score immédiat + visualisation
- Teasing diagnostic complet (paywall)

**3. Utilisation courante (si abonné)**
- Connexion → Dashboard score + alertes
- Consulte prochaines actions
- Marque actions terminées
- Crée documents via templates IA
- Upload nouveaux documents si demandé

**4. Interaction avec le support**
- Chat in-app (widget bas droite)
- Historique conversations sauvegardé
- Notifications réponses support

**5. Finalisation / Clôture**
- 100% actions validées → Certificat conformité
- Export dossier PDF pour inspection
- Renouvellement abonnement annuel

---

#### Manager / Responsable Exploitation

**Parcours identique mais :**
- Pas d'accès facturation/paiements
- Focus opérationnel : upload docs, suivi actions
- Notifications déléguées par dirigeant

---

#### Consultant externe (B2B2C)

**1. Inscription**
- Formulaire entreprise (SIRET, coordonnées)
- Validation manuelle ClearGo (anti-fraude)
- Configuration permissions

**2. Onboarding**
- Import clients existants (ou ajout manuel)
- Configuration accès par client
- Formation outil (webinaire dédié)

**3. Utilisation courante**
- Dashboard multi-clients
- Suivi conformité portefeuille
- Export rapports clients
- Communication via ClearGo (ou externe)

---

### 44. Existe-t-il déjà :

**Réponse :**

| Livrable | Statut | Commentaire |
|----------|--------|-------------|
| **Wireframes** | ❌ NON | À créer dans phase conception |
| **Maquettes** | ❌ NON | À créer après validation wireframes |
| **Charte graphique** | ❌ NON | Identité visuelle à définir |

**Recommandation :**
- Phase 1 : Wireframes basse fidélité (fonctionnalités)
- Phase 2 : Validation UX avec utilisateurs pilotes
- Phase 3 : Maquettes haute fidélité + charte graphique
- Phase 4 : Développement

---

### 45. La conception UX/UI fait-elle partie du périmètre attendu ?

**Réponse : OUI, CRITIQUE**

**Périmètre UX/UI attendu :**
- ✅ Wireframes (basse fidélité)
- ✅ Maquettes (haute fidélité)
- ✅ Prototypes interactifs (Figma/Adobe XD)
- ✅ Charte graphique (couleurs, typo, composants)
- ✅ Design system (si possible)

**Livrables UX attendus :**
- User flows (parcours détaillés)
- Wireframes écrans clés (15-20 écrans MVP)
- Maquettes finales (desktop + mobile)
- Prototype cliquable (tests utilisateurs)

**Tests utilisateurs recommandés :**
- 5-10 transporteurs (profils variés)
- Tests modérés (observation + questions)
- Itérations après retours

---

## 🔹 K. Technique & Contraintes

### 46. Contraintes techniques connues ?

**Réponse :**

| Contrainte | Détails | Impact |
|------------|---------|--------|
| **Web uniquement (MVP)** | Pas d'app mobile native | Application web responsive obligatoire |
| **Mobile requis (V2)** | Accès chauffeurs terrain | PWA recommandée (progressive web app) |
| **APIs imposées** | Aucune (liberté technique) | Choix stack libre |

**Navigateurs supportés (MVP) :**
- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Pas IE11 (obsolète)

**Devices supportés :**
- Desktop (1920x1080 min)
- Tablet (iPad, Android)
- Mobile (iPhone, Android)

---

### 47. Préférences ou contraintes technologiques ?

**Réponse : Aucune contrainte imposée**

**Recommandations (à valider avec équipe dev) :**

#### Front-end
- React / Vue.js / Next.js (frameworks modernes)
- Tailwind CSS (design system rapide)
- Responsive mobile-first

#### Back-end
- Node.js / Python (Django/FastAPI)
- PostgreSQL (base de données)
- Redis (cache)

#### IA / ML
- HuggingFace Transformers (NLP)
- Tesseract / Google Cloud Vision (OCR)
- OpenAI API (génération texte si besoin)

#### Hébergement
- AWS / GCP / Azure (cloud scalable)
- Docker + Kubernetes (conteneurisation)

**⚠️ Note :** Stack finale à définir selon compétences équipe dev.

---

### 48. Exigences de sécurité spécifiques ?

**Réponse :**

| Exigence | Obligatoire | Détails |
|----------|-------------|---------|
| **Hébergement données UE** | ✅ OUI (RGPD) | Serveurs France/UE uniquement |
| **Chiffrement** | ✅ OUI | - HTTPS (TLS 1.3)<br/>- Données sensibles chiffrées at rest (AES-256) |
| **Authentification** | ✅ OUI | - 2FA optionnelle (recommandée)<br/>- OAuth2 (Google/Microsoft login optionnel) |
| **HDS (Hébergement Données Santé)** | ❌ NON | Pas de données santé (sauf si module GDP pharma → à réévaluer) |
| **PCI-DSS** | ✅ OUI | Paiements via Stripe (certifié PCI) |

**Mesures sécurité additionnelles :**
- Sauvegardes quotidiennes (retention 30j)
- Logs audit horodatés
- Rate limiting API (anti-DDoS)
- Penetration testing annuel (recommandé)

---

### 49. Volume et performance attendus ?

**Réponse :**

#### Hypothèses volumétrie (12 mois)

| Métrique | MVP (mois 1-3) | Croissance (mois 4-12) | Cible année 1 |
|----------|----------------|------------------------|---------------|
| **Nb transporteurs** | 50 | 50/mois | 500 |
| **Nb utilisateurs** | 75 | 75/mois | 750 |
| **Requêtes API/jour** | 1 000 | 10 000 | 50 000 |
| **Documents uploadés/mois** | 500 | 5 000 | 25 000 |

#### Contraintes performance

| Métrique | Cible | Critique si |
|----------|-------|-------------|
| **Temps chargement page** | < 2s | > 5s |
| **Temps analyse IA document** | < 2 min | > 5 min |
| **Uptime plateforme** | > 99.5% | < 99% |
| **Taille max upload** | 10 MB/fichier | N/A |
| **Nb fichiers simultanés** | 5 | N/A |

**Scalabilité :**
- Architecture cloud auto-scalable
- CDN pour assets statiques
- Load balancing si > 10 000 utilisateurs

---

## 🔹 L. Intégrations & Interopérabilité

### 50. La plateforme doit-elle s'intégrer avec des systèmes externes ?

**Réponse :**

#### Priorité 1 : MVP

| Système | Intégration | Priorité | Complexité |
|---------|-------------|----------|------------|
| **Stripe** | Paiements | ✅ Critique | Faible (API standard) |
| **Email (SendGrid/Mailgun)** | Notifications | ✅ Critique | Faible |
| **SMS (Twilio)** | Alertes critiques | ⚠️ Important | Faible |

#### Priorité 2 : V2 (optionnel)

| Système | Intégration | Priorité | Complexité |
|---------|-------------|----------|------------|
| **TMS transporteurs** | Import données flotte | ⚠️ Moyen | Élevée (multi-TMS) |
| **Outils qualité** | Export conformité | ⚠️ Faible | Moyenne |
| **Plateformes formation** | E-learning externe | ⚠️ Faible | Moyenne |
| **API Empreinte Carbone** | Calcul CO2 (si module activé) | ⚠️ Faible | Moyenne |

#### Hors scope
- ❌ ERP transporteur (trop complexe)
- ❌ Logiciels comptabilité (pas pertinent)

**Note Empreinte Carbone :**
- Si module activé → Intégration API partenaire (ex: Carbo, Dashdoc)
- Pas de développement interne (complexité ISO 14083)

---

### 51. Des APIs doivent-elles être exposées ?

**Réponse : OUI (V2)**

#### APIs exposées (futures)

| API | Usage | Format | Priorité |
|-----|-------|--------|----------|
| **API Webhook** | Notifications événements (action terminée, score MAJ) | REST JSON | ⚠️ V2 |
| **API Consultant** | Accès lecture dossiers clients | REST JSON | ⚠️ V2 |
| **API Export données** | RGPD (droit portabilité) | REST JSON | ⚠️ Important |

**Pas prévu MVP :**
- API publique complète (risque sécurité)
- GraphQL (complexité inutile pour MVP)

**Authentification API :**
- OAuth2 (Bearer tokens)
- Rate limiting strict

---

## 🔹 M. Périmètre & Roadmap (ANTI-DÉRAPAGE)

### 52. Qu'est-ce qui est explicitement hors périmètre du projet ?

**Réponse :**

#### ❌ Hors scope MVP (absolument)

| Fonctionnalité | Raison | Alternative |
|----------------|--------|-------------|
| **Audit blanc physique** | Nécessite présence terrain | Partenariat consultants |
| **Accompagnement terrain** | Ressources insuffisantes | Partenariat consultants |
| **Sessions consulting individuel** | Pas le métier | Support chat/email uniquement |
| **App mobile native** | Complexité développement | PWA responsive |
| **Intégration TMS/ERP** | Trop complexe | Import CSV manuel |
| **Module Empreinte Carbone (dev interne)** | Complexité ISO 14083 | Intégration API partenaire |
| **Interface consultant externe (B2B2C)** | Besoin à valider | V2 si demande avérée |
| **Gestion multi-sites/filiales** | Modèle économique à clarifier | V2 après validation Vivien |

#### ⚠️ En discussion (à valider avec Vivien)

- Consultant externe : périmètre exact, modèle tarifaire
- Multi-sites : facturation, cloisonnement données
- Modules optionnels : pricing, priorité lancement

---

### 53. Que doit contenir obligatoirement le MVP ?

**Réponse :**

#### ✅ Fonctionnalités minimales MVP

| Fonctionnalité | Détails | Critique |
|----------------|---------|----------|
| **Freemium (12 questions)** | Diagnostic RSE de base | ✅ |
| **Diagnostic complet payant** | Analyse approfondie + roadmap | ✅ |
| **Scoring conformité RSE** | 6 domaines (Inspection, URSSAF, AT, Tachy, Facture, Env) | ✅ |
| **Plan d'action personnalisé** | Roadmap priorisée | ✅ |
| **Abonnement** | Suivi mensuel/annuel | ✅ |
| **Alertes automatiques** | Expiration docs, actions retard | ✅ |
| **Création documents IA** | Templates recadrage, non-conformité, PV AT, registres | ✅ |
| **Gestion documentaire** | Upload, stockage, OCR | ✅ |
| **E-learning** | 5-10 modules formation de base | ✅ |
| **Support chat/email** | Équipe humaine + chatbot IA | ✅ |
| **Paiements Stripe** | Diagnostic + abonnement | ✅ |
| **Dashboard transporteur** | Vue conformité + actions | ✅ |

#### Types documents analysés (MVP)
- ✅ Autorisation d'exercer
- ✅ Permis de conduire
- ✅ Cartes conducteurs (si PL)
- ✅ Certificats véhicules (Euro 6, CT)
- ✅ Attestations URSSAF
- ✅ DUER (Document Unique)

#### Niveau accompagnement humain (MVP)
- ✅ Support chat/email (SLA < 24h)
- ❌ Accompagnement terrain (hors MVP)
- ❌ Audit blanc (hors MVP)

#### Domaines RSE couverts (MVP)
- ✅ Inspection du Travail
- ✅ URSSAF
- ✅ Accidents du Travail
- ✅ Tachygraphe & Temps conduite
- ✅ Facturation électronique 2026
- ✅ Normes environnementales (Euro 6)

---

### 54. Faut-il définir une roadmap évolutive post-lancement ?

**Réponse : OUI**

#### Roadmap post-MVP (indicative)

**V1.1 (3 mois post-MVP) :**
- 🔧 Corrections bugs critiques
- 📊 Amélioration dashboard (graphiques)
- 📱 Optimisation mobile (PWA)
- 🤖 Amélioration IA (réduction erreurs)

**V2 (6-12 mois post-MVP) :**
- 📦 **Modules optionnels** : GDP, HACCP, ADR, Empreinte Carbone
- 👥 **Interface consultant externe** (si demande validée)
- 🏢 **Gestion multi-sites/filiales** (si modèle économique défini)
- 📱 **App mobile chauffeurs** (consultation formations, permis)
- 🔗 **Intégrations** : API Empreinte Carbone, TMS (si pertinent)

**V3 (12-24 mois post-MVP) :**
- 🌍 **Extension internationale** : Espagne, Belgique, Allemagne (si marché)
- 🎓 **Marketplace formations** : Partenariats organismes (FIMO, FCO, etc.)
- 🤝 **Réseau consultants certifiés** : Annuaire partenaires
- 📈 **Analytics avancées** : BI, prédictions IA

**Critères déclenchement V2 :**
- 500+ transporteurs actifs
- Taux rétention > 80%
- Feedback utilisateurs positif (NPS > 50)
- Rentabilité atteinte

---

## 🔒 Rappel clé (à conserver pour le devis)

**⚠️ IMPORTANT :**

> Toute fonctionnalité, règle métier ou contrainte **non explicitement mentionnée** dans ce document de cadrage fera l'objet d'un **devis complémentaire**.

**En particulier :**
- Modules optionnels (GDP, HACCP, ADR, Empreinte Carbone) : Chiffrages séparés
- Interface consultant externe : Devis après validation périmètre avec Vivien
- Gestion multi-sites : Devis après validation modèle économique avec Vivien
- Intégrations externes (TMS, ERP) : Devis au cas par cas

---

## 📊 Synthèse des priorités MVP

### 🚨 PRIORITÉ ABSOLUE (P0)
1. Sécurisation face aux contrôles (Inspection, URSSAF, AT)
2. Suivi RH chauffeurs (formations, habilitations)
3. Diagnostic freemium + complet + scoring
4. Plan d'action personnalisé

### ⚠️ PRIORITÉ HAUTE (P1)
5. Abonnement + suivi mensuel
6. Alertes automatiques
7. Création documents IA
8. Gestion documentaire + OCR

### ✅ PRIORITÉ MOYENNE (P2)
9. E-learning (5-10 modules)
10. Support chat + email
11. Dashboard transporteur
12. Paiements Stripe

### 📦 OPTIONNEL (P3 - Post-MVP)
13. Modules spécialisés (GDP, HACCP, ADR, CO2)
14. Interface consultant externe
15. Gestion multi-sites
16. App mobile chauffeurs

---

*Fin du document — ClearGo Réponses Questionnaire Cadrage*

**✅ Document validé — Prêt pour chiffrage développement**
