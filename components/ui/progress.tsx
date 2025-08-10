export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-2 bg-mint rounded-full" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  )
}


