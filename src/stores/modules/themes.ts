import { defineStore } from "pinia";
import themes from "@/common/js/themes"
import localCache from '@/utils/cache';
import type { themeName, themesState } from "../modulesType/themesType";

export const useThemesStore = defineStore("theme", {
  state: (): themesState => ({
    themeColor: '',
    themeName: localCache.getItem('themeData').themeName ?? 'darkBlue',
    menuMode: 'vertical',
    ...themes
  }),
  actions: {
    setTheme() {
      const themeData = {
        themeName: this.themeName,
        menuMode: this.menuMode,
      }
      console.log(themeData)
      this.themeColor = this[<themeName>this.themeName]
      // localCache.setItem('themeName', this.themeName)
      localCache.setItem('themeData', themeData)
    },
  },
  getters: {
    themeStyle(state) {
      return state.themeColor
    }
  }
});