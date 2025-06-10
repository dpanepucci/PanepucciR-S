import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// From README, Recommended Edit
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})