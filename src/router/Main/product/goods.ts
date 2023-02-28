const goods = () => import('@/views/Main/product/goods/goods.vue')
export default {
  path: '/product/goods',
  name: 'goods',
  component: goods,
  children: [],
  meta: { name: '商品信息', icon: ''  },
}
