import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { setupStore } from './stores/store';

import 'element-plus/dist/index.css'
import '@/assets/css/index.scss'
import '@/assets/css/tailwindcss/tailwindcss.css'

const app = createApp(App)

setupStore(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
