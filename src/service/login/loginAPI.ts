import zpRequest from "../service";
import { storeToRefs } from "pinia";
enum loginAPI {
  loginUrl = "/login",
  registerUrl = "/register",
  permissionUrl = '/permission',
}
/* 登录 获取token */
export function userLogin(user: any) {
  return zpRequest.post({
    url: loginAPI.loginUrl,
    data: user,
  });
}


