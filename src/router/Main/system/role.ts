const role = () => import('@/views/Main/system/role/role.vue')
export default {
  path: '/system/role',
  name: 'role',
  component: role,
  children: [],
  meta: { name: '角色管理', icon: '', isNProgress: true },
}
