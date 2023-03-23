import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { setupStore } from './stores/store';
import { setupMarkDown } from './utils/markDown';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import echarts from "./echarts/echarts"
// 地图
import Vue3BaiduMapGL from 'vue3-baidu-map-gl'
import directives from '@/directives/directives'
// 虚拟列表
import VueVirtualScroller from 'vue-virtual-scroller'
// element-plus 语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 自定义语言包
import { vueI18n } from './lang/i18n';
// 导入 nprogress样式
import '@/router/routeGuard'
import '@/assets/css/tailwindcss/tailwindcss.css'
import '@/assets/css/index.scss'
import 'element-plus/dist/index.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
const app = createApp(App)
// 使用地图插件
app.use(Vue3BaiduMapGL, {
  ak: 'mSyDKeUXeiUWvNI7eXkuIyAyOzG2ol81',
})
// 虚拟列表插件
app.use(VueVirtualScroller)

// 全局引用echarts 使用provide传给子组件
app.config.globalProperties.$echarts = echarts
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

