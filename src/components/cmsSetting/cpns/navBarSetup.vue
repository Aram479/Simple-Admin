<template>
  <div class="navBarSetup w-full">
    <div :class="['navBar-item w-full', navBarActive === item.value ? 'active': '']" v-for="item in navBars" @click="navBarSetupClick(item.value)">
      <component :is="item.component"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import topModel from '@/components/cmsSetting/cpns/navbarCpns/topModel.vue'
import leftModel from '@/components/cmsSetting/cpns/navbarCpns/leftModel.vue'
import mixModel from '@/components/cmsSetting/cpns/navbarCpns/mixModel.vue'
import localCache from "@/utils/cache";
import { ref, reactive } from 'vue';
import { useThemesStore } from '@/stores/modules/themes';
import { storeToRefs } from "pinia";

const themesStore = useThemesStore()
const { menuMode } = storeToRefs(themesStore);
const navBarActive = ref<string>(localCache.getItem("themeData")?.menuMode ?? 'vertical')
const navBars = [
  { value: 'vertical', label: '左侧模式', component: leftModel },
  { value: 'horizontal', label: '顶部模式', component: topModel },
  { value: 'mix', label: '混合模式', component: mixModel }
]
const navBarSetupClick = (value: string)=> {
  navBarActive.value = value
  if (value === 'mix') menuMode!.value = 'horizontal'
  else menuMode!.value = value
  themesStore.setTheme()
}
</script>

<style lang="scss" scoped>
.navBarSetup {
  @include flex(center, space-around);
  .navBar-item {
    cursor: pointer;
    width: 70px;
    height: 56px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.1);
    overflow: hidden;
  }
}
.active {
  box-sizing: border-box;
  border: 2px solid var(--el-color-primary);
}
</style>