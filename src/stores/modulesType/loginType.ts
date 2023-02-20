export interface loginState {
  token?: string,
  loginType?: string,
  userInfo?: any
  userMenus?: menuType[]
}

export interface menuType {
  children?: menuType[]
  icon?: string,
  id?: number,
  name?: string,
  sort?: number,
  type?: number,
  url?: string
}