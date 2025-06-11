import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Type-Weather/', // 👈 isso precisa bater com o nome do repositório
  plugins: [react()],
})