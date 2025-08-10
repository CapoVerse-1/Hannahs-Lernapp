import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { supabase } from "@/lib/supabase"
import { questions } from "@/lib/content"
import { sampleQuestionsForMode } from "@/lib/selection"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const chapter = Number(searchParams.get("chapter") || "1")
  const mode = (searchParams.get("mode") || "full") as "full" | "fast"
  // Fallback to local content if Supabase not configured
  if (!supabase) {
    const all = questions.filter((q) => q.chapter_id === chapter)
    const subset = sampleQuestionsForMode(all, mode)
    return NextResponse.json({ items: subset })
  }
  // Try to read from Supabase 'questions' if available; else fallback
  const { data, error } = await supabase.from("questions").select("id, chapter_id, stem_md, options, explanation_md, tags").eq("chapter_id", chapter)
  const all = (error || !data || data.length === 0)
    ? questions.filter((q) => q.chapter_id === chapter)
    : data
  const subset = sampleQuestionsForMode(all, mode)
  return NextResponse.json({ items: subset })
}


