import zpRequest from "../service";

/* 获取页面数据 */
export function TinymceUpload(url: string, data: FormData, onUploadProgress: any) {
  return zpRequest.post({
    baseURL: url,
    headers: {
      "Content-Type": "multipart/form-data;charset=UTF-8",
    },
    onUploadProgress,
    data,
  });
}
