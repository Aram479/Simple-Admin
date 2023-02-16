import { useLoginStore } from "@/stores/modules/loginStore";
import type { FormInstance } from "element-plus";
import localCache from '@/utils/cache'
import { storeToRefs } from 'pinia';

/* 表单登录校验 */
export const submitForm = async (formEl?: FormInstance, userLogin?: object, isKeepPwd?: Boolean) => {
  const loginStore = useLoginStore()
  const { loginType } = storeToRefs(loginStore)
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(isKeepPwd) {
        localCache.setItem('account', userLogin)
        localCache.setItem('isKeepPwd', isKeepPwd)
      } else {
        localCache.removeItem('account')
        localCache.removeItem('isKeepPwd')
      }
      if(loginType?.value === 'account') loginStore.accountLogin(userLogin)
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
