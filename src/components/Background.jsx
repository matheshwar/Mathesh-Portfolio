// Fixed, full-viewport ambient background — layered like an idle dashboard:
//  · dot-grid (network nodes)
//  · faint line-grid (wiring diagram), slowly panning
//  · soft radial accent glow, breathing
//  · a thin scan line sweeping down
// Purely decorative; sits behind all content.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* base wash */}
      <div className="absolute inset-0 bg-base" />

      {/* dot grid */}
      <div className="bg-dotgrid absolute inset-0 opacity-[0.5]" />

      {/* panning line grid */}
      <div className="bg-linegrid absolute inset-0 animate-grid-pan opacity-[0.35]" />

      {/* breathing accent glow, upper area behind hero */}
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] max-w-[95vw] -translate-x-1/2 animate-glow-pulse rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 22%, transparent) 0%, transparent 70%)',
        }}
      />

      {/* vignette to darken edges and keep text legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, transparent 40%, var(--color-base) 100%)',
        }}
      />

      {/* sweeping scan line */}
      <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  )
}
