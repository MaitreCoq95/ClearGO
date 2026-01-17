# 📊 GUIDE : Seed de la Base de Données

**Date** : 06/01/2026
**Status** : Ready to execute

---

## ⚠️ PROBLÈME RENCONTRÉ

Le script TypeScript `npm run seed` ne peut pas s'exécuter dans l'environnement actuel à cause de **restrictions réseau** (HTTP 403 Forbidden vers Supabase).

**Solution** : Exécuter le SQL directement dans Supabase Studio.

---

## 🚀 MÉTHODE 1 : Supabase Studio (RECOMMANDÉ)

### Étape 1 : Accéder à Supabase Studio

1. Va sur [https://app.supabase.com](https://app.supabase.com)
2. Connecte-toi à ton compte
3. Sélectionne le projet **yxknzdrocoasvibxudww**

### Étape 2 : Ouvrir l'éditeur SQL

1. Dans le menu latéral, clique sur **SQL Editor**
2. Clique sur **+ New query**

### Étape 3 : Exécuter le seed GDP

1. Copie le contenu du fichier : `supabase/migrations/20260106_seed_gdp_data.sql`
2. Colle-le dans l'éditeur SQL
3. Clique sur **Run** (ou `Ctrl+Enter`)

**Résultat attendu** :
- ✅ 16 actions GDP insérées
- ✅ 13 templates GDP insérés

### Étape 4 : Vérifier les données

Exécute ces requêtes pour vérifier :

```sql
-- Compter les actions GDP
SELECT COUNT(*) as total_actions FROM actions WHERE standard_type = 'GDP';

-- Compter les templates GDP
SELECT COUNT(*) as total_templates FROM templates WHERE standard_type = 'GDP';

-- Voir les actions par catégorie
SELECT category, COUNT(*) as count
FROM actions
WHERE standard_type = 'GDP'
GROUP BY category
ORDER BY count DESC;
```

---

## 🔄 MÉTHODE 2 : Depuis ta machine locale (si réseau OK)

Si tu veux exécuter le script TypeScript depuis ta machine :

### Prérequis

1. Clone le repo sur ta machine
2. Install dependencies : `npm install`
3. Crée `.env.local` avec :

```env
NEXT_PUBLIC_SUPABASE_URL=https://yxknzdrocoasvibxudww.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4a256ZHJvY29hc3ZpYnh1ZHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MjE5MjgsImV4cCI6MjA4MTM5NzkyOH0.PrFXtLakT969crFb5zHTMXxlWK78tQW66Z5dIDn6OIg
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4a256ZHJvY29hc3ZpYnh1ZHd3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTgyMTkyOCwiZXhwIjoyMDgxMzk3OTI4fQ.5Fcjy-2oz1FHkuNsPNyjw4kA20hoLnI-g-DGhLtuf_U
```

### Exécution

```bash
npm run seed
```

**Note** : Le script tentera de seed les 7 normes (GDP, ISO 9001, ISO 27001, HACCP, ISO 42001, ISO 13485, Sûreté).

---

## 📋 DONNÉES SEEDED

### GDP (Prioritaire)

| Type               | Quantité | Status  |
| ------------------ | -------- | ------- |
| Actions            | 16       | ✅ Prêt |
| Templates          | 13       | ✅ Prêt |
| Standard Config    | 1        | ⏸️ TODO |

### Autres normes

Les données pour les 6 autres normes sont dans le code TypeScript (`lib/data/actions/`, `lib/data/templates/`).

**Pour les ajouter** :
1. Soit exécuter `npm run seed` depuis ta machine locale
2. Soit créer des fichiers SQL supplémentaires (comme pour GDP)

---

## 🔍 PROCHAINES ÉTAPES

Une fois le seed GDP terminé :

1. ✅ **Vérifier les données** dans Supabase Studio (Table Editor)
2. ✅ **Tester le Roadmap Generator** avec les vraies données
3. ✅ **Créer les routes API** pour le roadmap
4. ✅ **Créer la page UI** `/dashboard/roadmap`

---

## 🐛 TROUBLESHOOTING

### Erreur : "duplicate key value violates unique constraint"

Si tu as déjà des données, vide d'abord les tables :

```sql
DELETE FROM user_actions;
DELETE FROM actions;
DELETE FROM templates;
```

### Erreur : "relation does not exist"

Vérifie que la migration principale a bien été exécutée :

```sql
-- Vérifier que les tables existent
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('actions', 'templates', 'roadmaps', 'user_actions');
```

Si les tables n'existent pas, exécute d'abord :
- `supabase/migrations/20241228_mvp_b2b_saas_schema.sql`

---

## 📞 BESOIN D'AIDE ?

Si tu rencontres des problèmes :
1. Vérifie les logs dans Supabase Studio > Logs
2. Vérifie les RLS policies (elles peuvent bloquer les inserts)
3. Contacte-moi avec le message d'erreur exact

---

**Créé le** : 06/01/2026
**Par** : Claude Code (Sonnet 4.5)
**Branch** : `claude/review-handoff-docs-LLbqJ`
