import { RouteMeta } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    name?: string;
    icon?: string;
    noRequest?: boolean; // 页面是否没有接口请求
  }
}
declare module "*.mjs";
declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module '@kangc/v-md-editor';
declare module "prismjs";
