// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    KOHA_USER: process.env.KOHA_USER,
    KOHA_PWD: process.env.KOHA_PWD,
    KOHA_AUTH_URL: process.env.KOHA_AUTH_URL,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  auth: {
    globalAppMiddleware: true,
  },
});
