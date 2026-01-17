"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  Clock, 
  ChevronDown, 
  ChevronRight,
  Play,
  Pause,
  Flag,
  AlertTriangle,
  FileText,
  Download,
  Target,
  Calendar,
  TrendingUp
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
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Types
interface Action {
  id: string;
  title: string;
  description?: string;
  estimated_hours: number;
  priority_weight: number;
  category?: string;
  display_order: number;
}

interface UserAction {
  id: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'blocked' | 'skipped';
  sprint_number: number;
  started_at?: string;
  completed_at?: string;
  notes?: string;
  action: Action;
}

interface Sprint {
  number: number;
  name: string;
  actions: UserAction[];
  totalHours: number;
  completedActions: number;
}

interface Roadmap {
  id: string;
  standard_type: string;
  total_sprints: number;
  current_sprint: number;
  completion_percentage: number;
  estimated_completion_date: string;
  status: string;
  sprints: Sprint[];
  totalActions: number;
  completedActions: number;
  progressPercentage: number;
}

// Status configuration
const STATUS_CONFIG = {
  not_started: { 
    label: 'À faire', 
    color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    icon: Circle 
  },
  in_progress: { 
    label: 'En cours', 
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    icon: Play 
  },
  completed: { 
    label: 'Terminé', 
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    icon: CheckCircle2 
  },
  blocked: { 
    label: 'Bloqué', 
    color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    icon: AlertTriangle 
  },
  skipped: { 
    label: 'Ignoré', 
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
    icon: Pause 
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  documentation: "Documentation",
  process: "Processus",
  training: "Formation",
  infrastructure: "Infrastructure",
  management: "Management",
  audit: "Audit",
};

const STANDARD_LABELS: Record<string, { name: string; icon: string }> = {
  GDP: { name: 'GDP / BPD', icon: '💊' },
  ISO_9001: { name: 'ISO 9001', icon: '📊' },
  ISO_27001: { name: 'ISO 27001', icon: '🔒' },
  HACCP: { name: 'HACCP', icon: '🍽️' },
  ISO_42001: { name: 'ISO 42001', icon: '🤖' },
  ISO_13485: { name: 'ISO 13485', icon: '🏥' },
  SURETE: { name: 'Sûreté Aéro', icon: '✈️' },
};

export default function RoadmapPage() {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSprints, setExpandedSprints] = useState<Set<number>>(new Set([1]));
  const [updatingAction, setUpdatingAction] = useState<string | null>(null);

  // Fetch roadmap data
  const fetchRoadmap = useCallback(async () => {
    try {
      const response = await fetch('/api/roadmap');
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else if (data.hasRoadmap) {
        setRoadmap(data.roadmap);
        // Auto-expand current sprint
        if (data.roadmap.current_sprint) {
          setExpandedSprints(new Set([data.roadmap.current_sprint]));
        }
      }
    } catch (err) {
      setError('Erreur lors du chargement de la roadmap');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoadmap();
  }, [fetchRoadmap]);

  // Update action status
  const updateActionStatus = async (userActionId: string, newStatus: string) => {
    setUpdatingAction(userActionId);
    try {
      const response = await fetch('/api/roadmap', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userActionId, status: newStatus }),
      });
      
      if (response.ok) {
        await fetchRoadmap(); // Refresh data
      }
    } catch (err) {
      console.error('Error updating action:', err);
    } finally {
      setUpdatingAction(null);
    }
  };

  // Toggle sprint expansion
  const toggleSprint = (sprintNumber: number) => {
    setExpandedSprints(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sprintNumber)) {
        newSet.delete(sprintNumber);
      } else {
        newSet.add(sprintNumber);
      }
      return newSet;
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ClearGo-navy"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {error === 'Unauthorized' ? 'Connexion requise' : 'Erreur'}
        </h2>
        <p className="text-muted-foreground mb-4">
          {error === 'Unauthorized' 
            ? 'Veuillez vous connecter pour accéder à votre roadmap.'
            : error}
        </p>
        <Button onClick={() => window.location.href = '/login'}>
          Se connecter
        </Button>
      </div>
    );
  }

  // No roadmap state
  if (!roadmap) {
    return (
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen flex flex-col items-center justify-center p-8"
      >
        <motion.div variants={item} className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-ClearGo-navy to-slate-900 mb-6">
            <Map className="h-10 w-10 text-ClearGo-gold" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pas encore de roadmap
          </h1>
          <p className="text-muted-foreground max-w-md mb-8">
            Complétez un diagnostic pour obtenir votre plan d&apos;action personnalisé 
            vers la certification.
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = '/assessments'}
            className="bg-ClearGo-navy hover:bg-ClearGo-navy/90"
          >
            <Target className="mr-2 h-5 w-5" />
            Commencer un diagnostic
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  // Main roadmap view
  const standardInfo = STANDARD_LABELS[roadmap.standard_type] || { name: roadmap.standard_type, icon: '📋' };
  const estimatedDate = new Date(roadmap.estimated_completion_date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

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
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{standardInfo.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Roadmap {standardInfo.name}
            </h1>
          </div>
          <p className="text-muted-foreground">
            Votre plan d&apos;action personnalisé vers la certification
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter PDF
          </Button>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Voir templates
          </Button>
        </div>
      </motion.div>

      {/* Progress Overview */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="col-span-2 bg-gradient-to-br from-ClearGo-navy to-slate-900 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white/80">Progression globale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-4">
              <span className="text-5xl font-bold">{roadmap.progressPercentage}%</span>
              <div className="flex-1 pb-2">
                <Progress value={roadmap.progressPercentage} className="h-3 bg-white/20" />
              </div>
            </div>
            <p className="text-sm text-white/60 mt-2">
              {roadmap.completedActions} / {roadmap.totalActions} actions complétées
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Flag className="h-4 w-4" />
              Sprint actuel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {roadmap.current_sprint}
            </span>
            <span className="text-muted-foreground text-lg"> / {roadmap.total_sprints}</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Fin estimée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {estimatedDate}
            </span>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sprints Timeline */}
      <motion.div variants={item} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Plan d&apos;action par sprints
        </h2>

        <div className="space-y-4">
          {roadmap.sprints.map((sprint) => {
            const sprintProgress = sprint.actions.length > 0 
              ? Math.round((sprint.completedActions / sprint.actions.length) * 100)
              : 0;
            const isExpanded = expandedSprints.has(sprint.number);
            const isCurrent = sprint.number === roadmap.current_sprint;

            return (
              <Collapsible key={sprint.number} open={isExpanded}>
                <Card className={`border-l-4 transition-all ${
                  isCurrent 
                    ? 'border-l-ClearGo-gold shadow-lg' 
                    : sprintProgress === 100 
                    ? 'border-l-green-500' 
                    : 'border-l-gray-300 dark:border-l-gray-700'
                }`}>
                  <CollapsibleTrigger 
                    onClick={() => toggleSprint(sprint.number)}
                    className="w-full"
                  >
                    <CardHeader className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg text-left">
                                {sprint.name}
                              </CardTitle>
                              {isCurrent && (
                                <Badge className="bg-ClearGo-gold text-ClearGo-navy">
                                  En cours
                                </Badge>
                              )}
                              {sprintProgress === 100 && (
                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  Terminé
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-left">
                              {sprint.actions.length} actions • ~{sprint.totalHours}h estimées
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                              {sprintProgress}%
                            </span>
                          </div>
                          <div className="w-24">
                            <Progress value={sprintProgress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {sprint.actions.map((userAction) => {
                          const statusConfig = STATUS_CONFIG[userAction.status];
                          const StatusIcon = statusConfig.icon;
                          const isUpdating = updatingAction === userAction.id;

                          return (
                            <div 
                              key={userAction.id}
                              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                              <div className="flex items-center gap-4">
                                <StatusIcon className={`h-5 w-5 ${
                                  userAction.status === 'completed' ? 'text-green-500' :
                                  userAction.status === 'in_progress' ? 'text-blue-500' :
                                  userAction.status === 'blocked' ? 'text-red-500' :
                                  'text-gray-400'
                                }`} />
                                <div>
                                  <h4 className="font-medium text-gray-900 dark:text-white">
                                    {userAction.action?.title || 'Action'}
                                  </h4>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    <span>{userAction.action?.estimated_hours || 0}h</span>
                                    {userAction.action?.category && (
                                      <>
                                        <span>•</span>
                                        <span>{CATEGORY_LABELS[userAction.action.category] || userAction.action.category}</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <Badge className={statusConfig.color}>
                                  {statusConfig.label}
                                </Badge>
                                
                                {/* Quick action buttons */}
                                {userAction.status === 'not_started' && (
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    disabled={isUpdating}
                                    onClick={() => updateActionStatus(userAction.id, 'in_progress')}
                                  >
                                    {isUpdating ? '...' : 'Démarrer'}
                                  </Button>
                                )}
                                {userAction.status === 'in_progress' && (
                                  <Button 
                                    size="sm"
                                    disabled={isUpdating}
                                    onClick={() => updateActionStatus(userAction.id, 'completed')}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    {isUpdating ? '...' : 'Terminer'}
                                  </Button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

