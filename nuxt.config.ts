// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL : "/dir/subdir"
  },
  nitro : {
    preset : "cloudflare-pages"
  }
})
