import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from node_modules/slick-carousel/slick/fonts directory
      allow: [
        'src'
      ]
    }
  }
},)
