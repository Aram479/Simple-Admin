<template>
  <div class="logo">
    <!-- logo标题 -->
    <div :class="['logo-tile text-xl font-bold p-3', isHorizontal && 'mr-6']" v-if="showLogo">
      <el-icon class="mr-3" color="#4285f4" size="35"><SwitchFilled /></el-icon>
      <span>Simple Admin</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from "@/stores/modules/themes";
import { storeToRefs } from 'pinia';

const themesStore = useThemesStore();
const { showLogo, menuMode, isHorizontal } = storeToRefs(themesStore)
</script>

<style lang="scss" scoped>
.logo {
  @include flex(center, center);
  .logo-tile {
    @include flex(center, none);
    color: #80aef8;
  }
}
</style>
