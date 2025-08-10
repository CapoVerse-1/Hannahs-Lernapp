"use client"
import { useEffect, useRef, useState } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function InlineAI({ context, chapter }: { context: { type: "card" | "summary"; payload: any }, chapter: number }) {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState("")
  const [answer, setAnswer] = useState("")
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!open) return
      if (panelRef.current && panelRef.current.contains(e.target as Node)) return
      setOpen(false)
    }
    document.addEventListener("mousedown", onDocMouseDown)
    return () => document.removeEventListener("mousedown", onDocMouseDown)
  }, [open])

  async function send() {
    try {
      const res = await fetch("/api/ai/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: context.type, payload: { ...context.payload, question: note }, locale: "de", chapter })
      })
      const data = await res.json()
      setAnswer(data.text || "Keine Antwort")
    } catch {
      setAnswer("Keine Antwort")
    }
  }

  return (
    <div className="absolute top-3 right-3 z-50">
      <button
        aria-label="Ask AI"
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded-full bg-white/10 hover:bg-white/15"
      >
        <Sparkles size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mt-2 w-[min(80vw,320px)] rounded-2xl bg-card border border-white/10 p-3 shadow-soft z-40"
            ref={panelRef}
          >
            <div className="text-xs opacity-80 mb-1">AI-Antwort</div>
            <div className="text-sm max-h-80 overflow-y-auto no-scrollbar rounded-xl bg-white/5 p-3 min-h-[7rem] mb-2">
              {answer || "(kommt hier an)"}
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 text-xs mb-2">
              {["Gib mir Kontext.", "Erkläre alle Optionen.", "Merksatz bilden"].map((q) => (
                <button
                  key={q}
                  onClick={() => setNote(q)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-br from-white/15 to-white/5 hover:from-white/20 shadow-soft"
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="flex-1 rounded-full bg-white/10 px-3 py-2 text-sm outline-none"
                placeholder="Eigene Frage..."
              />
              <Button onClick={send}>Senden</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


