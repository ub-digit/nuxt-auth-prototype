// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    GITHUB_CLIENT_SECRET:
      process.env.GITHUB_CLIENT_SECRET ||
      "fd2c41900c9c5cb9ade741594898eb39a4d8b0a9",
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "83544aa70259b30c44d4",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  auth: {
    globalAppMiddleware: true,
  },
});
