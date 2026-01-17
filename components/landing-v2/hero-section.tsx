"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Play, ArrowRight } from "lucide-react"

interface HeroSectionV2Props {
  onScrollToEvaluation?: () => void
}

export function HeroSectionV2({ onScrollToEvaluation }: HeroSectionV2Props) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cleargo-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cleargo-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cleargo-green/10 text-cleargo-green px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-cleargo-green rounded-full animate-pulse" />
              Programme de transformation métier
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Simplifiez votre{" "}
                <span className="text-cleargo-blue">conformité transport.</span>
                <br />
                <span className="text-cleargo-green">Reprenez le contrôle.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                ClearGo structure votre organisation, centralise vos documents 
                et vous prépare sereinement aux audits ISO 9001, GDP, ADR.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-cleargo-green hover:bg-cleargo-green/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cleargo-green/25 hover:shadow-xl hover:shadow-cleargo-green/30 transition-all"
                onClick={onScrollToEvaluation}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Démarrer mon évaluation gratuite
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-cleargo-blue hover:text-cleargo-blue px-8 py-6 text-lg transition-all"
              >
                <Play className="mr-2 h-5 w-5" />
                Voir une démo (2 min)
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-cleargo-green" />
                <span className="text-sm font-medium">7 normes couvertes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-cleargo-green" />
                <span className="text-sm font-medium">-60% temps admin</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-cleargo-green" />
                <span className="text-sm font-medium">100% audit-ready</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating elements behind */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cleargo-blue/20 rounded-2xl blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cleargo-green/20 rounded-2xl blur-xl" />
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <Image
                  src="/images/ClearGoHERO.png"
                  alt="Dashboard ClearGo - Conformité transport simplifiée"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cleargo-green/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-cleargo-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-500">Audits réussis</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-cleargo-blue text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
                ISO 9001 Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
