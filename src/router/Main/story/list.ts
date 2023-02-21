const list = () => import('@/views/Main/story/list/list.vue')
export default {
  path: '/story/list',
  name: 'list',
  component: list,
  children: [],
  meta: { name: '故事列表', icon: '' },
}
