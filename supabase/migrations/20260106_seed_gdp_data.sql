-- ═══════════════════════════════════════════════════════════════════════
-- VYXO CODEX - SEED DATA GDP (Bonnes Pratiques de Distribution)
-- Date: 06/01/2026
-- Description: Seed les actions, templates et config pour la norme GDP
-- ═══════════════════════════════════════════════════════════════════════

-- ───────────────────────────────────────────────────────────────────────
-- 1. SEED ACTIONS GDP (18 actions)
-- ───────────────────────────────────────────────────────────────────────

INSERT INTO actions (standard_type, action_code, title, description, requirement_ref, chapter_number, estimated_hours, priority_weight, category, sector_variations, template_ids, depends_on_actions, display_order)
VALUES
  -- Quality System
  ('GDP', 'gdp-qs-1', 'Création du Manuel Qualité GDP', 'Rédiger un manuel qualité conforme aux exigences GDP.', 'quality-system', 'quality-system', 24, 10, 'documentation', '{"deliverables": ["Manuel Qualité GDP", "Procédures associées"], "tips": []}', '{}', '{}', 1),
  ('GDP', 'gdp-qs-2', 'Désignation du Pharmacien Responsable', 'Formaliser la désignation et les responsabilités du PR.', 'quality-system', 'quality-system', 4, 10, 'management', '{"deliverables": ["Lettre de mission PR", "Délégations documentées"], "tips": []}', '{}', '{}', 2),

  -- Personnel
  ('GDP', 'gdp-per-1', 'Plan de formation GDP', 'Établir un programme de formation initiale et continue GDP.', 'personnel', 'personnel', 16, 10, 'training', '{"deliverables": ["Plan de formation GDP", "Supports de formation", "Évaluations"], "tips": []}', '{}', '{}', 3),
  ('GDP', 'gdp-per-2', 'Fiches de poste GDP', 'Créer les fiches de poste incluant les responsabilités GDP.', 'personnel', 'personnel', 8, 7, 'documentation', '{"deliverables": ["Fiches de poste", "Organigramme"], "tips": []}', '{}', '{}', 4),

  -- Premises
  ('GDP', 'gdp-prem-1', 'Qualification thermique des zones de stockage', 'Réaliser le mapping thermique et qualifier les zones.', 'premises', 'premises', 40, 10, 'infrastructure', '{"deliverables": ["Rapport de mapping", "Protocole de qualification", "PV de qualification"], "tips": []}', '{}', '{}', 5),
  ('GDP', 'gdp-prem-2', 'Système de monitoring température', 'Installer un système de surveillance continue avec alertes.', 'premises', 'premises', 24, 10, 'infrastructure', '{"deliverables": ["Système installé", "Procédure de surveillance", "Seuils d''alerte"], "tips": []}', '{}', '{}', 6),
  ('GDP', 'gdp-prem-3', 'Sécurisation des accès', 'Mettre en place un contrôle d''accès aux zones de stockage.', 'premises', 'premises', 16, 7, 'infrastructure', '{"deliverables": ["Système d''accès", "Registre des autorisations"], "tips": []}', '{}', '{}', 7),

  -- Documentation
  ('GDP', 'gdp-doc-1', 'Système de gestion documentaire GDP', 'Mettre en place la maîtrise des documents GDP.', 'documentation', 'documentation', 12, 7, 'infrastructure', '{"deliverables": ["Procédure documentaire", "Liste des documents maîtrisés"], "tips": []}', '{}', '{}', 8),

  -- Operations
  ('GDP', 'gdp-ops-1', 'Procédure de qualification fournisseurs', 'Établir le processus de qualification des fournisseurs GDP.', 'operations', 'operations', 16, 10, 'process', '{"deliverables": ["Procédure qualification", "Questionnaire d''audit", "Registre fournisseurs"], "tips": []}', '{}', '{}', 9),
  ('GDP', 'gdp-ops-2', 'Procédure de réception', 'Formaliser les contrôles à réception des produits.', 'operations', 'operations', 8, 10, 'process', '{"deliverables": ["Procédure réception", "Checklist de contrôle"], "tips": []}', '{}', '{}', 10),
  ('GDP', 'gdp-ops-3', 'Gestion FEFO/FIFO', 'Mettre en place la gestion des péremptions.', 'operations', 'operations', 8, 7, 'process', '{"deliverables": ["Procédure FEFO", "Paramétrage WMS"], "tips": []}', '{}', '{}', 11),
  ('GDP', 'gdp-ops-4', 'Procédure de gestion des retours', 'Formaliser le processus de traitement des retours.', 'operations', 'operations', 8, 7, 'process', '{"deliverables": ["Procédure retours", "Zone de quarantaine"], "tips": []}', '{}', '{}', 12),

  -- Complaints
  ('GDP', 'gdp-comp-1', 'Procédure de gestion des réclamations', 'Créer le processus de traitement des réclamations.', 'complaints', 'complaints', 8, 7, 'process', '{"deliverables": ["Procédure réclamations", "Formulaire de réclamation"], "tips": []}', '{}', '{}', 13),
  ('GDP', 'gdp-comp-2', 'Procédure produits falsifiés', 'Établir le processus de détection des produits suspects.', 'complaints', 'complaints', 8, 10, 'process', '{"deliverables": ["Procédure falsification", "Formation équipe"], "tips": []}', '{}', '{}', 14),

  -- Transport
  ('GDP', 'gdp-trans-1', 'Qualification des transporteurs', 'Qualifier les prestataires de transport GDP.', 'transport', 'transport', 24, 10, 'process', '{"deliverables": ["Questionnaire qualification", "Accords qualité", "Audits"], "tips": []}', '{}', '{}', 15),
  ('GDP', 'gdp-trans-2', 'Qualification des emballages', 'Valider les solutions d''emballage pour la chaîne du froid.', 'transport', 'transport', 32, 10, 'infrastructure', '{"deliverables": ["Études de qualification", "Profils thermiques", "Choix emballages"], "tips": []}', '{}', '{}', 16);

-- ───────────────────────────────────────────────────────────────────────
-- 2. SEED TEMPLATES GDP (13 templates)
-- ───────────────────────────────────────────────────────────────────────

INSERT INTO templates (standard_type, template_code, title, description, category, file_format, file_url, file_size, requirement_ref, sector_adaptations, related_action_codes, download_count, display_order, is_active)
VALUES
  -- Manuels
  ('GDP', 'gdp-manuel-qualite', 'Manuel Qualité GDP', 'Manuel qualité conforme aux Bonnes Pratiques de Distribution.', 'manuel', 'docx', 'https://placeholder.com/gdp-manuel-qualite.docx', 0, NULL, '{"tags": ["obligatoire", "pharmacien responsable"], "estimatedCompletionHours": 24}', '{}', 0, 1, true),
  ('GDP', 'gdp-programme-surete', 'Programme de Sûreté Supply Chain', 'Programme de sécurisation de la chaîne d''approvisionnement.', 'manuel', 'docx', 'https://placeholder.com/gdp-programme-surete.docx', 0, NULL, '{"tags": ["sûreté", "falsification"], "estimatedCompletionHours": 12}', '{}', 0, 2, true),

  -- Procédures
  ('GDP', 'gdp-procedure-reception', 'Procédure Réception', 'Procédure de contrôle à réception des produits pharmaceutiques.', 'procedure', 'docx', 'https://placeholder.com/gdp-procedure-reception.docx', 0, 'operations', '{"tags": ["réception", "contrôle"], "estimatedCompletionHours": 6}', '{}', 0, 3, true),
  ('GDP', 'gdp-procedure-stockage', 'Procédure Stockage', 'Procédure de stockage et conditions de conservation.', 'procedure', 'docx', 'https://placeholder.com/gdp-procedure-stockage.docx', 0, 'premises', '{"tags": ["stockage", "température"], "estimatedCompletionHours": 6}', '{}', 0, 4, true),
  ('GDP', 'gdp-procedure-expedition', 'Procédure Expédition', 'Procédure de préparation et expédition des commandes.', 'procedure', 'docx', 'https://placeholder.com/gdp-procedure-expedition.docx', 0, 'operations', '{"tags": ["expédition", "livraison"], "estimatedCompletionHours": 6}', '{}', 0, 5, true),
  ('GDP', 'gdp-procedure-retours', 'Procédure Retours', 'Procédure de gestion des retours clients.', 'procedure', 'docx', 'https://placeholder.com/gdp-procedure-retours.docx', 0, 'operations', '{"tags": ["retours", "quarantaine"], "estimatedCompletionHours": 4}', '{}', 0, 6, true),
  ('GDP', 'gdp-procedure-rappel', 'Procédure Rappel de Lots', 'Procédure de rappel de lots et retrait du marché.', 'procedure', 'docx', 'https://placeholder.com/gdp-procedure-rappel.docx', 0, NULL, '{"tags": ["rappel", "vigilance"], "estimatedCompletionHours": 6}', '{}', 0, 7, true),
  ('GDP', 'gdp-procedure-falsification', 'Procédure Produits Falsifiés', 'Procédure de détection des produits suspects/falsifiés.', 'procedure', 'docx', 'https://placeholder.com/gdp-procedure-falsification.docx', 0, 'complaints', '{"tags": ["falsification", "sûreté"], "estimatedCompletionHours": 6}', '{}', 0, 8, true),

  -- Formulaires
  ('GDP', 'gdp-fiche-reception', 'Fiche Contrôle Réception', 'Checklist de contrôle à réception.', 'formulaire', 'docx', 'https://placeholder.com/gdp-fiche-reception.docx', 0, NULL, '{"tags": ["enregistrement", "réception"], "estimatedCompletionHours": 1}', '{}', 0, 9, true),
  ('GDP', 'gdp-fiche-deviation', 'Fiche Déviation Température', 'Formulaire de déclaration d''excursion thermique.', 'formulaire', 'docx', 'https://placeholder.com/gdp-fiche-deviation.docx', 0, NULL, '{"tags": ["température", "déviation"], "estimatedCompletionHours": 1}', '{}', 0, 10, true),
  ('GDP', 'gdp-questionnaire-transporteur', 'Questionnaire Qualification Transporteur', 'Questionnaire d''évaluation des transporteurs.', 'formulaire', 'docx', 'https://placeholder.com/gdp-questionnaire-transporteur.docx', 0, 'transport', '{"tags": ["transporteur", "qualification"], "estimatedCompletionHours": 2}', '{}', 0, 11, true),

  -- Outils
  ('GDP', 'gdp-mapping-thermique', 'Protocole Mapping Thermique', 'Protocole de cartographie thermique des zones de stockage.', 'outil', 'docx', 'https://placeholder.com/gdp-mapping-thermique.docx', 0, 'premises', '{"tags": ["qualification", "température"], "estimatedCompletionHours": 8}', '{}', 0, 12, true),
  ('GDP', 'gdp-plan-formation', 'Plan de Formation GDP', 'Template de plan de formation aux BPD.', 'outil', 'xlsx', 'https://placeholder.com/gdp-plan-formation.xlsx', 0, 'personnel', '{"tags": ["formation", "RH"], "estimatedCompletionHours": 4}', '{}', 0, 13, true);

-- ═══════════════════════════════════════════════════════════════════════
-- FIN SEED GDP
-- ═══════════════════════════════════════════════════════════════════════
