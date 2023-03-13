<template>
  <div class="echartCard">
    <el-card class="box-card" header="项目技术栈">
      <div id="main"></div>
      <div id="maychar"></div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from "vue";

import "echarts-wordcloud";
let echarts: any = inject("echarts"); // 主要
// 基本柱形图
const change = () => {
  const chartBox = echarts.init(document.getElementById("main")); // 主要
  const option = {
    tooltip: {
      show: true, //设置是否显示提示框
      trigger: "item",
    },
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  };
  chartBox.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize();
  });
};
// 折线图
const changetype = () => {
  // 获取组件实例
  const machart = echarts.init(document.getElementById("maychar"));
  // 设置配置项
  const option = {
    tooltip: {
      show: true, //设置是否显示提示框
      trigger: "item",
    },
    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: "line",
        stack: "x",
      },
      {
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x",
      },
    ],
  };
  // 复制
  machart.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    machart.resize();
  });
};
onMounted(() => {
  change();
  changetype();
});
</script>

<style lang="scss" scoped>
.echart-box {
  @include flex(center, center);
}
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}
#maychar {
  max-height: 500px;
  // max-height: 400px;
  height: 500px;
}
</style>
