import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseServiceKey)
}

// GET /api/templates - Get all templates with optional filtering
export async function GET(request: Request) {
  try {
    const supabase = getSupabaseClient()
    const { searchParams } = new URL(request.url)
    
    // Get query parameters
    const standardType = searchParams.get('standard')
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    // Build query
    let query = supabase
      .from('templates')
      .select('*')
      .eq('is_active', true)
      .order('display_order')

    // Apply filters
    if (standardType) {
      query = query.eq('standard_type', standardType)
    }
    
    if (category) {
      query = query.eq('category', category)
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`)
    }

    const { data: templates, error } = await query

    if (error) {
      console.error('Error fetching templates:', error)
      return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 })
    }

    // Get unique categories and standards for filters
    const categories = [...new Set(templates?.map(t => t.category).filter(Boolean))]
    const standards = [...new Set(templates?.map(t => t.standard_type).filter(Boolean))]

    return NextResponse.json({
      templates: templates || [],
      filters: {
        categories,
        standards
      },
      total: templates?.length || 0
    })

  } catch (error) {
    console.error('Templates GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/templates/download - Track template download
export async function POST(request: Request) {
  try {
    const supabase = getSupabaseClient()
    const body = await request.json()
    const { templateId } = body

    if (!templateId) {
      return NextResponse.json({ error: 'templateId is required' }, { status: 400 })
    }

    // Increment download count
    const { data: template, error: fetchError } = await supabase
      .from('templates')
      .select('download_count, file_url')
      .eq('id', templateId)
      .single()

    if (fetchError || !template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    // Update download count
    await supabase
      .from('templates')
      .update({ download_count: (template.download_count || 0) + 1 })
      .eq('id', templateId)

    return NextResponse.json({
      success: true,
      downloadUrl: template.file_url
    })

  } catch (error) {
    console.error('Templates POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
