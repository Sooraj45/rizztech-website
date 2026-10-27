import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rolldownOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        services: resolve(import.meta.dirname, 'services/index.html'),
        industries: resolve(import.meta.dirname, 'industries/index.html'),
        projects: resolve(import.meta.dirname, 'projects/index.html'),
        about: resolve(import.meta.dirname, 'about/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        routers: resolve(import.meta.dirname, 'routers/index.html'),
        rates: resolve(import.meta.dirname, 'rates/index.html'),
        estimate: resolve(import.meta.dirname, 'estimate/index.html'),
        terms: resolve(import.meta.dirname, 'terms/index.html')
      }
    }
  }
});
