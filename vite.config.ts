import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(),],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"@/styles/style.scss\";",
      }
    }
  }
})
