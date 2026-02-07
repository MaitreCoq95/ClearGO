"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Shield, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface Step5Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step5SMI({ formData, updateFormData }: Step5Props) {
  const handleChange = (field: string, value: string) => {
    updateFormData({ [`step5_${field}`]: value })
  }

  return (
    <div className="space-y-8">
      <div className="bg-purple-50 border-l-4 border-purple-600 rounded-r-lg p-4 mb-6">
        <p className="text-sm text-purple-900">
          <strong>🎯 ADVANCED</strong> - Ces questions concernent votre système de management intégré et vos certifications ISO.
        </p>
      </div>

      {/* Question 1: Système qualité */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          1. Disposez-vous d&apos;un système de management de la qualité (type ISO 9001) ?
        </Label>
        <RadioGroup
          value={formData.step5_iso9001 || ''}
          onValueChange={(value) => handleChange('iso9001', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="certifie" id="iso9001-cert" />
            <Label htmlFor="iso9001-cert" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, certifié ISO 9001</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="en_cours" id="iso9001-encours" />
            <Label htmlFor="iso9001-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>En cours de certification</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="informel" id="iso9001-inf" />
            <Label htmlFor="iso9001-inf" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Système qualité informel (non certifié)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="iso9001-non" />
            <Label htmlFor="iso9001-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucun système</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 2: GDP (Bonnes Pratiques Distribution) */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          2. Êtes-vous certifié ou en cours pour la norme GDP (Bonnes Pratiques de Distribution) ?
        </Label>
        <p className="text-sm text-slate-600 mb-4 italic">
          Applicable si vous transportez des médicaments ou produits pharmaceutiques.
        </p>
        <RadioGroup
          value={formData.step5_gdp || ''}
          onValueChange={(value) => handleChange('gdp', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="certifie" id="gdp-cert" />
            <Label htmlFor="gdp-cert" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, certifié GDP</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="en_cours" id="gdp-encours" />
            <Label htmlFor="gdp-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>En cours de certification</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition">
            <RadioGroupItem value="non_concerne" id="gdp-nc" />
            <Label htmlFor="gdp-nc" className="flex items-center gap-2 cursor-pointer flex-1">
              <span className="text-slate-600">Non concerné (pas de transport pharma)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="gdp-non" />
            <Label htmlFor="gdp-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, mais nécessaire</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 3: HACCP */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          3. Êtes-vous conforme HACCP pour le transport de denrées alimentaires ?
        </Label>
        <p className="text-sm text-slate-600 mb-4 italic">
          Applicable si vous transportez des produits alimentaires.
        </p>
        <RadioGroup
          value={formData.step5_haccp || ''}
          onValueChange={(value) => handleChange('haccp', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="certifie" id="haccp-cert" />
            <Label htmlFor="haccp-cert" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, certifié HACCP</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="en_cours" id="haccp-encours" />
            <Label htmlFor="haccp-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>En cours de certification</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition">
            <RadioGroupItem value="non_concerne" id="haccp-nc" />
            <Label htmlFor="haccp-nc" className="flex items-center gap-2 cursor-pointer flex-1">
              <span className="text-slate-600">Non concerné (pas de transport alimentaire)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="haccp-non" />
            <Label htmlFor="haccp-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, mais nécessaire</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 4: Formation continue */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          4. Avez-vous un plan de formation continue pour vos équipes ?
        </Label>
        <RadioGroup
          value={formData.step5_formation || ''}
          onValueChange={(value) => handleChange('formation', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="form-oui" />
            <Label htmlFor="form-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, plan structuré et suivi</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="ponctuel" id="form-ponc" />
            <Label htmlFor="form-ponc" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Ponctuel (au coup par coup)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="form-non" />
            <Label htmlFor="form-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucun plan formalisé</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 5: Suivi Litiges & Réclamations */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          5. Avez-vous un processus formalisé pour gérer les litiges et réclamations clients ?
        </Label>
        <RadioGroup
          value={formData.step5_litiges || ''}
          onValueChange={(value) => handleChange('litiges', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="lit-oui" />
            <Label htmlFor="lit-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, registre et suivi des actions</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="lit-non" />
            <Label htmlFor="lit-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, gestion au cas par cas</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 6: Maintenance Préventive */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          6. Appliquez-vous un plan de maintenance préventive au-delà du réglementaire ?
        </Label>
        <RadioGroup
          value={formData.step5_maintenance || ''}
          onValueChange={(value) => handleChange('maintenance', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="maint-oui" />
            <Label htmlFor="maint-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, maintenance préventive planifiée</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="maint-non" />
            <Label htmlFor="maint-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, uniquement correctif ou réglementaire</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
