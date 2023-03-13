import { ref, reactive, toRefs } from 'vue';
import { defineStore } from "pinia";
import { systemState } from "../modulesType/systemType";
import { publicPageActions } from './publicPageActions';
export const useSystemStore = defineStore("system", () => {
  const state = reactive<systemState>({
    usersList : [],
    usersCount : 0,
    roleList : [],
    roleCount : 0,
    departmentList : [],
    departmentCount : 0,
    menuList : [],
    menuCount : 0,
    goodsList : [],
    goodsCount : 0,
    categoryList: [],
    categoryCount: 0,
    tableLoading : true,
  })
  return {
    ...toRefs(state),
    ...publicPageActions(state)
  }
});
