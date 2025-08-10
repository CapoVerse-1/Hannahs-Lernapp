import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { supabase } from "@/lib/supabase"

export async function POST(req: NextRequest) {
  const payload = await req.json()
  const { profile_id, chapter_id, learned_count, correct_count, wrong_count, mastery_pct } = payload || {}
  if (!supabase) return NextResponse.json({ ok: false, error: "Supabase not configured" }, { status: 500 })
  if (!profile_id || !chapter_id) return NextResponse.json({ ok: false, error: "Missing profile_id or chapter_id" }, { status: 400 })
  const { error } = await supabase.from("progress").upsert({
    profile_id,
    chapter_id,
    learned_count: learned_count ?? 0,
    correct_count: correct_count ?? 0,
    wrong_count: wrong_count ?? 0,
    mastery_pct: mastery_pct ?? 0,
    last_active_at: new Date().toISOString()
  })
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}


