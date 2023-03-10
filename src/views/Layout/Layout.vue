<template>
  <div class="Layout h-full">
    <el-container class="h-full">
      <el-aside width="210px" v-if="isVertical || isMix">
        <Aside :menuList="isVertical ? sidebarMenu : menuChildList" mode="vertical" />
      </el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from './cpns/Aside.vue';
import Header from './cpns/Header.vue';
import { useLoginStore } from "@/stores/modules/loginStore";
import { useThemesStore } from "@/stores/modules/themes";
import { storeToRefs } from "pinia";
const loginStore = useLoginStore();
const themesStore = useThemesStore();
const { sidebarMenu, menuChildList } = storeToRefs(loginStore);
const { menuMode, isVertical, isMix } = storeToRefs(themesStore);
</script>

<style lang="scss" scoped>
.el-main, .el-header {
  min-width: 600px;
}
.el-main {
  background-color: #f0f2f5;
}
.el-header {
  --el-header-padding: 0px;
  --el-header-height: 3rem;
}
</style>
