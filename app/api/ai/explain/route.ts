import { NextRequest, NextResponse } from "next/server"
import fs from "node:fs"
import path from "node:path"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
import { ExplainRequest } from "@/lib/schemas"

export async function POST(req: NextRequest) {
  const json = await req.json()
  const parsed = ExplainRequest.safeParse(json)
  if (!parsed.success) return NextResponse.json({ error: "Bad request" }, { status: 400 })
  const key = process.env.OPENAI_API_KEY
  if (!key) {
    return NextResponse.json({ text: "Mock: Erklärung basierend auf Kontext. TODO: OPENAI_API_KEY setzen." })
  }
  const { type, payload, locale, chapter } = parsed.data
  // Load full contexts from source file to ensure 1:1 inclusion
  const stoffPath = path.join(process.cwd(), "Stoff.md")
  const stoff = fs.readFileSync(stoffPath, "utf8")
  function extractKapitel(n: number): string {
    const patternStart = new RegExp(`(^|\n)\s*Kapitel\\s+${n}\\b`, "i")
    const patternNext = new RegExp(`(^|\n)\s*Kapitel\\s+${n + 1}\\b`, "i")
    const startIdx = stoff.search(patternStart)
    if (startIdx < 0) return ""
    const rest = stoff.slice(startIdx)
    const nextIdxRel = rest.search(patternNext)
    return nextIdxRel < 0 ? rest : rest.slice(0, nextIdxRel)
  }
  const kapitel1Exact = extractKapitel(1)
  const kapitel2Exact = extractKapitel(2)

  let systemPrompt = `Du bist eine Lernai, die hilft Kontext oder Karten näher zu erklären. Du bist ein Psychologie‑Experte. Antworte in maximal 3 Sätzen.`
  let userPrompt: string
  const ctx = chapter === 2 ? kapitel2Exact : kapitel1Exact
  if (type === "summary") {
    userPrompt = `Der Leser hat gerade eine Frage zu diesem Kontext (Zusammenfassung).\n\nAktueller Inhalt:\n${typeof payload === 'string' ? payload : JSON.stringify(payload)}\n\nHier hast du alles Wissen darüber (1:1):\n${ctx}\n\nBitte antworte in ${locale}.`
  } else if (type === "card") {
    userPrompt = `Du bist eine Lern‑AI speziell für Karteikarten. Erkläre prägnant, vertiefe Beispiele und Merksätze.\n\nAktuelle Karte:\n${typeof payload === 'string' ? payload : JSON.stringify(payload)}\n\nHier hast du alles Wissen (1:1) zu Kapitel ${chapter}:\n${ctx}\n\nBitte antworte in ${locale}.`
  } else {
    systemPrompt = `Du bist eine Lern‑AI für Prüfungsfragen (Mehrfachauswahl). Erkläre, warum richtige Optionen korrekt und falsche falsch sind, ohne zu spoilern, wenn noch nicht beantwortet. Antworte in maximal 3 Sätzen.`
    userPrompt = `Aktuelle Frage (MCQ):\n${typeof payload === 'string' ? payload : JSON.stringify(payload)}\n\nHier hast du alles Wissen (1:1) zu Kapitel ${chapter}:\n${ctx}\n\nBitte antworte in ${locale}.`
  }
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      // Use the requested nano model alias (placeholder string):
      model: "gpt-5-nano",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.3,
    })
  })
  const data = await r.json()
  const text = data?.choices?.[0]?.message?.content ?? "Keine Antwort"
  return NextResponse.json({ text })
}


