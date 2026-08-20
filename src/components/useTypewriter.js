import { useEffect, useRef, useState } from 'react'

// Types through a sequence of lines character-by-character.
// lines: [{ type: 'cmd' | 'out', text: string }]
// Returns the lines with progressively-revealed text + which line is active.
export default function useTypewriter(lines, { speed = 38, linePause = 420, startDelay = 500 } = {}) {
  const [rendered, setRendered] = useState(() => lines.map((l) => ({ ...l, text: '' })))
  const [lineIdx, setLineIdx] = useState(0)
  const [done, setDone] = useState(false)
  const timers = useRef([])

  useEffect(() => {
    // Respect reduced-motion: reveal everything instantly.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setRendered(lines)
      setLineIdx(lines.length - 1)
      setDone(true)
      return
    }

    let cancelled = false
    const push = (fn, ms) => {
      const t = setTimeout(() => !cancelled && fn(), ms)
      timers.current.push(t)
    }

    let elapsed = startDelay
    lines.forEach((line, li) => {
      // Command lines type slower (feels deliberate); output a touch faster.
      const perChar = line.type === 'cmd' ? speed : speed * 0.55
      for (let c = 1; c <= line.text.length; c++) {
        push(() => {
          setLineIdx(li)
          setRendered((prev) => {
            const next = [...prev]
            next[li] = { ...next[li], text: line.text.slice(0, c) }
            return next
          })
        }, elapsed + c * perChar)
      }
      elapsed += line.text.length * perChar + linePause
    })

    push(() => setDone(true), elapsed)

    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { rendered, lineIdx, done }
}
