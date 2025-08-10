"use client"
import { chapters } from "@/lib/content"
import { useAppStore } from "@/lib/store"
import dynamic from "next/dynamic"
import { BottomNav } from "@/components/BottomNav"
import { DashboardHeader } from "@/components/DashboardHeader"
import { useEffect } from "react"

export default function Page() {
  const state = useAppStore()
  const normalizeProgress = useAppStore((s) => s.normalizeProgress)
  // Normalize once on mount to avoid render loops
  useEffect(() => {
    normalizeProgress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const PathMapDynamic = dynamic(() => import("@/components/PathMap").then(m => m.PathMap), { ssr: false })
  return (
    <main className="pb-24">
      <div className="pt-4" />
      <DashboardHeader examDateIso={state.examDateIso} mode={state.mode} progress={state.progress as any} />
      <PathMapDynamic
        chapters={chapters.map((c) => ({ id: c.id, title: c.title, eta_minutes: state.mode === "fast" ? Math.round(c.eta_minutes * 0.66) : c.eta_minutes }))}
        progress={state.progress as any}
      />
      <BottomNav />
    </main>
  )
}


