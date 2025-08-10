"use client"
import { useMemo, useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import confetti from "canvas-confetti"
import type { QuestionT } from "@/lib/schemas"
import { motion } from "framer-motion"

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function QuestionCard({
  question,
  onResult
}: {
  question: QuestionT
  onResult: (correct: boolean, chosen: string[]) => void
}) {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [wasWrong, setWasWrong] = useState(false)
  const options = useMemo(() => question.options, [question.id])

  function toggle(id: string) {
    if (submitted) return
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  function submit() {
    const map = new Map(options.map((o) => [o.id, o.isCorrect]))
    const correct = options.every((o) => (map.get(o.id) ? selected.includes(o.id) : !selected.includes(o.id)))
    setSubmitted(true)
    onResult(correct, selected)
    if (correct) {
      setTimeout(() => {
        try { confetti({ particleCount: 60, spread: 45, origin: { y: 0.8 } }) } catch {}
      }, 50)
      setWasWrong(false)
    } else {
      setWasWrong(true)
      setTimeout(() => setWasWrong(false), 450)
    }
  }

  return (
    <motion.div animate={wasWrong ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }} transition={{ duration: 0.45 }}>
    <Card className="p-4 space-y-3 focusless">
      <div className="text-base font-semibold">Frage</div>
      <div className="prose prose-invert">{question.stem_md}</div>
      <div className="space-y-2">
        {options.map((o) => {
          const isChosen = selected.includes(o.id)
          const show = submitted
          const correct = o.isCorrect
          const base = "w-full text-left p-3 rounded-2xl border transition-colors duration-200"
          const visual = !show
            ? (isChosen ? " bg-mint/15 border-mint/40" : " bg-white/5 border-white/10")
            : (correct
                ? " bg-mint/30 border-mint/60 text-white/90"
                : (isChosen ? " bg-rose/40 border-rose/70 text-white" : " bg-white/5 border-white/10"))
          return (
            <button
              key={o.id}
              onClick={() => toggle(o.id)}
              className={`${base}${visual}`}
              aria-pressed={isChosen}
            >
              <div className="font-mono opacity-70 mr-2 inline-block w-4">{o.label}.</div>
              <div className="inline-block">{o.md}</div>
            </button>
          )
        })}
      </div>
      {!submitted ? (
        <Button onClick={submit} full>
          Antworten
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="text-sm opacity-80">Erklärung</div>
          <div className="text-sm opacity-90 whitespace-pre-wrap">{question.explanation_md}</div>
        </div>
      )}
    </Card>
    </motion.div>
  )
}


