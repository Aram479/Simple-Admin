import { defineStore } from "pinia";
import { systemState } from "../modulesType/systemType";
import { getPageListData } from "../../service/system/systemAPI";
import type { IUserResType } from "@/views/Main/system/user/userViewType";
import * as _ from 'lodash';
export const useSystemStore = defineStore("system", {
  state: (): systemState => ({
    userTableData: [],
    tableLoading: true
  }),
  actions: {
    async getPageListActions(payload: IUserResType) {
      this.tableLoading = true
      const { data } = await getPageListData(payload.pageUrl, payload.queryInfo);
      this.userTableData = data.list;
      setTimeout(()=>{
        this.tableLoading = false
      }, 500)
      
    },
  },
  getters: {},
});
