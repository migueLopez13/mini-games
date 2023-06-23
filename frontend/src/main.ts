import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import pinia from './plugins/pinia.ts'
import { router } from './plugins/router.ts'

createApp(App).use(pinia).use(router).use(vuetify).mount('#app')
