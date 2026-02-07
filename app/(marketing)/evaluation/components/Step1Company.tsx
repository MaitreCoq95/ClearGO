"use client"

import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Building2, Users, Truck, CheckCircle2, Loader2, AlertCircle, TrendingUp, DollarSign } from "lucide-react"
import { useSiretValidation } from "@/lib/hooks/use-siret-validation"
import { formatSiret } from "@/lib/services/siret-service"

interface Step1Props {
  formData: Record<string, string | number | undefined>
  updateFormData: (data: Record<string, string | number>) => void
}

export default function Step1Company({ formData, updateFormData }: Step1Props) {
  const { validateSiret, isValidating, result, error } = useSiretValidation()

  const handleChange = (field: string, value: string | number) => {
    updateFormData({ [`step1_${field}`]: value })
  }

  const handleSiretChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formatted = formatSiret(value)
    handleChange('siret', formatted)

    // Valider si 14 chiffres
    const clean = value.replace(/\s/g, '')
    if (clean.length === 14) {
      await validateSiret(clean)
    }
  }

  // Auto-remplir le nom de l'entreprise quand le SIRET est validé
  useEffect(() => {
    if (result?.isValid && result.companyName && !formData.step1_companyName) {
      handleChange('companyName', result.companyName)
    }
  }, [result, formData.step1_companyName])

  // Formatter le CA pour affichage
  const formatCA = (value: number) => {
    if (value >= 1000) return `${(value / 1000).toFixed(1)}M€`
    return `${value}K€`
  }

  return (
    <div className="space-y-6">
      {/* Bénéfice ROI - Pourquoi remplir SIRET et CA */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="bg-green-600 rounded-full p-2 flex-shrink-0">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-green-900 text-lg mb-2">
              🎯 Maximisez la précision de votre évaluation
            </h3>
            <p className="text-sm text-green-800 mb-3">
              En renseignant votre <strong>SIRET</strong> et votre <strong>chiffre d&apos;affaires</strong>, nous pourrons :
            </p>
            <ul className="text-sm text-green-800 space-y-1 ml-4">
              <li>✅ Calculer votre <strong>ROI personnalisé</strong> avec ClearGo</li>
              <li>✅ Estimer vos <strong>économies réelles</strong> (temps + amendes évitées)</li>
              <li>✅ Vous recommander l&apos;offre <strong>la plus adaptée</strong> à votre activité</li>
              <li>✅ Pré-remplir automatiquement vos informations</li>
            </ul>
            <p className="text-xs text-green-700 mt-3 font-semibold">
              💡 Ces informations restent 100% confidentielles et ne seront jamais partagées.
            </p>
          </div>
        </div>
      </div>

      {/* SIRET - En premier pour auto-complétion */}
      <div>
        <Label htmlFor="siret" className="flex items-center gap-2 mb-2">
          <Building2 className="h-4 w-4 text-blue-600" />
          SIRET <span className="text-orange-600 font-semibold">(recommandé pour calcul ROI)</span>
        </Label>
        <div className="relative">
          <Input
            id="siret"
            placeholder="123 456 789 00012"
            value={(formData.step1_siret as string) || ''}
            onChange={handleSiretChange}
            maxLength={17}
            className={`pr-10 ${
              result?.isValid ? 'border-green-500 focus:border-green-500' : 
              error ? 'border-red-500 focus:border-red-500' : ''
            }`}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {isValidating && <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />}
            {!isValidating && result?.isValid && <CheckCircle2 className="h-5 w-5 text-green-600" />}
            {!isValidating && error && <AlertCircle className="h-5 w-5 text-red-600" />}
          </div>
        </div>
        
        {result?.isValid && (
          <div className="mt-2 flex items-start gap-2 text-sm text-green-700 bg-green-50 rounded-lg p-3">
            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">{result.companyName}</p>
              {result.address && (
                <p className="text-xs text-green-600">{result.address}, {result.postalCode} {result.city}</p>
              )}
            </div>
          </div>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
      </div>

      {/* Nom entreprise */}
      <div>
        <Label htmlFor="companyName" className="flex items-center gap-2 mb-2">
          <Building2 className="h-4 w-4 text-blue-600" />
          Nom de votre entreprise *
        </Label>
        <Input
          id="companyName"
          placeholder="Ex: Transport Dupont"
          value={(formData.step1_companyName as string) || ''}
          onChange={(e) => handleChange('companyName', e.target.value)}
          className="text-lg"
        />
      </div>

      {/* Nom & Prénom */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            placeholder="Jean"
            value={(formData.step1_firstName as string) || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            placeholder="Dupont"
            value={(formData.step1_lastName as string) || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email professionnel *</Label>
        <Input
          id="email"
          type="email"
          placeholder="jean.dupont@entreprise.fr"
          value={(formData.step1_email as string) || ''}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      {/* Téléphone */}
      <div>
        <Label htmlFor="phone">Téléphone *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={(formData.step1_phone as string) || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>

      {/* Chiffre d'affaires annuel */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <Label className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-emerald-600" />
            Chiffre d&apos;affaires annuel <span className="text-xs text-orange-600 font-semibold">(pour calcul ROI)</span>
          </Label>
          <span className="text-2xl font-bold text-emerald-600">
            {formatCA((formData.step1_ca as number) || 120)}
          </span>
        </div>
        <Slider
          value={[(formData.step1_ca as number) || 120]}
          onValueChange={(value) => handleChange('ca', value[0])}
          min={30}
          max={3000}
          step={10}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>30K€</span>
          <span>3M€</span>
        </div>
      </div>

      {/* Nombre de véhicules */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <Label className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-purple-600" />
            Nombre de véhicules
          </Label>
          <span className="text-2xl font-bold text-purple-600">
            {(formData.step1_vehicles as number) || 10}
          </span>
        </div>
        <Slider
          value={[(formData.step1_vehicles as number) || 10]}
          onValueChange={(value) => handleChange('vehicles', value[0])}
          min={1}
          max={100}
          step={1}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>1</span>
          <span>100</span>
        </div>
      </div>

      {/* Nombre de chauffeurs */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <Label className="flex items-center gap-2">
            <Users className="h-4 w-4 text-green-600" />
            Nombre de conducteurs
          </Label>
          <span className="text-2xl font-bold text-green-600">
            {(formData.step1_drivers as number) || 12}
          </span>
        </div>
        <Slider
          value={[(formData.step1_drivers as number) || 12]}
          onValueChange={(value) => handleChange('drivers', value[0])}
          min={1}
          max={150}
          step={1}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>1</span>
          <span>150</span>
        </div>
      </div>
    </div>
  )
}
