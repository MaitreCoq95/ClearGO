"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTAFinalSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-cleargo-blue-dark via-cleargo-blue to-cleargo-blue-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cleargo-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cleargo-green rounded-full animate-pulse" />
            Commencez gratuitement
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à reprendre le contrôle ?
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Rejoignez les dirigeants qui ont transformé leur conformité 
            en avantage concurrentiel.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Link href="/assessment">
              <Button
                size="lg"
                className="bg-cleargo-green hover:bg-cleargo-green/90 text-white font-bold px-10 py-7 text-xl shadow-xl shadow-cleargo-green/30 hover:shadow-2xl hover:shadow-cleargo-green/40 transition-all"
              >
                🚀 Démarrer mon évaluation gratuite
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/50 text-sm">ou contactez-nous directement</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+33123456789"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>01 23 45 67 89</span>
            </a>
            <a
              href="mailto:hello@cleargo.fr"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>hello@cleargo.fr</span>
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-10 text-white/50 text-sm">
            🔒 Évaluation gratuite • Sans engagement • Résultats en 5 minutes
          </p>
        </div>
      </div>
    </section>
  )
}
