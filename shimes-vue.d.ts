import { RouteMeta, RouteParams } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    name?: string;
    icon?: string;
    isCustomIcon?: boolean, // 是否是自定义图标
    noRequest?: boolean; // 页面是否没有接口请求
  }
}
declare module "*.mjs";
declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module '@kangc/v-md-editor';
declare module 'sortablejs';
declare module 'vue-virtual-scroller'
declare module "prismjs";
