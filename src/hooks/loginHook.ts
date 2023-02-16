import { useLoginStore } from "@/stores/modules/loginStore";
import type { FormInstance } from "element-plus";


/* 表单登录校验 */
export const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
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
