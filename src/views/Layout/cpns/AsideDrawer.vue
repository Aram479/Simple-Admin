<template>
  <div class="AsideDrawer mr-5">
    <el-icon @click="handleCollapse"><Reading /></el-icon>
    <el-drawer v-model="drawer" direction="ltr" :with-header="false" size="60%" custom-class="aside-el-drawer" append-to-body>
      <Aside :menuList="sidebarMenu" mode="vertical"></Aside>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import Aside from "./Aside.vue";
import { reactive, ref } from "vue";
import { useLoginStore } from "@/stores/modules/loginStore";
import { storeToRefs } from "pinia";
const loginStore = useLoginStore();
const { sidebarMenu } = storeToRefs(loginStore);

const drawer = ref<boolean>(false)
const handleCollapse = () => {
  drawer.value = !drawer.value
}
</script>

<style lang="scss" scoped>
</style>
