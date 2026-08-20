// ============================================================
//  SITE CONTENT — edit everything in one place.
//  NOTE: email / phone / linkedin were not provided and could
//  not be read from the resume PDF. Replace the PLACEHOLDER
//  values below with the real ones.
// ============================================================

export const CONTACT = {
  name: 'Matheshwar S R',
  handle: 'matheshwar-s-r',
  title: 'DevOps Engineer',
  // TODO: replace with real values ↓
  email: 'matheshwar.srinivasan@gmail.com',
  phone: '+91 7338933841',
  linkedin: 'https://www.linkedin.com/in/matheshwar-s-r-95796a1b0/',
  github: 'https://github.com/matheshwar',
  // BASE_URL is '/' in dev and '/Mathesh-Portfolio/' in the GitHub Pages build,
  // so the resume resolves correctly under the project subpath.
  resume: import.meta.env.BASE_URL + 'MatheshDevOpsEngineer.pdf',
}

export const NAV = [
  { id: 'home', label: '~/home' },
  { id: 'about', label: '~/about' },
  { id: 'skills', label: '~/skills' },
  { id: 'certs', label: '~/certs' },
  { id: 'experience', label: '~/experience' },
  { id: 'projects', label: '~/projects' },
  { id: 'contact', label: '~/contact' },
]

// DevOps lifecycle stages (Code → Build → Test → Deploy → Monitor)
export const LIFECYCLE = ['Code', 'Build', 'Test', 'Deploy', 'Monitor']

// Skills grouped by category. `stage` maps each group to a lifecycle phase.
export const SKILL_GROUPS = [
  {
    category: 'Containers & Orchestration',
    stage: 'Deploy',
    skills: ['Kubernetes', 'Docker'],
  },
  {
    category: 'IaC',
    stage: 'Build',
    skills: ['Terraform'],
  },
  {
    category: 'CI/CD',
    stage: 'Build',
    skills: ['Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Observability',
    stage: 'Monitor',
    skills: ['Prometheus', 'Grafana', 'Loki', 'Tempo'],
  },
  {
    category: 'Cloud',
    stage: 'Deploy',
    skills: ['AWS'],
  },
  {
    category: 'Scripting',
    stage: 'Code',
    skills: ['Python', 'Shell'],
  },
  {
    category: 'Version Control',
    stage: 'Code',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Config Management',
    stage: 'Deploy',
    skills: ['Ansible'],
  },
]

export const CERTIFICATIONS = [
  {
    name: 'Certified Kubernetes Administrator',
    short: 'CKA',
    issuer: 'The Linux Foundation / CNCF',
    url: 'https://www.credly.com/badges/2b4ae827-dff3-4149-95eb-c50013a81a09',
  },
  {
    name: 'Certified Kubernetes Application Developer',
    short: 'CKAD',
    issuer: 'The Linux Foundation / CNCF',
    url: 'https://www.credly.com/badges/3e57492a-8ddf-46d9-94de-ffe7f1de69b3',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    short: 'SAA-C03',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/go/P4CbHqGvSt4It815A5wOYQ',
  },
]

export const EXPERIENCE = [
  {
    company: 'Revolite Infotech Pvt Ltd',
    role: 'Junior DevOps Engineer',
    period: 'Dec 2025 – Present',
    current: true,
    points: [
      'Migrated legacy PM2/nohup deployments to Docker + Kubernetes, implementing Blue-Green deployments for zero-downtime releases',
      'Built end-to-end CI/CD pipelines with Jenkins and GitHub Actions across dev, staging, and production',
      'Deployed a full observability stack: Prometheus, Grafana, Loki, Promtail, Tempo',
      'Managed AWS infrastructure as code using Terraform',
      'Deployed and configured apps on IIS for Windows-based hosting',
    ],
  },
  {
    company: 'CandorBees Technologies Private Limited',
    role: 'DevOps Engineer Intern',
    period: 'Feb 2025 – Nov 2025',
    current: false,
    points: [
      'Containerized frontend/backend apps with Docker Compose, deployed on AWS EC2',
      'Configured custom domain with Route 53 + Nginx reverse proxy with Let’s Encrypt SSL',
      'Built a CI/CD pipeline with GitHub Actions: Docker build → push to ECR → deploy to EC2',
      'Automated secure deployments using GitHub Secrets and SSH — zero manual intervention',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'End-to-End DevOps for a Go Web Application',
    repo: 'matheshwar/End-to-End-DevOps-for-a-Go-Web-Application',
    description:
      'Production-grade delivery pipeline for a Go web app — multi-stage container builds, GitOps continuous delivery, and Kubernetes orchestration with Helm.',
    language: 'Go',
    stats: [
      { value: '~50%', label: 'smaller image', detail: 'Multi-stage Docker builds' },
      { value: '~60%', label: 'faster deploys', detail: 'GitHub Actions & ArgoCD' },
      { value: '~70%', label: 'better scalability / HA', detail: 'Kubernetes, ArgoCD & Helm' },
    ],
    tags: ['Docker', 'GitHub Actions', 'ArgoCD', 'Kubernetes', 'Helm'],
    url: 'https://github.com/matheshwar/End-to-End-DevOps-for-a-Go-Web-Application',
  },
]

export const EDUCATION = {
  degree: 'B.E. Computer Science',
  school: 'R.M.K College Of Engineering and Technology',
  period: '2020 – 2024',
}
