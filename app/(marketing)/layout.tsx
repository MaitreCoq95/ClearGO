import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/ClearGo.png" 
                alt="ClearGo" 
                width={180} 
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/#features" 
                className="text-sm font-medium text-muted-foreground hover:text-cleargo-blue transition-colors"
              >
                Fonctionnalités
              </Link>
              <Link 
                href="/pricing" 
                className="text-sm font-medium text-muted-foreground hover:text-cleargo-blue transition-colors"
              >
                Tarifs
              </Link>
              <Link 
                href="/demo" 
                className="text-sm font-medium text-muted-foreground hover:text-cleargo-blue transition-colors"
              >
                Démo
              </Link>
              <Link 
                href="/landing-v2" 
                className="text-sm font-medium text-cleargo-green hover:text-cleargo-green/80 transition-colors"
              >
                ✨ Landing V2
              </Link>
              <Link 
                href="/dev/mockups" 
                className="text-sm font-medium text-muted-foreground hover:text-cleargo-blue transition-colors"
              >
                🛠️ Dev Docs
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Bouton Consultant */}
              <Link href="/partners" className="hidden md:block">
                <Button variant="outline" size="sm" className="border-cleargo-green/50 text-cleargo-green hover:bg-cleargo-green/10">
                  👨‍💼 Je suis consultant
                </Button>
              </Link>
              
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Connexion
                </Button>
              </Link>
              <Link href="/signup" className="hidden sm:block">
                <Button size="sm" className="bg-cleargo-green hover:bg-cleargo-green/90 text-white font-semibold">
                  Essai Gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-white dark:bg-background">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-cleargo-blue-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image 
                  src="/ClearGo.png" 
                  alt="ClearGo" 
                  width={160} 
                  height={42}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-300 text-sm max-w-xs">
                Plateforme de conformité transport pour simplifier vos certifications ISO 9001, GDP, ADR et audits.
              </p>
            </div>

            {/* Produit */}
            <div>
              <h4 className="font-semibold mb-4 text-cleargo-green-light">Produit</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/#features" className="hover:text-white transition-colors">Fonctionnalités</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Tarifs</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Démo gratuite</Link></li>
                <li><Link href="/#integrations" className="hover:text-white transition-colors">Intégrations</Link></li>
              </ul>
            </div>

            {/* Ressources */}
            <div>
              <h4 className="font-semibold mb-4 text-cleargo-green-light">Ressources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/guides" className="hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h4 className="font-semibold mb-4 text-cleargo-green-light">Légal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/terms" className="hover:text-white transition-colors">CGU</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link></li>
                <li><Link href="/gdpr" className="hover:text-white transition-colors">RGPD</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 ClearGo. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Compliance & Transport</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

