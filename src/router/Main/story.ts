import { getImportMetaRoute } from "@/utils/map-menus";
import { RouteRecordRaw } from "vue-router";
export default {
  path: "/story",
  name: "story",
  children: getImportMetaRoute(
    import.meta.glob("./story/*.ts", { eager: true, import: "default" })
  ),
  meta: { name: '随便聊聊', icon: 'SuccessFilled' },
};
