import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/index.ts'),
      '@contexts': path.resolve(__dirname, 'src/contexts/index.ts'),
      '@types': path.resolve(__dirname, 'src/types/index.ts'),
      '@modules': path.resolve(__dirname, 'src/modules/index.ts'),
      '@ui': path.resolve(__dirname, 'src/UI/index.ts'),
      '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [react()],
  server: {
    host: true,
    port: 4173,
    watch: {
      usePolling: true,
    },
  },
});
