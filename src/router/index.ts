import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login/Login.vue";
import Layout from "@/views/Layout/Layout.vue";
import Main from "@/views/Main/Main.vue";
import ChatGPT from '@/views/Main/ChatGPT.vue'
import Map from '@/views/Assembly/Map/Map.vue'
import Typewrite from '@/views/Assembly/Typewrite/Typewrite.vue'
import TimeLine from '@/views/Assembly/TimeLine/TimeLine.vue'
import MessagePoint from  "@/views/Assembly/MessagePoint/MessagePoint.vue"
import Draggable from '@/views/Assembly/Draggable/Draggable.vue'
import WaterMark from '@/views/Assembly/WaterMark/WaterMark.vue'
import Print from '@/views/Assembly/Print/Print.vue'
import Debounce from '@/views/Assembly/Debounce/Debounce.vue'
import Qrcode from '@/views/Assembly/Qrcode/Qrcode.vue'
import Forbidden from "@/views/ErrorPage/403.vue";
import NotFound from "@/views/ErrorPage/404.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
        children:[
          {
            path: "/map",
            name: "map",
            component: Map,
            meta: {
              name: "地图",
              noRequest: true,
              zhCN: "地图",
              en: "Map",
            },
          },
          {
            path: "/typewrite",
            name: "typewrite",
            component: Typewrite,
            meta: {
              name: "打字机",
              noRequest: true,
              zhCN: "打字机",
              en: "Typewrite",
            },
          },
          {
            path: "/timeline",
            name: "timeline",
            component: TimeLine,
            meta: {
              name: "时间线",
              noRequest: true,
              zhCN: "时间线",
              en: "TimeLine",
            },
          },
          {
            path: "/messagepoint",
            name: "messagepoint",
            component: MessagePoint,
            meta: {
              name: "消息提示",
              noRequest: true,
              zhCN: "消息提示",
              en: "Message",
            },
          },
          {
            path: "/draggable",
            name: "draggable",
            component: Draggable,
            meta: {
              name: "拖拽",
              noRequest: true,
              zhCN: "拖拽",
              en: "Draggable",
            },
          },
          {
            path: "/watermark",
            name: "watermark",
            component: WaterMark,
            meta: {
              name: "水印",
              noRequest: true,
              zhCN: "水印",
              en: "WaterMark",
            },
          },
          {
            path: "/print",
            name: "print",
            component: Print,
            meta: {
              name: "打印",
              noRequest: true,
              zhCN: "打印",
              en: "Print",
            },
          },
          {
            path: "/debounce",
            name: "debounce",
            component: Debounce,
            meta: {
              name: "防抖节流",
              noRequest: true,
              zhCN: "防抖节流",
              en: "Debounce & Throttle",
            },
          },
          {
            path: "/qrcode",
            name: "qrcode",
            component: Qrcode,
            meta: {
              name: "二维码",
              noRequest: true,
              zhCN: "二维码",
              en: "Qrcode",
            },
          },
        ],
        meta: {
          name: "assembly",
          icon: "Menu",
          noRequest: true,
          zhCN: "组件",
          en: "Assembly",
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
