# Matheshwar S R — DevOps Engineer Portfolio

A single-page portfolio with a dark, terminal-inspired aesthetic — built by a
DevOps engineer, for a DevOps audience. React + Vite + Tailwind CSS v4.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, theme tokens in `src/index.css`)
- **Framer Motion** — scroll-triggered reveals & the hero terminal
- **lucide-react** — icons (brand logos in `src/components/BrandIcons.jsx`,
  since lucide dropped Github/Linkedin marks)

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Editing content

All copy — bio, skills, certs, experience, projects, and contact details —
lives in **`src/data.js`**. Edit there; components read from it.

> **Action required:** `email`, `phone`, and `linkedin` in `src/data.js` are
> placeholders (they weren't provided and couldn't be read from the resume
> PDF). Replace them with the real values.

The resume download button links to `public/MatheshDevOpsEngineer.pdf`.

## Structure

```
src/
  data.js               # ← all site content
  index.css             # theme tokens, background patterns, animations
  App.jsx               # section composition
  components/
    Background.jsx       # animated dot/line grid + glow
    Navbar.jsx           # sticky breadcrumb nav, active-section highlight
    Hero.jsx             # terminal window + typing effect
    About.jsx            # README.md-styled card
    Skills.jsx           # DevOps lifecycle + grouped skill pills
    Certifications.jsx   # CI-badge-styled credential cards
    Experience.jsx       # git-log timeline
    Projects.jsx         # repo card with KPI stat callouts
    Contact.jsx          # terminal-prompt contact list
    Footer.jsx
    Reveal.jsx, Section.jsx, SectionHeading.jsx, StatusBadge.jsx,
    BrandIcons.jsx, useTypewriter.js
```
