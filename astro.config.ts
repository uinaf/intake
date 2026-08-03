import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://intake.uinaf.dev",
  output: "static",
  /* `astro dev` does not read PORT on its own; honouring it lets a harness or
     container assign the port instead of every caller passing --port. */
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    plugins: [tailwindcss()],
  },
});
