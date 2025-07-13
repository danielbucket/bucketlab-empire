import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import devtoolsJson from 'vite-plugin-devtools-json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    devtoolsJson()
  ],
});