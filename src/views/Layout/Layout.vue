<template>
  <div class="Layout h-full">
    <el-container class="h-full">
      <el-aside width="220px" v-if="(isVertical || isMix) && !isPhone">
        <el-scrollbar height="100%">
          <Aside :menuList="isVertical ? sidebarMenu : menuChildList" mode="vertical" />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <Breadcrumb v-if="isPhone" class="mb-3" />
          <RouterView class="fade-in-left"></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from './cpns/Aside.vue';
import Header from './cpns/Header.vue';
import Breadcrumb from './cpns/Breadcrumb.vue';
import { useLoginStore } from "@/stores/modules/loginStore";
import { useThemesStore } from "@/stores/modules/themes";
import systemInfo from '@/utils/systemInfo';
import { storeToRefs } from "pinia";
const loginStore = useLoginStore();
const themesStore = useThemesStore();
const { sidebarMenu, menuChildList } = storeToRefs(loginStore);
const { menuMode, isVertical, isMix, isPhone } = storeToRefs(themesStore);
systemInfo()
</script>

<style lang="scss" scoped>
.el-aside {
  background: var(--el-menu-bg-color);
}
.el-main, .el-header {
  min-width: 380px;
}
.el-main {
  background-color: #f0f2f5;
}
.el-header {
  --el-header-padding: 0px;
  --el-header-height: 3rem;
}
</style>
