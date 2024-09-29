// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['@/global/styles.less'],
  modules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@use "~/global/colors.less" as *;',
        },
      },
    },
  },
})
