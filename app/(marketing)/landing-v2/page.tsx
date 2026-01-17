"use client"

import { useRef } from "react"
import {
  HeroSectionV2,
  ProblemSection,
  TransitionSection,
  PillarsSection,
  HowItWorksSection,
  SocialProofSection,
  EvaluationSection,
  CTAFinalSection,
  VideoSection
} from "@/components/landing-v2"

export default function LandingPageV2() {
  const evaluationRef = useRef<HTMLDivElement>(null)

  const scrollToEvaluation = () => {
    evaluationRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <HeroSectionV2 onScrollToEvaluation={scrollToEvaluation} />

      {/* Section 2: Problem - Empathy */}
      <ProblemSection />

      {/* Section 2b: Videos Side by Side (autoplay, muted) */}
      <VideoSection variant="both" />

      {/* Section 3: Transition - Before/After */}
      <TransitionSection />

      {/* Section 4: Solution - 3 Pillars */}
      <PillarsSection onScrollToEvaluation={scrollToEvaluation} />

      {/* Section 5: How It Works - 4 Steps */}
      <HowItWorksSection />

      {/* Section 6: Social Proof */}
      <SocialProofSection />

      {/* Section 7: Evaluation Form */}
      <div ref={evaluationRef}>
        <EvaluationSection id="evaluation" />
      </div>

      {/* Section 8: Final CTA */}
      <CTAFinalSection />
    </main>
  )
}
