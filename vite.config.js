import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': '/src'
    }
  },
  base: process.env.NODE_ENV === 'production' ? 'https://cdn.statically.io/gh/rizkimcitra/tolisinih/main/dist/' : '/'
})
