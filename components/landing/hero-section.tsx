"use client"

import { Badge } from "@/components/ui/badge"
import { ChevronDown, Shield, Users, BookOpen, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Variantes A/B/C pour les headlines - TRANSPORT & COMPLIANCE
const headlines = {
  A: {
    text: "Simplifiez votre conformité transport. Maîtrisez vos certifications.",
    highlight: "conformité transport",
    angle: "Clarté / Solution"
  },
  B: {
    text: "ISO 9001, GDP, ADR : une plateforme, toutes vos certifications.",
    highlight: "une plateforme, toutes vos certifications",
    angle: "Multi-normes"
  },
  C: {
    text: "Préparez vos audits en toute sérénité. ClearGo vous accompagne.",
    highlight: "en toute sérénité",
    angle: "Réassurance"
  }
}

type HeadlineVariant = keyof typeof headlines

interface HeroSectionProps {
  variant?: HeadlineVariant
  onScrollToForm?: () => void
  onScrollToMethod?: () => void
}

export function HeroSection({ variant = "A", onScrollToForm, onScrollToMethod }: HeroSectionProps) {
  const headline = headlines[variant]

  // Fonction pour mettre en évidence le texte
  const renderHeadline = () => {
    const parts = headline.text.split(headline.highlight)
    return (
      <>
        {parts[0]}
        <span className="text-cleargo-green">{headline.highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(46, 134, 193, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(39, 174, 96, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Alerte + Positionnement */}
          <div className="animate-slide-in-up flex flex-col sm:flex-row gap-2 justify-center items-center" style={{ animationFillMode: 'both' }}>
            <Badge className="bg-cleargo-green/10 text-cleargo-green border-cleargo-green/30 text-sm px-4 py-1.5">
              🚛 Plateforme compliance transport
            </Badge>
            <Badge className="bg-cleargo-blue/10 text-cleargo-blue border-cleargo-blue/30 text-sm px-4 py-1.5">
              <Shield className="w-4 h-4 mr-2" />
              ISO 9001 • GDP • ADR
            </Badge>
          </div>
          <div className="h-6" />

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cleargo-blue-dark leading-tight mb-6 animate-slide-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            {renderHeadline()}
          </h1>

          {/* Sous-headline - Les 3 piliers */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 animate-slide-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <span className="text-cleargo-blue-dark font-semibold">Évaluation de maturité</span> +{" "}
            <span className="text-cleargo-blue-dark font-semibold">Formation continue</span> +{" "}
            <span className="text-cleargo-blue-dark font-semibold">Accompagnement expert</span>.
            <br className="hidden md:block" />
            <span className="text-muted-foreground">L&apos;écosystème complet pour piloter votre conformité et réussir vos audits.</span>
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
          >
            <Link href="/signup?standard=ISO_9001">
              <button 
                className="bg-cleargo-green hover:bg-cleargo-green/90 text-white font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cleargo-green/20"
              >
                ÉVALUER MA CONFORMITÉ →
              </button>
            </Link>
            <Link href="/pricing">
              <button 
                className="border-2 border-cleargo-blue/30 hover:border-cleargo-blue/50 text-cleargo-blue font-medium py-4 px-8 rounded-lg transition-all hover:bg-cleargo-blue/5"
              >
                Voir les tarifs ↓
              </button>
            </Link>
          </div>

          {/* Dashboard Mockup Preview */}
          <div 
            className="relative max-w-4xl mx-auto mb-12 animate-slide-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-2xl shadow-cleargo-blue/10 p-1">
              {/* Mockup Header */}
              <div className="bg-cleargo-blue-dark rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-300 ml-2">app.cleargo.fr/dashboard</span>
              </div>
              
              {/* Mockup Content - 3 colonnes hybrides */}
              <div className="bg-gray-50 p-6 rounded-b-xl">
                {/* 3 Zones hybrides */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Zone PLATEFORME */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-cleargo-blue/10 flex items-center justify-center">
                        <span className="text-lg">📊</span>
                      </div>
                      <span className="text-cleargo-blue-dark font-medium text-sm">Conformité</span>
                    </div>
                    <p className="text-3xl font-bold text-cleargo-blue mb-1">72%</p>
                    <p className="text-xs text-muted-foreground">Score global</p>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-cleargo-blue rounded-full" style={{ width: '72%' }} />
                    </div>
                  </div>

                  {/* Zone FORMATION */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-cleargo-green/10 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-cleargo-green" />
                      </div>
                      <span className="text-cleargo-blue-dark font-medium text-sm">Formation</span>
                    </div>
                    <p className="text-3xl font-bold text-cleargo-green mb-1">89%</p>
                    <p className="text-xs text-muted-foreground">Équipes formées</p>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-cleargo-green rounded-full" style={{ width: '89%' }} />
                    </div>
                  </div>

                  {/* Zone CONSULTING */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-cleargo-blue-light/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-cleargo-blue" />
                      </div>
                      <span className="text-cleargo-blue-dark font-medium text-sm">Expert</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-cleargo-blue/10 flex items-center justify-center text-xs">👨‍💼</div>
                      <span className="text-cleargo-blue font-medium text-sm">Marc D.</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Expert QHSE dédié</p>
                  </div>
                </div>

                {/* Timeline Road to Certification */}
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cleargo-blue-dark font-medium text-sm">🎯 Suivi de Conformité Multi-Normes</span>
                    <span className="text-xs text-cleargo-green font-medium">Mois 8/14</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cleargo-green via-cleargo-blue to-cleargo-blue-light rounded-full" style={{ width: '60%' }} />
                    </div>
                    <span className="text-cleargo-blue-dark font-bold text-sm">60%</span>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                    <span className="text-cleargo-green flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Évaluation</span>
                    <span className="text-cleargo-green flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Formation</span>
                    <span className="text-cleargo-blue">⏳ Actions</span>
                    <span className="text-gray-400">○ Audit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cleargo-blue/10 via-transparent to-cleargo-green/10 rounded-3xl blur-3xl -z-10" />
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={onScrollToMethod || onScrollToForm}
            className="group flex flex-col items-center gap-2 mx-auto hover:translate-y-1 transition-transform animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <span className="text-sm text-muted-foreground group-hover:text-cleargo-green transition-colors">
              Découvrir notre méthode
            </span>
            <ChevronDown className="w-6 h-6 text-cleargo-green animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Export legacy pour compatibilité
export default HeroSection
