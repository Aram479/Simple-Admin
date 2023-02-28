import router from '.';
import { storeToRefs } from 'pinia';
import { useLoginStore } from '@/stores/modules/loginStore';
import localCache from '@/utils/cache';
import NProgress from 'nprogress';
router.beforeEach((to, form)=>{
  NProgress.start()
  const loginStore = useLoginStore()
  const { permissionList } = storeToRefs(loginStore)
  const token = localCache.getItem('token')
  if(to.path !== '/login') {
    if(!token) {
      return '/login'
    } else if(!permissionList?.value?.length) {
      loginStore.getPermission(to.path).then((res) => {
        return to.path
      });
    }
  } else if(to.path === '/login' && token) {
    return form.fullPath
  }
})
router.afterEach((to)=>{
  if(to.meta.noRequest) NProgress.done()
})
