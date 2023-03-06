import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const modalConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: "角色名称",
      prop: "name",
      placeholder: "请输入角色名",
    },
    {
      field: 'intro',
      type: 'input',
      label: "权限介绍",
      prop: "intro",
      placeholder: "请输入权限介绍",
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
