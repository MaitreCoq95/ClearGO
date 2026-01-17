"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Lock, CheckCircle } from "lucide-react"

interface EvaluationSectionProps {
  id?: string
}

export function EvaluationSection({ id }: EvaluationSectionProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    fleetSize: "",
    certifications: [] as string[]
  })

  const certificationOptions = [
    { id: "iso9001", label: "ISO 9001" },
    { id: "gdp", label: "GDP (Bonnes Pratiques de Distribution)" },
    { id: "adr", label: "ADR (Matières Dangereuses)" },
    { id: "haccp", label: "HACCP (Alimentaire)" },
    { id: "rse", label: "RSE / Développement Durable" }
  ]

  const handleCertificationChange = (certId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      certifications: checked
        ? [...prev.certifications, certId]
        : prev.certifications.filter(c => c !== certId)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission
    console.log("Form submitted:", formData)
  }

  const benefits = [
    "Votre score de maturité ISO 9001",
    "Vos forces et axes d'amélioration",
    "Une roadmap personnalisée 90 jours"
  ]

  return (
    <section id={id} className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Card container */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left: Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-cleargo-blue to-cleargo-blue-dark p-8 lg:p-10 text-white">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                    🎯 Évaluation gratuite
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                    Évaluez votre maturité organisationnelle
                  </h2>

                  <p className="text-white/80">
                    Répondez à 10 questions ciblées et obtenez immédiatement :
                  </p>

                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cleargo-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Lock className="w-4 h-4" />
                      <span>Gratuit • Sans engagement • Résultats privés</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700">
                      Nom de l'entreprise
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Ex: Transports Dupont"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  {/* Two columns */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Sector */}
                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-gray-700">
                        Secteur d'activité
                      </Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => setFormData({ ...formData, sector: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transport-routier">Transport routier</SelectItem>
                          <SelectItem value="logistique">Logistique</SelectItem>
                          <SelectItem value="pharma">Pharmaceutique</SelectItem>
                          <SelectItem value="alimentaire">Alimentaire</SelectItem>
                          <SelectItem value="industrie">Industrie</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Fleet size */}
                    <div className="space-y-2">
                      <Label htmlFor="fleetSize" className="text-gray-700">
                        Taille de la flotte
                      </Label>
                      <Select
                        value={formData.fleetSize}
                        onValueChange={(value) => setFormData({ ...formData, fleetSize: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1 à 10 véhicules</SelectItem>
                          <SelectItem value="11-25">11 à 25 véhicules</SelectItem>
                          <SelectItem value="26-50">26 à 50 véhicules</SelectItem>
                          <SelectItem value="51-100">51 à 100 véhicules</SelectItem>
                          <SelectItem value="100+">Plus de 100 véhicules</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-3">
                    <Label className="text-gray-700">
                      Certifications visées
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {certificationOptions.map((cert) => (
                        <div
                          key={cert.id}
                          className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <Checkbox
                            id={cert.id}
                            checked={formData.certifications.includes(cert.id)}
                            onCheckedChange={(checked) => 
                              handleCertificationChange(cert.id, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={cert.id}
                            className="text-sm text-gray-700 cursor-pointer flex-1"
                          >
                            {cert.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cleargo-green hover:bg-cleargo-green/90 text-white font-semibold h-14 text-lg shadow-lg shadow-cleargo-green/25"
                  >
                    Commencer l'évaluation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    En continuant, vous acceptez nos{" "}
                    <a href="/terms" className="underline hover:text-cleargo-blue">CGU</a>
                    {" "}et notre{" "}
                    <a href="/privacy" className="underline hover:text-cleargo-blue">politique de confidentialité</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
