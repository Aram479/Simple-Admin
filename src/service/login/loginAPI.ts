import zpRequest from "../service";
import { storeToRefs } from "pinia";
import type { IAccount } from "@/views/Login/LoginViewType";
import type { ILoginResult, IDataType } from "./loginAPIType";
enum loginAPI {
  LoginUrl = "/login",
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
/* 登录 获取token */
export function userLogin(user: IAccount) {
  return zpRequest.post<ILoginResult<IDataType>>({
    url: loginAPI.LoginUrl,
    data: user,
  });
}

/* 用户请求信息 */
export function resUserInfoById(id: number) {
  return zpRequest.get<ILoginResult>({
    url: loginAPI.LoginUserInfo + id,
    isLoading: false
  })
}

/* 请求用户菜单 */
export function resUserMenusByRoleId(id: number) {
  return zpRequest.get<ILoginResult>({
    url: loginAPI.UserMenus + id + '/menu',
    isLoading: false
  })
}