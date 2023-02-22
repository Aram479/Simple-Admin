import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "name", label: "用户名", minWidth: "100", slotName: "name" },
    { prop: "realname", label: "真实姓名", minWidth: "100", slotName: "realname" },
    { prop: "cellphone", label: "手机号码", minWidth: "100", slotName: "cellphone" },
    { prop: "enable", label: "状态", minWidth: "100", slotName: "enable" },
    { prop: "createAt", label: "创建时间", minWidth: "100", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "100", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "100", slotName: "options" }
  ],
});
