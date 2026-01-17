"use client"

import Image from "next/image"
import { Star, TrendingUp, Clock, CheckCircle } from "lucide-react"

export function SocialProofSection() {
  const stats = [
    {
      value: "+40%",
      label: "Contrats gagnés",
      description: "grâce à la conformité prouvée",
      icon: TrendingUp,
      color: "green"
    },
    {
      value: "-60%",
      label: "Temps admin",
      description: "économisé sur la gestion docs",
      icon: Clock,
      color: "blue"
    },
    {
      value: "100%",
      label: "Audits réussis",
      description: "du premier coup",
      icon: CheckCircle,
      color: "green"
    }
  ]

  const testimonial = {
    quote: "Avant ClearGo, je perdais 2 jours par mois à chercher des documents pour les audits. Aujourd'hui, tout est prêt en 1 clic. J'ai même gagné un appel d'offres grâce à notre dossier de conformité.",
    author: "Marc D.",
    role: "Dirigeant TransLogistic",
    company: "45 véhicules",
    rating: 5
  }

  const certifications = [
    "ISO 9001",
    "GDP",
    "ADR",
    "RSE",
    "HACCP"
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cleargo-green font-medium text-sm uppercase tracking-wider">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Ils ont transformé leur conformité
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 text-8xl text-cleargo-blue/10 font-serif">
              "
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-center relative z-10">
              {/* Image */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/HappyDirigeant.png"
                    alt={testimonial.author}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-cleargo-green/30 transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  stat.color === "green" 
                    ? "bg-cleargo-green/10 text-cleargo-green" 
                    : "bg-cleargo-blue/10 text-cleargo-blue"
                }`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${
                  stat.color === "green" ? "text-cleargo-green" : "text-cleargo-blue"
                }`}>
                  {stat.value}
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Certifications couvertes</p>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
