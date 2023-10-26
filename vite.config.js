import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      common: "/src/components/common",
      pagesComp: "/src/components/pages",
      images: "/src/assets/images/",
      config: "/src/config",
      pages: "/src/pages/",
      layout: "/src/layout/",
      routes: "/src/routes/",
      hooks: "/src/hooks/",
      utils: "/src/utils/",
    },
  },
});
