import zpRequest from "../service";
import type { IQueryInfo } from "@/views/Main/system/user/userViewType";
import type { IDataResult } from '../serviceType';
import type { ISystemDataType } from "./systemAPIType";
enum systemAPI {
  LoginUrl = "/login",
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
/* 登录 获取token */
export function getPageListData(url: string, queryInfo: IQueryInfo) {
  return zpRequest.post<IDataResult<ISystemDataType>>({
    url: url,
    data: queryInfo,
    isLoading: true
  });
}