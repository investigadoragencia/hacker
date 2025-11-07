// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/hacker/', // <- caminho do GitHub Pages
  plugins: [react()],
})
