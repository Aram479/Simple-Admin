import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "selection", type: 'selection', label: "多选", minWidth: "20", slotName: "selection" },
    { prop: "index", type: 'index', label: "序号", minWidth: "20", slotName: "index" },
    { prop: "name", label: "商品名称", minWidth: "40", slotName: "name" },
    { prop: "oldPrice", label: "原价格", minWidth: "30", slotName: "oldPrice" },
    { prop: "newPrice", label: "新价格", minWidth: "30", slotName: "newPrice" },
    { prop: "status", label: "状态", minWidth: "40", slotName: "status" },
    { prop: "imgUrl", label: "图片", minWidth: "40", slotName: "imgUrl" },
    { prop: "inventoryCount", label: "库存", minWidth: "30", slotName: "inventoryCount" },
    { prop: "saleCount", label: "销量", minWidth: "30", slotName: "saleCount" },
    { prop: "favorCount", label: "收藏", minWidth: "30", slotName: "favorCount" },
    { prop: "address", label: "地址", minWidth: "30", slotName: "address" },
    { prop: "createAt", label: "创建时间", minWidth: "70", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "70", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "80", slotName: "options" },
  ],
  tableName: '商品信息',
  tableBtnName: '新建商品'
});