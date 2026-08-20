import { Briefcase, GitCommitHorizontal } from 'lucide-react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import StatusBadge from './StatusBadge'
import { EXPERIENCE } from '../data'

// Fake short commit hashes for the git-log aesthetic (deterministic, decorative).
const HASHES = ['a1f9c2e', '7d3b0e4', 'c58ff21', 'e0a4d9b']

function TimelineEntry({ job, index, isLast }) {
  return (
    <div className="relative pl-10 sm:pl-14">
      {/* vertical line down the left */}
      {!isLast && (
        <span className="absolute top-8 left-[15px] h-full w-px bg-line-strong sm:left-[19px]" />
      )}

      {/* commit dot marker */}
      <span className="absolute top-1.5 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-surface sm:h-10 sm:w-10">
        <span className="absolute h-full w-full rounded-full bg-accent/10" />
        <GitCommitHorizontal className="relative h-4 w-4 text-accent sm:h-5 sm:w-5" />
        {job.current && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-status" />
          </span>
        )}
      </span>

      <Reveal delay={index * 0.05} className="pb-10">
        <div className="rounded-xl border border-line-strong bg-surface/70 p-5 backdrop-blur-sm card-glow sm:p-6">
          {/* commit-style meta line */}
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs">
            <span className="text-accent">commit {HASHES[index]}</span>
            <span className="text-ink-dim">·</span>
            <span className="text-ink-dim">{job.period}</span>
            {job.current && (
              <StatusBadge label="HEAD → active" variant="online" />
            )}
          </div>

          <div className="mb-4 flex items-start gap-3">
            <Briefcase className="mt-1 h-4.5 w-4.5 shrink-0 text-accent" />
            <div>
              <h3 className="text-lg font-bold text-ink">{job.role}</h3>
              <p className="font-mono text-sm text-accent-soft">{job.company}</p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {job.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="experience"
        badge="git log --oneline"
        command="git log --graph --all"
        index={4}
      />

      <div className="relative">
        {EXPERIENCE.map((job, i) => (
          <TimelineEntry
            key={job.company}
            job={job}
            index={i}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}
