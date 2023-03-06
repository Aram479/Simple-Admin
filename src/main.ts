import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { setupStore } from './stores/store';
import { setupMarkDown } from './utils/markDown';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import directives from '@/directives/directives'
// element-plus 语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 自定义语言包
import { vueI18n } from './lang/i18n';
// 导入 nprogress样式
import '@/router/routeGuard'
import '@/assets/css/tailwindcss/tailwindcss.css'
import '@/assets/css/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
  locale: zhCn,
})
directives(app)
setupStore(app)
setupMarkDown(app)
vueI18n(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

