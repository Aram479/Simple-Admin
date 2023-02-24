import { RouteMeta } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    name?: string;
    icon?: string;
  }
}
declare module "element-plus/dist/locale/zh-cn.mjs";
