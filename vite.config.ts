import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [react(), svgr()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  build: {
    // outDir: 'deploy/build',
    assetsInlineLimit: Infinity,
  }
});