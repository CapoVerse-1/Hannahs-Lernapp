"use client"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/lib/store"
import { QuestionCard } from "@/components/QuestionCard"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RetryQueue } from "@/lib/retryQueue"
import { questions as allQuestions } from "@/lib/content"
import { sampleQuestionsForMode, buildMagicOrder } from "@/lib/selection"
import { useAppStore } from "@/lib/store"

export default function QuestionsPage() {
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  const mode = useAppStore((s) => s.mode)
  const updateProgress = useAppStore((s) => s.updateProgress)
  const router = useRouter()
  const [done, setDone] = useState<string[]>([])
  const [wrong, setWrong] = useState<string[]>([])
  const [pendingSubmitted, setPendingSubmitted] = useState<null | { id: string; correct: boolean }>(null)
  const [answered, setAnswered] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const chosen = useMemo(() => {
    const filtered = allQuestions.filter((q) => q.chapter_id === id)
    const subset = sampleQuestionsForMode(filtered, mode)
    const order = buildMagicOrder(subset)
    const map = new Map(subset.map((q) => [q.id, q]))
    return order.map((id) => map.get(id)!).filter(Boolean)
  }, [id, mode])
  const totalTarget = useMemo(() => Math.max(1, chosen.length), [chosen])
  const queue = useRef(new RetryQueue<string>())
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    queue.current = new RetryQueue<string>()
    queue.current.enqueueMany(chosen.map((q) => q.id))
    setCurrent(queue.current.dequeue() || null)
  }, [id, mode])

  function onResult(correct: boolean) {
    if (!current) return
    setPendingSubmitted({ id: current, correct })
    // Don't advance yet; wait for "Weiter"
  }

  const q = chosen.find((x) => x.id === current)

  return (
    <main className="p-4 pb-28 space-y-3">
      {/* Header with progress/stats */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-80">Kapitel {id}</div>
          <div className="text-xs opacity-70">{answered} / {totalTarget} beantwortet</div>
        </div>
        <div className="mt-2"><Progress value={Math.round((answered / totalTarget) * 100)} /></div>
        <div className="mt-2 flex gap-3 text-xs">
          <div className="px-2 py-1 rounded-full bg-mint/20 text-mint">Richtig {correctCount}</div>
          <div className="px-2 py-1 rounded-full bg-rose/20 text-rose">Falsch {wrong.length}</div>
        </div>
      </Card>
      {!q ? (
        <div className="text-sm opacity-80">Laden...</div>
      ) : (
        <>
          <QuestionCard key={q.id} question={q} onResult={(ok) => onResult(ok)} />
          {pendingSubmitted && (
            <Card className="p-3 space-y-2">
              <div className="text-xs opacity-80">AI-Antwort</div>
              <div className="text-sm max-h-72 overflow-y-auto no-scrollbar rounded-xl bg-white/5 p-3 min-h-[9rem]">(kommt hier an)</div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 text-xs">
                {["Warum ist meine Antwort falsch?", "Gib mir Kontext.", "Erkläre alle Optionen.", "Merksatz bilden", "Kurzes Beispiel"].map((q) => (
                  <button key={q} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-br from-white/15 to-white/5 hover:from-white/20 shadow-soft">{q}</button>
                ))}
              </div>
              <div className="flex gap-2">
                <input className="flex-1 rounded-full bg-white/10 px-3 py-2 text-sm outline-none" placeholder="Eigene Frage an die AI..." />
                <Button>Senden</Button>
              </div>
            </Card>
          )}
          <div>
            <Button full disabled={!pendingSubmitted} onClick={() => {
              if (!current) return
              const wasCorrect = pendingSubmitted?.correct
              if (!wasCorrect) {
                setWrong((w) => [...w, current])
                queue.current.enqueueAfter(current, Math.min(3, queue.current.size()))
              } else {
                setDone((d) => [...d, current])
                setCorrectCount((c) => c + 1)
              }
              setAnswered((a) => a + 1)
              setPendingSubmitted(null)
              const next = queue.current.dequeue()
              if (!next) {
                // Finished session
                const totalCorrect = done.length + (wasCorrect ? 1 : 0)
                const mastered = Math.round((totalCorrect / totalTarget) * 100)
                const learnStep = id === 1 ? 50 : 66
                updateProgress(id, { learned: totalTarget, correct: totalCorrect, wrong: wrong.length + (!wasCorrect ? 1 : 0), mastery: mastered >= 100 ? 100 : learnStep, phase: mastered >= 100 ? "done" : "questions" } as any)
                // After finishing questions: go back to dashboard, not auto-review
                router.push(`/`)
              } else {
                setCurrent(next)
              }
            }}>Weiter</Button>
          </div>
        </>
      )}
    </main>
  )
}


