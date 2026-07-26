import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://intake.uinaf.dev",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
