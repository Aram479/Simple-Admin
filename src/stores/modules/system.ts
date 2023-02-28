import { defineStore } from "pinia";
import { systemState } from "../modulesType/systemType";
import { getPageListData } from "../../service/system/systemAPI";
import type { IUserResType } from "@/views/Main/system/user/userViewType";
import _ from 'lodash'
export const useSystemStore = defineStore("system", {
  state: (): systemState => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    departmentList: [],
    departmentCount: 0,
    menuList: [],
    menuCount: 0,
    tableLoading: true,
  }),
  actions: {
    setUsersList(usersList: any[], total: number){
      this.usersList = usersList
      this.usersCount = total
    },
    setRoleList(roleList: any[], total: number) {
      this.roleList = roleList
      this.roleCount = total
    },
    setDepartmentList(departmentList: any[], total: number) {
      this.departmentList = departmentList
      this.departmentCount = total
    },
    setMenuList(menuList: any[], total: number) {
      this.menuList = menuList
      this.menuCount = total
    },
    async getPageListActions({pageName, queryInfo}: IUserResType) {
      const pageUrl = `/${pageName}/list`
      this.tableLoading = true
      const { data } = await getPageListData(pageUrl, queryInfo);
      const setStr = (_.capitalize(pageName) as 'Users' | 'Role' | 'Department' | 'Menu')
      //根据pageName调用不同存储方法  capitalize 首字母大写   data.totalCount 可能为undifine 因为menu没有
      this[`set${setStr}List`](data.list, data.totalCount ?? 0)
      console.log(data)
      setTimeout(()=>{
        this.tableLoading = false
      }, 500)
    },
  },
  getters: {},
});
