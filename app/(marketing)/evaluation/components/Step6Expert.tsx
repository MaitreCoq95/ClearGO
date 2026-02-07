"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Leaf, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface Step6Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step6Expert({ formData, updateFormData }: Step6Props) {
  const handleChange = (field: string, value: string) => {
    updateFormData({ [`step6_${field}`]: value })
  }

  return (
    <div className="space-y-8">
      <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4 mb-6">
        <p className="text-sm text-green-900">
          <strong>🌿 EXPERT</strong> - Ces questions concernent vos démarches RSE avancées : sécurité au travail (ISO 45001), environnement (ISO 14001) et responsabilité sociale.
        </p>
      </div>

      {/* Question 1: ISO 45001 */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          1. Êtes-vous engagé dans une démarche ISO 45001 (Santé & Sécurité au Travail) ?
        </Label>
        <RadioGroup
          value={formData.step6_iso45001 || ''}
          onValueChange={(value) => handleChange('iso45001', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="certifie" id="iso45-cert" />
            <Label htmlFor="iso45-cert" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, certifié ISO 45001</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="en_cours" id="iso45-encours" />
            <Label htmlFor="iso45-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>En cours de certification</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="informel" id="iso45-inf" />
            <Label htmlFor="iso45-inf" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Démarche informelle (système SST non certifié)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="iso45-non" />
            <Label htmlFor="iso45-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucune démarche</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 2: ISO 14001 */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          2. Êtes-vous engagé dans une démarche environnementale ISO 14001 ?
        </Label>
        <RadioGroup
          value={formData.step6_iso14001 || ''}
          onValueChange={(value) => handleChange('iso14001', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="certifie" id="iso14-cert" />
            <Label htmlFor="iso14-cert" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, certifié ISO 14001</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="en_cours" id="iso14-encours" />
            <Label htmlFor="iso14-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>En cours de certification</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="informel" id="iso14-inf" />
            <Label htmlFor="iso14-inf" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Démarche environnementale informelle</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="iso14-non" />
            <Label htmlFor="iso14-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucune démarche</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 3: Bilan Carbone */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          3. Réalisez-vous un bilan carbone de votre flotte ?
        </Label>
        <p className="text-sm text-slate-600 mb-4 italic">
          Obligatoire pour les flottes de +50 véhicules (Loi Climat 2025).
        </p>
        <RadioGroup
          value={formData.step6_bilan_carbone || ''}
          onValueChange={(value) => handleChange('bilan_carbone', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui_regulier" id="bc-reg" />
            <Label htmlFor="bc-reg" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, bilan carbone régulier et plan d&apos;action</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="oui_ponctuel" id="bc-ponc" />
            <Label htmlFor="bc-ponc" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>Oui, ponctuel (pas de suivi régulier)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="en_cours" id="bc-encours" />
            <Label htmlFor="bc-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>En cours de mise en place</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="bc-non" />
            <Label htmlFor="bc-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucun bilan</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 4: Rapport RSE */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          4. Publiez-vous un rapport RSE (Responsabilité Sociale et Environnementale) ?
        </Label>
        <RadioGroup
          value={formData.step6_rapport_rse || ''}
          onValueChange={(value) => handleChange('rapport_rse', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui_annuel" id="rse-annuel" />
            <Label htmlFor="rse-annuel" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, rapport RSE annuel publié</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="interne" id="rse-interne" />
            <Label htmlFor="rse-interne" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>Rapport interne uniquement (non publié)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="en_cours" id="rse-encours" />
            <Label htmlFor="rse-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>En cours de préparation</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="rse-non" />
            <Label htmlFor="rse-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucun rapport</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 5: Qualité de Vie au Travail (QVT) */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          5. Mesurez-vous la satisfaction et la Qualité de Vie au Travail (QVT) de vos équipes ?
        </Label>
        <RadioGroup
          value={formData.step6_qvt || ''}
          onValueChange={(value) => handleChange('qvt', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="qvt-oui" />
            <Label htmlFor="qvt-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, enquêtes régulières et plan d&apos;action</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="qvt-non" />
            <Label htmlFor="qvt-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, pas de mesure formalisée</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 6: Achats Responsables */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          6. Intégrez-vous des critères RSE dans vos achats (véhicules, pneus, carburant...) ?
        </Label>
        <RadioGroup
          value={formData.step6_achats || ''}
          onValueChange={(value) => handleChange('achats', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="achats-oui" />
            <Label htmlFor="achats-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, politique d&apos;achats responsables</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="achats-non" />
            <Label htmlFor="achats-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, critères classiques (prix/délai)</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
