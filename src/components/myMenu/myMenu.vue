<template>
  <div class="myMenu h-full w-full">
    <!-- 菜单 -->
    <el-menu class="border-none" menu-trigger="click" router :unique-opened="unique" :mode="mode || menuMode" ellipsis :default-active="routeActive" @open="handleMenuOpen">
      <!-- <SubMenu :menu="sidebarMenu" :routeActive="routeActive" /> -->
      <template v-for="firItem in menuData">
        <template v-if="firItem.name">
          <!-- 有child -->
          <el-sub-menu :index="firItem.name" v-if="firItem.children?.length" :key="firItem.name" @click="isHorizontal ? handleSubMenu(firItem) : ''">
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
            <div :class="['menuItem-box', routeActive === firItem.name && !isHorizontal ? 'itemActive' : '']">
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
import { ref, computed, watchEffect } from "vue";
import { useLoginStore } from "@/stores/modules/loginStore";
import { useThemesStore } from '@/stores/modules/themes';
import { storeToRefs } from "pinia";
import { RouteRecordName, useRoute, useRouter } from 'vue-router';
import type { RouteRecordRaw } from "vue-router"
import { json } from "stream/consumers";

const props = withDefaults(defineProps<{
  menuList: RouteRecordRaw[],
  mode: string,
}>(), {
  menuList: ()=> ([]),
  mode: ''
})

const route = useRoute();
const router = useRouter()
const loginStore = useLoginStore();
const themesStore = useThemesStore()
const { sidebarMenu, menuChildList } = storeToRefs(loginStore);
const { menuMode, isHorizontal, unique } = storeToRefs(themesStore);
let routeActive = ref<RouteRecordName>();

const menuData = computed(()=> {
  return props.menuList.length ? props.menuList : sidebarMenu?.value
})
// 3.9日
/* 一级菜单点击事件 */
const handleSubMenu = (item: RouteRecordRaw)=> {
  menuChildList!.value = item.children
  router.push(item.path)
}
const handleMenuOpen = (name: string)=> {
  menuChildList!.value = sidebarMenu?.value?.find(item=> item.name === name)?.children
}
watchEffect(() => {
  if (route.name) {
    routeActive.value = route.name
  };
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
<style></style>
