import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path requerido para GitHub Pages (nombre del repo)
  base: '/web_castells/',
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
