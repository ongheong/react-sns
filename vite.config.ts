import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  })],
  assetsInclude: ['**/*.svg'],
  server: {
    port: 3000,
    open: true,
  },
});
