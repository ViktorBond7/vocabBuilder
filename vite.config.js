import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Додаємо цей рядок, щоб прибрати warning про застарілий API
        api: "modern-compiler",

        additionalData: `@use "./src/base/variables" as *;`,
      },
    },
  },
});
