import { defineStore } from "pinia";
import { systemState } from "../modulesType/systemType";
import { deletePageData, editPageData, getPageListData, createPageData } from '../../service/system/systemAPI';
import { useEventbus } from '@/utils/mitt';
import _ from 'lodash'
import type { IRowType, IUserResType } from "@/views/Main/system/user/userViewType";

const { toRefreshTable, onBus } = useEventbus()
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
    goodsList: [],
    goodsCount: 0,
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
    setMenuList(menuList: any[], total: number) {
      this.menuList = menuList
      this.menuCount = total
    },
    setDepartmentList(departmentList: any[], total: number) {
      this.departmentList = departmentList
      this.departmentCount = total
    },
    setGoodsList(goodsList: any[], total: number) {
      this.goodsList = goodsList
      this.goodsCount = total
    },
    /* 获取页面数据 */
    async getPageListActions({pageName, queryInfo}: IUserResType) {
      const pageUrl = `/${pageName}/list`
      this.tableLoading = true
      const { data } = await getPageListData(pageUrl, queryInfo);
      console.log(data)
      const setStr = (_.capitalize(pageName) as 'Users' | 'Role' | 'Department' | 'Menu' | 'Goods')
      //根据pageName调用不同存储方法  capitalize 首字母大写   data.totalCount 可能为undifine 因为menu没有
      this[`set${setStr}List`](data.list, data.totalCount ?? 0)
      setTimeout(()=>{
        this.tableLoading = false
      }, 500)
    },
    /* 新增页面行数据 */
    async createPageActions({pageName, newData}: IRowType) {
      const pageUrl = `/${pageName}`
      const res = await createPageData(pageUrl, newData)
      console.log('新增', res)
      toRefreshTable()
    },
    /* 删除某页面行数据 */
    async deletePageActions({pageName, id}: IRowType) {
      const pageUrl = `/${pageName}/${id}`
      const res = await deletePageData(pageUrl)
      console.log('删除', res)
      toRefreshTable()
    },
    /* 编辑某页面行数据 */
    async editPageDataAction({pageName, id, editData}: IRowType) {
      const pageUrl = `/${pageName}/${id}`
      const res = await editPageData(pageUrl, editData)
      console.log('修改', res)
      toRefreshTable()
    }
  },
  getters: {},
});
