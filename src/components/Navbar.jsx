import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { NAV } from '../data'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Highlight the section currently in view
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // Trigger when a section crosses the upper third of the viewport
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Shrink / add backdrop once scrolled past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-base/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => go(e, 'home')}
          className="group flex items-center gap-2 font-mono text-sm font-bold tracking-tight"
        >
          <Terminal className="h-4 w-4 text-accent" strokeWidth={2.5} />
          <span className="text-ink">matheshwar</span>
          <span className="text-accent">:~$</span>
          <span className="h-4 w-2 animate-blink bg-accent/80" aria-hidden />
        </a>

        {/* Desktop breadcrumb nav */}
        <ul className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {NAV.map((item, i) => (
            <li key={item.id} className="flex items-center">
              {i > 0 && <span className="px-1 text-ink-dim select-none">&gt;</span>}
              <a
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className={`rounded px-2 py-1 transition-colors ${
                  active === item.id
                    ? 'text-accent text-glow'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-line p-2 text-ink-soft transition-colors hover:border-accent/50 hover:text-accent md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-line bg-base/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96 border-b' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-2 font-mono text-sm">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className={`block rounded px-2 py-2.5 transition-colors ${
                  active === item.id ? 'text-accent' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
