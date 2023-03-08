<template>
  <div class="topModel h-full">
    <div class="top-aside"></div>
    <div class="top-content"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.topModel {
  @include flex(center, none, column);
  & * {
    width: 100%;
    height: 100%
  }
  .top-aside {
    flex: 3;
    background-color: #1b2a47;
  }
  .top-content {
    flex: 7;
    background-color: #f0f2f5;
  }
}
</style>