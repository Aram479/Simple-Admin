<template>
  <div class="cmsSetting">
    <el-drawer v-model="drawerValue" :with-header="false" :size="315">
      <div class="setting-box" v-for="item in settings">
        <el-divider content-position="center">{{ item.title }}</el-divider>
        <component :is="item.component"></component>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import darkSetup from "./cpns/darkSetup.vue";
import themeSetup from "./cpns/themeSetup.vue";
import navBarSetup from "./cpns/navBarSetup.vue";
import { ref, reactive, shallowRef } from "vue";

const drawerValue = ref(false);
// 动态组件不能添加ref reactive
const settings = [
  { title: "主题", component: darkSetup },
  { title: "主题色", component: themeSetup },
  { title: "导航模式", component: navBarSetup },
];
defineExpose({
  drawerValue,
});
</script>

<style lang="scss" scoped>
.setting-box {
  @include flex(center, center, column);

}
</style>
