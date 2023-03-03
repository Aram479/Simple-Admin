const department = () => import('@/views/Main/system/department/department.vue')
export default {
  path: '/system/department',
  name: 'department',
  component: department,
  children: [],
  meta: { name: '部门管理', icon: '', zhCN: '部门管理', en: 'Department Manage' },
}
