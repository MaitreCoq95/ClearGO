"use client"

import Image from "next/image"
import { FileX, Clock, Search, Lock } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    {
      icon: Clock,
      emoji: "😓",
      text: "Les audits vous stressent plus qu'ils ne devraient"
    },
    {
      icon: FileX,
      emoji: "📂",
      text: "Vos documents sont éparpillés entre l'email, le drive, et \"quelque part\""
    },
    {
      icon: Search,
      emoji: "⏰",
      text: "Vous passez plus de temps à chercher qu'à travailler"
    },
    {
      icon: Lock,
      emoji: "🔒",
      text: "La conformité vous semble être un poids, pas un atout"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cleargo-blue font-medium text-sm uppercase tracking-wider">
            On vous comprend
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            On comprend ce que vous vivez au quotidien
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vous n'êtes pas seul. Des centaines de dirigeants transport 
            partagent ces mêmes frustrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/DirigeantStress.png"
                alt="Dirigeant stressé par la conformité"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Quote card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl shadow-lg p-5 max-w-xs border-l-4 border-cleargo-blue">
              <p className="text-gray-700 text-sm italic mb-2">
                "J'ai perdu un contrat important parce que je n'ai pas pu 
                prouver notre conformité à temps."
              </p>
              <p className="text-gray-500 text-xs">
                — Dirigeant de PME Transport (12 chauffeurs)
              </p>
            </div>
          </div>

          {/* Right: Pain points */}
          <div className="order-1 lg:order-2 space-y-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-cleargo-blue/20 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl">
                  {point.emoji}
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-lg">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Video teaser */}
            <div className="mt-8 p-4 bg-slate-100 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-cleargo-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">🎬</span>
                </div>
                <p className="text-sm">
                  <span className="font-medium">Vous vous reconnaissez ?</span>
                  <br />
                  <span className="text-gray-500">Découvrez comment ClearGo change la donne →</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
