<template>
  <div class="s-canvas">
    <canvas
      id="s-canvas"
      :width="contentWidth"
      :height="contentHeight"
    ></canvas>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    identifyCode?: string;
    fontSizeMin?: number;
    fontSizeMax?: number;
    backgroundColorMin?: number;
    backgroundColorMax?: number;
    colorMin?: number;
    colorMax?: number;
    lineColorMin?: number;
    lineColorMax?: number;
    dotColorMin?: number;
    dotColorMax?: number;
    contentWidth?: number;
    contentHeight?: number;
  }>(),
  {
    identifyCode: "1234",
    fontSizeMin: 20,
    fontSizeMax: 35,
    backgroundColorMin: 180,
    backgroundColorMax: 240,
    colorMin: 50,
    colorMax: 160,
    lineColorMin: 40,
    lineColorMax: 180,
    dotColorMin: 0,
    dotColorMax: 255,
    contentWidth: 100,
    contentHeight: 38,
  }
);
// 生成一个随机数
const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
// 生成一个随机的颜色
const randomColor = (min: number, max: number) => {
  let r = randomNum(min, max);
  let g = randomNum(min, max);
  let b = randomNum(min, max);
  return "rgb(" + r + "," + g + "," + b + ")";
};
const drawPic = () => {
  let canvas: any = document.getElementById("s-canvas");
  let ctx = canvas.getContext("2d");
  ctx.textBaseline = "bottom";
  // 绘制背景
  ctx.fillStyle = randomColor(
    props.backgroundColorMin,
    props.backgroundColorMax
  );
  ctx.fillRect(0, 0, props.contentWidth, props.contentHeight);
  // 绘制文字
  for (let i = 0; i < props.identifyCode.length; i++) {
    drawText(ctx, props.identifyCode[i], i);
  }
  drawLine(ctx);
  drawDot(ctx);
};
const drawText = (ctx: any, txt: any, i: number) => {
  ctx.fillStyle = randomColor(props.colorMin, props.colorMax);
  ctx.font = randomNum(props.fontSizeMin, props.fontSizeMax) + "px SimHei";
  let x = (i + 1) * (props.contentWidth / (props.identifyCode.length + 1));
  let y = randomNum(props.fontSizeMax, props.contentHeight - 5);
  var deg = randomNum(-45, 45);
  // 修改坐标原点和旋转角度
  ctx.translate(x, y);
  ctx.rotate((deg * Math.PI) / 180);
  ctx.fillText(txt, 0, 0);
  // 恢复坐标原点和旋转角度
  ctx.rotate((-deg * Math.PI) / 180);
  ctx.translate(-x, -y);
};
const drawLine = (ctx: any) => {
  // 绘制干扰线
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = randomColor(props.lineColorMin, props.lineColorMax);
    ctx.beginPath();
    ctx.moveTo(
      randomNum(0, props.contentWidth),
      randomNum(0, props.contentHeight)
    );
    ctx.lineTo(
      randomNum(0, props.contentWidth),
      randomNum(0, props.contentHeight)
    );
    ctx.stroke();
  }
};
const drawDot = (ctx: any) => {
  // 绘制干扰点
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    ctx.arc(
      randomNum(0, props.contentWidth),
      randomNum(0, props.contentHeight),
      1,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
};

watch(() => props.identifyCode, (newV, oldV) => {
  drawPic();
});
onMounted(() => {
  drawPic();
});

defineExpose({
  identifyCode: props.identifyCode,
  drawPic,
});
</script>

<style lang="scss">
.s-canvas {
  cursor: pointer;
}
</style>
