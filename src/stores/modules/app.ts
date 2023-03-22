import { ref, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import { appState } from "../modulesType/appType";
export const useAppStore = defineStore("app", () => {
  const state = reactive<appState>({
    // 作用于 src/views/components/draggable/index.vue 页面，当离开页面并不会销毁 new Swap()，sortablejs 官网也没有提供任何销毁的 api
    sortSwap: false,
  });
  const setSortSwap = (val: boolean)=> {
    state.sortSwap = val
  }
  return {
    ...toRefs(state),
    setSortSwap,
  };
});
