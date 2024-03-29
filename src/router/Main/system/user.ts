const user = () => import('@/views/Main/system/user/user.vue')
export default {
  path: '/system/users',
  name: 'users',
  component: user,
  children: [],
  meta: { name: '用户管理', icon: '', zhCN: '用户管理', en: 'User Manage' },
}
