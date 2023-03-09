import { defineStore } from "pinia";
import themes from "@/common/js/themes"
import localCache from '@/utils/cache';
import type { themeName, themesState } from "../modulesType/themesType";

export const useThemesStore = defineStore("theme", {
  state: (): themesState => ({
    themeColor: '',
    themeName: localCache.getItem('themeData')?.themeName ?? 'darkBlue',
    menuMode: localCache.getItem('themeData')?.menuMode ?? 'vertical',
    dark: localStorage.getItem('vueuse-color-scheme') === 'dark',
    grey: localCache.getItem('themeData')?.grey ?? false,
    weakness: localCache.getItem('themeData')?.weakness ?? false,
    showLogo: localCache.getItem('themeData')?.showLogo ?? true,
    unique: localCache.getItem('themeData')?.unique ?? true,
    ...themes
  }),
  actions: {
    setTheme() {
      const themeData = {
        themeName: this.themeName,
        menuMode: this.menuMode, 
        grey: this.grey,
        weakness: this.weakness,
        showLogo: this.showLogo,
        unique: this.unique,
      }
      this.themeColor = this[<themeName>this.themeName]
      if(this.menuMode === 'horizontal' && this.themeName === 'whiteTheme') {
        this.themeColor = this.themeColor?.replace('menu-active-color: #fff', 'menu-active-color: #409eff')
      }
      document.querySelector('body')?.setAttribute('style', <string>this.themeColor)
      if(this.menuMode === 'mix') {
        document.querySelector('body')?.setAttribute('style', '--popup-container: none')
      }
      localCache.setItem('themeData', themeData)
    },
  },
  getters: {
    themeStyle(state) {
      return state.themeColor
    },
    isHorizontal(state) {
      return ~['horizontal', 'mix'].indexOf(<string>state.menuMode) ? 'horizontal' : ''
    }
  }
});