<template>
  <div class="cmsSetting">
    <el-drawer v-model="drawerValue" :with-header="false" :size="315" append-to-body>
      <div class="setting-box mb-3" v-for="item in settings">
        <el-divider content-position="center"><span class="text-lg font-bold">{{ item.title }}</span></el-divider>
        <component :is="item.component"></component>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import darkSetup from "./cpns/darkSetup.vue";
import themeSetup from "./cpns/themeSetup.vue";
import navBarSetup from "./cpns/navBarSetup.vue";
import pageSetup from "./cpns/pageSetup.vue";
import { ref, reactive, shallowRef } from "vue";

const drawerValue = ref(false);
// 动态组件不能添加ref reactive
const settings = [
  { title: "主题", component: darkSetup },
  { title: "主题色", component: themeSetup },
  { title: "导航模式", component: navBarSetup },
  { title: "界面显示", component: pageSetup },
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
