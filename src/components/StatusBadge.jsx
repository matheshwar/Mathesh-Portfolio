// Status badge — green dot + label, like a pod/build status.
// variant: 'online' | 'passing' | 'deployed' | 'accent'
export default function StatusBadge({ label, variant = 'online', pulse = true }) {
  const isAccent = variant === 'accent'
  const dot = isAccent ? 'bg-accent' : 'bg-status'
  const text = isAccent ? 'text-accent' : 'text-status'
  const ring = isAccent ? 'border-accent/30' : 'border-status/30'
  const bg = isAccent ? 'bg-accent/5' : 'bg-status/5'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${ring} ${bg} px-3 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase ${text}`}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dot}`} />
      </span>
      {label}
    </span>
  )
}
