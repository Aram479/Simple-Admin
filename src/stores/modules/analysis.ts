import { ref, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import { publicPageActions } from "./publicPageActions";
import { getCategoryGoodsData } from "@/service/analysis/analysisAPI";
import type { analysisState } from "../modulesType/analysisType";
export const useAnalysisStore = defineStore("analysis", () => {
  const state = reactive<analysisState>({
    topPanelDatas: [],
    goodsSaleTop10: [],
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: [],

  });
  const getDashboardAction = async ()=> {
    const [topPanel, saleTop10, cateCount, cateSale, cateFavor, addressSale] = await getCategoryGoodsData()
    state.topPanelDatas = topPanel.data
    state.goodsSaleTop10 = saleTop10.data
    state.categoryGoodsCount = cateCount.data
    state.categoryGoodsSale = cateSale.data
    state.categoryGoodsFavor = cateFavor.data
    state.addressGoodsSale = addressSale.data
  }
  return {
    ...toRefs(state),
    getDashboardAction
  };
});
