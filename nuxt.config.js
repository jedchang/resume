// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
    buildAssetsDir: '/static/'
  },
  devServer: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
  // css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/icon', '@element-plus/nuxt'],
  icon: {
    serverBundle: {
      collections: ['uil', 'la']
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // api: 'modern-compiler', // 'modern-compiler' or "modern", "legacy"
          // silenceDeprecations: ["legacy-js-api"],
          additionalData: `
            @import "~/assets/scss/utils/_variables.scss";
            @import "~/assets/scss/utils/_mixins.scss";
            @import "~/assets/scss/utils/_animation.scss";
            @import "~/assets/scss/utils/_transition.scss";
          `
        }
      }
    }
  }
})
