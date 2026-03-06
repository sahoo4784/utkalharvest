// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ command, mode }) => ({
  base: command === "serve" ? "/" : "/utkalharvest/",

  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    // Only enable componentTagger in development
    mode === "development" && componentTagger(),
  ].filter(Boolean) as any, // cast to satisfy TS after filtering falsy values

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));