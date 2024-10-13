import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { LazyPlugin } from '@/directives/index.js'
import { componentPlugin } from '@/components/index'
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(componentPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(LazyPlugin)
