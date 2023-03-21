<template>
  <div class='dashboard'>
        <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelDatas" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <CountCard :panelData="item" />
        </el-col>
      </template>
    </el-row>
    <el-row class="h-full" :gutter="24">
      <el-col v-bind="colSpan" :span="12"><EchartCard v-if="categoryGoodsCount.length" title="分类商品数量(饼图)" type="pie" :optionData="pieData(categoryGoodsCount)" class="h-full py-2" /></el-col>
      <el-col v-bind="colSpan" :span="12"><EchartCard v-if="categoryGoodsSale.length" title="分类商品的销量" type="line" :optionData="xANDyData(categoryGoodsSale)" class="h-full py-2" /></el-col>
      <el-col v-bind="colSpan" :span="12"><EchartCard v-if="categoryGoodsFavor.length" title="分类商品的收藏" type="bar" :optionData="xANDyData(categoryGoodsFavor, 'goodsFavor')" class="h-full py-2" /></el-col>
      <el-col v-bind="colSpan" :span="12"><EchartCard v-if="addressGoodsSale.length"  title="不同城市商品销量" type="map" :optionData="mapData(addressGoodsSale, 'count')" class="h-full py-2" /></el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import CountCard from '@/components/card/countCard.vue';
import EchartCard from '@/components/card/echartCard.vue';
import { reactive, ref, computed } from 'vue'
import { useAnalysisStore } from '@/stores/modules/analysis';
import { storeToRefs } from 'pinia';
import type { ICategoryData } from '@/service/analysis/analysisAPIType';
const analysisStore = useAnalysisStore()
analysisStore.getDashboardAction()
const { topPanelDatas, categoryGoodsCount, categoryGoodsSale, categoryGoodsFavor, addressGoodsSale } = storeToRefs(analysisStore)
const colSpan =  ref<any>({
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
})
const xANDyData = computed(()=> (arr: ICategoryData[], key: string = 'goodsCount')=> {
  return {
    xData: <string[] | number[]>arr.map((item)=> item.name || item.address),
    yData: <string[] | number[]>arr.map((item)=> item[<keyof ICategoryData>key])
  }
})
const pieData = computed(()=> (arr: ICategoryData[], key: string = 'goodsCount')=> {
  return arr.map((item)=> ({value: item[<keyof ICategoryData>key], name: item.name}))
})
const mapData = computed(()=> (arr: ICategoryData[], key: string = 'goodsCount')=> {
  return arr.map((item)=> ({value: item[<keyof ICategoryData>key], name: item.address}))
})
// /count'
// /favor'
// sale',
</script>

<style lang='scss' scoped>
</style>

