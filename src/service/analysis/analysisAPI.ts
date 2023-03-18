import zpRequest from "../service";
import type { IQueryInfo } from "@/views/Main/system/user/userViewType";
import type { IDataResult } from '../serviceType';
import type { ICategoryData } from "./analysisAPIType";
enum analysisAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
/* 商品统计数据 */
export function getCategoryGoodsCount() {
  return zpRequest.get<IDataResult<ICategoryData>>({
    url: analysisAPI.categoryGoodsCount,
  });
}

export function getCategoryGoodsFavor() {
  return zpRequest.get<IDataResult<ICategoryData>>({
    url: analysisAPI.categoryGoodsFavor,
  });
}

export function getCategoryGoodsSale() {
  return zpRequest.get<IDataResult<ICategoryData>>({
    url: analysisAPI.categoryGoodsSale,
  });
}

export function getAddressGoodsData() {
  return zpRequest.get<IDataResult>({
    url: analysisAPI.addressGoodsSale ,
  });
}

export function getCategoryGoodsData() {
  return zpRequest.all<IDataResult>([getCategoryGoodsCount(), getCategoryGoodsSale(), getCategoryGoodsFavor(), getAddressGoodsData()], {
    isLoading: true 
  })
}