import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { loginState } from '../modulesType/loginType';
export const useLoginStore = defineStore('login', {
  state: (): loginState => ({
    token: '',
    loginType: 'account',
  }),
  actions: {
    /* 登录页切换登录  */
    setLoginType(type: string) {
      this.loginType = type
    },
    /* account登录 */
    accountLogin(userLogin?: object) {
      console.log(userLogin)
    }
  },
})
