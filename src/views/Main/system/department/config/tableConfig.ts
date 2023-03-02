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
  tableName: '部门'
});
