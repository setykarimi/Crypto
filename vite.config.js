import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      images: "/src/assets/images/",
      pages: "/src/pages/",
      layout: "/src/layout/",
      routes: "/src/routes/",
    },
  },
});
