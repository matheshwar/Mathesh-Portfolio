import Reveal from './Reveal'
import StatusBadge from './StatusBadge'

// Consistent section heading: a monospace "## name" markdown-style title,
// a status badge, and an optional command-line subtitle.
export default function SectionHeading({ index, title, badge, badgeVariant, command }) {
  return (
    <Reveal className="mb-10">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 className="font-mono text-2xl font-bold text-ink sm:text-3xl">
          <span className="text-accent">##</span> {title}
        </h2>
        {badge && <StatusBadge label={badge} variant={badgeVariant} />}
      </div>
      {command && (
        <p className="mt-3 font-mono text-sm text-ink-dim">
          <span className="text-accent">$</span> {command}
        </p>
      )}
      {index != null && (
        <div className="mt-4 h-px w-full bg-gradient-to-r from-line-strong via-line to-transparent" />
      )}
    </Reveal>
  )
}
