import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const modalConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      field: "password",
      type: "input",
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "departmentId",
      type: "select",
      label: "部门",
      placeholder: "请选择部门",
    },
    {
      field: "roleId",
      type: "select",
      label: "角色",
      placeholder: "请选择角色",
    },
    {
      field: "enable",
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      options: [
        {
          value: 1,
          label: "启用",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
    },
  ],
  // 是否显示搜索/重置
  isOptions: false,
  colSpan: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 24,
    xl: 24,
  },
});
