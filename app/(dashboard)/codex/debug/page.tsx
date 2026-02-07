"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CodexDebugPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🛠️ Codex Database Debugger
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Module de débogage actuellement désactivé pour la mise en production.
            Veuillez vérifier les variables d&apos;environnement Supabase.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

