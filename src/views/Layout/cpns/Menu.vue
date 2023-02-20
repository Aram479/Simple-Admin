<template>
  <div class="Menu h-full">
    <!-- logo标题 -->
    <div class="logo-tile text-xl font-bold p-3">
      <el-icon class="mr-3" color="#4285f4" size="35"><SwitchFilled /></el-icon>
      <span>MyAdmin</span>
    </div>
    <!-- 菜单 -->
    <el-menu 
      class="border-none" 
      router 
      unique-opened 
      :default-active="routeActive"
    >
      <SubMenu :menu="userMenus" :routeActive="routeActive" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import SubMenu from "./SubMenu.vue"
import { ref, watchEffect } from 'vue';
import { useLoginStore } from '@/stores/modules/loginStore';
import { storeToRefs } from 'pinia';
import { RouteRecordName, RouteRecordRaw, useRoute } from 'vue-router';
const route = useRoute()
const loginStore = useLoginStore()
const { userMenus } = storeToRefs(loginStore)
let routeActive = ref<RouteRecordName>()
watchEffect(()=>{
  console.log(route.name)
  if(route.name) routeActive.value = route.name
})
</script>

<style lang="scss" scoped>
.Menu {
  background-color: var(--el-menu-bg-color);
  .logo-tile {
    @include flex(center, none);
    color: #80aef8
  }
}
.el-menu {
  border-right: none;
}
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
