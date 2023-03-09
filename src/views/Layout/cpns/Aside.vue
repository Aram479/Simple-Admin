<template>
  <div class="Menu h-full">
    <!-- logo标题 -->
    <logo />
    <!-- 菜单 -->
    <MyMenu v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
import logo from '@/baseUI/logo.vue';
import MyMenu from '@/components/myMenu/myMenu.vue';
</script>

<style lang="scss" scoped>
.Menu {
  @include flex(center, none, column);
  background-color: var(--el-menu-bg-color);
}
</style>
