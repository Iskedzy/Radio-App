export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/assets/css/main.css'
        }
      ]
    }
  }
})