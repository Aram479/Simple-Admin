import { createRouter, createWebHistory } from 'vue-router'
import localCache from '@/utils/cache';
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
      component: Login
    },
    {
      path: '',
      name: 'layout',
      component: Layout,
      redirect: 'main',
      children:[{
        path: '/main',
        name: 'Main',
        component: Main
      }]
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

router.beforeEach((to,form)=>{
  const token = localCache.getItem('token')
  if(to.path !== '/login') {
    if(!token) {
      return '/login'
    }
  } else if(to.path === '/login' && token) {
    return form.fullPath
  }
})
export default router
