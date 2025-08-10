import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { createClient } from "@supabase/supabase-js"
import { supabaseUrl, supabaseAnon } from "@/lib/supabase"

export async function GET(req: NextRequest) {
  if (!supabaseUrl || !supabaseAnon) return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 })
  const headerDeviceId = req.headers.get("x-device-id") || ""
  const profileId = req.headers.get("x-profile-id") || ""
  if (!headerDeviceId && !profileId) return NextResponse.json({ ok: false, error: "Missing device_id or profile_id" }, { status: 400 })
  const supabase = createClient(supabaseUrl, supabaseAnon, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: headerDeviceId ? { headers: { "x-device-id": headerDeviceId } } : undefined,
  })
  let pid = profileId
  if (!pid && headerDeviceId) {
    const { data: prof } = await supabase.from("profiles").select("id").eq("device_id", headerDeviceId).maybeSingle()
    pid = prof?.id || ""
  }
  if (!pid) return NextResponse.json({ ok: true, items: [] })
  const { data, error } = await supabase.from("progress").select("chapter_id, learned_count, correct_count, wrong_count, mastery_pct").eq("profile_id", pid)
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, items: data || [], profile_id: pid })
}

export async function POST(req: NextRequest) {
  const payload = await req.json()
  const {
    profile_id: providedProfileId,
    device_id: providedDeviceId,
    chapter_id,
    learned_count,
    correct_count,
    wrong_count,
    mastery_pct,
  } = payload || {}
  if (!supabaseUrl || !supabaseAnon) return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 })
  if (!chapter_id) return NextResponse.json({ ok: false, error: "Missing chapter_id" }, { status: 400 })

  const headerDeviceId = req.headers.get("x-device-id") || providedDeviceId
  if (!headerDeviceId && !providedProfileId) return NextResponse.json({ ok: false, error: "Missing device_id or profile_id" }, { status: 400 })

  const supabase = createClient(supabaseUrl, supabaseAnon, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: headerDeviceId ? { headers: { "x-device-id": headerDeviceId } } : undefined,
  })

  // Resolve profile_id either by providedProfileId or by device_id lookup/create
  let profileId: string | null = providedProfileId || null
  if (!profileId && headerDeviceId) {
    const { data: prof } = await supabase.from("profiles").select("id").eq("device_id", headerDeviceId).maybeSingle()
    if (prof?.id) {
      profileId = prof.id
    } else {
      const newId = (globalThis as any).crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`
      const { error: insErr } = await supabase.from("profiles").insert({ id: newId, device_id: headerDeviceId }).single()
      if (insErr) return NextResponse.json({ ok: false, error: insErr.message }, { status: 500 })
      profileId = newId
    }
  }

  if (!profileId) return NextResponse.json({ ok: false, error: "Unable to resolve profile_id" }, { status: 400 })

  const { error } = await supabase.from("progress").upsert({
    profile_id: profileId,
    chapter_id,
    learned_count: learned_count ?? 0,
    correct_count: correct_count ?? 0,
    wrong_count: wrong_count ?? 0,
    mastery_pct: mastery_pct ?? 0,
    last_active_at: new Date().toISOString(),
  })
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, profile_id: profileId })
}


