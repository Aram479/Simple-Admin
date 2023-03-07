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
  modalData:{
    formItems: [
      {
        field: "name",
        type: "input",
        label: "用户名",
        placeholder: "请输入用户名",
      },
      {
        field: "realname",
        type: "input",
        label: "真实姓名",
        placeholder: "请输入真实姓名",
      },
      {
        field: "password",
        type: "input",
        label: "密码",
        placeholder: "请输入密码",
        formType: 'create',
      },
      {
        field: "cellphone",
        type: "input",
        label: "电话号码",
        placeholder: "请输入电话号码",
      },
      {
        field: "departmentId",
        name: 'department',
        type: "select",
        label: "部门",
        placeholder: "请选择部门",
      },
      {
        field: "roleId",
        name: 'role',
        type: "select",
        label: "角色",
        placeholder: "请选择角色",
      },
      {
        field: "enable",
        type: "select",
        label: "状态",
        placeholder: "请选择状态",
        options: [
          {
            value: 1,
            label: "启用",
          },
          {
            value: 0,
            label: "禁用",
          },
        ],
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
  tableName: '用户管理',
  tableBtnName: '新建用户'
});
