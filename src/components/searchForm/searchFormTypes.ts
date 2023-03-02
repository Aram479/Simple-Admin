import { Option } from "element-plus/es/components/select-v2/src/select.types";
export interface ISearchFormConfig {
  formItems?: ISearchItem[];
  labelWidth?: string;
  colSpan?: IColSpan;
}
export interface Iform {
  intro?: string;
  name?: string;
  userName?: string;
  realname?: string;
  id?: string;
  status?: string;
  cellphone?: string;
  enable?: string;
  leader?: string;
  address?: string,
  updateAt?: string,
  createAt?: any;
}
export type ISearchForm = Record<string, any>;
export interface ISearchItem {
  // field必传项，使用搜索 必须要有model值
  field: keyof Iform;
  type?: string;
  label?: string;
  prop?: string;
  placeholder?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  // 针对select
  options?: Option[];
  rules?: any[];
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
