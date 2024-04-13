import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      // external: ["svelte"],
      input: {
        main: resolve(__dirname, "index.html"),
        bac: resolve(__dirname, "bac/index.html"),
        bts: resolve(__dirname, "bts/index.html"),
        cda: resolve(__dirname, "cda/index.html"),
      },
    },
  },
});
