import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
const phoneValidate = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    if (reg.test(value)) {
      callback();
    } else {
      return callback(new Error('请输入正确的手机号'));
    }
  }
}
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "selection", type: 'selection', label: "多选", minWidth: "20", slotName: "selection" },
    { prop: "index", type: 'index', label: "序号", minWidth: "20", slotName: "index" },
    { prop: "name", label: "类别", minWidth: "40", slotName: "name" },
    { prop: "createAt", label: "创建时间", minWidth: "80", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "80", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "80", slotName: "options" },
  ],
  modalData:{
    formItems: [
      {
        field: "name",
        type: "input",
        label: "类别",
        placeholder: "请输入类别",
        rules:[
          { required: true, message: '请输入类别', trigger: 'blur' },
        ]
      }
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
  },
  tableName: '类别管理',
  tableBtnName: '新建类别'
});
