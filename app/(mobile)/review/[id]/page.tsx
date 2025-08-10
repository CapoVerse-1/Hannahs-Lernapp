"use client"
import { useParams, useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { questions, cards } from "@/lib/content"
import { motion } from "framer-motion"
import { useAppStore } from "@/lib/store"

export default function ReviewPage() {
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  const router = useRouter()
  const [idx, setIdx] = useState(0)
  const updateProgress = useAppStore((s) => s.updateProgress)

  const fromChapter = Math.max(1, id - 1)
  const qs = useMemo(() => questions.filter((q) => q.chapter_id === fromChapter).slice(0, 6), [fromChapter])
  const cs = useMemo(() => cards.filter((c) => c.section_id.startsWith(`${fromChapter}-`)).slice(0, 5), [fromChapter])
  const total = qs.length + cs.length
  const item = idx < cs.length
    ? { type: "card" as const, c: cs[idx]! }
    : { type: "q" as const, q: qs[idx - cs.length]! }

  return (
    <main className="p-4 pb-28 space-y-3">
      <h1 className="text-xl font-bold">15-Minuten Review (Kapitel {fromChapter})</h1>
      <ReviewFlipCard
        front={
          item.type === "card" ? (
            <div className="space-y-2">
              <div className="text-sm opacity-80">Flashcard</div>
              <div className="text-base font-semibold">{item.c.front_md}</div>
              <div className="text-xs opacity-60">Tippe zum Umdrehen</div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-sm opacity-80">MCQ</div>
              <div className="text-base font-semibold">{item.q.stem_md}</div>
              <ul className="space-y-1 text-sm opacity-90">
                {item.q.options.map((o) => (
                  <li key={o.id}><span className="font-mono opacity-70">{o.label}.</span> {o.md}</li>
                ))}
              </ul>
              <div className="text-xs opacity-60">Tippe zum Umdrehen</div>
            </div>
          )
        }
        back={
          item.type === "card" ? (
            <div className="space-y-2">
              <div className="text-sm opacity-80">Antwort</div>
              <div className="opacity-90">{item.c.back_md}</div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-sm opacity-80">Lösung & Erklärung</div>
              <div className="text-sm">
                <div className="opacity-90 mb-1">Korrekt:</div>
                <ul className="list-disc list-inside opacity-90">
                  {item.q.options.filter((o) => o.isCorrect).map((o) => (
                    <li key={o.id}><span className="font-mono opacity-70">{o.label}.</span> {o.md}</li>
                  ))}
                </ul>
              </div>
              <div className="text-xs opacity-70">{item.q.explanation_md}</div>
            </div>
          )
        }
      />
      <div className="flex justify-between">
        <Button variant="ghost" onClick={() => setIdx((i) => Math.max(0, i - 1))}>Zurück</Button>
        <Button onClick={() => {
          if (idx + 1 >= total) {
            // Mark current chapter (id) review as done → 33% for ch>1, else 0 for ch1
            updateProgress(id, { mastery: id === 1 ? 0 : 33, phase: "review" })
            router.push("/")
          } else {
            setIdx(idx + 1)
          }
        }}>
          {idx + 1 >= total ? "Fertig" : "Weiter"}
        </Button>
      </div>
    </main>
  )
}

function ReviewFlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="relative h-64" onClick={() => setFlipped((f) => !f)} aria-label="flip">
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className="absolute inset-0 p-4" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </Card>
        <Card className="absolute inset-0 p-4" style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
          {back}
        </Card>
      </motion.div>
    </div>
  )
}


