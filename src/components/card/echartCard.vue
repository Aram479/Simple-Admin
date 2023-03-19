<template>
  <div class="echartCard">
    <el-card class="box-card h-full" :body-style="{height}">
      <template #header>
        <typeWriter :str="title"></typeWriter>
      </template>
      <div ref="echartRef" id="main" style="height: 100%;"></div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import "echarts-wordcloud";
import useEchart from "@/hooks/useEchart";
import { useBarEchart, useLineEchart, usePieEchart, useEchartOption } from '@/hooks/useEchart';
import type { EChartsOption } from "echarts";

const props = withDefaults(defineProps<{
  height?: string,
  title?: string
  type: string,
  optionData: any,
  option?: EChartsOption,
}>(), {
  height: '23rem',
  title: '标题',
  option: ()=> ({}),
})

const echartRef = ref<HTMLHtmlElement>()
const change = () => {
  const { echartsInstance, setOptions } = useEchart(echartRef.value!)
  let option = useEchartOption(props.optionData, props.type, props.option)
  setOptions(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    echartsInstance.resize();
  });
};
// const changetype = () => {
//   // 获取组件实例
//   const machart = echarts.init(document.getElementById("maychar"));
//   // 设置配置项
//   const option = {
//     tooltip: {
//       show: true, //设置是否显示提示框
//       trigger: "item",
//     },
//     xAxis: {
//       data: ["A", "B", "C", "D", "E"],
//     },
//     yAxis: {},
//     series: [
//       {
//         data: [10, 22, 28, 43, 49],
//         type: "line",
//         stack: "x",
//       },
//       {
//         data: [5, 4, 3, 5, 10],
//         type: "line",
//         stack: "x",
//       },
//     ],
//   };
//   // 复制
//   machart.setOption(option);
//   // 根据页面大小自动响应图表大小
//   window.addEventListener("resize", function () {
//     machart.resize();
//   });
// };
onMounted(() => {
  change();
});
</script>

<style lang="scss" scoped>
.echart-box {
  @include flex(center, center);
}
#main {
  width: 100%;
  // max-height: 500px;
}
</style>
