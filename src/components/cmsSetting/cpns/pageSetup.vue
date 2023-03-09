<template>
  <div class="pageSetup w-full">
    <div class="switch-box">
      <div class="switch-item" v-for="item in switchTab">
        <span>{{ item.label }}</span>
        <el-switch v-model="item.switchModel" size="large" inline-prompt @change="handleSwitchChange(item.value, item.switchModel)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useThemesStore } from "@/stores/modules/themes";
import { storeToRefs } from 'pinia';
import { ISwitchTab, ISwitchValue } from '../cmsSettingType';

const themesStore = useThemesStore();
const themesState = storeToRefs(themesStore)

const switchTab = ref<ISwitchTab[]>([
  { value: 'grey', label: '灰色模式', switchModel: themesState.grey.value },
  { value: 'weakness', label: '色弱模式', switchModel: themesState.weakness.value },
  { value: 'showLogo', label: '侧边栏Logo', switchModel: themesState.showLogo.value },
  { value: 'unique', label: '保持一个子菜单展开', switchModel: themesState.unique.value },
])
const handleSwitchChange = (name: ISwitchValue , change: boolean)=>{
  themesState[name].value = change
  themesStore.setTheme()
  switch(name) {
    case 'grey': greyChange(change); break;
    case 'weakness': weekChange(change); break;
  }
}
function toggleClass(flag: boolean, clsName: string, target?: HTMLElement) {
  const targetEl = target || document.body;
  let { className } = targetEl;
  className = className.replace(clsName, "").trim();
  targetEl.className = flag ? `${className} ${clsName} ` : className;
}

/** 灰色模式设置 */
const greyChange = (value: boolean): void => {
  toggleClass(value, "html-grey", );
};

/** 色弱模式设置 */
const weekChange = (value: boolean): void => {
  toggleClass(value, "html-weakness", <HTMLElement>document.querySelector("html")
  );
};
</script>

<style lang="scss" scoped>
.switch-item {
  @include flex(center, space-between)
}
</style>