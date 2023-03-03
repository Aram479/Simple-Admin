const overview = () => import('@/views/Main/analysis/overview/overview.vue')
export default {
  path: '/analysis/overview',
  name: 'overview',
  component: overview,
  children: [],
  meta: { name: '商品统计', icon: '', zhCN: '商品统计', en: 'Commodity Statistics' },
}
