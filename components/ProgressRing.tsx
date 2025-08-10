import { motion } from "framer-motion"

export function ProgressRing({ value, size = 56 }: { value: number; size?: number }) {
  const r = size / 2 - 6
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - Math.max(0, Math.min(1, value)))
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="var(--mint)"
        strokeWidth="6"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.6 }}
        strokeLinecap="round"
      />
    </svg>
  )
}


