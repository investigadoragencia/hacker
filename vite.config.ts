import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/hacker/', // <--- muito importante para GitHub Pages
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
