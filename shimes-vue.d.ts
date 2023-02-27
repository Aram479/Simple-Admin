import { RouteMeta } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    name?: string;
    icon?: string;
    isNProgress?: boolean // 页面是否需要加载进度条
  }
}
declare module "*.mjs"
declare module "element-plus/dist/locale/zh-cn.mjs";
