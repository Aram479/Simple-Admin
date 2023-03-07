import { Iform } from "@/components/searchForm/searchFormTypes";
import { ISystemListData } from "@/service/system/systemAPIType";

export interface IUserResType {
  pageName: string;
  queryInfo: IQueryInfo;
}
export interface IRowType {
  pageName: string;
  id?: number,
  editData?: any
  newData?: any
}
export interface IQueryInfo {
  offset?: number;
  size?: number;
}

