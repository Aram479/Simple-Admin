import { Option } from "element-plus/es/components/select-v2/src/select.types";
export interface ISearchFormConfig {
  formItems?: ISearchItem[];
  labelWidth?: string;
  colSpan?: IColSpan;
}
export type ISearchForm = Record<string, any>;
export interface ISearchItem {
  field?: string;
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
