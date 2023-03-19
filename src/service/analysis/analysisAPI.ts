import zpRequest from "../service";
import type { IDataResult } from '../serviceType';
import type { ICategoryData } from "./analysisAPIType";
enum analysisAPI {
  amountList = '/goods/amount/list',
  goodsSaleTop10 = '/goods/sale/top10',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}


/* 商品统计数据 */
export function getAmountList() {
  return zpRequest.get({
    url: analysisAPI.amountList
  })
}

export function getGoodsSaleTop10() {
  return zpRequest.get({
    url: analysisAPI.goodsSaleTop10
  })
}

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
  return zpRequest.all<IDataResult>([getAmountList(), getGoodsSaleTop10(), getCategoryGoodsCount(), getCategoryGoodsSale(), getCategoryGoodsFavor(), getAddressGoodsData()], {
    isLoading: true 
  })
}