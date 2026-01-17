import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { generateRoadmap } from '@/lib/services/roadmap-generator'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Helper to get supabase client
function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseServiceKey)
}

// GET /api/roadmap - Get user's roadmap
export async function GET() {
  try {
    const supabase = getSupabaseClient()
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's roadmap with actions
    const { data: roadmap, error } = await supabase
      .from('roadmaps')
      .select(`
        *,
        user_actions (
          *,
          actions (*)
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching roadmap:', error)
      return NextResponse.json({ error: 'Failed to fetch roadmap' }, { status: 500 })
    }

    // If no roadmap exists, return null
    if (!roadmap) {
      return NextResponse.json({ roadmap: null, hasRoadmap: false })
    }

    // Calculate progress
    const totalActions = roadmap.user_actions?.length || 0
    const completedActions = roadmap.user_actions?.filter(
      (ua: any) => ua.status === 'completed'
    ).length || 0
    const progressPercentage = totalActions > 0 
      ? Math.round((completedActions / totalActions) * 100) 
      : 0

    // Group actions by sprint
    const sprintMap = new Map<number, any[]>()
    roadmap.user_actions?.forEach((ua: any) => {
      const sprint = ua.sprint_number || 1
      if (!sprintMap.has(sprint)) {
        sprintMap.set(sprint, [])
      }
      sprintMap.get(sprint)!.push({
        ...ua,
        action: ua.actions
      })
    })

    // Convert to array of sprints
    const sprints = Array.from(sprintMap.entries())
      .sort(([a], [b]) => a - b)
      .map(([sprintNumber, actions]) => ({
        number: sprintNumber,
        name: `Sprint ${sprintNumber}`,
        actions: actions.sort((a: any, b: any) => 
          (a.action?.display_order || 0) - (b.action?.display_order || 0)
        ),
        totalHours: actions.reduce((sum: number, a: any) => 
          sum + (a.action?.estimated_hours || 0), 0
        ),
        completedActions: actions.filter((a: any) => a.status === 'completed').length,
      }))

    return NextResponse.json({
      roadmap: {
        ...roadmap,
        sprints,
        progressPercentage,
        totalActions,
        completedActions,
      },
      hasRoadmap: true
    })

  } catch (error) {
    console.error('Roadmap GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/roadmap - Generate new roadmap from assessment
export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseClient()
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { 
      standardType, 
      sectionScores, 
      assessmentSessionId,
      overwriteExisting = false 
    } = body

    if (!standardType || !sectionScores) {
      return NextResponse.json(
        { error: 'standardType and sectionScores are required' }, 
        { status: 400 }
      )
    }

    // Check if user already has an active roadmap for this standard
    const { data: existingRoadmap } = await supabase
      .from('roadmaps')
      .select('id, status')
      .eq('user_id', user.id)
      .eq('standard_type', standardType)
      .eq('status', 'active')
      .single()

    if (existingRoadmap && !overwriteExisting) {
      return NextResponse.json({
        error: 'Active roadmap already exists for this standard',
        existingRoadmapId: existingRoadmap.id,
        suggestion: 'Set overwriteExisting=true to replace it'
      }, { status: 409 })
    }

    // If overwriting, mark existing as abandoned
    if (existingRoadmap && overwriteExisting) {
      await supabase
        .from('roadmaps')
        .update({ status: 'abandoned' })
        .eq('id', existingRoadmap.id)
    }

    // Get all actions for this standard from the database
    const { data: dbActions, error: actionsError } = await supabase
      .from('actions')
      .select('*')
      .eq('standard_type', standardType)
      .order('display_order')

    if (actionsError || !dbActions?.length) {
      // Fallback: use local data
      console.log('No actions in DB, using local data')
    }

    // Generate roadmap using the service
    const generatedRoadmap = generateRoadmap(standardType, sectionScores)

    // Calculate estimated completion date
    const estimatedCompletionDate = new Date()
    estimatedCompletionDate.setDate(
      estimatedCompletionDate.getDate() + (generatedRoadmap.estimatedWeeks * 7)
    )

    // Create the roadmap in database
    const { data: newRoadmap, error: createError } = await supabase
      .from('roadmaps')
      .insert({
        user_id: user.id,
        standard_type: standardType,
        assessment_session_id: assessmentSessionId || null,
        total_sprints: generatedRoadmap.sprints.length,
        current_sprint: 1,
        sprint_duration_weeks: 2,
        completion_percentage: 0,
        estimated_completion_date: estimatedCompletionDate.toISOString(),
        status: 'active',
        sprint_details: generatedRoadmap.sprints.map(sprint => ({
          sprintNumber: sprint.number,
          startWeek: sprint.startWeek,
          endWeek: sprint.endWeek,
          name: sprint.name,
          totalHours: sprint.totalHours,
        }))
      })
      .select()
      .single()

    if (createError) {
      console.error('Error creating roadmap:', createError)
      return NextResponse.json({ error: 'Failed to create roadmap' }, { status: 500 })
    }

    // Create user_actions for each action in the roadmap
    const userActions = []
    for (const sprint of generatedRoadmap.sprints) {
      for (const action of sprint.actions) {
        // Find the action in the database
        const dbAction = dbActions?.find(a => 
          a.action_code === action.id || 
          a.action_code.includes(action.id.split('-').slice(-2).join('-'))
        )

        if (dbAction) {
          userActions.push({
            user_id: user.id,
            roadmap_id: newRoadmap.id,
            action_id: dbAction.id,
            sprint_number: sprint.number,
            status: 'not_started',
          })
        }
      }
    }

    // Insert user actions if we have any
    if (userActions.length > 0) {
      const { error: userActionsError } = await supabase
        .from('user_actions')
        .insert(userActions)

      if (userActionsError) {
        console.error('Error creating user actions:', userActionsError)
        // Don't fail the whole request, roadmap is still created
      }
    }

    return NextResponse.json({
      success: true,
      roadmap: {
        id: newRoadmap.id,
        standardType: newRoadmap.standard_type,
        totalSprints: newRoadmap.total_sprints,
        estimatedWeeks: generatedRoadmap.estimatedWeeks,
        totalActions: generatedRoadmap.totalActions,
        totalHours: generatedRoadmap.totalHours,
        estimatedCompletionDate: newRoadmap.estimated_completion_date,
        userActionsCreated: userActions.length,
      },
      message: `Roadmap créé avec ${generatedRoadmap.totalActions} actions réparties sur ${generatedRoadmap.sprints.length} sprints`
    })

  } catch (error) {
    console.error('Roadmap POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PATCH /api/roadmap - Update roadmap action status
export async function PATCH(request: NextRequest) {
  try {
    const supabase = getSupabaseClient()
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { userActionId, status, notes, blockedReason } = body

    if (!userActionId || !status) {
      return NextResponse.json(
        { error: 'userActionId and status are required' }, 
        { status: 400 }
      )
    }

    // Validate status
    const validStatuses = ['not_started', 'in_progress', 'completed', 'blocked', 'skipped']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` }, 
        { status: 400 }
      )
    }

    // Update the user action
    const updateData: any = {
      status,
      updated_at: new Date().toISOString(),
    }

    if (status === 'in_progress' && !body.startedAt) {
      updateData.started_at = new Date().toISOString()
    }

    if (status === 'completed') {
      updateData.completed_at = new Date().toISOString()
    }

    if (notes !== undefined) {
      updateData.notes = notes
    }

    if (blockedReason !== undefined) {
      updateData.blocked_reason = blockedReason
    }

    const { data: updatedAction, error: updateError } = await supabase
      .from('user_actions')
      .update(updateData)
      .eq('id', userActionId)
      .eq('user_id', user.id)
      .select()
      .single()

    if (updateError) {
      console.error('Error updating user action:', updateError)
      return NextResponse.json({ error: 'Failed to update action' }, { status: 500 })
    }

    // Update roadmap completion percentage
    if (updatedAction) {
      const { data: allActions } = await supabase
        .from('user_actions')
        .select('status')
        .eq('roadmap_id', updatedAction.roadmap_id)

      const totalActions = allActions?.length || 0
      const completedActions = allActions?.filter(a => a.status === 'completed').length || 0
      const completionPercentage = totalActions > 0 
        ? Math.round((completedActions / totalActions) * 100) 
        : 0

      // Update roadmap progress
      await supabase
        .from('roadmaps')
        .update({ 
          completion_percentage: completionPercentage,
          ...(completionPercentage === 100 ? { 
            status: 'completed',
            completed_at: new Date().toISOString()
          } : {})
        })
        .eq('id', updatedAction.roadmap_id)
    }

    return NextResponse.json({
      success: true,
      action: updatedAction,
      message: `Action mise à jour: ${status}`
    })

  } catch (error) {
    console.error('Roadmap PATCH error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

