import { useLoginStore } from "@/stores/modules/loginStore";
import type { FormInstance } from "element-plus";
import localCache from '@/utils/cache'
import { storeToRefs } from 'pinia';
import type { IAccount, IPhone } from "@/views/Login/LoginViewType";

/* 表单登录校验 */
export async function submitForm(formEl?: FormInstance, userLogin?: any, isKeepPwd?: Boolean){
  const loginStore = useLoginStore()
  const { loginType } = storeToRefs(loginStore)
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 如果记住密码
      if(isKeepPwd) {
        localCache.setItem('account', userLogin)
        localCache.setItem('isKeepPwd', isKeepPwd)
      } else {
        localCache.removeItem('account')
        localCache.removeItem('isKeepPwd')
      }
      // 首页登录 / 手机登录
      if(loginType?.value === 'account') loginStore.accountLogin(userLogin)
      else if(loginType?.value === 'phone') loginStore.phoneLogin(userLogin)
    }
  });
};

/* 清空表单 */
export const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

/* 返回按钮 */
export const loginTypeClick = (type: string) => {
  const loginStore = useLoginStore()
  loginStore.setLoginType(type)
};
