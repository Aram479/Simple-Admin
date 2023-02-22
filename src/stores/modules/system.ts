import { defineStore } from "pinia";
import { systemState } from "../modulesType/systemType";
import { getPageListData } from "../../service/system/systemAPI";
import type { IUserResType } from "@/views/Main/system/user/userViewType";

export const useSystemStore = defineStore("system", {
  state: (): systemState => ({
    userList: [],
  }),
  actions: {
    async getPageListActions(payload: IUserResType) {
      const { data } = await getPageListData(payload.pageUrl, payload.queryInfo);
      this.userList = data.list;
    },
  },
  getters: {},
});
