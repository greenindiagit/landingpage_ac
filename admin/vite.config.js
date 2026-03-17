import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/admin",
  plugins: [react()],
  
  server: {
    host: true,
    port: 5174,
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