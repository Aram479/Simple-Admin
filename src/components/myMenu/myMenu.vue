<template>
  <div class="myMenu">
    <!-- 菜单 -->
    <el-menu class="border-none" menu-trigger="click" router unique-opened :mode="menuMode" ellipsis :default-active="routeActive">
      <!-- <SubMenu :menu="sidebarMenu" :routeActive="routeActive" /> -->
      <template v-for="firItem in sidebarMenu">
        <template v-if="firItem.name">
          <!-- 有child -->
          <el-sub-menu :index="firItem.name" v-if="firItem.children?.length" :key="firItem.name">
            <template #title>
              <el-icon color="black">
                <component :is="firItem.meta?.icon"></component>
              </el-icon>
              <span>{{ $t(<string>firItem.meta?.en) }}</span>
            </template>
            <SubMenu :menu="firItem.children" :routeActive="routeActive"></SubMenu>
          </el-sub-menu>
          <!-- 无child -->
          <el-menu-item v-else :route="firItem" :index="firItem.name">
            <div :class="['menuItem-box', routeActive === firItem.name && menuMode !== 'horizontal' ? 'itemActive' : '']">
              <el-icon color="black">
                <component v-if="firItem.meta?.icon" :is="firItem.meta?.icon"></component>
              </el-icon>
              <span>{{ $t(<string>firItem.meta?.en) }}</span>
            </div>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import SubMenu from "@/views/Layout/cpns/SubMenu.vue";
import { ref, watchEffect } from "vue";
import { useLoginStore } from "@/stores/modules/loginStore";
import { useThemesStore } from '@/stores/modules/themes';
import { storeToRefs } from "pinia";
import { RouteRecordName, useRoute } from "vue-router";

const route = useRoute();
const loginStore = useLoginStore();
const themesStore = useThemesStore()
const { sidebarMenu } = storeToRefs(loginStore);
const { menuMode } = storeToRefs(themesStore);
let routeActive = ref<RouteRecordName>();
watchEffect(() => {
  if (route.name) routeActive.value = route.name;
});
</script>

<style lang="scss" scoped>
.myMenu {
  .el-menu {
    height: 100%;
    border-right: none;
    .el-menu-item {
      --el-menu-sub-item-height: 100% !important;
      font-size: 13px !important;
      padding: 5px 10px !important;
      background-color: var(--el-meun-item-bg-color);

      &:hover {
        background-color: var(--el-meun-item-bg-color);
      }

      .menuItem-box {
        width: 100%;
        padding-left: 10px;
        border-radius: 5px;
        color: var(--el-menu-text-color);

        &:hover {
          transition: color .5s;
          color: var(--el-menu-hover-text-color);
        }
      }
    }
  }
}
.itemActive {
  background-color: var(--el-menu-item-active-bg-color) !important;
  color: var(--el-menu-active-color) !important;
  &:hover {
    transition: color 0s !important;
    color: var(--el-menu-active-color) !important;
  }
}
</style>
