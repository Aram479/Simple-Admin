import zpRequest from "../service";
import { storeToRefs } from "pinia";
import type { IAccount } from "@/views/Login/LoginViewType";
import type { ILoginDataType } from "./loginAPIType";
import type { IDataResult } from '../serviceType';
enum loginAPI {
  LoginUrl = "/login",
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
/* 登录 获取token */
export function userLogin(user: IAccount) {
  return zpRequest.post<IDataResult<ILoginDataType>>({
    url: loginAPI.LoginUrl,
    data: user,
  });
}

/* 用户请求信息 */
export function resUserInfoById(id: number) {
  return zpRequest.get<IDataResult>({
    url: loginAPI.LoginUserInfo + id,
  })
}

/* 请求用户菜单 */
export function resUserMenusByRoleId(id: number) {
  return zpRequest.get<IDataResult>({
    url: loginAPI.UserMenus + id + '/menu',
  })
}

export function resUserDataAll(id:number) {
  return zpRequest.all<IDataResult>([resUserInfoById(id), resUserMenusByRoleId(id)], {
    isLoading: true
  })
}