import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const searchConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: "角色名称",
      prop: "form.name",
      placeholder: "请输入角色名",
    },
    {
      field: 'intro',
      type: 'input',
      label: "权限介绍",
      prop: "form.intro",
      placeholder: "请输入权限介绍",
    },
    {
      field: 'createDate',
      type: 'datepicker',
      label: "选择日期",
      prop: "form.open",
      placeholder: '选择时间',
      dateOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    },
  ]
})