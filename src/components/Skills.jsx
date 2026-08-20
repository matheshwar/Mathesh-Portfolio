import { motion } from 'framer-motion'
import {
  Code2,
  Package,
  FlaskConical,
  Rocket,
  Activity,
  Box,
  Layers,
  Cloud,
  Terminal,
  GitBranch,
  Settings,
  LineChart,
  ChevronRight,
} from 'lucide-react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { LIFECYCLE, SKILL_GROUPS } from '../data'

const STAGE_ICONS = {
  Code: Code2,
  Build: Package,
  Test: FlaskConical,
  Deploy: Rocket,
  Monitor: Activity,
}

const GROUP_ICONS = {
  'Containers & Orchestration': Box,
  IaC: Layers,
  'CI/CD': GitBranch,
  Observability: LineChart,
  Cloud: Cloud,
  Scripting: Terminal,
  'Version Control': GitBranch,
  'Config Management': Settings,
}

function LifecyclePipeline() {
  return (
    <Reveal className="mb-12">
      <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-sm sm:p-6">
        <p className="mb-4 font-mono text-xs tracking-wider text-ink-dim uppercase">
          # devops lifecycle
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {LIFECYCLE.map((stage, i) => {
            const Icon = STAGE_ICONS[stage]
            return (
              <div key={stage} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group flex items-center gap-2 rounded-lg border border-line-strong bg-base/60 px-3.5 py-2 transition-colors hover:border-accent/60"
                >
                  <Icon className="h-4 w-4 text-accent" strokeWidth={2} />
                  <span className="font-mono text-sm font-medium text-ink">{stage}</span>
                </motion.div>
                {i < LIFECYCLE.length - 1 && (
                  <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-accent/50 sm:mx-2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

function SkillPill({ name }) {
  return (
    <span className="cursor-default rounded-md border border-line bg-base/50 px-3 py-1.5 font-mono text-[13px] text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_16px_-4px_var(--color-accent)]">
      {name}
    </span>
  )
}

function SkillCard({ group, index }) {
  const Icon = GROUP_ICONS[group.category] || Box
  return (
    <Reveal delay={index * 0.06}>
      <div className="h-full rounded-xl border border-line-strong bg-surface/70 p-5 backdrop-blur-sm card-glow">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-base/60">
              <Icon className="h-4.5 w-4.5 text-accent" strokeWidth={2} />
            </span>
            <h3 className="font-mono text-sm font-semibold text-ink">
              {group.category}
            </h3>
          </div>
          {/* lifecycle stage tag, like a pod label */}
          <span className="shrink-0 rounded border border-accent/25 bg-accent/5 px-2 py-0.5 font-mono text-[10px] tracking-wide text-accent/90 uppercase">
            {group.stage}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((s) => (
            <SkillPill key={s} name={s} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="skills"
        badge="8 pods running"
        command="kubectl get skills --all-namespaces"
        index={2}
      />

      <LifecyclePipeline />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>
    </Section>
  )
}
