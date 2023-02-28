import { reactive } from "vue";
import type { ISearchFormConfig } from "@/components/searchForm/searchFormTypes";

export const searchConfig = reactive<ISearchFormConfig>({
  formItems: [
    {
      field: 'userName',
      type: 'input',
      label: "用户名",
      prop: "form.userName",
      placeholder: "请输入用户名",
    },
    {
      field: 'password',
      type: 'input',
      label: "密码",
      prop: "form.password",
      placeholder: "请输入密码",
    },
    {
      field: 'id',
      type: 'input',
      label: "根据ID",
      prop: "form.id",
      placeholder: "请输入根据ID",
    },
    {
      field: 'open',
      type: 'select',
      label: "是否开启",
      prop: "form.open",
      placeholder: "请输入是否开启",
      options: [{
        value: 'open',
        label: '开启',
      },
      {
        value: 'close',
        label: '关闭',
      }]
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