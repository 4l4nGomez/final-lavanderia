// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify"; // <-- Añade esta línea

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify() // <-- Añade esta línea
});