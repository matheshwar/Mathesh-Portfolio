import { Mail, Phone, ChevronRight } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { CONTACT } from '../data'

const ROWS = [
  {
    icon: Mail,
    key: 'email',
    label: 'email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    icon: Phone,
    key: 'phone',
    label: 'phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
    external: false,
  },
  {
    icon: Linkedin,
    key: 'linkedin',
    label: 'linkedin',
    value: CONTACT.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
    href: CONTACT.linkedin,
    external: true,
  },
  {
    icon: Github,
    key: 'github',
    label: 'github',
    value: CONTACT.github.replace(/^https?:\/\/(www\.)?/, ''),
    href: CONTACT.github,
    external: true,
  },
]

function ContactRow({ row, index }) {
  const { icon: Icon } = row
  return (
    <Reveal delay={index * 0.06}>
      <a
        href={row.href}
        {...(row.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className="group flex items-center gap-3 border-b border-line px-4 py-3.5 font-mono text-sm transition-colors last:border-b-0 hover:bg-accent/5"
      >
        <ChevronRight className="h-4 w-4 shrink-0 text-accent opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
        <Icon className="h-4 w-4 shrink-0 text-ink-dim transition-colors group-hover:text-accent" />
        <span className="w-20 shrink-0 text-ink-dim">{row.label}</span>
        <span className="truncate text-ink-soft transition-colors group-hover:text-accent">
          {row.value}
        </span>
      </a>
    </Reveal>
  )
}

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="contact"
        badge="open to work"
        command="contact --matheshwar"
        index={6}
      />

      <Reveal>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-line-strong bg-surface/80 backdrop-blur-sm card-glow">
          {/* terminal title bar */}
          <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-term-red" />
            <span className="h-3 w-3 rounded-full bg-term-yellow" />
            <span className="h-3 w-3 rounded-full bg-term-green" />
            <span className="ml-3 font-mono text-xs text-ink-dim">
              matheshwar@devops: ~/contact
            </span>
          </div>

          {/* prompt line */}
          <div className="border-b border-line px-4 py-3 font-mono text-sm">
            <span className="text-status">$</span>{' '}
            <span className="text-ink">contact --matheshwar</span>
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent align-middle" />
          </div>

          {/* rows */}
          <div>
            {ROWS.map((row, i) => (
              <ContactRow key={row.key} row={row} index={i} />
            ))}
          </div>

          {/* footer prompt */}
          <div className="px-4 py-3 font-mono text-xs text-ink-dim">
            <span className="text-status">$</span> _{' '}
            <span className="text-ink-dim">— reach out anytime, I usually reply fast.</span>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
