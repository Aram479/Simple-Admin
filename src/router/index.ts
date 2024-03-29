import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login/Login.vue";
import Layout from "@/views/Layout/Layout.vue";
import Main from "@/views/Main/Main.vue";
import ChatGPT from '@/views/Main/ChatGPT.vue'
import AssemblyChild from '@/router/Assembly'
import SystemChild from '@/router/System'
import Forbidden from "@/views/ErrorPage/403.vue";
import NotFound from "@/views/ErrorPage/404.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { noRequest: true },
    },
  ],
});
export const DynamicRoutes: RouteRecordRaw[] = [
  {
    path: "",
    name: "layout",
    component: Layout,
    redirect: "/main",
    meta: { name: "" },
    children: [
      {
        path: "/main",
        name: "main",
        component: Main,
        meta: {
          name: "首页",
          icon: "HomeFilled",
          noRequest: true,
          zhCN: "首页",
          en: "Home",
        },
      },
      {
        path: "/chatgpt",
        name: "chatgpt",
        component: ChatGPT,
        meta: {
          name: "chatgpt",
          icon: "icon-openai",
          isCustomIcon: true,
          noRequest: true,
          zhCN: "ChatGPT",
          en: "ChatGPT",
        },
      },
      {
        path: "/assembly",
        name: "assembly",
        children: AssemblyChild,
        meta: {
          name: "assembly",
          icon: "Menu",
          noRequest: true,
          zhCN: "组件",
          en: "Assembly",
        },
      },
      {
        path: "/systemType",
        name: "systemType",
        children: SystemChild,
        meta: {
          name: "systemType",
          icon: "Menu",
          noRequest: true,
          zhCN: "系统",
          en: "systemType",
        },
      },
      {
        path: "/403",
        component: Forbidden,
        meta: {
          name: "错误",
          icon: "HomeFilled",
          noRequest: true,
          zhCN: "403",
          en: "403",
        },
      },
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
        meta: {
          name: "不存在",
          icon: "HomeFilled",
          noRequest: true,
          zhCN: "404",
          en: "404",
        },
      },
    ],
  },
];

export default router;
