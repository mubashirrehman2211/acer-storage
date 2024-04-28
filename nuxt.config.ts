// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    devtools: {enabled: false},
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },
    css: ['nvd-u/u-core.scss'],
    components: [
        {path: 'components', pathPrefix: false},
    ]
})
