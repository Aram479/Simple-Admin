import { Option } from "element-plus/es/components/select-v2/src/select.types";
export interface ISearchFormConfig {
  formItems?: ISearchItem[];
  labelWidth?: string;
  colSpan?: IColSpan;
}
export interface Iform {
  userName?: string,
  password?: string,
  id?: string,
  open?: string,
  createDate?: any
}
export type ISearchForm = Record<string, any>;
export interface ISearchItem {
  // 必传项，使用搜索 必须要有model值
  field: keyof Iform;
  type?: string;
  label?: string;
  prop?: string;
  placeholder?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  // 针对select
  options?: Option[];
  // 针对 DatePicker
  dateOptions?: {
    type?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
  };
}
export interface IColSpan {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
