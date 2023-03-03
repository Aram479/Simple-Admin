const category = () => import('@/views/Main/product/category/category.vue')
export default {
  path: '/product/category',
  name: 'category',
  component: category,
  children: [],
  meta: { name: '商品类别', icon: '', zhCN: '商品类别', en: 'Commodity Category' },
}
