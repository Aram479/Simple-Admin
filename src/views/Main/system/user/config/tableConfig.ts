import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "selection", type: 'selection', label: "多选", minWidth: "20", slotName: "selection" },
    { prop: "index", type: 'index', label: "序号", minWidth: "20", slotName: "index" },
    { prop: "name", label: "用户名", minWidth: "40", slotName: "name" },
    { prop: "realname", label: "真实姓名", minWidth: "40", slotName: "realname" },
    { prop: "cellphone", label: "手机号码", minWidth: "60", slotName: "cellphone" },
    { prop: "enable", label: "状态", minWidth: "30", slotName: "enable" },
    { prop: "createAt", label: "创建时间", minWidth: "80", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "80", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "80", slotName: "options" },
  ],
});
