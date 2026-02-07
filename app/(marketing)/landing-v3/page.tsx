'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Award, CheckCircle2, AlertTriangle, XCircle, Truck, Users, FileText, BarChart3, Star, Zap, Target, Euro, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingV3() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-blue-50/50 -skew-y-3 origin-top-left transform" />
        <div className="container relative mx-auto px-4 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                La plateforme n°1 pour les transporteurs routiers
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6 text-slate-900 leading-tight">
                Transformez votre conformité en{' '}
                <span className="text-blue-600 relative whitespace-nowrap">
                  avantage commercial
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sécurisez vos contrôles et décrochez plus de contrats grâce au Trust Score public. La première solution qui valorise votre sérieux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 shadow-lg shadow-blue-600/20" asChild>
                  <Link href="/diagnostic">
                    Calculer mon Trust Score
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-6" asChild>
                  <Link href="/demo">
                    Voir la démo
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Diagnostic gratuit</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                 <img
                  src="/images/ClearGoHERO.png"
                  alt="Dashboard ClearGo - Conformité transport simplifiée"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-100 text-slate-900 px-4 py-2 rounded-full font-bold text-lg shadow-sm flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                   Trust Score: 87%
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Problème (Pour Transporteurs) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              3 problèmes qui empêchent les transporteurs de dormir
            </h2>
            <p className="text-lg text-slate-600">
              La conformité est souvent perçue comme une contrainte coûteuse. ClearGo change la donne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <AlertTriangle className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Peur des contrôles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  L&apos;Inspection du Travail ou la DREAL peut débarquer à tout moment. Une simple infraction peut coûter très cher.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="font-bold text-red-700 text-lg">750€ à 3 750€</p>
                  <p className="text-sm text-red-600 font-medium">d&apos;amende par infraction</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Lourdeur administrative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                   Excel ne suffit plus. Suivre les dates de validité (permis, visites médicales, tachygraphe) pour chaque chauffeur est un enfer.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <p className="font-bold text-orange-800 text-lg">15h / mois</p>
                  <p className="text-sm text-orange-700 font-medium">perdues en paperasse</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Euro className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Coût du consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Les consultants externes sont efficaces mais inabordables pour beaucoup de PME, et ne laissent pas d&apos;outils pérennes.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="font-bold text-blue-800 text-lg">400€ / jour</p>
                  <p className="text-sm text-blue-700 font-medium">tarif moyen consultant</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2.5: Vidéos - Découvrir ClearGo */}  
      <section className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-white text-blue-600 border border-blue-200 mb-4">
              🎬 Découvrez ClearGo en vidéo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Du problème à la solution
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprenez les défis de la conformité et comment ClearGo les transforme en opportunités
            </p>
          </div>

          {/* Single centered video */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <video
                src="/videos/Cration_vido_ClearGo_avant_aprs.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-semibold text-xl text-white">Avant / Après ClearGo</h4>
                <p className="text-white/90 text-base">De la difficulté documentaire à la transformation digitale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution (Core + Advanced + Expert) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">La méthode ClearGo</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6">
              3 niveaux pour passer de la survie à l&apos;excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Une progression claire. Commencez par l'essentiel, puis visez l'excellence pour vous démarquer.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Core */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="bg-blue-600 p-1"></div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <Shield className="h-6 w-6" />
                   </div>
                   <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none px-3 py-1">
                      40% Trust Score
                   </Badge>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Core</h3>
                <p className="text-blue-600 font-medium mb-6">Survivre aux contrôles</p>
                
                <p className="text-slate-600 mb-6 text-sm">
                  Les 27 obligations légales incontournables. La base pour rouler sereinement.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    { label: "Social / RH", count: 6 },
                    { label: "Temps conduite / Tachy", count: 6 },
                    { label: "Véhicules / Sécurité", count: 6 },
                    { label: "Admin / Légal", count: 5 },
                    { label: "Marchandises", count: 4 }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-semibold mr-2">{item.label}</span>
                      <span className="text-slate-400 text-xs">({item.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
               <div className="bg-slate-50 p-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>OK
                    <span className="w-2 h-2 rounded-full bg-orange-500 ml-2"></span>Action requise
                    <span className="w-2 h-2 rounded-full bg-red-500 ml-2"></span>Critique
                  </div>
               </div>
            </div>

            {/* Advanced */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transform hover:-translate-y-1 transition-transform duration-300 flex flex-col relative">
              <div className="bg-purple-600 p-1"></div>
              {/* <div className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">Populaire</div> */}
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      <BarChart3 className="h-6 w-6" />
                   </div>
                   <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-none px-3 py-1">
                      +30% Trust Score
                   </Badge>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Advanced</h3>
                <p className="text-purple-600 font-medium mb-6">Professionnalisme & Qualité</p>
                
                <p className="text-slate-600 mb-6 text-sm">
                  Inspirez la confiance avec des indicateurs de qualité (ISO 9001) pour répondre aux Appels d&apos;Offres.
                </p>

                <ul className="space-y-4 mb-8">
                   {[
                    "Taux de livraison à l'heure",
                    "Gestion des réclamations",
                    "Suivi des litiges marchandises",
                    "Enquêtes satisfaction (NPS)",
                    "Plans d'actions correctives"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-50 p-4 border-t border-purple-100">
                  <p className="text-xs font-semibold text-purple-900 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Bénéfice : Accès aux grands comptes
                  </p>
               </div>
            </div>

            {/* Expert */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="bg-yellow-500 p-1"></div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                      <Award className="h-6 w-6" />
                   </div>
                   <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-none px-3 py-1">
                      +30% Trust Score
                   </Badge>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Expert</h3>
                <p className="text-yellow-600 font-medium mb-6">Excellence & Label RSE</p>
                
                <p className="text-slate-600 mb-6 text-sm">
                  Visez le haut du panier avec les normes ISO 45001 (Sécurité) et 14001 (Environnement).
                </p>

                <ul className="space-y-4 mb-8">
                   <li className="flex items-start text-sm text-slate-700">
                      <Shield className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-slate-900">Sécurité (ISO 45001)</span>
                        <span className="text-slate-500 text-xs">Accidents, formations, prévention</span>
                      </div>
                   </li>
                   <li className="flex items-start text-sm text-slate-700">
                      <Truck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-slate-900">Environnement (ISO 14001)</span>
                        <span className="text-slate-500 text-xs">CO2, éco-conduite, flotte Euro 6</span>
                      </div>
                   </li>
                   <li className="flex items-start text-sm text-slate-700">
                      <Users className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-slate-900">RSE Transport</span>
                        <span className="text-slate-500 text-xs">Bien-être au travail, éthique</span>
                      </div>
                   </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 border-t border-yellow-100">
                  <p className="text-xs font-semibold text-yellow-800 flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Badge &quot;Transporteur d&apos;Excellence&quot;
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Trust Score */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Innovation Exclusive</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Le Trust Score : Votre passeport pour plus de business
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Ne soyez plus jugé uniquement sur le prix. Prouvez votre fiabilité avec un score certifié et visible par les donneurs d&apos;ordres.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                       <XCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">Trust Score &lt; 51%</h4>
                       <p className="text-sm text-slate-600 mt-1">Votre profil reste privé. Vous travaillez sereinement à améliorer votre conformité.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-blue-100">
                       <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">Trust Score ≥ 51%</h4>
                       <p className="text-sm text-slate-600 mt-1">Votre profil devient visible sur la Marketplace. Vous recevez des demandes de devis.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-yellow-100">
                       <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">Trust Score ≥ 90%</h4>
                       <p className="text-sm text-slate-600 mt-1">Badge &quot;Excellence&quot;. Vous accédez aux appels d&apos;offres premium et aux grands comptes.</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="relative">
              {/* Visual representation of Trust Score calculation */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Calcul du Trust Score</h3>
                
                <div className="flex items-center justify-center mb-8">
                   <div className="relative w-48 h-48">
                      {/* Simple visual placeholder for a gauge - in a real app use a chart library */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                         <circle cx="50" cy="50" r="45" fill="none" stroke="#2563eb" strokeWidth="10" strokeDasharray="220" strokeDashoffset="40" className="text-blue-600" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-4xl font-bold text-slate-900">82%</span>
                         <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Excellent</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-3 font-mono text-sm border-t border-slate-100 pt-6">
                   <div className="flex justify-between items-center text-slate-600">
                      <span>Core (40%)</span>
                      <span className="font-bold text-slate-900">40/40 pts</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-full"></div>
                   </div>

                   <div className="flex justify-between items-center text-slate-600 mt-4">
                      <span>Advanced (30%)</span>
                      <span className="font-bold text-slate-900">25/30 pts</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[83%]"></div>
                   </div>

                   <div className="flex justify-between items-center text-slate-600 mt-4">
                      <span>Expert (30%)</span>
                      <span className="font-bold text-slate-900">17/30 pts</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full w-[56%]"></div>
                   </div>
                </div>
              </div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: Modules et Fonctionnalités Détaillés */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Fonctionnalités Complètes</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Tous les outils pour piloter votre conformité
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              ClearGo centralise l'intégralité de vos obligations réglementaires et vous guide pas à pas vers l'excellence.
            </p>
          </div>

          {/* Grid of detailed modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Module 1: Diagnostic */}
            <Card className="bg-white border border-slate-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Diagnostic Automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Importez vos données en quelques clics et obtenez un état des lieux complet de votre conformité.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analyse de 27 obligations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>5 catégories (RH, Temps, Véhicules, Admin, Marchandises)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Importation CSV ou saisie manuelle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 2: Dashboard */}
            <Card className="bg-white border border-slate-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Dashboard Core 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Visualisez en un coup d&apos;œil l&apos;état de votre conformité avec des statuts codés par couleur.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2 mt-1 flex-shrink-0"></span>
                    <span><strong className="text-green-700">OK</strong> : Conforme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 rounded-full bg-orange-500 mr-2 mt-1 flex-shrink-0"></span>
                    <span><strong className="text-orange-700">Non conforme</strong> : Action requise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2 mt-1 flex-shrink-0"></span>
                    <span><strong className="text-red-700">Interdit</strong> : Blocage immédiat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 3: Alertes */}
            <Card className="bg-white border border-slate-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Alertes Intelligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Anticipez les échéances et traitez les urgences en priorité avec un système d&apos;alertes automatiques.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notifications email et in-app</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priorisation par niveau de gravité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Délais avant échéance (7j, 30j, 90j)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 4: Actions Correctives */}
            <Card className="bg-white border border-slate-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Actions Correctives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Transformez chaque alerte en plan d&apos;action clair avec des étapes concrètes.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Actions recommandées automatiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Assignation d&apos;actions à vos équipes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Suivi de progression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 5: Documents */}
            <Card className="bg-white border border-slate-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Gestion Documentaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Centralisez vos documents et générez automatiquement les dossiers pour vos contrôles.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Upload et stockage sécurisé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Génération automatique (registres, attestations)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Archivage conforme RGPD</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 6: Historique */}
            <Card className="bg-white border border-slate-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Historique et Traçabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Prouvez vos efforts de conformité avec un historique complet de tous les changements.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Logs de tous les changements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Évolution Trust Score dans le temps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Export rapports pour audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 27 Obligations détaillées */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Les 27 Obligations Core en détail
            </h3>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Chaque obligation est analysée automatiquement par notre moteur de règles pour garantir votre conformité.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Category 1: Social / RH */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <h4 className="font-bold text-slate-900">Social / RH</h4>
                </div>
                <Badge className="bg-blue-100 text-blue-800 text-xs">6 obligations</Badge>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>DPAE (déclaration embauche)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Registre du personnel</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Contrats de travail</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Visites médicales</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Affichages obligatoires</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>DUERP (Document Unique)</span>
                  </li>
                </ul>
              </div>

              {/* Category 2: Temps de conduite */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <h4 className="font-bold text-slate-900">Temps / Tachy</h4>
                </div>
                <Badge className="bg-purple-100 text-purple-800 text-xs">6 obligations</Badge>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Carte conducteur valide</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Téléchargement carte</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Téléchargement VU tachy</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Archivage données (1 an)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Respect temps de conduite</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Analyse infractions</span>
                  </li>
                </ul>
              </div>

              {/* Category 3: Véhicules */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <h4 className="font-bold text-slate-900">Véhicules</h4>
                </div>
                <Badge className="bg-green-100 text-green-800 text-xs">6 obligations</Badge>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Carte grise valide</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Assurance en cours</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Contrôle technique valide</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Visite DREAL (annuelle)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Carnet d&apos;entretien</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Équipements sécurité</span>
                  </li>
                </ul>
              </div>

              {/* Category 4: Admin / Légal */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-orange-600" />
                  <h4 className="font-bold text-slate-900">Admin / Légal</h4>
                </div>
                <Badge className="bg-orange-100 text-orange-800 text-xs">5 obligations</Badge>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Licence communautaire</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Copies conformes véhicules</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Capacité professionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Registre public transport</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-orange-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Kbis à jour</span>
                  </li>
                </ul>
              </div>

              {/* Category 5: Marchandises */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h4 className="font-bold text-slate-900">Marchandises</h4>
                </div>
                <Badge className="bg-red-100 text-red-800 text-xs">4 obligations</Badge>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>CMR (lettre de voiture)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Preuves de livraison</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Conservation documents</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-3 w-3 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                    <span>Procédure gestion litiges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Marketplace */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-300 border-none mb-4">Mise en relation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              La Marketplace qui connecte l&apos;excellence
            </h2>
            <p className="text-lg text-slate-300">
              Que vous soyez transporteur ou donneur d&apos;ordres, ClearGo crée la confiance instantanée nécessaire aux affaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-800/80 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                      <Truck className="h-6 w-6" />
                   </div>
                   <CardTitle className="text-2xl text-white">Je suis Transporteur</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300">
                   Valorisez vos efforts de conformité en opportunités commerciales.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span>Profil public certifié &quot;Vérifié&quot;</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span>Visibilité auprès de +500 donneurs d&apos;ordres</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span>Réception qualifiée de demandes de cotation</span>
                   </li>
                </ul>
                <div className="pt-4">
                   <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <Link href="/signup?type=transporteur">
                         Créer mon profil gratuit
                      </Link>
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-800/80 transition-colors">
              <CardHeader>
                 <div className="flex items-center gap-4 mb-2">
                   <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                      <Users className="h-6 w-6" />
                   </div>
                   <CardTitle className="text-2xl text-white">Je suis Donneur d&apos;Ordres</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300">
                   Trouvez des partenaires fiables et conformes en quelques secondes. Sans risque.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span>Sourcing filtré par Trust Score</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span>Accès aux documents (Kbis, Licence, Assurance...)</span>
                   </li>
                   <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span>Comparateur de transporteurs objectif</span>
                   </li>
                </ul>
                <div className="pt-4">
                   <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                      <Link href="/marketplace">
                         Explorer la marketplace
                      </Link>
                   </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Prêt à valoriser votre travail ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez la communauté ClearGo et transformez chaque heure passée sur la conformité en avantage business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-6" asChild>
              <Link href="/diagnostic">
                Calculer mon Trust Score
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" className="bg-blue-700 text-white border border-blue-400 hover:bg-blue-800 text-lg px-10 py-6" asChild>
              <Link href="/contact">
                Parler à un expert
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200 opacity-80">
             7 jours d'essai gratuit • Pas de carte bancaire requise • Annulation à tout moment
          </p>
        </div>
      </section>
    </div>
  );
}
