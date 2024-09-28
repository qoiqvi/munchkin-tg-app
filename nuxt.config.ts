// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/app/reset.css"],
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxtjs/tailwindcss"],
});
