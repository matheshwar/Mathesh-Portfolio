import { FileText, GraduationCap } from 'lucide-react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import StatusBadge from './StatusBadge'
import { EDUCATION } from '../data'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="about"
        badge="online"
        command="cat README.md"
        index={1}
      />

      <Reveal>
        {/* README.md styled window */}
        <div className="overflow-hidden rounded-xl border border-line-strong bg-surface/80 backdrop-blur-sm card-glow">
          {/* file tab bar */}
          <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-2.5">
            <div className="flex items-center gap-2 font-mono text-xs text-ink-soft">
              <FileText className="h-3.5 w-3.5 text-accent" />
              README.md
            </div>
            <span className="font-mono text-[11px] text-ink-dim">markdown</span>
          </div>

          {/* markdown body */}
          <div className="space-y-6 p-6 sm:p-8">
            <div>
              <h3 className="font-mono text-lg font-bold text-ink">
                <span className="text-accent">#</span> Matheshwar S R
              </h3>
              <p className="mt-1 font-mono text-sm text-ink-dim">
                <span className="text-accent-soft">DevOps Engineer</span> ·
                infrastructure automation · cloud-native delivery
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-sm font-semibold text-accent">
                ## About
              </h4>
              <p className="leading-relaxed text-ink-soft">
                DevOps Engineer with hands-on experience across the full
                pipeline — containers, orchestration, CI/CD, IaC, and
                observability on AWS. I turn manual, fragile deployments into
                automated, self-healing systems: containerized workloads on
                Kubernetes, infrastructure defined as code, and pipelines that
                ship to production with confidence and zero downtime.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-sm font-semibold text-accent">
                ## Focus
              </h4>
              <ul className="space-y-1.5 text-ink-soft">
                {[
                  'Zero-downtime deployments (Blue-Green) on Kubernetes',
                  'End-to-end CI/CD with Jenkins & GitHub Actions',
                  'Infrastructure as Code with Terraform on AWS',
                  'Full-stack observability: metrics, logs & traces',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1 select-none font-mono text-accent">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-mono text-sm font-semibold text-accent">
                ## Education
              </h4>
              <div className="flex items-start gap-3 rounded-lg border border-line bg-base/40 p-4">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-ink">{EDUCATION.degree}</p>
                  <p className="text-sm text-ink-soft">{EDUCATION.school}</p>
                  <p className="mt-1 font-mono text-xs text-ink-dim">
                    {EDUCATION.period}
                  </p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <StatusBadge label="graduated" variant="passing" pulse={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
