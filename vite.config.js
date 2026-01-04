import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setup path aliases for clean imports (e.g., import Component from '@/components/Component')
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  // Optimization for large applications (Facebook clone)
  build: {
    // Suppress warning for large chunks, common in feature-rich apps
    chunkSizeWarningLimit: 1000, 
    sourcemap: false,
  }
});