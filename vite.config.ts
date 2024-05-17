import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
});
