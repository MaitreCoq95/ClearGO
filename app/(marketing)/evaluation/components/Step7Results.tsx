"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"
import Link from "next/link"

interface Step7Props {
  formData: any
}

// Fonction de calcul du score
// Fonction de calcul du score par catégorie
function calculateScore(formData: any) {
  let vehiclesScore = 0;
  let driversScore = 0;
  let enterpriseScore = 0;
  let bonusScore = 0;

  // --- MODULE VÉHICULES (20 points max) ---
  if (formData.step2_euro6 === 'oui') vehiclesScore += 5;
  else if (formData.step2_euro6 === 'partiellement') vehiclesScore += 2;

  if (formData.step2_ct === 'oui') vehiclesScore += 5;

  if (formData.step2_tachy === 'oui') vehiclesScore += 5;
  else if (formData.step2_tachy === 'prevu') vehiclesScore += 2;

  if (formData.step2_limiteur === 'oui') vehiclesScore += 3;

  if (formData.step2_equipements === 'oui') vehiclesScore += 2;
  else if (formData.step2_equipements === 'partiellement') vehiclesScore += 1;

  // --- MODULE CONDUCTEURS (40 points max) ---
  if (formData.step3_cartes === 'oui') driversScore += 8;
  else if (formData.step3_cartes === 'partiellement') driversScore += 4;

  if (formData.step3_fimo === 'oui') driversScore += 8;

  if (formData.step3_registres === 'oui') driversScore += 8;

  if (formData.step3_duer === 'oui') driversScore += 6;

  if (formData.step3_permis === 'oui') driversScore += 5;

  if (formData.step3_infractions === 'oui') driversScore += 5;

  // --- MODULE ENTREPRISE (40 points max) ---
  if (formData.step4_urssaf === 'oui') enterpriseScore += 10;

  if (formData.step4_efacture === 'oui') enterpriseScore += 5;
  else if (formData.step4_efacture === 'en_cours') enterpriseScore += 2;

  if (formData.step4_at === 'oui' || formData.step4_at === 'aucun') enterpriseScore += 5;

  if (formData.step4_procedures === 'oui') enterpriseScore += 8;
  else if (formData.step4_procedures === 'partiellement') enterpriseScore += 4;

  if (formData.step4_capacite === 'oui') enterpriseScore += 5;

  if (formData.step4_licences === 'oui') enterpriseScore += 5;

  if (formData.step4_affichage === 'oui') enterpriseScore += 2;

  // --- BONUS (SMI/ISO & EXPERT) ---
  // SMI
  if (formData.step5_iso9001 === 'certifie') bonusScore += 5;
  else if (formData.step5_iso9001 === 'en_cours') bonusScore += 3;
  else if (formData.step5_iso9001 === 'informel') bonusScore += 1;

  if (formData.step5_gdp === 'certifie') bonusScore += 3;
  else if (formData.step5_gdp === 'en_cours') bonusScore += 2;

  if (formData.step5_haccp === 'certifie') bonusScore += 3;
  else if (formData.step5_haccp === 'en_cours') bonusScore += 2;

  if (formData.step5_formation === 'oui') bonusScore += 2;
  else if (formData.step5_formation === 'ponctuel') bonusScore += 1;

  if (formData.step5_litiges === 'oui') bonusScore += 2;
  if (formData.step5_maintenance === 'oui') bonusScore += 2;

  // Expert
  if (formData.step6_iso45001 === 'certifie') bonusScore += 4;
  else if (formData.step6_iso45001 === 'en_cours') bonusScore += 2;
  else if (formData.step6_iso45001 === 'informel') bonusScore += 1;

  if (formData.step6_iso14001 === 'certifie') bonusScore += 4;
  else if (formData.step6_iso14001 === 'en_cours') bonusScore += 2;
  else if (formData.step6_iso14001 === 'informel') bonusScore += 1;

  if (formData.step6_bilan_carbone === 'oui_regulier') bonusScore += 3;
  else if (formData.step6_bilan_carbone === 'oui_ponctuel') bonusScore += 1;
  else if (formData.step6_bilan_carbone === 'en_cours') bonusScore += 1;

  if (formData.step6_rapport_rse === 'oui_annuel') bonusScore += 3;
  else if (formData.step6_rapport_rse === 'interne') bonusScore += 2;
  else if (formData.step6_rapport_rse === 'en_cours') bonusScore += 1;

  if (formData.step6_qvt === 'oui') bonusScore += 2;
  if (formData.step6_achats === 'oui') bonusScore += 2;

  const totalScore = Math.min(vehiclesScore + driversScore + enterpriseScore + bonusScore, 100);

  return {
    total: totalScore,
    details: {
      vehicles: vehiclesScore,
      drivers: driversScore,
      enterprise: enterpriseScore,
      bonus: bonusScore
    }
  };
}

function getScoreCategory(score: number) {
  if (score >= 75) return { name: 'Conforme', color: 'green', icon: CheckCircle2 };
  if (score >= 50) return { name: 'Attention', color: 'orange', icon: AlertTriangle };
  return { name: 'Non conforme', color: 'red', icon: AlertTriangle };
}

function getRecommendedPlan(score: number, formData: any) {
  const hasAdvanced = formData.step5_iso9001 || formData.step5_gdp || formData.step5_haccp;
  const hasExpert = formData.step6_iso45001 || formData.step6_iso14001 || formData.step6_bilan_carbone;
  
  if (hasExpert) return { name: 'Expert', price: 499, color: 'purple' };
  if (hasAdvanced) return { name: 'Advanced', price: 299, color: 'blue' };
  return { name: 'Core', price: 149, color: 'green' };
}

export default function Step7Results({ formData }: Step7Props) {
  const { total: score, details } = calculateScore(formData);
  const category = getScoreCategory(score);
  const plan = getRecommendedPlan(score, formData);
  
  const scoreColors = {
    green: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100',
      border: 'border-green-300',
      badge: 'bg-green-600',
      text: 'text-green-600',
      textDark: 'text-green-700',
      icon: 'text-green-600'
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
      border: 'border-orange-300',
      badge: 'bg-orange-600',
      text: 'text-orange-600',
      textDark: 'text-orange-700',
      icon: 'text-orange-600'
    },
    red: {
      bg: 'bg-gradient-to-br from-red-50 to-red-100',
      border: 'border-red-300',
      badge: 'bg-red-600',
      text: 'text-red-600',
      textDark: 'text-red-700',
      icon: 'text-red-600'
    }
  };

  const currentColor = scoreColors[category.color as keyof typeof scoreColors];
  
  return (
    <div className="space-y-8">
      {/* Score Display */}
      <div className={`${currentColor.bg} rounded-2xl p-8 text-center border-2 ${currentColor.border}`}>
        <Badge className={`${currentColor.badge} text-white mb-4 text-lg px-4 py-1`}>
          Votre ClearGo Score
        </Badge>
        <div className={`text-8xl font-bold ${currentColor.text} mb-2`}>
          {score}
          <span className="text-3xl text-slate-600">/100</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <category.icon className={`h-8 w-8 ${currentColor.icon}`} />
          <span className={`text-2xl font-semibold ${currentColor.textDark}`}>
            {category.name}
          </span>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <Card className="border-2 border-slate-200">
        <CardContent className="p-6 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Détail par catégorie</h3>
          
          {/* Véhicules */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-slate-700">Véhicules & Conformité</span>
              <span className="font-bold text-slate-900">{details.vehicles} / 20 pts</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${(details.vehicles / 20) * 100}%` }}
              />
            </div>
          </div>

          {/* Conducteurs */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-slate-700">Conducteurs & Social</span>
              <span className="font-bold text-slate-900">{details.drivers} / 40 pts</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 rounded-full transition-all duration-1000"
                style={{ width: `${(details.drivers / 40) * 100}%` }}
              />
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-slate-700">Entreprise & Admin</span>
              <span className="font-bold text-slate-900">{details.enterprise} / 40 pts</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all duration-1000"
                style={{ width: `${(details.enterprise / 40) * 100}%` }}
              />
            </div>
          </div>

          {/* Bonus */}
          {details.bonus > 0 && (
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-green-700 flex items-center gap-2">
                  <Award className="h-4 w-4" /> Bonus Excellence (ISO / RSE)
                </span>
                <span className="font-bold text-green-700">+{details.bonus} pts</span>
              </div>
              <div className="h-3 bg-green-50 rounded-full overflow-hidden border border-green-100">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-1000"
                  style={{ width: `${(details.bonus / 35) * 100}%` }} // 35 is approx max bonus
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recommandations & Priorities (unchanged logic, just re-rendered) */}
      {/* ... (Plan & Priorities logic follows below) ... */}
      
      {/* Recommended Plan */}
      <Card className="border-2 border-blue-300 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">
              Offre recommandée : {plan.name}
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            {plan.name === 'Core' && "Idéale pour démarrer et sécuriser vos obligations de base."}
            {plan.name === 'Advanced' && "Parfaite pour votre démarche qualité et certifications professionnelles."}
            {plan.name === 'Expert' && "Conçue pour vos ambitions RSE et vos certifications ISO avancées."}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-blue-600">{plan.price}€</span>
            <span className="text-slate-600">/mois</span>
          </div>
        </CardContent>
      </Card>

      {/* Top 3 Priorities */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-orange-600" />
          Vos 3 priorités
        </h3>
        <div className="space-y-3">
          {score < 50 && (
            <>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4">
                <p className="font-semibold text-red-900">🚨 Urgence : Sécuriser les fondamentaux</p>
                <p className="text-sm text-red-700">Mettez à jour URSSAF, DUER et cartes conducteurs en priorité.</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-600 rounded-r-lg p-4">
                <p className="font-semibold text-orange-900">⚠️ Important : Formations obligatoires</p>
                <p className="text-sm text-orange-700">Planifiez les FIMO/FCO et formations sécurité.</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-r-lg p-4">
                <p className="font-semibold text-yellow-900">📋 Recommandé : Préparer 2026</p>
                <p className="text-sm text-yellow-700">Tachygraphe Gen2 et facturation électronique.</p>
              </div>
            </>
          )}
          {score >= 50 && score < 75 && (
            <>
              <div className="bg-orange-50 border-l-4 border-orange-600 rounded-r-lg p-4">
                <p className="font-semibold text-orange-900">⚠️ Consolider : Combler les lacunes identifiées</p>
                <p className="text-sm text-orange-700">Finalisez la mise à jour de vos documents et procédures.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4">
                <p className="font-semibold text-blue-900">📈 Améliorer : Structurer vos process</p>
                <p className="text-sm text-blue-700">Formalisez vos procédures et formations.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4">
                <p className="font-semibold text-green-900">🎯 Optimiser : Viser l&apos;excellence</p>
                <p className="text-sm text-green-700">Envisagez certifications ISO et démarches RSE.</p>
              </div>
            </>
          )}
          {score >= 75 && (
            <>
              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4">
                <p className="font-semibold text-green-900">✅ Maintenir : Votre niveau d&apos;excellence</p>
                <p className="text-sm text-green-700">Continuez votre veille réglementaire et alertes.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4">
                <p className="font-semibold text-blue-900">🚀 Valoriser : Votre démarche qualité</p>
                <p className="text-sm text-blue-700">Communiquez sur vos certifications et conformité.</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 rounded-r-lg p-4">
                <p className="font-semibold text-purple-900">🌟 Innover : Aller plus loin</p>
                <p className="text-sm text-purple-700">Explorez RSE avancée, bilan carbone, ISO 14001.</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">
          Obtenez votre plan d&apos;action complet
        </h3>
        <p className="text-blue-100 mb-6">
          Lancez-vous en 5 minutes avec un essai gratuit de 14 jours, sans carte bancaire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
            asChild
          >
            <Link href="/signup">
              Démarrer mon essai gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            asChild
          >
            <Link href="/contact">
              Parler à un expert
            </Link>
          </Button>
        </div>
        <p className="text-xs text-blue-100 mt-4">
          ✓ 14 jours d&apos;essai · ✓ Sans CB · ✓ Support dédié
        </p>
      </div>
    </div>
  )
}
