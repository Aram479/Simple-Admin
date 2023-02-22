import type { ISystemListData } from "@/service/system/systemAPIType";
export interface ITableConfig {
  headerData?: ITableHeader[];
  tableData?: ISystemListData[];
}

export interface ITableHeader {
  prop: string;
  label: string;
  minWidth?: string;
  slotName?: string;
}
