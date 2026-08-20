import { Terminal, Heart } from 'lucide-react'
import { CONTACT } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-ink-dim">
          <Terminal className="h-3.5 w-3.5 text-accent" />
          <span className="text-ink-soft">{CONTACT.name}</span>
          <span>·</span>
          <span>{CONTACT.title}</span>
        </div>

        <p className="flex items-center gap-1.5 font-mono text-xs text-ink-dim">
          <span className="text-status">$</span> built with
          <Heart className="h-3 w-3 text-accent" fill="currentColor" /> · React · Vite ·
          Tailwind
        </p>

        <p className="font-mono text-xs text-ink-dim">
          <span className="text-accent">©</span> 2026 · all systems operational
        </p>
      </div>
    </footer>
  )
}
