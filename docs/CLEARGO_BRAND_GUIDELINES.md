# 🚛 ClearGo — Charte Graphique Complète

> **ClearGo – Compliance & Transport**  
> Design System pour SaaS B2B transport & compliance

---

## 📋 Contexte de la marque

**ClearGo** est une plateforme SaaS dédiée aux transporteurs, responsables qualité et dirigeants de PME transport.

### Mission

- Simplifier la conformité (ISO 9001, GDP, ADR, audits, documents)
- Rendre la compliance lisible, fluide, rassurante
- Donner une image moderne, professionnelle, fiable

### ADN Visuel

> _"Je suis carré, je maîtrise, je suis conforme."_

| ✅ À privilégier         | ❌ À éviter             |
| ------------------------ | ----------------------- |
| Sérieux mais accessible  | Administratif et rigide |
| Moderne et professionnel | Startup gadget / flashy |
| Transport terrain        | Design médical          |
| Structure qualité        | Sombre et anxiogène     |

---

## 🎨 1. Palette de Couleurs

### 1.1 Couleurs Principales (Issues du logo)

| Nom                     | Hex       | HSL           | Rôle                                    |
| ----------------------- | --------- | ------------- | --------------------------------------- |
| **ClearGo Blue Dark**   | `#1A5276` | `200 65% 28%` | Shield, en-têtes, éléments de confiance |
| **ClearGo Blue**        | `#2E86C1` | `204 62% 47%` | Couleur primaire, navigation, liens     |
| **ClearGo Blue Light**  | `#5DADE2` | `199 68% 63%` | Dégradés, accents bleus                 |
| **ClearGo Green**       | `#27AE60` | `145 63% 42%` | "Go", CTAs, succès, validation          |
| **ClearGo Green Light** | `#58D68D` | `145 57% 60%` | Survols, accents verts                  |

### 1.2 Couleurs Secondaires

| Nom             | Hex       | HSL           | Rôle                           |
| --------------- | --------- | ------------- | ------------------------------ |
| **Slate Dark**  | `#2C3E50` | `210 29% 24%` | Texte principal, titres        |
| **Slate**       | `#5D6D7E` | `210 16% 43%` | Texte secondaire, descriptions |
| **Slate Light** | `#85929E` | `210 11% 57%` | Texte tertiaire, labels        |
| **Road Gray**   | `#566573` | `208 15% 40%` | Éléments graphiques route      |

### 1.3 Couleurs de Fond

| Nom                 | Hex       | Rôle                       |
| ------------------- | --------- | -------------------------- |
| **Blanc pur**       | `#FFFFFF` | Fond principal mode clair  |
| **Gris clair**      | `#F8FAFC` | Sections alternées         |
| **Gris neutre**     | `#EBF5FB` | Cards, fond léger bleuté   |
| **Charbon profond** | `#0D1B2A` | Fond principal mode sombre |
| **Charbon card**    | `#1B2838` | Cards mode sombre          |

### 1.4 Couleurs d'État UI

| État              | Hex       | Usage                           |
| ----------------- | --------- | ------------------------------- |
| **Success**       | `#27AE60` | Conformité validée ✅           |
| **Success Light** | `#D5F5E3` | Background success              |
| **Warning**       | `#F39C12` | Alertes, éléments à vérifier ⚠️ |
| **Warning Light** | `#FEF9E7` | Background warning              |
| **Danger**        | `#E74C3C` | Non-conformité, erreurs ❌      |
| **Danger Light**  | `#FDEDEC` | Background danger               |
| **Info**          | `#2E86C1` | Informations, aide ℹ️           |
| **Info Light**    | `#EBF5FB` | Background info                 |

---

## 🎯 2. Hiérarchie Visuelle

### Couleur Dominante du Site

**ClearGo Blue (`#2E86C1`)** — Omniprésent dans :

- Navigation principale
- En-têtes de section
- Liens et éléments cliquables
- Footer

### Couleur d'Action Principale (CTA)

**ClearGo Green (`#27AE60`)** — Utilisée pour :

- Boutons primaires "Démarrer", "Valider"
- Indicateurs de progression
- Actions de confirmation
- Badges de conformité

### Couleur de Réassurance

**ClearGo Blue Dark (`#1A5276`)** — Pour :

- Shields, éléments protecteurs
- Headers hero
- Sections de confiance

### Couleur Administrative / Documents

**Slate (`#5D6D7E`)** — Pour :

- Sections documentaires
- Tableaux de données
- Citations réglementaires

---

## ✒️ 3. Typographies (Google Fonts)

### Police Principale : **Inter**

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

body {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}
```

### Hiérarchie Typographique

| Élément                | Poids | Taille   | Couleur   |
| ---------------------- | ----- | -------- | --------- |
| **H1 / Hero**          | 800   | 48px     | `#1A5276` |
| **H2 / Sections**      | 700   | 36px     | `#2C3E50` |
| **H3 / Sous-sections** | 600   | 24px     | `#2C3E50` |
| **H4 / Cards**         | 600   | 20px     | `#2C3E50` |
| **Body**               | 400   | 16px     | `#5D6D7E` |
| **Body Small**         | 400   | 14px     | `#85929E` |
| **KPIs / Chiffres**    | 700   | Variable | `#1A5276` |

---

## 🎛️ 4. Style UI Global

### 4.1 Arrondis (Border Radius)

| Élément     | Radius   |
| ----------- | -------- |
| **Boutons** | `8px`    |
| **Cards**   | `12px`   |
| **Modals**  | `16px`   |
| **Badges**  | `9999px` |
| **Inputs**  | `8px`    |

### 4.2 Ombres

```css
--shadow-sm: 0 1px 2px rgba(26, 82, 118, 0.05);
--shadow-md: 0 4px 6px rgba(26, 82, 118, 0.08);
--shadow-lg: 0 10px 15px rgba(26, 82, 118, 0.1);
--shadow-xl: 0 20px 25px rgba(26, 82, 118, 0.12);
--shadow-glow-green: 0 0 20px rgba(39, 174, 96, 0.25);
```

### 4.3 Cards

```css
.card {
  background: #ffffff;
  border: 1px solid #e8f0f5;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(26, 82, 118, 0.08);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 10px 15px rgba(26, 82, 118, 0.1);
  border-color: rgba(46, 134, 193, 0.3);
}

/* Card Premium / Hero */
.card-hero {
  background: linear-gradient(135deg, #1a5276 0%, #2e86c1 100%);
  color: #ffffff;
}
```

### 4.4 Tableaux

```css
.table thead {
  background: #ebf5fb;
}

.table th {
  color: #1a5276;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table td {
  color: #5d6d7e;
  border-bottom: 1px solid #e8f0f5;
}

.table tbody tr:hover {
  background: #f8fafc;
}
```

### 4.5 Dashboards / KPIs

```css
.kpi-value {
  font-size: 36px;
  font-weight: 700;
  color: #1a5276;
}

.kpi-trend-up {
  color: #27ae60;
}

.kpi-trend-down {
  color: #e74c3c;
}

/* Progress Bar Compliance */
.progress-bar-fill {
  background: linear-gradient(90deg, #27ae60 0%, #58d68d 100%);
}
```

---

## 🖼️ 5. Direction Artistique

### Atmosphère Générale

| Aspect             | Direction                                     |
| ------------------ | --------------------------------------------- |
| **Fond principal** | Blanc ou bleuté léger (`#F8FAFC` / `#EBF5FB`) |
| **Accents**        | Vert pour actions, Bleu pour structure        |
| **Espacement**     | Généreux, aéré                                |
| **Mode sombre**    | Bleu nuit profond (`#0D1B2A`)                 |

### Éléments Visuels Clés

```css
/* Dégradé Blue (pour headers, hero) */
.gradient-blue {
  background: linear-gradient(135deg, #1a5276 0%, #2e86c1 100%);
}

/* Dégradé Green (pour CTAs premium) */
.gradient-green {
  background: linear-gradient(135deg, #27ae60 0%, #58d68d 100%);
}

/* Glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Iconographie

- **Shield** : Protection, sécurité, conformité
- **Checkmark** : Validation, conformité acquise
- **Route** : Transport, progression, parcours
- **Feuille verte** : Dynamisme, croissance, éco-responsabilité

---

## 🧠 6. Inspiration Mentale

> 🎯 **"Outil du responsable qualité"**  
> Interface claire, données structurées, actions évidentes.

> ✅ **"Plateforme sérieuse utilisée en audit"**  
> Design sobre qui inspire confiance.

> 📋 **"Outil que je peux montrer à un auditeur sans stress"**  
> Professionnalisme évident, traçabilité visuelle.

---

## 📐 7. Composants UI

### Boutons

```css
/* Bouton Primaire (Green) */
.btn-primary {
  background: #27ae60;
  color: #ffffff;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #229954;
  box-shadow: 0 0 20px rgba(39, 174, 96, 0.25);
}

/* Bouton Secondaire (Blue) */
.btn-secondary {
  background: #2e86c1;
  color: #ffffff;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
}

.btn-secondary:hover {
  background: #1a5276;
}

/* Bouton Outline */
.btn-outline {
  background: transparent;
  color: #2e86c1;
  border: 2px solid #2e86c1;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
}

.btn-outline:hover {
  background: #2e86c1;
  color: #ffffff;
}
```

### Badges

```css
.badge-success {
  background: #d5f5e3;
  color: #1e8449;
}
.badge-warning {
  background: #fef9e7;
  color: #b7950b;
}
.badge-danger {
  background: #fdedec;
  color: #c0392b;
}
.badge-info {
  background: #ebf5fb;
  color: #1a5276;
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #d5dbdb;
  border-radius: 8px;
  font-size: 16px;
  color: #2c3e50;
  transition: all 0.2s ease;
}

.input:focus {
  border-color: #2e86c1;
  box-shadow: 0 0 0 3px rgba(46, 134, 193, 0.15);
}
```

---

## 🔧 8. Variables CSS

```css
:root {
  /* === CLEARGO BRAND COLORS === */
  --color-blue-dark: #1a5276;
  --color-blue: #2e86c1;
  --color-blue-light: #5dade2;
  --color-green: #27ae60;
  --color-green-light: #58d68d;

  /* === TEXT COLORS === */
  --color-slate-dark: #2c3e50;
  --color-slate: #5d6d7e;
  --color-slate-light: #85929e;

  /* === BACKGROUNDS === */
  --bg-white: #ffffff;
  --bg-gray-50: #f8fafc;
  --bg-blue-50: #ebf5fb;
  --bg-dark: #0d1b2a;
  --bg-dark-card: #1b2838;

  /* === STATE COLORS === */
  --color-success: #27ae60;
  --color-success-light: #d5f5e3;
  --color-warning: #f39c12;
  --color-warning-light: #fef9e7;
  --color-danger: #e74c3c;
  --color-danger-light: #fdedec;
  --color-info: #2e86c1;
  --color-info-light: #ebf5fb;

  /* === BORDERS === */
  --border-light: #e8f0f5;
  --border-subtle: rgba(46, 134, 193, 0.2);

  /* === RADIUS === */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px rgba(26, 82, 118, 0.05);
  --shadow-md: 0 4px 6px rgba(26, 82, 118, 0.08);
  --shadow-lg: 0 10px 15px rgba(26, 82, 118, 0.1);
  --shadow-glow: 0 0 20px rgba(39, 174, 96, 0.25);

  /* === GRADIENTS === */
  --gradient-blue: linear-gradient(135deg, #1a5276 0%, #2e86c1 100%);
  --gradient-green: linear-gradient(135deg, #27ae60 0%, #58d68d 100%);
  --gradient-hero: linear-gradient(
    135deg,
    #1a5276 0%,
    #2e86c1 50%,
    #27ae60 100%
  );

  /* === TYPOGRAPHY === */
  --font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  /* === TRANSITIONS === */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
}
```

---

## 🖼️ Logo Officiel

Le logo ClearGo comprend :

- **Shield bleu** avec route et checkmark (protection + transport + conformité)
- **Texte "Clear"** en bleu
- **Texte "Go"** en vert
- **Feuille verte** (dynamisme, croissance)
- **Tagline** "COMPLIANCE & TRANSPORT" en gris

### Fichiers disponibles :

- `ClearGo.png` — Logo principal
- `ClearGo LogoFinalV2.png` — Version étendue avec icônes (ISO 9001, GDP, ADR)

---

## ✅ Checklist d'Implémentation

- [ ] Importer la police Inter depuis Google Fonts
- [ ] Configurer les variables CSS dans `:root`
- [ ] Remplacer les couleurs Vyxo (navy/gold) par ClearGo (blue/green)
- [ ] Mettre à jour les CTAs en vert `#27AE60`
- [ ] Appliquer le dégradé bleu sur les headers
- [ ] Utiliser le radius de 12px pour les cards
- [ ] Respecter les couleurs d'état (Success vert / Danger rouge)

---

> **ClearGo** — La conformité, en toute clarté.  
> Version 2.0 — Janvier 2026
