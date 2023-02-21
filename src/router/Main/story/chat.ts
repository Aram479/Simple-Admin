const chat = () => import('@/views/Main/story/chat/chat.vue')
export default {
  path: '/story/chat',
  name: 'chat',
  component: chat,
  children: [],
  meta: { name: '你的故事', icon: '' },
}
