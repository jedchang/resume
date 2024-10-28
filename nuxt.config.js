// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/resume/' : '/'
    // buildAssetsDir: '/public/'
  },
  devServer: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
  css: ['~/assets/scss/main.scss', 'element-plus/dist/index.css'],
  modules: ['@nuxt/icon', '@pinia/nuxt', '@element-plus/nuxt'],
  vite: {
    define: {
      'process.env': process.env
    },
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
  },
  // runtimeConfig: {
  //   public: {
  //     emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
  //     emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //     emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
  //   }
  // },
  routeRules: {
    'manifest-route-rule': {
      override: true
    }
  }
})
