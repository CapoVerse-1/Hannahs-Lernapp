import * as React from "react"

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-card/80 backdrop-blur border border-white/10 shadow-soft ${props.className || ""}`}
    />
  )
}


