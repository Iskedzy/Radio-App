import { tmpdir } from 'node:os'
import { join } from 'node:path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  modules: ['@nuxtjs/tailwindcss'],

  // Dependency optimizer Vite melakukan atomic rename pada direktorinya
  // (node_modules/.cache/vite/client/deps). Saat project berada di mount
  // Windows lewat WSL (/mnt/e, filesystem v9fs) rename tersebut gagal dengan:
  //   EACCES: permission denied, rename .../deps -> .../deps_temp_xxxx
  // Pindahkan cache ke direktori temporer native agar rename selalu berhasil.
  // Override manual: NUXT_VITE_CACHE_DIR=/path/lain yarn dev
  vite: {
    cacheDir: process.env.NUXT_VITE_CACHE_DIR || join(tmpdir(), 'radio-app-vite-cache')
  },

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