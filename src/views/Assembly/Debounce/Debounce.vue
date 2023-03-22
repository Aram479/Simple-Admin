<template>
  <div class="debAndThr">
    <Card title="防抖：debounce" class="mb-5">
      <div class="font-bold mb-3">防抖：用户短时间频繁操作时候，在一定时间内只触发一次</div>
      <el-button @click="immediateDebounce">连续点击我，只会执行第一次点击事件，立即执行</el-button>
      <el-button @click="debounceClick">连续点击我，只会执行最后一次点击事件，延后执行</el-button>
    </Card>
    <Card title="节流：throttle">
      <div class="font-bold mb-3">节流：在规定时间内，用户频繁操作时候，只触发一次</div>
      <el-button @click="throttleClick"> 连续点击我，每一秒只会执行一次点击事件</el-button>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/baseUI/card/src/card.vue';
import { Message } from '@/utils/message';
import _ from 'lodash'
const handle = () => Message("恭喜你，这是一条成功消息", { type: "success" });

const immediateDebounce = _.debounce(handle, 1000, { leading: true, trailing: false });

const debounceClick = _.debounce(handle, 1000, { trailing: true });

const throttleClick = _.throttle(handle, 1000);
</script>

<style lang="scss" scoped>

</style>