import type { ISystemListData } from "@/service/system/systemAPIType";
import { ElTable } from "element-plus";
export interface ITableConfig {
  headerData?: ITableHeader[];
  tableData?: ISystemListData[];
  elTableProps?: IElTableProps;
  tableName?: string;
}

export interface IElTableProps {
  rowKey: string,
  treeProps: {
    children: string
  }
}
export interface ITableHeader {
  type?: string;
  id?: number;
  prop: string;
  label: string;
  minWidth?: string;
  slotName?: string;
  isShow?: boolean; // 是否默认显示
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
