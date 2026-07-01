import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  routeRules: {
    "/": { redirect: { to: "/articles", statusCode: 301 } },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
