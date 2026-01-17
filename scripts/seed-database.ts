/**
 * Script de seed de la base de données ClearGo
 *
 * Seed:
 * - actions (référentiel d'actions par norme)
 * - templates (référentiel de templates par norme)
 * - standard_configs (configuration des 7 normes)
 *
 * Usage: npm run seed
 */

// Load environment variables from .env.local
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(process.cwd(), '.env.local') })

import { createClient } from '@supabase/supabase-js'
import { GDP_ACTIONS } from '../lib/data/actions/gdp-actions'
import { ISO9001_ACTIONS } from '../lib/data/actions/iso9001-actions'
import { ISO27001_ACTIONS } from '../lib/data/actions/iso27001-actions'
import { HACCP_ACTIONS } from '../lib/data/actions/haccp-actions'
import { ISO42001_ACTIONS } from '../lib/data/actions/iso42001-actions'
import { ISO13485_ACTIONS } from '../lib/data/actions/iso13485-actions'
import { SURETE_ACTIONS } from '../lib/data/actions/surete-actions'

import { GDP_TEMPLATES } from '../lib/data/templates/gdp-templates'
import { ISO9001_TEMPLATES } from '../lib/data/templates/iso9001-templates'
import { ISO27001_TEMPLATES } from '../lib/data/templates/iso27001-templates'
import { HACCP_TEMPLATES } from '../lib/data/templates/haccp-templates'
import { ISO42001_TEMPLATES } from '../lib/data/templates/iso42001-templates'
import { ISO13485_TEMPLATES } from '../lib/data/templates/iso13485-templates'
import { SURETE_TEMPLATES } from '../lib/data/templates/surete-templates'

import { GDP_TEMPLATE } from '../lib/data/assessments/gdp-questions'
import { ISO9001_TEMPLATE } from '../lib/data/assessments/iso9001-questions'
import { ISO27001_TEMPLATE } from '../lib/data/assessments/iso27001-questions'
import { HACCP_TEMPLATE } from '../lib/data/assessments/haccp-questions'
import { ISO42001_TEMPLATE } from '../lib/data/assessments/iso42001-questions'
import { ISO13485_TEMPLATE } from '../lib/data/assessments/iso13485-questions'
import { SURETE_TEMPLATE } from '../lib/data/assessments/surete-questions'

import type { Action, ActionPriority } from '../lib/data/actions/types'
import type { Template } from '../lib/data/templates/types'

// Configuration Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Variables d\'environnement manquantes:')
  console.error('   - NEXT_PUBLIC_SUPABASE_URL')
  console.error('   - SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Mapping priorité → poids (1-10)
const PRIORITY_WEIGHTS: Record<ActionPriority, number> = {
  critical: 10,
  high: 7,
  medium: 5,
  low: 3,
}

// Fonction utilitaire : convertir Action TypeScript → format DB
function transformAction(action: Action, standardType: string) {
  return {
    action_code: action.id,
    standard_type: standardType,
    title: action.title,
    description: action.description,
    requirement_ref: action.sectionId || 'general',
    chapter_number: action.sectionId || null,
    estimated_hours: action.estimatedHours,
    priority_weight: PRIORITY_WEIGHTS[action.priority],
    category: action.category,
    template_ids: action.templateIds || [],
    depends_on_actions: action.prerequisites || [],
    sector_variations: JSON.stringify({
      deliverables: action.deliverables,
      tips: action.tips || [],
    }),
    display_order: 0,
  }
}

// Fonction utilitaire : convertir Template TypeScript → format DB
function transformTemplate(template: Template, standardType: string) {
  return {
    template_code: template.id,
    standard_type: standardType,
    title: template.name,
    description: template.description,
    category: template.category,
    file_format: template.format,
    file_url: template.fileUrl || `https://placeholder.com/${template.id}.${template.format}`, // Placeholder pour le moment
    file_size: 0, // À mettre à jour après upload réel
    requirement_ref: template.sectionId || null,
    sector_adaptations: JSON.stringify({
      tags: template.tags,
      estimatedCompletionHours: template.estimatedCompletionHours,
    }),
    related_action_codes: template.actionIds || [],
    download_count: template.downloadCount || 0,
    display_order: 0,
    is_active: true,
  }
}

// ===================================
// 1. SEED ACTIONS
// ===================================
async function seedActions() {
  console.log('\n📊 Seeding ACTIONS...\n')

  const actionSets = [
    { data: GDP_ACTIONS, type: 'GDP' },
    { data: ISO9001_ACTIONS, type: 'ISO_9001' },
    { data: ISO27001_ACTIONS, type: 'ISO_27001' },
    { data: HACCP_ACTIONS, type: 'HACCP' },
    { data: ISO42001_ACTIONS, type: 'ISO_42001' },
    { data: ISO13485_ACTIONS, type: 'ISO_13485' },
    { data: SURETE_ACTIONS, type: 'SURETE' },
  ]

  let totalInserted = 0

  for (const { data, type } of actionSets) {
    const actions = data.actions.map((action) => transformAction(action, type))

    const { error, count } = await supabase.from('actions').insert(actions)

    if (error) {
      console.error(`❌ Erreur lors du seed des actions ${type}:`, error)
    } else {
      console.log(`✅ ${type}: ${actions.length} actions insérées`)
      totalInserted += actions.length
    }
  }

  console.log(`\n📊 Total actions insérées: ${totalInserted}\n`)
}

// ===================================
// 2. SEED TEMPLATES
// ===================================
async function seedTemplates() {
  console.log('\n📚 Seeding TEMPLATES...\n')

  const templateSets = [
    { data: GDP_TEMPLATES, type: 'GDP' },
    { data: ISO9001_TEMPLATES, type: 'ISO_9001' },
    { data: ISO27001_TEMPLATES, type: 'ISO_27001' },
    { data: HACCP_TEMPLATES, type: 'HACCP' },
    { data: ISO42001_TEMPLATES, type: 'ISO_42001' },
    { data: ISO13485_TEMPLATES, type: 'ISO_13485' },
    { data: SURETE_TEMPLATES, type: 'SURETE' },
  ]

  let totalInserted = 0

  for (const { data, type } of templateSets) {
    const templates = data.templates.map((template) => transformTemplate(template, type))

    const { error } = await supabase.from('templates').insert(templates)

    if (error) {
      console.error(`❌ Erreur lors du seed des templates ${type}:`, error)
    } else {
      console.log(`✅ ${type}: ${templates.length} templates insérés`)
      totalInserted += templates.length
    }
  }

  console.log(`\n📚 Total templates insérés: ${totalInserted}\n`)
}

// ===================================
// 3. SEED STANDARD CONFIGS
// ===================================
async function seedStandardConfigs() {
  console.log('\n⚙️  Seeding STANDARD_CONFIGS...\n')

  const configs = [
    {
      standard_type: 'GDP',
      name: 'GDP / BPD',
      short_name: 'GDP',
      description: 'Bonnes Pratiques de Distribution en Gros de médicaments à usage humain',
      icon: '💊',
      questions: GDP_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'quality-system', name: 'Système Qualité', order: 1 },
        { id: 'personnel', name: 'Personnel', order: 2 },
        { id: 'premises', name: 'Locaux et Équipements', order: 3 },
        { id: 'documentation', name: 'Documentation', order: 4 },
        { id: 'operations', name: 'Opérations', order: 5 },
        { id: 'complaints', name: 'Réclamations et Retraits', order: 6 },
        { id: 'transport', name: 'Transport', order: 7 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 6,
      typical_price: 3990,
      sector_relevance: JSON.stringify({
        pharma: 10,
        logistics: 9,
        manufacturing: 5,
      }),
      is_active: true,
    },
    {
      standard_type: 'ISO_9001',
      name: 'ISO 9001:2015',
      short_name: 'ISO 9001',
      description: 'Système de management de la qualité',
      icon: '📊',
      questions: ISO9001_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'context', name: 'Contexte de l\'organisation', order: 1 },
        { id: 'leadership', name: 'Leadership', order: 2 },
        { id: 'planning', name: 'Planification', order: 3 },
        { id: 'support', name: 'Support', order: 4 },
        { id: 'operations', name: 'Réalisation des activités opérationnelles', order: 5 },
        { id: 'performance', name: 'Évaluation des performances', order: 6 },
        { id: 'improvement', name: 'Amélioration', order: 7 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 9,
      typical_price: 5990,
      sector_relevance: JSON.stringify({
        manufacturing: 10,
        services: 9,
        logistics: 8,
      }),
      is_active: true,
    },
    {
      standard_type: 'ISO_27001',
      name: 'ISO/IEC 27001:2022',
      short_name: 'ISO 27001',
      description: 'Système de management de la sécurité de l\'information',
      icon: '🔒',
      questions: ISO27001_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'context', name: 'Contexte de l\'organisation', order: 1 },
        { id: 'leadership', name: 'Leadership', order: 2 },
        { id: 'planning', name: 'Planification', order: 3 },
        { id: 'support', name: 'Support', order: 4 },
        { id: 'operations', name: 'Fonctionnement', order: 5 },
        { id: 'performance', name: 'Évaluation des performances', order: 6 },
        { id: 'improvement', name: 'Amélioration', order: 7 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 12,
      typical_price: 7990,
      sector_relevance: JSON.stringify({
        cyber: 10,
        services: 9,
        manufacturing: 7,
      }),
      is_active: true,
    },
    {
      standard_type: 'HACCP',
      name: 'HACCP',
      short_name: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      icon: '🍽️',
      questions: HACCP_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'prerequisites', name: 'Programmes Préalables', order: 1 },
        { id: 'team', name: 'Équipe HACCP', order: 2 },
        { id: 'description', name: 'Description du produit', order: 3 },
        { id: 'process', name: 'Diagramme de fabrication', order: 4 },
        { id: 'hazards', name: 'Analyse des dangers', order: 5 },
        { id: 'ccps', name: 'Points Critiques de Contrôle', order: 6 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 4,
      typical_price: 2990,
      sector_relevance: JSON.stringify({
        food: 10,
        logistics: 8,
        manufacturing: 6,
      }),
      is_active: true,
    },
    {
      standard_type: 'ISO_42001',
      name: 'ISO/IEC 42001:2023',
      short_name: 'ISO 42001',
      description: 'Système de management de l\'Intelligence Artificielle',
      icon: '🤖',
      questions: ISO42001_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'context', name: 'Contexte de l\'organisation', order: 1 },
        { id: 'leadership', name: 'Leadership', order: 2 },
        { id: 'planning', name: 'Planification', order: 3 },
        { id: 'support', name: 'Support', order: 4 },
        { id: 'operations', name: 'Réalisation des activités opérationnelles', order: 5 },
        { id: 'performance', name: 'Évaluation des performances', order: 6 },
        { id: 'improvement', name: 'Amélioration', order: 7 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 10,
      typical_price: 6990,
      sector_relevance: JSON.stringify({
        cyber: 10,
        services: 9,
        manufacturing: 8,
      }),
      is_active: true,
    },
    {
      standard_type: 'ISO_13485',
      name: 'ISO 13485:2016',
      short_name: 'ISO 13485',
      description: 'Dispositifs médicaux - Systèmes de management de la qualité',
      icon: '🏥',
      questions: ISO13485_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'context', name: 'Contexte de l\'organisation', order: 1 },
        { id: 'leadership', name: 'Responsabilité de la direction', order: 2 },
        { id: 'planning', name: 'Planification', order: 3 },
        { id: 'support', name: 'Support', order: 4 },
        { id: 'operations', name: 'Réalisation du produit', order: 5 },
        { id: 'performance', name: 'Mesure, analyse et amélioration', order: 6 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 12,
      typical_price: 8990,
      sector_relevance: JSON.stringify({
        pharma: 10,
        manufacturing: 9,
        logistics: 7,
      }),
      is_active: true,
    },
    {
      standard_type: 'SURETE',
      name: 'Sûreté Aéroportuaire',
      short_name: 'Sûreté Aéro',
      description: 'Réglementation sûreté pour les acteurs du transport aérien',
      icon: '✈️',
      questions: SURETE_TEMPLATE,
      chapters: JSON.stringify([
        { id: 'program', name: 'Programme de Sûreté', order: 1 },
        { id: 'personnel', name: 'Personnel', order: 2 },
        { id: 'access', name: 'Contrôle d\'accès', order: 3 },
        { id: 'cargo', name: 'Fret et Courrier', order: 4 },
        { id: 'screening', name: 'Inspection/Filtrage', order: 5 },
        { id: 'security', name: 'Sécurité', order: 6 },
      ]),
      maturity_levels: JSON.stringify([
        { level: 1, name: 'Initial', minScore: 0, maxScore: 20 },
        { level: 2, name: 'Géré', minScore: 21, maxScore: 40 },
        { level: 3, name: 'Défini', minScore: 41, maxScore: 60 },
        { level: 4, name: 'Maîtrisé', minScore: 61, maxScore: 80 },
        { level: 5, name: 'Optimisé', minScore: 81, maxScore: 100 },
      ]),
      estimated_months: 6,
      typical_price: 4990,
      sector_relevance: JSON.stringify({
        logistics: 10,
        services: 8,
      }),
      is_active: true,
    },
  ]

  for (const config of configs) {
    const { error } = await supabase.from('standard_configs').insert(config)

    if (error) {
      console.error(`❌ Erreur lors du seed de ${config.short_name}:`, error)
    } else {
      console.log(`✅ ${config.short_name}: config insérée`)
    }
  }

  console.log(`\n⚙️  Total configs insérées: ${configs.length}\n`)
}

// ===================================
// MAIN
// ===================================
async function main() {
  console.log('\n🚀 Début du seed de la base de données ClearGo\n')
  console.log('================================================\n')

  try {
    // 1. Seed Actions
    await seedActions()

    // 2. Seed Templates
    await seedTemplates()

    // 3. Seed Standard Configs
    await seedStandardConfigs()

    console.log('================================================\n')
    console.log('✅ Seed terminé avec succès!\n')
  } catch (error) {
    console.error('❌ Erreur lors du seed:', error)
    process.exit(1)
  }
}

main()

