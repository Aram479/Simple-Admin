<template>
  <div class="mixModel h-full">
    <div class="mix-aside"></div>
    <div class="mix-box">
      <div class="mix-header"></div>
      <div class="mix-content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.mixModel {
  @include flex(center, none, column);
  & * {
    width: 100%;
    height: 100%
  }
  .mix-aside {
    flex: 3;
    background-color: #1b2a47;
  }
  .mix-box {
    @include flex(center, center);
    flex: 7;
    .mix-header {
      flex: 3;
      background-color: #fff;
    }
    .mix-content {
      flex: 7;
      background-color: #f0f2f5;
    }
  }
}

</style>