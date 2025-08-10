"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProgressRing } from "./ProgressRing"

export function PathMap({
  chapters,
  progress
}: {
  chapters: { id: number; title: string; eta_minutes: number }[]
  progress: Record<number, { mastery: number; phase?: "review" | "learn" | "questions" | "done" }>
}) {
  return (
    <div className="relative mx-auto max-w-sm py-8 pb-24">
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 to-white/5 rounded-full" />
      <div className="space-y-8 pl-12">
        {chapters.map((c, i) => {
          const mastery = progress[c.id]?.mastery ?? 0
          const phase = progress[c.id]?.phase
          const locked = false
          return (
            <motion.div
              key={c.id}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              {/* Removed decorative side circles for a cleaner background */}
              <motion.div whileHover={{ y: -2 }} className={`rounded-2xl p-4 bg-card/90 backdrop-blur border border-white/10 shadow-soft`}>
                <div className="text-sm opacity-80">Kapitel {c.id}</div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-xs opacity-70 mt-1">~{c.eta_minutes} Min</div>
                <div className="mt-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-1.5 rounded-full ${mastery >= 100 ? "bg-mint" : phase === "learn" ? "bg-periwinkle" : phase === "review" ? "bg-apricot" : "bg-mint"}`} style={{ width: `${mastery}%` }} />
                  </div>
                  <div className="text-[10px] opacity-70 mt-1">{mastery}% gemeistert</div>
                </div>
                <div className="flex gap-2 mt-3">
                  {c.id > 1 && (
                    <Link
                      className="px-3 py-1.5 rounded-full text-sm bg-periwinkle/20 text-periwinkle hover:bg-periwinkle/30 transition"
                      href={`/review/${c.id}`}
                    >
                      Review
                    </Link>
                  )}
                  <Link
                    className={`px-3 py-1.5 rounded-full text-sm bg-white/10 hover:bg-white/15 transition`}
                    href={`/chapter/${c.id}/study`}
                  >
                    Lernen
                  </Link>
                  <Link
                    className={`px-3 py-1.5 rounded-full text-sm bg-mint/20 text-mint hover:bg-mint/30 transition`}
                    href={`/chapter/${c.id}/questions`}
                  >
                    Fragen
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}


