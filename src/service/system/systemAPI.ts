import zpRequest from "../service";
import type { IQueryInfo } from "@/views/Main/system/user/userViewType";
import type { IDataResult } from '../serviceType';
import type { ISystemDataType } from "./systemAPIType";
enum systemAPI {
  LoginUrl = "/login",
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
/* 获取页面数据 */
export function getPageListData(url: string, queryInfo: IQueryInfo) {
  return zpRequest.post<IDataResult<ISystemDataType>>({
    url: url,
    data: queryInfo,
    isLoading: true
  });
}

/* 请求删除数据 */
export function deletePageData(url: string) {
  return zpRequest.delete<IDataResult>({
    url: url
  })
}
/* 新建用户数据 */
export function createPageData(url: string, newData: any) {
  return zpRequest.post<IDataResult>({
    url: url,
    data: newData
  })
}
/* 更新用户数据 */
export function editPageData(url: string, editData: any) {
  return zpRequest.patch<IDataResult>({
    url: url,
    data: editData
  })
}