"use client"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const mode = useAppStore((s) => s.mode)
  const setMode = useAppStore((s) => s.setMode)
  const date = useAppStore((s) => s.examDateIso)
  const setDate = useAppStore((s) => s.setExamDateIso)
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Einstellungen</h1>
      <div className="space-y-2">
        <div className="text-sm opacity-80">Modus</div>
        <div className="flex gap-2">
          <Button variant={mode === "full" ? "primary" : "ghost"} onClick={() => setMode("full")}>Voll</Button>
          <Button variant={mode === "fast" ? "secondary" : "ghost"} onClick={() => setMode("fast")}>Schnell</Button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm opacity-80">Prüfungsdatum</div>
        <input
          type="date"
          className="bg-white/10 rounded-2xl px-3 py-2 outline-none"
          value={new Date(date).toISOString().substring(0, 10)}
          onChange={(e) => setDate(new Date(e.target.value).toISOString())}
        />
      </div>
    </main>
  )
}


