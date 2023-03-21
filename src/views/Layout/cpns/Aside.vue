<template>
  <div class="Menu h-full">
    <!-- logo标题 -->
    <logo v-if="isLogo" />
    <!-- 菜单 -->
    <MyMenu v-bind="$attrs" @handleSubMenuClick="handleSubMenuClick" />
  </div>
</template>

<script lang="ts" setup>
import logo from '@/baseUI/logo.vue';
import MyMenu from '@/components/myMenu/myMenu.vue';
import { ref, onMounted } from 'vue';
import { useLoginStore } from "@/stores/modules/loginStore";
import { storeToRefs } from "pinia";
import { RouteRecordRaw } from 'vue-router';

const props = withDefaults(defineProps<{
  isLogo?: boolean,
}>(), {
  isLogo: true,
})
const loginStore = useLoginStore();
const { sidebarMenu, menuChildList } = storeToRefs(loginStore);
const handleSubMenuClick = (children?: RouteRecordRaw[]) => {
  console.log(children)
  menuChildList!.value = children
}
</script>

<style lang="scss" scoped>
.Menu {
  @include flex(center, none, column);
  background-color: var(--el-menu-bg-color);
}
</style>
