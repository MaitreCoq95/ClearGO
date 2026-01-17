"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function TransitionSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cleargo-blue/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Visual transformation */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            {/* Before */}
            <div className="flex-1 max-w-xs text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-200 shadow-lg">
                <Image
                  src="/images/DirigeantStress.png"
                  alt="Avant ClearGo - Stress"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                Avant : Stress & Confusion
              </span>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-cleargo-green rounded-full flex items-center justify-center shadow-lg shadow-cleargo-green/25">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* After */}
            <div className="flex-1 max-w-xs text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cleargo-green shadow-lg">
                <Image
                  src="/images/HappyDirigeant.png"
                  alt="Après ClearGo - Sérénité"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="inline-block px-4 py-2 bg-cleargo-green/10 text-cleargo-green rounded-full text-sm font-medium">
                Après : Clarté & Maîtrise
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Et si la conformité devenait{" "}
              <span className="text-cleargo-green">votre avantage concurrentiel</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ClearGo transforme vos obligations réglementaires 
              en outil de pilotage et de crédibilité commerciale.
            </p>

            {/* Key insight */}
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
              <span className="text-2xl">💡</span>
              <span className="text-gray-700 font-medium">
                ClearGo n'est pas un logiciel. C'est un <strong className="text-cleargo-blue">programme de transformation</strong>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
