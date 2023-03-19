<template>
  <!-- 自动打字机 -->
  <div class="typer">
    <div class="typer-content">
      <!-- 默认不变的内容 -->
      <!-- <p class="typer-static"></p> -->
      <!-- 动态变化的内容-->
      <div class="typer-dynamic">
        <span class="cut">
          <span class="word" v-for="(letter, index) in words" :key="index">{{
            letter
          }}</span>
        </span>
        <!-- 模拟光标-->
        <span class="typer-cursor" v-if="isCursor"></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
/**
 * @property {String} str 展示的字符
 * @property {Number} duration 打出每个字符时间
 * @property {Number} clearDuration 删除每个字符时间
 * @property {Number} timeout 延迟打印时间 routerview动画(fade-in-left) 为0.8s
 * @property {Boolean} isCursor 是否显示光标
 * @property {Boolean} loop 是否循环
 */

const props = withDefaults(
  defineProps<{
    str?: string | string[];
    duration?: number;
    clearDuration?: number;
    timeout?: number
    isCursor?: boolean;
    loop?: boolean;
  }>(),
  {
    str: "你好，世界",
    duration: 100,
    clearDuration: 50,
    timeout: 500,
    isCursor: false,
    loop: false,
  }
);
const words = ref<string[]>([]);
const letters = ref<string[]>([]);
const order = ref<number>(0);
const begin = () => {
  if (Array.isArray(props.str))
    letters.value = props.str[order.value].split("");
  else letters.value = props.str.split("");
  for (var i = 0; i < letters.value.length; i++) {
    setTimeout(write(i), i * props.duration);
  }
};
const back = () => {
  let l = letters.value.length;
  for (var i = 0; i < l; i++) {
    setTimeout(wipe(i), i * props.clearDuration);
  }
};
const write = (i: number) => {
  return () => {
    let l = letters.value.length;
    words.value.push(letters.value[i]);
    /*如果输入完毕，在2s后开始删除*/
    if (i == l - 1 && props.loop) {
      setTimeout(function () {
        back();
      }, 2000);
    }
  };
};
const wipe = (i: number) => {
  return () => {
    let l = letters.value.length;
    words.value.push(letters.value[i]);
    /*如果输入完毕，在2s后开始删除*/
    if (i == l - 1 && props.loop) {
      setTimeout(function () {
        back();
      }, 2000);
    }
  };
};
onMounted(() => {
  setTimeout(() => {
    begin();
  }, props.timeout);
});
</script>
<style scoped lang="scss">
$thepink: black;

.typer {
  box-sizing: border-box;
}

.typer .typer-content {
  // letter-spacing: 2px
}

.typer-dynamic {
  position: relative;
}


.typer-cursor {
  position: absolute;
  height: 100%;
  width: 2px;
  top: 0;
  background-color: $thepink;
  animation: flash 1.5s linear infinite, blink-caret 1s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    background-color: transparent;
  }

  50% {
    background-color: $thepink;
  }
}
</style>
