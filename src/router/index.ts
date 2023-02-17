import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Layout from '@/views/Layout/Layout.vue';
import Main from '@/views/Main/Main.vue'
import localCache from '@/utils/cache';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/login',
      name: 'Login',
      component: Login
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
    return form.path
  }
})
export default router
