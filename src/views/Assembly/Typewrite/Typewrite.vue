<template>
  <div class="Typewrite">
    <Card title="打字机组件">
      <TypeWriter :str="['怒发冲冠，凭栏处、潇潇雨歇。抬望眼、仰天长啸，壮怀激烈。', '三十功名尘与土，八千里路云和月。', '莫等闲、白了少年头，空悲切。']" isCursor loop />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/baseUI/card/src/card.vue'
import TypeWriter from '@/components/typeWriter/typeWriter.vue';
</script>

<style lang="scss" scoped>

</style>