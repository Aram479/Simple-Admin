import localCache from "@/utils/cache";
import { defineStore } from "pinia";
import { userLogin, resUserDataAll } from "@/service/login/loginAPI";
import type { loginState } from "../modulesType/loginType";
import type { IAccount, IPhone } from "@/views/Login/LoginViewType";
import router, { DynamicRoutes } from '@/router';
import type { RouteRecordRaw } from "vue-router";
import { mapMenusToRoutes, setDefaultRoute } from "@/utils/map-menus";
export const useLoginStore = defineStore("login", {
  state: (): loginState => ({
    token: localCache.getItem("token") ?? "",
    loginType: "account",
    userInfo: localCache.getItem("userInfo") ?? {},
    userMenus: localCache.getItem("userMenus") ?? [],
    sidebarMenu: [], // 导航菜单
    permissionList: [], // 路由权限
  }),
  actions: {
    // 设置权限
    SET_PERMISSION(routes: RouteRecordRaw[]) {
      this.permissionList = routes;
    },
    // 设置菜单路由
    SET_MENU(menu?: RouteRecordRaw[]) {
      this.sidebarMenu = menu;
    },
    /* 登录页切换登录  */
    setLoginType(type: string) {
      this.loginType = type;
    },
    /* account登录 */
    async accountLogin(accountLogin: IAccount) {
      const resAccountData = await userLogin(accountLogin);
      const { id, token } = resAccountData.data;
      if (id && token) {
        this.token = token;
        localCache.setItem("token", token);
        const resUserData = await resUserDataAll(id);
        const [userInfo, userMenus] = resUserData
        if(resUserData.length) {
          this.userInfo = userInfo.data;
          this.userMenus = userMenus.data
          localCache.setItem("userInfo", this.userInfo);
          localCache.setItem("userMenus", this.userMenus);
          router.push('/')
        }
      }
    },
    phoneLogin(phoneLogin: IPhone) {
      console.log(phoneLogin.phone);
    },

    async getPermission(toPath: string) {
      const allRoutes: RouteRecordRaw[] = [];
      const files: Record<string, RouteRecordRaw> = import.meta.glob("/src/router/Main/*.ts", { import: "default", eager: true });
      for (let item in files) {
        allRoutes.push(files[item]);
      }
      // 获取比对完成后生成的路由 permissionList：用户权限路由 dynamicRouter所有权限路由
      let routes = mapMenusToRoutes(this.userMenus, allRoutes);
      /* 3. 获取首页(layout)路由的children */
      // 获取第一个路由(首页)  v.path === ""：判断路由是否为首页 不包含403 404 路由
      let MainContainer = DynamicRoutes.find((v) => v.path === "");
      // 获取首页的children
      let children = MainContainer?.children;
      /* 4. 将筛选后的路由添加到路由(首页)的children中去 */
      // 添加新的routes
      children?.push(...routes);
      /* 5. 存储路由导航菜单，vue要用 */
      // 生成菜单路由(children)
      this.SET_MENU(children);
      /* 6. 设置路由重定向redirect */
      setDefaultRoute(<RouteRecordRaw[]>[{ ...MainContainer }]);
      /* 7. 将过滤完毕的路由添加到routes中 */
      const initialRoutes: Readonly<RouteRecordRaw[]> = router.options.routes;
      // 添加新的路由  DynamicRoutes：最后新生成的路由(完全体路由)
      for (let r of DynamicRoutes) {
        router.addRoute(r);
      }
      router.push(toPath)
      // [...默认的路由, ...最后新生成的路由(完全体路由)]
      this.SET_PERMISSION([...initialRoutes, ...DynamicRoutes]);
    },
  },
});
