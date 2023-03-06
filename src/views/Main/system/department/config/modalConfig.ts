import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const modalConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      prop: "name",
      placeholder: '请输入部门名称',
      rules: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导',
      rules: []
    },
    {
      field: 'parentId',
      type: 'input',
      label: '上级部门',
      placeholder: '请输入上级部门',
      rules: []
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
