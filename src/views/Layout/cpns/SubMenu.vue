<template>
  <div>
    <template v-for="firItem in menu">
      <template v-if="firItem.name">
        <!-- 有child -->
        <el-sub-menu :index="firItem.name" v-if="firItem.children?.length">
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
          <div :class="['menuItem-box', routeActive === firItem.name ? 'itemActive' : '']">
            <el-icon color="black">
              <component v-if="firItem.meta?.icon" :is="firItem.meta?.icon"></component>
            </el-icon>
            <span>{{ $t(<string>firItem.meta?.en) }}</span>
          </div>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import SubMenu from "./SubMenu.vue";
import { ref, computed, watchEffect, nextTick } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';

const props = withDefaults(defineProps<{
  menu: RouteRecordRaw[],
  routeActive?: RouteRecordName
}>(), {
  menu: () => ([])
})
</script>

<style lang="scss" scoped>
.el-menu-item {
  --el-menu-sub-item-height: 45px;
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

.itemActive {
  background-color: var(--el-menu-item-active-bg-color) !important;
  color: var(--el-menu-active-color) !important;

  &:hover {
    transition: color 0s !important;
    color: var(--el-menu-active-color) !important;
  }
}
</style>