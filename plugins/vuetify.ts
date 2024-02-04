// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
// import { defaults as vuetifyDefaults } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import { defaults as vuetifyDefaults } from 'vuetify';
// console.log('🚀 🚀 file: vuetify.ts:9 🚀 defaults:', defaults)

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  })
  app.vueApp.use(vuetify)
})
