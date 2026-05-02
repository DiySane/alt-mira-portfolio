import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // Change the output directory from 'dist' to 'build'
    outDir: "public",
  },
  plugins: [sveltekit()],
});
