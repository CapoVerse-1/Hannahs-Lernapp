import { create } from "zustand"
import { persist } from "zustand/middleware"
import { ModeEnum } from "./schemas"
// single-user: no direct supabase client import

type Mode = "full" | "fast"

type Progress = Record<number, { learned: number; correct: number; wrong: number; mastery: number; phase?: "review" | "learn" | "questions" | "done" }>

interface AppState {
  deviceId: string
  mode: Mode
  examDateIso: string
  progress: Progress
  setMode: (m: Mode) => void
  setExamDateIso: (iso: string) => void
  updateProgress: (chapterId: number, delta: Partial<Progress[number]>) => void
  normalizeProgress: () => void
}

function uuid() {
  if (typeof globalThis !== "undefined" && (globalThis as any).crypto?.randomUUID) {
    return (globalThis as any).crypto.randomUUID()
  }
  // Fallback RFC4122-ish simple generator
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      deviceId: uuid(),
      mode: "full",
      examDateIso: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
      progress: {},
      setMode: (m) => set({ mode: ModeEnum.parse(m) }),
      setExamDateIso: (iso) => set({ examDateIso: iso }),
      updateProgress: (chapterId, delta) =>
        set((state) => {
          const prev = state.progress[chapterId] || { learned: 0, correct: 0, wrong: 0, mastery: 0, phase: "review" }
          const next = { ...prev, ...delta }
          // Write via API (single-user simplified schema)
          try {
            fetch("/api/progress", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chapter_id: chapterId,
                learned_count: next.learned ?? 0,
                correct_count: next.correct ?? 0,
                wrong_count: next.wrong ?? 0,
                mastery_pct: next.mastery ?? 0
              })
            }).catch(() => {})
          } catch {}
          return { progress: { ...state.progress, [chapterId]: next } }
        }),
      normalizeProgress: () =>
        set((state) => {
          const next: Progress = { ...state.progress }
          for (const key of Object.keys(next)) {
            const cid = Number(key)
            const p = next[cid]
            if (!p) continue
            let mastery = p.mastery || 0
            // Chapter-specific thresholds: ch1 has 2 steps (50/100), others 3 (33/66/100)
            const learnStep = cid === 1 ? 50 : 66
            const reviewStep = cid === 1 ? 0 : 33
            // Migrate legacy exact 50% only for chapters > 1 (should be 66) – keep for ch1
            if (cid !== 1 && mastery === 50) mastery = 66
            // Align by phase
            if (p.phase === "done") mastery = 100
            else if (p.phase === "questions") mastery = Math.max(mastery, cid === 1 ? 50 : 66)
            else if (p.phase === "learn") mastery = Math.max(mastery, learnStep)
            else if (p.phase === "review") mastery = Math.max(mastery, reviewStep)
            next[cid] = { ...p, mastery }
          }
          return { progress: next }
        })
    }),
    { name: "hp-state" }
  )
)


