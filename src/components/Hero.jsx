import { motion } from 'framer-motion'
import { Mail, Phone, Download, ArrowDown } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { CONTACT } from '../data'
import useTypewriter from './useTypewriter'

const TERMINAL_LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'matheshwar-s-r — DevOps Engineer' },
  { type: 'cmd', text: 'status' },
  { type: 'out', text: 'Automating infrastructure. Shipping with confidence.' },
]

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn', href: CONTACT.linkedin, external: true },
  { icon: Github, label: 'GitHub', href: CONTACT.github, external: true },
  { icon: Mail, label: 'Email', href: `mailto:${CONTACT.email}`, external: false },
  { icon: Phone, label: 'Phone', href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, external: false },
]

function Line({ line, showCursor }) {
  return (
    <div className="flex leading-relaxed">
      {line.type === 'cmd' ? (
        <>
          <span className="mr-2 shrink-0 select-none text-status">$</span>
          <span className="text-ink">
            {line.text}
            {showCursor && <span className="ml-0.5 inline-block h-[1.1em] w-2 translate-y-0.5 animate-blink bg-accent align-middle" />}
          </span>
        </>
      ) : (
        <span className="pl-4 text-accent text-glow">
          {line.text}
          {showCursor && <span className="ml-0.5 inline-block h-[1.1em] w-2 translate-y-0.5 animate-blink bg-accent align-middle" />}
        </span>
      )}
    </div>
  )
}

export default function Hero() {
  const { rendered, lineIdx, done } = useTypewriter(TERMINAL_LINES)

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-5 pt-24 pb-16 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        {/* ---- Terminal window ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="overflow-hidden rounded-xl border border-line-strong bg-surface/90 shadow-2xl shadow-black/50 backdrop-blur-sm"
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-term-red" />
            <span className="h-3 w-3 rounded-full bg-term-yellow" />
            <span className="h-3 w-3 rounded-full bg-term-green" />
            <span className="ml-3 font-mono text-xs text-ink-dim">matheshwar@devops: ~</span>
          </div>

          {/* body */}
          <div className="min-h-[184px] space-y-1.5 px-5 py-6 font-mono text-sm sm:text-base">
            {rendered.map((line, i) => {
              // Only render lines that have started typing.
              if (i > lineIdx && line.text === '') return null
              const isActive = i === lineIdx && !done
              return <Line key={i} line={line} showCursor={isActive} />
            })}
            {/* trailing prompt once finished */}
            {done && (
              <div className="flex leading-relaxed">
                <span className="mr-2 select-none text-status">$</span>
                <span className="inline-block h-[1.1em] w-2 translate-y-0.5 animate-blink bg-accent" />
              </div>
            )}
          </div>
        </motion.div>

        {/* ---- Identity ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            {CONTACT.name}
          </h1>
          <p className="mt-3 font-mono text-base text-accent sm:text-lg">
            &lt;/&gt; {CONTACT.title}
          </p>

          {/* social row */}
          <div className="mt-7 flex items-center justify-center gap-3">
            {SOCIALS.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="group flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface/60 text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_20px_-4px_var(--color-accent)]"
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </a>
            ))}
          </div>

          {/* resume button — styled like a CLI command */}
          <div className="mt-8 flex justify-center">
            <a
              href={CONTACT.resume}
              download
              className="group inline-flex items-center gap-2.5 rounded-lg border border-accent/40 bg-accent/5 px-5 py-3 font-mono text-sm text-accent transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_28px_-6px_var(--color-accent)]"
            >
              <span className="select-none text-status">$</span>
              <span className="font-semibold">./resume --download</span>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-dim transition-colors hover:text-accent"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  )
}
