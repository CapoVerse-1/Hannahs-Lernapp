"use client"
import { Card } from "./ui/card"
import { Flame, TimerReset, Gauge } from "lucide-react"
import { Progress } from "./ui/progress"
import { useEffect, useMemo, useState } from "react"
import { chapters } from "@/lib/content"

export function DashboardHeader({
  examDateIso,
  mode,
  progress
}: {
  examDateIso: string
  mode: "full" | "fast"
  progress: Record<number, { learned: number; correct: number; wrong: number; mastery: number }>
}) {
  const daysLeft = useMemo(() => {
    const now = new Date()
    const goal = new Date(examDateIso)
    return Math.max(0, Math.ceil((goal.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
  }, [examDateIso])

  const chaptersDone = useMemo(() => {
    return chapters.filter((c) => (progress[c.id]?.mastery ?? 0) >= 100).length
  }, [progress])

  const overall = useMemo(() => {
    const total = chapters.length || 8
    const sum = chapters.reduce((acc, c) => acc + (progress[c.id]?.mastery ?? 0), 0)
    return Math.round(sum / total)
  }, [progress])

  const streak = useMemo(() => {
    // Simple local streak proxy: days with any progress in last 10 days
    // TODO: replace with real session-based streak
    const today = new Date().toDateString()
    const hasAny = Object.keys(progress).length > 0
    return hasAny ? 3 : 0
  }, [progress])

  return (
    <Card className="p-4 mx-4 mb-4 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold">Dein Lernpfad</h1>
          <div className="text-sm opacity-70">Ziel in ~{daysLeft} Tagen</div>
        </div>
        <div className="flex gap-3">
          <StreakChip value={streak} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="rounded-2xl bg-white/5 p-2 flex items-center gap-2">
          <Gauge size={16} className="opacity-80" />
          <div>Fortschritt {overall}%</div>
        </div>
        <div className="rounded-2xl bg-white/5 p-2 flex items-center gap-2">
          <TimerReset size={16} className="opacity-80" />
          <div>{chaptersDone}/8 Kapitel</div>
        </div>
        <div className="rounded-2xl bg-white/5 p-2 text-center">
          {mode === "full" ? "Mastery Modus" : "Sprint Modus"}
        </div>
      </div>
      <div className="mt-3">
        <Progress value={overall} />
      </div>
    </Card>
  )
}

function StreakChip({ value }: { value: number }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <div className="flex items-center gap-1 text-rose" suppressHydrationWarning>
      <Flame size={18} />
      <span className="text-sm">{mounted ? value : ""}</span>
    </div>
  )
}


