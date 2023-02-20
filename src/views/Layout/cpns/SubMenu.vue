<template>
  <div>
    <template v-for="firItem in menu">
      <!-- 有child -->
      <el-sub-menu :index="firItem.url" v-if="firItem.type === 1">
        <template #title>
          <el-icon color="black">
            <component :is="firItem.icon"></component>
          </el-icon>
          <span>{{ firItem.name }}</span>
        </template>
        <SubMenu :menu="firItem.children" :routeActive="routeActive"></SubMenu>
      </el-sub-menu>
      <!-- 无child -->
      <el-menu-item v-else :class="routeActive === firItem.name ? 'itemActive': ''" :route="firItem" :index="firItem.url">
        <el-icon color="black">
          <component :is="firItem.icon"></component>
        </el-icon>
        <span>{{ firItem.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts" setup>
import SubMenu from "./SubMenu.vue";
import { ref, computed, watchEffect, nextTick  } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';
import type { menuType } from "@/stores/modulesType/loginType";

const props = withDefaults(defineProps<{
  menu: menuType[],
  routeActive?: RouteRecordName
}>(),{
  menu: () => ([])
})

</script>

<style lang="scss" scoped>
.el-menu-item {
  background-color: var(--el-meun-item-bg-color);
  &:hover {
    color: var(--el-menu-hover-text-color);
    background-color: var(--el-meun-item-bg-color);
  }
}
.itemActive {
  background-color: var(--el-menu-item-active-bg-color) !important;
}
</style>