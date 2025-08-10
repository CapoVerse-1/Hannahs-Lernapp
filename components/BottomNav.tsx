"use client"
import Link from "next/link"
import { Home, Settings, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"

export function BottomNav() {
  const items = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/review/2", label: "Review", Icon: RotateCcw },
    { href: "/settings", label: "Einstellungen", Icon: Settings }
  ]
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 bg-card/90 backdrop-blur border-t border-white/10"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="mx-auto max-w-sm grid grid-cols-3 gap-1 px-4 py-2 pb-[calc(env(safe-area-inset-bottom)+8px)]">
        {items.map(({ href, label, Icon }) => (
          <Link key={href} href={href} className="flex items-center justify-center py-2">
            <motion.div whileTap={{ scale: 0.95 }} className="flex flex-col items-center text-xs">
              <Icon size={20} className="text-white" aria-hidden="true" />
              <span className="mt-1 opacity-80">{label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  )
}


