"use client"
import { useParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Flashcard } from "@/components/Flashcard"
import { SummaryStepper } from "@/components/SummaryStepper"
import { InlineAI } from "@/components/InlineAI"
import { Timer } from "@/components/Timer"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { chapters, cards, chapter1SummarySteps, summaryByChapter } from "@/lib/content"
import { useAppStore } from "@/lib/store"
import { useMemo, useState, useRef } from "react"

export default function StudyPage() {
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  const chapter = chapters.find((c) => c.id === id)!
  const mode = useAppStore((s) => s.mode)
  const router = useRouter()

  const chapterCards = useMemo(() => cards.filter((c) => c.section_id.startsWith(`${id}-`)), [id])
  const [idx, setIdx] = useState(0)
  const [known, setKnown] = useState(0)
  const concise = mode === "fast"
  const summaries = summaryByChapter[id] ?? (id === 1 ? chapter1SummarySteps : [
    { title: "Überblick", body: concise ? "Psychologie: Erleben/Verhalten; Fächer; Ansätze." : "Psychologie untersucht Erleben und Verhalten in sozialen/kulturellen Kontexten. Grundlagenfächer: Bio-, Allg.-, Entwicklungs-, Sozial-, Differentielle/Persönlichkeitspsychologie. Ziele: Beschreiben, Erklären, Vorhersagen, Verändern/Anwenden." },
    { title: "Fächer", body: concise ? "Bio, Allg., Entwicklung, Sozial, Differentielle." : "Biologische Psychologie (Nervensystem), Allgemeine Psychologie (Wahrnehmung etc.), Entwicklungspsychologie (Lebensspanne), Sozialpsychologie (Einfluss anderer), Differentielle/Persönlichkeit (Unterschiede/Big Five)." },
    { title: "Ansätze", body: concise ? "Behaviorismus, Psychoanalyse, Humanistisch, Kognitiv." : "Behaviorismus (Verhalten/Konditionierung), Psychoanalyse (Unbewusstes), Humanistische Psychologie (Wachstum/Selbst), Kognitive Wende (Informationsverarbeitung; kognitive Neurowissenschaft)." }
  ])

  function nextCard(knew: boolean) {
    setKnown((k) => k + (knew ? 1 : 0))
    setIdx((i) => Math.min(chapterCards.length - 1, i + 1))
  }

  const currentSummaryIdx = useRef(0)
  return (
    <main className="pb-28">
      <Timer targetMinutes={mode === "fast" ? Math.round(chapter.eta_minutes * 0.66) : chapter.eta_minutes} />
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold">Kapitel {chapter.id}: {chapter.title}</h1>
        <Card className="p-4 relative" key="summary">
          <InlineAI chapter={id} context={{ type: "summary", payload: summaries }} />
          <div className="text-sm opacity-80 mb-2">Schrittweise Zusammenfassung</div>
          <SummaryStepper pages={summaries} onIndexChange={(i) => { currentSummaryIdx.current = i }} onComplete={() => {
            // Mark summary read progress (no mastery change yet)
          }} />
        </Card>
        <Card className="p-4 relative" key={`cards-${idx}`}>
          <InlineAI chapter={id} context={{ type: "card", payload: chapterCards[idx] }} />
          <div className="text-sm opacity-80 mb-2">Karteikarten</div>
          <Flashcard
            front={chapterCards[idx]?.front_md || "—"}
            back={chapterCards[idx]?.back_md || "—"}
            hint={chapterCards[idx]?.hint_md}
            onNext={nextCard}
          />
          <div className="mt-3 text-xs opacity-70">{idx + 1} / {chapterCards.length} • Gewusst: {known}</div>
        </Card>
        <div className="pt-2">
          <Button full onClick={() => {
            // Mark learning as complete → 50% for ch1, else 66%
            const update = useAppStore.getState().updateProgress
            update(id, { mastery: id === 1 ? 50 : 66, phase: "learn" })
            router.push(`/chapter/${id}/questions`)
          }}>
            Weiter zu Fragen <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
      {/* removed bottom sheet ask AI; now inline per-card */}
    </main>
  )
}


