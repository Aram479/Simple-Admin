import { defineStore } from "pinia";
import type { themeType, themesState } from "../modulesType/themesType";
import themes from "@/common/js/themes"
import localCache from '@/utils/cache';

export const useThemesStore = defineStore("theme", {
  state: (): themesState => ({
    themeColor: '',
    ...themes
  }),
  actions: {
    setTheme(theme: themeType = 'darkBlue') {
      localCache.setItem('theme', theme)
      this.themeColor = this[theme]
    },
  },
  getters: {
    themeStyle(state) {
      return state.themeColor || state[(localCache.getItem('theme') || 'darkBlue')]
    }
  }
});