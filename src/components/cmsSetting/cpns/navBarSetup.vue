<template>
  <div class="navBarSetup w-full">
    <div v-for="item in navBars">
      <div v-if="isShow(item, isPhone)" :class="['navBar-item w-full', navBarActive === item.value ? 'active': '']" @click="navBarSetupClick(item.value)">
        <component :is="item.component"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import topModel from '@/components/cmsSetting/cpns/navbarCpns/topModel.vue'
import leftModel from '@/components/cmsSetting/cpns/navbarCpns/leftModel.vue'
import mixModel from '@/components/cmsSetting/cpns/navbarCpns/mixModel.vue'
import localCache from "@/utils/cache";
import { ref, computed } from 'vue';
import { useThemesStore } from '@/stores/modules/themes';
import { storeToRefs } from "pinia";

const themesStore = useThemesStore()
const { menuMode, isPhone } = storeToRefs(themesStore);
const navBarActive = ref<string>(localCache.getItem("themeData")?.menuMode ?? 'vertical')
const navBars = [
  { value: 'vertical', label: '左侧模式', component: leftModel },
  { value: 'horizontal', label: '顶部模式', component: topModel },
  { value: 'mix', label: '混合模式', component: mixModel }
]

// 手机模式下 不显示 顶部模式和混合模式
const isShow = computed(() => (item: any, isPhoneV?: boolean)=> {
  if(isPhoneV) {
    if(item.value === "horizontal" || item.value === "mix") {
      return false
    }
  }
  return true
})
const navBarSetupClick = (value: string)=> {
  navBarActive.value = value
  menuMode!.value = value
  themesStore.setTheme()
  // document.querySelector('body')?.setAttribute('style', <string>this.themeColor)
}
function toggleClass(flag: boolean, clsName: string, target?: HTMLElement) {
  const targetEl = target || document.body;
  let { className } = targetEl;
  className = className.replace(clsName, "").trim();
  targetEl.className = flag ? `${className} ${clsName} ` : className;
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