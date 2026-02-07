"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle2, Award, Shield, Leaf } from "lucide-react"

// Import des steps
import Step1Company from "./components/Step1Company"
import Step2Vehicles from "./components/Step2Vehicles"
import Step3Drivers from "./components/Step3Drivers"
import Step4Enterprise from "./components/Step4Enterprise"
import Step5SMI from "./components/Step5SMI"
import Step6Expert from "./components/Step6Expert"
import Step7Results from "./components/Step7Results"

export default function EvaluationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<any>({})
  
  const totalSteps = 7
  const progress = (currentStep / totalSteps) * 100

  const updateFormData = (stepData: any) => {
    setFormData((prev: any) => ({ ...prev, ...stepData }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Informations de votre entreprise"
      case 2: return "Module Véhicules"
      case 3: return "Module Conducteurs"
      case 4: return "Module Entreprise"
      case 5: return "Module SMI / ISO Qualité"
      case 6: return "Module Expert ISO 45001 / 14001 / RSE"
      case 7: return "Votre ClearGo Score"
      default: return ""
    }
  }

  const getStepIcon = () => {
    switch (currentStep) {
      case 1: return <Award className="h-6 w-6" />
      case 2:
      case 3:
      case 4: return <CheckCircle2 className="h-6 w-6" />
      case 5: return <Shield className="h-6 w-6" />
      case 6: return <Leaf className="h-6 w-6" />
      case 7: return <Award className="h-6 w-6" />
      default: return null
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Company formData={formData} updateFormData={updateFormData} />
      case 2:
        return <Step2Vehicles formData={formData} updateFormData={updateFormData} />
      case 3:
        return <Step3Drivers formData={formData} updateFormData={updateFormData} />
      case 4:
        return <Step4Enterprise formData={formData} updateFormData={updateFormData} />
      case 5:
        return <Step5SMI formData={formData} updateFormData={updateFormData} />
      case 6:
        return <Step6Expert formData={formData} updateFormData={updateFormData} />
      case 7:
        return <Step7Results formData={formData} />
      default:
        return null
    }
  }

  return (
    <div className="light min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="bg-blue-600 text-white mb-4">Évaluation Gratuite</Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Calculez votre ClearGo Score
          </h1>
          <p className="text-lg text-slate-600">
            Répondez à ces questions pour obtenir votre score de conformité en 3 minutes
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700">
              Étape {currentStep} / {totalSteps}
            </span>
            <span className="text-sm text-slate-500">
              {Math.round(progress)}% complété
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Step Card */}
        <Card className="mb-8 border-2 border-slate-200 shadow-xl">
          <CardContent className="p-8">
            {/* Step Title */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                {getStepIcon()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{getStepTitle()}</h2>
                <p className="text-sm text-slate-500">
                  {currentStep <= 4 && "Questions CORE"}
                  {currentStep === 5 && "ADVANCED - SMI/ISO"}
                  {currentStep === 6 && "EXPERT - ISO 45001/14001/RSE"}
                  {currentStep === 7 && "Résultat final"}
                </p>
              </div>
            </div>

            {/* Step Content */}
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep < 7 && (
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>

            <Button
              onClick={nextStep}
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              {currentStep === 6 ? 'Voir mon score' : 'Suivant'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
