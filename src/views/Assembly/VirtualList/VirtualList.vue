<template>
  <div class="VirtualList h-full">
    <Card title="虚拟列表" link="https://github.com/Akryum/vue-virtual-scroller/tree/next/packages/vue-virtual-scroller" linkTitle="github地址">
      <div class="w-full flex justify-around flex-wrap">
        <VerticalList class="h-[500px] w-[500px]"></VerticalList>
        <HorizontalList class="h-[500px] w-[500px]"></HorizontalList>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/baseUI/card/src/card.vue';
import VerticalList from './verticalList.vue';
import HorizontalList from './horizontalList.vue';
</script>

<style lang="scss" scoped>

</style>