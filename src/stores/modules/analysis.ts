import { ref, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import { publicPageActions } from "./publicPageActions";
import { getCategoryGoodsData } from "@/service/analysis/analysisAPI";
import type { analysisState } from "../modulesType/analysisType";
export const useAnalysisStore = defineStore("analysis", () => {
  const state = reactive<analysisState>({
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: [],

  });
  const getDashboardAction = async ()=> {
    const [cateCount, cateSale, cateFavor, addressSale] = await getCategoryGoodsData()
    state.categoryGoodsCount = cateCount.data
    state.categoryGoodsSale = cateSale.data
    state.categoryGoodsFavor = cateFavor.data
    state.addressGoodsSale = addressSale.data
    console.log(state)
  }
  return {
    ...toRefs(state),
    getDashboardAction
  };
});
