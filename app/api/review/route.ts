import { NextRequest, NextResponse } from "next/server"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { questions, cards, summaryByChapter } from "@/lib/content"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const chapter = Number(searchParams.get("chapter") || "1")
  const from = Math.max(1, chapter - 1)
  // 15-Minuten-Review: ca. 12-15 kurze Items
  const qs = questions.filter((q) => q.chapter_id === from).slice(0, 7)
  const cs = cards.filter((c) => c.section_id.startsWith(`${from}-`)).slice(0, 6)
  const summary = summaryByChapter[from]?.slice(0, 6) || []
  return NextResponse.json({ questions: qs, cards: cs, summary, duration_goal: 15 })
}


