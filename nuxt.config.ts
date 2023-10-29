// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/default/_variables.scss";'
        }
      }
    },
  },
  app: {
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      title: 'Indosat x Narasi TV',
      meta: [
        { charset: "utf-8" },
        {
          hid: 'description',
          name: 'description',
          content: 'Indosat x Narasi TV'
        },
        {
          name: "theme-color",
          content: "#FFFFFF",
        },
      ],
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }
      ]
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    includeAssets: [
      "favicon.ico",
      "apple-touch-icon.png",
      "robots.txt",
    ],
    injectRegister: "auto",
    registerType: 'autoUpdate',
    manifest: {
      name: 'Indosat X Narasi',
      short_name: 'Indosat X Narasi',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,css,scss,html,png,svg,webp,ico,json,woff2,woff,ttf}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
