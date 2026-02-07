"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Building2, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface Step4Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step4Enterprise({ formData, updateFormData }: Step4Props) {
  const handleChange = (field: string, value: string) => {
    updateFormData({ [`step4_${field}`]: value })
  }

  return (
    <div className="space-y-8">
      {/* Question 1: URSSAF */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          1. Vos déclarations URSSAF sont-elles à jour ?
        </Label>
        <RadioGroup
          value={formData.step4_urssaf || ''}
          onValueChange={(value) => handleChange('urssaf', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="urssaf-oui" />
            <Label htmlFor="urssaf-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, tout est à jour</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="urssaf-non" />
            <Label htmlFor="urssaf-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, retard ou en cours</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 2: E-Facturation */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          2. Êtes-vous prêt pour la facturation électronique obligatoire 2026 ?
        </Label>
        <RadioGroup
          value={formData.step4_efacture || ''}
          onValueChange={(value) => handleChange('efacture', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="ef-oui" />
            <Label htmlFor="ef-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, déjà en place ou contractualisé</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="en_cours" id="ef-encours" />
            <Label htmlFor="ef-encours" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>En cours de mise en place</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="ef-non" />
            <Label htmlFor="ef-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, pas encore prévu</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 3: Accidents du Travail */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          3. Avez-vous déclaré tous vos accidents du travail dans les délais ?
        </Label>
        <RadioGroup
          value={formData.step4_at || ''}
          onValueChange={(value) => handleChange('at', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="at-oui" />
            <Label htmlFor="at-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, tous déclarés</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="aucun" id="at-aucun" />
            <Label htmlFor="at-aucun" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <span>Aucun accident à déclarer</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="at-non" />
            <Label htmlFor="at-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, certains non déclarés</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 4: Procédures sécurité */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          4. Disposez-vous de procédures écrites de sécurité ?
        </Label>
        <RadioGroup
          value={formData.step4_procedures || ''}
          onValueChange={(value) => handleChange('procedures', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="proc-oui" />
            <Label htmlFor="proc-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, procédures complètes et formalisées</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="partiellement" id="proc-part" />
            <Label htmlFor="proc-part" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Partiellement ou informelles</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="proc-non" />
            <Label htmlFor="proc-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, rien de formalisé</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 5: Capacité Financière */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          5. Transmettez-vous vos justificatifs de capacité financière à la DREAL chaque année ?
        </Label>
        <RadioGroup
          value={formData.step4_capacite || ''}
          onValueChange={(value) => handleChange('capacite', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="cap-oui" />
            <Label htmlFor="cap-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, transmis et validé</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="cap-non" />
            <Label htmlFor="cap-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non ou irrégulier</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 6: Licences de transport */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          6. Les copies conformes de licences de transport sont-elles à bord de chaque véhicule ?
        </Label>
        <RadioGroup
          value={formData.step4_licences || ''}
          onValueChange={(value) => handleChange('licences', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="lic-oui" />
            <Label htmlFor="lic-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, présentes et valides</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="lic-non" />
            <Label htmlFor="lic-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, oublis fréquents</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 7: Affichage Obligatoire */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          7. L&apos;affichage obligatoire (Convention Collective, horaires, etc.) est-il à jour ?
        </Label>
        <RadioGroup
          value={formData.step4_affichage || ''}
          onValueChange={(value) => handleChange('affichage', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="aff-oui" />
            <Label htmlFor="aff-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, panneau complet et à jour</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="aff-non" />
            <Label htmlFor="aff-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non ou incomplet</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
