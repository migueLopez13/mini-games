import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import pinia from './pinia.ts'

createApp(App).use(pinia).use(vuetify).mount('#app')
