"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Truck, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface Step2Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step2Vehicles({ formData, updateFormData }: Step2Props) {
  const handleChange = (field: string, value: string) => {
    updateFormData({ [`step2_${field}`]: value })
  }

  return (
    <div className="space-y-8">
      {/* Question 1: Euro 6 */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          1. Vos véhicules de +3,5t sont-ils conformes Euro 6 ?
        </Label>
        <RadioGroup
          value={formData.step2_euro6 || ''}
          onValueChange={(value) => handleChange('euro6', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="euro6-oui" />
            <Label htmlFor="euro6-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, tous conformes Euro 6</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="partiellement" id="euro6-part" />
            <Label htmlFor="euro6-part" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Partiellement (certains véhicules seulement)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="euro6-non" />
            <Label htmlFor="euro6-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, aucun ou très peu</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 2: Contrôle technique */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          2. Les contrôles techniques sont-ils à jour pour tous vos véhicules ?
        </Label>
        <RadioGroup
          value={formData.step2_ct || ''}
          onValueChange={(value) => handleChange('ct', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="ct-oui" />
            <Label htmlFor="ct-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, tous à jour</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="ct-non" />
            <Label htmlFor="ct-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, certains sont expirés</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 3: Tachygraphe Gen2 */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          3. Avez-vous des tachygraphes intelligents Gen2 (obligatoires 2026) ?
        </Label>
        <RadioGroup
          value={formData.step2_tachy || ''}
          onValueChange={(value) => handleChange('tachy', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="tachy-oui" />
            <Label htmlFor="tachy-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, déjà équipé</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition">
            <RadioGroupItem value="prevu" id="tachy-prevu" />
            <Label htmlFor="tachy-prevu" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>Prévu avant 2026</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="tachy-non" />
            <Label htmlFor="tachy-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, pas encore prévu</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 4: Limiteur de vitesse */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          4. Vérifiez-vous périodiquement le limiteur de vitesse (annuel) ?
        </Label>
        <RadioGroup
          value={formData.step2_limiteur || ''}
          onValueChange={(value) => handleChange('limiteur', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="lim-oui" />
            <Label htmlFor="lim-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, vérification à jour</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="lim-non" />
            <Label htmlFor="lim-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non, pas de suivi spécifique</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Question 5: Équipements de sécurité */}
      <div>
        <Label className="text-lg font-semibold mb-4 block">
          5. Les équipements de sécurité (gilets, triangles, extincteurs) sont-ils complets et valides ?
        </Label>
        <RadioGroup
          value={formData.step2_equipements || ''}
          onValueChange={(value) => handleChange('equipements', value)}
        >
          <div className="flex items-center space-x-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:bg-green-100 transition">
            <RadioGroupItem value="oui" id="eq-oui" />
            <Label htmlFor="eq-oui" className="flex items-center gap-2 cursor-pointer flex-1">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Oui, complets et vérifiés</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-orange-50 border-2 border-orange-200 rounded-lg p-4 cursor-pointer hover:bg-orange-100 transition">
            <RadioGroupItem value="partiellement" id="eq-part" />
            <Label htmlFor="eq-part" className="flex items-center gap-2 cursor-pointer flex-1">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Partiellement (manques ponctuels)</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 cursor-pointer hover:bg-red-100 transition">
            <RadioGroupItem value="non" id="eq-non" />
            <Label htmlFor="eq-non" className="flex items-center gap-2 cursor-pointer flex-1">
              <XCircle className="h-5 w-5 text-red-600" />
              <span>Non vérifié</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
