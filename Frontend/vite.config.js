import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://backend:80", // Backend service inside Docker
        changeOrigin: true, // Changes the origin of the request
        secure: false, // Allows HTTP connections
      },
    },
  },
})
