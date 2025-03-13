// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer"; // Named export

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Tự mở browser sau khi build
      filename: "dist/stats.html", // File output
      gzipSize: true, // Hiển thị kích thước sau khi nén gzip
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          material: ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
  },
  root: resolve(__dirname),
});
