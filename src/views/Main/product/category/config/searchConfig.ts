import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const searchConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: "类别",
      prop: "name",
      placeholder: "请输入商品类别",
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