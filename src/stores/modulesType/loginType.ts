export interface loginState {
  token?: string,
  loginType?: string,
  userInfo?: any
  userMenus?: meunType[]
}

export interface meunType {
  children?: meunType[]
  icon?: string,
  id?: number,
  name?: string,
  sort?: number,
  type?: number,
  url?: string
}