import type { ISystemListData } from "@/service/system/systemAPIType";
export interface systemState {
  usersList: ISystemListData[];
  usersCount: number,
  roleList: any[],
  roleCount: number,
  departmentList: any[],
  departmentCount: number,
  menuList: any[],
  menuCount: number,
  goodsList: any[],
  goodsCount: number,
  tableLoading: boolean
}
