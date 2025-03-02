// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: "https://swarming-web.firebaseapp.com/",
      socketEndpoint: "wss://swarma-9d90cb1a4250.herokuapp.com/socket"
          // "ws://127.0.0.1:4000/socket",
    },
  },

  // Auto import all atomics design component folders
  components: {
    dirs: [
      "components/atoms",
      "components/molecules",
      "components/organisms",
      "components/templates",
    ], 
  },

  /*
   * Nuxt Modules
   */
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/content",
    '@nuxtjs/google-fonts'
  ],

  i18n: {
    langDir: "lang",
    strategy: "prefix_except_default",
    defaultLocale: "nl",
    bundle: {
      runtimeOnly: false,
    },
    compilation: {
      jit: false,
    },
    locales: [
      {
        code: "nl",
        file: "nl.json",
        name: "NL",
        iso: "nl-NL",
      },
    ],
  },

  googleFonts: {
    families: {
      Lato: [200, 300, 400, 500, 600, 700],
    }    
  },

  /*
   * Vite config
   */
  vite: {
    // Inject our variables into every <style lang="scss"> tag
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '~/assets/styles/variables/index.scss';",
        },
      },
    },
  },
  css: ["~/assets/styles/classes/index.scss"],
});