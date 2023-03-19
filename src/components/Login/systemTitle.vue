<template>
  <div class="systemTitle mb-4">
    <img src="@/assets/img/logo.png" style="width: 50px" />
    <h2 class="title text-2xl font-semibold text-gray-500 my-2 tracking-widest">
      <typeWriter str="Simple Admin" :timeout="0"></typeWriter>
    </h2>
  </div>
</template>

<script lang="ts" setup>
import typeWriter from '../typeWriter/typeWriter.vue';
</script>

<style lang="scss" scoped>
.systemTitle {
  @include flex(center, space-between, column);
}
</style>