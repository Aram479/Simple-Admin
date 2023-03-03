import _ from "lodash";
import { ref } from "vue";
import { useLoginStore } from "@/stores/modules/loginStore";
import { storeToRefs } from "pinia";
import localCache from "@/utils/cache";
import type { RouteRecordRaw } from "vue-router";

// 菜单搜索事件
export function useSearchMenu() {
  const loginStore = useLoginStore();
  const { sidebarMenu } = storeToRefs(loginStore);
  const lang = localCache.getItem("lang");
  const searchList = ref<RouteRecordRaw[]>([]);
  const handleSearchMenu = _.debounce((keyword: string) => {
    keyword = keyword.trim();
    if (!keyword) return (searchList.value = []);
    let listArr: RouteRecordRaw[] = [];
    _.cloneDeepWith(sidebarMenu?.value, (item) => {
      if (item.name && item.meta && ~item.meta[lang].indexOf(keyword)) {
        listArr.push(item);
      }
    });
    searchList.value = listArr;
  }, 150);
  return {
    handleSearchMenu,
    searchList,
  };
}
