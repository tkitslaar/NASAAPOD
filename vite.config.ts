import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: () => {
          return `spa-assets/[name].[hash][extname]`;
        },
        chunkFileNames: "spa-assets/[name].[hash].js",
        entryFileNames: "spa-assets/[name].[hash].js",
      },
    },
  },
  base: "/template/",
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      host: "127.0.0.1",
      protocol: "ws",
    },
  },
});
