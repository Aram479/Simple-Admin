export interface ILoginResult<T = any> {
  code: number;
  data: T;
}
export interface IDataType {
  id: number;
  name: string;
  token: string;
}
