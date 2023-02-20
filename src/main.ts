import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { setupStore } from './stores/store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/assets/css/tailwindcss/tailwindcss.css'
import '@/assets/css/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
setupStore(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

