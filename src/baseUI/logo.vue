<template>
  <div class="logo">
    <!-- logo标题 -->
    <div :class="['logo-tile text-xl font-bold p-3']" v-if="showLogo">
      <img src="@/assets/img/logo.png" class="mr-2" style="width: 28px" />
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
    width: 210px;
  }
}
</style>
