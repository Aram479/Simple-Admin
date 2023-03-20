export interface IDataResult<T = any> {
  status: number;
  code: number;
  data: T;
}