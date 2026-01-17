"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, FolderOpen, Shield, ArrowRight } from "lucide-react"

interface PillarsSectionProps {
  onScrollToEvaluation?: () => void
}

export function PillarsSection({ onScrollToEvaluation }: PillarsSectionProps) {
  const pillars = [
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Diagnostic",
      subtitle: "Évaluez votre maturité organisationnelle",
      features: [
        "Questionnaire intelligent",
        "Score de conformité ISO 9001",
        "Roadmap personnalisée"
      ],
      color: "blue"
    },
    {
      icon: FolderOpen,
      emoji: "📁",
      title: "Structure",
      subtitle: "Organisez et centralisez vos documents",
      features: [
        "Bibliothèque documentaire smart",
        "Templates pré-remplis",
        "Versioning automatique"
      ],
      color: "green"
    },
    {
      icon: Shield,
      emoji: "🛡️",
      title: "Conformité",
      subtitle: "Prouvez votre valeur à vos clients",
      features: [
        "Rapports de conformité PDF",
        "Dashboard temps réel",
        "Alertes proactives"
      ],
      color: "blue"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cleargo-green font-medium text-sm uppercase tracking-wider">
            Notre méthode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Un programme de transformation en{" "}
            <span className="text-cleargo-blue">3 piliers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pas une simple liste de fonctionnalités. Une méthode éprouvée 
            pour transformer durablement votre conformité.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative group bg-white border border-gray-200 rounded-2xl p-8 hover:border-cleargo-blue/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cleargo-blue text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                pillar.color === "blue" 
                  ? "bg-cleargo-blue/10" 
                  : "bg-cleargo-green/10"
              }`}>
                {pillar.emoji}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {pillar.subtitle}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 ${
                      pillar.color === "blue" 
                        ? "text-cleargo-blue" 
                        : "text-cleargo-green"
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-cleargo-green hover:bg-cleargo-green/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cleargo-green/25"
            onClick={onScrollToEvaluation}
          >
            🚀 Démarrer mon diagnostic gratuit
          </Button>
        </div>
      </div>
    </section>
  )
}
