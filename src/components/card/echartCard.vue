<template>
  <div class="echartCard">
    <el-card class="box-card" header="项目技术栈">
      <div id="main"></div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from "vue";

import 'echarts-wordcloud';
let echarts: any = inject("echarts"); // 主要
// 基本柱形图
// const change = () => {
//   const chartBox = echarts.init(document.getElementById("main")); // 主要
//   const option = {
//     xAxis: {
//       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     },
//     yAxis: {},
//     series: [
//       {
//         type: "bar",
//         data: [23, 24, 18, 25, 27, 28, 25],
//       },
//     ],
//   };
//   chartBox.setOption(option);
//   // 根据页面大小自动响应图表大小
//   window.addEventListener("resize", function () {
//     chartBox.resize();
//   });
// };
// 折线图
// const changetype = () => {
//   // 获取组件实例
//   const machart = echarts.init(document.getElementById("maychar"));
//   // 设置配置项
//   const option = {
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
const wordCloud = ()=> {
  const wordCloudBox = echarts.init(document.getElementById("main")); // 主要
  const option = {
      series: [{
        type: 'wordCloud',
 
        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
 
        shape: 'circle', //形状参数
 
        // Keep aspect ratio of maskImage or 1:1 for shapes
        // This option is supported since echarts-wordcloud@2.1.0
        keepAspect: false,//
 
        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.
 
 
        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.
 
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
 
        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.
 
        sizeRange: [12, 60], //文字之间的距离
 
        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45
 
        rotationRange: [-90, 90],//文字旋转角度的范围
        rotationStep: 45,//文字旋转角度的步长值
 
        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.
 
        gridSize: 8,
 
        // set to true to allow word to be drawn partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        // This option is supported since echarts-wordcloud@2.1.0
        drawOutOfBound: false,
 
        // if the font size is too large for the text to be displayed,
        // whether to shrink the text. If it is set to false, the text will
        // not be rendered. If it is set to true, the text will be shrinked.
        // This option is supported since echarts-wordcloud@2.1.0
        shrinkToFit: false,
 
        // If perform layout animation.
        // NOTE disable it will lead to UI blocking when there is lots of words.
        layoutAnimation: true,
 
        // Global text style
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          // Color can be a callback function or a color string
          color: function () {
            //颜色
            // Random color-随机颜色(r,g,b)
            const randomColor = 'rgb(' + [
              Math.round(Math.random() * 255),
              Math.round(Math.random() * 255),
              Math.round(Math.random() * 255)
            ].join(',') + ')';
            return randomColor;
          }
        },
        emphasis: {
          focus: 'self',
 
          textStyle: {
            textShadowBlur: 10,
            textShadowColor: '#333'
          }
        },
 
        // Data is an array. Each array item must have name and value property.
        data:data.value
      }]
  }
  wordCloudBox.setOption(option)
}
onMounted(() => {
  // change();
  // changetype();
  wordCloud()
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
