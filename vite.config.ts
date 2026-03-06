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

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
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
