import localCache from "@/utils/cache";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { userLogin, resUserDataAll } from "@/service/login/loginAPI";
import type { loginState } from "../modulesType/loginType";
import type { IAccount, IPhone } from "@/views/Login/LoginViewType";
import router from '@/router';
export const useLoginStore = defineStore("login", {
  state: (): loginState => ({
    token: localCache.getItem("token") ?? "",
    loginType: "account",
    userInfo: localCache.getItem("userInfo") ?? {},
    userMenus: localCache.getItem("userMenus") ?? []
  }),
  actions: {
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
  },
});
