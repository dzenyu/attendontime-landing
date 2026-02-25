import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url).pathname, "utf-8"));

export default defineConfig(({ mode }) => ({
  base: '/',  // 👈 Important for custom domains on GitHub Pages

  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["localhost", "127.0.0.1", "dzenyu-macpro.local"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(pkg.version),
  },
}));
