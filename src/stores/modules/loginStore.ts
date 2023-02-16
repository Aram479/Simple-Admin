import localCache from "@/utils/cache";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {
  userLogin,
  resUserInfoById,
  resUserMenusByRoleId,
} from "@/service/login/loginAPI";
import type { loginState } from "../modulesType/loginType";
import type { IAccount, IPhone } from "@/views/Login/LoginViewType";
export const useLoginStore = defineStore("login", {
  state: (): loginState => ({
    token: localCache.getItem("token") ?? "",
    loginType: "account",
    userInfo: localCache.getItem("userInfo") ?? {},
  }),
  actions: {
    /* 登录页切换登录  */
    setLoginType(type: string) {
      this.loginType = type;
    },
    /* account登录 */
    async accountLogin(accountLogin: IAccount) {
      const {  data: { id, token } } = await userLogin(accountLogin);
      const userInfo = await resUserInfoById(id);
      const userMenus = await resUserMenusByRoleId(id);
      console.log(userInfo)
      console.log(userMenus)
      this.token = token;
      this.userInfo = userInfo
      localCache.setItem('userInfo', userInfo)
      localCache.setItem("token", token);
    },
    phoneLogin(phoneLogin: IPhone) {
      console.log(phoneLogin.phone);
    },
  },
});
