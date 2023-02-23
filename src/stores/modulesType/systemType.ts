import type { ISystemListData } from "@/service/system/systemAPIType";
export interface systemState {
  userTableData?: ISystemListData[];
  tableLoading?: boolean
  totalCount?: number
}
