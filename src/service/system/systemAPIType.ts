export interface ISystemDataType {
  list: ISystemListData[];
  totalCount: number;
}
interface ISystemPublic {
  id?: number;
  name?: string;
  createAt?: string;
  updateAt?: string;
}
interface IUsersList extends ISystemPublic {
  cellphone?: number;
  departmentId?: number;
  enable?: number;
  realname?: string;
  roleId?: number;
}
interface IRoleList extends ISystemPublic {
  intro: string,
  menuList: any[]
}
interface IGoodsList extends ISystemPublic {
  children: any[]
  icon: string
  sort: number
  type: number
  url: string
}
interface IMenuList extends ISystemPublic {
  children: any[]
  icon: string
  sort: number
  type: number
  url: string
}
interface IDepartmentList extends ISystemPublic{

leader: string

parentId: number

}
export type ISystemListData = IUsersList | IRoleList | IDepartmentList | IMenuList
