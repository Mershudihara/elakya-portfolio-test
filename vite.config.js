import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Listen on all interfaces and accept forwarded preview hostnames so the
// site renders behind remote/port-forwarded previews, not just on localhost.
const network = {
  host: true,
  allowedHosts: ['localhost', '.devinapps.com'],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: network,
  preview: network,
  build: {
    rollupOptions: {
      // One HTML entry per page.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        suryaOS: resolve(import.meta.dirname, 'work/surya-os/index.html'),
      },
    },
  },
})
