const dashboard = () => import('@/views/Main/analysis/dashboard/dashboard.vue')
export default {
  path: '/analysis/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: [],
  meta: { name: '核心技术', icon: '' },
}
