<template>
  <div class='dashboard'>
    <el-row class="h-full" :gutter="24">
      <el-col :span="12"><EchartCard v-if="categoryGoodsCount.length" title="分类商品数量(饼图)" type="pie" :optionData="pieData(categoryGoodsCount)" class="h-full py-2" /></el-col>
      <el-col :span="12"><EchartCard v-if="categoryGoodsSale.length" title="分类商品的销量" type="line" :optionData="xANDyData(categoryGoodsSale)" class="h-full py-2" /></el-col>
      <el-col :span="12"><EchartCard v-if="categoryGoodsFavor.length" title="分类商品的收藏" type="bar" :optionData="xANDyData(categoryGoodsFavor, 'goodsFavor')" class="h-full py-2" /></el-col>
      <el-col :span="12"><EchartCard v-if="addressGoodsSale.length"  title="不同城市商品销量" type="map" :optionData="mapData(addressGoodsSale, 'count')" class="h-full py-2" /></el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import EchartCard from '@/components/card/echartCard.vue';
import { reactive, ref, computed } from 'vue'
import { useAnalysisStore } from '@/stores/modules/analysis';
import { storeToRefs } from 'pinia';
import type { ICategoryData } from '@/service/analysis/analysisAPIType';
const analysisStore = useAnalysisStore()
analysisStore.getDashboardAction()
const { categoryGoodsCount, categoryGoodsSale, categoryGoodsFavor, addressGoodsSale } = storeToRefs(analysisStore)
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

