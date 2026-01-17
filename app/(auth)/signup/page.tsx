import { Suspense } from "react"
import { SignUpForm } from "@/components/auth/SignUpForm"
import { Loader2 } from "lucide-react"

export const metadata = {
  title: "Inscription - ClearGo",
  description: "Créez votre compte ClearGo",
}

function SignUpLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ClearGo-navy via-ClearGo-navy to-slate-900">
      <Loader2 className="w-8 h-8 text-ClearGo-gold animate-spin" />
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<SignUpLoading />}>
      <SignUpForm />
    </Suspense>
  )
}

