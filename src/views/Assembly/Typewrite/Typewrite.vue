<template>
  <div class="Typewrite">
    <Card title="打字机组件">
      <TypeWriter :str="['傍晚的光线金黄而辽远，四月的清爽如此温情。', '你迟到了许多年，可我依然为你的到来而高兴。', '陪你看日落的人，比日落本身更温柔。']" isCursor loop />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/baseUI/card/src/card.vue'
import TypeWriter from '@/components/typeWriter/typeWriter.vue';
</script>

<style lang="scss" scoped>

</style>