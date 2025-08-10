"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

export function Flashcard({ front, back, hint, onNext }: { front: string; back: string; hint?: string; onNext: (knew: boolean) => void }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="space-y-3">
      <motion.div
        className="relative h-64 cursor-pointer select-none"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <Card className="absolute inset-0 p-4" style={{ backfaceVisibility: "hidden" }}>
          <div className="text-lg font-semibold mb-2">Frage</div>
          <div className="prose prose-invert">{front}</div>
          {hint && <div className="text-xs opacity-60 mt-2">Hint: {hint}</div>}
        </Card>
        <Card className="absolute inset-0 p-4" style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
          <div className="text-lg font-semibold mb-2">Antwort</div>
          <div className="prose prose-invert">{back}</div>
        </Card>
      </motion.div>
      <div className="flex gap-2">
        <Button variant="ghost" onClick={() => setFlipped((f) => !f)} aria-label="flip">
          Umdrehen
        </Button>
        <Button onClick={() => onNext(true)} aria-label="know">Gewusst</Button>
        <Button variant="secondary" onClick={() => onNext(false)} aria-label="unsure">Unsicher</Button>
      </div>
    </div>
  )
}


