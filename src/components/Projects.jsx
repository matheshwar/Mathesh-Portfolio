import { motion } from 'framer-motion'
import { ExternalLink, Star, GitFork, BookMarked, Sparkles, Activity } from 'lucide-react'
import { Github } from './BrandIcons'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { PROJECTS } from '../data'

// Maps a project fact's `icon` key to its lucide component.
const FACT_ICONS = {
  star: Star,
  fork: GitFork,
  sparkles: Sparkles,
  activity: Activity,
}

function StatCallout({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.45 }}
      className="rounded-lg border border-line bg-base/50 p-4 text-center transition-colors hover:border-accent/50"
    >
      <div className="font-mono text-3xl font-extrabold text-accent text-glow sm:text-4xl">
        {stat.value}
      </div>
      <div className="mt-1 text-sm font-semibold text-ink">{stat.label}</div>
      <div className="mt-1 font-mono text-[11px] text-ink-dim">{stat.detail}</div>
    </motion.div>
  )
}

function ProjectCard({ project }) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface/70 backdrop-blur-sm card-glow">
        {/* repo header bar */}
        <div className="flex items-center justify-between border-b border-line bg-surface-2 px-5 py-3">
          <div className="flex items-center gap-2 font-mono text-sm">
            <BookMarked className="h-4 w-4 text-accent" />
            {project.repo ? (
              <>
                <span className="text-ink-soft">matheshwar</span>
                <span className="text-ink-dim">/</span>
                <span className="font-semibold text-accent">
                  {project.repo.split('/')[1]}
                </span>
              </>
            ) : (
              <span className="font-semibold text-accent">{project.slug}</span>
            )}
          </div>
          <span className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-ink-dim">
            {project.badge ?? 'Public'}
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-ink">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>

          {/* KPI dashboard panel */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {project.stats.map((stat, i) => (
              <StatCallout key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          {/* language + facts row */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 font-mono text-xs text-ink-soft">
              <span className="h-3 w-3 rounded-full bg-accent" />
              {project.language}
            </span>
            {project.facts?.map((fact) => {
              const Icon = FACT_ICONS[fact.icon] ?? Star
              return (
                <span
                  key={fact.text}
                  className="flex items-center gap-1 font-mono text-xs text-ink-dim"
                >
                  <Icon className="h-3.5 w-3.5" /> {fact.text}
                </span>
              )
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-line bg-base/50 px-2.5 py-1 font-mono text-[11px] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA — only when the project has a public repo */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/5 px-4 py-2.5 font-mono text-sm text-accent transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_24px_-6px_var(--color-accent)]"
            >
              <Github className="h-4 w-4" />
              <span className="font-semibold">View Repository</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="projects"
        badge="deployed"
        badgeVariant="deployed"
        command="ls -la ~/projects"
        index={5}
      />

      <div className="grid grid-cols-1 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
