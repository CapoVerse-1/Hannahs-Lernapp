"use client"
import { useState } from "react"
import { Button } from "./ui/button"

export function BottomSheetAI({ context, chapter = 1 }: { context: any, chapter?: number }) {
  const [open, setOpen] = useState(false)
  const [answer, setAnswer] = useState<string>("")
  const [loading, setLoading] = useState(false)

  async function ask() {
    setLoading(true)
    try {
      const res = await fetch("/api/ai/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: context.type, payload: context.payload, locale: "de", chapter })
      })
      const data = await res.json()
      setAnswer(data.text || "Keine Antwort")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 p-4">
        <div className="mx-auto max-w-sm">
          <Button variant="secondary" full onClick={() => setOpen(true)} aria-label="Ask AI">
            Ask AI um Kontext
          </Button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 bottom-0 bg-card rounded-t-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 w-12 bg-white/20 rounded-full mx-auto mb-3" />
            <div className="space-y-3">
              <Button onClick={ask} disabled={loading}>
                {loading ? "..." : "Erklären"}
              </Button>
              <div className="text-sm text-white/80 whitespace-pre-wrap min-h-[80px]">
                {answer || "Frage stellen, um Erklärung zu erhalten."}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


