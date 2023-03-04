import router from '.';
import { storeToRefs } from 'pinia';
import { useLoginStore } from '@/stores/modules/loginStore';
import { userPermission } from '@/hooks/systemHook';
import localCache from '@/utils/cache';
import NProgress from '@/utils/nprogress';
router.beforeEach((to, form)=>{
  NProgress.start()
  const loginStore = useLoginStore()
  const { permissionList } = storeToRefs(loginStore)
  const token = localCache.getItem('token')
  // 是否有读取页面数据的权限
  if(to.path !== '/login') {
    if(!token) {
      return '/login'
    } else if(!permissionList?.value?.length) {
      loginStore.getPermission(to.path).then((res) => {
        return to.path
      });
    } else if(['/403', '/:pathMatch(.*)*'].indexOf(to.path) === -1) { // 如果去的页面不是 /403 或 不存在路径
      // 判断是否有读取页面权限的存在
      const isRead = userPermission((<string>to.name), 'query')
      // 没有 则跳转403页面
      if(!isRead && ~(<string>to.path).indexOf('system')) return '/403'
    } 
  } else if(to.path === '/login' && token) {
    return form.fullPath
  }
})
router.afterEach((to)=>{
  if(to.meta.noRequest) NProgress.done()
})
