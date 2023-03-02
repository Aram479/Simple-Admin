import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const searchConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: "商品名称",
      prop: "name",
      placeholder: "请输入商品名称",
    },
    {
      field: 'address',
      type: 'input',
      label: "商品地址",
      prop: "intro",
      placeholder: "请输入商品地址",
    },
    {
      field: 'status',
      type: 'input',
      label: "状态",
      prop: "status",
      placeholder: "请选择状态",
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: "选择日期",
      prop: "open",
      placeholder: '选择时间',
      dateOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    },
  ]
})