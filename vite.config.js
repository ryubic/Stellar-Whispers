import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { api } from './src/backend'
// https://vite.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   '/api': {
    //     target: api, // External API
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''), // Optional
    //   },
    // },
    host: true, // Accept all incoming network requests
    port: 4001, // Optional: Explicitly specify the port
  },  
  plugins: [react()],
})
