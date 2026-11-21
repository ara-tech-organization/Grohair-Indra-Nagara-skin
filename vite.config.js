import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    react()
  ],
  // 'hostinger' build serves from /skin/; default is GitHub Pages
  base: mode === 'hostinger' ? '/skin/' : '/Grohair-Indra-Nagara-skin/',
  build: {
    outDir: 'dist'
  }
}))
