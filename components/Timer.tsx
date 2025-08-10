"use client"
import { useEffect, useState } from "react"

export function Timer({ targetMinutes }: { targetMinutes: number }) {
  const [elapsedMs, setElapsedMs] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => setElapsedMs(Date.now() - start), 1000)
    return () => clearInterval(id)
  }, [])
  const mins = Math.floor(elapsedMs / 60000)
  const secs = Math.floor((elapsedMs % 60000) / 1000)
  return (
    <div className="fixed top-4 right-4 bg-white/10 text-white px-3 py-1.5 rounded-full text-sm">
      {mins}:{secs.toString().padStart(2, "0")} / ~{targetMinutes}m
    </div>
  )
}


