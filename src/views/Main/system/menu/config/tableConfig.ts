import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "selection", type: 'selection', label: "多选", minWidth: "20", slotName: "selection" },
    { prop: "index", type: 'index', label: "序号", minWidth: "20", slotName: "index" },
    { prop: "name", label: "菜单名称", minWidth: "40", slotName: "name" },
    { prop: 'type', label: '级别', minWidth: "40", slotName: "type" },
    { prop: 'url', label: '菜单url', minWidth: '70', slotName: "url" },
    // { prop: 'permission', label: '权限', slotName: "permission" },
    { prop: "createAt", label: "创建时间", minWidth: "80", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "80", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "80", slotName: "options" },
  ],
  elTableProps: {
    rowKey: 'id',
    treeProps:{
      children: 'children'
    }
  },
  tableName: '菜单管理',
  tableBtnName: '新建菜单'
});
