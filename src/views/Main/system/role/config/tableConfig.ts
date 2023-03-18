import { nextTick, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import type { ITableConfig } from "@/components/pageTable/pageTableTypes";
export const tableConfig = reactive<ITableConfig>({
  headerData: [
    { prop: "selection", type: 'selection', label: "多选", minWidth: "20", slotName: "selection" },
    { prop: "index", type: 'index', label: "序号", minWidth: "20", slotName: "index" },
    { prop: "name", label: "用户名", minWidth: "40", slotName: "name" },
    { prop: "intro", label: "权限介绍", minWidth: "40", slotName: "intro" },
    { prop: "createAt", label: "创建时间", minWidth: "80", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "80", slotName: "updateAt" },
    { prop: "options", label: "操作", minWidth: "80", slotName: "options" },
  ],
  modalData: {
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: "角色名称",
        prop: "name",
        placeholder: "请输入角色名",
        rules:[
          { required: true, message: '请输入角色名', trigger: 'blur' },
        ]
      },
      {
        field: 'intro',
        type: 'input',
        label: "权限介绍",
        prop: "intro",
        placeholder: "请输入权限介绍",
        rules:[
          { required: true, message: '请输入权限介绍', trigger: 'blur' },
        ]
      },
      {
        field: 'menuList',
        type: 'tree',
        name: 'menu',
        label: "菜单权限",
        prop: "tree",
        treeOptions:[
          {
            id: 1,
            name: '全选',
            children: [],
          }
        ]
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
  tableName: '角色管理',
  tableBtnName: '新建角色'
});
