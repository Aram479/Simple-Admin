import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Layout from '@/views/Layout/Layout.vue';
import Main from '@/views/Main/Main.vue'
import Forbidden from '@/views/ErrorPage/403.vue'
import NotFound from '@/views/ErrorPage/404.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{ noRequest: true }
    },
    {
      path: "/403",
      component: Forbidden,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ]
})
export const DynamicRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'layout',
    component: Layout,
    redirect: '/main',
    meta: {name: ''},
    children:[{
      path: '/main',
      name: 'Main',
      component: Main,
      meta:{name: '首页', icon: 'HomeFilled', noRequest: true, zhCN: '首页', en: 'Home' }
    }]
  },
];


export default router
