import { reactive } from "vue";
export const tableConfig = reactive({
  headerData: [
    { prop: "name", label: "用户名", minWidth: "100" },
    { prop: "realname", label: "真实姓名", minWidth: "100" },
    { prop: "cellphone", label: "手机号码", minWidth: "100" },
    { prop: "enable", label: "状态", minWidth: "100" },
    { prop: "createAt", label: "创建时间", minWidth: "100" },
    { prop: "updateAt", label: "更新时间", minWidth: "100" },
  ],
  tableData: [
    {
      name: "哈哈哈",
      realname: "Tom",
      cellphone: "No. 189, Grove St, Los Angeles",
      enable: "66666",
      createAt: "22004",
      updateAt: "99999",
    },
    {
      name: "哈哈哈",
      realname: "Tom",
      cellphone: "No. 189, Grove St, Los Angeles",
      enable: "66666",
      createAt: "22004",
      updateAt: "99999",
    },
    {
      name: "哈哈哈",
      realname: "Tom",
      cellphone: "No. 189, Grove St, Los Angeles",
      enable: "66666",
      createAt: "22004",
      updateAt: "99999",
    },
    {
      name: "哈哈哈",
      realname: "Tom",
      cellphone: "No. 189, Grove St, Los Angeles",
      enable: "66666",
      createAt: "22004",
      updateAt: "99999",
    },
  ],
});
