import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { loginState } from '../modulesType/loginType';
export const useLoginStore = defineStore('login', {
  state: (): loginState => ({
    token: '',
    num: 0,
    loginType: 'account', // 登录页切换登录
  }),
  actions: {
    setLoginType(type: string) {
      this.loginType = type
    }
  },
})
