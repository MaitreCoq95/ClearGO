'use client';

import Image from 'next/image';
import { useState } from 'react';

// ============================================================================
// DATA: Personas
// ============================================================================
const personas = [
  {
    id: 'marc',
    name: 'Marc Dupont',
    role: 'Dirigeant PME Transport',
    avatar: '👨‍💼',
    age: '45-55 ans',
    company: '15-30 chauffeurs • CA 2-4M€/an',
    priority: 'Principal',
    color: 'bg-green-500',
    painPoints: [
      'Perd 3-5 contrats premium/an faute de conformité ISO 9001',
      'Consultants trop chers (25k€)',
      'Cantonné au marché spot bas de gamme',
    ],
    goals: [
      'Gagner contrats pharma/agro (Sanofi, Nestlé)',
      'Se différencier de la concurrence',
      'Sortir du marché spot',
    ],
    budget: '400-600€/mois si ROI prouvé',
    quote: '"Si ClearGo me permet de répondre aux appels d\'offres Sanofi, je signe immédiatement."',
    journey: [
      { step: 'Découverte', page: '/', action: 'Voit headline sur perte contrats', trigger: 'Perd un AO pharma' },
      { step: 'Évaluation', page: '/assessment', action: 'Répond 15 questions', trigger: 'CTA gratuit' },
      { step: 'Résultat', page: '/assessment/results', action: 'Voit CA perdu estimé', trigger: 'Score 62/100' },
      { step: 'Diagnostic', page: '/diagnostic', action: 'Paie 299€, audit ISO', trigger: 'CTA débloquer' },
      { step: 'Abonnement', page: '/checkout/subscribe', action: 'Souscrit 499€/mois', trigger: 'Email J+3' },
      { step: 'Activation', page: '/dashboard', action: 'Génère 1er rapport client', trigger: 'Onboarding J7' },
      { step: 'ROI', page: '/dashboard/reports', action: 'Envoie dossier à Sanofi', trigger: 'Appel d\'offres' },
    ],
  },
  {
    id: 'sophie',
    name: 'Sophie Martin',
    role: 'Responsable Qualité',
    avatar: '👩‍💻',
    age: '35-45 ans',
    company: '30-50 chauffeurs • Seule au poste',
    priority: 'Secondaire',
    color: 'bg-blue-500',
    painPoints: [
      'Débordée, 2h par dossier client manuellement',
      'Pas de budget décisionnaire',
      'Doit convaincre le dirigeant',
    ],
    goals: [
      'Automatiser tâches répétitives',
      'Générer rapports clients rapidement',
      'Préparer audits sereinement',
    ],
    budget: 'Prescripteur (pas décisionnaire)',
    quote: '"Je passe mes soirées à préparer les audits. Il me faut un outil qui automatise."',
    journey: [
      { step: 'Recherche', page: '/', action: 'Cherche "outil conformité transport"', trigger: 'Audit imminent' },
      { step: 'Démonstration', page: '/demo', action: 'Teste interface', trigger: 'Comparatif outils' },
      { step: 'Présentation', page: '/tarifs', action: 'Prépare pitch dirigeant', trigger: 'ROI calculé' },
      { step: 'Validation', page: '/assessment', action: 'Convainc Marc (dirigeant)', trigger: 'Score visible' },
      { step: 'Usage', page: '/dashboard', action: 'Utilise au quotidien', trigger: 'Compte créé' },
    ],
  },
  {
    id: 'groupe',
    name: 'Groupe Multi-sites',
    role: 'ETI Transport',
    avatar: '🏢',
    age: 'N/A',
    company: '100-300 chauffeurs • 3-10 sites France',
    priority: 'V2 (Post-MVP)',
    color: 'bg-purple-500',
    painPoints: [
      'Conformité hétérogène entre sites',
      'Difficile d\'harmoniser processus',
      'Reporting groupe complexe',
    ],
    goals: [
      'Vision consolidée conformité groupe',
      'Harmonisation processus ISO',
      'Benchmark inter-sites',
    ],
    budget: '1000-2000€/mois',
    quote: '"J\'ai 8 sites, impossible de savoir où on en est globalement sur la conformité."',
    journey: [
      { step: 'Contact', page: '/contact', action: 'Demande démo personnalisée', trigger: 'Besoin groupe' },
      { step: 'POC', page: '/dashboard', action: 'Test sur 1 site pilote', trigger: 'Validation DSI' },
      { step: 'Déploiement', page: '/dashboard', action: 'Rollout multi-sites', trigger: 'Succès POC' },
    ],
  },
];

// ============================================================================
// DATA: Key Metrics & Market Data
// ============================================================================
const sectorMetrics = {
  market: [
    { label: 'Transporteurs France', value: '39 000', unit: 'entreprises' },
    { label: 'Dont PME 10-50 chauffeurs', value: '8 500', unit: 'cible primaire' },
    { label: 'Marché conformité transport', value: '850M€', unit: '/an' },
    { label: 'Croissance annuelle', value: '+12%', unit: 'CAGR' },
  ],
  painPoints: [
    { label: 'CA perdu faute ISO 9001', value: '150k€', unit: '/an/transporteur' },
    { label: 'Coût consultant ISO', value: '25k€', unit: 'tarif moyen' },
    { label: 'Délai certification', value: '12-18', unit: 'mois' },
    { label: 'Taux abandon DIY', value: '80%', unit: 'sans accompagnement' },
  ],
  targets: [
    { label: 'Prix diagnostic', value: '299€', unit: 'one-shot' },
    { label: 'Prix abonnement', value: '499€', unit: '/mois' },
    { label: 'ARPU cible', value: '600€', unit: '/mois (avec upsells)' },
    { label: 'Marge brute cible', value: '85%', unit: 'SaaS' },
  ],
  projections: [
    { label: 'MRR Mois 6', value: '35k€', unit: '70 clients' },
    { label: 'ARR Mois 12', value: '1M€', unit: '150 clients' },
    { label: 'CAC cible', value: '500€', unit: 'par client' },
    { label: 'LTV/CAC', value: '>10x', unit: 'ratio' },
  ],
};

// ============================================================================
// DATA: Mockups
// ============================================================================
const mockups = [
  {
    id: 'landing',
    title: 'Landing Page',
    route: '/',
    description: 'Page d\'accueil avec hero section Strategy B',
    image: '/mockups/landing.png',
    persona: 'marc',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Principal',
    route: '/dashboard',
    description: 'Tableau de bord avec score commercial et actions prioritaires',
    image: '/mockups/dashboard.png',
    persona: 'marc',
  },
  {
    id: 'assessment',
    title: 'Assessment Quiz',
    route: '/assessment',
    description: 'Questionnaire Commercial Readiness (15 questions)',
    image: '/mockups/assessment.png',
    persona: 'marc',
  },
  {
    id: 'results',
    title: 'Assessment Résultats',
    route: '/assessment/results',
    description: 'Page résultats avec score, blocages et CTA diagnostic',
    image: '/mockups/results.png',
    persona: 'marc',
  },
  {
    id: 'report-generator',
    title: 'Client Report Generator',
    route: '/dashboard/reports/new',
    description: 'Wizard 3 étapes pour générer dossier conformité client',
    image: '/mockups/report-generator.png',
    persona: 'marc',
  },
  {
    id: 'pricing',
    title: 'Page Tarifs',
    route: '/tarifs',
    description: 'Pricing: Gratuit, Diagnostic (299€), Premium (499€/mois)',
    image: '/mockups/pricing.png',
    persona: 'sophie',
  },
];

// ============================================================================
// COMPONENT: Main Page
// ============================================================================
export default function DevMockupsPage() {
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'briefing' | 'personas' | 'mockups' | 'design' | 'cadrage'>('briefing');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A5276] to-[#2E86C1] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/ClearGo.png" alt="ClearGo" width={60} height={60} />
            <div>
              <h1 className="text-3xl font-bold">ClearGo — Documentation Développeur</h1>
              <p className="text-blue-200">Strategy B "Conformité Offensive" • MVP 115 jours</p>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              { id: 'briefing', label: '📋 Briefing Projet', icon: '📋' },
              { id: 'cadrage', label: '🔧 Cadrage Technique', icon: '🔧' },
              { id: 'personas', label: '👥 Personas & Parcours', icon: '👥' },
              { id: 'mockups', label: '🎨 Maquettes UI', icon: '🎨' },
              { id: 'design', label: '🎯 Design System', icon: '🎯' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-[#1A5276]'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ================================================================ */}
        {/* TAB: Briefing Projet */}
        {/* ================================================================ */}
        {activeTab === 'briefing' && (
          <div className="space-y-12">
            {/* Executive Summary */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                🎯 Executive Summary
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500 mb-6">
                  <p className="text-xl font-semibold text-gray-900 mb-2">
                    ClearGo transforme la conformité réglementaire en avantage commercial pour les transporteurs.
                  </p>
                  <p className="text-gray-700">
                    Au lieu de subir ISO 9001, GDP, ADR comme des coûts, ClearGo permet aux transporteurs 
                    de les afficher comme <strong>preuves de fiabilité</strong> pour gagner des contrats premium.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Ancien Positionnement (Stratégie A)</h4>
                    <p className="text-red-700">"ClearGo vous protège des contrôles Inspection du Travail"</p>
                    <p className="text-sm text-red-600 mt-2">→ Océan rouge, pricing bas (150€/mois)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Nouveau Positionnement (Stratégie B)</h4>
                    <p className="text-green-700">"ClearGo vous qualifie pour les appels d'offres pharma et agro"</p>
                    <p className="text-sm text-green-600 mt-2">→ Océan bleu, pricing premium (499€/mois)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Metrics Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Market */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">📊 Marché</h3>
                <div className="space-y-3">
                  {sectorMetrics.market.map((m, i) => (
                    <div key={i} className="flex justify-between items-baseline">
                      <span className="text-gray-600 text-sm">{m.label}</span>
                      <span className="font-bold text-gray-900">{m.value} <span className="text-xs text-gray-500">{m.unit}</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain Points */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">😫 Pain Points</h3>
                <div className="space-y-3">
                  {sectorMetrics.painPoints.map((m, i) => (
                    <div key={i} className="flex justify-between items-baseline">
                      <span className="text-gray-600 text-sm">{m.label}</span>
                      <span className="font-bold text-red-600">{m.value} <span className="text-xs text-gray-500">{m.unit}</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Targets */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">💰 Pricing</h3>
                <div className="space-y-3">
                  {sectorMetrics.targets.map((m, i) => (
                    <div key={i} className="flex justify-between items-baseline">
                      <span className="text-gray-600 text-sm">{m.label}</span>
                      <span className="font-bold text-green-600">{m.value} <span className="text-xs text-gray-500">{m.unit}</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projections */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">📈 Projections</h3>
                <div className="space-y-3">
                  {sectorMetrics.projections.map((m, i) => (
                    <div key={i} className="flex justify-between items-baseline">
                      <span className="text-gray-600 text-sm">{m.label}</span>
                      <span className="font-bold text-blue-600">{m.value} <span className="text-xs text-gray-500">{m.unit}</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Feature Killer */}
            <section className="bg-gradient-to-r from-[#27AE60] to-[#2ECC71] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">🔥 Feature Killer: Client Compliance Report Generator</h2>
              <p className="text-lg mb-6">
                Outil de génération automatique de dossiers de conformité brandés, exportables PDF/Web, 
                que le transporteur envoie à ses prospects pour <strong>prouver sa conformité</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-2xl font-bold">30 sec</p>
                  <p className="text-sm">Génération rapport</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-2xl font-bold">0€</p>
                  <p className="text-sm">Concurrent (aucun ne fait ça)</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-2xl font-bold">15 jours</p>
                  <p className="text-sm">Effort développement</p>
                </div>
              </div>
            </section>

            {/* Dev Timeline */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🗓️ Roadmap Développement</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { phase: 'Phase 1', weeks: 'S1-6', title: 'Core', items: ['Auth + Stripe', 'Landing Page', 'Assessment', 'Diagnostic ISO'] },
                  { phase: 'Phase 2', weeks: 'S7-10', title: 'Killer Feature', items: ['Client Report Generator', 'Dashboard', 'Scoring Commercial'] },
                  { phase: 'Phase 3', weeks: 'S11-14', title: 'Complétion', items: ['Gestion Docs', 'Création IA', 'Alertes'] },
                  { phase: 'Phase 4', weeks: 'S15-17', title: 'Polish', items: ['E-learning', 'Support', 'Beta'] },
                ].map((p, i) => (
                  <div key={i} className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#27AE60] transition-colors">
                    <div className="text-xs font-semibold text-gray-500">{p.weeks}</div>
                    <div className="font-bold text-lg text-gray-900">{p.phase}</div>
                    <div className="text-sm text-[#27AE60] font-medium mb-2">{p.title}</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {p.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  Total: 115 jours dev • 4-5 mois • Lancement fin avril 2026
                </span>
              </div>
            </section>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB: Personas & Parcours */}
        {/* ================================================================ */}
        {activeTab === 'personas' && (
          <div className="space-y-12">
            {personas.map((persona) => (
              <section key={persona.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Persona Header */}
                <div className={`${persona.color} text-white p-6`}>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{persona.avatar}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">{persona.name}</h2>
                        <span className="bg-white/20 px-2 py-1 rounded text-sm">{persona.priority}</span>
                      </div>
                      <p className="text-white/90">{persona.role}</p>
                      <p className="text-white/70 text-sm">{persona.company}</p>
                    </div>
                  </div>
                </div>

                {/* Persona Details */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Pain Points */}
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">😫 Pain Points</h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((p, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-red-400">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Goals */}
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">🎯 Objectifs</h4>
                    <ul className="space-y-2">
                      {persona.goals.map((g, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-green-400">•</span> {g}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Budget & Quote */}
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">💰 Budget</h4>
                    <p className="text-sm text-gray-700 mb-4">{persona.budget}</p>
                    <div className="bg-gray-50 p-3 rounded-lg italic text-sm text-gray-600">
                      {persona.quote}
                    </div>
                  </div>
                </div>

                {/* User Journey */}
                <div className="border-t p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">🛤️ Parcours Utilisateur</h4>
                  <div className="flex overflow-x-auto gap-4 pb-4">
                    {persona.journey.map((step, i) => (
                      <div key={i} className="flex-shrink-0 w-48">
                        <div className="bg-gray-50 rounded-lg p-4 h-full">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`w-6 h-6 rounded-full ${persona.color} text-white text-xs flex items-center justify-center font-bold`}>
                              {i + 1}
                            </span>
                            <span className="font-semibold text-gray-900">{step.step}</span>
                          </div>
                          <code className="text-xs bg-gray-200 px-1 rounded">{step.page}</code>
                          <p className="text-sm text-gray-600 mt-2">{step.action}</p>
                          <p className="text-xs text-gray-400 mt-1">↳ {step.trigger}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB: Mockups */}
        {/* ================================================================ */}
        {activeTab === 'mockups' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockups.map((mockup) => (
                <div
                  key={mockup.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedMockup(mockup.id)}
                >
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image
                      src={mockup.image}
                      alt={mockup.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{mockup.title}</h3>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{mockup.route}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{mockup.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Persona: {personas.find(p => p.id === mockup.persona)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB: Design System */}
        {/* ================================================================ */}
        {activeTab === 'design' && (
          <div className="space-y-8">
            {/* Colors */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎨 Couleurs</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: 'Blue Dark', hex: '#1A5276', usage: 'Sidebar, titres' },
                  { name: 'Blue', hex: '#2E86C1', usage: 'Liens, accents' },
                  { name: 'Blue Light', hex: '#5DADE2', usage: 'Highlights' },
                  { name: 'Green', hex: '#27AE60', usage: 'CTAs, succès' },
                  { name: 'Gray', hex: '#566573', usage: 'Texte secondaire' },
                ].map((c, i) => (
                  <div key={i} className="text-center">
                    <div className="w-20 h-20 rounded-xl mx-auto mb-2 shadow-lg" style={{ backgroundColor: c.hex }}></div>
                    <p className="font-semibold">{c.name}</p>
                    <code className="text-xs text-gray-500">{c.hex}</code>
                    <p className="text-xs text-gray-400 mt-1">{c.usage}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sitemap */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🗺️ Sitemap MVP</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏠 Marketing</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><code>/</code> Landing Page</li>
                    <li><code>/tarifs</code> Pricing</li>
                    <li><code>/demo</code> Demo</li>
                    <li><code>/contact</code> Contact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🔐 Auth</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><code>/login</code> Connexion</li>
                    <li><code>/signup</code> Inscription</li>
                    <li><code>/forgot-password</code> Reset</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📊 Assessment</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><code>/assessment</code> Quiz 15Q</li>
                    <li><code>/assessment/results</code> Résultats</li>
                    <li><code>/diagnostic</code> Audit ISO 100Q</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Dashboard</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><code>/dashboard</code> Home</li>
                    <li><code>/dashboard/roadmap</code> Actions</li>
                    <li><code>/dashboard/documents</code> Docs</li>
                    <li><code>/dashboard/reports</code> Reports</li>
                    <li><code>/dashboard/reports/new</code> Generator</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Stack */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Stack Technique</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { cat: 'Frontend', tech: 'Next.js 14, Tailwind, Shadcn/ui' },
                  { cat: 'Backend', tech: 'Supabase, Prisma, PostgreSQL' },
                  { cat: 'IA', tech: 'OpenAI GPT-4, Google Vision OCR' },
                  { cat: 'Paiements', tech: 'Stripe' },
                ].map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900">{s.cat}</p>
                    <p className="text-sm text-gray-600">{s.tech}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB: Cadrage Technique */}
        {/* ================================================================ */}
        {activeTab === 'cadrage' && (
          <div className="space-y-8">
            {/* Quick Links */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-4">📄 Documentation Complète</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/docs/CLEARGO_CADRAGE_TECHNIQUE.md" target="_blank" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                  <p className="font-semibold">🔧 Cadrage Technique Complet</p>
                  <p className="text-sm text-blue-200">54 questions/réponses • Vision, Users, IA, Scoring</p>
                </a>
                <a href="/docs/CLEARGO_GESTION_PROJET.md" target="_blank" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                  <p className="font-semibold">📋 Guide Gestion de Projet</p>
                  <p className="text-sm text-blue-200">User Stories, Planning, Templates, Rituels</p>
                </a>
              </div>
            </section>

            {/* Problèmes résolus */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🚨 Problèmes Résolus par ClearGo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🚨 Peur des Contrôles</h3>
                  <p className="text-sm text-gray-600">Inspection du Travail, URSSAF, Accidents du Travail</p>
                  <p className="text-xs text-red-600 mt-2">→ Stress permanent, risque sanctions</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📋 Complexité RH</h3>
                  <p className="text-sm text-gray-600">Suivi chauffeurs, déclarations sociales, formations</p>
                  <p className="text-xs text-orange-600 mt-2">→ Temps perdu, erreurs fréquentes</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">💰 Coût Consulting</h3>
                  <p className="text-sm text-gray-600">400€/jour TJM, pas accessible TPE/PME</p>
                  <p className="text-xs text-yellow-600 mt-2">→ ClearGo: 75% moins cher</p>
                </div>
              </div>
            </section>

            {/* Modèle économique */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Modèle Économique</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border-2 border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🆓</div>
                  <h3 className="font-bold text-gray-900">Freemium</h3>
                  <p className="text-2xl font-bold text-green-600">Gratuit</p>
                  <p className="text-sm text-gray-600 mt-2">12 questions RSE</p>
                  <p className="text-xs text-gray-500">Score global + alertes</p>
                </div>
                <div className="border-2 border-blue-500 rounded-lg p-4 text-center bg-blue-50">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="font-bold text-gray-900">Diagnostic</h3>
                  <p className="text-2xl font-bold text-blue-600">50-100€</p>
                  <p className="text-sm text-gray-600 mt-2">One-shot</p>
                  <p className="text-xs text-gray-500">Analyse + Roadmap</p>
                </div>
                <div className="border-2 border-green-500 rounded-lg p-4 text-center bg-green-50">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-bold text-gray-900">Abonnement</h3>
                  <p className="text-2xl font-bold text-green-600">150-200€/mois</p>
                  <p className="text-sm text-gray-600 mt-2">Suivi continu</p>
                  <p className="text-xs text-gray-500">Alertes + IA + E-learning</p>
                </div>
                <div className="border-2 border-purple-500 rounded-lg p-4 text-center bg-purple-50">
                  <div className="text-2xl mb-2">📦</div>
                  <h3 className="font-bold text-gray-900">Modules</h3>
                  <p className="text-2xl font-bold text-purple-600">+50-100€/mois</p>
                  <p className="text-sm text-gray-600 mt-2">GDP, HACCP, ADR, CO2</p>
                  <p className="text-xs text-gray-500">Optionnel V2</p>
                </div>
              </div>
            </section>

            {/* Profils utilisateurs */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 Profils Utilisateurs</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold">Profil</th>
                      <th className="text-left p-3 font-semibold">Rôle</th>
                      <th className="text-left p-3 font-semibold">Droits</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">👔 Transporteur (Dirigeant)</td>
                      <td className="p-3 text-gray-600">Payeur principal</td>
                      <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full admin</span></td>
                      <td className="p-3 text-gray-600">Gestion users, paiements, validation</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-medium">📋 Manager / Exploitation</td>
                      <td className="p-3 text-gray-600">Opérationnel quotidien</td>
                      <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Accès partiel</span></td>
                      <td className="p-3 text-gray-600">Upload docs, suivi actions</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">🎯 Responsable Qualité</td>
                      <td className="p-3 text-gray-600">Gestionnaire conformité</td>
                      <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Accès étendu</span></td>
                      <td className="p-3 text-gray-600">Actions correctives, e-learning</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-medium">🤝 Consultant externe</td>
                      <td className="p-3 text-gray-600">Prestataire B2B2C</td>
                      <td className="p-3"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Interface dédiée</span></td>
                      <td className="p-3 text-gray-600">Gestion multi-clients (V2)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">🚚 Chauffeur</td>
                      <td className="p-3 text-gray-600">Personnel terrain</td>
                      <td className="p-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Limité (V2)</span></td>
                      <td className="p-3 text-gray-600">Consultation formations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Algorithme de scoring */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧮 Algorithme de Scoring RSE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Pondération par domaine</h3>
                  <div className="space-y-3">
                    {[
                      { domain: 'Inspection du Travail', weight: 25, color: 'bg-red-500' },
                      { domain: 'URSSAF', weight: 25, color: 'bg-orange-500' },
                      { domain: 'Accidents du Travail', weight: 20, color: 'bg-yellow-500' },
                      { domain: 'Tachygraphe & Temps conduite', weight: 15, color: 'bg-blue-500' },
                      { domain: 'Facturation électronique', weight: 10, color: 'bg-purple-500' },
                      { domain: 'Normes environnementales', weight: 5, color: 'bg-green-500' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-24 text-right text-sm font-medium">{item.weight}%</div>
                        <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color}`} style={{ width: `${item.weight * 4}%` }}></div>
                        </div>
                        <div className="w-48 text-sm text-gray-600">{item.domain}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Seuils de décision</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-2xl">🔴</span>
                      <div>
                        <p className="font-semibold text-red-800">0-40 points</p>
                        <p className="text-sm text-red-600">Risque critique • Alerte rouge</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="text-2xl">🟠</span>
                      <div>
                        <p className="font-semibold text-orange-800">41-70 points</p>
                        <p className="text-sm text-orange-600">Partiellement conforme • Roadmap 3 mois</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-2xl">🟢</span>
                      <div>
                        <p className="font-semibold text-green-800">71-100 points</p>
                        <p className="text-sm text-green-600">Conforme • Badge vert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-mono text-gray-700">
                  score_global = 0.25 × inspection + 0.25 × urssaf + 0.20 × accidents + 0.15 × tachygraphe + 0.10 × facturation + 0.05 × environnement
                </p>
              </div>
            </section>

            {/* MVP Scope */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ Périmètre MVP (Ce qui est inclus)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-green-600 mb-4">✅ Inclus (obligatoire)</h3>
                  <div className="space-y-2">
                    {[
                      { item: 'Freemium (12 questions)', priority: 'P0' },
                      { item: 'Diagnostic complet payant', priority: 'P0' },
                      { item: 'Scoring conformité RSE (6 domaines)', priority: 'P0' },
                      { item: 'Plan d\'action personnalisé', priority: 'P0' },
                      { item: 'Abonnement + suivi mensuel', priority: 'P1' },
                      { item: 'Alertes automatiques', priority: 'P1' },
                      { item: 'Création documents IA', priority: 'P1' },
                      { item: 'Gestion documentaire + OCR', priority: 'P1' },
                      { item: 'E-learning (5-10 modules)', priority: 'P2' },
                      { item: 'Support chat/email', priority: 'P2' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded font-medium ${
                          f.priority === 'P0' ? 'bg-red-100 text-red-800' :
                          f.priority === 'P1' ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>{f.priority}</span>
                        <span className="text-sm text-gray-700">{f.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-4">❌ Hors scope MVP</h3>
                  <div className="space-y-2">
                    {[
                      { item: 'Audit blanc physique', reason: 'Présence terrain' },
                      { item: 'Accompagnement terrain', reason: 'Ressources' },
                      { item: 'App mobile native', reason: 'Complexité → PWA' },
                      { item: 'Intégration TMS/ERP', reason: 'Trop complexe' },
                      { item: 'Interface consultant B2B2C', reason: 'À valider → V2' },
                      { item: 'Gestion multi-sites', reason: 'Modèle à clarifier → V2' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span className="text-gray-700">{f.item}</span>
                        <span className="text-xs text-gray-400">({f.reason})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SLA & Support */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Support & SLA</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Canaux de communication</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">💬</span>
                      <div>
                        <p className="font-medium">Chat intégré</p>
                        <p className="text-sm text-gray-500">SLA: {"<"} 2h</p>
                      </div>
                      <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded">MVP</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-500">SLA: {"<"} 24h</p>
                      </div>
                      <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded">MVP</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-sm text-gray-500">Sur RDV</p>
                      </div>
                      <span className="ml-auto bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Premium</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Mix IA / Humain</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-20 font-medium">80% IA</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">Diagnostic, scoring, alertes, création docs, chatbot FAQ</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-20 font-medium">20% Humain</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">Cas ambigus, interprétation réglementaire, validation critique</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ThermoMatch Ecosystem */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-800 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">🔗 Écosystème ClearGo + ThermoMatch</h2>
              <p className="text-purple-200 mb-6">
                ClearGo prépare les transporteurs à la conformité → ThermoMatch les connecte aux donneurs d'ordre pharma
              </p>
              
              {/* Documentation Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a href="/docs/CLEARAGO_THERMOMATCH_SUMMARY.md" target="_blank" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                  <p className="font-semibold">📋 Résumé Exécutif ThermoMatch</p>
                  <p className="text-sm text-purple-200">Business case, 4 use cases, roadmap intégration</p>
                </a>
                <a href="/docs/CLEARAGO_THERMOMATCH_INTEGRATION.md" target="_blank" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                  <p className="font-semibold">⚙️ Document Technique Intégration</p>
                  <p className="text-sm text-purple-200">API specs, algorithmes matching, architecture</p>
                </a>
              </div>

              {/* Revenue Projections */}
              <h3 className="font-semibold mb-3">💰 Projections Revenue (3 Ans)</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { year: 'Année 1', cleargo: '1,0 M€', thermomatch: '0,27 M€', total: '1,27 M€' },
                  { year: 'Année 2', cleargo: '2,5 M€', thermomatch: '0,60 M€', total: '3,10 M€' },
                  { year: 'Année 3', cleargo: '5,0 M€', thermomatch: '1,15 M€', total: '6,15 M€' },
                ].map((row, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-sm text-purple-200">{row.year}</p>
                    <p className="text-2xl font-bold">{row.total}</p>
                    <p className="text-xs text-purple-300">ClearGo: {row.cleargo} + TM: {row.thermomatch}</p>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <h3 className="font-semibold mb-3">🎯 4 Use Cases Principaux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  { num: 1, title: 'Donneur d\'ordre cherche transporteur GDP', lead: 'ThermoMatch (3% commission)' },
                  { num: 2, title: 'Transporteur atteint éligibilité ThermoMatch', lead: 'ThermoMatch (nouveau transporteur)' },
                  { num: 3, title: 'Audit sous-traitant (500€)', lead: 'ThermoMatch OU ClearGo' },
                  { num: 4, title: 'Lead generation proactive (IA)', lead: 'ThermoMatch (conversion)' },
                ].map((uc, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">{uc.num}</span>
                    <div>
                      <p className="font-medium text-sm">{uc.title}</p>
                      <p className="text-xs text-purple-200">Lead → {uc.lead}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Roadmap */}
              <h3 className="font-semibold mb-3">📅 Roadmap Intégration</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[
                  { phase: 'Phase 1', months: 'M1-4', title: 'MVP ClearGo', status: '✅ En cours' },
                  { phase: 'Phase 2', months: 'M5-6', title: 'API ClearGo', status: '15j dev' },
                  { phase: 'Phase 3', months: 'M7-9', title: 'MVP ThermoMatch', status: '60j dev' },
                  { phase: 'Phase 4', months: 'M10-12', title: 'Intégration', status: '20j dev' },
                  { phase: 'Phase 5', months: 'M13-15', title: 'Audit Sous-Traitant', status: '25j dev' },
                  { phase: 'Phase 6', months: 'M16-18', title: 'Scale & ML', status: '30j dev' },
                ].map((p, i) => (
                  <div key={i} className="flex-shrink-0 bg-white/10 rounded-lg p-3 w-36 text-center">
                    <p className="text-xs text-purple-300">{p.months}</p>
                    <p className="font-semibold text-sm">{p.phase}</p>
                    <p className="text-xs">{p.title}</p>
                    <p className="text-xs text-purple-200 mt-1">{p.status}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Objectifs mesurables */}
            <section className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">📊 Objectifs Business Mesurables</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: 'Transporteurs accompagnés', value: '500', horizon: '12 mois' },
                  { metric: 'Taux réussite conformité', value: '100%', horizon: 'Continue' },
                  { metric: 'Conversion free→paid', value: '15-20%', horizon: 'KPI' },
                  { metric: 'Rétention abonnement', value: '>85%', horizon: '12 mois' },
                  { metric: 'Temps mise en conformité', value: '<3 mois', horizon: 'Post-abo' },
                  { metric: 'Réduction coût vs consulting', value: '75%', horizon: '—' },
                  { metric: 'NPS', value: '>50', horizon: 'Trimestriel' },
                  { metric: 'LTV/CAC', value: '>10x', horizon: 'Ratio' },
                ].map((m, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4">
                    <p className="text-2xl font-bold">{m.value}</p>
                    <p className="text-sm text-green-200">{m.metric}</p>
                    <p className="text-xs text-green-300">{m.horizon}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

      </div>

      {/* Modal for full-size mockup */}
      {selectedMockup && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMockup(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedMockup(null)}
              className="absolute -top-12 right-0 text-white text-lg hover:text-gray-300"
            >
              ✕ Fermer
            </button>
            <Image
              src={mockups.find(m => m.id === selectedMockup)?.image || ''}
              alt="Mockup"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
