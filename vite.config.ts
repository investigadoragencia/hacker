import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/hacker/', // nome do repositório no GitHub
  plugins: [react()],
})
