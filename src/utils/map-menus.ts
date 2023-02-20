import type { menuType } from "@/stores/modulesType/loginType";
import { RouteRecordRaw } from "vue-router";

export function mapMenusToRoutes(userMenus: menuType): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const files: Record<string, RouteRecordRaw> = import.meta.glob("/src/router/Main/**/**.ts", { import: "default", eager: true });
  const children: RouteRecordRaw[] = [];
  for (let item in files) {
    children.push(files[item]);
  }
  return routes;
}
