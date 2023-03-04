import { RouteRecordRaw } from "vue-router"

export interface loginState {
  token: string,
  loginType: string,
  userInfo: any
  userMenus: menuType[],
  sidebarMenu?: RouteRecordRaw[],
  permissionList?: RouteRecordRaw[],
  buttonPermission?: string[]
}

export interface menuType {
  children?: menuType[]
  icon?: string,
  id?: number,
  name?: string,
  sort?: number,
  type?: number,
  url: string
}