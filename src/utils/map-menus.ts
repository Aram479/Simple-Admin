import type { menuType } from "@/stores/modulesType/loginType";
import { RouteRecordRaw } from "vue-router";
export let firstMenu: any = null

/* 根据用户筛选路由 */
export function mapMenusToRoutes(userMenus: menuType[], allRoutes: RouteRecordRaw[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  allRoutes.forEach((all, i) => {
    userMenus.forEach((user, i) => {
      // 如果用户路由、子路由、孙路由匹配上所有路由则添加到新数组中
      if (user.name === all?.meta?.name) {
        // 且用户路由有子路由
        if (user.children && all.children && user.children.length > 0) {
          // 继续筛选递归子路由
          all.children = mapMenusToRoutes(user.children, all.children);
        }
        routes.push(all);
      }
    });
  });
  return routes
}

/* 获取import.meta.glob路由文件 */
export function getImportMetaRoute(files: Record<string, RouteRecordRaw>) {
  const children: RouteRecordRaw[] = []
  for (let item in files) {
    children.push(files[item]);
  }
  return children
}

// 设置路由重定向
export function setDefaultRoute(routes?: RouteRecordRaw[]) {
  routes?.forEach((v, i) => {
    if (v.children && v.children.length > 0) {
      // 路由重定向 = {name: 每个路由的children的第一个路由}
      v.redirect = { name: v.children[0].name };
      // 因为children也会有children所有还需要重定向
      setDefaultRoute(v.children);
    }
  });
}