<template>
  <RouterView />
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, nextTick, provide, getCurrentInstance } from 'vue';
import { useThemesStore } from "@/stores/modules/themes";
import { storeToRefs } from 'pinia';
import { useDarkChange } from './hooks/darkHook';
import { useDark } from '@vueuse/core';
const themesStore = useThemesStore();
const {grey, weakness, dark} = storeToRefs(themesStore)

const ctx = getCurrentInstance()
const echarts = ctx?.appContext.config.globalProperties.$echarts
provide("echarts", echarts);

/* 设置灰色和色弱 */
onBeforeMount(()=> {
  nextTick(() => {
    grey.value && document.querySelector("html")?.setAttribute("class", "html-grey");
    weakness.value && document.querySelector("html")?.setAttribute("class", "html-weakness");
    dark?.value && useDark()
  });
})
</script>

<style lang="scss" scoped>
</style>
