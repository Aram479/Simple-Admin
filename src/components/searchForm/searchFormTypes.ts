import { menuType } from "@/stores/modulesType/loginType";
import { Option } from "element-plus/es/components/select-v2/src/select.types";
export interface ISearchFormConfig {
  formItems?: ISearchItem[];
  labelWidth?: string;
  colSpan?: IColSpan;
  isOptions?: boolean;
}
export interface Iform {
  intro?: string;
  name?: string;
  userName?: string;
  realname?: string;
  password?: string
  id?: number;
  status?: string;
  cellphone?: string;
  parentId?: string;
  departmentId?: string
  roleId?: string
  enable?: string;
  leader?: string;
  tree?: string,
  menuList?: string,
  address?: string,
  updateAt?: string,
  createAt?: any;
}
export type ISearchForm = Record<string, any>;
export interface ISearchItem {
  // field必传项，使用搜索 必须要有model值
  field: keyof Iform;
  name?: string, // 用于判断接口名称
  type?: string;
  label?: string;
  prop?: string;
  placeholder?: string;
  isHidden?: boolean,
  formType?: string; // 用于判断创建和编辑表单
  prefixIcon?: string;
  suffixIcon?: string;
  // 针对select
  options?: Option[];
  rules?: any[];
  // 针对tree
  treeOptions?: {
    id: number,
    name: string,
    children?: menuType[]
  }[]
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
