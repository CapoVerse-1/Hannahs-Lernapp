export function StatBadge({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="px-3 py-2 rounded-2xl bg-white/10 text-white text-xs">
      <span className="opacity-70">{label}</span>
      <div className="text-base font-semibold">{value}</div>
    </div>
  )
}


