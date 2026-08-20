import { BadgeCheck, ExternalLink, ShieldCheck } from 'lucide-react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { CERTIFICATIONS } from '../data'

// A GitHub-Actions-style "passing" badge: [ label | status ]
function CIBadge({ label = 'credential', status = 'verified' }) {
  return (
    <span className="inline-flex overflow-hidden rounded font-mono text-[10px] font-semibold tracking-wide">
      <span className="bg-line-strong px-2 py-0.5 text-ink-soft">{label}</span>
      <span className="flex items-center gap-1 bg-status/15 px-2 py-0.5 text-status">
        <ShieldCheck className="h-3 w-3" />
        {status}
      </span>
    </span>
  )
}

function CertCard({ cert, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <a
        href={cert.url}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex h-full flex-col rounded-xl border border-line-strong bg-surface/70 p-5 backdrop-blur-sm card-glow"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          {/* verified badge medallion */}
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-status/40 bg-status/10">
            <BadgeCheck className="h-6 w-6 text-status" strokeWidth={2} />
          </span>
          <CIBadge label={cert.short.toLowerCase()} status="passing" />
        </div>

        <h3 className="font-mono text-base font-bold text-ink">{cert.short}</h3>
        <p className="mt-1 text-sm leading-snug text-ink-soft">{cert.name}</p>
        <p className="mt-2 font-mono text-xs text-ink-dim">{cert.issuer}</p>

        <div className="mt-4 flex items-center gap-1.5 border-t border-line pt-3 font-mono text-xs text-accent/80 transition-colors group-hover:text-accent">
          <ExternalLink className="h-3.5 w-3.5" />
          verify on Credly
        </div>
      </a>
    </Reveal>
  )
}

export default function Certifications() {
  return (
    <Section id="certs">
      <SectionHeading
        title="certifications"
        badge="3 passing"
        badgeVariant="passing"
        command="./verify --all-credentials"
        index={3}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <CertCard key={cert.short} cert={cert} index={i} />
        ))}
      </div>
    </Section>
  )
}
