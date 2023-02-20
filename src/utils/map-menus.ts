import type { menuType } from "@/stores/modulesType/loginType";
import { RouteRecordRaw } from "vue-router";

/* 筛选路由 */
export function mapMenusToRoutes(userMenus: menuType[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const files: Record<string, RouteRecordRaw> = import.meta.glob("/src/router/Main/**/**.ts", { import: "default", eager: true });
  for (let item in files) {
    allRoutes.push(files[item]);
  }
  allRoutes.forEach((all, i) => {
    
    // userMenus.forEach((user, i) => {
    //   // 如果用户路由、子路由、孙路由匹配上所有路由则添加到新数组中
    //   console.log(user, all)
    //   if (user.name === all?.meta?.name) {
    //     // 且用户路由有子路由
    //     if (user.children && all.children && user.children.length > 0) {
    //       // 继续筛选递归子路由
    //       all.children = mapMenusToRoutes(user.children);
    //     }
    //     routes.push(all);
    //   }
    // });
  });
  console.log(routes)
  return routes;
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