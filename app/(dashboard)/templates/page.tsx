"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  Search,
  Filter,
  FileSpreadsheet,
  File,
  FileType,
  Clock,
  Tag,
  X,
  CheckCircle2,
  Loader2
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
interface Template {
  id: string;
  template_code: string;
  standard_type: string;
  title: string;
  description: string;
  category: string;
  file_format: string;
  file_url: string;
  file_size: number;
  requirement_ref?: string;
  sector_adaptations?: {
    tags?: string[];
    estimatedCompletionHours?: number;
  };
  download_count: number;
  display_order: number;
}

// Configuration
const STANDARD_CONFIG: Record<string, { name: string; icon: string; color: string }> = {
  GDP: { name: 'GDP / BPD', icon: '💊', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  ISO_9001: { name: 'ISO 9001', icon: '📊', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  ISO_27001: { name: 'ISO 27001', icon: '🔒', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  HACCP: { name: 'HACCP', icon: '🍽️', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
  ISO_42001: { name: 'ISO 42001', icon: '🤖', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' },
  ISO_13485: { name: 'ISO 13485', icon: '🏥', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  SURETE: { name: 'Sûreté Aéro', icon: '✈️', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
};

const CATEGORY_CONFIG: Record<string, { name: string; icon: typeof FileText }> = {
  manuel: { name: 'Manuel', icon: FileText },
  procedure: { name: 'Procédure', icon: FileType },
  formulaire: { name: 'Formulaire', icon: FileSpreadsheet },
  outil: { name: 'Outil', icon: File },
};

const FORMAT_ICONS: Record<string, { icon: typeof FileText; color: string }> = {
  docx: { icon: FileText, color: 'text-blue-500' },
  xlsx: { icon: FileSpreadsheet, color: 'text-green-500' },
  pdf: { icon: FileType, color: 'text-red-500' },
};

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<Set<string>>(new Set());
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStandard, setSelectedStandard] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availableStandards, setAvailableStandards] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  // Fetch templates
  const fetchTemplates = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (selectedStandard !== 'all') params.append('standard', selectedStandard);
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      if (searchQuery) params.append('search', searchQuery);
      
      const response = await fetch(`/api/templates?${params.toString()}`);
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setTemplates(data.templates);
        if (data.filters) {
          setAvailableStandards(data.filters.standards);
          setAvailableCategories(data.filters.categories);
        }
      }
    } catch (err) {
      setError('Erreur lors du chargement des templates');
    } finally {
      setLoading(false);
    }
  }, [selectedStandard, selectedCategory, searchQuery]);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  // Handle download
  const handleDownload = async (template: Template) => {
    setDownloadingId(template.id);
    try {
      const response = await fetch('/api/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: template.id }),
      });
      
      const data = await response.json();
      
      if (data.success && data.downloadUrl) {
        // Open download URL
        window.open(data.downloadUrl, '_blank');
        setDownloadedIds(prev => new Set([...prev, template.id]));
      }
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  // Clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedStandard('all');
    setSelectedCategory('all');
  };

  const hasActiveFilters = searchQuery || selectedStandard !== 'all' || selectedCategory !== 'all';

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen p-6 md:p-8 space-y-8"
    >
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FileText className="h-8 w-8 text-ClearGo-gold" />
            Bibliothèque de Templates
          </h1>
          <p className="text-muted-foreground mt-1">
            Documents prêts à l&apos;emploi pour votre certification
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm py-1">
            {templates.length} templates disponibles
          </Badge>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={item} className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un template..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Standard filter */}
        <Select value={selectedStandard} onValueChange={setSelectedStandard}>
          <SelectTrigger className="w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Norme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les normes</SelectItem>
            {availableStandards.map((std) => (
              <SelectItem key={std} value={std}>
                {STANDARD_CONFIG[std]?.icon} {STANDARD_CONFIG[std]?.name || std}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Category filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <Tag className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            {availableCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {CATEGORY_CONFIG[cat]?.name || cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear filters */}
        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters} className="gap-2">
            <X className="h-4 w-4" />
            Effacer
          </Button>
        )}
      </motion.div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-ClearGo-navy" />
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="text-center py-20">
          <p className="text-red-500">{error}</p>
          <Button onClick={fetchTemplates} className="mt-4">Réessayer</Button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && templates.length === 0 && (
        <motion.div variants={item} className="text-center py-20">
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Aucun template trouvé
          </h3>
          <p className="text-muted-foreground mb-4">
            {hasActiveFilters 
              ? 'Essayez de modifier vos filtres de recherche.'
              : 'Les templates seront disponibles prochainement.'}
          </p>
          {hasActiveFilters && (
            <Button onClick={clearFilters} variant="outline">
              Effacer les filtres
            </Button>
          )}
        </motion.div>
      )}

      {/* Templates Grid */}
      {!loading && !error && templates.length > 0 && (
        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {templates.map((template) => {
            const standardConfig = STANDARD_CONFIG[template.standard_type] || { name: template.standard_type, icon: '📋', color: 'bg-gray-100 text-gray-700' };
            const categoryConfig = CATEGORY_CONFIG[template.category] || { name: template.category, icon: FileText };
            const formatConfig = FORMAT_ICONS[template.file_format] || { icon: File, color: 'text-gray-500' };
            const FormatIcon = formatConfig.icon;
            const isDownloading = downloadingId === template.id;
            const isDownloaded = downloadedIds.has(template.id);
            const tags = template.sector_adaptations?.tags || [];
            const estimatedHours = template.sector_adaptations?.estimatedCompletionHours;

            return (
              <motion.div key={template.id} variants={item}>
                <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-transparent hover:border-l-ClearGo-gold group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${standardConfig.color}`}>
                          <FormatIcon className={`h-5 w-5 ${formatConfig.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-base line-clamp-2 group-hover:text-ClearGo-navy dark:group-hover:text-ClearGo-gold transition-colors">
                            {template.title}
                          </CardTitle>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {standardConfig.icon} {standardConfig.name}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-2">
                      {template.description}
                    </CardDescription>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {categoryConfig.name}
                      </Badge>
                      <Badge variant="secondary" className="text-xs uppercase">
                        .{template.file_format}
                      </Badge>
                      {estimatedHours && (
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          ~{estimatedHours}h
                        </Badge>
                      )}
                    </div>

                    {/* Tags */}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs text-muted-foreground bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Download button */}
                    <Button 
                      className="w-full gap-2"
                      variant={isDownloaded ? "outline" : "default"}
                      disabled={isDownloading}
                      onClick={() => handleDownload(template)}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Téléchargement...
                        </>
                      ) : isDownloaded ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Téléchargé
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Télécharger
                        </>
                      )}
                    </Button>

                    {/* Download count */}
                    {template.download_count > 0 && (
                      <p className="text-xs text-center text-muted-foreground">
                        {template.download_count} téléchargement{template.download_count > 1 ? 's' : ''}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}

