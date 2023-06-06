import SignIn from '@/views/System/SignIn/SignIn.vue'
const children = [
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: {
      name: "登录",
      noRequest: true,
      zhCN: "登录",
      en: "Sign In",
    },
  },
];

export default children