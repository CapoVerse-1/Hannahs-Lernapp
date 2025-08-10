"use client"
import { useEffect, useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

export function SummaryStepper({ pages, onComplete, onIndexChange }: { pages: { title: string; body: string }[]; onComplete?: () => void, onIndexChange?: (i: number) => void }) {
  const [idx, setIdx] = useState(0)
  // notify parent on mount and when idx changes
  useEffect(() => { onIndexChange?.(idx) }, [idx, onIndexChange])
  return (
    <div className="space-y-3">
      <div className="flex gap-1 justify-center">
        {pages.map((_, i) => (
          <div key={i} className={`h-2 w-2 rounded-full ${i === idx ? "bg-mint" : "bg-white/20"}`} />
        ))}
      </div>
      <Card className="p-4">
        {idx === pages.length - 1 ? (
          <div className="space-y-2">
            <div className="text-lg font-semibold">Geschafft!</div>
            <div className="text-sm opacity-80">Weiter geht’s mit den Karteikarten.</div>
          </div>
        ) : (
          <>
            <div className="text-lg font-semibold">{pages[idx]?.title ?? ""}</div>
            <div className="text-sm opacity-90 mt-2 whitespace-pre-wrap">{pages[idx]?.body ?? ""}</div>
          </>
        )}
      </Card>
      <div className="flex justify-between">
        <Button variant="ghost" onClick={() => setIdx((i) => Math.max(0, i - 1))}>Zurück</Button>
        <Button onClick={() => {
          setIdx((i) => {
            const next = Math.min(pages.length - 1, i + 1)
            if (next === pages.length - 1 && onComplete) onComplete()
            return next
          })
        }}>
          {idx === pages.length - 1 ? "Fertig" : "Weiter"}
        </Button>
      </div>
    </div>
  )
}


