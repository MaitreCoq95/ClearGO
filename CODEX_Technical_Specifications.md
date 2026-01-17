# 📋 CODEX - Spécifications Techniques Complètes
## Document de référence pour l'équipe de développement Antigravity

---

## 🎯 Vue d'ensemble du projet

**CODEX** est une plateforme SaaS de mise en conformité GDP (Good Distribution Practice) pour transporteurs pharmaceutiques. Elle combine analyse IA de documents réglementaires, scoring automatique de maturité, et accompagnement humain structuré.

### Objectifs MVP (Livraison : **Fin Février 2025**)

- ✅ Diagnostic automatisé GDP avec upload documentaire
- ✅ Scoring de maturité par domaine GDP
- ✅ Génération de roadmap personnalisée
- ✅ Dashboard transporteur et admin
- ✅ Support consultant basique
- ✅ Authentification sécurisée + gestion multi-utilisateurs

---

## 🏗️ Architecture Technique

### Stack Technologique Validée

```
Frontend:
├── Next.js 14+ (App Router)
├── React 18+
├── TypeScript
├── TailwindCSS
└── Shadcn/ui (composants UI)

Backend:
├── Next.js API Routes / Server Actions
├── Supabase (PostgreSQL + Auth + Storage)
└── Edge Functions (si besoin de processing lourd)

IA/ML:
├── API Anthropic Claude (modèle hébergé recommandé)
├── Prompts contraints avec context injection
└── Fallback sur GPT-4 Turbo si nécessaire

Infrastructure:
├── Hébergement: Vercel (MVP) → AWS (scale)
├── Database: Supabase PostgreSQL (EU region)
├── Storage: Supabase Storage (RGPD compliant)
└── CDN: Vercel Edge Network

Services tiers:
├── Auth: Supabase Auth + 2FA (TOTP)
├── OCR: Google Cloud Vision API (meilleur rapport qualité/prix)
├── Payments: Stripe (déjà utilisé sur ThermoMatch)
├── Email: Resend ou SendGrid
└── Monitoring: Sentry + Vercel Analytics
```

---

## 📊 Schéma de Base de Données (PostgreSQL)

### Tables Principales

```sql
-- ORGANISATIONS (Transporteurs)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  siret VARCHAR(14) UNIQUE,
  status VARCHAR(50) DEFAULT 'active', -- active, suspended, closed
  subscription_tier VARCHAR(50) DEFAULT 'diagnostic', -- diagnostic, standard, premium
  subscription_status VARCHAR(50) DEFAULT 'trial', -- trial, active, cancelled
  gdp_score INTEGER DEFAULT 0, -- Score global 0-100
  gdp_status VARCHAR(50) DEFAULT 'not_started', -- not_started, in_progress, audit_ready
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- UTILISATEURS (lié à Supabase Auth)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL, -- owner, quality_manager, consultant, admin
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- DOCUMENTS
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  uploaded_by UUID REFERENCES users(id),
  document_type VARCHAR(100) NOT NULL, -- procedure_qualite, plan_formation, certificat_etalonnage, etc.
  document_category VARCHAR(50), -- gdp_domain: locaux, personnel, documentation, transport, etc.
  file_name VARCHAR(255) NOT NULL,
  file_path TEXT NOT NULL, -- Supabase Storage path
  file_size INTEGER,
  mime_type VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending', -- pending, analyzing, analyzed, validated, rejected
  ocr_text TEXT, -- Texte extrait par OCR
  ai_analysis JSONB, -- Résultats d'analyse IA
  validation_status VARCHAR(50), -- null, approved, needs_review, rejected
  validated_by UUID REFERENCES users(id),
  validated_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- DOMAINES GDP & CRITÈRES
CREATE TABLE gdp_domains (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL, -- Locaux, Personnel, Documentation, etc.
  code VARCHAR(50) UNIQUE NOT NULL, -- LOCAUX, PERSONNEL, DOCUMENTATION
  description TEXT,
  weight INTEGER DEFAULT 10, -- Pondération pour le score global (total = 100)
  display_order INTEGER,
  is_active BOOLEAN DEFAULT true
);

CREATE TABLE gdp_criteria (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  domain_id UUID REFERENCES gdp_domains(id) ON DELETE CASCADE,
  code VARCHAR(100) UNIQUE NOT NULL, -- LOC-01, PER-03, DOC-05
  title VARCHAR(255) NOT NULL,
  description TEXT,
  requirement_text TEXT, -- Texte réglementaire exact
  is_mandatory BOOLEAN DEFAULT true,
  weight INTEGER DEFAULT 1, -- Poids dans le domaine
  expected_documents TEXT[], -- Types de documents attendus
  validation_rules JSONB, -- Règles de validation automatique
  display_order INTEGER
);

-- SCORING PAR DOMAINE
CREATE TABLE organization_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  domain_id UUID REFERENCES gdp_domains(id),
  score INTEGER DEFAULT 0, -- Score 0-100 pour ce domaine
  calculated_at TIMESTAMP DEFAULT NOW(),
  calculation_data JSONB, -- Détail des critères évalués
  validated_by UUID REFERENCES users(id),
  validated_at TIMESTAMP,
  UNIQUE(organization_id, domain_id)
);

-- GAPS / ÉCARTS DE CONFORMITÉ
CREATE TABLE compliance_gaps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  criterion_id UUID REFERENCES gdp_criteria(id),
  severity VARCHAR(50) NOT NULL, -- critical, major, minor
  status VARCHAR(50) DEFAULT 'open', -- open, in_progress, resolved, validated
  description TEXT,
  detected_by VARCHAR(50) DEFAULT 'ai', -- ai, consultant, audit
  detected_at TIMESTAMP DEFAULT NOW(),
  resolution_deadline DATE,
  resolution_note TEXT,
  resolved_at TIMESTAMP,
  resolved_by UUID REFERENCES users(id)
);

-- ROADMAP / ACTIONS
CREATE TABLE roadmap_actions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  gap_id UUID REFERENCES compliance_gaps(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  priority INTEGER DEFAULT 3, -- 1=critique, 2=important, 3=normal
  status VARCHAR(50) DEFAULT 'todo', -- todo, in_progress, completed, blocked
  assigned_to UUID REFERENCES users(id),
  estimated_hours INTEGER,
  due_date DATE,
  template_documents TEXT[], -- URLs vers modèles à télécharger
  completion_notes TEXT,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- AUDIT TRAIL / LOGS
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  action VARCHAR(100) NOT NULL, -- document_uploaded, score_calculated, gap_resolved, etc.
  entity_type VARCHAR(50), -- document, score, gap, action
  entity_id UUID,
  old_value JSONB,
  new_value JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- BASE DE CONNAISSANCES GDP
CREATE TABLE knowledge_base (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category VARCHAR(100), -- requirement, faq, template, guide
  title VARCHAR(255) NOT NULL,
  content TEXT,
  tags TEXT[],
  related_criteria UUID[], -- IDs de gdp_criteria
  document_url TEXT,
  version VARCHAR(20) DEFAULT '1.0',
  is_published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- NOTIFICATIONS
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  organization_id UUID REFERENCES organizations(id),
  type VARCHAR(50) NOT NULL, -- action_deadline, document_missing, score_updated, etc.
  title VARCHAR(255),
  message TEXT,
  link TEXT, -- URL vers la ressource concernée
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ABONNEMENTS & FACTURATION
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  plan VARCHAR(50) NOT NULL, -- diagnostic, standard, premium
  status VARCHAR(50) DEFAULT 'active', -- active, cancelled, past_due
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- INDEX POUR PERFORMANCES
CREATE INDEX idx_documents_org ON documents(organization_id);
CREATE INDEX idx_documents_status ON documents(status);
CREATE INDEX idx_gaps_org ON compliance_gaps(organization_id);
CREATE INDEX idx_gaps_status ON compliance_gaps(status);
CREATE INDEX idx_actions_org ON roadmap_actions(organization_id);
CREATE INDEX idx_actions_status ON roadmap_actions(status);
CREATE INDEX idx_audit_org ON audit_logs(organization_id);
CREATE INDEX idx_audit_created ON audit_logs(created_at);
```

---

## 🤖 Architecture IA & Analyse Documentaire

### Modèle Recommandé : **Claude 3.5 Sonnet via API Anthropic**

**Pourquoi Claude plutôt que GPT-4 ?**
- Meilleure compréhension de documents techniques/réglementaires
- Context window plus large (200k tokens vs 128k)
- Moins de risque d'hallucination sur des critères précis
- Prix compétitif (environ même range que GPT-4)
- Anthropic est basé en UE via AWS (RGPD compliant)

### Pipeline de Traitement des Documents

```typescript
// 1. Upload Document (Supabase Storage)
async function uploadDocument(file: File, organizationId: string) {
  const filePath = `${organizationId}/${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from('gdp-documents')
    .upload(filePath, file);
  
  // Créer entrée en DB avec status 'pending'
  return createDocumentRecord(filePath, organizationId);
}

// 2. OCR avec Google Cloud Vision API
async function extractTextFromPDF(filePath: string) {
  const fileBuffer = await downloadFromStorage(filePath);
  
  const [result] = await visionClient.documentTextDetection({
    image: { content: fileBuffer.toString('base64') }
  });
  
  return result.fullTextAnnotation?.text || '';
}

// 3. Analyse IA avec Claude
async function analyzeDocument(
  documentId: string,
  ocrText: string,
  documentType: string,
  organizationContext: any
) {
  // Récupérer les critères GDP pertinents
  const relevantCriteria = await getGDPCriteriaForDocType(documentType);
  
  // Construire le prompt avec context injection
  const prompt = buildAnalysisPrompt({
    documentType,
    ocrText,
    criteria: relevantCriteria,
    organizationContext
  });
  
  // Appel API Anthropic Claude
  const analysis = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 4096,
    temperature: 0.1, // Peu de créativité, on veut de la précision
    system: SYSTEM_PROMPT_GDP_ANALYSIS,
    messages: [{
      role: "user",
      content: prompt
    }]
  });
  
  // Parser la réponse structurée
  const result = parseAnalysisResult(analysis.content);
  
  // Sauvegarder en DB
  await updateDocumentAnalysis(documentId, result);
  
  return result;
}

// 4. Calcul du Score
async function calculateGDPScore(organizationId: string) {
  // Récupérer tous les critères évalués
  const evaluations = await getOrganizationEvaluations(organizationId);
  
  // Calcul par domaine
  const domainScores = calculateDomainScores(evaluations);
  
  // Calcul score global avec pondération
  const globalScore = calculateWeightedScore(domainScores);
  
  // Sauvegarder
  await updateOrganizationScore(organizationId, globalScore, domainScores);
  
  return { globalScore, domainScores };
}
```

### Prompts Système Contraints

```typescript
const SYSTEM_PROMPT_GDP_ANALYSIS = `Tu es un expert GDP (Good Distribution Practice) spécialisé dans l'analyse de conformité réglementaire pour le transport pharmaceutique en Europe.

**TON RÔLE:**
- Analyser des documents de conformité GDP
- Identifier les écarts par rapport aux exigences réglementaires
- Évaluer la conformité de manière objective et stricte
- Ne JAMAIS inventer d'information
- Ne JAMAIS sortir du cadre GDP

**TES LIMITES:**
- Tu analyses UNIQUEMENT le document fourni
- Tu ne donnes PAS de conseils généraux
- Tu ne réponds PAS aux questions hors GDP
- Tu ne fais PAS de recherches externes
- Tu restes strictement factuel

**FORMAT DE RÉPONSE ATTENDU:**
Toujours répondre en JSON structuré avec :
{
  "conformity_level": "conforme" | "partiellement_conforme" | "non_conforme",
  "criteria_evaluated": [
    {
      "criterion_code": "LOC-01",
      "status": "conforme" | "non_conforme",
      "evidence": "Citation exacte du document",
      "gap_description": "Description de l'écart si non conforme"
    }
  ],
  "missing_elements": ["Liste des éléments manquants"],
  "recommendations": ["Actions correctives prioritaires"],
  "confidence_score": 0.85 // 0-1
}

Sois strict, précis et factuel.`;

const buildAnalysisPrompt = ({ documentType, ocrText, criteria, organizationContext }) => `
**CONTEXTE ORGANISATION:**
- Nom: ${organizationContext.name}
- Type activité: ${organizationContext.activity}
- Flotte: ${organizationContext.fleet_size} véhicules

**TYPE DE DOCUMENT À ANALYSER:**
${documentType}

**CRITÈRES GDP À VÉRIFIER:**
${criteria.map(c => `- ${c.code}: ${c.title}
  Exigence: ${c.requirement_text}
  Documents attendus: ${c.expected_documents.join(', ')}
`).join('\n')}

**CONTENU DU DOCUMENT (OCR):**
${ocrText.substring(0, 20000)} // Limiter si trop long

**INSTRUCTIONS:**
1. Lis attentivement le document fourni
2. Pour chaque critère GDP listé, détermine s'il est satisfait
3. Cite les passages exacts qui prouvent la conformité
4. Identifie les manquements précis
5. Propose des actions correctives concrètes

Réponds UNIQUEMENT en JSON comme spécifié dans ton système.
`;
```

---

## 🔐 Sécurité & Authentification

### Supabase Auth Configuration

```typescript
// supabase/auth.config.ts
export const authConfig = {
  providers: {
    email: {
      enabled: true,
      emailConfirmation: true,
      doubleConfirmEmail: false
    }
  },
  security: {
    sessions: {
      timebox: 3600, // 1h
      inactivityTimeout: 1800 // 30min
    },
    mfa: {
      enabled: true,
      factors: ['totp'], // 2FA via TOTP
      enrollment: 'optional' // 'required' pour forcer
    },
    captcha: {
      enabled: true,
      provider: 'hcaptcha'
    }
  },
  email: {
    templates: {
      confirmation: { subject: 'Confirmez votre compte CODEX' },
      recovery: { subject: 'Réinitialisation de votre mot de passe' },
      magicLink: { subject: 'Connexion à CODEX' }
    }
  }
};

// Middleware Next.js pour protection routes
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const { data: { session } } = await supabase.auth.getSession();
  
  // Routes protégées
  const protectedRoutes = ['/dashboard', '/api/documents', '/api/scoring'];
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );
  
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  // Vérifier le rôle pour les routes admin
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const { data: user } = await supabase
      .from('users')
      .select('role')
      .eq('id', session?.user.id)
      .single();
    
    if (user?.role !== 'admin' && user?.role !== 'consultant') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }
  
  return res;
}
```

### Row Level Security (RLS) Supabase

```sql
-- Activer RLS sur toutes les tables sensibles
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE compliance_gaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE roadmap_actions ENABLE ROW LEVEL SECURITY;

-- Politique: Utilisateurs ne voient QUE leur organisation
CREATE POLICY "Users see only their organization data"
ON organizations FOR SELECT
USING (
  id IN (
    SELECT organization_id 
    FROM users 
    WHERE id = auth.uid()
  )
);

-- Politique: Consultants voient toutes les organisations qu'ils suivent
CREATE POLICY "Consultants see assigned organizations"
ON organizations FOR SELECT
USING (
  auth.uid() IN (
    SELECT id FROM users WHERE role IN ('consultant', 'admin')
  )
);

-- Politique: Documents accessibles par l'organisation propriétaire
CREATE POLICY "Users access their organization documents"
ON documents FOR ALL
USING (
  organization_id IN (
    SELECT organization_id 
    FROM users 
    WHERE id = auth.uid()
  )
);

-- Politique: Admins accès complet
CREATE POLICY "Admins full access"
ON documents FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() 
    AND role = 'admin'
  )
);
```

---

## 📁 Stockage de Documents - Supabase Storage

### Configuration Recommandée

```typescript
// Créer le bucket avec les bonnes permissions
supabase.storage.createBucket('gdp-documents', {
  public: false, // Pas d'accès public
  fileSizeLimit: 20 * 1024 * 1024, // 20 MB max
  allowedMimeTypes: [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
});

// Politique de sécurité pour le bucket
CREATE POLICY "Users upload to their organization folder"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'gdp-documents'
  AND (storage.foldername(name))[1] IN (
    SELECT organization_id::text 
    FROM users 
    WHERE id = auth.uid()
  )
);

CREATE POLICY "Users access their organization documents"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'gdp-documents'
  AND (storage.foldername(name))[1] IN (
    SELECT organization_id::text 
    FROM users 
    WHERE id = auth.uid()
  )
);
```

**Pourquoi Supabase Storage ?**
- ✅ Hébergé en UE (RGPD compliant)
- ✅ Intégré nativement avec Supabase Auth & DB
- ✅ RLS natif pour sécurité
- ✅ CDN intégré pour performance
- ✅ Moins cher que S3 pour MVP
- ✅ API simple, compatible S3

**Alternative si besoin de scale :** Migrer vers S3 + CloudFront avec encryption KMS.

---

## 🖼️ OCR - Google Cloud Vision API

### Configuration & Utilisation

**Coût estimé:** ~2-3€ / 1000 pages (meilleur rapport qualité/prix)

```typescript
// lib/ocr.ts
import vision from '@google-cloud/vision';

const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS // Service account JSON
});

export async function extractTextFromDocument(
  fileBuffer: Buffer,
  mimeType: string
): Promise<{ text: string; confidence: number }> {
  try {
    const [result] = await client.documentTextDetection({
      image: {
        content: fileBuffer.toString('base64')
      },
      imageContext: {
        languageHints: ['fr', 'en'] // Français prioritaire
      }
    });
    
    const fullText = result.fullTextAnnotation?.text || '';
    const confidence = result.fullTextAnnotation?.pages?.[0]?.confidence || 0;
    
    return { text: fullText, confidence };
  } catch (error) {
    console.error('OCR Error:', error);
    throw new Error('Échec de l\'extraction de texte');
  }
}

// Pour documents multi-pages PDF
export async function extractTextFromPDF(pdfBuffer: Buffer) {
  // Convertir PDF en images (utiliser pdf-parse ou pdf2pic)
  const images = await convertPDFToImages(pdfBuffer);
  
  // OCR sur chaque page
  const pages = await Promise.all(
    images.map(img => extractTextFromDocument(img, 'image/png'))
  );
  
  return {
    text: pages.map(p => p.text).join('\n\n'),
    averageConfidence: pages.reduce((acc, p) => acc + p.confidence, 0) / pages.length
  };
}
```

**Alternative budget serré:** Tesseract.js (gratuit, moins précis, processing côté serveur nécessaire)

---

## 🎨 Frontend - Architecture & Composants

### Structure Recommandée

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── (dashboard)/
│   │   ├── layout.tsx (layout dashboard commun)
│   │   ├── dashboard/ (transporteur)
│   │   │   ├── page.tsx (vue d'ensemble)
│   │   │   ├── documents/
│   │   │   ├── roadmap/
│   │   │   └── score/
│   │   ├── admin/ (consultants & admins)
│   │   │   ├── page.tsx
│   │   │   ├── organizations/
│   │   │   ├── analytics/
│   │   │   └── knowledge-base/
│   │   └── settings/
│   ├── api/ (Next.js API routes)
│   │   ├── documents/
│   │   ├── scoring/
│   │   ├── roadmap/
│   │   └── webhooks/ (Stripe)
│   └── layout.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── dashboard/
│   │   ├── ScoreCard.tsx
│   │   ├── DocumentUploader.tsx
│   │   ├── RoadmapTimeline.tsx
│   │   └── GDPDomainChart.tsx
│   ├── admin/
│   └── shared/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── ai/
│   │   ├── claude.ts
│   │   └── prompts.ts
│   ├── ocr/
│   │   └── vision.ts
│   └── utils.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useDocuments.ts
│   └── useScore.ts
└── types/
    ├── database.types.ts (généré par Supabase CLI)
    ├── gdp.types.ts
    └── index.ts
```

### Composants Clés

```typescript
// components/dashboard/ScoreCard.tsx
interface ScoreCardProps {
  domain: string;
  score: number;
  previousScore?: number;
  status: 'critical' | 'warning' | 'good';
}

export function ScoreCard({ domain, score, previousScore, status }: ScoreCardProps) {
  const scoreColor = {
    critical: 'text-red-600',
    warning: 'text-orange-600',
    good: 'text-green-600'
  }[status];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{domain}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-4xl font-bold ${scoreColor}`}>
          {score}/100
        </div>
        {previousScore && (
          <div className="text-sm text-muted-foreground mt-2">
            {score > previousScore ? '↑' : '↓'} 
            {Math.abs(score - previousScore)} points
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// components/dashboard/DocumentUploader.tsx
export function DocumentUploader({ organizationId }: { organizationId: string }) {
  const [uploading, setUploading] = useState(false);
  
  const handleUpload = async (files: FileList) => {
    setUploading(true);
    
    for (const file of Array.from(files)) {
      // Upload to Supabase Storage
      const filePath = `${organizationId}/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from('gdp-documents')
        .upload(filePath, file);
      
      if (error) {
        toast.error(`Erreur upload ${file.name}`);
        continue;
      }
      
      // Create document record
      await supabase.from('documents').insert({
        organization_id: organizationId,
        file_name: file.name,
        file_path: filePath,
        mime_type: file.type,
        file_size: file.size,
        status: 'pending'
      });
      
      // Trigger analysis (via API route)
      await fetch('/api/documents/analyze', {
        method: 'POST',
        body: JSON.stringify({ filePath, documentId: data.id })
      });
    }
    
    setUploading(false);
    toast.success('Documents uploadés avec succès');
  };
  
  return (
    <Dropzone onDrop={handleUpload} disabled={uploading}>
      {/* UI Dropzone */}
    </Dropzone>
  );
}
```

---

## 🔄 API Routes Critiques

### 1. Analyse de Documents

```typescript
// app/api/documents/analyze/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  
  // Vérifier authentification
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { documentId } = await req.json();
  
  // Récupérer le document
  const { data: document } = await supabase
    .from('documents')
    .select('*')
    .eq('id', documentId)
    .single();
  
  if (!document) {
    return NextResponse.json({ error: 'Document not found' }, { status: 404 });
  }
  
  // Vérifier que l'utilisateur a accès à cette organisation
  const { data: user } = await supabase
    .from('users')
    .select('organization_id, role')
    .eq('id', session.user.id)
    .single();
  
  if (user.organization_id !== document.organization_id && user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  
  try {
    // 1. Télécharger le fichier depuis Storage
    const { data: fileData } = await supabase.storage
      .from('gdp-documents')
      .download(document.file_path);
    
    if (!fileData) throw new Error('File not found in storage');
    
    // 2. OCR
    const fileBuffer = Buffer.from(await fileData.arrayBuffer());
    const { text: ocrText, confidence } = await extractTextFromDocument(
      fileBuffer,
      document.mime_type
    );
    
    // Sauvegarder le texte OCR
    await supabase
      .from('documents')
      .update({ 
        ocr_text: ocrText,
        status: 'analyzing' 
      })
      .eq('id', documentId);
    
    // 3. Analyse IA
    const organizationContext = await getOrganizationContext(document.organization_id);
    const analysis = await analyzeDocumentWithAI({
      documentId,
      ocrText,
      documentType: document.document_type,
      organizationContext
    });
    
    // 4. Sauvegarder résultats
    await supabase
      .from('documents')
      .update({
        ai_analysis: analysis,
        status: 'analyzed'
      })
      .eq('id', documentId);
    
    // 5. Mettre à jour les gaps si nécessaire
    await updateComplianceGaps(document.organization_id, analysis);
    
    // 6. Recalculer le score
    await recalculateScore(document.organization_id);
    
    // 7. Log audit
    await logAudit({
      organizationId: document.organization_id,
      userId: session.user.id,
      action: 'document_analyzed',
      entityType: 'document',
      entityId: documentId,
      newValue: { status: 'analyzed', analysis }
    });
    
    return NextResponse.json({ 
      success: true,
      analysis,
      documentId
    });
    
  } catch (error) {
    console.error('Analysis error:', error);
    
    await supabase
      .from('documents')
      .update({ status: 'error' })
      .eq('id', documentId);
    
    return NextResponse.json(
      { error: 'Analysis failed', details: error.message },
      { status: 500 }
    );
  }
}
```

### 2. Calcul de Score

```typescript
// app/api/scoring/calculate/route.ts
export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { organizationId } = await req.json();
  
  // Vérifier droits
  const hasAccess = await checkOrganizationAccess(session.user.id, organizationId);
  if (!hasAccess) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  
  try {
    // 1. Récupérer tous les domaines GDP
    const { data: domains } = await supabase
      .from('gdp_domains')
      .select('*, gdp_criteria(*)')
      .eq('is_active', true)
      .order('display_order');
    
    // 2. Récupérer tous les documents analysés
    const { data: documents } = await supabase
      .from('documents')
      .select('*')
      .eq('organization_id', organizationId)
      .eq('status', 'analyzed');
    
    // 3. Calculer score par domaine
    const domainScores = await Promise.all(
      domains.map(async (domain) => {
        const criteriaForDomain = domain.gdp_criteria;
        
        // Analyser quels critères sont satisfaits
        const evaluations = criteriaForDomain.map(criterion => {
          const relevantDocs = documents.filter(doc => 
            doc.document_category === domain.code
          );
          
          const isSatisfied = relevantDocs.some(doc => {
            const analysis = doc.ai_analysis;
            return analysis?.criteria_evaluated?.some(
              c => c.criterion_code === criterion.code && c.status === 'conforme'
            );
          });
          
          return {
            criterion,
            satisfied: isSatisfied,
            weight: criterion.weight
          };
        });
        
        // Calcul score domaine (somme pondérée)
        const totalWeight = evaluations.reduce((sum, e) => sum + e.weight, 0);
        const satisfiedWeight = evaluations
          .filter(e => e.satisfied)
          .reduce((sum, e) => sum + e.weight, 0);
        
        const domainScore = totalWeight > 0 
          ? Math.round((satisfiedWeight / totalWeight) * 100)
          : 0;
        
        return {
          domain_id: domain.id,
          score: domainScore,
          details: evaluations
        };
      })
    );
    
    // 4. Calculer score global (pondéré par domaine)
    const totalDomainWeight = domains.reduce((sum, d) => sum + d.weight, 0);
    const globalScore = Math.round(
      domainScores.reduce((sum, ds) => {
        const domain = domains.find(d => d.id === ds.domain_id);
        return sum + (ds.score * domain.weight);
      }, 0) / totalDomainWeight
    );
    
    // 5. Sauvegarder en DB
    await Promise.all([
      // Update organization score
      supabase
        .from('organizations')
        .update({ 
          gdp_score: globalScore,
          gdp_status: getGDPStatus(globalScore),
          updated_at: new Date().toISOString()
        })
        .eq('id', organizationId),
      
      // Update domain scores
      ...domainScores.map(ds => 
        supabase
          .from('organization_scores')
          .upsert({
            organization_id: organizationId,
            domain_id: ds.domain_id,
            score: ds.score,
            calculation_data: ds.details,
            calculated_at: new Date().toISOString()
          })
      )
    ]);
    
    // 6. Log audit
    await logAudit({
      organizationId,
      userId: session.user.id,
      action: 'score_calculated',
      entityType: 'organization',
      entityId: organizationId,
      newValue: { globalScore, domainScores }
    });
    
    return NextResponse.json({
      success: true,
      globalScore,
      domainScores
    });
    
  } catch (error) {
    console.error('Score calculation error:', error);
    return NextResponse.json(
      { error: 'Score calculation failed' },
      { status: 500 }
    );
  }
}

function getGDPStatus(score: number): string {
  if (score >= 85) return 'audit_ready';
  if (score >= 60) return 'in_progress';
  return 'not_started';
}
```

### 3. Génération de Roadmap

```typescript
// app/api/roadmap/generate/route.ts
export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });
  const { organizationId } = await req.json();
  
  // Auth check...
  
  try {
    // 1. Récupérer tous les gaps non résolus
    const { data: gaps } = await supabase
      .from('compliance_gaps')
      .select('*, gdp_criteria(*)')
      .eq('organization_id', organizationId)
      .in('status', ['open', 'in_progress'])
      .order('severity', { ascending: false });
    
    if (!gaps || gaps.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'Aucun écart à corriger',
        actions: []
      });
    }
    
    // 2. Générer actions avec IA (optionnel) ou templates
    const actions = await Promise.all(
      gaps.map(async (gap) => {
        // Utiliser Claude pour générer une action personnalisée
        const actionSuggestion = await generateActionWithAI({
          gap,
          organizationContext: await getOrganizationContext(organizationId)
        });
        
        return {
          organization_id: organizationId,
          gap_id: gap.id,
          title: actionSuggestion.title,
          description: actionSuggestion.description,
          priority: gap.severity === 'critical' ? 1 : gap.severity === 'major' ? 2 : 3,
          status: 'todo',
          estimated_hours: actionSuggestion.estimated_hours,
          due_date: calculateDueDate(gap.severity),
          template_documents: actionSuggestion.templates
        };
      })
    );
    
    // 3. Insérer en DB
    const { data: insertedActions } = await supabase
      .from('roadmap_actions')
      .insert(actions)
      .select();
    
    // 4. Log audit
    await logAudit({
      organizationId,
      userId: session.user.id,
      action: 'roadmap_generated',
      entityType: 'roadmap',
      newValue: { actionsCount: insertedActions.length }
    });
    
    return NextResponse.json({
      success: true,
      actions: insertedActions
    });
    
  } catch (error) {
    console.error('Roadmap generation error:', error);
    return NextResponse.json({ error: 'Failed to generate roadmap' }, { status: 500 });
  }
}

function calculateDueDate(severity: string): string {
  const today = new Date();
  let daysToAdd = 90; // Par défaut 3 mois
  
  if (severity === 'critical') daysToAdd = 30;
  else if (severity === 'major') daysToAdd = 60;
  
  const dueDate = new Date(today.setDate(today.getDate() + daysToAdd));
  return dueDate.toISOString().split('T')[0];
}
```

---

## 💳 Stripe Integration

```typescript
// app/api/webhooks/stripe/route.ts
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;
  
  let event: Stripe.Event;
  
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
  
  // Handle événements
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionUpdate(subscription);
      break;
      
    case 'customer.subscription.deleted':
      const deletedSub = event.data.object as Stripe.Subscription;
      await handleSubscriptionCancellation(deletedSub);
      break;
      
    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      await handlePaymentSuccess(invoice);
      break;
      
    case 'invoice.payment_failed':
      const failedInvoice = event.data.object as Stripe.Invoice;
      await handlePaymentFailure(failedInvoice);
      break;
  }
  
  return NextResponse.json({ received: true });
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Service key pour bypass RLS
  );
  
  await supabase
    .from('subscriptions')
    .upsert({
      stripe_subscription_id: subscription.id,
      stripe_customer_id: subscription.customer as string,
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end
    });
}
```

---

## 📊 Monitoring & Analytics

### Sentry Configuration

```typescript
// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  beforeSend(event, hint) {
    // Filtrer les données sensibles
    if (event.request?.headers?.authorization) {
      delete event.request.headers.authorization;
    }
    return event;
  }
});
```

### Métriques Métier à Tracker

```typescript
// lib/analytics.ts
export const trackBusinessMetric = {
  documentUploaded: (orgId: string, docType: string) => {
    // Analytics + Logs
  },
  scoreCalculated: (orgId: string, score: number) => {
    // Trigger notifications si score critique
  },
  gapResolved: (orgId: string, gapId: string, severity: string) => {
    // Track progression
  },
  auditReady: (orgId: string) => {
    // Notification client + consultant
  }
};
```

---

## 🚀 Déploiement & CI/CD

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase-anon-key",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase-service-key",
    "ANTHROPIC_API_KEY": "@anthropic-api-key",
    "GOOGLE_APPLICATION_CREDENTIALS": "@gcp-credentials",
    "STRIPE_SECRET_KEY": "@stripe-secret-key",
    "STRIPE_WEBHOOK_SECRET": "@stripe-webhook-secret"
  },
  "regions": ["cdg1"], // Paris region pour RGPD
  "functions": {
    "api/**/*.ts": {
      "memory": 1024,
      "maxDuration": 60
    }
  }
}
```

### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test

  deploy-preview:
    needs: test
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-production:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 📝 Variables d'Environnement

```bash
# .env.local (JAMAIS commit, ajouter à .gitignore)

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc... # Pour server-side uniquement

# Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-xxxxx

# Google Cloud (OCR)
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
# Ou en base64 pour Vercel:
GOOGLE_CREDENTIALS_BASE64=base64_encoded_json

# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Sentry
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# App
NEXT_PUBLIC_APP_URL=https://codex.vyxo.fr
NODE_ENV=production
```

---

## 🎯 Checklist MVP (Fin Février)

### Phase 1 - Infrastructure (Semaine 1-2)
- [ ] Setup projet Next.js 14 + TypeScript
- [ ] Configuration Supabase (DB + Auth + Storage)
- [ ] Schéma DB PostgreSQL complet
- [ ] RLS policies Supabase
- [ ] Authentification + 2FA
- [ ] Middleware protection routes
- [ ] Setup Vercel deployment

### Phase 2 - Core Features (Semaine 3-4)
- [ ] Upload documents (Supabase Storage)
- [ ] OCR avec Google Vision API
- [ ] Intégration Claude API pour analyse
- [ ] Système de scoring par domaine
- [ ] Calcul score global
- [ ] Détection des gaps de conformité

### Phase 3 - UI/UX (Semaine 5-6)
- [ ] Dashboard transporteur
  - [ ] Vue d'ensemble score
  - [ ] Upload interface
  - [ ] Liste documents
  - [ ] Roadmap timeline
- [ ] Dashboard admin/consultant
  - [ ] Liste organisations
  - [ ] Vue détaillée par organisation
  - [ ] Validation documents
- [ ] Composants UI (Shadcn)
- [ ] Responsive mobile

### Phase 4 - Business Logic (Semaine 7)
- [ ] Génération roadmap automatique
- [ ] Système de notifications
- [ ] Audit logs
- [ ] Base de connaissances GDP

### Phase 5 - Payments & Polish (Semaine 8)
- [ ] Intégration Stripe
- [ ] Webhooks Stripe
- [ ] Gestion abonnements
- [ ] Tests end-to-end
- [ ] Monitoring Sentry
- [ ] Documentation API

### Optionnel Post-MVP
- [ ] Export PDF rapports
- [ ] Module formation en ligne
- [ ] Chat consultant intégré
- [ ] Intégration ThermoMatch
- [ ] Mobile app (React Native)

---

## 💰 Estimation Coûts Mensuels (100 organisations)

| Service | Coût estimé | Notes |
|---------|-------------|-------|
| **Vercel Pro** | 20€/mois | Inclut 100GB bande passante |
| **Supabase Pro** | 25€/mois | 8GB DB, 100GB storage, 250GB transfer |
| **Anthropic API** | 150-300€/mois | ~500-1000 docs analysés/mois |
| **Google Vision API** | 50-100€/mois | ~2000-4000 pages OCR/mois |
| **Stripe** | 1,4% + 0,25€/transaction | Variable selon CA |
| **Sentry** | 26€/mois | Plan Team (50k events/mois) |
| **Domaine + SSL** | 10€/an | Via Vercel ou Cloudflare |
| **Emails (Resend)** | 20€/mois | 50k emails/mois |
| **TOTAL** | **~300-500€/mois** | Hors coûts variables Stripe |

**Optimisations possibles:**
- Réduire température IA (0.0 vs 0.1) pour économiser tokens
- Caching résultats OCR pour documents identiques
- Batch processing documents pour limiter appels API
- Compression images avant OCR

---

## 🔧 Prochaines Étapes Immédiates

### Actions Dev Team

1. **Review codebase actuel** → Me partager structure existante
2. **Setup environnement** → Cloner repo, installer dépendances
3. **Créer schéma DB** → Exécuter migrations Supabase
4. **Configurer APIs externes** → Claude, Google Vision, Stripe
5. **Développer MVP core** → Suivre checklist ci-dessus

### Questions en Suspens

1. Design system / Maquettes UI disponibles ?
2. Contenu base de connaissances GDP déjà structuré ?
3. Critères GDP & pondérations finalisés ?
4. Workflow de validation consultant défini ?
5. Modèles de documents templates prêts ?

---

## 📚 Ressources & Documentation

### Documentation Officielle
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Anthropic API](https://docs.anthropic.com)
- [Google Cloud Vision](https://cloud.google.com/vision/docs)
- [Stripe API](https://stripe.com/docs/api)
- [Shadcn UI](https://ui.shadcn.com)

### Exemples de Code
- [Next.js + Supabase Auth](https://github.com/supabase/auth-helpers)
- [Claude API Node.js](https://github.com/anthropics/anthropic-sdk-typescript)
- [Stripe Webhooks](https://github.com/stripe-samples/subscription-use-cases)

---

## 🤝 Support & Contact

**Chef de Projet:** Vivien (VYXO Consulting)
**Dev Team:** Antigravity

**Canaux de communication:**
- Repo GitHub: [À définir]
- Slack/Discord: [À définir]
- Weekly sync: [À définir]

---

**Dernière mise à jour:** 14 janvier 2025
**Version:** 1.0 MVP Specifications
**Status:** Ready for Development 🚀
