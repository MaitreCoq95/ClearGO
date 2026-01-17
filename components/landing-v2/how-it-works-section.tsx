"use client"

import { ClipboardCheck, Search, FolderOpen, Trophy } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Évaluation gratuite",
      description: "Répondez à 10 questions en 5 minutes",
      result: "Score de maturité immédiat",
      time: "5 min"
    },
    {
      number: "02",
      icon: Search,
      title: "Diagnostic approfondi",
      description: "Audit ISO 9001 complet de votre organisation",
      result: "Roadmap personnalisée 90 jours",
      time: "30 min"
    },
    {
      number: "03",
      icon: FolderOpen,
      title: "Structuration documentaire",
      description: "Organisez vos preuves avec nos templates",
      result: "Bibliothèque audit-ready",
      time: "Continue"
    },
    {
      number: "04",
      icon: Trophy,
      title: "Conformité prouvée",
      description: "Générez vos rapports clients",
      result: "Gagnez des contrats",
      time: "Toujours"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cleargo-blue font-medium text-sm uppercase tracking-wider">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            De zéro à conforme en{" "}
            <span className="text-cleargo-green">4 étapes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un parcours progressif et accompagné pour transformer 
            votre conformité sans stress.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-cleargo-blue via-cleargo-green to-cleargo-blue rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-cleargo-blue/20 transition-all h-full">
                  {/* Number circle */}
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-cleargo-blue to-cleargo-blue-dark rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cleargo-blue/25 mb-6">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Result */}
                  <div className="flex items-center gap-2 text-cleargo-green text-sm font-medium">
                    <span>→</span>
                    <span>{step.result}</span>
                  </div>

                  {/* Time badge */}
                  <div className="mt-4 inline-block px-3 py-1 bg-slate-100 rounded-full text-xs text-gray-500 font-medium">
                    ⏱️ {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
