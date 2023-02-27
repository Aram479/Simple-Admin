const menu = () => import('@/views/Main/system/menu/menu.vue')
export default {
  path: '/system/menu',
  name: 'menu',
  component: menu,
  children: [],
  meta: { name: '菜单管理', icon: '', isNProgress: true },
}
