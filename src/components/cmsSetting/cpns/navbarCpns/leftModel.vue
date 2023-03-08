<template>
  <div class="leftModel h-full">
    <div class="left-aside"></div>
    <div class="left-box">
      <div class="left-header"></div>
      <div class="left-content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.leftModel {
  @include flex(center, none);
  & * {
    width: 100%;
    height: 100%
  }
  .left-aside {
    flex: 3;
    background-color: #1b2a47;
  }
  .left-box {
    @include flex(center, center, column);
    flex: 7;
    .left-header {
      flex: 3;
      background-color: #fff;
    }
    .left-content {
      flex: 7;
      background-color: #f0f2f5;
    }
  }
}

</style>