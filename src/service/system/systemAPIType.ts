export interface ISystemDataType {
  list: ISystemListData[];
  totalCount: number;
}

export interface ISystemListData {
  cellphone?: number;
  createAt?: string;
  departmentId?: number;
  enable?: number;
  id?: number;
  name?: string;
  realname?: string;
  roleId?: number;
  updateAt?: string;
}
