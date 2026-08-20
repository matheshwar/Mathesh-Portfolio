import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The site is a GitHub Pages *project* site served under a subpath:
//   https://matheshwar.github.io/Mathesh-Portfolio/
// so production assets need that base. Local dev stays at '/'.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Mathesh-Portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))

