import type { ISystemListData } from "@/service/system/systemAPIType";
export interface ITableConfig {
  headerData?: ITableHeader[];
  tableData?: ISystemListData[];
}

export interface ITableHeader {
  type?: string,
  id?: number;
  prop: string;
  label: string;
  minWidth?: string;
  slotName?: string;
}

export interface ITreeData {
  id: number;
  label?: string;
  children?: ITableHeader[];
}

export interface IPageInfo {
  currentPage: number;
  pageSize: number;
}
