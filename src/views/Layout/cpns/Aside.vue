<template>
  <div class="Menu h-full">
    <!-- logo标题 -->
    <div class="logo-tile text-xl font-bold p-3">
      <el-icon class="mr-3" color="#4285f4" size="35"><SwitchFilled /></el-icon>
      <span>MyAdmin</span>
    </div>
    <MyMenu />
  </div>
</template>

<script lang="ts" setup>
import MyMenu from '@/components/myMenu/myMenu.vue';
</script>

<style lang="scss" scoped>
.Menu {
  background-color: var(--el-menu-bg-color);
  .logo-tile {
    @include flex(center, none);
    color: #80aef8;
  }
}
</style>
