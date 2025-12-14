import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

/**
 * Vite configuration file.
 * This file sets up the Vite build tool with plugins.
 * It also configures path aliasing for easier imports.
 *
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
