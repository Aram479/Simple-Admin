import { defineStore } from "pinia";
import type { themeName, themesState } from "../modulesType/themesType";
import themes from "@/common/js/themes"
import localCache from '@/utils/cache';

export const useThemesStore = defineStore("theme", {
  state: (): themesState => ({
    themeColor: '',
    themeName: localCache.getItem('themeName') ?? 'darkBlue',
    ...themes
  }),
  actions: {
    setTheme(theme: themeName = 'darkBlue') {
      this.themeName = theme
      localCache.setItem('themeName', this.themeName)
      this.themeColor = this[theme]
    },
  },
  getters: {
    themeStyle(state) {
      return state.themeColor
    }
  }
});