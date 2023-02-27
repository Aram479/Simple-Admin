import { defineStore } from "pinia";
import { systemState } from "../modulesType/systemType";
import { getPageListData } from "../../service/system/systemAPI";
import type { IUserResType } from "@/views/Main/system/user/userViewType";
export const useSystemStore = defineStore("system", {
  state: (): systemState => ({
    userTableData: [],
    tableLoading: true,
    totalCount: 0,
  }),
  actions: {
    async getPageListActions(payload: IUserResType) {
      this.tableLoading = true
      const { data } = await getPageListData(payload.pageUrl, payload.queryInfo);
      this.userTableData = data.list;
      this.totalCount = data.totalCount
      setTimeout(()=>{
        this.tableLoading = false
      }, 500)
    },
  },
  getters: {},
});
