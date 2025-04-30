import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // si estás usando este

export default defineConfig({
  plugins: [
    react(),        
    tailwindcss(),   // tu plugin de Tailwind
  ],
})
