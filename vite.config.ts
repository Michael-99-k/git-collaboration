import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        event: resolve(__dirname, 'event.html'),
        contact: resolve(__dirname, 'contact.html'),
        news:resolve(__dirname,'news.html')
      },
    },
  },
})