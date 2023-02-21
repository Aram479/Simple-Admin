import { Option } from "element-plus/es/components/select-v2/src/select.types";

export type ISearchForm = Record<string, any>;
export interface ISearchItem {
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
