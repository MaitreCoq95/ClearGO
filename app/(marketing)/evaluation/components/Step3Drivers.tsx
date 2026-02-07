"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Users, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface Step3Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step3Drivers({ formData, updateFormData }: Step3Props) {
  const handleChange = (field: string, value: string) => {
    updateFormData({ [`step3_${field}`]: value })
  }

  return (
    <div className="space-y-8">
      {/* Question 1: Cartes conducteurs */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          1. Toutes les cartes conducteurs sont-elles valides ?
        </Label>
        <RadioGroup
          value={formData.step3_cartes || ''}
          onValueChange={(value) => handleChange('cartes', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="cartes-oui" />
            <Label htmlFor="cartes-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, toutes valides</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="partiellement" id="cartes-part" />
            <Label htmlFor="cartes-part" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Partiellement (certaines expirent bientôt)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="cartes-non" />
            <Label htmlFor="cartes-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, certaines sont expirées</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 2: FIMO/FCO */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          2. Les formations FIMO/FCO sont-elles à jour pour tous vos conducteurs ?
        </Label>
        <RadioGroup
          value={formData.step3_fimo || ''}
          onValueChange={(value) => handleChange('fimo', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="fimo-oui" />
            <Label htmlFor="fimo-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, tous à jour</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="fimo-non" />
            <Label htmlFor="fimo-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, certains ne sont pas conformes</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 3: Registres obligatoires */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          3. Tenez-vous à jour les registres obligatoires (temps de travail, etc.) ?
        </Label>
        <RadioGroup
          value={formData.step3_registres || ''}
          onValueChange={(value) => handleChange('registres', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="reg-oui" />
            <Label htmlFor="reg-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, tenus à jour rigoureusement</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="reg-non" />
            <Label htmlFor="reg-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non ou partiellement seulement</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 4: DUER */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          4. Avez-vous un Document Unique d&apos;Évaluation des Risques (DUER) à jour ?
        </Label>
        <RadioGroup
          value={formData.step3_duer || ''}
          onValueChange={(value) => handleChange('duer', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="duer-oui" />
            <Label htmlFor="duer-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, à jour et complet</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="duer-non" />
            <Label htmlFor="duer-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non ou obsolète</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 5: Permis de conduire */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          5. Vérifiez-vous périodiquement la validité des permis de conduire ?
        </Label>
        <RadioGroup
          value={formData.step3_permis || ''}
          onValueChange={(value) => handleChange('permis', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="permis-oui" />
            <Label htmlFor="permis-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, vérification systématique (tous les 6 mois min.)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="permis-non" />
            <Label htmlFor="permis-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, uniquement à l&apos;embauche</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 6: Infractions & RSE */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          6. Suivez-vous les infractions et temps de conduite (lectures cartes tous les 28j) ?
        </Label>
        <RadioGroup
          value={formData.step3_infractions || ''}
          onValueChange={(value) => handleChange('infractions', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="infr-oui" />
            <Label htmlFor="infr-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, lecture et analyse mensuelle</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="partiellement" id="infr-part" />
            <Label htmlFor="infr-part" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Partiellement (lecture sans analyse approfondie)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="infr-non" />
            <Label htmlFor="infr-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non ou irrégulier</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
