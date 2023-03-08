<template>
  <div class="themeOption">
    <div class="theme-box">
      <div class="theme-color flex items-center">
        <div
          class="theme-color-item mx-1"
          v-for="(colorItem, colorIndex) in themeColors"
          :key="colorItem.id"
        >
          <div class="active-icon" v-if="colorActive === colorItem.id">
            <el-icon
              :color="colorItem.color === '#fff' ? 'black' : '#fff'"
              :size="20"
              ><CaretBottom
            /></el-icon>
          </div>
          <div
            class="w-5 h-5 m-0.5 rounded-sm shadow-2xl"
            :style="{ backgroundColor: colorItem.color }"
            @click="colorClick(colorItem, colorIndex)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import localCache from "@/utils/cache";
import { ref, reactive } from "vue";
import { themesType } from "@/views/Layout/LayoutViewType";
import { useThemesStore } from "@/stores/modules/themes";
import { storeToRefs } from 'pinia';
const themesStore = useThemesStore();
const { themeName } = storeToRefs(themesStore)
const colorActive = ref(localCache.getItem("themeName") || "darkBlue");
const themeColors = reactive<themesType[]>([
  { id: "darkBlue", color: "#1b2a47" },
  { id: "whiteTheme", color: "#fff" },
  { id: "purpleTheme", color: "#722ed1" },
  { id: "matta", color: "#10b981" },
]);
// 主题色切换事件
const colorClick = (item: themesType, index: number) => {
  colorActive.value = item.id;
  themeName!.value = item.id
  themesStore.setTheme();
};
</script>

<style lang="scss" scoped>
.theme-box {
  .theme-color {
    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid #ccc;
      border-radius: 3px;
      .active-icon {
        position: absolute;
        top: -20%;
      }
    }
  }
}
</style>
