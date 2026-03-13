import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  
  server: {
    host: true,
    port: 5173,
    hmr: true,
    proxy: {
      "/api": {
        target: "http://localhost:8087",
        changeOrigin: true,
        secure: false
      }
    }
  }
});