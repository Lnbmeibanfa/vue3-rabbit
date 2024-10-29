import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { LazyPlugin } from '@/directives/index.js'
import { componentPlugin } from '@/components/index'
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(componentPlugin)
app.use(router)
app.mount('#app')
app.use(LazyPlugin)
