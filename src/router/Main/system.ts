import { getImportMetaRoute } from "@/utils/map-menus";
import { RouteRecordRaw } from "vue-router";
export default {
  path: "/system",
  name: "system",
  children: getImportMetaRoute(
    import.meta.glob("./system/*.ts", { eager: true, import: "default" })
  ),
  meta: { name: '系统管理', icon: 'Setting' },
};
