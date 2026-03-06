
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT:
// - Locally (vite serve): base should be "/" so everything works as usual.
// - On GitHub Pages (vite build): your app is served from "/utkalharvest/"
//   because the site is at https://sahoo4784.github.io/utkalharvest/.
//   Setting base accordingly prevents 404s for JS/CSS/assets.

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
