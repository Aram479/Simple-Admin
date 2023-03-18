const dashboard = () => import('@/views/Main/analysis/dashboard/dashboard.vue')
export default {
  path: '/analysis/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: [],
  meta: { name: '商品统计', icon: '', zhCN: '商品统计', en: 'Commodity Statistics' },
}
