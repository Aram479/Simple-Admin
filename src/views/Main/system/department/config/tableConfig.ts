import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "selection", type: 'selection', label: "多选", minWidth: "20", slotName: "selection" },
    { prop: "index", type: 'index', label: "序号", minWidth: "20", slotName: "index" },
    { prop: 'name', label: '部门名称', minWidth: "40", slotName: "name" },
    { prop: 'leader', label: '部门领导', minWidth: "40", slotName: "leader" },
    { prop: 'parentId', label: '上级部门', minWidth: '30', slotName: "parentId"},
    { prop: "createAt", label: "创建时间", minWidth: "80", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "80", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "80", slotName: "options" },
  ],
  modalData: {
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
  },
  tableName: '部门'
});
