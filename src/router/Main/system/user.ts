const user = () => import('@/views/Main/system/user/user.vue')
export default {
  path: '/system/user',
  name: 'user',
  component: user,
  children: [],
  meta: { name: '用户管理', icon: 'SuccessFilled' },
}
